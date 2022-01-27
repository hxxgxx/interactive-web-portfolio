import { Suspense, useRef, useMemo } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { DoubleSide } from "three";
import Footer from "../Footer/Footer";

const MyText = () => {
  const $text = useRef();
  const time = useRef(0);

  useFrame(() => {
    // if (animate) {
    time.current += 0.02;
    $text.current.material.uniforms.uTime.value = time.current;
    // }
  });

  const shaderArgs = useMemo(() => {
    return {
      side: DoubleSide,
      uniforms: {
        uTurns: { value: 1.84 },
        uRadiusTop: { value: 0.44 },
        uRadiusBottom: { value: 1.32 },
        uHeight: { value: 2.2 },
        uTime: { value: 0 },
      },
      vertexShader: /* glsl */ `
            uniform float uTurns;
            uniform float uHeight;
            uniform float uRadiusTop;
            uniform float uRadiusBottom;
            uniform float uTime;
            varying vec2 vUv;
            varying vec3 vPos;
            #define PI 3.14159265
    
            void main() {
              vec3 pos = position;
              float t = PI * uTurns * uv.x - uTime;
              float radius = uRadiusTop + uv.x * (uRadiusBottom - uRadiusTop);
    
              pos.y -= (uv.x-.5) * uHeight;
              pos.z = sin(t) * radius;
              pos.x = -cos(t) * radius;
    
              vPos = pos;
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
            }
          `,
      fragmentShader: /* glsl */ `
            varying vec2 vUv;
            varying vec3 vPos;
            void main() {
              vec3 col = vec3(vUv.x * .5); // Or whatever you want
              gl_FragColor = vec4( col, 1.0 );
            }
          `,
    };
  }, [2.2, 0.44, 1.32, 1.84]);

  return (
    <Text
      ref={$text}
      fontSize={0.15}
      lineHeight={0.3}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      textAlign="left"
      anchorX="center"
      anchorY="middle"
    >
      <shaderMaterial args={[shaderArgs]} />
      Thank you for your time and Feel free to contact me!
    </Text>
  );
};

export default function Closing() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0.1, 2],
        }}
        style={{
          height: "1300px",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Suspense fallback={null}>
          <MyText />
        </Suspense>
      </Canvas>
      <Footer />
    </>
  );
}
