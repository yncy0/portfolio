<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

import degreeToRadians from '@/utils/degreeToRadians'

let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let renderer: THREE.WebGLRenderer

let ambientLight: THREE.AmbientLight
let directionalLight: THREE.DirectionalLight

let mixer: THREE.AnimationMixer
const clock: THREE.Clock = new THREE.Clock()

const container = ref(null)

onMounted(() => {
  init()

  window.addEventListener('resize', onWindowResize)
})

function init() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    100,
  )
  camera.position.set(-2, 3, 13)

  ambientLight = new THREE.AmbientLight(0xffffff, 1)
  directionalLight = new THREE.DirectionalLight(0xffffff, 2)

  directionalLight.position.set(0, 5, 5)

  scene.add(camera, ambientLight, directionalLight)

  const canvas = document.querySelector('#bg') as HTMLCanvasElement
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  loadGLTF()
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader()

  const url: string = '/coffee_with_cat.glb'

  gltfLoader.load(url, (gltf) => {
    const mesh = gltf.scene
    mesh.rotation.set(degreeToRadians(35), degreeToRadians(-10), degreeToRadians(10))
    scene.add(mesh)

    const animations = gltf.animations
    mixer = new THREE.AnimationMixer(mesh)
    const action = mixer.clipAction(animations[0])
    action.play()

    renderer.setAnimationLoop(animate)
  })
}

function animate() {
  const mixerUpdateDelta = clock.getDelta()

  mixer.update(mixerUpdateDelta)

  renderer.render(scene, camera)
}

function onWindowResize() {
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}
</script>

<template>
  <canvas id="bg" ref="container" />
</template>

<style scoped>
#bg {
  width: 100%;
  height: 100dvh;
}
</style>
