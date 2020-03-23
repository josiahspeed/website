import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import profilePicture from '../iconsAndImages/profilePicture.jpg';
import errorMessage from '../iconsAndImages/legoMan.png';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Josiah. I'm a UI/UX designer and software developer.</p>
            <p>I have a passion for building applications that are not only enjoyable to look at, but to use.</p>

            <img src={profilePicture} alt={errorMessage} className="profilepicture" width="500px"></img>


            <p>Some Stuff Here</p>

            </Content>
        </div>
    );

}

export default HomePage;