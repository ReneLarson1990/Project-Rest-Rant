const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  pic: { type: String, default: '/images/diner.jpg' },
  cuisines: [{ type: String, required: true }],
  city: { type: String, default: 'Any-town', trim: true },
  state: { type: String, default: 'USA', trim: true },
  founded: {
    type: Number,
    min: [
      1673,
      "Wait A Minute, Doc. Are You Telling Me You Built A Time Machine... Out Of A DeLorean?",
    ],
    max: [
      new Date().getFullYear(),
      "Silence, Earthling! My Name Is Darth Vader. I Am An Extraterrestrial From The Planet Vulcan!",
    ],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model("Place", placeSchema);
