export interface Item {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  swimlaneId: string;
}

export interface Swimlane {
  id: string;
  name: string;
}

export type Range = {
  rangeStart: Date;
  rangeEnd: Date;
};
