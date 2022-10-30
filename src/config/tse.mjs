const BASE_URL = `${process.env.TSE_BASE_URL}/${process.env.TSE_AMBIENTE}`;

//  Examples
// EA01 => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp-c0001-e000544-001-f.json)
// EA02 => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp-c0001-e000544-v.json)
// EA04 => (https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/sp/sp-c0001-e000544-r.json)
// EA09 => (https://resultados.tse.jus.br/oficial/ele2022/544/config/sp/sp-e000544-i.json)
// https://resultados.tse.jus.br/oficial/ele2022/544/config/mun-e000544-cm.json

export default {
  president: {
    cities: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/config/mun-e000${process.env.TSE_CODE_FEDERAL}-cm.json`,
    triggerFile: {
      document: "EA09",
      baseURL: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/config`,
      example: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/config/sp/sp-e000${process.env.TSE_CODE_FEDERAL}-i.json`,
      targetPath: "_data/trigger-docs/",
    },
    votes: {
      document: "EA02",
      baseURL: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/dados`,
      example: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/dados/sp/sp-C0001-e000${process.env.TSE_CODE_FEDERAL}-v.json`,
      targetPath: "_data/votes/",
    },
    summary: {
      document: "EA04",
      baseURL: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/dados-simplificados`,
      example: `${BASE_URL}/${process.env.TSE_CODE_FEDERAL}/dados-simplificados/sp/sp-C0001-e000${process.env.TSE_CODE_FEDERAL}-r.json`,
      targetPath: "_data/summary/",
    },
  },
};
