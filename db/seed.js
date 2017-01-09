const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {firstName: 'James', lastName: 'Kim',  email: 'god@example.com', isAdmin: true, password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', isAdmin: false, password: '1234'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
