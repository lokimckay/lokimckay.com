export const Table = props => (
  <table
    style={{
      marginTop: 16,
      marginBottom: 32,
      width: "100%",
      borderCollapse: "collapse",
    }}
    {...props}
  />
);

export const THead = props => {
  return <th style={{ border: "1px solid #CCCCCC", padding: 16 }} {...props} />;
};

export const TBody = props => {
  return <tbody {...props} />;
};

export const TRow = props => {
  return <tr {...props} />;
};

export const TData = props => (
  <td
    style={{
      border: "1px solid #CCCCCC",
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 16,
      paddingRight: 16,
    }}
    {...props}
  />
);
