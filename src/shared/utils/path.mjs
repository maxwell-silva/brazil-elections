import tseConfig from "../../config/tse.mjs";
const resolve = function (uf, jsonFile) {
  const code = tseConfig.president.code;
  let re = new RegExp(`${code}-001-(.*)\.json`, "gm");
  const value = re.exec(jsonFile);

  if (!value) {
    re = new RegExp(`${code}-(.*)\.json`, "gm");
  }
  const [, keyFile] = value ?? re.exec(jsonFile);

  return {
    externalURL: `${
      tseConfig.president[tseConfig.documents[keyFile].keyJson].baseURL
    }/${uf}/${jsonFile}`,
    localPath: `${
      tseConfig.president[tseConfig.documents[keyFile].keyJson].targetPath
    }/${uf}/${jsonFile}`,
  };
};

export default resolve;

// console.log(resolve("sp", "sp-c0001-e000544-v.json"));

// console.log(resolve("sp", "sp-c0001-e000544-r.json"));

// console.log(resolve("sp", "sp-e000544-i.json"));
