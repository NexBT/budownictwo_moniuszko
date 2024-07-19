// src/app/layout.tsx

import Header from './components/Header';
import './globals.css'; // Importuj globalne style

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
