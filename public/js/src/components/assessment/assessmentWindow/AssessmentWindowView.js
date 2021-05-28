// возвращает webix конфигурации окна для работы с сущностью ассессмента
export default function AssessmentWindowView() {
  return {
    id: "assessmentWindow",
    view: "window",
    modal: true,
    width: 500,
    position: "center",
    head: {
      view: "toolbar", elements: [
        {
          template: "Добавление нового ассессмента"
        },
        // Кнопка закрытия формы добавления нового товара,
        // при нажатии на которую очищаются поля формы
        {
          view: "icon", id: "close_form_button", icon: "wxi-close"
        }
      ]
    },
    body: {
      rows: [
        // Форма добавления нового товара
        {
          view: "form",
          id: "add_form",
          width: 400,
          elementsConfig: { labelPosition: "top", bottomPadding: 18 },
          elements: [
            {
              view: "text", name: "title", id: "input_title", label: "Наименование",
              invalidMessage: "Введите наименование товара"
            },
            {
              view: "text", name: "quantity", id: "input_quantity", label: "Количество",
              invalidMessage: "Введите количество товара (число больше ноля) "
            },
            {
              view: "text", name: "cost", id: "input_cost", label: "Цена",
              invalidMessage: "Введите стоимость товара (число больше ноля)"
            }
          ],
          // Правила валидации данных в форме
          rules: {
            title: webix.rules.isNotEmpty,
            quantity: function (value) { return parseFloat(value) == value && value > 0; },
            cost: function (value) { return parseFloat(value) == value && value >= 0; }
          },
        },
        // Кнопка добавления данных нового товара из формы в таблицу "Склад",
        // но если данные не прошли валидацию, появятся сообщения об ошибках
        {
          view: "button", id: "add_product", value: "Добавить"
        },
      ]
    }
  };
}
