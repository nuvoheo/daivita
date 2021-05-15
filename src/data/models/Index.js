import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  createdAt: { type: Number },
  createdBy: { type: String },
  updatedAt: { type: Number },
  updatedBy: { type: String },
  measureAt: { type: Number },
  index: { type: Number },
  userId: { type: String },
  labels: [ Number ],
  note: { type: String },
}, {collection: 'index'});

schema.index({ userId: 1, measureAt: -1 }, { background: true });

export default mongoose.model('Index', schema);
