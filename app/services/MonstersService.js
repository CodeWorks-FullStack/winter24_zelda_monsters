import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  async getMonsters() {
    const response = await zeldaApi.get('category/monsters')
    console.log('📡 got monsters from api', response.data);
    console.log('📡looking at data', response.data.data[0]);
    const newMonsters = response.data.data.map(monsterPojo => new Monster(monsterPojo))
    console.log('MONSTERS', newMonsters);

    AppState.monsters = newMonsters
  }
}

export const monstersService = new MonstersService()