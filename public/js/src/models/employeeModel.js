import Model from '../../helpers/model.js';

// EmployeeModel - объект для работы (CRUD) с данными
class EmployeeModel extends Model {
  constructor() {
    super()
  }

  // получение всех сотрудников
  getEmployees() {
    return this.get();
  }

  // получение сотрудника по его ID
  getEmployeeByID(id) {
    return this.get();
  }

  // создание нового сотрудника
  createEmployee(emp) {
    return this.post();
  }

  // редактирование сотрудника
  updateEmployee(emp) {
    return this.post();
  }

  // удаление сотрудника
  deleteEmployee(emp) {
    return this.post();
  }
}

const employeeModel = new EmployeeModel();
export default employeeModel;
