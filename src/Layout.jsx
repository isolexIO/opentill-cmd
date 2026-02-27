export default function Layout({ children }) {
  return (
    <div style={{ margin: 0, padding: 0, background: "#000", minHeight: "100vh" }}>
      {children}
    </div>
  );
}