import rectangle22 from "../assets/Rectangle 22.png";
import rectangle23 from "../assets/Rectangle 23.png";
import rectangle24 from "../assets/Rectangle 24.png";
import rectangle25 from "../assets/Rectangle 25.png";
import rectangle26 from "../assets/Rectangle 26.png";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog">
        <h1>
          A lot is happening, <br /> We are blogging about it.
        </h1>
        <div className="main-blog">
          {/* ----------First column ---------- */}
          <div className="col1">
            <img src={rectangle22} alt="machine language codes" />
            <div className="col-content">
              <p>Sep 26, 2021</p>
              <h3>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it
                <br /> is?
              </h3>
              <a href="/article">Read Full Article</a>
            </div>
          </div>
          {/* ---------- Second Column ---------- */}
          <div className="col2">
            <div className="row1">
              <img src={rectangle23} alt="machine language codes" />
              <div className="row1-content">
                <p>Sep 26, 2021</p>
                <h4>
                  GPT-3 and Open AI is the <br /> future. Let us exlore how it
                  <br /> is?
                </h4>
                <a href="/article">Read Full Article</a>
              </div>
            </div>
            <div className="row2">
              <img src={rectangle24} alt="machine language codes" />
              <div className="row2-content">
                <p>Sep 26, 2021</p>
                <h4>
                  GPT-3 and Open AI is the <br /> future. Let us exlore how it
                  <br /> is?
                </h4>
                <a href="/article">Read Full Article</a>
              </div>
            </div>
          </div>
          {/* ---------- Third Column ---------- */}
          <div className="col3">
            <div className="row1">
              <img src={rectangle25} alt="machine language codes" />
              <div className="row1-content">
                <p>Sep 26, 2021</p>
                <h4>
                  GPT-3 and Open AI is the <br /> future. Let us exlore how it
                  <br /> is?
                </h4>
                <a href="/article">Read Full Article</a>
              </div>
            </div>
            <div className="row2">
              <img src={rectangle26} alt="machine language codes" />
              <div className="row2-content">
                <p>Sep 26, 2021</p>
                <h4>
                  GPT-3 and Open AI is the <br /> future. Let us exlore how it
                  <br /> is?
                </h4>
                <a href="/article">Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
