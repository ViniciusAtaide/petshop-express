let pets = require('../models/pet')

const controller = {
  index: function(req, res) {

    res.render('pets', { pets: pets })
  }
}

module.exports = controller