<script setup>
import { onMounted, nextTick, ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import degreeToRadians from "@/utils/degreeToRadians";

const container = ref(null);
const isClickable = ref(false);

const clock = new THREE.Clock();

let camera, scene, renderer;

let ambientLight, directionalLight;

let mesh, mixer;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

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

  renderer.domElement.addEventListener("pointermove", onPointerMove, { passive: true });
  renderer.domElement.addEventListener("click", onClick);
  renderer.domElement.addEventListener("touchstart", onTouchStart);
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader();

  const url = "/models/coffee_with_cat.glb";

  gltfLoader.load(url, (gltf) => {
    mesh = gltf.scene;
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

  raycaster.setFromCamera(pointer, camera);
  const intersection = raycaster.intersectObjects([mesh], true);

  isClickable.value = intersection.length > 0;

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

function onPointerMove(event) {
  const rect = renderer.domElement.getBoundingClientRect();

  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function onClick() {
  if (!isClickable.value) return;
  return navigateTo("https://buymeacoffee.com/yncy0", {
    external: true,
    open: {
      target: "_blank",
    },
  });
}

function onTouchStart() {
  if (!isClickable.value) return;
  return navigateTo("https://buymeacoffee.com/yncy0", {
    external: true,
    open: {
      target: "_blank",
    },
  });
}
</script>

<template>
  <div ref="container" class="w-full xl:w-1/2 max-w-screen h-dvh" />
</template>
