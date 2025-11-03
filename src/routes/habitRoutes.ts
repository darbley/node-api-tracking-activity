import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.json({
        message: "Get all habits"
    })
})

router.get('/:id', (req, res) => {
    res.json({
        message: `GET habit #${id}`
    })
})

router.post('/', (req, res) => {
    res.json({
        message: `created habit`
    })
})

router.post('/:id/complete', (req, res) => {
    res.json({
        message: `completed habit #${id}`
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        message: `DELETED habit #${id}`
    })
})

export default router