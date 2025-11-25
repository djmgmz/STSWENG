export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              {/* Logo Image */}
              <img 
                src="/images/logo.png" 
                alt="SFJ LOGO" 
                className="logo-image"
              />
              <h1>SYNAGOGUE FOR JESUS</h1>
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/impact">What We Do</a></li>
              <li><a href="/blog">Our Stories</a></li>
              <li><a href="/prog">Programs</a></li>
              <li><a href="/donate" className="btn btn-primary">Donate Now</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}