import connectDB from "../config/db.js";

export const obtenerServicios = async () => {
    try {
        const connection = await connectDB();
        const query = 'SELECT * FROM Servicios';
        const [rows] = await connection.query(query);
        return rows;
    } catch (err) {
        console.error('Error al obtener Servicios:', err);
        throw err;
    }
};