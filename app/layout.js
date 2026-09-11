import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['500', '700'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata = {
    title: 'Logivon Tech — Full-Stack, AI/ML & Cybersecurity Software Agency',
    description:
        'Logivon Tech is an engineer-led studio building production-grade web apps, mobile apps, AI/ML systems, and cybersecurity tooling.',
    openGraph: {
        title: 'Logivon Tech',
        description: 'Full-stack, AI/ML, IoT and cybersecurity software — engineered to ship.',
        url: 'https://logivontech.com',
        siteName: 'Logivon Tech',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="font-sans bg-bg-dark antialiased">{children}</body>
        </html>
    );
}

