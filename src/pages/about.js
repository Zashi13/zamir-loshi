import { NavLink } from "react-router-dom";
import Portrait from "../assets/portrait.JPG";
import "../css/about.css";
export default function About () {
    return(
        <main className="center">
            <div className="textContainer">
            <h2>Hi! I'm Zamir</h2>
            <p>I’m a sports photographer and videographer, photojournalist and amateur triathlete.</p><br></br>
            <p>I’m also a co-founder of <a href="https://www.racingvisuals.ch" target="_blank">racingvisuals.ch</a> – a Swiss motorsports-photography agency with its roots in karting.</p><br></br>
            <h3>Why sports?</h3>
            <p>It’s all about emotions. Win or lose, there is nothing more exhilarating than competing and performing at your highest level. Capturing that in a creative way is to me a great creative challenge. Combining all disciplines from landscape, street photography to portrait and of course action photography.</p>
            <br></br><br></br>
            <NavLink to="/portfolio">Check out my portfolio</NavLink>
            </div>
            <img id="portrait" src={Portrait}></img>
        </main>
    );
}