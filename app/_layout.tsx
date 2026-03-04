import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operador, setOperador] = useState('');

  function realizarOperacao() {

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    console.log("----------")
    console.log(n1)
    console.log(n2)
    console.log(operador)
    console.log("----------")

    if (operador === '+') {
      return n1 + n2;
    } else if (operador === '-') {
      return n1 - n2;
    } else if (operador === '*') {
      return n1 * n2;
    } else if (operador === '/') {
      return n1 / n2;
    } else if (operador === 'v') {
      console.log("Calculando raiz quadrada de " + n1)
      return Math.sqrt(n1);
    } else {
      console.log(111111)
      return ''
    }
  }

  function mostrarResultado() {
    console.log("Entrou em mostrar resultado")
    const result = realizarOperacao().toString()
    console.log(result)

    setOperador('')
    setNum2('')
    setNum1(result)
  }

  function escolherNum(num: string) {
    if (operador === '') {
      montarNum1(num)
    } else {
      montarNum2(num)
    }
  }

  function escolherOperador(op: string) {
    if (num1 !== '') {
      montarOperador(op)
    }else{
      alert('Escolha um número primeiro')
    }
  }

  function montarNum1(numero: string) {
    setNum1(num1 + numero)
  }

  function montarNum2(numero: string) {
    setNum2(num2 + numero)
  }

  function montarOperador(op: string) {
    setOperador(op)
  }

  function limpar() {
    setNum1('')
    setNum2('')
    setOperador('')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.display}>
        <Text style={styles.title}>Calculator</Text>
        <Text style={styles.result}>
          {num1} {operador} {num2}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => escolherNum('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operatorButton} onPress={() => escolherOperador('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operatorButton} onPress={() => escolherOperador('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operatorButton} onPress={() => escolherOperador('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operatorButton} onPress={() => escolherOperador('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.specialButton} onPress={() => escolherOperador('v')}>
          <Text style={styles.buttonText}>v</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={() => limpar()}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.equalButton} onPress={() => mostrarResultado()}>
          <Text style={styles.buttonText}>REALIZAR</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    padding: 20,
  },

  display: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: "flex-end",
  },

  title: {
    fontSize: 22,
    color: "#aaa",
  },

  result: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  button: {
    width: "22%",
    height: 65,
    backgroundColor: "#2e2e3e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 8,
  },

  operatorButton: {
    width: "22%",
    height: 65,
    backgroundColor: "#ff9f43",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 8,
  },

  specialButton: {
    width: "22%",
    height: 65,
    backgroundColor: "#10ac84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 8,
  },

  clearButton: {
    width: "48%",
    height: 65,
    backgroundColor: "#ee5253",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 8,
  },

  equalButton: {
    width: "48%",
    height: 65,
    backgroundColor: "#341f97",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

});