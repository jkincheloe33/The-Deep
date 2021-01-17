import React from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import Model from "./Model";

const Wrapper = styled.div`
  background-color: #14090c;
  height: 100vh;
  width: 100%;

  canvas {
    height: 100%;
    width: 100%;
  }
`;

const Blob = () => {
  return (
    <Wrapper>
      <Canvas
        camera={{
          fov: 45,
          position: [0, 0, 5],
        }}
      >
        <ambientLight intensity={0.05} />
        <directionalLight intensity={0.5} position={[0, 500, 200]} />
        <Model />
      </Canvas>
    </Wrapper>
  );
};

export default Blob;
