export default class Vote {
  constructor(voteSubject) {
    this.voteSubject = voteSubject;
  }

  newGlobalFileVersion({ uf, file }) {
    this.voteSubject.notify({ kind: "global", uf, file });
  }
  newStateFileVersion({ uf, stateFile }) {
    this.voteSubject.notify({ kind: "state", uf, file: stateFile });
  }
  newCityFileVersion({ uf, cityFile }) {
    this.voteSubject.notify({ kind: "city", uf, file: cityFile });
  }
}
