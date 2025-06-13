export interface Moon {
  id: string;
  name: string;
  image: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  wikiLink?: string;
}

export interface Planet {
  id: string;
  name: string;
  image: string;
  mass: string;
  radius: string;
  gravity: string;
  orbitalPeriod: string;
  distance: string;
  distanceValue: number; // add this
  moons: Moon[]; // changed from number to Moon[]
  orbitRadius?: number; // make this optional
  orbitSpeed: number;
  size: number;
  nasaLink: string;
  wikiLink: string;
}
