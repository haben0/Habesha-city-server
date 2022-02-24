import express from 'express';

import { getActivities, createActivity, getUpcomingActivities, getPreviousActivities } from '../controllers/activities.js';

const router = express.Router();

router.get('/', getActivities );
router.post('/', createActivity );
router.get('/upcoming', getUpcomingActivities)
router.get('/previous', getPreviousActivities)

export default router;