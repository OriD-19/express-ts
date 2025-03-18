import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("Fernando");
});

router.post('/', (req, res) => {
    console.log(req.body);
});

export default router;