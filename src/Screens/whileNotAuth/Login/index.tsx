import * as React from "react";
import * as Native from "react-native";
import * as Animatable from "react-native-animatable";

import { useAuth } from "../../../Contexts/auth";
import { loginStyle as styles } from "./style";

export function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <Native.View style={styles.container}>
      <Animatable.View
        animation={"fadeInLeft"}
        delay={500}
        style={styles.containerHeader}
      >
        <Native.Text style={styles.message}>Bem-vindo(a)</Native.Text>
      </Animatable.View>

      <Animatable.View
        animation={"fadeInUp"}
        delay={1500}
        style={styles.containerForm}
      >
        <Native.Text style={styles.title}>Email</Native.Text>
        <Native.TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Native.Text style={styles.title}>Senha</Native.Text>
        <Native.TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Native.TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Native.Text style={styles.buttonText}>LOGIN</Native.Text>
        </Native.TouchableOpacity>

        <Native.TouchableOpacity style={styles.buttonRegister}>
          <Native.Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Native.Text>
        </Native.TouchableOpacity>
      </Animatable.View>
    </Native.View>
  );
}
