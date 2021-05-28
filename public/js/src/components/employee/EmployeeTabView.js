// возвращает webix-конфигурацию таба для работы с сотрудниками
export function EmployeeTabView() {
  var employees = [
    {
      id: 1,
      name: 'Виталий',
      lastname: 'Цаль',
      middlename: 'Альбертович',
      position: 'Величайший',
      email: 'evilarthas@hiddenpool.com',
      archive: '',
    },
    {
      id: 2,
      name: 'Виталий',
      lastname: 'Цаль',
      middlename: 'Альбертович',
      position: 'Величайший',
      email: 'evilarthas@hiddenpool.com',
      archive: '',
    },
    {
      id: 3,
      name: 'Виталий',
      lastname: 'Цаль',
      middlename: 'Альбертович',
      position: 'Величайший',
      email: 'evilarthas@hiddenpool.com',
      archive: '',
    },
    {
      id: 4,
      name: 'Виталий',
      lastname: 'Цаль',
      middlename: 'Альбертович',
      position: 'Величайший',
      email: 'evilarthas@hiddenpool.com',
      archive: '',
    },
    {
      id: 5,
      name: 'Виталий',
      lastname: 'Цаль',
      middlename: 'Альбертович',
      position: 'Величайший',
      email: 'evilarthas@hiddenpool.com',
      archive: '',
    },
  ];
  return {
    id: 'employees',
    view: 'datatable',
    select: true,
    data: employees,
    columns: [
      { id: 'id', header: '#', },
      { id: 'lastname', header: 'Фамилия' },
      { id: 'name', header: 'Имя' },
      { id: 'middlename', header: 'Отчество', fillspace: true },
      { id: 'position', header: 'Должность', width: 200 },
      { id: 'edit', header: '<span class="webix_icon wxi-plus-circle"></span>', template: '{common.editIcon()}' },
      { id: 'trash', header: '<span class="webix_icon wxi-search"></span>', template: '{common.trashIcon()}' },
    ],
  }
}
