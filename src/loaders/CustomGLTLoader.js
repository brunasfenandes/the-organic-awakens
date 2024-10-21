import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

class CustomGLTFLoader extends GLTFLoader {
  constructor() {
    super();
  }

  parse(data, path) {
    const gltf = super.parse(data, path);
    
    if (gltf.extensions && gltf.extensions.KHR_materials_pbrSpecularGlossiness) {
      console.warn("KHR_materials_pbrSpecularGlossiness extension is not supported and will be removed.");
      delete gltf.extensions.KHR_materials_pbrSpecularGlossiness;
    }

    return gltf;
  }
}

export default CustomGLTFLoader;
