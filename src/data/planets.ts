import { Planet, Moon } from '../types/planet';

// Use Wikipedia images as placeholders for new bodies
const mercuryImg = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg';
const venusImg = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg';
const earthImg = 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg';
const marsImg = 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg';
const jupiterImg = 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg';
const saturnImg = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg';
const uranusImg = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg';
const neptuneImg = 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg';
const plutoImg = 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg';
const asteroidBeltImg = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Asteroid_Belt_-_The_Inner_Solar_System.png';

// Example moon images (Wikipedia)
const moonImg = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg';
const phobosImg = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg';
const deimosImg = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Deimos-MRO.jpg';
const ioImg = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Io_highest_resolution_true_color.jpg';
const europaImg = 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg';
const ganymedeImg = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ganymede_g1_true-edit1.jpg';
const callistoImg = 'https://upload.wikimedia.org/wikipedia/commons/8/83/Callisto.jpg';
const titanImg = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Titan_in_true_color.jpg';
const enceladusImg = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Enceladusstripes_cassini.jpg';
const mimasImg = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mimas_Cassini.jpg';
const tethysImg = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Tethys_%28moon%29_by_Cassini.jpg';
const rheaImg = 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Rhea_%28moon%29_by_Cassini.jpg';
const iapetusImg = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Iapetus_as_seen_by_the_Cassini_probe_-_20071008.jpg';
const dioneImg = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dione_in_natural_light_%28cropped%29.jpg';
const tritonImg = 'https://upload.wikimedia.org/wikipedia/commons/5/56/Triton_moon_mosaic_Voyager_2_%28large%29.jpg';
const charonImg = 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Charon_in_True_Color_-_July_13_2015_%282%29.png';

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
    distanceValue: 57.9, // add this
    moons: [],
    // orbitRadius: 60, // remove this
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
    distanceValue: 108.2,
    moons: [],
    // orbitRadius: 90,
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
    distanceValue: 149.6,
    moons: [
      {
        id: 'moon',
        name: 'Moon',
        image: moonImg,
        orbitRadius: 22,
        orbitSpeed: 6,
        size: 7,
        wikiLink: 'https://en.wikipedia.org/wiki/Moon'
      }
    ],
    // orbitRadius: 120,
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
    distanceValue: 227.9,
    moons: [
      {
        id: 'phobos',
        name: 'Phobos',
        image: phobosImg,
        orbitRadius: 12,
        orbitSpeed: 3,
        size: 4,
        wikiLink: 'https://en.wikipedia.org/wiki/Phobos_(moon)'
      },
      {
        id: 'deimos',
        name: 'Deimos',
        image: deimosImg,
        orbitRadius: 18,
        orbitSpeed: 5,
        size: 3,
        wikiLink: 'https://en.wikipedia.org/wiki/Deimos_(moon)'
      }
    ],
    // orbitRadius: 150,
    orbitSpeed: 50,
    size: 16,
    nasaLink: 'https://solarsystem.nasa.gov/planets/mars/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Mars'
  },
  {
    id: 'asteroid-belt',
    name: 'Asteroid Belt',
    image: asteroidBeltImg,
    mass: '~3 x 10^21 kg',
    radius: 'Varies',
    gravity: 'N/A',
    orbitalPeriod: '3-6 years',
    distance: '329-478 million km',
    distanceValue: 400, // average
    moons: [],
    // orbitRadius: 180,
    orbitSpeed: 60,
    size: 10,
    nasaLink: 'https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/in-depth/',
    wikiLink: 'https://en.wikipedia.org/wiki/Asteroid_belt'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    image: jupiterImg,
    mass: '1.90 x 10^27 kg',
    radius: '69,911 km',
    gravity: '24.79 m/s²',
    orbitalPeriod: '11.86 years',
    distance: '778.5 million km',
    distanceValue: 778.5,
    moons: [
      {
        id: 'io',
        name: 'Io',
        image: ioImg,
        orbitRadius: 24,
        orbitSpeed: 7,
        size: 6,
        wikiLink: 'https://en.wikipedia.org/wiki/Io_(moon)'
      },
      {
        id: 'europa',
        name: 'Europa',
        image: europaImg,
        orbitRadius: 30,
        orbitSpeed: 8,
        size: 6,
        wikiLink: 'https://en.wikipedia.org/wiki/Europa_(moon)'
      },
      {
        id: 'ganymede',
        name: 'Ganymede',
        image: ganymedeImg,
        orbitRadius: 36,
        orbitSpeed: 9,
        size: 7,
        wikiLink: 'https://en.wikipedia.org/wiki/Ganymede_(moon)'
      },
      {
        id: 'callisto',
        name: 'Callisto',
        image: callistoImg,
        orbitRadius: 42,
        orbitSpeed: 10,
        size: 7,
        wikiLink: 'https://en.wikipedia.org/wiki/Callisto_(moon)'
      }
    ],
    // orbitRadius: 220,
    orbitSpeed: 70,
    size: 32,
    nasaLink: 'https://solarsystem.nasa.gov/planets/jupiter/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Jupiter'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    image: saturnImg,
    mass: '5.68 x 10^26 kg',
    radius: '58,232 km',
    gravity: '10.44 m/s²',
    orbitalPeriod: '29.45 years',
    distance: '1.43 billion km',
    distanceValue: 1430,
    moons: [
      {
        id: 'titan',
        name: 'Titan',
        image: titanImg,
        orbitRadius: 28,
        orbitSpeed: 7,
        size: 7,
        wikiLink: 'https://en.wikipedia.org/wiki/Titan_(moon)'
      },
      {
        id: 'enceladus',
        name: 'Enceladus',
        image: enceladusImg,
        orbitRadius: 20,
        orbitSpeed: 8,
        size: 5,
        wikiLink: 'https://en.wikipedia.org/wiki/Enceladus'
      },
      {
        id: 'mimas',
        name: 'Mimas',
        image: mimasImg,
        orbitRadius: 16,
        orbitSpeed: 9,
        size: 4,
        wikiLink: 'https://en.wikipedia.org/wiki/Mimas_(moon)'
      },
      {
        id: 'tethys',
        name: 'Tethys',
        image: tethysImg,
        orbitRadius: 22,
        orbitSpeed: 10,
        size: 5,
        wikiLink: 'https://en.wikipedia.org/wiki/Tethys_(moon)'
      },
      {
        id: 'rhea',
        name: 'Rhea',
        image: rheaImg,
        orbitRadius: 24,
        orbitSpeed: 11,
        size: 5,
        wikiLink: 'https://en.wikipedia.org/wiki/Rhea_(moon)'
      },
      {
        id: 'iapetus',
        name: 'Iapetus',
        image: iapetusImg,
        orbitRadius: 34,
        orbitSpeed: 12,
        size: 5,
        wikiLink: 'https://en.wikipedia.org/wiki/Iapetus_(moon)'
      },
      {
        id: 'dione',
        name: 'Dione',
        image: dioneImg,
        orbitRadius: 26,
        orbitSpeed: 13,
        size: 5,
        wikiLink: 'https://en.wikipedia.org/wiki/Dione_(moon)'
      }
    ],
    // orbitRadius: 260,
    orbitSpeed: 80,
    size: 28,
    nasaLink: 'https://solarsystem.nasa.gov/planets/saturn/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Saturn'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    image: uranusImg,
    mass: '8.68 x 10^25 kg',
    radius: '25,362 km',
    gravity: '8.87 m/s²',
    orbitalPeriod: '84 years',
    distance: '2.87 billion km',
    distanceValue: 2870,
    moons: [],
    // orbitRadius: 300,
    orbitSpeed: 90,
    size: 24,
    nasaLink: 'https://solarsystem.nasa.gov/planets/uranus/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Uranus'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    image: neptuneImg,
    mass: '1.02 x 10^26 kg',
    radius: '24,622 km',
    gravity: '11.15 m/s²',
    orbitalPeriod: '164.8 years',
    distance: '4.5 billion km',
    distanceValue: 4500,
    moons: [
      {
        id: 'triton',
        name: 'Triton',
        image: tritonImg,
        orbitRadius: 20,
        orbitSpeed: 8,
        size: 6,
        wikiLink: 'https://en.wikipedia.org/wiki/Triton_(moon)'
      }
    ],
    // orbitRadius: 340,
    orbitSpeed: 100,
    size: 24,
    nasaLink: 'https://solarsystem.nasa.gov/planets/neptune/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Neptune'
  },
  {
    id: 'pluto',
    name: 'Pluto',
    image: plutoImg,
    mass: '1.31 x 10^22 kg',
    radius: '1,188.3 km',
    gravity: '0.62 m/s²',
    orbitalPeriod: '248 years',
    distance: '5.9 billion km',
    distanceValue: 5900,
    moons: [
      {
        id: 'charon',
        name: 'Charon',
        image: charonImg,
        orbitRadius: 10,
        orbitSpeed: 6,
        size: 4,
        wikiLink: 'https://en.wikipedia.org/wiki/Charon_(moon)'
      }
    ],
    // orbitRadius: 380,
    orbitSpeed: 110,
    size: 10,
    nasaLink: 'https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/',
    wikiLink: 'https://en.wikipedia.org/wiki/Pluto'
  }
];

export default planets;
