import React from "react";

export interface tableData {
  name: string;
  actions: rowAction[];
}

export interface rowAction {
  children: React.ReactNode;
  query: string;
}

export interface headingType {
  name: string;
  width?: string;
}
