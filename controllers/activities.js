import ActivityMessage from '../models/activityMessage.js';

export const getActivities = async (req, res) => {
    try {
        const activitiesMessages = await ActivityMessage.find();

        res.status(200).json(activitiesMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getUpcomingActivities = async (req, res) => {
    try {
        const activitiesMessages = await ActivityMessage.find({"eventDate" : {
            "$gte" : Date.now()
        }});

        res.status(200).json(activitiesMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPreviousActivities = async (req, res) => {
    try {
        const activitiesMessages = await ActivityMessage.find({"eventDate" : {
            "$lte" : Date.now()
        }});

        res.status(200).json(activitiesMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createActivity = async (req, res) => {
    const {title, eventDate, location, selectedFile,shortDescription, description, tags} = req.body;
    
    const newActivity = new ActivityMessage({title, eventDate, location, selectedFile, shortDescription, description, tags}); 
   
    try {
        console.log(title);
        await newActivity.save();

        res.status(201).json(newActivity);        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}