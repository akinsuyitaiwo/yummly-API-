import express from "express";
import cors from "cors";
import config from "./config/index.js";
import reqLogger from "../src/utils/reqLogger.js";
import router from "../src/routes/index.js";

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use(reqLogger);

app.use("/api", router);
app.get("/", (req, res) =>{
  res.send(`welcome to ${config.APP_NAME} home page`);
});

app.use((req, res) => res.status(404).send({
  "error": "invalid Route",
  "message": "Invalid Route, Kindly check your input"
}));

app.listen(port, () => {
  console.log(`${config.APP_NAME} is listening on Port: ${config.PORT}`);
});
