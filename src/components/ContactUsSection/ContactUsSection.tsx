import { FC, useState } from 'react';
import Input from '../Input/Input';
import Wrapper from '../Wrapper/Wrapper';

import ContactImage from '../../assets/images/team/mihai.jpeg';
import styles from './ContactUsSection.module.scss';
import Button from '../Button/Button';

interface ContactUsSectionProps {}

const ContactUsSection: FC<ContactUsSectionProps> = (props) => {
  const {} = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles.form}>
        <h1>Tell us about your project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora. Velit dicta veniam error reiciendis?
          Itaque dolore, deserunt nemo nobis cumque quam ratione fugit veritatis excepturi libero rerum nihil omnis!
        </p>

        <div className={styles.inputsContainer}>
          <Input value={name} placeHolder={'Your Name'} onChange={(e) => setName(e.currentTarget.value)}></Input>

          <Input
            value={phone}
            type="phone"
            placeHolder={'Phone Number'}
            onChange={(e) => setPhone(e.currentTarget.value)}
          ></Input>
        </div>
        <Input
          value={email}
          type="email"
          placeHolder={'Your Email'}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></Input>
        <Input value={subject} placeHolder={'Subject'} onChange={(e) => setSubject(e.currentTarget.value)}></Input>
        <Input
          className={styles.textarea}
          isTextarea={true}
          value={message}
          placeHolder={'Your message'}
          onChange={(e) => setMessage(e.currentTarget.value)}
        ></Input>
        <Button className={styles.button} size="small" fullWidth={false} onClick={() => null}>
          Send Message
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={ContactImage} alt={'Contact'} />
      </div>
    </Wrapper>
  );
};

export default ContactUsSection;
