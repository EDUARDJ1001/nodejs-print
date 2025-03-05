import connectDB from "../config/db.js";

export const obtenerVendedores = async () => {
    try {
        const connection = await connectDB();
        const query = 'SELECT * FROM Vendedores';
        const [rows] = await connection.query(query);
        return rows;
    } catch (err) {
        console.error('Error al obtener Vendedores:', err);
        throw err;
    }
};