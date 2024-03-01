const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const {Schema, model } = mongoose;

const EventSchema = new Schema({
    club: {
        type: Schema.Types.ObjectId,
        ref: "Club",
        required: true,  
    },
    space: {
        type: Schema.Types.ObjectId,
        ref: "Space",
        required: true,  
    },
    sport: {
        type: Schema.Types.ObjectId,
        ref: "Sport",
        required: true,  
    },
    players_max_count: {
        type: Number,
        required: true,
    },
    players: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }]
    },
    guests: {
        type: [{
            name: String,
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                default: null,
            },
            club: {
                type: Schema.Types.ObjectId,
                ref: "User",
                default: null,
            },
        }]
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    is_closed: {
        type: Boolean,
        default: false,
    },
}, {
    strict: true, //non consentire il salvataggio di dati non espressi nello schema (se il parametro non è specificato nello schema)
    timestamps: true, //aggiunge due chiavi, aggiunge il valore della data in cui sono stati creati i dati e la data dell'ultima modifica dei dati
    versionKey: false //se true viene aggiunta una chiave che da la versione del documento.
});

EventSchema.plugin(mongoosePaginate);

const Event = model("Event", EventSchema);

module.exports = Event;