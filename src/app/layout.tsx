'use client';

import '@/shared/assets/remove-styles.scss';
import '@/shared/assets/variables.css';
import '@/shared/assets/main-styles.scss';
import StoreProvider from '../user-app/providers/store';
import NavigationProvider from '../user-app/providers/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body suppressHydrationWarning={true}>
          <NavigationProvider>{children}</NavigationProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
