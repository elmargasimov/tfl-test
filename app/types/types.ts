interface ILineStatuses {
  statusSeverityDescription: {},
  id: number
}

export interface ILine {
  id: string;
  name: string;
  lineStatuses: ILineStatuses[]
}
