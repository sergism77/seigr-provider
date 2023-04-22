const { JsonRpcProvider } = require("@ethersproject/providers");
const express = require("express");
const app = express();

app.listen(53194, () => {

    console.log("Listening on port 53194");

});


const seigrProvider = new JsonRpcProvider("https://rpc.seigr.network");

app.get("/seigr", async (req, res) => {
    const blockNumber = await seigrProvider.getBlockNumber();
    res.json({ blockNumber });
});
