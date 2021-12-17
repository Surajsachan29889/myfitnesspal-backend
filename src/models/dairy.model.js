const mongoose = require("mongoose");

const dairySchema = new mongoose.Schema({
    userid: { type: String, required=true },
    breakfaset: [{ type: String }],
    lunch: [{ type: String }],
    dinner: [{ type: String }],
    snacks : [{type : String}],
});
