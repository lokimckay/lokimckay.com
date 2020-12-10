const DefaultEvent = ({ name, date }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#6C757D",
        paddingLeft: 32,
        paddingRight: 32,
        marginBottom: 16,
      }}
    >
      <span>{name}</span>
      <span>{date}</span>
    </div>
  );
};

export default event => {
  return <DefaultEvent {...event} />;
};
