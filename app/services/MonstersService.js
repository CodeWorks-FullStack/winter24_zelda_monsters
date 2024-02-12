import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  async getMonsters() {
    // NOTE our axios instance (zeldaApi) is what we use to make HTTP requests to an external api
    // NOTE .get() is the request method type
    // NOTE the first argument passed to .get will append 'category/monsters' to the end of the baseURL set up in the axios service
    const response = await zeldaApi.get('category/monsters')
    // NOTE always log your response and look at the data in your console. different api's will format their response data entirely different from others. The axios response object will always store the api's response data in response.data
    console.log('📡 got monsters from api', response.data);
    // NOTE accessing the first object in the array of monster data sent back from the api
    console.log('📡looking at data', response.data.data[0]);
    // NOTE .map is an array method that will execute code on one array and return a brand new array. We use map here to trun the array of POJOs from the zelda api into our own Monster class model 
    const newMonsters = response.data.data.map(monsterPOJO => new Monster(monsterPOJO))
    console.log('MONSTERS', newMonsters);

    // NOTE set the appstate monsters array to mapped array Monster models
    AppState.monsters = newMonsters
  }
}

export const monstersService = new MonstersService()