import Image from 'next/image';
import FakeLogo from '../assets/icons/header/fake-logo.svg';
import { useAppSelector } from '@/features/redux-hooks';

interface UserLogoProps {
  logo?: string | null;
}

const UserLogo = ({ logo }: UserLogoProps) => {
  const user = useAppSelector((state) => state.User);
  const UserIsAuth = !!user.id;

  return (
    <Image
      style={UserIsAuth || logo ? { width: '100%', height: '100%', borderRadius: '50%' } : undefined}
      src={logo || FakeLogo || (UserIsAuth && user.photo)}
      alt="user logo"
    />
  );
};

export default UserLogo;
