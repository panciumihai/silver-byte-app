import { FC, useState } from 'react';
import { BasicProps } from '../../types';
import Wrapper from '../Wrapper/Wrapper';

import MariusImage from '../../assets/images/testimonials/marius.jpg';
import EricImage from '../../assets/images/testimonials/eric.png';

import styles from './TestimonialsSection.module.scss';
import ClientTestimonialCard from './ClientTestimonialCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TESTIMONIALS_MOCK = [
  {
    image: MariusImage,
    message:
      'Mihai is a hard-working person, extremely reliable delivering high quality work perfectly on schedule. Communication was seamless, being always available. Highly recommended, I will work with him again.',
    name: 'Marius Parasca',
    details: 'Expert React Developer',
  },
  {
    image: EricImage,
    message: 'I spoke to my team who handled the backend. They were impressed with your work and code quality!',
    name: 'Eric Zee',
    details: 'Founder at Alpha Capital',
  },
];

interface TestimonialsSectionProps extends BasicProps {}

const TestimonialsSection: FC<TestimonialsSectionProps> = (props) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <Wrapper className={styles.wrapper} component="section" id="#testimonials">
      <AnimationOnScroll animateOnce animateIn="animate__fadeInDown">
        <div className={styles.testimonialContainer}>
          <h2>{TESTIMONIALS_MOCK[selectedTestimonial].message}</h2>
        </div>
      </AnimationOnScroll>
      <p>
        <span>{TESTIMONIALS_MOCK[selectedTestimonial].name}</span> - {TESTIMONIALS_MOCK[selectedTestimonial].details}
      </p>
      <div className={styles.clientsContainer}>
        {TESTIMONIALS_MOCK.map((testimonial, index) => (
          <ClientTestimonialCard
            key={index}
            image={testimonial.image}
            clientName={testimonial.name}
            isActive={index === selectedTestimonial}
            onClick={() => setSelectedTestimonial(index)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TestimonialsSection;
