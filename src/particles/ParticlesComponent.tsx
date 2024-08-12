import React, { useEffect, useState } from 'react';
import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Container } from '@tsparticles/engine';

const ParticlesComponent: React.FC = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    const particlesOptions: IParticlesProps['options'] = {
      background: {
        color: {
          value: '#141414',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };

    return (
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesComponent;
