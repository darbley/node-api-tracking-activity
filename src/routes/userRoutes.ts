import { Router } from 'express';

const router = Router()

router.get('/', (req,res) => {
    res.json({
        message: "get all users"
    })
}) 

router.get('/:id', (req,res) => {
    res.json({
        message: `get the user #${req.params.id}`
    })
}) 

router.post('/', ( req, res ) => {
    res.json({
        message: "create a new user"
    })
}) 

router.put('/:id', (req,res) => {
    res.json({
        message: `update the user #${req.params.id} info`
    })
}) 

router.patch('/:id', (req,res) => {
    res.json({
        message: `update all the user #${req.params.id} info `
    })
}) 

router.delete('/:id', (req,res) => {
    res.json({
        message: `DELETE the user #${req.params.id}`
    })
}) 

export default router