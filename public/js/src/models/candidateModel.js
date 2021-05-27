import Model from '../../helpers/model.js';

// CandidateModel - объект для работы (CRUD) с данными
class CandidateModel extends Model {
  constructor() {
    super()
  }

  // получение всех кандидатов
  getCandidates() {
    return this.get();
  }

  // получение кандидата по его ID
  getCandidateByID(id) {
    return this.get();
  }

  // создание нового кандидата
  createCandidate(cand) {
    return this.post();
  }

  // редактирование кандидата
  updateCandidate(cand) {
    return this.post();
  }

  // удаление кандидата
  deleteCandidate(cand) {
    return this.post();
  }
}

const candidateModel = new CandidateModel();
export default candidateModel;
