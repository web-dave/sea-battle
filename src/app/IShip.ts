export interface IShip {
  fields: IField[];
  position: number;
  center: number;
  direction: number;
  destroyed: boolean;
  name: string;
  length: number;
  paint: () => void;
  isItMe: (i: number) => boolean;
  checkShot: (i: number) => void;
  isDestroyed: () => boolean;
}

export const shipHelper: number[] = [5, 4, 3, 3, 2, 2, 2];

export interface IField {
  nr: number;
  img: string;
  hit: boolean;
}

export const shipNames: IShipNames[] = [
  'rubber boat',
  'patrol boat',
  'frigate',
  'cruiser',
  'destroyer'
];
export type IShipNames =
  | 'rubber boat'
  | 'patrol boat'
  | 'frigate'
  | 'cruiser'
  | 'destroyer';

export const imgShips = [
  'vert',
  'hori',
  'oben',
  'vorne',
  'unten',
  'hinten',
  'gummi'
];
export const imgShipsHit = [
  'vert_a',
  'hori_a',
  'oben_a',
  'vorne_a',
  'unten_a',
  'hinten_a',
  'gummi_a'
];
export const imgShipsDestroyed = [
  'vert_g',
  'hori_g',
  'oben_g',
  'vorne_g',
  'unten_g',
  'hinten_g',
  'gummi_g'
];
export const imgNames = [
  'leer',
  'wasser',
  'platsch',
  'feuer',
  ...imgShips,
  ...imgShipsHit,
  ...imgShipsDestroyed
];
