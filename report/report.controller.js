const express = require('express');
const router = express.Router();
const reportService = require('./report.service');
// console.log("req.body");

// routes
router.post('/', report);

module.exports = router;

function report(req, res, next) {
    // console.log("req.body",req.body)
    reportService.sendData(req.body)
    .then(() => res.json({ message: 'Your data has been sent successfully' }))
    .catch(next);
}