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

const Index = event => {
  return <DefaultEvent {...event} />;
};

export default Index;
