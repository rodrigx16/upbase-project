import { StyleSheet } from "react-native";

const fontSize14 = 14;
const backgroundColor = '#7B2CBF';

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#762CBF",
  },
  welcomeText: {
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  buttonSelected: {
    backgroundColor: backgroundColor,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginRight: 10,
  },
  buttonUnselected: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  buttonTextSelected: {
    color: "#FFFFFF",
    fontSize: fontSize14,
  },
  buttonTextUnselected: {
    fontSize: fontSize14,
  },
  messageContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  sadFace: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  messageText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 20,
  },
  registerButton: {
    borderWidth: 1,
    borderColor: "#802cbc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  registerButtonText: {
    color: '#802cbc',
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: backgroundColor,
    paddingVertical: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 111,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  footerIcon: {
    width: 45,
    height: 45,
    marginBottom: 25,
  },
});
