// возвращает webix-конфигурацию таба для работы с кандидатами
export function CandidateTabView() {
  return {
    id: 'candidates',
    view: 'datatable',
    select: true,
    data: [],
    columns: [
      { id: 'id', header: '#', },
      { id: 'lastname', header: 'Фамилия' },
      { id: 'name', header: 'Имя' },
      { id: 'middlename', header: 'Отчество', fillspace: true },
      { id: 'birthday', header: 'Дата рождения', width: 200 },
      { id: 'edit', header: '<span class="webix_icon wxi-plus-circle"></span>', template: '{common.editIcon()}' },
      { id: 'trash', header: '<span class="webix_icon wxi-search"></span>', template: '{common.trashIcon()}' },
    ],
  }
}
