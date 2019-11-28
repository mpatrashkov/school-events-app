import mongoose, { Schema, Document, Model, Types } from 'mongoose';
import {IEventLocation} from "./eventLocation"
import {IUser} from "./user"

enum EventType {
    Regular = "reg", Dynamic = "dyn"
}

enum EventRepeatPeriod {
    None = 0, Daily = 1, Weekly = 2, Monthly = 3
}

export interface IEvent extends Document {
    title: string,
    description: string,
    time: {
        start: Date,
        end: Date
    },
    date: Date,

    thumbnail: string,
    images: string[],
    attachedDocuments: {
        name: string,
        path: string
    }[],

    eventType: EventType,
    eventRepetitions: number,
    repeatPeriod: EventRepeatPeriod,
    peopleLimit: number,
    location: IEventLocation["_id"],
    lector: IUser["_id"],
    owner: IUser["_id"]
}

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: [Map], of: Date, required: true},
    date: { type: Date, required: true},
    thumbnail: String,
    images: [String],
    attachedDocuments: { type: [Map], of: String},
    eventType: { type: EventType, required: true},
    eventRepetitions: { type: Number, required: true },
    repeatPeriod: { type: EventRepeatPeriod, required: true},
    peopleLimit: { type: Number, required: true },
    location: Types.ObjectId,
    lector: Types.ObjectId,
    owner: Types.ObjectId
})

export const EventModel: Model<IEvent> = mongoose.model<IEvent>('EventModel', EventSchema)