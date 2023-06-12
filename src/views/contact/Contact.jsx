import ContentLink from "../../components/content-link/ContentLink";

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact me! :)</h1>
      <div className="contact-mail">
        <h3 className="contact-text">Mail</h3>
        <p>ngraviotto@gmail.com</p>
      </div>

      <div className="contact-RRSS">
        <h3 className="contact-text">RRSS</h3>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
