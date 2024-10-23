import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#f8fafc",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#1e293b", "#334155", "#475569"],
          },
          links: {
            color: "#334155",
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.1
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
            path: {
              enable: true,
              delay: {
                value: 0.1
              },
              options: {
                size: 5,
                draw: false,
                increment: 0.001
              }
            },
            trail: {
              enable: true,
              length: 3,
              fill: {
                color: "#f1f5f9"
              }
            },
            attract: {
              enable: true,
              rotateX: 1200,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1
            }
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5
            }
          },
          wobble: {
            enable: true,
            distance: 15,
            speed: 5
          },
          roll: {
            enable: true,
            speed: 5
          }
        },
        detectRetina: true,
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5
              }
            }
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default AnimatedBackground;