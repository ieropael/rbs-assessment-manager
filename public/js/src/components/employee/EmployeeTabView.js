// возвращает webix-конфигурацию таба для работы с сотрудниками
export function EmployeeTabView() {
  return {
    id: 'employees',
    view: 'datatable',
    select: true,
    data: [],
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
