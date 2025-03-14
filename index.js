import express from 'express';

const app = express();
const port = 4000;

app.use("/", express.static("public"));
app.listen(4000, console.log("http://localhost:" + port));