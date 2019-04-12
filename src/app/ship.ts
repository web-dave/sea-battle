import { IShip, shipNames, IShipNames, imgNames, IField } from './IShip';

export class Ship implements IShip {
  // segments of the ship
  fields: IField[] = [];
  position = -1;
  center: number;
  // direction 0 => horrizontal, 1 => vertical
  direction = 0;
  destroyed = false;
  name: IShipNames;
  constructor(public length: number) {
    if (this.length < 1) {
      this.length = 1;
    } else if (this.length > 5) {
      this.length = 5;
    }
    this.center = Math.floor(this.length / 2);
    this.name = shipNames[this.length];
    for (const i of new Array(this.length)) {
      this.fields.push({ hit: false, nr: null, img: null });
    }
  }
  // set the images of the segments
  paint(): void {
    if (this.position >= 0) {
      if (this.length === 1) {
        this.fields[0].img = imgNames[10];
        if (this.destroyed) {
          this.fields[0].img = imgNames[24];
        }
      } else {
        for (let i = 0; i < this.length; i++) {
          const imgrefIndex = this.direction === 0 ? 9 : 8;
          let imgIndex = imgrefIndex;
          if (i === 0) {
            imgIndex = imgrefIndex - 2; // 7 6
          } else if (this.length - i > 1) {
            imgIndex = imgrefIndex - 4; // 5 4
          }
          if (this.destroyed) {
            imgIndex += 14;
          } else if (this.fields[1].hit) {
            imgIndex += 7;
          }
          this.fields[i].img = imgNames[imgIndex];
        }
      }
    }
    if (this.destroyed) {
      // updatemonitor(player, idx, -1);
    }
  }
  // check if I'm located at this position
  isItMe(i: number): boolean {
    return this.fields.filter(f => f.nr === i).length !== 0;
  }
  // check if I'm shot
  checkShot(i: number): void {
    if (this.isItMe(i)) {
      this.fields[this.fields.findIndex(f => f.nr === i)].hit = true;
      this.destroyed = this.isDestroyed();
    }
  }
  // check if I'm destroyed (all segments are hit)
  isDestroyed(): boolean {
    return this.fields.filter(f => f.hit === true).length === 0;
  }
}
