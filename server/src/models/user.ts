import mongoose, { Schema, Document, Model, Types } from 'mongoose'
import {IEvent} from "./event"

enum UserType {
    Student = 1 , Lector = 2, Teacher = 4, Admin = 8, SuperUser = 16
}

export interface IUser extends Document {
    email: string,
    password: string,
    fullName: string,
    type: UserType,
    description: string,
    photo: string,
    receiveNotificationsForNewEvents: boolean,
    subscribedEvents: IEvent["_id"]
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    type: { type: UserType, required: true },
    description: String,
    photo: String,
    receiveNotificationsForNewEvents: { type: Boolean, default: false },
    subscribedEvents: Types.ObjectId
});

export const UserModel: Model<IUser>
    = mongoose.model<IUser>('UserModel', UserSchema);