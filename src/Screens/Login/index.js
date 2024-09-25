import * as React from "react";
import * as Native from "react-native"
import * as Animatable from "react-native-animatable"

import { useAuth } from "../../Contexts/auth";
import { loginStyle } from "./style";
import { fazerLogin } from "../../Services/auth";

export function Login() {
    const { signed, user, signIn } = useAuth()
    function handleSingIn() {
        signIn()
    }
    return (
        <Native.View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Native.Text style={styles.message}>Bem-vindo(a)</Native.Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUp"} delay={1500} style={styles.containerForm}>
                <Native.Text style={styles.tittle}>Matrícula</Native.Text>
                <Native.TextInput placeholder="Digite uma matrícula..." style={styles.input} />

                <Native.Text style={styles.tittle}>Senha</Native.Text>
                <Native.TextInput placeholder="Digite uma senha" style={styles.input} secureTextEntry/>

                <Native.TouchableOpacity style={styles.button} onPress={() => handleSingIn()}>
                    <Native.Text style={styles.buttonText}>LOGIN</Native.Text>
                </Native.TouchableOpacity>
                <Native.TouchableOpacity style={styles.buttonRegister}>
                    <Native.Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Native.Text>
                </Native.TouchableOpacity>
            </Animatable.View>
        </Native.View>
    );
}
const styles = Native.StyleSheet.create( loginStyle )