import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact =()=> {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18fc256e-71d2-49e3-a8bf-46b49cfbf649"); {/* disini untuk mengubah api gmail*/}

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us a Message <img src={msg_icon} alt="message icon" /></h3>
        <p>
        I am available to help and provide assistance whenever you need it. Feel free to contact me anytime, and I'll be ready to work together to resolve problems quickly and efficiently. This way, you can continue your activities without any obstacles.

        Let's work together to find innovative solutions, leveraging the knowledge and expertise of FTIK (Faculty of Technology and Information, I assume?) to tackle complex challenges. I'm committed to providing support and guidance to ensure our collaboration is productive and successful.

        </p>
        
          <li><img src={phone_icon} alt="phone icon" /> +62 88123445760</li>
          <li><img src={mail_icon} alt="mail icon" /> kelompok7@gmail.com</li>
          <li><img src={location_icon} alt="location icon" /> Jl. Aria Santika No.43, Margasari, Kec. Karawaci, Kota Tangerang, Banten 15113</li>
        
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}> 
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>
            <img src={white_arrow} alt="arrow icon" /> Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
