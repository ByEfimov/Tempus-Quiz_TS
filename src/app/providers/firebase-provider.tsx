/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { decryptData } from '@/features/crypto-data/cripting-data.ts';

interface ListenerFC {
  children: React.ReactNode;
}

function FireBaseProvider({ children }: ListenerFC) {
  const UserIdC = decryptData(Cookies.get('UserId'));
  const user = { id: null };
  const db = getDatabase();
  const auth = getAuth();
  console.log(UserIdC);
  useEffect(() => {
    function LogoutUser() {
      signOut(auth).then(() => {
        console.log('выход');
      });
    }

    const userPath = (user.id && user.id) || UserIdC;
    console.log('/users/' + userPath);

    if (UserIdC || user.id) {
      const starCountRef = ref(db, '/users/' + (user.id || UserIdC));

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log(data);
        } else {
          LogoutUser();
        }
      });
    } else {
      LogoutUser();
    }
  }, [user.id]);

  return children;
}

export default FireBaseProvider;
