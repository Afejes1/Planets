import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import planets from '../data/planets';

// Logarithmic scaling function
function getOrbitRadius(distanceValue: number, minRadius: number, maxRadius: number, minDist: number, maxDist: number) {
  // log10 scaling
  const logMin = Math.log10(minDist);
  const logMax = Math.log10(maxDist);
  const logVal = Math.log10(distanceValue);
  return minRadius + ((logVal - logMin) / (logMax - logMin)) * (maxRadius - minRadius);
}

export default function SolarSystem() {
  // Find min/max distances for scaling
  const minDist = Math.min(...planets.map(p => p.distanceValue));
  const maxDist = Math.max(...planets.map(p => p.distanceValue));
  const minRadius = 60;
  const maxRadius = 380;

  // Precompute orbit radii for all planets
  const planetOrbits = planets.map(p => ({
    ...p,
    orbitRadius: getOrbitRadius(p.distanceValue, minRadius, maxRadius, minDist, maxDist)
  }));

  const maxOrbit = Math.max(...planetOrbits.map(p => p.orbitRadius)) + 40;

  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-auto bg-transparent"
      style={{ zIndex: 0 }}
    >
      <div className="flex justify-center items-center min-h-screen min-w-full">
        <TransformWrapper
          initialScale={Math.min(window.innerWidth, window.innerHeight) / (maxOrbit * 2)}
          minScale={0.2}
          maxScale={3}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          panning={{ velocityDisabled: true }}
          centerOnInit
        >
          <TransformComponent>
            <div
              className="relative"
              style={{
                width: maxOrbit * 2,
                height: maxOrbit * 2,
                minWidth: 600,
                minHeight: 600,
              }}
            >
              {/* Render orbits */}
              {planetOrbits.map(planet => (
                <div
                  key={planet.id + '-orbit'}
                  className="absolute pointer-events-none"
                  style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    top: '50%',
                    left: '50%',
                    marginTop: -planet.orbitRadius,
                    marginLeft: -planet.orbitRadius,
                    border: '1px dashed gray',
                    borderRadius: '50%',
                    zIndex: 0
                  }}
                />
              ))}
              {/* Render planets moving along orbits */}
              {planetOrbits.map(planet => (
                <motion.div
                  key={planet.id}
                  className="absolute"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: planet.orbitSpeed, ease: "linear" }}
                  style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    top: '50%',
                    left: '50%',
                    marginTop: -planet.orbitRadius,
                    marginLeft: -planet.orbitRadius,
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '100%',
                      marginTop: -planet.size / 2,
                      marginLeft: -planet.size / 2,
                      width: planet.size,
                      height: planet.size,
                      pointerEvents: 'auto',
                      zIndex: 2
                    }}
                  >
                    <Link to={`/planet/${planet.id}`}>
                      <img
                        src={planet.image}
                        alt={planet.name}
                        className="w-full h-full object-contain rounded-full border-2 border-white shadow bg-black"
                        draggable={false}
                      />
                    </Link>
                    {/* Distance label */}
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 text-xs text-center text-gray-800 dark:text-gray-200 select-none pointer-events-none w-max">
                      {planet.distance}
                    </div>
                    {/* Render moons as sub-orbits */}
                    {planet.moons && planet.moons.length > 0 && (
                      <div className="absolute inset-0 pointer-events-none">
                        {planet.moons.map(moon => (
                          <motion.div
                            key={moon.id}
                            className="absolute"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: moon.orbitSpeed, ease: "linear" }}
                            style={{
                              width: moon.orbitRadius * 2,
                              height: moon.orbitRadius * 2,
                              top: '50%',
                              left: '50%',
                              marginTop: -moon.orbitRadius,
                              marginLeft: -moon.orbitRadius,
                              border: '1px dotted #aaa',
                              borderRadius: '50%',
                              zIndex: 3
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '100%',
                                marginTop: -moon.size / 2,
                                marginLeft: -moon.size / 2,
                                width: moon.size,
                                height: moon.size,
                                pointerEvents: 'auto',
                                zIndex: 4
                              }}
                            >
                              <a href={moon.wikiLink} target="_blank" rel="noopener noreferrer">
                                <img
                                  src={moon.image}
                                  alt={moon.name}
                                  className="w-full h-full object-contain rounded-full border border-white shadow bg-black"
                                  draggable={false}
                                  title={moon.name}
                                />
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {/* Sun in the center */}
              <div className="absolute w-12 h-12 bg-yellow-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-yellow-200 shadow-lg" />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
