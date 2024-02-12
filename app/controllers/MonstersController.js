import { monstersService } from "../services/MonstersService.js";

export class MonstersController {
  constructor () {
    console.log('monsters controller loaded');
  }

  getMonsters() {
    monstersService.getMonsters()
  }
}