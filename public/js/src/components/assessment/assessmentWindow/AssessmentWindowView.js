// возвращает webix-конфигурацию окна для работы с сущностью ассессмента
export default function AssessmentWindowView() {
  return {
    id: 'assessmentWindow',
    view: 'window',
    modal: true,
    width: 500,
    position: 'center',
    head: {
      view: 'template',
      id: 'bookWindowLabel',
      template: 'Добавление нового ассессмента',
      css: 'webix_template',
    },
    body: {
      // Форма добавления нового ассессмента
      view: 'form',
      id: 'newAssessmentForm',
      elementsConfig: {
        labelPosition: 'top',
        bottomPadding: 15,
      },
      elements: [
        {
          view: 'text',
          id: 'inputAssessmentTheme',
          name: 'theme',
          label: 'Тема ассессмента',
          required: true,
          invalidMessage: 'Введите тему ассессмента'
        },
        {
          view: 'datepicker',
          id: 'inputAssessmentDate',
          name: 'date',
          label: 'Дата проведения',
          required: true,
          invalidMessage: 'Введите корректную дату'
        },
        {
          cols: [
            {
              view: 'button',
              id: 'assessmentConfirmBtn',
              value: 'Применить',
            },
            {
              view: 'button',
              id: 'assessmentCancelBtn',
              value: 'Отмена',
            },
          ]
        },
      ],
      // Правила валидации данных в форме
      rules: {
        theme: webix.rules.isNotEmpty,
        date: webix.rules.isNotEmpty,
      },
    },
    // Кнопка добавления данных нового ассессмента из формы в таблицу 'Ассессменты'.
    // В случае, если данные не прошли валидацию, появится сообщения об ошибках.
    // {
    //   view: 'button',
    //   id: 'add_product',
    //   value: 'Добавить',
    //   click: () => {
    //     if ($$('add_form').validate()) {
    //       refresh();
    //       $$('add_form').clear();
    //       $$('assessmentWindow').hide();
    //     }
    //   }
    // },
  };
}
