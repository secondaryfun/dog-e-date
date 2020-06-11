let Dog = require("../models/Dog")
let User = require("../models/User")



Dog.create({
    name: "Baxter", 
    parent: "username goes here", 
    breed: "German Sheperd", 
    info: "crazy dog that never gets tired", 
    age: 3, 
    size: "L",
    image: "url goes here"
}).then(() => {
    console.log('Done')
    process.exit()
})

User.create({
    username: "ccorkery",
    firstName: "Conor",
    lastName: "Corkery",
}).then(() => {
    console.log('Done')
    process.exit()
})