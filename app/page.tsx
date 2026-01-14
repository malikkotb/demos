import SpectralGLBackground from "@/components/SpectralGLBackground";

export default function Home() {
  return (
    <>
      <SpectralGLBackground />
      <main
        className=''
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          pointerEvents: "none",
          display: "flex",
          padding: "14px",
        }}
      >
        <div className='text-[28px] pt-[50%] lg:pt-[25vh] leading-[1.2] text-black'>
          Here I use code and creativity to eplore 3D experiences,<br className="hidden lg:block" />
          WebGL, and animations for the modern web.
        </div>
        <div 
          className='fixed bottom-[14px] right-[14px]'
          style={{
            pointerEvents: 'auto',
          }}
        >
          <a 
            href='https://www.malikkotb.com' 
            target='_blank' 
            rel='noopener noreferrer'
            className='uppercase text-black text-lg tracking-wide hover:opacity-70 transition-opacity'
          >
            Portfolio
          </a>
        </div>
      </main>
    </>
  );
}
