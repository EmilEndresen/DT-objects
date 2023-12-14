let obj = {
   fName: "Emil",
   lName: "Endresen",
   age: 29,
   fullName: function () {
      return (this.fName + " " + this.lName).toUpperCase()
   },
   addMiddleName: function (middleName) {
      this.mName = middleName
   }
}

console.log(obj.fullName())

obj.addMiddleName("Johan")
console.log(obj)

console.log(Object.entries(obj))

const people = [
   {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"]
   },
   {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"]
   },
   {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"]
   },
   {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes"]
   },
   {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"]
   },
   {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"]
   },
   {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"]
   },
   {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"]
   }
]

for (let i = 0; i < people.length; i++) {
   console.log(
      `${people[i].name} is a ${people[i].male ? "man" : "woman"} who is ${
         people[i].age
      } years old`
   )
}

const hobbyList = []

for (let i = 0; i < people.length; i++) {
   hobbyList.push(...people[i].hobbies)
}
console.log(hobbyList)

let combinedAge = 0

for (let i = 0; i < people.length; i++) {
   combinedAge += people[i].age
}

console.log(combinedAge)

for (let i = 0; i < people.length; i++) {
   people[i].male ? "Mr." : "Mrs."
}

console.log(people)
