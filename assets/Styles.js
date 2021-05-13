import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 12,
        height: 12,
        borderColor: '#CD9341',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#0E3F40',
        marginRight: 15,
    },
    arrow: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor:'#CD9341',
        transform: [
            { rotate: '90deg' }
        ],
        margin: 0,
        marginLeft: -6,
        borderWidth: 0,
    },
    logo: {
        width: 100,
        height: 100
    },
    imageContainer: {
        alignItems: 'center',
    },

})

export const addStyles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 325,

    },
    addWrapper: {
        width: 50,
        height: 47,
        backgroundColor: '#0E3F40',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CD9341',
        borderWidth: 1,
    },
    addText: {
        color: '#FFFFFF'
    },
})

export const splashStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0E3F40',
        justifyContent: 'center',
        alignItems: 'center',
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

export const swipeStyles = StyleSheet.create({
    rowBack: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    backRightBtn: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        width: 200,
        height: 44,
        alignItems: 'center',

    },
    backRightBtnRight: {
        paddingVertical: 15,
        paddingHorizontal: 6,
        backgroundColor: 'red',
        width: 155,
        height: 44,
        alignItems: 'center',
        textAlign: 'right'
    },
})