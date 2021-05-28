// Employee - класс для представления сущности сотрудника
export class Employee {
  constructor(id, name, lastname, middlename, position, email, archive) {
    this.ID = id
    this.name = name
    this.lastname = lastname
    this.middlename = middlename
    this.position = position
    this.email = email
    this.archive = archive
  }
}
