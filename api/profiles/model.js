const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: [ExperienceSchema],
  skills: [String],
  information: InformationSchema
});

const InformationSchema = new mongoose.Schema({
  bio: { type: String },
  localisation: { type: String },
  siteWeb: { type: String }
}, { _id: false });

const ExperienceSchema = new mongoose.Schema({
  titre: { type: String },
  entreprise: { type: String },
  dates: { type: String },
  description: { type: String }
}, { _id: true });

module.exports = mongoose.model('Profile', ProfileSchema);