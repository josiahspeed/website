import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Josiah. I'm a UI/UX designer and software developer.</p>

            <p>Currently looking for an ingaging role as a UI/UX designer.</p>

            <p>Some Stuff Here</p>

            </Content>
        </div>
    );

}

export default HomePage;