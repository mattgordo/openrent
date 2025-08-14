import cx from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ label, icon, size = "medium", type = "button", variant = "primary" }: ButtonProps) => {

  return (
    <button className={cx(styles.button, styles[size], styles[variant])} type={type}>
      {label}{icon}
    </button>
  );
}