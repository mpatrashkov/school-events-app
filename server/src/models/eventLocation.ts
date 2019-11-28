import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export interface IEventLocation extends Document {
    name: string,
    peopleLimit: number 
}

const EventLocationSchema: Schema = new Schema({
    name: {type: String, required: true},
    peopleLimit: {type: Number, required: true}
})

export const EventLocationModel: Model<IEventLocation>
    = mongoose.model<IEventLocation>('EventLocationModel', EventLocationSchema);