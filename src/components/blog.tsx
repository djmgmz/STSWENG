export default function Blog() {
  const blogPosts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      date: "September 11, 2025",
      category: "Education",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
      image: "/images/1.jpeg",
      readMoreText: "Read Full Story"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      date: "September 11, 2025",
      category: "Education",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
      image: "/images/1.jpeg",
      readMoreText: "Read Full Story"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      date: "September 11, 2025",
      category: "Education",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
      image: "/images/1.jpeg",
      readMoreText: "Read Full Story"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      date: "September 11, 2025",
      category: "Education",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
      image: "/images/1.jpeg",
      readMoreText: "Read Full Story"
    }
  ];

  return (
    <main style={{ paddingTop: '30px' }}>
      <div className="container">
        {/* Hero Section with tight spacing */}
        <div className="section blog-page-section">
          <h1 className="blog-page-title">Our Stories</h1>
          <p className="blog-page-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.  
          </p>
        </div>

        {/* Blog Posts in Rows */}
        <div className="section">
          <div className="blog-posts-list">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post-row">
                <div 
                  className="blog-row-image"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                <div className="blog-row-content">
                  <h3 className="blog-row-title">{post.title}</h3>
                  
                  <div className="blog-row-meta">
                    <span className="blog-row-category">{post.category}</span>
                    <span className="blog-row-date">| {post.date}</span>
                  </div>
                  
                  <p className="blog-row-excerpt">{post.excerpt}</p>
                  
                  <button className="blog-row-read-more">
                    {post.readMoreText}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}