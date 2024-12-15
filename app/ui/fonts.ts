import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });


// weightを指定することで読み込むファイルを減らせる
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


