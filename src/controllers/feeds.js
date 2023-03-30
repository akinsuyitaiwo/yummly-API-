import axios from "axios";
import config from "../config/index.js";

const host = "yummly2.p.rapidapi.com";

const feedsAutoComplete = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/auto-complete";
  axios.get(url, {
    params: {q: "chicken soup"},
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

const feedsSearch = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/search";
  const q = "chicken soup";
  axios.get(url, {
    params: {start: 0, maxResult: 18, q, FAT_KCALMax: 1000, maxTotalTimeInSeconds: 7200, allowedAttribute: config.ATTRIBUTE},
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

const feedsList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/list";
  axios.get(url, {
    params: {start: 0, limit: 24},
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

const feedsListSimilarities = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/list-similarities";
  const id = "15-Minute-Baked-Salmon-with-Lemon-9029477";
  axios.get(url, {
    params: {start: 0, limit: 18, id, apiFeedType: "moreForm", authorId: "Yummly"},
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

export {
  feedsAutoComplete, feedsSearch, feedsList, feedsListSimilarities
};

