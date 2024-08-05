import express from "express";
import { addFood, foodList, removeFood } from "../controllers/foodController.js";
import multer from "multer"

const foodRouter = express.Router();

//image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",foodList)
foodRouter.post("/remove",removeFood)


export default foodRouter;
