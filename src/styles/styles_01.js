import { StyleSheet } from "react-native";

export const styles_01 = StyleSheet.create({
    button_fav: {
        backgroundColor: "#FF5733",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    button_del: {
        backgroundColor: "#FF1720",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 5,
    },
    deleteAllButton: {
        backgroundColor: '#C70039',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    floating_button: {
        position: "absolute",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        right: 30,
        bottom: 30,
        backgroundColor: "#FF5733",
        borderRadius: 30,
        elevation: 8
    },
    button_fav_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
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
