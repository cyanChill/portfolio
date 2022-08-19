const CopyrightInfo = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "clamp(0.75rem, 3vw, 1rem)" }}>
      © Copyright {new Date().getFullYear()}, Anthony Liang
    </div>
  );
};

export default CopyrightInfo;
