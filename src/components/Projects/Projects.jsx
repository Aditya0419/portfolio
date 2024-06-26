import { useEffect } from 'react';
import './Projects.css';
// import './project';
import wave from './images/wave.png'
import skill3d from './images/skill3d.png'
import wanderlust from './images/wanderlust.png'

function animate() {
    const CONTAINER = document.querySelector('.container')
    const CARDS = document.querySelectorAll('article')

    const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 20,
        gap: 32,
        vertical: false,
        opacity: 0,
    }

    const PROXIMITY = 10

    const UPDATE = (event) => {
        // get the angle based on the center point of the card and pointer position
        for (const CARD of CARDS) {
            // Check the card against the proximity and then start updating
            const CARD_BOUNDS = CARD.getBoundingClientRect()
            // Get distance between pointer and outerbounds of card
            if (
                event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
                event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
                event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
                event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity) {
                // If within proximity set the active opacity
                CARD.style.setProperty('--active', 1)
            } else {
                CARD.style.setProperty('--active', CONFIG.opacity)
            }
            const CARD_CENTER = [
                CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
                CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5
            ]
            let ANGLE = Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180 / Math.PI
            ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
            CARD.style.setProperty('--start', ANGLE + 90)
        }

    }

    document.body.addEventListener('pointermove', UPDATE)

    const RESTYLE = () => {
        CONTAINER.style.setProperty('--gap', CONFIG.gap)
        CONTAINER.style.setProperty('--blur', CONFIG.blur)
        CONTAINER.style.setProperty('--spread', CONFIG.spread)
        CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row')
    }



    RESTYLE()
    UPDATE()

}

export default function Projects() {

    useEffect(() => {
        animate();
    })

    return (
        <>

            <div className="projects" id="projects">
                <p className='projectHead'>Recent Works</p>
                <div className="container">
                    <article>
                        <div className="glows"></div>
                        <span className="header">
                            <img src={wave} alt="" width={"400rem"} />
                        </span>
                        <span className="badge">
                            <span>Html, Css, JS</span>
                        </span>
                        <h2>Clothing Brand Website</h2>
                        <a href="https://aditya0419.github.io/Wave-Clothing-Brand-Website-/main.html" target='_blank'>Visit</a>
                    </article>

                    <article>
                        <div className="glows"></div>
                        <span className="header">
                            <img src={skill3d} alt="" width={"400rem"} />
                        </span>
                        <span className="badge">
                            <span>Html, Css, JS</span>
                        </span>
                        <h2>Skill3d.in</h2>
                        <a href="https://skill3d.in/" target='_blank'>Visit</a>
                    </article>

                    <article>
                        <div className="glows"></div>
                        <span className="header">
                            <img src={wanderlust} alt="" width={"400rem"} />
                        </span>
                        <span className="badge">
                            <span>Node.js , Express.js , EJS , MongoDB</span>
                        </span>
                        <h2>WanderLust: Airbnb clone</h2>
                        <a href="https://github.com/Aditya0419/Travel-Accommodation-Platform-" target='_blank'>Visit</a>
                    </article>
                </div>
            </div>
        </>
    );

}
