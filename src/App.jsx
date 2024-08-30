import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import './style.css';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="royalblue" />
      </Box>
    </Canvas>
  );
}

export default App;
