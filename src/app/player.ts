import { IShip, shipHelper } from './IShip';
import { Ship } from './ship';

export class Player {
  ships: IShip[] = [];
  shots: { id: number; hit: boolean }[] = [];
  constructor(private name: string) {
    for (const s of shipHelper) {
      const ship = new Ship(s);
      this.ships.push(ship);
    }
  }

  getNextShipToPlace(): IShip {
    return this.ships.filter(ship => ship.position === -1)[0] || null;
  }

  placeNextShip() {}
}
