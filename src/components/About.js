import Ellipse39 from "../assets/Ellipse 39.png";
import Ellipse40 from "../assets/Ellipse 40.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about">
        <div className="row1">
          <h2>What is GPT-3</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His <br /> defective nor convinced residence own.
            Connection has put impossible own apartments <br /> boisterous. At
            jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by.
          </p>
        </div>
        <div className="row2">
          <h2>
            The possibilities are beyond <br /> your imagination
          </h2>
          <a href="/">Explore The Library</a>
        </div>
        <div className="row3">
          <div className="col">
            <h4>Chatbots</h4>
            <p>
              We so opinion friends me message as <br /> delight. Whole front do
              of plate heard oh <br /> ought.
            </p>
          </div>
          <div className="col">
            <h4>Knowledgebase</h4>
            <p>
              At jointure ladyship an insisted so humanity <br /> he. Friendly
              bachelor entrance to on by. As <br /> put impossible own
              apartments b
            </p>
          </div>
          <div className="col">
            <h4>Education</h4>
            <p>
              At jointure ladyship an insisted so humanity <br /> he. Friendly
              bachelor entrance to on by. As <br /> put impossible own
              apartments b
            </p>
          </div>
        </div>
        <img className="about-blur1" src={Ellipse39} alt="Ellipse39" />
        <img className="about-blur2" src={Ellipse40} alt="Ellipse40" />
      </div>
    </section>
  );
};

export default About;
