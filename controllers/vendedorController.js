import { obtenerVendedores as obtenerVendedoresModel } from "../models/vendedorModel.js";

export const obtenerVendedores = async (req, res) => {
    try {
        const vendedores = await obtenerVendedoresModel();
        res.status(200).json(vendedores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Vendedores', error});
    }
}