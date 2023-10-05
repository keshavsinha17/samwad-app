import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
    
        await loadFull(engine);

      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        
      }, []);
    
  return (
    <Particles className="z-[-1]"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{  
      background: {
        // color: {
        //   value: "#0d47a1",
        // },
      },
      fpsLimit: 75,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            // mode: "repulse",
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          grab:{
            distance:200,
            link_linked:{
              opacity:0.5,
            }
          },
        },
      },
      particles: {
        color: {
          value: "#7A59F9",
        },
        links: {
          color: "#7A59F9",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1400,
          },
          value: 80,  
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }}
  />
  )
}
