const express = require('express')
const app = express()
const port = 3436
const bodyParser = require('body-parser')

//
// Requirement for set up the exercise
//
app.use(bodyParser.json()); // parse requests of content-type - application/json

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


let accounts = [
  {
    id: 0,
    username: 'luzmibel',
    password: 'password1',
    post: [
      {
        id: 0,
        username: 'luzmibel',
        image: '../assets/curler.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 200,
        description: 'Sample Description'
      },
      {
        id: 1,
        username: 'luzmibel',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 300,
        description: 'Sample Description'
      },
      {
        id: 2,
        username: 'luzmibel',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 400,
        description: 'Sample Description'
      },
      {
        id: 3,
        username: 'luzmibel',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 500,
        description: 'Sample Description'
      }
    ]
  },
  {
    id: 1,
    username: 'hannah',
    password: 'password2',
    post: [
      {
        id: 0,
        username: 'hannah',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 200,
        description: 'Sample Description'
      },
      {
        id: 1,
        username: 'hannah',
        image: '../assets/curler.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 300,
        description: 'Sample Description'
      },
      {
        id: 2,
        username: 'hannah',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 400,
        description: 'Sample Description'
      },
      {
        id: 3,
        username: 'hannah',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 500,
        description: 'Sample Description'
      }
    ]
  },
  {
    id: 2,
    username: 'User 1',
    password: 'password3',
    post: [
      {
        id: 0,
        username: 'User 1',
        image: '../assets/speaker.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 200,
        description: 'Sample Description'
      },
      {
        id: 1,
        username: 'User 1',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 300,
        description: 'Sample Description'
      },
      {
        id: 2,
        username: 'User 1',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 400,
        description: 'Sample Description'
      },
      {
        id: 3,
        username: 'User 1',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brand',
        price: 500,
        description: 'Sample Description'
      }
    ]
  }
]
let item = [
  {
    id: 0,
    username: 'User 1',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category: 'Sample',
    brand: 'Sample Brand',
    price: 200,
    description: 'Sample Description'
  },
  {
    id: 1,
    username: 'User 2',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category: 'Sample',
    brand: 'Sample Brand',
    price: 200,
    description: 'Sample Description'
  },
  {
    id: 2,
    username: 'User 3',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category: 'Sample',
    brand: 'Sample Brand',
    price: 200,
    description: 'Sample Description'
  },
  {
    id: 3,
    username: 'User 1',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category: 'Sample',
    brand: 'Sample Brand',
    price: 200,
    description: 'Sample Description'
  },

]
app.get('/', (req, res) => {
  res.json(item)
})
app.post('/getUserPostItem', (req, res) => {
  res.json(item)
})

// app.get('/posts/:username', (req, res) => {
//   var query = item.where({ id: req.params.id });
//   if (err)
//     return res.send(err)
//   res.json(employee);
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


