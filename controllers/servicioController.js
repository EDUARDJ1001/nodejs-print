import { obtenerServicios as obtenerServiciosModel } from "../models/servicioModel.js";

export const obtenerServicios = async (req, res) => {
    try {
        const servicios = await obtenerServiciosModel();
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Servicios', error});
    }
}