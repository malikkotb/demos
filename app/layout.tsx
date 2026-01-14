import type { Metadata } from "next";
import "./globals.css";
import { Combobox } from "@/components/ui/ComboBox";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LAB | Malik Kotb",
  description: "LAB | Malik Kotb",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  openGraph: {
    title: "LAB | Malik Kotb",
    description: "LAB | Malik Kotb",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <nav
          style={{
            mixBlendMode: "difference",
          }}
          className='flex fixed bg-transparent items-center top-0 z-50 p-[14px] py-8 justify-between h-[5vh] w-full'
        >
          {/* <a
            href='https://malikkotb.github.io/blog/'
            target='_blank'
            className='w-[8vw]'
          >
            Malik's Demos
          </a> */}
          <a href='/' className="text-2xl text-white">LAB</a>
          <div
            style={{ zIndex: 100 }}
            // className='absolute left-1/2 -translate-x-1/2 py-2'
          >
            <Combobox />
          </div>
          {/* <ProjectTitle /> */}
        </nav>
        {children}
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></Script>
      <Script
        src="/scripts/spectraGL.min.js"
      />
    </html>
  );
}
