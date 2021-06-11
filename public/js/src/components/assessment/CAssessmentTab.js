import { AssessmentTabView } from './AssessmentTabView.js';
import { CAssessmentWindow } from './assessmentWindow/CAssessmentWindow.js';
import { CAssessmentProcessWindow } from './assessmentProcessWindow/CAssessmentProcessWindow.js';
import assessmentModel from '../../models/assessmentModel.js';
import { Assessment } from '../../models/entities/assessment.js';

// класс вкладки "Ассессменты"
export class CAssessmentTab {
  constructor() {
    this.view;                   // объект для быстрого доступа к представлениям
    this.window;                 // экземпляр окна для работы с ассессментами
    this.processWindow;          // экземпляр окна для проведения ассессмента
  }

  // метод инициализации компонента
  init() {
    this.window = new CAssessmentWindow();
    this.processWindow = new CAssessmentProcessWindow();
    this.window.init(
      () => { this.refreshTable() }
    ) // вызова инициализации компонента окна
  }

  // метод получения webix-конфигурации компонента
  config() {
    webix.ui(this.window.config());
    webix.ui(this.processWindow.config());
    return AssessmentTabView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    // инициализация используемых представлений
    this.view = {
      datatable: $$('assessments'),
    };

    this.window.attachEvents();
    this.processWindow.attachEvents();

    // создание ассессмента
    this.view.datatable.on_click['wxi-plus-circle'] = () => {
      this.createAssessment();
    };

    this.view.datatable.on_click['wxi-trash'] = function (event, id) {
      webix.confirm("Вы действительно хотите удалить выбранный ассессмент?", "confirm-warning").then(() => {
        this.remove(id);
      });
    };

    this.view.datatable.attachEvent('onItemClick', (id, event) => {
      if (event.target.classList.contains('webix_icon')) {
        return false;
      }
      this.startAssessment();
    });

    this.refreshTable()
  }

  startAssessment() {
    this.processWindow.show();
  }

  // функция обновления таблицы ассессментов
  refreshTable() {
    const assessments = assessmentModel.getAssessments()
    assessments.map((assessment) => {
      assessment.date = assessment.date.toLocaleString();
    });

    this.view.datatable.clearAll();
    this.view.datatable.parse(assessments);
  }

  // функция создания ассессмента
  createAssessment() {
    this.window.show();
  }

  // функция изменения ассессмента
  updateAssessment() {

  }

  // функция удаления ассессмента
  deleteAssessment() {

  }
}
