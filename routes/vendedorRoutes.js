import express from 'express';
import { obtenerVendedores } from '../controllers/vendedorController.js';

const router = express.Router();

router.get('/', obtenerVendedores);

export default router;