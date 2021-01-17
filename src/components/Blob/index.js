import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import { Music } from "@assets";
import { Button } from "@components";
import Model from "./Model";

// prettier-ignore
const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  transition: opacity 500ms ease;
  width: 100%;
  z-index: 1;

  ${p => p.hide && `
    opacity: 0;
    pointer-events: none;
  `}
`;

const Wrapper = styled.div`
  background-color: #14090c;
  height: 100vh;
  position: relative;
  width: 100%;

  audio {
    left: 0;
    position: absolute;
    top: 0;
  }

  canvas {
    height: 100%;
    width: 100%;
  }
`;

const Blob = () => {
  const [hide, setHide] = useState(false);
  const [start, setStart] = useState(false);

  const handleBegin = () => {
    setHide(true);
    document.getElementById("music").play();
    setTimeout(() => {
      setStart(true);
    }, 850);
  };

  return (
    <Wrapper>
      <ButtonWrapper hide={hide}>
        <Button onClick={() => handleBegin()} text="begin" />
      </ButtonWrapper>
      <Canvas
        camera={{
          fov: 45,
          position: [0, 0, 5],
        }}
      >
        <ambientLight intensity={0.05} />
        <directionalLight intensity={0.5} position={[0, 500, 200]} />
        {start && <Model />}
      </Canvas>
      <audio id="music" src={Music}>
        No
      </audio>
    </Wrapper>
  );
};

export default Blob;
