import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be 5 characters long']
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be 10 characters long']
  },
  category: {
    type: String
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true });

GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');

  const group = await this.findById(id);

  const meetup = await new Meetup({ ...args, group });

  group.meetups.push(meetup);

  const result = await Promise.all([meetup.save(), group.save()]);

  return result;
};

export default mongoose.model('Group', GroupSchema);
