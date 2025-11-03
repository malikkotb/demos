"use client";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center bg-white justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Three.js</h1>
        <div className='flex flex-col items-center justify-center'>
          <Link href='/04-transform-objects'>
            04-transform-objects
          </Link>
          <Link href='three-d/05-animations'>05-animations</Link>
          <Link href='three-d/06-cameras'>06-cameras</Link>
          <Link href='three-d/07-fullscreen-and-resizing'>
            07-fullscreen-and-resizing
          </Link>
          <Link href='three-d/08-geometries'>08-geometries</Link>
          <Link href='three-d/09-debug-ui'>09-debug-ui</Link>
          <Link href='three-d/10-textures'>10-textures</Link>
          <Link href='three-d/11-materials'>11-materials</Link>
          <Link href='three-d/12-3d-text'>12-3d-text</Link>
          <Link href='three-d/13-lights'>13-lights</Link>
          <Link href='three-d/14-shadows'>14-shadows</Link>
          <Link href='three-d/15-haunted-house'>15-haunted-house</Link>
          <Link href='three-d/16-particles'>16-particles</Link>
          <Link href='three-d/17-galaxy-generator'>17-galaxy-generator</Link>
          <Link href='three-d/18-scroll-animations'>
            18-scroll-animations
          </Link>
          <Link href='three-d/19-physics'>19-physics</Link>
          <Link href='three-d/24-shaders'>24-shaders</Link>
        </div>
      </div>
    </main>
  );
}
