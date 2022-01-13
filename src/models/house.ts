import { Schema, model, Document } from "mongoose";

const houseSchema = new Schema({
  title: String,
  description: String,
  type: String,
  price: Number,
  address: String,
  city: String,
  country: String,
  size: String,
  bedrooms: Number,
  bathrooms: Number,
  floors: Number,
  yearBuilt: Number,
  image: String,
  sponsored: Boolean,
  date: Date,
});

interface IHouse extends Document {
  title: string;
  description: string;
  type: string;
  price: number;
  address: string;
  city: string;
  country: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  yearBuilt: number;
  image: string;
  sponsored: boolean;
  date: Date;
}

export default model<IHouse>("house", houseSchema);
