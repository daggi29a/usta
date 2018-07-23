const mongoose = require('mongoose');

const veranstaltungSchema = new mongoose.Schema({

  veranstaltungName: {
    type: String,
    required: [true, 'Veranstaltung braucht einen Namen']
  },
  veranstaltungDatum: {
    type: Date,
    required: [true, 'Veranstaltung braucht ein Datum']
  },
  laden: {
    type: String,
    enum: ['cat', 'sau', 'sc', 'usta'],
    required: [true, 'Veranstaltung braucht einen Ort'],
  },
  vmensch: Boolean,
  aufbau: Boolean,
  catering: Boolean,
  sonstiges: Boolean,
  sonstigesName: String,
  kasseAnzahl: {
    type: Number,
    min: 0,
    max: 10,
  },
  thekeAnzahl: {
    type: Number,
    min: 0,
    max: 10,
  },
  leuteProKasse: {
    type: Number,
    min: 0,
    max: 10,
  },
  leuteProSchicht: {
    type: Number,
    min: 0,
    max: 10,
  },
  zeitenKasse: Array,
  zeitenSchicht: Array,
  zeitenSonstiges: Array,
  sonstigesNameSchicht: String,
  sonstigesAnzahl: {
    type: Number,
    min: 0,
    max: 10,
  },
  leuteProSonstiges: {
    type: Number,
    min: 0,
    max: 10,
  },
  ersteller: String,
},{timestamps: true});

const Veranstaltung = mongoose.model('Veranstaltung', veranstaltungSchema);

module.exports = Veranstaltung;
