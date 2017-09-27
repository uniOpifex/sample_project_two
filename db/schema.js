const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;
const SnowboardSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

const CompanySchema = new Schema({
    name: {
        type:String,
        required: true,
        unique: true
    },
    country: {
        type:String,
        required: true
    },
    snowboards: [SnowboardSchema]
});



const CompanyModel = mongoose.model('Company', CompanySchema);
const SnowboardModel = mongoose.model('Snownoard', SnowboardSchema)

module.exports = {
    CompanyModel: CompanyModel,
    SnowboardModel: SnowboardModel
};
