// Employee - класс для представления сущности сотрудника
export class Employee {
  constructor(id, name, firstname, middlename, position, email) {
    this.ID = id
    this.name = name
    this.firstname = firstname
    this.middlename = middlename
    this.position = position
    this.email = email
  }
}
