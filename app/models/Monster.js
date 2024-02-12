export class Monster {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.commonLocations = data.common_locations
    this.description = data.description
    this.isDLC = data.dlc
    this.drops = data.drops
    this.imgURL = data.image
  }

  get CardHTMLTemplate() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${this.imgURL}" alt="${this.name}"
          class="card-img-top">
        <div class="card-body">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}

// const monsterData = {
//   "category": "monsters",
//   "common_locations": [
//     "Gerudo Desert"
//   ],
//   "description": "This massive monster swims beneath the desert's sand. It spends most of its time submerged, but if it senses sound, it will breach the surface to feast on whatever it can grab. Running around carelessly can be dangerous if you suspect there may be one in the area.",
//   "dlc": false,
//   "drops": [
//     "molduga fin",
//     "molduga guts"
//   ],
//   "id": 151,
//   "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/molduga/image",
//   "name": "molduga"
// }