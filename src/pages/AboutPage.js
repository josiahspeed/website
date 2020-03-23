import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import projectOne from '../iconsAndImages/lookupDesignModule.png';
import projectTwo from '../iconsAndImages/fieldDesignModule.png';
import projectThree from '../iconsAndImages/BeginPedigreeDesign.png';
import projectFour from '../iconsAndImages/MeetrDesign.png';
import errorMessage from '../iconsAndImages/legoMan.png';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <div className="portfolio">
                <img src={projectOne} alt={errorMessage} ></img>
                <img src={projectTwo} alt={errorMessage} ></img>
                <img src={projectThree} alt={errorMessage} ></img>
                <img src={projectFour} alt={errorMessage} ></img>
            </div>
          

            </Content>
        </div>
    );

}

export default AboutPage;