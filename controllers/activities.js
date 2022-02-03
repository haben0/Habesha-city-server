import ActivityMessage from '../models/activitiyMessage.js';

export const getActivities = async (req, res) => {
    try {
        const activitiesMessages = await ActivityMessage.find();

        console.log(activitiesMessages);

        res.status(200).json(activitiesMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createActivity = async (req, res) => {
    const activity = req.body;
    
    const newActivity = new ActivityMessage(activity);

    try {
        await newActivity.save();

        res.status(201).json(newActivity);        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}