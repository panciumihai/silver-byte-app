import { FC, FormEvent, useState } from 'react';
import Input from '../Input/Input';
import Wrapper from '../Wrapper/Wrapper';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

import ContactImage from '../../assets/images/team/mihai.jpeg';
import styles from './ContactUsSection.module.scss';
import Button from '../Button/Button';

interface ContactUsSectionProps {}

const ContactUsSection: FC<ContactUsSectionProps> = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const toastId = toast.loading('Sending the message...', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    try {
      await emailjs.sendForm('service_2okrmlb', 'template_1xrtgjk', event.currentTarget, 'nwYNHK4z6oQM9TCmF').then(
        (result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');

          toast.update(toastId, {
            render: 'Message sent successfully!',
            isLoading: false,
            type: 'success',
            progress: 0,
          });
        },
        (error) => {
          console.log(error.text);
          toast.update(toastId, {
            render: 'Oops! Something went wrong.',
            type: 'error',
            isLoading: false,
            progress: 0,
          });
        },
      );
    } catch (error) {
      toast.update(toastId, {
        render: 'Oops! Something went wrong.',
        type: 'error',
        isLoading: false,
        progress: 0,
      });
    }
  };

  return (
    <Wrapper className={styles.wrapper} id="#contact">
      <form onSubmit={submitHandler} className={styles.form}>
        <h1>Tell us about your project</h1>
        <p>
          You already got the design? Or you have some questions? Send an email below and let’s get the things done.
        </p>

        <div className={styles.inputsContainer}>
          <Input
            value={name}
            name={'from_name'}
            placeHolder={'Your Name'}
            onChange={(e) => setName(e.currentTarget.value)}
          ></Input>

          <Input
            value={phone}
            type="phone"
            name={'phone'}
            placeHolder={'Phone Number (optional)'}
            onChange={(e) => setPhone(e.currentTarget.value)}
          ></Input>
        </div>
        <Input
          value={email}
          type="email"
          name={'from_email'}
          placeHolder={'Your Email'}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></Input>
        <Input value={subject} placeHolder={'Subject'} onChange={(e) => setSubject(e.currentTarget.value)}></Input>
        <Input
          className={styles.textarea}
          isTextarea={true}
          value={message}
          name={'message'}
          placeHolder={'Your message'}
          onChange={(e) => setMessage(e.currentTarget.value)}
        ></Input>
        <ReCAPTCHA sitekey="6LeE4qgfAAAAAMxaET-n7XLgTM1HF_qajkIMJ-NG" theme="dark"></ReCAPTCHA>
        <Button className={styles.button} size="small" fullWidth={false} onClick={() => null}>
          Send Message
        </Button>
      </form>
      <div className={styles.imageContainer}>
        <img src={ContactImage} alt={'Contact'} />
      </div>
    </Wrapper>
  );
};

export default ContactUsSection;
