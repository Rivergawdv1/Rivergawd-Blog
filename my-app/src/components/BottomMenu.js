import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Twitch, Twitter, Youtube} from "react-bootstrap-icons";


const randomName = ['Rivergawd', 'Rivbr', 'Riv3r', 'R1V3RGOD'];

const BottomMenu = () => {
    const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        // Generate a random index when the component mounts
        const newIndex = Math.floor(Math.random() * randomName.length);
        setRandomIndex(newIndex);
    }, []);

    return (
        <footer className="d-flex justify-content-center py-3 bottomMenu">
            Created By: {randomName[randomIndex]}
            <div className="px-2">
                    <a href="https://www.youtube.com/channel/UC5GOtJNszLk1shnjuIRZcAA" rel="noopener noreferrer">
                        <Youtube className="YT"/>
                    </a>
                    <a href="https://www.twitch.tv/Rivergawd" target="_blank" rel="noopener noreferrer">
                        <Twitch className="ttv"/>
                    </a>
                    <a href="https://www.twitter.com/Rivergawd1" target="_blank" rel="noopener noreferrer">
                        <Twitter className="twt"/>
                    </a>
            </div>
        </footer>
    );
}

export default BottomMenu;
