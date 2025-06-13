import { Planet } from '../types/planet';
import mercuryImg from '../assets/mercury.png';
import venusImg from '../assets/venus.png';
import earthImg from '../assets/earth.png';
import marsImg from '../assets/mars.png';

const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    image: mercuryImg,
    mass: '3.30 x 10^23 kg',
    radius: '2,439.7 km',
    gravity: '3.7 m/s²',
    orbitalPeriod: '88 days',
    distance: '57.9 million km',
    moons: 0,
    orbitRadius: 60,
    orbitSpeed: 20,
    size: 14,
    nasaLink: 'https://solarsystem.nasa.gov/planets/mercury/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
  },
  {
    id: 'venus',
    name: 'Venus',
    image: venusImg,
    mass: '4.87 x 10^24 kg',
    radius: '6,051.8 km',
    gravity: '8.87 m/s²',
    orbitalPeriod: '225 days',
    distance: '108.2 million km',
    moons: 0,
    orbitRadius: 90,
    orbitSpeed: 30,
    size: 18,
    nasaLink: 'https://solarsystem.nasa.gov/planets/venus/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Venus'
  },
  {
    id: 'earth',
    name: 'Earth',
    image: earthImg,
    mass: '5.97 x 10^24 kg',
    radius: '6,371 km',
    gravity: '9.807 m/s²',
    orbitalPeriod: '365.25 days',
    distance: '149.6 million km',
    moons: 1,
    orbitRadius: 120,
    orbitSpeed: 40,
    size: 20,
    nasaLink: 'https://solarsystem.nasa.gov/planets/earth/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Earth'
  },
  {
    id: 'mars',
    name: 'Mars',
    image: marsImg,
    mass: '6.42 x 10^23 kg',
    radius: '3,389.5 km',
    gravity: '3.721 m/s²',
    orbitalPeriod: '687 days',
    distance: '227.9 million km',
    moons: 2,
    orbitRadius: 150,
    orbitSpeed: 50,
    size: 16,
    nasaLink: 'https://solarsystem.nasa.gov/planets/mars/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Mars'
  }
];

export default planets;
