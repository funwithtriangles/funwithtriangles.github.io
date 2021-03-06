import { Suspense, useRef } from "react"
import { useFrame } from "react-three-fiber"

import { Camera } from "./Camera"
import { Dude } from "./Dude"
import { Paintings } from "./Paintings"

import { Environment } from "drei"

function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  )
}

type SceneProps = {
  mainAssetsHaveLoaded: boolean
}

export function Scene({ mainAssetsHaveLoaded }: SceneProps) {
  const boxMesh = useRef<any>()

  useFrame(() => {
    const node = boxMesh?.current

    if (node !== undefined) {
      node.rotation.x += 0.01
      node.rotation.y += 0.01
    }
  })

  return (
    <>
      <Camera />
      <directionalLight
        intensity={0.5}
        position={[-8, 10, 20]}
        shadow-camera-left={-5}
        shadow-camera-bottom={-1}
        shadow-camera-right={1}
        shadow-camera-top={5}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
        shadowMapWidth={1024}
        shadowMapHeight={1024}
        castShadow
      />
      <Plane rotation={[-0.5 * Math.PI, 0, 0]} />

      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Dude loadExtraAssets={mainAssetsHaveLoaded} />
        <Paintings
          loadGallery={mainAssetsHaveLoaded}
          rotation={[0, Math.PI, 0]}
        />
      </Suspense>
    </>
  )
}
