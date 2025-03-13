const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('image', { title: "ImagePage" });
});

router.post('/download-image', (req, res) => {
    const { image } = req.body;
    const filePath = path.join(__dirname, '../images', image);
    
    res.download(filePath, (err) => {
        if (err) {
            res.status(500).send("Error downloading the file");
        }
    });
});

module.exports = router;
