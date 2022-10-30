import https from "node:https";

https.get(
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados/br/br-c0001-e000544-v.json",
  (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      console.log(data);
    });
  }
);

const getFile = function* (path, file) {};
