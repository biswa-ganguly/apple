import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, Environment, ScrollControls } from '@react-three/drei';
import './style.css';
import MacCointainer from './MacCointainer';

function App() {
  return (
    <div className="w-full h-screen font-sf-pro">
      <div className='absolute top-28 left-1/2 -translate-x-1/2'>
        <h2 className='text-white text-7xl tracking-tighter font-[700]'>macbook pro.</h2>
      </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      {/* <OrbitControls /> */}
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />

      <ScrollControls pages={3}>
      <MacCointainer />
      </ScrollControls>
    </Canvas>
    </div>
  );
}

export default App;
