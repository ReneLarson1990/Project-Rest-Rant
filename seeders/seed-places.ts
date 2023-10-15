const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/neon-diner.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/drive-thru.jpg',
    founded: 2020
}])
.then (() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('failure!', err)
    process.exit()
})