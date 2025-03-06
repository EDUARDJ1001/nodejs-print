import {printer as ThermalPrinter, PrinterTypes, CharacterSet} from "node-thermal-printer";

export const printTicket = async (req, res) => {
  try {
    const { sucursal, caja, codigoVendedor, servicio, precio } = req.body;

    let printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "COM1",
      options: { timeout: 5000 },
      characterSet: CharacterSet.PC852_LATIN2,
    });

    let isConnected = await printer.isPrinterConnected();
    if (!isConnected) {
      return res.status(500).json({ error: "La impresora no está conectada" });
    }

    printer.alignCenter();
    printer.bold(true);
    printer.println("Impresión de ticket");
    printer.newLine();
    printer.println("Sucursal", sucursal);
    printer.println("Caja", caja);
    printer.println("Código vendedor", codigoVendedor);
    printer.println("Servicio", servicio);
    printer.println("Precio", precio);
    printer.newLine();
    printer.println("Gracias por su compra");
    printer.newLine();
    printer.cut();

    let execute = await printer.execute();
    if (execute) {
      return res.json({ message: "Impresión enviada correctamente" });
    } else {
      return res.status(500).json({ error: "Error al imprimir el ticket" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno", details: error.message });
  }
};