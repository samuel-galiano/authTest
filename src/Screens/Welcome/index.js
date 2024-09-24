import * as React from "react";
import * as Native from "react-native"

export function Welcome() {
    return (
        <Native.View style={styles.container}>
            <Native.View style={styles.containerText}>
                <Native.Text style={styles.title}>Monitore e Organize</Native.Text>
                <Native.Text style={styles.text}>faça login para começar...</Native.Text>
            </Native.View>
            <Native.View style={styles.containerForm}>
                <Native.TouchableOpacity style={styles.button}>
                    <Native.Text style={styles.buttonText}>ACESSAR</Native.Text>
                </Native.TouchableOpacity>
            </Native.View>
        </Native.View>
    );
}

const styles = Native.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38A69D",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#ebebeb",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    containerText: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#ebebeb",
        fontSize: 40,
        fontWeight: "bold",
    },
    text: {
        color: "#ebebeb",
        fontSize: 20
    },
    button: {
        backgroundColor: "#38A69D",
        padding: 20,
        borderRadius: 10,
        width: '60%'
    },
    buttonText: {
        color: "#ebebeb",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center"
    }
})