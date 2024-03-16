/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { decryptData } from '@/features/crypto-data/cripting-data.ts';
import { useAppDispatch, useAppSelector } from '@/features/redux-hooks';
import { removeUser, setUser } from '@/pages/login/slice';

interface ListenerFC {
  children: React.ReactNode;
}

function FireBaseProvider({ children }: ListenerFC) {
  const UserIdC = decryptData(Cookies.get('UserId'));
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.User);

  const db = getDatabase();
  const auth = getAuth();

  useEffect(() => {
    function LogoutUser() {
      signOut(auth).then(() => {
        dispatch(removeUser());
        Cookies.remove('UserId');
      });
    }

    if (UserIdC) {
      const starCountRef = ref(db, '/users/' + UserIdC);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          dispatch(setUser({ ...data }));
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
