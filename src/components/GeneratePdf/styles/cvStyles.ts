// styles/cvStyles.ts
import { StyleSheet } from "@react-pdf/renderer";

export const cvStyle1 = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomStyle: "solid",
    paddingBottom: 4,
    textTransform: "capitalize",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: 700,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  label: {
    width: "30%",
    fontWeight: 700,
  },
  value: {
    width: "70%",
  },
});

export const cvStyle2 = StyleSheet.create({
  ...cvStyle1,
  header: {
    ...cvStyle1.header,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 4,
    borderBottomWidth: 0,
  },
});
