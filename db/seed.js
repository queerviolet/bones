const db = require('APP/db');
const Chance = require('chance');
const chance = new Chance(Math.random);

// arrays for ENUM
const productType = ['chair', 'table', 'bed', 'closet', 'sofa', 'desk'],
	productStyle = ['coastal', 'contemporary', 'traditional', 'modern', 'gothic', 'brutalist'],
	productMaterial = ['wood', 'plastic', 'mdf', 'mild steel', 'cast iron', 'synthetic leather', 'polyurethane', 'leather', 'fabric', 'acrylic', 'stainless steel'],
	productCategory = ['bedroom', 'livingroom', 'kitchen', 'office', 'bath', 'dining'],
	orderStatus = ['created', 'processing', 'cancelled', 'completed'],
	cardType = ['visa', 'amex', 'mastercard'];

// create methods generating random object
chance.mixin({
	addresses: () => {
		return {
			street1: chance.address(),
			street2: chance.areacode(),
			city: chance.city(),
			state: chance.state(),
			zip: chance.zip()
		};
	},
	cartProducts: () => {
		return {
			sessionId: chance.string(),
			quantity: chance.natural({max:100}),
			product_id: chance.natural({min:1, max:5}),
		}
	},
	creditCards: () => {
		return {
			number: chance.cc(),
			expiry_date: chance.exp(),
			security_code: chance.natural({min: 100, max: 999}),
			user_id: chance.natural({min:1, max:5}),
			credit_card_type: chance.pickone(cardType)
		};
	},
	lineItems: () => {
		return {
			quantity: chance.natural({min:1, max:8}),
			price: chance.floating({min: 10, max: 200, fixed: 2}),
			order_id: chance.natural({min:1, max:5}),
			product_id: chance.natural({min:1, max:5})
		}
	},
	orders: () => {
		return {
			confirmation_number: chance.string(),
			status: chance.pickone(orderStatus),
			order_date: chance.date(),
			user_id: chance.natural({min:1, max:5}),
			shipping_address_id: chance.natural({min:1, max:5}),
			billing_address_id: chance.natural({min:1, max:5}),
			credit_card_id: chance.natural({min:1, max:5}),
		}
	},
	products: () => {
		const thisType = chance.pickone(productType)
		return {
			name: chance.first() + ' ' + thisType,
			price: chance.floating({min: 10, max: 200, fixed: 2}),
			description: chance.paragraph({sentences: 1}),
			quantity: chance.natural({max:100}),
			type: thisType,
			color: chance.color({format: 'hex'}),
			style: chance.pickone(productStyle),
			category: chance.pickone(productCategory),
			material: chance.pickone(productMaterial),
			images: ["https://dummyimage.com/320x150/ddd/fff.jpg&text=1", "https://dummyimage.com/320x150/ddd/fff.jpg&text=2", "https://dummyimage.com/320x150/ddd/fff.jpg&text=3"]
		};
	},
	reviews: () => {
		return {
			rating: Math.floor(Math.random() * 5) + 1,
			comment: chance.paragraph({sentences: 1}),
			product_id: chance.natural({min:1, max:5}),
			user_id: chance.natural({min:1, max:5})
		};
	},
	users: () => {
		return {
			first_name: chance.first(),
			last_name: chance.last(),
			email: chance.email(),
			password: '123123',
			shipping_address_id: chance.natural({min:1, max:5}),
			billing_address_id: chance.natural({min:1, max:5})
		};
	},
})

// arrays consist of random objects
// for db.Promise.map(array, fn)
const addressArr = [], 
	cartProductArr = [],
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
		'cartProducts': cartProductArr,
		'creditCards': creditcardArr,
		'lineItems': lineItemArr,
		'orders': orderArr,
		'products': productArr,
		'reviews': reviewArr,
		'users': userArr,
	}


for (let i = 0; i < 30; i++) {
	addressArr.push(chance.addresses());
	cartProductArr.push(chance.cartProducts());
	creditcardArr.push(chance.creditCards());
	lineItemArr.push(chance.lineItems());
	orderArr.push(chance.orders());
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
const seedOrders = seedFunc('orders');
const seedCartProducts = seedFunc('cartProducts');
const seedLineItmes = seedFunc('lineItems');


db.didSync
	.then(() => db.sync({force: true}))
	.then(seedAddresses)
	.then(seedProducts)
	.then(seedUsers)
	.then(seedCreditcards)
	.then(seedReviews)
	.then(seedOrders)
	.then(seedCartProducts)
	.then(seedLineItmes)
	.then(() => console.log(`Seeded OK`))
	.catch(error => console.error(error))    
	.finally(() => db.close())
