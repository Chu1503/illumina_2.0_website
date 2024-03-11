// import React, { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadFull } from "tsparticles";
// import particlesConfig from "../config/particles-config";

// const ParticlesBackground = () => {
//   const [init, setInit] = useState(false);

//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     console.log(container);
//   };

//   const options: ISourceOptions = useMemo(() => particlesConfig, []);

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}
//       />
//     );
//   }

//   return <></>;
// };

// export default ParticlesBackground;