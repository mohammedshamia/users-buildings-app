export interface Building {
  name: string;
  position: number[];
  id: string;
}
export interface User {
  name: string;
  id: string;
  buildingList: Building[];
}
