import ContactImg from "../assets/contact.jpg";
import { NavLink } from "react-router-dom";

export default function Contact (){
    return(
        <main className="center">
            <div className="textContainer">
            <h3>Want to work together?</h3>
            <p>Tell me what you need and I am happy to send you an offer.</p><br></br>
            <a href="mailto:info@zamir-loshi.ch">info@zamir-loshi.ch</a><br></br><br></br>
            <NavLink to="/impressum">Impressum</NavLink>
            </div>
            <img id="portrait" src={ContactImg}></img>
        </main>
    );
}