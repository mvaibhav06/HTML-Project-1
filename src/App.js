import "./App.css";
import pic from "./pic.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

function App() {
  return (
    <div className="card">
      <div className="img">
        <img className="pic" src={pic} alt="pic" />
      </div>
      <p style={{ fontSize: "1.5rem" }}>Vaibhav's Project</p>
      <p>Full stack web developer</p>

      <div className="icons">
        <FaSquareFacebook />
        <FaSquareTwitter />
        <FaSquareInstagram />
        <FaSquareYoutube />
      </div>

      <div className="btns">
        <button>Subscribe</button>
        <button>Message</button>
      </div>

      <div>
        <FcLike /> 60k &nbsp;&nbsp;|&nbsp;&nbsp;
        <FcLike /> 20k &nbsp;&nbsp;|&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default App;
