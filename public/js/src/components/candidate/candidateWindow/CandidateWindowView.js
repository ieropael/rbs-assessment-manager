// возвращает webix конфигурации окна для работы с сущностью кандидата
export default function CandidateWindowView() {
  return {
    id: "candidateWindow",
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
          id: "closecandidateWindow",
          icon: "wxi-close",
          // Обработка нажатия на кнопку закрытия формы добавления нового ассессмента
          click: () => {
            $$("newcandidateForm").clear();
            $$("newcandidateForm").clearValidation();
            $$("candidateWindow").hide();
          }
        }
      ]
    },
    body: {
      rows: [
        // Форма добавления нового ассессмента
        {
          view: "form",
          id: "newcandidateForm",
          width: 400,
          elementsConfig: { labelPosition: "top", bottomPadding: 18 },
          elements: [
            {
              view: "text", name: "theme", id: "inputcandidateName", label: "Имя",
              invalidMessage: "Введите тему ассессмента"
            },
            {
              view: "text", name: "date", id: "inputcandidateLastname", label: "Фамилия",
              invalidMessage: "Введите корректную дату"
            },
            {
              view: "text", name: "theme", id: "inputcandidateMiddlename", label: "Отчество",
              invalidMessage: "Введите тему ассессмента"
            },
            {
              view: "text", name: "date", id: "inputcandidateBirthday", label: "Дата рождения",
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
          id: "addcandidate",
          value: "Добавить",
          click: () => {
            if ($$("newcandidateForm").validate()) {
              refresh();
              $$("newcandidateForm").clear();
              $$("candidateWindow").hide();
            }
          }
        },
      ]
    }
  };
}
