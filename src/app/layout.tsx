'use client';

import '@/shared/assets/remove-styles.scss';
import '@/shared/assets/variables.css';
import '@/shared/assets/main-styles.scss';
import StoreProvider from '../user-app/providers/store';
import NavigationProvider from '../user-app/providers/navigation';
import '@/user-app/providers/firebase';
import FireBaseProvider from '@/user-app/providers/firebase-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body suppressHydrationWarning={true}>
          <NavigationProvider>
            <FireBaseProvider>{children}</FireBaseProvider>
          </NavigationProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
