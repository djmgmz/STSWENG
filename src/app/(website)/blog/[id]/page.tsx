import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default async function BlogPostPage({ params }: any) {
  const { id } = params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
    cache: "no-store",
  });

  const post = await res.json();

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: "30px" }}>
        <div className="section">
          <h1 className="single-blog-title">{post.title}</h1>

          <p className="single-blog-date">
            {new Date(post.date_created).toLocaleDateString()}
          </p>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="single-blog-image"
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          )}

          <div
            className="single-blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
