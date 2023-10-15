import mongoose, { Document, Schema, Model } from "mongoose";

interface IPlace extends Document {
  name: string;
  pic: string;
  cuisines: string[];
  city: string;
  state: string;
  founded: {
    type: number;
    min: [number, string];
    max: [number, string];
  };
  comments: mongoose.Types.ObjectId[];
  showEstablished: () => string;
}

const placeSchema: Schema<IPlace> = new Schema<IPlace>({
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

placeSchema.methods.showEstablished = function (): string {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

const Place: Model<IPlace> = mongoose.model<IPlace>("Place", placeSchema);

export default Place;
