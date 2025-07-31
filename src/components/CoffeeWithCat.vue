<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

import degreeToRadians from '@/utils/degreeToRadians'

let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let renderer: THREE.WebGLRenderer

let ambientLight: THREE.AmbientLight
let directionalLight: THREE.DirectionalLight

let mixer: THREE.AnimationMixer
const clock: THREE.Clock = new THREE.Clock

onMounted(() => {
  init()
})

function init() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 5, 10)

  ambientLight = new THREE.AmbientLight(0xffffff, 1)
  directionalLight = new THREE.DirectionalLight(0xffffff, 2)

  directionalLight.position.set(0, 5 , 5)

  scene.add(camera, ambientLight, directionalLight)

  const canvas = document.querySelector('#bg') as HTMLCanvasElement
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  loadGLTF()
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader()

  const url: string = '/coffee_with_cat.glb'

  gltfLoader.load(url, (gltf) => {
    const mesh = gltf.scene
    mesh.position.set(-5, 2, -3)
    mesh.rotation.set(degreeToRadians(30), degreeToRadians(0), degreeToRadians(0))
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

</script>

<template>
  <canvas id="bg" />
</template>


