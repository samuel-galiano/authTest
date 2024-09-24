import * as React from "react";
import * as Native from "react-native"
import * as Animatable from "react-native-animatable"

export function Welcome() {
    return (
        <Native.View style={styles.container}>
            <Native.View style={styles.containerText}>
                <Native.Text style={styles.title}>Monitore e Organize</Native.Text>
                <Native.Text style={styles.text}>faça login para começar...</Native.Text>
            </Native.View>
            <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={1250}>
                <Native.TouchableOpacity style={styles.button}>
                    <Native.Text style={styles.buttonText}>ACESSAR</Native.Text>
                </Native.TouchableOpacity>
            </Animatable.View>
        </Native.View>
    );
}

const styles = Native.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#86101D",
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
        flex: 6,
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
        backgroundColor: "#86101D",
        padding: 20,
        borderRadius: 10,
        width: '60%'
    },
    buttonText: {
        color: "#ebebeb",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        fontWeight: "bold"
    }
})