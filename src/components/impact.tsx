export default function Impact() {
  const impactStories = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.",
      image: "/images/1.jpeg"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.",
      image: "/images/1.jpeg"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.",
      image: "/images/1.jpeg"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.",
      image: "/images/1.jpeg"
    }
  ];

  return (
    <main style={{ paddingTop: '30px' }}>
      <div className="container">
        {/* Hero Section with tight spacing */}
        <div className="section impact-page-section">
          <h1 className="impact-page-title">What We Do</h1>
          <p className="impact-page-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. 
            Ex sapien vitae pellentesque sem placerat in id.
          </p>
        </div>

        {/* Impact Stories Grid */}
        <div className="section">
          <div className="grid grid-cols-2">
            {impactStories.map((story, index) => (
              <div key={index} className="impact-story-card">
                <div 
                  className="impact-story-image"
                  style={{
                    backgroundImage: `url(${story.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px',
                    borderRadius: '10px 10px 0 0'
                  }}
                ></div>
                <div className="impact-story-content">
                  <h3 className="impact-story-title">{story.title}</h3>
                  <p className="impact-story-description">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}