import * as React from "react"
import * as Native from "react-native"
import * as Animatable from "react-native-animatable"
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { welcomeStyle as styles } from "./style"

type RootStackParamList = {
    Login: undefined
}

export function Welcome() {
    const nav = useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <Native.View style={styles.container}>
            <Native.View style={styles.containerText}>
                <Native.Text style={styles.title}>Sistema de Autenticação Teste</Native.Text>
                <Native.Text style={styles.text}>faça login para começar...</Native.Text>
            </Native.View>
            <Animatable.View style={styles.containerForm} animation={"fadeInUp"} delay={1250}>
                <Native.TouchableOpacity style={styles.button} onPress={() => nav.navigate("Login")}>
                    <Native.Text style={styles.buttonText}>ACESSAR</Native.Text>
                </Native.TouchableOpacity>
            </Animatable.View>
        </Native.View>
    )
}
