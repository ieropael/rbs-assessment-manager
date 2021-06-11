// возвращает webix-конфигурацию таба для работы с ассессментами
export function AssessmentTabView() {
  return {
    id: 'assessments',
    view: 'datatable',
    data: [],
    select: true,
    columns: [
      { id: 'id', header: '#', },
      { id: 'theme', header: 'Тема', fillspace: true },
      { id: 'date', header: 'Дата проведения', width: 300 },
      { id: 'edit', header: '<span class="webix_icon wxi-plus-circle"></span>', template: '{common.editIcon()}' },
      { id: 'trash', header: '<span onclick=console.log(true) class="webix_icon wxi-search"></span>', template: '{common.trashIcon()}' },
    ],
    hover: 'datatable_hover',
    scheme: {
      $init: function (obj) {
        if (obj.Status === 1) {
          obj.$css += ' ';
        }
      }
    }
  }
}
