const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const {Schema, model } = mongoose;

const ClubSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    owner: {
        type: {
            first_name: {
                type: String,
            },
            last_name: {
                type: String,
            },
        },
        default: {
            first_name: null,
            last_name: null,
        },
    },
    info: {
        type: {
            description: {
                type: String,
                default: null,
            },
            logo: {
                type: String,
                default: null,
            },
            cover: {
                type: String,
                default: null,
            },
            sports: {
                type: [{
                    type: Schema.Types.Array,
                    ref: "Sport",
                }],
                required: true,
            },
            opening: {
                type: {
                    hours: String,
                    days: String,
                },
            },
        },
        required: true,
    },
    business_info: {
        type: {
            p_iva: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            cap: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    location: {
        type: {
            address: {
                type: String,
                required: true,
            },
            num: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            cap: {
                type: String,
                required: true,
            },
            coordinates: {
                type: {
                    lat: String,
                    lon: String,
                },
                default: {
                    lat: null,
                    lon: null,
                },
            },
        },
        required: true,
    },
    rating_average: {
        type: Number,
        default: 0,
    },
    rating_count: {
        type: Number,
        default: 0,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    is_verified: {
        type: Boolean,
        default: false,
    }
}, {
    strict: true, //non consentire il salvataggio di dati non espressi nello schema (se il parametro non è specificato nello schema)
    timestamps: true, //aggiunge due chiavi, aggiunge il valore della data in cui sono stati creati i dati e la data dell'ultima modifica dei dati
    versionKey: false //se true viene aggiunta una chiave che da la versione del documento.
});

ClubSchema.plugin(mongoosePaginate);

const Club = model("Club", ClubSchema);

module.exports = Club;