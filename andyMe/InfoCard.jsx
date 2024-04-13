import { StyleSheet, View, Text } from "react-native"

export const InfoCard = ({ title, children, color }) => {
  return <View style={[styles.infoCard, { backgroundColor: color }]}>
    <Text style={styles.infoCardTitle}>{title}</Text>
    {children}
  </View>
}

const styles = StyleSheet.create({
  infoCard: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 16,
    padding: 12,
  },
  infoCardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  }
})