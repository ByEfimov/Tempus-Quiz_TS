'use client';
import FireBaseProvider from '@/app/providers/firebase-provider';
import NavigationProvider from '@/app/providers/navigation';
import StoreProvider from '@/app/providers/store';
import '@/app/providers/firebase';
import '@/shared/assets/remove-styles.scss';
import '@/shared/assets/variables.css';
import '@/shared/assets/main-styles.scss';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StoreProvider>
      <NavigationProvider>
        <FireBaseProvider>{children}</FireBaseProvider>
      </NavigationProvider>
    </StoreProvider>
  );
};

export default Layout;
