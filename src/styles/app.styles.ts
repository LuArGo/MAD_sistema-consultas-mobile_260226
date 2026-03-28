import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008d8d",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#b2fdde",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    color: "#b2fdde",
    opacity: 0.9,
  },
  rodape: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(178, 253, 222, 0.15)",
    borderRadius: 12,
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#b2fdde",
    textAlign: "center",
    lineHeight: 18,
  },
});