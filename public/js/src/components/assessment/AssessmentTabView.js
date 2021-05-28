// возвращает webix-конфигурацию таба для работы с ассессментами
export function AssessmentTabView() {
  var assessments = [
    { id: 1, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-06-14T15:00').toLocaleString(), status: '', archive: '' },
    { id: 2, theme: 'Тема ассессмента №2', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-05-17T12:00').toLocaleString(), status: '', archive: '' },
    { id: 3, theme: 'Тема ассессмента №3', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-03-12T10:00').toLocaleString(), status: '', archive: '' },
    { id: 4, theme: 'Тема ассессмента №4', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-08-31T21:00').toLocaleString(), status: '', archive: '' },
    { id: 5, theme: 'Тема ассессмента №5', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-11-22T12:00').toLocaleString(), status: '', archive: '' },
  ];
  return {
    id: 'assessments',
    view: 'datatable',
    data: assessments,
    select: true,
    columns: [
      { id: 'id', header: '#', },
      { id: 'theme', header: 'Тема', fillspace: true },
      { id: 'date', header: 'Дата проведения', width: 300 },
      { id: 'edit', header: '<span class="webix_icon wxi-plus-circle"></span>', template: '{common.editIcon()}' },
      { id: 'trash', header: '<span onclick=console.log(true) class="webix_icon wxi-search"></span>', template: '{common.trashIcon()}' },
    ],
    hover: 'datatable_hover',
    onClick: {
      "wxi-plus-circle": function (event, id, node) {

      }
    }
  }
}
