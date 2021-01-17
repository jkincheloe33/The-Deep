import { useCallback, useEffect, useRef, useState } from "react";
import { a, useSpring } from "react-spring/three";
import { useFrame, useThree } from "react-three-fiber";
import lerp from "lerp";
import SimplexNoise from "simplex-noise";

// beats per second
const bps = 190 / 60;

const Model = () => {
  const [animating, setAnimating] = useState(false);
  const [down, setDown] = useState(false);
  const { camera } = useThree();
  const geoRef = useRef();
  const meshRef = useRef();
  const props = useSpring({
    config: { duration: 100 },
    scale: animating ? [4, 4, 4] : [1, 1, 1],
  });
  const simplex = new SimplexNoise();
  let spikes = down ? 5 : 0.75;

  //   useEffect(() => {
  //     camera.position.z = 60;
  //     // lerp(camera.position.z, 60, 0.5)
  //   }, [down]);

  useFrame(() => {
    animate();
  });
  console.log((4 / bps) * 1000);
  const handleAnimation = useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, ((4 / bps) * 1000) / 4);
  }, []);

  setTimeout(() => {
    setDown(!down);
    if (down) handleAnimation();
    // setAnimating(true);
    // setTimeout(() => {
    //   setAnimating(false);
    // }, (4 / bps) * 1000);
  }, (4 / bps) * 1000 * 4);

  function animate() {
    // const seconds = performance.now() * 0.001;
    // console.log(seconds === 1);
    if (camera) {
      lerp(camera.position.z, 5, 0.5);
      //   peak();
      //   if (down) camera.position.z = lerp(camera.position.z, 50, 0.25);
      //   else camera.position.z = lerp(camera.position.z, 5, 0.5);
    }

    if (geoRef.current) {
      const geo = geoRef.current;
      spikes = down ? lerp(spikes, 0.75, 0.025) : lerp(spikes, 5, 0.0025);
      const time = performance.now() * 0.0005;
      geo.vertices.map((v) =>
        v
          .normalize()
          .multiplyScalar(
            1 +
              0.3 *
                simplex.noise3D(v.x * spikes, v.y * spikes, v.z * spikes + time)
          )
      );
      geo.computeVertexNormals();
      geo.normalsNeedUpdate = true;
      geo.verticesNeedUpdate = true;
    }
  }

  return (
    <a.mesh ref={meshRef} scale={props.scale}>
      <sphereGeometry args={[0.8, 128, 128]} ref={geoRef} />
      <meshPhongMaterial color="#d1083e" shininess="10" />
    </a.mesh>
  );
};

export default Model;
