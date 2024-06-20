import express from 'express';
import {signupmodel,feedbackmodel,childmodel,usermodel,questionmodel,videomodel } from '../models/schema.js';
import multer from 'multer';
const upload = multer();

const allRoutes = express.Router();

allRoutes.get('/user',async (req,res) => {
    try {
        let users = await usermodel.find({});
        res.send(users);
    } catch (error) {
        res.status(400).json({message : 'Error while fetching user',error: error.message})
    }
});

allRoutes.get('/child',async (req,res) => {
    try {
        let childcreated = await childmodel.find({});
        res.send(childcreated);
    } catch (error) {
        res.status(400).json({message : 'Error while fetching child',error: error.message})
    }
});

allRoutes.get('/videoPage',async (req,res) => {
    try {
        let videosent = await videomodel.find({});
        res.send(videosent);
    } catch (error) {
        res.status(400).json({message : 'Error while fetching video',error: error.message})
    }
});

allRoutes.post('/feedbackPage',upload.none(),async (req,res) => {
    try {
        const newfeedback = new feedbackmodel(req.body);
        await newfeedback.save();
        res.json({message : 'Feedback given successfully', Feedback : newfeedback});
    } catch (error) {
        res.status(400).json({message : 'Error',error: error.message})
    }
});

allRoutes.post('/signup',upload.none(),async (req,res) => {
    try {
        const newadmin = new signupmodel(req.body);
        await newadmin.save();
        res.json({message : 'Signup successfully', Admin : newadmin});
    } catch (error) {
        res.status(400).json({message : 'Error creating user',error: error.message})
    }
});

export default allRoutes;
