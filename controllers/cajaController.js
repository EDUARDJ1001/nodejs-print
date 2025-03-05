import { obtenerCajas as obtenerCajasModel } from "../models/cajaModel.js";

export const obtenerCajas = async (req, res) => {
    try {
        const cajas = await obtenerCajasModel();
        res.status(200).json(cajas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Cajas', error});
    }
}