const db = require('../_helpers/db');

module.exports = {
  sendData
};

async function sendData(params) {
    // console.log("params :", JSON.stringify(params))
    const report = new db.report(params);
    await report.save();
}