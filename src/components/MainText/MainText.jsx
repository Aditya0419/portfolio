import EmailInput from "../emailInput/emailInput.jsx";
import './MainText.css'

export default function MainText() {
    return (
        <>
            <div className="intro-heading">
                <p className="introStart">Hi, my name is</p>
                <p className="intro-name">
                    Aditya Mahajan
                </p>
                <p className="intro-para">I'm a Computer Engineer Specializing in Web Development 
                (and ocassionally designing) Currently I'm focused on building exceptional digital experiences . 
                </p>
                <EmailInput></EmailInput>
            </div>
        </>
    );
}