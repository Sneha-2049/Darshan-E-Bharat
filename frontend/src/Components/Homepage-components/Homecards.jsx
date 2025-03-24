import React from 'react'
import "./HomeCard.css"
import card_Data from '../../assets/Featuredata'
import { Link } from 'react-router-dom';

function Homecards() {
    console.log(card_Data)
    return (
        <div className='features-container' id='features'>
            {
                card_Data.map((features, index) => (
                    <div className='features-card'>
                        <h1 className='feature-head'>{features.title}</h1>
                        <div className='feature-description'>
                            <div className='descriptions'>
                                <h1>{features.heading}</h1>
                                <p>{features.description}</p>
                                <Link to={features.link}><button className='feature-button'>{features.button}</button></Link>
                            </div>
                            <div className='feature-image' style={{ backgroundImage: `url(${features.img})` }}></div>
                        </div>


                    </div>


                ))
            }
        </div>
    )
}

export default Homecards