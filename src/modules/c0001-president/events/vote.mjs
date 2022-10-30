export default class Vote {
  constructor(voteSubject) {
    this.voteSubject = voteSubject;
  }

  newGlobalCounting({ uf, file }) {
    this.voteSubject.notify({ kind: "global", uf, file });
  }
  newStateCounting({ uf, stateFile }) {
    this.voteSubject.notify({ kind: "state", uf, file: stateFile });
  }
  newCityCounting({ uf, cityFile }) {
    this.voteSubject.notify({ kind: "city", uf, file: cityFile });
  }
}
