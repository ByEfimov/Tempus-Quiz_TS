import Image from 'next/image';
import FakeLogo from '../assets/icons/header/fake-logo.svg';

interface UserLogoProps {
  logo?: string | null;
}

const UserLogo = ({ logo }: UserLogoProps) => {
  // const { UserPhoto, UserIsAuth } = useAuth();
  const UserIsAuth = false;
  const UserPhoto = false;
  return (
    <Image
      style={UserIsAuth || logo ? { width: '100%', height: '100%', borderRadius: '50%' } : undefined}
      src={logo || FakeLogo || (UserIsAuth && UserPhoto)}
      alt="user logo"
    />
  );
};

export default UserLogo;
