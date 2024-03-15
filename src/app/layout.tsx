'use client';

import '@/shared/assets/remove-styles.scss';
import '@/shared/assets/variables.css';
import '@/shared/assets/main-styles.scss';
import StoreProvider from './providers/store';
import NavigationProvider from './providers/navigation';

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
