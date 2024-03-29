import Link from 'next/link';
import Styles from './styles.module.scss';
import tempusLogo from '@/shared/assets/icons/header/tempus-logo.svg';
import UserLogo from '@/shared/user-logo';
import Image from 'next/image';
import { useAppSelector } from '@/features/redux-hooks';

const Header = () => {
  const { title } = useAppSelector((state) => state.Header);

  return (
    <header className={Styles.Header}>
      <Link className={Styles.tempusLogo} href="/">
        <Image src={tempusLogo} alt="tempus logo" style={{ width: 'auto', height: '45px' }} />
      </Link>
      <h2 className={Styles.title}>{title}</h2>
      <Link className={Styles.userLogo} href="/login">
        <UserLogo />
      </Link>
    </header>
  );
};

export default Header;
