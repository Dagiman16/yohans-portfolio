"use client";
import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let THREE: typeof import("three");

    async function init() {
      THREE = await import("three");
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Gold particles
      const count = 1200;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        // Gold to blue gradient
        const t = Math.random();
        colors[i * 3] = t > 0.5 ? 0.83 : 0.12;     // R
        colors[i * 3 + 1] = t > 0.5 ? 0.69 : 0.23; // G
        colors[i * 3 + 2] = t > 0.5 ? 0.22 : 0.37; // B
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Floating ring
      const ringGeo = new THREE.TorusGeometry(3, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.15 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      scene.add(ring);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(4.5, 0.01, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0x1e3a5f, transparent: true, opacity: 0.2 })
      );
      ring2.rotation.x = Math.PI / 3;
      scene.add(ring2);

      let mouseX = 0, mouseY = 0;
      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
      };
      window.addEventListener("mousemove", onMouseMove);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        points.rotation.y = t * 0.03 + mouseX;
        points.rotation.x = t * 0.01 + mouseY;
        ring.rotation.z = t * 0.1;
        ring.rotation.x = t * 0.05;
        ring2.rotation.y = t * 0.08;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    }

    const cleanup = init();
    return () => {
      cleanup.then((fn) => fn && fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="three-canvas"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
