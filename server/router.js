import express from 'express';
import {createRoom} from './http-callbacks.js';

const router = express.Router();

router.post('/room', createRoom);

export default router;