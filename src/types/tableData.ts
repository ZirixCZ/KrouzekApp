export interface tableData {
  name: string;
  actions: rowAction[];
}

export interface rowAction {
  src: string;
  href: string;
}

export interface headingType {
  name: string;
  width?: string;
}
