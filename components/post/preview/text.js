const Text = ({ title, date }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 32,
        paddingRight: 32,
        marginBottom: 16,
      }}
    >
      <span>{title}</span>
      <span>{date}</span>
    </div>
  );
};

export default Text;
