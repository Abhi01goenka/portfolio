// components/ThreeScene.tsx

import { useEffect } from 'react';
import * as THREE from 'three';
import { useRouter } from 'next/router';

const ThreeScene = () => {
  const router = useRouter();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create nodes (spheres)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const node = new THREE.Mesh(geometry, material);
    scene.add(node);

    // Add click event
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(node);

      if (intersects.length > 0) {
        router.push('/about'); // Change the route based on the clicked node
      }
    };

    window.addEventListener('click', onMouseClick);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('click', onMouseClick);
    };
  }, [router]);

  return null;
};

export default ThreeScene;
