import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import Benzen from '../../../public/Benzen.jsx';
import * as THREE from 'three';
import './BGMol.scss';

export default function BGMol() {
  return (
    <div className='canvas'>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={1} />

        <directionalLight 
          color={0xffffff} 
          intensity={10} 
          position={[2, 2, 10]} 
          castShadow 
        />

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

        <Suspense>
          <Benzen />
        </Suspense>
        
        <ContactShadows 
          position={[0, 0, 0]} 
          opacity={1} 
          scale={50} 
          blur={1} 
          far={10} 
          resolution={256} 
          color="#000000" 
        />
      </Canvas>
    </div>
  );
}
