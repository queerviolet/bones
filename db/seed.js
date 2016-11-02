const db = require('APP/db');
const Chance = require('chance');
const chance = new Chance(Math.random);
const numberOfDB = 30;

// arrays for ENUM
const productType = ['chair', 'table', 'bed', 'closet', 'sofa', 'desk']
const productStyle = ['coastal', 'contemporary', 'traditional', 'modern', 'gothic', 'brutalist'];
const productMaterial = ['wood', 'plastic', 'mdf', 'mild steel', 'cast iron', 'synthetic leather', 'polyurethane', 'leather', 'fabric', 'acrylic', 'stainless steel']

// create methods generating random object
chance.mixin({
	'users': () => {
		return {
			first_name: chance.first(),
			last_name: chance.last(),
			email: chance.email(),
			password: '123123',
			shipping_address_id: chance.natural({min:1, max:numberOfDB}),
			billing_address_id: chance.natural({min:1, max:numberOfDB}),
		};
	},
	'creditCards': () => {
		return {
			number: chance.cc(),
			expiry_date: chance.exp(),
			security_code: chance.natural({min: 100, max: 999}),
			user_id: chance.natural({min:1, max:numberOfDB}),
			// order_id: chance.natural({min:1, max:numberOfDB})
		};
	},
	'products': () => {
		const thisType = chance.pickone(productType)
		return {
			name: chance.first() + ' ' + thisType,
			price: chance.floating({min: 10, max: 200, fixed: 2}),
			description: chance.paragraph({sentences: 1}),
			quantity: chance.natural({max:100}),
			type: thisType,
			style: chance.pickone(productStyle),
			color: chance.color({format: 'hex'}),
			material: chance.pickone(productMaterial),
			images: ["https://dummyimage.com/320x150/ddd/fff.jpg&text=1", "https://dummyimage.com/320x150/ddd/fff.jpg&text=2", "https://dummyimage.com/320x150/ddd/fff.jpg&text=3"]
		}
	},
	'addresses': () => {
		return {
			street1: chance.address(),
			street2: chance.areacode(),
			city: chance.city(),
			state: chance.state(),
			zip: chance.zip()
		}
	},
	'reviews': () => {
		return {
			rating: Math.floor(Math.random() * 5) + 1,
			comment: chance.paragraph({sentences: 1}),
			product_id: chance.natural({min:1, max:numberOfDB}),
			user_id: chance.natural({min:1, max:numberOfDB})
		}
	}
})

// arrays consist of random objects
// for db.Promise.map(array, fn)
const addressArr = [], 
	cartArr = [],
	creditcardArr = [],
	lineItemArr = [],
	orderArr = [],
	productArr = [],
	reviewArr = [],
	userArr = [],

	// table that associates
	// 'db model': array of random objects
	tables = {
		'addresses': addressArr,
		'carts': cartArr,
		'creditCards': creditcardArr,
		'lineItems': lineItemArr,
		'orders': orderArr,
		'products': productArr,
		'reviews': reviewArr,
		'users': userArr,
	}


for (let i = 0; i < numberOfDB; i++) {
	addressArr.push(chance.addresses());
	// cartArr.push(chance.);
	creditcardArr.push(chance.creditCards());
	// lineItemArr.push(chance.);
	// orderArr.push(chance.);
	productArr.push(chance.products());
	reviewArr.push(chance.reviews());
	userArr.push(chance.users());
}


// helper function for create data to tatabase
const seedFunc = function(dbName) {
	return () => db.Promise.map(tables[dbName], result => db.model(dbName).create(result))
}

// function for seeding data
const seedUsers = seedFunc('users');
const seedAddresses = seedFunc('addresses');
const seedCreditcards = seedFunc('creditCards');
const seedProducts = seedFunc('products');
const seedReviews = seedFunc('reviews');

// const seedUsers = () => db.Promise.map([
//   {
// 		first_name: 'Donald',
// 		last_name: 'Trump',
// 		email: 'trump@secrets.org',
// 		password: 'abcde'
// 	},
//   {
// 		first_name: 'Hillary',
// 		last_name: 'Clinton',
// 		email: 'clinton@secrets.org',
// 		password: '54321'
// 	},
// ], user => db.model('users').create(user))


db.didSync
	.then(() => db.sync({force: true}))
	.then(seedAddresses)
	.then(seedProducts)
	.then(seedUsers)
	.then(seedCreditcards)
	.then(seedReviews)
	.then(() => console.log(`Seeded OK`))
	.catch(error => console.error(error))    
	.finally(() => db.close())
