export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SYNAGOUGE FOR JESUS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: sample@email.org</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Address: Manila, Philippines</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#donate">Donate</a></li>
              {/*<li><a href="#volunteer">Volunteer</a></li>*/}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Synagouge For Jesus, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}