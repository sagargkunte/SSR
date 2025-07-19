import express from "express";

const router = express.Router();


router.get('/', (req,res) => {
    return res.render('home');
})

router.post('/url',(req,res) => {
    return res.render('home',{
        display:true
    });
})
export const staticRouter = router;