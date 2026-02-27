import PageBlock from "./PageBlock";

export default function TerminalOutput({ outputItems }) {
  return (
    <div className="pb-4 leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
      {outputItems.map((item, i) => {
        if (item.type === "text") {
          return (
            <span key={i} style={{ color: "#00ffcc" }}>
              {item.content}
              {"\n"}
            </span>
          );
        }
        if (item.type === "page") {
          return <PageBlock key={i} page={item.page} />;
        }
        return null;
      })}
    </div>
  );
}