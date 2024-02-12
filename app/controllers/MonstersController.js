import { monstersService } from "../services/MonstersService.js";

export class MonstersController {
  constructor () {
    console.log('monsters controller loaded');
    this.getMonsters()

    console.log('Running 1st');
    console.log('Running 2nd');
    this.waitForPromise()
    console.log('Running 4th');

  }

  getMonsters() {
    // monstersService.getMonsters()
  }

  async waitForPromise() {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('running 3rd')
      }, 3000,)
    })

    console.log(message);
  }
}