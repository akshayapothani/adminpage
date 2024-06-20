import mongoose from 'mongoose';

const signup = mongoose.Schema({
    adminName: {
        type : String,
        required : [true,'please enter name' ]
    },
    password: {
        type : String,
        required : true,
    },

})

const adminFeedback = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    feedback : {
        type : String,
        required : true,
    }
})

const userSchema = mongoose.Schema({
    userName: {
        type : String,
        required : true
            //,'please enter name' ]
    },
    userEmail : {
        type : String,
        required :  true,
    },
    password: {
        type : String,
        required : true,
    },
    userPhoneNumber : {
        type : Number,
        required : true,
    },
    userType : {
        type : String,
        required : true,
        //enum: ['parent', 'careTaker'],
    },
},{
    timestamps : true,
})

const childSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    childName: {
        type : String,
        required : true,
    },
    childAge:{
        type : Number,
        required : true,
    }

},{
    timestamps : true,
})

const quesSchema = mongoose.Schema({
    childId :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Child',
    },
    answer1:{
        type : Boolean,
        required : true,
    },
    answer2:{
        type : Boolean,
        required : true,
    },
    answer3:{
        type : Boolean,
        required : true,
    }
})

const videoSchema = mongoose.Schema({
    childId :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Child',
    },
    uploadedVideo :{
        type : String,
        required : [true,"Please upload a video of your child"]

    }
})

const signupmodel = mongoose.model('Admin',signup);
const feedbackmodel = mongoose.model('Feedback',adminFeedback);
const childmodel = mongoose.model('Child',childSchema);
const usermodel = mongoose.model('User',userSchema);
const questionmodel = mongoose.model('Ques',quesSchema);
const videomodel = mongoose.model('Video',videoSchema);

export{signupmodel,feedbackmodel,childmodel,usermodel,questionmodel,videomodel}

