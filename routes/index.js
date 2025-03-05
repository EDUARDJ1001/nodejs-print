import cajaRoutes from './cajaRoutes.js';
import servicioRoutes from './servicioRoutes.js'
import vendedorRoutes from './vendedorRoutes.js'

const registerRoutes = (app) => {    
    app.use('/api/cajas', cajaRoutes);
    app.use('/api/servicios', servicioRoutes);
    app.use('/api/vendedores', vendedorRoutes);
};

export default registerRoutes;
