import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEventModel extends Document {
  date: Date,
  time: {
      start: Date,
      end: Date
  },
  title: string,
  description: string
}

const EventModelSchema: Schema = new Schema({
  date: { type: Date, required: true },
  time: {
      start: { type: Date, required: true },
      end: { type: Date, required: true }
  },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

export const EventModel: Model<IEventModel> = mongoose.model<IEventModel>('EventModel', EventModelSchema);