const { Server } = require("socket.io");
const { getPrinters, printDirect } = require("@thiagoelg/node-printer");

const createApplication = (httpServer, serverOptions = {}) => {
  const io = new Server(httpServer, serverOptions);

  let printerNames;

  io.on("connection", (socket) => {
    console.log(`new connection: ${socket.id}`);
    socket.emit("connection", null);

    socket.on("listPrinters", () => {
      console.log(getPrinters());
      printerNames = getPrinters().map((printer) => printer.name);
      socket.emit("printerList", printerNames);
    });

    socket.on("zplToPrint", (printerName, zpl) => {
      if (printerNames) {
        if (printerNames.includes(printerName) && zpl.length > 0) {
          printDirect({
            data: zpl,
            // data: testData,
            printer: printerName,
            error() {
              socket.emit("printError");
            },
            success() {
              socket.emit("printSuccess");
            },
          });
        }
      } else {
        socket.emit("list printers");
      }
    });

    socket.on("disconnect", () => {
      // console.log(`a client has disconnect ${socket.id}`);
    });
  });

  return io;
};

module.exports = createApplication;
