"use client";

import React, { useState, useEffect } from "react";
import styles from "./blog_modal.module.css";
import { Blog } from "@/types/blogs";
import { saveBlog, updateBlog, deleteBlog } from "@/lib/api/blogs";
import TipTapEditor from "./TipTapEditor";
import { mutate } from "swr";

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    blog: Blog;
    isAdd: boolean;
}

export default function BlogModal({ isOpen, onClose, blog, isAdd }: BlogModalProps) {
    const [formData, setFormData] = useState<Blog>(blog);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFormData(blog);
    }, [blog]);

    if (!isOpen) return null;

    const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
        alert("Title and content are required.");
        return;
    }

    setLoading(true);
    try {
        if (isAdd) {
        await saveBlog({
            ...formData,
            date_created: new Date().toISOString(),
        });
        } else {
        await updateBlog(formData._id!, formData);
        }

        mutate("/api/blogs");
        onClose();
    } catch (error) {
        console.error("Save error:", error);
        alert("Error saving blog");
    } finally {
        setLoading(false);
    }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2>{isAdd ? "Create Blog Post" : "Edit Blog Post"}</h2>

                <label className={styles.label}>Header Image</label>
                <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const reader = new FileReader();
                    reader.onloadend = () => {
                    setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
                    };
                    reader.readAsDataURL(file);
                }}
                />

                {formData.imageUrl && (
                <img src={formData.imageUrl} className={styles.previewImage} alt="Preview" />
                )}

                <label className={styles.label}>Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={styles.input}
                    placeholder="Enter blog title"
                />

                <label className={styles.label}>Content</label>
                <TipTapEditor
                    value={formData.content}
                    onChange={(val) => setFormData({ ...formData, content: val })}
                />

                <div className={styles.actions}>
                    <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
                    <button onClick={handleSave} className={styles.saveButton} disabled={loading}>
                        {loading ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
}
