import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = Schema({
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    phone: {
        type: String,
    },
    about: {
        type: String,
    },
    projects: {
        type: String,
    },
    work: {
        type: String,
    },
    skills: {
        type: String,
    },
    education: {
        type: String,
    }

}, {
    timestamps: true
});

export const Profile = mongoose.model('Profile', ProfileSchema)