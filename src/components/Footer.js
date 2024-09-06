import GPT3 from "../assets/GPT-3.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-heading">
        <h1>
          Do you want to step in to the <br /> future before others
        </h1>
        <a href="/">Request Early Access</a>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <img src={GPT3} alt="footer logo" />
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div>
          <h6>Links</h6>
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </div>
        <div>
          <h6>Company</h6>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </div>
        <div>
          <h6>Get in touch</h6>
          <li>
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </div>
      </div>
      <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
    </section>
  );
};

export default Footer;
