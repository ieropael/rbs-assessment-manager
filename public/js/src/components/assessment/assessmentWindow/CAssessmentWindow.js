import AssessmentWindowView from './AssessmentWindowView.js';
import assessmentModel from './../../../models/assessmentModel.js';

// компонент окна для работы с сущностью ассессмента
export class CAssessmentWindow {
  constructor() {
    this.view       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix-конфигурации компонента
  config() {
    return AssessmentWindowView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    this.view = {
      window: $$('assessmentWindow'),
      windowLabel: $$('assessmentWindowLabel'),
      windowCancelBtn: $$('assessmentWindowCancelBtn'),
      windowConfirmBtn: $$('assessmentWindowConfirmBtn'),
      form: $$('assessmentWindowForm'),
      formfields: {
        lastname: $$('assessmentWindowFormLastname'),
        name: $$('assessmentWindowFormName'),
        middlename: $$('assessmentWindowFormMiddlename'),
        position: $$('assessmentWindowFormPosition'),
        email: $$('assessmentWindowFormEmail'),
      }
    }
  }

  // метод вызова модального окна
  switch() {

  }

  // метод отображения окна
  show() {

  }

  // метод сокрытия окна
  hide() {

  }

  // метод получения сущности из формы окна
  fetch() {

  }

  // метод размещения сущности в форме окна
  parse() {

  }

  // функция валидации формы
  validate() {

  }
}
