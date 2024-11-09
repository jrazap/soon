import clock from "./assets/clock.svg";
import clockwise from "./assets/clock.gif";
import logo from "./assets/logo.webp";
import BgVideo from "./components/bg-video";
import SocialLinks from "./components/social-links";
import Copyright from "./components/copyright";
function App() {
  return (
    <div className="App">
      <BgVideo />
      <section className="clock">
        <div className="text">
          <h2 className="txt1">OUR NEW SITE IS</h2>
          <h1>
            COMING <br />
            SOON
          </h1>
          <h2 className="txt2">STAY TUNED!</h2>
        </div>
        <a href="https://jrazap.com/" aria-label="jrazap-logo">
          <img className="logo" src={logo} alt="" />
        </a>
        <img className="parts" src={clock} alt="" />
        <img className="clockwise" src={clockwise} alt="" />
        <SocialLinks />
        <Copyright />
      </section>
    </div>
  );
}

export default App;
