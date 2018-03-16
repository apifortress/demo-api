const db = require('../server/db')
const { User, Product } = require('../server/db/models')

async function seed(){
    await db.sync({force: true})
    console.log('db cleared and synced!')

    const users = await Promise.all([
        User.create({userName: "User1", password: "1234"}),
        User.create({userName: "User2", password: "1234"})
    ])

    const products = await Promise.all([
        Product.create({name: 'Product 1', price: 29.99, 'description': 'This is product 1!', 'category': '1'}),
        Product.create({name: 'Product 2', price: 39.99, 'description': 'This is product 2!', 'category': '1'}),
        Product.create({name: 'Product 3', price: 49.99, 'description': 'This is product 3!', 'category': '1'}),
        Product.create({name: 'Product 4', price: 19.99, 'description': 'This is product 4!', 'category': '1'}),
        Product.create({name: 'Product 5', price: 79.99, 'description': 'This is product 5!', 'category': '1'}),
        Product.create({name: 'Product 6', price: 89.99, 'description': 'This is product 6!', 'category': '2'}),
        Product.create({name: 'Product 7', price: 99.99, 'description': 'This is product 7!', 'category': '2'}),
        Product.create({name: 'Product 8', price: 69.99, 'description': 'This is product 8!', 'category': '2'}),
        Product.create({name: 'Product 9', price: 59.99, 'description': 'This is product 9!', 'category': '2'}),
        Product.create({name: 'Product 10', price: 109.99, 'description': 'This is product 10!', 'category': '2'}),   
    ])

    console.log(`seeded ${users.length} users & ${products.length} products.`)
    console.log(`seeded successfully!`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

  console.log('seeding...')