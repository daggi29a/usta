const mongoose = require('mongoose');

const schichtplanSchema = new mongoose.Schema({

    idVeranstaltung: [ { type : mongoose.Schema.Types.ObjectId, ref: 'Veranstaltung' } ],
    vmensch: String,
    aufbau: String,
    catering: String,
    sonstiges: String,
    kasseRow: Array,
    thekeRow: Array,
    sonstigesRow: Array,
},
{timestamps: true});



const Schichtplan = mongoose.model('Schichtplan', schichtplanSchema);

module.exports = Schichtplan;
