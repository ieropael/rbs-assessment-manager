import Model from '../../helpers/model.js';

// AssessmentModel - объект для работы (CRUD) с данными
class AssessmentModel extends Model {

  assessments = [
    { id: 1, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-06-14T15:00'), status: '', archive: '' },
    { id: 2, theme: 'Тема ассессмента №2', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-05-17T12:00'), status: '', archive: '' },
    { id: 3, theme: 'Тема ассессмента №3', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-03-12T10:00'), status: '', archive: '' },
    { id: 4, theme: 'Тема ассессмента №4', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-08-31T21:00'), status: '', archive: '' },
    { id: 5, theme: 'Тема ассессмента №5', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-11-22T12:00'), status: '', archive: '' },
  ];

  constructor() {
    super()
  }

  // получение всех ассессментов
  getAssessments() {
    return this.assessments;
  }

  // получение ассессмента по его ID
  getAssessmentByID(id) {
    return this.get();
  }

  // создание нового ассессмента
  createAssessment(assessm) {
    this.assessments.push(assessm);
    const length = this.assessments.length;
    this.assessments[length - 1].id = length;
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
