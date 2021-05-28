// возвращает webix-конфигурацию вкладок и панели пользователя
export default function ToolbarView() {
  return {
    cols: [
      {
        id: 'tabbar',
        view: 'tabbar',
        value: 'assessments',
        multiview: true,
        options: [
          { value: 'Ассессменты', id: 'assessments' },
          { value: 'Сотрудники', id: 'employees' },
          { value: 'Кандидаты', id: 'candidates' },
        ],
      },
      {
        id: 'userInfo',
        view: 'template',
        type: 'header',
        template: 'Цаль В.А.',
        css: 'webix_header webix_dark',
        width: 200,
      },
      {
        id: 'logOut',
        view: 'icon',
        icon: 'wxi-user',
      },
    ]
  }
}
