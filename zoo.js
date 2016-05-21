function Animal (name) {
  this.genusName = null
}

function Panthera () {
  this.genusName = "Panthera"
}
// Set Animal as the prototype of Panthera
Panthera.prototype = new Animal ()

function Canis () {
  // Animal.call(this, name)
  this.genusName = "Canis"
}

Canis.prototype = new Animal ()

function Tigris () {
  this.speciesName("I am a tiger")
}

function Leo () {
  this.speciesName("I am a lion")
}

function Dirus () {
  // Canis.call(this, name)
  this.speciesName = "I am a dire wolf"
}

Dirus.prototype = new Canis()

function Latrans () {
  this.speciesName = "I am a coyote"
}

Latrans.prototype = new Canis()

var direwolf = new Dirus("Ghost")
  console.log("name", direwolf.name)
  console.log("genus", direwolf.genusName)
  console.log("species", direwolf.speciesName)


















