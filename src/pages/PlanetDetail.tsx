import { useParams, Link } from 'react-router-dom';
import planets from '../data/planets';
import { Planet } from '../types/planet';

export default function PlanetDetail() {
  const { id } = useParams();
  const planet: Planet | undefined = planets.find(p => p.id === id);

  if (!planet) return <p className="p-4">Planet not found.</p>;

  return (
    <div className="p-4 space-y-4">
      <Link to="/" className="text-blue-500">&larr; Back</Link>
      <h1 className="text-3xl font-bold">{planet.name}</h1>
      <img src={planet.image} alt={planet.name} className="max-w-sm" />
      <ul className="list-disc pl-6">
        <li>Mass: {planet.mass}</li>
        <li>Radius: {planet.radius}</li>
        <li>Gravity: {planet.gravity}</li>
        <li>Orbital Period: {planet.orbitalPeriod}</li>
        <li>Distance from Sun: {planet.distance}</li>
        <li>Moons: {planet.moons}</li>
      </ul>
      <div className="space-x-4">
        <a href={planet.nasaLink} className="text-blue-500" target="_blank">NASA</a>
        <a href={planet.wikiLink} className="text-blue-500" target="_blank">Wikipedia</a>
      </div>
    </div>
  );
}
