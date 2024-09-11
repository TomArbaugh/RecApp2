import express from "express";
import {Profile} from "../models/profile.js"
import { model } from "mongoose";

const router = express.Router();

router.get('/', (_, res) => {

    Profile.find().then(profiles => res.json(profiles))
    .catch(err => res.status(404));


});

router.patch('/', (req, res) => {

    res.json('patch works');

});

router.post('/', (req, res) => {

    res.json('post works');

});

router.delete('/:profileId', (req, res) => {

    res.json(`Profile ${req.params.profileId} was deleted`);

}); 

export const profiles = router;