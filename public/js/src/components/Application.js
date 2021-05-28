import { checkAuth } from '../../helpers/checkAuth.js';
import { CMainWindow } from './mainWindow/CMainWindow.js';
import WorkPlaceView from './ApplicationView.js';
import { CToolbar } from './toolbar/CToolbar.js';
import { CAssessmentTab } from './assessment/CAssessmentTab.js';
import { CEmployeeTab } from './employee/CEmployeeTab.js';
import { CCandidateTab } from './candidate/CCandidateTab.js';

// галвный компонент приложения
export class Application {
  constructor() {
    this.view                                   // быстрый доступ к объектам представлений
    this.mainWindow = new CMainWindow()         // окно входа в приложение
    this.toolbar = new CToolbar()               // экземпляр контроллера вкладок и панели пользователя
    this.assessmentTab = new CAssessmentTab()   // экземпляр контроллера ассессментов
    this.employeeTab = new CEmployeeTab()       // экземпляр контроллера сотрудников
    this.candidateTab = new CCandidateTab()     // экземпляр контроллера кандидатов
  }

  // метод инициализации главного компонента
  init() {

  }

  // метод отрисовки главной конфигурации представления
  config() {
    return WorkPlaceView(this.toolbar, this.assessmentTab, this.employeeTab, this.candidateTab);
  }

  // метод вызова обработки событий
  attachEvents() {

  }
}
