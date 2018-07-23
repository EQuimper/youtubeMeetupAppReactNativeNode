import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, '5 characters long at least'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, '10 characters long at least'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
