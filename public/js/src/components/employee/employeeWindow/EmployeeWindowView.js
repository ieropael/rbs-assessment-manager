// возвращает webix конфигурации окна для работы с сущностью сотрудника
export default function EmployeeWindowView() {
  return {
    id: "employeeWindow",
    view: "window",
    modal: true,
    width: 500,
    position: "center",
    head: {
      view: "toolbar", elements: [
        {
          template: "Добавление нового сотрудника"
        },
        // Кнопка закрытия формы добавления нового сотрудника,
        // при нажатии на которую очищаются поля формы
        {
          view: "icon",
          id: "closeEmployeeWindow",
          icon: "wxi-close",
          // Обработка нажатия на кнопку закрытия формы добавления нового ассессмента
          click: () => {
            $$("newEmployeeForm").clear();
            $$("newEmployeeForm").clearValidation();
            $$("employeeWindow").hide();
          }
        }
      ]
    },
    body: {
      rows: [
        // Форма добавления нового ассессмента
        {
          view: "form",
          id: "newEmployeeForm",
          width: 400,
          elementsConfig: { labelPosition: "top", bottomPadding: 18 },
          elements: [
            {
              view: "text", name: "theme", id: "inputEmployeeName", label: "Имя",
              invalidMessage: "Введите тему ассессмента"
            },
            {
              view: "text", name: "date", id: "inputEmployeeLastname", label: "Фамилия",
              invalidMessage: "Введите корректную дату"
            },
            {
              view: "text", name: "theme", id: "inputEmployeeMiddlename", label: "Отчество",
              invalidMessage: "Введите тему ассессмента"
            },
            {
              view: "text", name: "date", id: "inputEmployeeBirthday", label: "Дата рождения",
              invalidMessage: "Введите корректную дату"
            },
          ],
          // Правила валидации данных в форме
          rules: {
            theme: webix.rules.isNotEmpty,
            date: webix.rules.isNotEmpty,
          },
        },
        // Кнопка добавления данных нового ассессмента из формы в таблицу "Ассессменты".
        // В случае, если данные не прошли валидацию, появится сообщения об ошибках.
        {
          view: "button",
          id: "addEmployee",
          value: "Добавить",
          click: () => {
            if ($$("newEmployeeForm").validate()) {
              refresh();
              $$("newEmployeeForm").clear();
              $$("employeeWindow").hide();
            }
          }
        },
      ]
    }
  };
}
