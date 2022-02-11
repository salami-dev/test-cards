import app from 'express';
import { createBoard } from '../controller/board.controller';

// Initiate router
const router = app.Router();

router.get('/', createBoard);

// Exporting router variable
export { router };
