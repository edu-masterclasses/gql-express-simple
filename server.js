'use strict'

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const port = 3000;

const app = express();

app.use(bodyParser.json(), cors());

app.listen(port, () => console.log(`Server run at port ${port}`));

