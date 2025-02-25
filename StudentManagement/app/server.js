
// import router
const router = require("./routers/root.router")
// import es5
const express = require('express')
const app = express()
const port = 3000

// Res, Req in JSON format
app.use(express.json());
// use router
app.use(router)

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});