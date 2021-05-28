// возвращает webix-конфигурацию рабочего пространства приложения
export default function WorkPlaceView(toolbar, assessmentTab, employeeTab, candidateTab) {
  return {
    id: 'workPlace',
    rows: [
      toolbar.config(),
      {
        cells: [
          assessmentTab.config(),
          employeeTab.config(),
          candidateTab.config(),
        ]
      },
    ]
  }
}
