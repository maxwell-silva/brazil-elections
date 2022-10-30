# Projetc Brazil vote counting (Federal and State) => **2022**

This project has the objective to couting votes across Brazil, using the official channel provide by TSE (_Tribunal Superior Eleitoral_ => **Superior Electoral Court**)

OBS: This project apply for 2022, so if any changes for future elections, feel free to fork and made any changes as necessary. (some external links should broken across the time, we have no controll about this.)

| Código | Cargo Tipo                      |
| ------ | ------------------------------- |
| 0001   | Presidente Majoritário          |
| 0003   | Governador\* Majoritário        |
| 0005   | Senador\* Majoritário           |
| 0011   | Prefeito\* Majoritário          |
| 0006   | Deputado Federal\* Proporcional |
| 0007   | Deputado Estadual Proporcional  |
| 0008   | Deputado Distrital Proporcional |
| 0013   | Vereador Proporcional           |

## Documents

cities => [link](https://resultados.tse.jus.br/oficial/ele2022/544/config/mun-e000544-cm.json)

### [EA01 - Arquivo de resultados de dados fixos](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea01-arquivo-de-resultado-de-dados-fixos-1653933927035/@@download/file/TSE-EA01-Arquivo-de-resultado-de-dados-fixos.pdf)

Esse arquivo contém a parte FIXA dos resultados das Eleições. Entende-se por parte fixa aqueles dados que não variam durante a totalização dos resultados, tais como nome dos municípios, nome e número dos candidatos, sigla e nome dos partidos, número de seções, eleitorado e outros.

Example:

- BR => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/br/br-c0001-e000544-001-f.json)
- UF => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp-c0001-e000544-001-f.json)
- MU => (NÃO ENCONTRADO)

**e** => Número de eleitores aptos

<br/>

### [EA02 - Arquivo de resultado de dados variáveis](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea02-arquivo-de-resultado-de-dados-variaveis-1653934034645/@@download/file/TSE-EA02-Arquivo-de-resultado-de-dados-variaveis.pdf)

Esse arquivo contém a parte VARIÁVEL dos resultados das Eleições. Entende-se por parte variável aqueles dados que vão variar durante a eleição, isto é, que são extraídos da totalização dos votos. A quantidade de votos dos candidatos, dos partidos, número de eleitores votantes, são exemplos de dados que variam durante as apurações.

- BR => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/br/br-c0001-e000544-v.json)
- UF => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp-c0001-e000544-v.json)
- MU => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp67156-c0001-e000544-v.json)

<br/>

### [EA04 - Arquivo de resultado consolidado](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea04-arquivo-de-resultado-consolidado/@@download/file/TSE-EA04-Arquivo-de-resultado-consolidado.pdf)

Esse arquivo contém resultados das Eleições por abrangência e por Cargo ou por Pergunta, em caso de consulta popular, no padrão JSON. Os arquivos JSON serão consumidos pelo aplicativo Resultados.

- BR => (https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json)
- UF => (https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/sp/sp-c0001-e000544-r.json)
- MU => (NÃO ENCONTRADO)

<br/>

### [EA09 - Arquivo de índice](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea09-arquivo-de-indice-1653934264221/@@download/file/TSE-EA09-Arquivo-de-indice.pdf)

Esse arquivo contém a lista com nome e data e hora de geração dos arquivos de uma abrangência. Por abrangência entende-se BR ou uma UF.

