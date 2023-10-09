const express = require('express');
const router  = express.Router();

// Define your API routes here

// GET endpoint to retrieve a list of all songs
router.get('/songs', (req, res) => {
    // Retrieve a list of songs from the database
    const songs = retrieveSongsFromDatabase();

    // Send the songs as a JSON response
    res.json({  songs   });
});

// POST endpoint to upload a new song
router.post('/songs', (req, res) => {
    // Upload a song to the database
    const songs = uploadSongsToDatabase();

    // Send the songs as a JSON response
    res.json({  songs   });
});

// PUT endpoint to update a songs details
router.put('songs/:id', (req, res) => {
    // Update a song to the database
    const songs = updateSongstoDatabase();

    // Send the songs as a JSON response
    res.json({  songs   });
});

// DELETE endpoint to remove a song
router.delete('/songs/:id', (req, res) => {
    // Delete a song to database
    const songs = deleteSongstoDatabase();

    // Send the songs as a JSON response
    res.json({  songs   });
});

// Export the router to use it in your main app
module.exports = router;