import CandidateWindowView from './CandidateWindowView.js'
import candidateModel from './../../../models/candidateModel.js'

// компонент окна для работы с сущностью кандидата
export class CCandidateWindow {
  constructor() {
    this.view;       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix конфигурации компонента
  config() {
    return CandidateWindowView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    this.view = {
      window: $$('candidateWindow'),
    }
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
