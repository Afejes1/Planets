import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import planets from '../data/planets';

export default function SolarSystem() {
  return (
    <div className="relative w-[500px] h-[500px]">
      {planets.map(planet => (
        <motion.div
          key={planet.id}
          className="absolute" 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: planet.orbitSpeed }}
          style={{
            width: planet.orbitRadius * 2,
            height: planet.orbitRadius * 2,
            top: '50%',
            left: '50%',
            marginTop: -planet.orbitRadius,
            marginLeft: -planet.orbitRadius,
            border: '1px dashed gray',
            borderRadius: '50%'
          }}
        >
          <Link
            to={`/planet/${planet.id}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: planet.orbitRadius,
              marginTop: -planet.size / 2,
              marginLeft: -planet.size / 2,
              width: planet.size,
              height: planet.size,
            }}
          >
            <img src={planet.image} alt={planet.name} className="w-full h-full object-cover rounded-full" />
          </Link>
        </motion.div>
      ))}
      <div className="absolute w-12 h-12 bg-yellow-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
