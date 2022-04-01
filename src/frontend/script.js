const socket = io("http://localhost:7837");

socket.on("connection", () => {
  console.log(`I'm connected with the back-end`);
});

socket.emit("listPrinters");
socket.on("printerList", (printers) => {
  console.log(printers);
});
