import mongoose from 'mongoose';

const activitiesSchema = mongoose.Schema({
    title: String,
    eventDate: Date,    
    location: String,
    shortDescription: String,
    description: String,
    selectedFile: String,
    tags: [String],
    createdBy: String,
    createdAt: {
        type: Date,
        default:new Date()        
    }
});

const ActivityMessage = mongoose.model('ActivitiyMessage', activitiesSchema);

export default ActivityMessage;
