import * as React from "react";
import * as Native from "react-native"
import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native"
import { welcomeStyle } from "./style";

export function Welcome() {
    const navigation = useNavigation()
    return (
        <Native.View style={styles.container}>
            <Native.View style={styles.containerText}>
                <Native.Text style={styles.title}>Monitore e Organize</Native.Text>
                <Native.Text style={styles.text}>faça login para começar...</Native.Text>
            </Native.View>
            <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={1250}>
                <Native.TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                    <Native.Text style={styles.buttonText}>ACESSAR</Native.Text>
                </Native.TouchableOpacity>
            </Animatable.View>
        </Native.View>
    );
}

const styles = Native.StyleSheet.create( welcomeStyle )