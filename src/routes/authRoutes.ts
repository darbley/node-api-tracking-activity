import { Router } from 'express';

const router = Router()

router.post("/register", (req,res) => {
    res.status(201).json({ message: "register route"})
})

router.post("/login", (req, res) => {
    res.status(201).json({
        message: "login route"
    })
})

export default router