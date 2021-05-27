import Model from '../../helpers/model.js';

// AssessmentModel - объект для работы (CRUD) с данными
class AssessmentModel extends Model {
  constructor() {
    super()
  }

  // получение всех ассессментов
  getAssessments() {
    return this.get();
  }

  // получение ассессмента по его ID
  getAssessmentByID(id) {
    return this.get();
  }

  // создание нового ассессмента
  createAssessment(assessm) {
    return this.post();
  }

  // редактирование ассессмента
  updateAssessment(assessm) {
    return this.post();
  }

  // удаление ассессмента
  deleteAssessment(assessm) {
    return this.post();
  }
}

const assessmentModel = new AssessmentModel();
export default assessmentModel;
