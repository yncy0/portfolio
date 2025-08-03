<script setup lang="ts">
import { onMounted, nextTick, ref, watchEffect } from 'vue'
import { useResizeObserver } from '@vueuse/core'
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

const container = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  init()
})

useResizeObserver(container, () => {
  if (container.value) onWindowResize()
})

watchEffect(() => {
  console.log('CANVAS WIDTH:', container.value?.clientWidth)
  console.log('CANVAS HEIGHT:', container.value?.clientHeight)
})

function init() {
  if (!container.value) return
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    100,
  )
  camera.position.set(0, 3, 13)

  ambientLight = new THREE.AmbientLight(0xffffff, 1)
  directionalLight = new THREE.DirectionalLight(0xffffff, 2)

  directionalLight.position.set(0, 5, 5)

  scene.add(camera, ambientLight, directionalLight)

  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  container.value.appendChild(renderer.domElement)

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
  if (!container.value) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
}
</script>

<template>
  <div ref="container" class="w-full lg:w-1/2 max-w-screen h-[480px] lg:h-dvh relative"></div>
</template>
