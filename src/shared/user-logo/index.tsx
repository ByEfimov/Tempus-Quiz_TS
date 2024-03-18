import Image from 'next/image';
import FakeLogo from '../assets/icons/header/fake-logo.svg';
import { useAppSelector } from '@/features/redux-hooks';

interface UserLogoProps {
  logo?: string | null;
}

const UserLogo = ({ logo }: UserLogoProps) => {
  const user = useAppSelector((state) => state.User);
  const UserIsAuth = !!user.id;

  return !UserIsAuth ? (
    <Image
      style={UserIsAuth || logo ? { width: '100%', height: '100%', borderRadius: '50%' } : undefined}
      src={FakeLogo}
      alt="user logo"
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={UserIsAuth || logo ? { width: '100%', height: '100%', borderRadius: '50%' } : undefined}
      src={(logo && logo) || (UserIsAuth && user.photo)}
      alt="user logo"
    />
  );
};

export default UserLogo;
