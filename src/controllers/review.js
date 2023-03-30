import axios from "axios";
import config from "../config/index.js";

const reviewList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/reviews/list";
  const host = "yummly2.p.rapidapi.com";

  axios.get(url, {
    params: {offset: 0, limit: 20, globalId: config.GLOBAL_ID},
    headers: {
      "X-RapidAPI-Key": config.API_KEY,
      "X-RapidAPI-Host": host,
    }
  }).then(response => {
    res.status(200).send(response.data);
  }).catch(error => {
    res.status(500).send(error.message);
  });
};

export default reviewList;

