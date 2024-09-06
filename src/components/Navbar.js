import NavLogo from "../assets/GPT-3.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/">
          <img src={NavLogo} alt="gpt-3" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">What is GPT</a>
        </li>
        <li>
          <a href="/">Open Ai</a>
        </li>
        <li>
          <a href="/">Case Studies</a>
        </li>
        <li>
          <a href="/">Library</a>
        </li>
      </ul>
      <div className="nav-btns">
        <button id="sign-in">Sign in</button>
        <button id="sign-up">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
