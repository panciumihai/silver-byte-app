import { FC, useState } from 'react';
import { BasicProps } from '../../types';
import Wrapper from '../Wrapper/Wrapper';

import MihaiImage from '../../assets/images/team/mihai.jpeg';
import styles from './TestimonialsSection.module.scss';
import classNames from 'classnames';
import ClientTestimonialCard from './ClientTestimonialCard';

const TESTIMONIALS_MOCK = [
  {
    image: MihaiImage,
    message:
      'Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.',
    name: 'Mihai Panciu',
    details: 'CEO',
  },
  {
    image: MihaiImage,
    message: 'Sections Bonorum et Malorum original.',
    name: 'Akilma',
    details: 'CEO',
  },
  {
    image: MihaiImage,
    message: 'Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    name: 'Akilma',
    details: 'CEO',
  },
];

interface TestimonialsSectionProps extends BasicProps {}

const TestimonialsSection: FC<TestimonialsSectionProps> = (props) => {
  const {} = props;

  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles.testimonialContainer}>
        <h2>{TESTIMONIALS_MOCK[selectedTestimonial].message}</h2>
      </div>
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
