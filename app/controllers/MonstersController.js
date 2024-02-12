import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";

export class MonstersController {
  constructor () {
    console.log('monsters controller loaded');
    this.getMonsters()

    // console.log('Running 1st');
    // console.log('Running 2nd');
    // this.waitForPromise()
    // console.log('Running 4th');

  }

  async getMonsters() {
    try {
      await monstersService.getMonsters()
      Pop.success('Get monsters!')
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }

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