<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import degreeToRadians from "@/utils/degreeToRadians";

let camera: THREE.OrthographicCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let ambientLight: THREE.AmbientLight;
let directionalLight: THREE.DirectionalLight;

let mixer: THREE.AnimationMixer;
const clock: THREE.Clock = new THREE.Clock();

const container = ref<HTMLElement | null>(null);

// stands for dimension
const d = 9;

onMounted(async () => {
  await nextTick();
  init();
});

useResizeObserver(container, () => {
  if (container.value) onWindowResize();
});

function init() {
  if (!container.value) return;
  scene = new THREE.Scene();

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  const aspect = width / height;
  camera = new THREE.OrthographicCamera(
    -d * aspect,
    d * aspect,
    d,
    -d,
    1,
    1000,
  );

  camera.position.set(d, d, d);
  camera.lookAt(scene.position);

  ambientLight = new THREE.AmbientLight(0xffffff, 1);
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

  const url: string = "/models/coffee_with_cat.glb";

  gltfLoader.load(url, (gltf) => {
    const mesh = gltf.scene;
    mesh.rotation.set(
      degreeToRadians(0),
      degreeToRadians(90),
      degreeToRadians(0),
    );

    mesh.position.x = 2;
    mesh.position.z = 2.3;

    scene.add(mesh);

    const animations = gltf.animations;
    mixer = new THREE.AnimationMixer(mesh);
    const action = mixer.clipAction(animations[0]);
    action.play();

    renderer.setAnimationLoop(animate);
  });
}

function animate() {
  const mixerUpdateDelta = clock.getDelta();

  mixer.update(mixerUpdateDelta);

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!container.value) return;
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  const aspect = width / height;

  camera.left = -d * aspect;
  camera.right = d * aspect;
  camera.top = d;
  camera.bottom = -d;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}
</script>

<template>
  <div ref="container" class="w-full xl:w-1/2 max-w-screen h-dvh relative" />
</template>