- BR => (https://resultados.tse.jus.br/oficial/ele2022/544/config/br/br-e000544-i.json)
- UF => (https://resultados.tse.jus.br/oficial/ele2022/544/config/sp/sp-e000544-i.json)

That **document** must be used to any strategy to request data if your local is old than **dh** field

```json
{
  "nm": "sp67156-c0001-e000544-v.json",
  "dh": "04/10/2022 12:07:28"
}
```

<br/>

### [EA10 - Arquivo de resultado de eleitos](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea10-arquivo-de-resultado-de-eleitos/@@download/file/TSE-EA10-Arquivo-de-resultado-de-eleitos.pdf)

Esse arquivo contém o resultado de todos os candidatos eleitos a um determinado cargo e uma determinada abrangência. Por exemplo, esse arquivo contém as informações dos candidatos a Governador, Senador e Deputado Federal eleitos no País, em caso de eleição geral, e candidatos a prefeito eleitos na UF, em caso de eleição municipal.

Esse arquivo estará presente apenas nas eleições gerais ordinárias e nas eleições municipais ordinárias. Não existindo para eleições suplementares nem consultas populares.

- BR => (NÃO ENCONTRADO)
- UF => (NÃO ENCONTRADO)

<br/>

### [EA11 - Arquivo de configuração de eleições](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea11-arquivo-de-configuracao-de-eleicoes/@@download/file/TSE-EA11-Arquivo-de-configuracao-de-eleicoes.pdf)

Esse arquivo contém informações acerca de todas as eleições disponíveis para divulgação. Os arquivos JSON serão consumidos pelo aplicativo Resultados.

- GERAL => (https://resultados.tse.jus.br/oficial/comum/config/ele-c.json)

<br/>

### [EA12 - Arquivo de configuração de municípios](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea12-arquivo-de-configuracao-de-municipios/@@download/file/TSE-EA12-Arquivo-de-configuracao-de-municipios.pdf)

Esse arquivo contém informações acerca dos municípios das eleições disponíveis para divulgação. Os arquivos JSON serão consumidos pelo aplicativo Resultados.

- MU => (https://resultados.tse.jus.br/oficial/ele2022/544/config/sp/mun-e067156-cm.json) **NOT WORKING**

<br/>

### [EA14 - Arquivo de acompanhamento Brasil](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea14-arquivo-de-acompanhamento-brasil/@@download/file/TSE-EA14-Arquivo-de-acompanhamento-Brasil.pdf)

Esse arquivo contém informações relevantes para acompanhamento da eleição nas abrangências Estadual e
Federal. As informações contidas nesse arquivo, para acompanhamento da eleição, são informações de
seções e eleitorado. Tais informações são relevantes para se mapear o estágio da eleição em todo o país, ou seja, com esse arquivo é possível acompanhar a quantidade de seções totalizadas, seções não totalizadas, eleitorado totalizado, etc.

- BR => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/br/br-e000544-ab.json)

doc.abr[INDEX].pst => **Percentual de Seções Totalizadas**

<br/>

### [EA15 - Arquivo de acompanhamento UF](https://www.tse.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tse.jus.br/eleicoes/eleicoes-2022/arquivos/interessados/ea15-arquivo-de-acompanhamento-uf-1653934878111/@@download/file/TSE-EA15-Arquivo-de-acompanhamento-UF.pdf)

Esse arquivo contém informações relevantes para acompanhamento da eleição nas abrangências Estadual e municipal. As informações contidas nesse arquivo, para acompanhamento da eleição, são informações de seções e eleitorado. Tais informações são relevantes para se mapear o estágio da eleição em todo o estado. Com esse arquivo é possível acompanhar a quantidade de seções totalizadas, seções não totalizadas, eleitorado totalizado, etc.

- UF => (https://resultados.tse.jus.br/oficial/ele2022/544/dados/sp/sp-e000544-ab.json)

EXAMPLE => **Mogi Guaçu/SP**

- **e** => Eleitorado
- **a** => Abstenções (_essa
  informação só é obtida após a totalização da seção eleitoral._)
- **pea** => Percentual de eleitorado Apurado
- **pena** => Percentual de eleitorado Não Apurado
- **c** => Comparecimento (_essa
  informação só é obtida após a totalização da seção eleitoral._)
- **pa** => Percentual de Abstenção
- **pc** => Percentual de Comparecimento

```json
{
  "ele": "544",
  "t": "1",
  "f": "O",
  "dg": "04/10/2022",
  "hg": "12:07:32",
  "abr": [
{
      "and": "F",
      "tpabr": "MU",
      "cdabr": "67156",
      "dt": "02/10/2022",
      "ht": "20:26:19",
      "s": "343",
      "st": "343",
      "snt": "0",
      "si": "343",
      "sni": "0",
      "sa": "343",
      "sna": "0",
      "pst": "100,00",
      "psnt": "0,00",
      "psi": "100,00",
      "psni": "0,00",
      "psa": "100,00",
      "psna": "0,00",
      "e": "120178",
      "ea": "120178",
      "ena": "0",
      "esi": "120178",
      "esni": "0",
      "c": "94156",
      "a": "26022",
      "pea": "100,00",
      "pena": "0,00",
      "pesi": "100,00",
      "pesni": "0,00",
      "pa": "21,65",
      "pc": "78,35"
    }]
```
