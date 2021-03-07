import express from 'express';
import {createRoom, getRoom} from './http-callbacks.js';

const router = express.Router();

router.post('/room', createRoom);

router.get('/room/:token', getRoom);

export default router;