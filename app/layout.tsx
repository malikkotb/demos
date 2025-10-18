import type { Metadata } from "next";
import "./globals.css";
import { Combobox } from "@/components/ui/ComboBox";
import { ProjectTitle } from "@/components/ProjectTitle";

export const metadata: Metadata = {
  title: "Malik's Demos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-black'>
        <nav
          style={{
            mixBlendMode: "difference",
          }}
          className='flex fixed text-white bg-transparent items-center top-0 z-50 p-4 py-8 justify-between h-[5vw] w-full'
        >
          {/* <a
            href='https://malikkotb.github.io/blog/'
            target='_blank'
            className='w-[8vw]'
          >
            Malik's Demos
          </a> */}
          <div>Malik&apos;s Demos</div>
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
    </html>
  );
}
