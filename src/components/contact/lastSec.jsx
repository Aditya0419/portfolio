import Contact from "./contact";
import './lastSec.css'

export default function LastSec() {
    return (
        <div className="lastSec" id="lastsec">
            <div className="lastsec-desc">
                <p className="lastsec-head">Contact Me</p>
                <p className="lastsec-para">If you're looking for a dedicated and skilled web developer to bring your Digital Vision to life,
                    you've come to the right place. Whether you need a dynamic front-end, a robust back-end, efficient
                    database management, or seamless deployment, I have the expertise to help. Fill out the form below to
                    get in touch, and let's discuss how we can turn your ideas into reality. I look forward to collaborating
                    with you on your next project!</p>
            </div>
            <Contact />
        </div>
    );
}