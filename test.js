var assessments = [
  { id: 1, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-06-14T15:00').toLocaleString(), status: '', archive: '' },
  { id: 2, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-05-17T12:00').toLocaleString(), status: '', archive: '' },
  { id: 3, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-03-12T10:00').toLocaleString(), status: '', archive: '' },
  { id: 4, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-08-31T21:00').toLocaleString(), status: '', archive: '' },
  { id: 5, theme: 'Тема ассессмента №1', responsible: 'Цаль Виталий Евгеньевич', date: new Date('2019-11-22T12:00').toLocaleString(), status: '', archive: '' },
];
var employees = [
  { id: 1, title: 'Ручка', quantity: 5, cost: 10 },
  { id: 2, title: 'Тетрадь', quantity: 5, cost: 30 },
  { id: 3, title: 'Блокнот', quantity: 5, cost: 20 },
  { id: 4, title: 'Папка', quantity: 5, cost: 100 },
  { id: 5, title: 'Скоросшиватель', quantity: 5, cost: 200 },
];
var candidates = [
  { id: 1, title: 'Ручка', quantity: 5, cost: 10 },
  { id: 2, title: 'Тетрадь', quantity: 5, cost: 30 },
  { id: 3, title: 'Блокнот', quantity: 5, cost: 20 },
  { id: 4, title: 'Папка', quantity: 5, cost: 100 },
  { id: 5, title: 'Скоросшиватель', quantity: 5, cost: 200 },
];

webix.ready(() => {
  webix.ui({
    type: 'space',
    rows: [
      {
        cols: [
          {
            view: "tabbar",
            id: "tabbar",
            value: "assessments",
            multiview: true,
            options: [
              { value: 'Ассессменты', id: 'assessments' },
              { value: 'Сотрудники', id: 'employees' },
              { value: 'Кандидаты', id: 'candidates' }
            ]
          },
          {
            view: "template",
            template: 'Hello World',
            width: 400
          },
        ]
      },
      {
        cells: [
          {
            id: "assessments",
            view: "datatable",
            data: assessments,
            select: true,
            onClick: {
              "wxi-trash": function (event, id) {
                webix.confirm("Delete selected item?", "confirm-warning").then(() => {
                  this.remove(id);
                });
              }
            },
            columns: [
              { id: "id", header: "#", },
              { id: "theme", header: "Тема", fillspace: true },
              { id: "date", header: "Дата проведения", width: 200 },
              { id: "edit", header: "<button onclick = console.log('123')>Add</button>", template: "{common.editIcon()}" },
              { id: "trash", header: "<button onclick = console.log('123')>Search</button>", template: "{common.trashIcon()}" }
            ],
            hover: "datatable_hover"
          },
          {
            id: "employees",
            view: "datatable",
            select: true,
            data: employees,
            columns: [
              { id: "id", header: "#", },
              { id: "title", header: "Название", fillspace: true },
              { id: "quantity", header: "Количество", width: 100 },
              { id: "cost", header: "Цена", width: 100 },
            ],
          },
          {
            id: "candidates",
            view: "datatable",
            select: true,
            data: candidates,
            columns: [
              { id: "id", header: "#", },
              { id: "title", header: "Название", fillspace: true },
              { id: "quantity", header: "Количество", width: 100 },
              { id: "cost", header: "Цена", width: 100 },
              { template: "{common.trashIcon()}" }
            ],
          }
        ]
      },
    ]
  });
});
