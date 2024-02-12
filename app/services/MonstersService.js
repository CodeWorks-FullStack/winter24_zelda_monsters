import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  getMonsters() {
    const response = zeldaApi.get()
    console.log('📡 got monsters from api', response);
  }
}

export const monstersService = new MonstersService()