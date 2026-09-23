import styles from './styles.module.css';

type DefaultButtonProps = {
  icon?: React.ReactNode;
  color?: 'yellow' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'yellow',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
