import { CandidateTabView } from './CandidateTabView.js';
import { CCandidateWindow } from './candidateWindow/CCandidateWindow.js';
import candidateModel from '../../models/candidateModel.js';
import { Candidate } from '../../models/entities/candidate.js';

// класс вкладки "Кандидаты"
export class CCandidateTab {
  constructor() {
    this.view;                   // объект для быстрого доступа к представлениям
    this.window;                 // экземпляр окна для работы с кандидатами
  }

  // метод инициализации компонента
  init() {
    this.window = new CCandidateWindow();
  }

  // метод получения webix-конфигурации компонента
  config() {
    webix.ui(this.window.config());
    return CandidateTabView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    // инициализация используемых представлений
    this.view = {
      datatable: $$('candidates'),
    };
    this.window.attachEvents();
    // создание кандидата
    this.view.datatable.on_click['wxi-plus-circle'] = () => {
      this.createCandidate();
    };
  }

  // функция обновления таблицы кандидатов
  refreshTable() {

  }

  // функция создания кандидата
  createCandidate() {
    this.window.show();
  }

  // функция изменения кандидата
  updateCandidate() {

  }

  // функция удаления кандидата
  deleteCandidate() {

  }
}
