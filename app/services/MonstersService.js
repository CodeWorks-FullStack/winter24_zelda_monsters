import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  async getMonsters() {
    const response = await zeldaApi.get('category/monsters')
    console.log('📡 got monsters from api', response.data);
    console.log('📡looking at data', response.data.data[0]);
  }
}

export const monstersService = new MonstersService()