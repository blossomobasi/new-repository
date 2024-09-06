import HeaderIllusion from "../assets/Header Illustration.png";
import Group81 from "../assets/Group 81.png";
import blur01 from "../assets/blur-01.png";

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <h1 className="main-title">
          Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. <br />
          Not thoughts all exercise blessing. Indulgence way <br /> everything
          joy alteration boisterous the attachment. Party <br /> we years to
          order allow asked of.
        </p>
        <form>
          <div className="form-group ">
            <input
              className="main-input"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="main-btn">Get Started</button>
          </div>
        </form>
        <div className="users">
          <img src={Group81} alt="users" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="main-img">
        <img
          style={{ width: "567px", height: "601px" }}
          src={HeaderIllusion}
          alt="mask"
        />
      </div>
      <img className="blur01" src={blur01} alt="Blur" />
    </div>
  );
};

export default Home;
