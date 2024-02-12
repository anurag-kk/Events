import { Document, Schema, model, models } from "mongoose"

interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
}

export interface IEvent extends Document {
    _id: String,
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageURL: string;
    startDate: Date;
    endDate: Date;
    url?: string;
    category: {_id: string, name: string};
    organizer: IUser;
    chatUsers?: IUser[];
}

const eventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageURL: {type: String, required: true},
    startDate: {type: Date, required: true, default: Date.now},
    endDate: {type: Date, required: true, default: Date.now},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    organizer: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    chatUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Event = models.Event || model('Event', eventSchema)

export default Event