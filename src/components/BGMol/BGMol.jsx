import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import Benzen from '../../../public/Benzen.jsx';
import * as THREE from 'three';
import './BGMol.scss';


function RotatingModel() {
  const group = useRef();

  const rotationAxis = new THREE.Vector3(0, 0, 0); 

  useFrame(() => {
    if (group.current) {
      group.current.rotateOnAxis(rotationAxis, 0.005); 
    }
  });

  return (
    <group ref={group}>
      <Benzen />
    </group>
  );
}

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

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

        <Suspense fallback={null}>
          <RotatingModel/>
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
