/* eslint-disable react-hooks/exhaustive-deps */
import { getDatabase, ref, get } from 'firebase/database';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '@/app/providers/firebase';
import { decryptData, encryptData } from '@/features/crypto-data/cripting-data';
import Cookies from 'js-cookie';

function Login() {
  const router = useRouter();
  const db = getDatabase();
  const { userToken } = router.query;

  useEffect(() => {
    async function getUser() {
      const user = await get(ref(db, 'users/' + decryptData(userToken)));
      if (user.val()) {
        Cookies.set('UserId', encryptData(user.val().id), { expires: Infinity });
        router.push('/');
      } else {
        router.push('/');
      }
    }
    getUser();
  }, [userToken]);
}

export default Login;
