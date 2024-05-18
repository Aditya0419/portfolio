import './skills.css'
import Robot from './robot';
import ImageScroll from './imageScroll';
import css from './images/css.png'

export default function Skills() {

    

    return (
        <>
        <div className="skillSec" id="skills">

            <div className="skill-main">
                <p className='skillset'>SkillSet</p>
                <p className='skillset-desc'>Equipped with a versatile arsenal of web development skills spanning multiple domains,
                    I am your go-to person for transforming concepts into dynamic digital solutions.
                    Whether it's frontend finesse, backend brilliance, or full-stack mastery,
                    I thrive on tackling any challenge thrown my way. </p>
                <div className='robot'>
                    <Robot />
                </div>
            </div>

            <div className="skill-content">
                <div>
                    <span className="material-symbols-outlined skill-logo">
                        iframe
                    </span>
                    <p className="skillhead">Frontend</p>
                    <p className='skilldisc'>I specialize in crafting captivating user interfaces using HTML5, CSS3, 
                    and JavaScript. With expertise in modern frameworks like React, I ensure seamless experiences across 
                    devices, prioritizing responsive design and intuitive user interfaces.</p>
                </div>
                <div>
                    <span className="material-symbols-outlined skill-logo">
                        settings
                    </span>
                    <p className="skillhead">Backend</p>
                    <p className='skilldisc'>Behind the scenes, I architect robust server-side solutions with Node.js 
                    and Django. My focus on RESTful APIs and backend frameworks like Express.js ensures scalable and 
                    secure systems, handling complex business logic with efficiency.</p>
                </div>
                <div>
                    <span className="material-symbols-outlined skill-logo">
                        database
                    </span>
                    <p className="skillhead">Databases</p>
                    <p className='skilldisc'>I excel in managing SQL and NoSQL databases, optimizing queries and schemas 
                    for performance and reliability. From MySQL to MongoDB, I ensure data integrity while maximizing 
                    efficiency, empowering applications with resilient data layers.</p>
                </div>
                <div>
                    <span className="material-symbols-outlined skill-logo">
                        cloud
                    </span>
                    <p className="skillhead">Tools</p>
                    <p className='skilldisc'>Streamlining development workflows with Docker for containerization and 
                    AWS for cloud deployment. Proficient in deploying and scaling applications with ease, ensuring 
                    seamless integration and collaboration.</p>
                </div>
            </div>
            
        </div>
        <div className="skill-img">
                <ImageScroll/>
        </div>
        </>
    );
}