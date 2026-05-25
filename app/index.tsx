
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FordCare AI</Text>
      <Text style={styles.subtitle}>
        Plataforma inteligente de retenção de clientes
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F5F7FA"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#003478",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#003478",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
