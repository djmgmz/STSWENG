"use client";

import React, { useState, useEffect } from "react";
import styles from "./blog_modal.module.css";
import { Blog } from "@/types/blogs";
import { saveBlog, updateBlog } from "@/lib/api/blogs";
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
                    imageUrl: "", // ensure no image is passed
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

                {/* Title */}
                <label className={styles.label}>Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={styles.input}
                    placeholder="Enter blog title"
                />

                {/* Content Editor */}
                <label className={styles.label}>Content</label>
                <TipTapEditor
                    value={formData.content}
                    onChange={(val) => setFormData({ ...formData, content: val })}
                />

                {/* Action Buttons */}
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
