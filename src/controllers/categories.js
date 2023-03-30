import axios from "axios";
import config from "../config/index.js";

const categoryList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/categories/list";
  const host = "yummly2.p.rapidapi.com";
  axios.get(url, {
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

export default categoryList;
