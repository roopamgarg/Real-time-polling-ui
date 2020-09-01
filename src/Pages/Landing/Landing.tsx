import React from 'react';
import {Button} from 'antd';
import { Link } from 'react-router-dom';
import Image from "../../assets/images/poll_hero.svg";
const Landing : React.FC<{}> = () => {
    return (
        <div className="landing">
            <div className="landing__header">
            <h2>Real Time Polling for any of your Question</h2>
            <div className="landing__btn">
            <Link to="/create"><Button>Create A New Poll Now</Button></Link>
            </div>
            </div>
            <div className="landing__image">
                <img src={Image} alt="hero"/>
            </div>
        </div>
    );
}

export default Landing;