// ------- Components ---------
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CompaniesLogo from "./components/CompaniesLogo";
import About from "./components/About";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Cta from "./components/Cta";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <CompaniesLogo />
      <About />
      <Feature1 />
      <Feature2 />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
