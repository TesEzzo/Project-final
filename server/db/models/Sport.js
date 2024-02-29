const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const {Schema, model } = mongoose;

const SportSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slot_time: {
        type: Number,
        required: true,
        enum: [30, 60],
    },
}, {
    strict: true, //non consentire il salvataggio di dati non espressi nello schema (se il parametro non è specificato nello schema)
    timestamps: true, //aggiunge due chiavi, aggiunge il valore della data in cui sono stati creati i dati e la data dell'ultima modifica dei dati
    versionKey: false //se true viene aggiunta una chiave che da la versione del documento.
});

SportSchema.plugin(mongoosePaginate);

const Sport = model("Sport", SportSchema);

module.exports = Sport;