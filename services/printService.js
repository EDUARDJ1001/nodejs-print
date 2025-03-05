import escpos from 'escpos';
import usb from 'escpos-usb';

escpos.USB = usb;

export const printTicket = (boleto, userData) => {
    return new Promise((resolve, reject) => {
        try {
            const device = "epson tm-t88vi receipt2";
            const printer = new escpos.Printer(device); 

            device.open(() => {
                printer
                    .font('a')
                    .align('ct')
                    .style('b')
                    .size(1, 1)
                    .text('IMPRESION CON NODE JS')
                    .text(`Precio ${boleto.Descripcion}`)
                    .text(`Codigo: ${id}`)
                    .text(`Fecha: ${new Date().toLocaleString()}`)
                    .text('Consumidor final')
                    .text('Gracias por su compra')
                    .cut()
                    .close();

                resolve('Impresión exitosa');
            });
            
            device.on('error', (err) => {
                reject(`Error de dispositivo: ${err}`);
            });

        } catch (error) {
            reject(`Error de impresión: ${error.message}`);
        }
    });
};
