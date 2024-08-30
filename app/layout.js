import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'HeyLearn2Code',
  description: "This is HeyLearn2Code's website. We are a coding bootcamp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-[#f0e6d6] min-h-screen flex flex-col`}
      >
        <Header />

        <div className='flex-1 px-8 py-12'>
          <main className='mx-auto max-w-7xl'>{children}</main>
        </div>
      </body>
    </html>
  );
}
