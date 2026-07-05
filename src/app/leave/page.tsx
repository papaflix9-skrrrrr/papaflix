export default function LeavePage() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        color: "#f5f3ff",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Você optou por não continuar.</h1>

        <p style={{ marginTop: 12, color: "#a1a1aa" }}>
          Este conteúdo é destinado apenas para maiores de idade.
        </p>
      </div>
    </main>
  );
}