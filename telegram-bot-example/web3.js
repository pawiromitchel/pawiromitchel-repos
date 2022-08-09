const Web3 = require("web3");
require('dotenv').config();

async function getBlock() {
    const url = process.env.WEB3_PROVIDER_URL;
    const web3 = new Web3(url);
    const block = await web3.eth.getBlock("latest");
    return await block;
}

// getBlock().then(console.log)

module.exports = { getBlock };