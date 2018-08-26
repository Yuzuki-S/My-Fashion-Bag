const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/features', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('features')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/contact', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('contact')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
router.get('/login', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('login')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/signup', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('signup')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
