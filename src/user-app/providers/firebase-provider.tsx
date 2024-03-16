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
  const UserIdC = 1;
  const user = { id: 'id' };
  const db = getDatabase();
  const auth = getAuth();

  useEffect(() => {
    function LogoutUser() {
      signOut(auth).then(() => {
        console.log('выход');
      });
      Cookies.remove('UserId');
    }

    if (UserIdC || user.id) {
      const starCountRef = ref(db, '/users/' + user.id);

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
