var express = require('express');
const Veranstaltung = require('../models/veranstaltung')

var router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  Veranstaltung.find()
    .then(liste => {
      res.json(liste);
    })
    .catch(err => next(err))
});

router.get('/:_id', (req, res, next) => {
  console.log(req.params);
  Veranstaltung.findOne(req.params)
    .then(veranstaltung => {
      console.log(veranstaltung.laden);
      res.json(veranstaltung);
    })
    .catch(err => next(err))
});

// Route to add a country
router.post('/', (req, res, next) => {
  let {
    veranstaltungName,
    veranstaltungDatum,
    laden,
    vmensch,
    aufbau,
    catering,
    sonstiges,
    sonstigesName,
    kasseAnzahl,
    thekeAnzahl,
    leuteProKasse,
    leuteProSchicht,
    zeitenKasse,
    zeitenSchicht,
    zeitenSonstiges,
    sonstigesNameSchicht,
    sonstigesAnzahl,
    leuteProSonstiges,
  } = req.body
  Veranstaltung.create({
    veranstaltungName,
    veranstaltungDatum,
    laden,
    vmensch,
    aufbau,
    catering,
    sonstiges,
    sonstigesName,
    kasseAnzahl,
    thekeAnzahl,
    leuteProKasse,
    leuteProSchicht,
    zeitenKasse,
    zeitenSchicht,
    zeitenSonstiges,
    sonstigesNameSchicht,
    sonstigesAnzahl,
    leuteProSonstiges,
  })
    .then(veranstaltung => {
      res.json({
        success: true,
        veranstaltung
      });
    })
    .catch(err => next(err))
});

module.exports = router;
