// Define a model for the row data
export interface Row {
  field: any[];
}

// Define a model for the result set
export interface ResultSet {
  row: Row[];
}

export interface Bible {
  resultset: ResultSet;
}
