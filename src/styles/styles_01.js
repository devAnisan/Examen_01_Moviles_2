import { StyleSheet } from "react-native";

export const styles_01 = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginTop: 40
      },
      item: {
        display:"flex",
        justifyContent:"center",
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
      },
      text_Item: {
        fontSize: 15,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      }
})