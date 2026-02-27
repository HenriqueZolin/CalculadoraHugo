import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operador, setOperador] = useState('');

  function realizarOperacao() {

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operador === '+') {
      return n1 + n2;
    } else if (operador === '-') {
      return n1 - n2;
    } else if (operador === '*') {
      return n1 * n2;
    } else if (operador === '/') {
      return n1 / n2;
    } else {
      return null
    }
  }

  function escolherNum(num: string) {
    if (operador === '') {
      montarNum1(num)
    } else {
      montarNum2(num)
    }
  }

  function montarNum1(numero: string) {
    setNum1(num1 + numero)
  }

  function montarNum2(numero: string) {
    setNum2(num2 + numero)
  }

  return (
    <>
      <SafeAreaView>
        <Text>Calculator</Text>
        <Text>{num1} {operador} {num2}</Text>

        <TouchableOpacity onPress={}>
          <Text>0</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ }>
          <Text key={0}>0</Text>
          <Text key={1}>1</Text>
          <Text key={2}>2</Text>
          <Text key={3}>3</Text>
          <Text key={4}>4</Text>
          <Text key={5}>5</Text>
          <Text key={6}>6</Text>
          <Text key={7}>7</Text>
          <Text key={8}>8</Text>
          <Text key={9}>9</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}