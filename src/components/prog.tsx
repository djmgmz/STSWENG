'use client';

import { useState } from 'react';

export default function Prog() {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const programs = [
    {
      title: "Community Empowerment",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      category: "Education",
      location: "Manila",
      image: "/images/1.jpeg",
      fullDescription: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,

      objectives: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      activities: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ]
    },
    {
      title: "Youth Development",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      category: "Education",
      location: "Cebu",
      image: "/images/1.jpeg",
      fullDescription: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,

      objectives: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      activities: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ]
    },
    {
      title: "Health & Wellness",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      category: "Health",
      location: "Davao",
      image: "/images/1.jpeg",
      fullDescription: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,

      objectives: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      activities: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ]
    },
    {
      title: "Livelihood Support",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      category: "Economic",
      location: "Manila",
      image: "/images/1.jpeg",
      fullDescription: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,

      objectives: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      activities: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ]
    }
  ];

  const handleLearnMore = (index: number) => {
    if (expandedProgram === index) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(index);
      setTimeout(() => {
        const element = document.getElementById(`program-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <main style={{ paddingTop: '30px' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="section">
          <h1 className="section-title">Our Programs</h1>
          <p className="hero-description" style={{ textAlign: 'center', color: 'var(--dark-gray)', marginBottom: '-5rem' }}>
            Comprehensive initiatives designed to create lasting change in communities across the Philippines
          </p>
        </div>

        {/* Programs Grid */}
        <div className="section">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {programs.map((program, index) => (
              <div key={index} id={`program-${index}`}>
                {expandedProgram !== index ? (
                  // Collapsed View - Grid Item
                  <div 
                    className="program-card"
                    style={{ '--program-bg': `url(${program.image})` } as React.CSSProperties}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <h3 className="program-title" style={{ margin: 0, flex: 1 }}>{program.title}</h3>
                    </div>
                    
                    <p className="program-description">{program.description}</p>
                    
                    <div className="program-meta">
                      <span className="program-category">{program.category}</span>
                      <span className="program-location">{program.location}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleLearnMore(index)}
                      >
                        Learn More
                      </button>
                      <a href="/donate" className="btn btn-secondary">Support This Program</a>
                    </div>
                  </div>
                ) : (
                  // Expanded View - Full Width
                  <div style={{ 
                    background: 'var(--warm-white)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px var(--shadow-medium)'
                  }}>
                    {/* Hero Section */}
                    <div 
                      style={{ 
                        background: `linear-gradient(rgba(93, 46, 46, 0.8), rgba(93, 46, 46, 0.8)), url(${program.image}) center/cover`,
                        padding: '60px 40px',
                        color: 'white',
                        position: 'relative'
                      }}
                    >
                      <button
                        onClick={() => setExpandedProgram(null)}
                        style={{
                          position: 'absolute',
                          top: '20px',
                          left: '20px',
                          background: 'rgba(255,255,255,0.2)',
                          border: '2px solid white',
                          color: 'white',
                          padding: '10px 20px',
                          borderRadius: '25px',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                        }}
                      >
                        ← Back
                      </button>

                      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700', marginTop: '30px' }}>
                        {program.title}
                      </h1>
                      <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.95 }}>
                        {program.description}
                      </p>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
                          {program.category}
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
                          📍 {program.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '40px' }}>

                      {/* Content Grid */}
                      <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
                        {/* Left Column */}
                        <div>
                          <h2 style={{ 
                            fontSize: '1.8rem',
                            color: 'var(--primary-maroon)',
                            marginBottom: '1.5rem',
                            fontWeight: '600'
                          }}>
                            About This Program
                          </h2>
                          <div style={{ 
                            color: 'var(--dark-gray)', 
                            lineHeight: '1.8', 
                            fontSize: '1.05rem',
                            whiteSpace: 'pre-line',
                            marginBottom: '2rem'
                          }}>
                            {program.fullDescription}
                          </div>

                          <h3 style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--primary-maroon)', 
                            marginBottom: '1rem',
                            fontWeight: '600'
                          }}>
                            Key Activities
                          </h3>
                          <ul style={{ 
                            listStyle: 'none', 
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                          }}>
                            {program.activities.map((activity, idx) => (
                              <li key={idx} style={{ 
                                padding: '1rem',
                                background: 'var(--light-gray)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--primary-maroon)'
                              }}>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                          <h3 style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--primary-maroon)', 
                            marginBottom: '1.5rem',
                            fontWeight: '600'
                          }}>
                            Program Objectives
                          </h3>
                          <ul style={{ 
                            listStyle: 'none', 
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                          }}>
                            {program.objectives.map((objective, idx) => (
                              <li key={idx} style={{ 
                                padding: '1.5rem',
                                background: 'var(--warm-white)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px var(--shadow-light)',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                                border: '1px solid var(--border-color)'
                              }}>
                                <span style={{ 
                                  fontSize: '1.5rem', 
                                  color: 'var(--primary-maroon)',
                                  fontWeight: '700',
                                  minWidth: '30px'
                                }}>
                                  {idx + 1}.
                                </span>
                                <span style={{ lineHeight: '1.6' }}>{objective}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Support CTA */}
                          <div style={{
                            marginTop: '2rem',
                            padding: '2rem',
                            background: 'var(--primary-maroon)',
                            borderRadius: '10px',
                            color: 'white',
                            textAlign: 'center'
                          }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                              Support This Program
                            </h3>
                            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                              Your donation helps us continue making a difference in the lives of those we serve.
                            </p>
                            <a href="/donate" className="btn btn-secondary" style={{ display: 'inline-block' }}>
                              Donate Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}