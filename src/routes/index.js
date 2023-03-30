/* eslint-disable new-cap */
import {Router} from "express";
import categoriesRoute from "./categories.js";
import reviewsRoute from "./reviews.js";
import tagsRoute from "./tags.js";
import feedsRoute from "./feeds.js";

const router = Router();

router.use("/categories", categoriesRoute);
router.use("/reviews", reviewsRoute);
router.use("/tags", tagsRoute);
router.use("/feeds", feedsRoute);

export default router;
