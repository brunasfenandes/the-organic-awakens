import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/benzen.gltf');

  if (materials.material) {
    materials.material.color.setRGB(0.6514, 0.6514, 0.6514); 
  }
  if (materials.material_1) {
    materials.material_1.color.setRGB(0.6514, 0.6514, 0.6514); 
  }
  if (materials.material_2) {
    materials.material_2.color.setRGB(0, 0, 0);
  }
  if (materials.material_3) {
    materials.material_3.color.set(0x4F4FEA);
  }



  const group = useRef(); 

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.007;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[-0.052, 0.092, 0.296]} rotation={[0, 0, 2.106]} scale={0.002} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.material_1} position={[-0.038, 0.061, 0.302]} rotation={[0, 0, 2.106]} scale={0.001} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.material_2} position={[0.101, 0.061, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.material} position={[0.061, 0.084, 0.297]} rotation={[0, 0, 1.064]} scale={0.001} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.material} position={[0.061, 0.084, 0.297]} rotation={[0, 0, 1.064]} scale={0.001} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.material_2} position={[0.101, 0.061, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.material} position={[0.116, 0.069, 0.298]} rotation={[0, 0, -1.035]} scale={0.001} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.material_3} position={[0.174, 0.101, 0.298]} scale={0.001} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.material_2} position={[0.1, -0.061, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.material} position={[0.117, -0.071, 0.298]} rotation={[0, 0, -2.077]} scale={0.001} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.material_3} position={[0.176, -0.101, 0.295]} scale={0.001} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.material} position={[0.101, 0, 0.298]} scale={0.001} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.material_1} position={[0.067, 0, 0.302]} rotation={[0, 0, -Math.PI]} scale={0.001} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.material} position={[-0.124, 0.07, 0.298]} rotation={[0, 0, -2.077]} scale={0.001} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.material_3} position={[-0.186, 0.106, 0.294]} scale={0.001} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.material_2} position={[-0.106, 0.059, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.material} position={[-0.107, -0.005, 0.297]} scale={0.001} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.material_2} position={[-0.106, -0.062, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.material} position={[-0.125, -0.07, 0.298]} rotation={[0, 0, -1.035]} scale={0.001} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.material_3} position={[-0.183, -0.104, 0.312]} scale={0.001} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.material_2} position={[-0.003, 0.121, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.material} position={[-0.004, 0.139, 0.298]} rotation={[0, 0, -Math.PI]} scale={0.001} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.material_3} position={[-0.004, 0.207, 0.298]} scale={0.001} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.material_2} position={[-0.003, -0.122, 0.299]} scale={0.001} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.material} position={[-0.004, -0.14, 0.298]} rotation={[0, 0, -Math.PI]} scale={0.001} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.material_3} position={[-0.004, -0.21, 0.298]} scale={0.001} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.material} position={[-0.029, -0.106, 0.297]} rotation={[0, 0, 1.064]} scale={0.001} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.material_1} position={[-0.04, -0.063, 0.302]} rotation={[0, 0, -2.077]} scale={0.001} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.material} position={[0.053, -0.089, 0.296]} rotation={[0, 0, 2.106]} scale={0.001} />
    </group>
  );
}

useGLTF.preload('/benzen.gltf');
