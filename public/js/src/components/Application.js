import { checkAuth } from '../../helpers/checkAuth.js';
import WorkPlaceView from './ApplicationView.js';
import { CCandidateTab } from './candidate/CCandidateTab.js';
import { CEmployeeTab } from './employee/CEmployeeTab.js';
import { CAssessmentTab } from './assessment/CAssessmentTab.js';
import { CMainWindow } from './mainWindow/CMainWindow.js';
import { CToolbar } from './toolbar/CToolbar.js';

// галвный компонент приложения
export class Application {
  constructor() {
    this.view                                   // быстрый доступ к объектам представлений
    this.mainWindow = new CMainWindow()         // окно входа в приложение
    this.toolbar = new CToolbar()               // экземпляр контроллера пользовательской информации 
    this.assessmentTab = new CAssessmentTab()   // экземпляр контроллера событий
    this.employeeTab = new CEmployeeTab()       // экземпляр контроллера сотрудников
    this.candidateTab = new CCandidateTab()     // экземпляр контроллера книг
  }

  // метод инициализации главного компонента
  init() {

  }

  // метод отрисовки главной конфигурации представления
  config() {

  }

  // метод вызова обработки событий
  attachEvents() {

  }
}
