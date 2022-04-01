const { Router } = require("express");

const router = Router();

router.get("/", (_request, response) => {
  const zpl = `^XA
              ^CI28
              ^LH10,0
              ^FO320,32^GFA,00512,00512,00008,:Z64:eJzNkDGOAyEQBJsjICR0SHpPcGCJLzm75KSd96wfcTyFJ2xwAbIQ7WF2ZcmJY5OUGg1DdwMfdr54NwbSmMiCM5AnLwDJhgE36RZ4ZfcUo2PxrHmANbAE4qfGIZGSa+w6irTFoZTUVDtKvB5sabKElu7rzbTuM2186p5f7sPv61zoaazrKqqbhZh79cSDoen/pqPpdFV/qMhN/WJTf4HVN2T1/3/qbikz1/AsMy/n0K4Fy8y7AH97H3tP2o8+EHzr7tN2NCrv6n4Ap+iqaA==:A10E
              ^BY2,3,40^FT0,152^BCN,,Y,N,,A
              ^FDimsinum^FS
              ^BY2,3,40^FT0,72^BCN,,Y,N
              ^FD>;$iccidnum^FS
              ^FT300,139^A@N,13^FH^FDdescricaoprod^FS
              ^FT300,155^A@N,13^FH^FDdescricaoprod^FS
              ^PQ1,0,1,Y^XZ        
              `;
  return response.send(zpl);
});

module.exports = router;
