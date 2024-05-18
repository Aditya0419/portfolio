import './emailInput.css'
import { useState } from 'react'
import Axios from 'axios';

export default function EmailInput() {
    const [emailData, setEmail] = useState({
        email: ""
    });

    let handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setEmail((currData) => {
            return {
                ...currData,
                [fieldName]: fieldValue
            }
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(emailData));
        Axios.post("https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/contactAdd/insert",
            emailData).then(res => console.log(res));
        setEmail({
            email: ""
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="input-container">

                <input required="" placeholder="Email Address" type="email" name="email" value={emailData.email} onChange={handleChange} />
                <button className="invite-btn" type="submit">
                    Get Notified
                </button>

            </div>
        </form>
    );
}