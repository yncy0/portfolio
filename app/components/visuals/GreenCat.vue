<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let ambientLight: THREE.AmbientLight;
let directionalLight: THREE.DirectionalLight;

const container = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  init();
  animate();
});

useResizeObserver(container, () => {
  if (container.value) onWindowResize();
});

function init() {
  if (!container.value) return;
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 4);

  ambientLight = new THREE.AmbientLight(0xffffff, 3);
  directionalLight = new THREE.DirectionalLight(0xffffff, 2);

  directionalLight.position.set(0, 5, 5);

  scene.add(camera, ambientLight, directionalLight);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.value.appendChild(renderer.domElement);

  loadGLTF();
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader();

  const url: string = "/models/green_cat.glb";

  gltfLoader.load(url, (gltf) => {
    const mesh = gltf.scene;
    scene.add(mesh);

    function animate() {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      mesh.rotation.z += 0.01;
    }

    animate()
  });
}

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!container.value) return;
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}
</script>

<template>
  <div ref="container" class="w-full max-w-screen h-64" />
</template>
