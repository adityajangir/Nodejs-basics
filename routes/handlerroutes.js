import express from 'express'
import Inputdata from '../models/inputmodel.js';
import dbsavecontroller from '../controller/dbsave.js'
import rateLimiter from '../middleware/rateLimiter.js';
import timebasedapiController from '../controller/timebasedapi.js';
import dbsearchController from '../controller/dbsearch.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is the home page! Use db-save time-based-api or db-search");
})



router.post('/db-save', rateLimiter, dbsavecontroller)

router.get('/time-based-api', timebasedapiController)

router.get('/db-search', dbsearchController);

export default router