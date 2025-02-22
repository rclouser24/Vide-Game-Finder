const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const RAWG_API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

//route to get all games
router.get('/',  async (req, res) => {
    try{
        const response = await axios.get(`${BASE_URL}?KEY=${RAWG_API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch games' });
    }
});

//route to get game by id
router.get('/:id', async (req, res) => {
    try{
        const response = await axios.get(`${BASE_URL}/${req.params.id}?key=${RAWG_API_KEY}`);
        res.json(resoponse.data.results);
    } catch (error) {
        res.status(500).json({error: 'failed to get game by id'});
    }
});

router.get('/name')

module.exports = router;