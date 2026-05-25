
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Veículo</Text>
        <Text>Ford Ranger 2025</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Próxima Revisão</Text>
        <Text>15 dias restantes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>IA de Retenção</Text>
        <Text>Cliente com alta chance de retorno</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Oferta Inteligente</Text>
        <Text>20% OFF em revisão premium</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003478",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  }
});
