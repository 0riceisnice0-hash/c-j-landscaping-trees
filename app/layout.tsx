import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'C&J Landscaping & Trees | Tree Services in Toddington',
  description: 'Tree surgery, hedge cutting and garden clearances in Toddington, Dunstable and surrounding areas. Call C&J Landscaping & Trees for a free quote.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
