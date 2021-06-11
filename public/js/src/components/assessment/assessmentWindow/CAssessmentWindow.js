import AssessmentWindowView from './AssessmentWindowView.js';
import assessmentModel from './../../../models/assessmentModel.js';

// компонент окна для работы с сущностью ассессмента
export class CAssessmentWindow {
  constructor() {
    this.view;       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init(onChange) {
    this.onChange = onChange; // callback функция при CUD операциях над книгой
  }

  // метод получения webix-конфигурации компонента
  config() {
    return AssessmentWindowView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    this.view = {
      window: $$('assessmentWindow'),
      windowConfirmBtn: $$('assessmentConfirmBtn'),
      windowCancelBtn: $$('assessmentCancelBtn'),
      form: $$('newAssessmentForm'),
      formfields: {
        theme: $$('inputAssessmentTheme'),
        date: $$('inputAssessmentDate'),
      }
    };
    this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
      if (this.view.form.validate()) {
        assessmentModel.createAssessment(this.fetch());
        this.view.form.clear();
        this.onChange();
        this.hide();
      }
    });
    this.view.windowCancelBtn.attachEvent('onItemClick', () => {
      this.view.window.hide();
    });
  }

  // метод вызова модального окна
  switch() {

  }

  // метод отображения окна
  show() {
    this.view.window.show();
  }

  // метод сокрытия окна
  hide() {
    this.view.window.hide();
  }

  // метод получения сущности из формы окна
  fetch() {
    return this.view.form.getValues();
  }

  // метод размещения сущности в форме окна
  parse() {

  }

  // функция валидации формы
  validate() {

  }
}
