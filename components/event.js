export default ({ event }) => {
  const { date, name } = event;
  const style = { textAlign: "center", marginBottom: 16 };
  return <div style={style}>{`${date} - ${name}`}</div>;
};
