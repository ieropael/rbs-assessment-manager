// возвращает webix конфигурации окна проведения ассессмента
export default function AssessmentProcessWindowView() {
  return {
    id: "assessmentProcessWindow",
    view: "window",
    fullscreen: true,
    head: {
      view: "toolbar", elements: [
        {
          template: "Проведение ассессмента"
        },
        // Кнопка закрытия формы добавления нового ассессмента,
        // при нажатии на которую очищаются поля формы
        {
          view: "icon",
          id: "closeAssessmProcess",
          icon: "wxi-close",
          // Обработка нажатия на кнопку закрытия формы добавления нового ассессмента
          click: () => {
            $$("assessmentProcessWindow").hide();
          }
        }
      ]
    },
    body: {
      id: 'assessmentProcessBody',
      rows: [
        {
          cols: [
            {
              id: 'assessmentTabbar',
              view: 'tabbar',
              value: '123',
              multiview: true,
              options: [
                { value: 'Назначение сотрудников', },
                { value: 'Приглашение кандидатов', },
                { value: 'В процессе', },
                { value: 'Ожидание оценки', },
                { value: 'Итоги', },
              ],
            },
          ]
        },
        {
          cells: [
            {
              id: 'assessmentProcess',
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
            }
          ],
        },
      ],
    }
  };
}
