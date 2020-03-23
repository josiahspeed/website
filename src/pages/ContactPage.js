import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Josiah. I'm a UI/UX designer and software developer.</p>

            <p>Currently looking for an ingaging role as a UI/UX designer.</p>

            <p>Some Stuff Here</p>

            <p>My latest work was for Progeny Genetics where I worked for almost 3 years.<a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

            <p>Some stuff Here also <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default ContactPage;