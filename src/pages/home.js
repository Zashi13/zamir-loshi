import { useState, useEffect } from "react";
import "../css/home.css";

const images = [
    "/assets/aragon.jpg",
    "/assets/damiano.jpg",
    "/assets/patrick.jpg",
    "/assets/luyets.jpg",
    "/assets/leona.jpg",
    "/assets/pyro.jpg",
    "/assets/robin.jpg"
];

export default function Home() {
    document.title = 'Zamir Loshi Photography';
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home">
            <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
            <div className="gradient-overlay"></div>
            <div className="homeHeadlineContainer">
                <h1 className="white">Make the moment of a <strong className="orange">lifetime</strong></h1>
                <h1 className="white">Last <strong className="orange">forever</strong></h1>
            </div>
        </section>
    );
}
