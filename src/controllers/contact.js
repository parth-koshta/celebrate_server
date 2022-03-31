const Contact = require('../models/contact');

const contactController = {};

contactController.create = async (req, res, next) => {
  try {
      const { } = req.body;
      
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = contactController;
