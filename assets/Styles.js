import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        marginTop: 10,
    },
})

export const cardStyles = StyleSheet.create({
    item: {
        padding: 16,
        marginBottom: 16,
        borderColor: '#009688',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "white"
    },
})

export const formStyles = StyleSheet.create({
    container: {
        justifyContent:'center',
        marginTop: 20,
        padding: 20
    },
    formContainer: {
        padding: 25
    },
    paragraph: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e"
    },
    input: {
        padding: 10,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: "white"
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})