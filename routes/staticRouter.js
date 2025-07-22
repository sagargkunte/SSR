import express from "express";

const router = express.Router();


router.get('/', (req,res) => {
    // const fruits = ["apple","banana","orange"];
    const student = {
        name: "ram",
        class: "10th",
        sub : "math"
    }
    return res.render('home',{student});
})

router.post('/url',(req,res) => {
    return res.render('home',{
        name:"sagar"
    });
})
export const staticRouter = router;