import Styles from './title.module.scss';

const Title = ({ title }: { title: string }) => {
  return <h2 className={Styles.title}>{title}</h2>;
};

export default Title;
