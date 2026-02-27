import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operador, setOperador] = useState('');

  function realizarOperacao() {

    console.log("num1:", num1)
    console.log("num2:", num2)

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
    } else if(operador === 'rq'){
      return ''
    } else {
      return ''
    }
  }

  function mostrarResultado(){

      const result = realizarOperacao().toString()
      console.log(result)

      montarNum1(result)
      setOperador('')
      montarNum2('')
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

  function escolherOperador(op: string) {
    setOperador(op)
  }

  return (
    <>
      <SafeAreaView>
        <Text>Calculator</Text>
        <Text>{num1} {operador} {num2}</Text>

        <TouchableOpacity onPress={() => escolherNum('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('9')}>
          <Text>9</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => escolherNum('+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('*')}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('/')}>
          <Text>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => escolherNum('rq')}>
          <Text>rq</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 
          mostrarResultado()
        }>
          <Text>REALIZAR CONTA</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}