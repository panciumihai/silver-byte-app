import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';
import styles from './Wrapper.module.scss';

interface WrapperProps extends BasicProps {
  id?: string;
  component?: string | React.ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { children, className, id, component } = props;

  const CustomComponent = component as keyof JSX.IntrinsicElements;

  return (
    <CustomComponent className={classNames(styles.container, className)} id={id}>
      {children}
    </CustomComponent>
  );
};

Wrapper.defaultProps = {
  component: 'div',
};

export default Wrapper;
