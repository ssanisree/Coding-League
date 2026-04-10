import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function HeroThreeJSScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const heroSection = container.closest('section')
    if (!heroSection) return

    const rowCount = 20
    const columnCount = 64
    const layerCount = 2

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 6, 6)
    camera.lookAt(0, 0, 1)

    const scene = new THREE.Scene()

    container.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)

    // Gold wire-box texture
    const tc = document.createElement('canvas')
    const tsz = (tc.width = tc.height = 128)
    const tctx = tc.getContext('2d')
    if (tctx) {
      tctx.fillStyle = '#D4A830'
      tctx.fillRect(0, 0, tsz, tsz)
      tctx.clearRect(5, 5, tsz - 10, tsz - 10)
    }
    const map = new THREE.CanvasTexture(tc)
    map.anisotropy = 4

    const material = new THREE.MeshBasicMaterial({ map, transparent: true, opacity: 0.3 })

    // Build row-column-layer attribute for instancing
    const rowCol: number[] = []
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < layerCount; j++) {
        for (let k = 0; k < columnCount; k++) {
          rowCol.push(i, k, j)
        }
      }
    }

    const rclAttr = new THREE.InstancedBufferAttribute(new Float32Array(rowCol), 3)
    geometry.setAttribute('rcl', rclAttr)

    const timeUniform = { value: 0 }

    material.onBeforeCompile = function (shader) {
      shader.uniforms.time = timeUniform

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          'uniform float time;\nattribute vec3 rcl;\n#include <common>'
        )
        .replace('#include <project_vertex>', [
          'const float columnCount = float(' + columnCount + ');',
          'const float arc = 2.0 * 3.14159265359 / columnCount;',
          'const float oneStep = 0.283;',
          'float shift = 3.0 - fract(time) * oneStep;',
          'float radius = shift;',
          'float zShift = 0.0;',
          'int xi = int(rcl.x);',
          'for (int ii = 0; ii < 20; ii++) {',
          '  if (ii >= xi) break;',
          '  radius += radius * arc;',
          '  zShift += radius * arc;',
          '}',
          'vec4 mvPosition = vec4(transformed, 1.0);',
          'if (mvPosition.z > 0.0) { radius += radius * arc; }',
          'mvPosition.xz *= radius * arc;',
          'mvPosition.z  += zShift + shift;',
          'float t = sin(rcl.y/5.3)*1.1 + sin(rcl.y/1.3)*1.5 + cos(rcl.y/1.7)*2.5;',
          't = 2.0 - rcl.x + abs(t) + fract(time);',
          't += rcl.z * abs(sin(rcl.y));',
          't = max(t, 0.);',
          'mvPosition.y -= t*t*t + rcl.z;',
          'float angle = rcl.y * arc;',
          'float sn = sin(angle), cs = cos(angle);',
          'mvPosition.xz = mvPosition.xz * mat2(cs, -sn, sn, cs);',
          'mvPosition = modelViewMatrix * mvPosition;',
          'gl_Position = projectionMatrix * mvPosition;'
        ].join('\n'))
    }

    const totalCount = rowCount * columnCount * layerCount
    const mesh = new THREE.InstancedMesh(geometry, material, totalCount)
    const dummy = new THREE.Object3D()
    for (let n = 0; n < totalCount; n++) {
      dummy.updateMatrix()
      mesh.setMatrixAt(n, dummy.matrix)
    }
    scene.add(mesh)

    function syncSize() {
      const w = heroSection?.offsetWidth || window.innerWidth
      const h = heroSection?.offsetHeight || window.innerHeight
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = w + 'px'
      renderer.domElement.style.height = h + 'px'
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    window.addEventListener('load', syncSize)
    window.addEventListener('resize', syncSize)
    const resizeObserver = window.ResizeObserver ? new ResizeObserver(syncSize) : null
    resizeObserver?.observe(heroSection)
    syncSize()

    function animate(ts: number) {
      requestAnimationFrame(animate)
      if (document.documentElement.getAttribute('data-theme') !== 'dark') return
      timeUniform.value = ts / 1000
      scene.rotation.y = -ts / 10000
      renderer.render(scene, camera)
    }
    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('load', syncSize)
      window.removeEventListener('resize', syncSize)
      resizeObserver?.disconnect()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
