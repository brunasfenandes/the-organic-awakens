import React, { useRef } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import Benzen from '../../../public/Benzen.jsx';
import './BGMol.scss'

export default function BGMol() {

  return (
    <div className='canvas'>
        <Canvas  camera={{ position: [0, 0, 1.7], fov: 50 }}>
          <ambientLight />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
          <Suspense fallback={null}>
            <Benzen />
          </Suspense>
          <Environment preset='sunset'/>
          <ContactShadows position={[0, 0, 0]} opacity={1} scale={50} blur={1} far={10} resolution={256} color="#000000"/>
        </Canvas>
      </div>
  );
}
