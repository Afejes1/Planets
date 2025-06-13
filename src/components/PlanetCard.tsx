import { Link } from 'react-router-dom';
import { Planet } from '../types/planet';

interface Props {
  planet: Planet;
}

export default function PlanetCard({ planet }: Props) {
  return (
    <Link to={`/planet/${planet.id}`} className="text-center space-y-2">
      <img src={planet.image} alt={planet.name} className="w-24 h-24 mx-auto rounded-full" />
      <h3 className="font-medium">{planet.name}</h3>
    </Link>
  );
}
