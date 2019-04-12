import { IShip, shipHelper } from './IShip';
import { Ship } from './ship';

export interface IPlayer {
  ships: IShip[];
  shots: IShot[];
  name: string;
  getNextShipToPlace: () => IShip;
  placeNextShip: () => void;
  shot: () => void;
  findRandomField: () => number;
  findPatternField: () => number;
  isThisaHit: () => boolean;
}

export interface IShot {
  id: number;
  hit: boolean;
}
