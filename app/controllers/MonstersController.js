import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMonsters() {
  // REVIEW nothing has changed here

  const monsters = AppState.monsters

  console.log('drawing monsters', monsters);

  let htmlString = ''

  monsters.forEach(monster => htmlString += monster.CardHTMLTemplate)

  setHTML('monsterCards', htmlString)
}


export class MonstersController {
  constructor () {
    console.log('monsters controller loaded');
    // NOTE we want to send a request to the api for data on page load
    this.getMonsters()

    // console.log('Running 1st');
    // console.log('Running 2nd');
    // this.waitForPromise()
    // console.log('Running 4th');

    // NOTE we only want to draw after the data is stored in our AppState
    AppState.on('monsters', _drawMonsters)
  }

  // NOTE we make this method async so we can use the await keyword in the method.
  async getMonsters() {
    // NOTE always write your code in a try/catch if sending a request to an API
    try {
      await monstersService.getMonsters() //NOTE make sure to await the promise in the service to resolve before moving to the next line
      Pop.success('Get monsters!') // NOTE this line only runs after the service is done executing code
    } catch (error) {
      Pop.error(error) // NOTE alert user on website
      console.error(error) //NOTE alert developer
    }

  }

  async waitForPromise() {
    // NOTE example of how Promises work. message variable will have the value passed to resolve after 3000 milliseconds. We have to await the Promise resolving to see that value in our console log
    const message = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('running 3rd')
      }, 3000,)
    })

    console.log(message);
  }
}