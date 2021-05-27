// Assessment - класс для представления сущности ассессмента
export class Assessment {
  constructor(id, theme, responsible, date, status, archive) {
    this.ID = id
    this.theme = theme
    this.responsible = responsible
    this.date = date
    this.status = status
    this.archive = archive
  }
}
