import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './ClientTestimonialCard.module.scss';

interface ClientTestimonialCardProps extends BasicProps {
  image: string;
  clientName: string;
  isActive?: boolean;
  onClick: () => void;
}

const ClientTestimonialCard: FC<ClientTestimonialCardProps> = (props) => {
  const { className, image, clientName, isActive, onClick } = props;
  return (
    <div className={classNames(styles.clientCard, { [styles.active]: isActive }, className)} onClick={onClick}>
      <img src={image} alt={clientName} />
    </div>
  );
};

ClientTestimonialCard.defaultProps = {
  isActive: false,
};

export default ClientTestimonialCard;
