import { FC, useState } from 'react';
import Input from '../Input/Input';
import Wrapper from '../Wrapper/Wrapper';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

import ContactImage from '../../assets/images/team/mihai.jpeg';
import styles from './ContactUsSection.module.scss';
import Button from '../Button/Button';

import { SubmitHandler, useController, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const formSchema: yup.SchemaOf<ContactFormData> = yup.object({
  name: yup.string().required('You forgot to tell us your name'),
  phone: yup
    .string()
    .test('len', 'The phone number is too short', (val) =>
      val === undefined ? true : val.length === 0 || val.length >= 10,
    )
    .ensure(),
  email: yup
    .string()
    .email('This is not a valid email address')
    .required('This field is required in order to respond back'),
  subject: yup.string().max(200, 'Exceeded the characters limit').required('Required field'),
  message: yup.string().min(50, 'Minimum 50 characters are required').required('Required field'),
});

interface ContactUsSectionProps {}

const ContactUsSection: FC<ContactUsSectionProps> = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  const { field: nameField } = useController({ name: 'name', control, defaultValue: '' });
  const phoneController = useController({ name: 'phone', control, defaultValue: '' });
  const emailController = useController({ name: 'email', control, defaultValue: '' });
  const subjectController = useController({ name: 'subject', control, defaultValue: '' });
  const messageController = useController({ name: 'message', control, defaultValue: '' });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  //event: FormEvent<HTMLFormElement>
  const submitHandler: SubmitHandler<ContactFormData> = async (data: ContactFormData) => {
    // event.preventDefault();
    const toastId = toast('Sending the message...', { isLoading: true });

    try {
      await emailjs.send('service_2okrmlb', 'template_1xrtgjk', data, 'nwYNHK4z6oQM9TCmF').then(
        (result) => {
          console.log(result.text);

          toast.update(toastId, {
            render: 'Message sent successfully!',
            isLoading: false,
            type: 'success',
            autoClose: 5000,
          });
          reset();
        },
        (error) => {
          console.log(error.text);
          toast.update(toastId, {
            render: 'Oops! Something went wrong.',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
          });
        },
      );
    } catch (error) {
      console.log(error);
      toast.update(toastId, {
        render: 'Oops! Something went wrong.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const reCaptchaChangeHandler = (value: string | null) => {
    console.log('recaptcha: ' + value);
    if (!!value) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  return (
    <Wrapper className={styles.wrapper} id="#contact">
      <div className={styles.formContainer}>
        <h1>Tell us about your project</h1>
        <p className={styles.description}>
          You already got the design? Or you have some questions? Send an email below and let’s get the things done.
        </p>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <div className={styles.inputsContainer}>
            {/* <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                className={styles.input}
                value={field.value}
                name={field.name}
                placeHolder={'Name'}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.name?.message}
              ></Input>
            )}
          ></Controller> */}
            <Input
              className={styles.input}
              error={errors.name?.message}
              placeHolder={'Name'}
              {...nameField}
              // value={nameField.value}
              // name={nameField.name}
              // onChange={nameField.onChange}
              // onBlur={nameField.onBlur}
            ></Input>

            <Input
              className={styles.input}
              placeHolder={'Phone Number (optional)'}
              type="phone"
              error={errors.phone?.message}
              {...phoneController.field}
              // value={phoneController.field.value!}
              // name={phoneController.field.name}
              // onChange={phoneController.field.onChange}
              // onBlur={phoneController.field.onBlur}
            ></Input>
          </div>

          <Input
            className={styles.input}
            placeHolder={'Email'}
            error={errors.email?.message}
            {...emailController.field}
            // name={emailController.field.name}
            // value={emailController.field.value}
            // onChange={emailController.field.onChange}
            // onBlur={emailController.field.onBlur}
          ></Input>

          <Input
            className={styles.input}
            placeHolder={'Subject'}
            error={errors.subject?.message}
            {...subjectController.field}
            // value={subjectController.field.value}
            // name={subjectController.field.name}
            // onChange={subjectController.field.onChange}
            // onBlur={subjectController.field.onBlur}
          ></Input>

          <Input
            className={styles.input}
            placeHolder={'Message'}
            error={errors.message?.message}
            isTextarea
            {...messageController.field}
            // value={messageController.field.value}
            // name={messageController.field.name}
            // onChange={messageController.field.onChange}
            // onBlur={messageController.field.onBlur}
          ></Input>

          <div className={styles.reCaptchaContainer}>
            <ReCAPTCHA
              sitekey="6LeE4qgfAAAAAMxaET-n7XLgTM1HF_qajkIMJ-NG"
              theme="dark"
              onChange={reCaptchaChangeHandler}
            ></ReCAPTCHA>
          </div>
          <Button className={styles.button} size="small" fullWidth={false} type="submit" disabled={isSubmitDisabled}>
            Send Message
          </Button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={ContactImage} alt={'Contact'} />
      </div>
    </Wrapper>
  );
};

export default ContactUsSection;
