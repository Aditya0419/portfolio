import './contact.css'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Axios from 'axios';




export default function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        message: "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormData((currData) => {
            return {
                ...currData,
                [fieldName]: fieldValue
            }
        });
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        await Axios.post("https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/contactAdd/insert",
            formData);
        setFormData({
            email: "",
            phone: "",
            message: "",
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="contact">
                <form onSubmit={handleSubmit}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                            '@media(max-width:600px)': { '& .MuiTextField-root': { m: 1, width: '35ch' } }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            className='textfield'
                            name="email"
                            type='email'
                            value={formData.email}
                            onChange={handleInputChange} /><br />
                        <TextField
                            id="outlined-number"
                            label="Phone"
                            type="number"
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                        /><br />
                        <TextField
                            id="outlined-textarea"
                            label="Message"
                            placeholder="Message"
                            multiline
                            rows={4}
                            className='textfield'
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}

                        />
                    </Box>
                    <div className="contact-submit">
                        <button className='submit-contact' >
                            <span class="button_top"> Submit
                            </span>
                        </button>
                    </div>
                </form>

            </div>
        </ThemeProvider>
    );
}