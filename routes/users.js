const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
 
      res.render('index')
   
})

router.get('/about', (req, res) => {
  
      res.render('about')
   
})

router.get('/dressmeup', (req, res) => {
  
      res.render('dressmeup')
   
})

router.get('/contact', (req, res) => {
  
      res.render('contact')
    
})
router.get('/login', (req, res) => {
  
      res.render('login')
   
})

router.get('/signup', (req, res) => {
  
      res.render('signup')
    
})

router.post('/save', (req, res) => {
  console.log(req.body.check1);  //first step is to get that invisible form submitting with all their clothing options. 
  // //then we can do something like let choices = req.body.clothes  and then db.addItem(clothes).then((data) => {
  //   res.render('/')
  // })

  //db.addItem(item) this will need a .then statement and render the next page. itms will add to db.
  
  res.send('you hit the save route')
})


module.exports = router
