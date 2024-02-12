import { monstersService } from "../services/MonstersService.js";

export class MonstersController {
  constructor () {
    console.log('monsters controller loaded');
    this.getMonsters()
  }

  getMonsters() {
    monstersService.getMonsters()
  }
}