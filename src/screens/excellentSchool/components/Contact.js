import React, { useCallback, useState } from "react";
import {
  Button, Form, FormField,
  Icon, Input, TextArea
} from "semantic-ui-react";
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState({ Name: '', Email: '', message: '' });

  const handleChange = useCallback((e, { name, value }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    setSubmittedData({ Name: formData.name, Email: formData.email, Message: formData.message });
  }, [formData]);
  console.log(submittedData, 'submittedData');

  return (
    <div className="Contact">
      <div>
        <p>
          <Icon size="large" name="map marker alternate" />
          <span>
            Tamil Nadu,India,<br />
            600001.
          </span>
        </p>
        <p>
          <Icon size="large" name="phone" />
          {/* <span>1234567890</span> */}
          <a fontas="body" href="pno:1234567890">
            1234567890
          </a>
        </p>
        <p>
          <Icon size="large" name="mail" />
          {/* <span>excellentschool@gmail.com</span> */}
          <a fontas="body" href="mailto:excellentschool@gmail.com">
            excellentschool@gmail.com
          </a>

        </p>
        {/* <iframe
        title="location"
        width="370"
        height="270"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d156.53698608333156!2d79.1731484!3d10.0050906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b003c976a4de251%3A0xacb9306936dd37b5!2sKarakathikottai%20Government%20School!5e0!3m2!1sen!2sin!4v1690028202575!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      /> */}
      </div>
      <div>
        <h2>Send Message</h2>
        <Form onSubmit={handleSubmit}>
          <FormField
            control={Input}
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            control={Input}
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            control={TextArea}
            placeholder='Type Your Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
          <Button content='Submit' />
        </Form>
      </div>
    </div>
  );

};

export default Contact;
