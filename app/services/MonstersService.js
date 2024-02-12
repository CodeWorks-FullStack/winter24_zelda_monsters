import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  getMonsters() {
    const response = zeldaApi.get('category/monsters')
    console.log('📡 got monsters from api', response);
    // console.log('📡looking at data', response.data.data[0]);
  }
}

export const monstersService = new MonstersService()