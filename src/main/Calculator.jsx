import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: "false",
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log("clear");
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "="; //usuario clicando no '='
      const currentOperation = this.state.operation; //pegando a operacao anterior
      const values = [...this.state.values];
      //minha operação pegando os valores e montando a expressão
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
    console.log(operation);
  }

  addDigit(n) {
    //primeira validação para não deixar passar 2 pontos, se o usuario
    //se ja existir um . não deixa o usuario digitar mais 1 (Ponto .)
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    //segunda validação para limpar o display = só vai limpar se o digito for 0
    //ou flag do estado estiver true
    //removendo o 0 da esquerda
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
      console.log(values);
    }
  }

  render() {
    return (
      <div className='calculator'>
        <Display value={this.state.displayValue} />
        <Button label='AC' click={this.clearMemory} triple />
        <Button label='/' click={this.setOperation} operation />
        <Button label='7' click={this.addDigit} />
        <Button label='8' click={this.addDigit} />
        <Button label='9' click={this.addDigit} />
        <Button label='*' click={this.setOperation} operation />
        <Button label='4' click={this.addDigit} />
        <Button label='5' click={this.addDigit} />
        <Button label='6' click={this.addDigit} />
        <Button label='-' click={this.setOperation} operation />
        <Button label='1' click={this.addDigit} />
        <Button label='2' click={this.addDigit} />
        <Button label='3' click={this.addDigit} />
        <Button label='+' click={this.setOperation} operation />
        <Button label='0' click={this.addDigit} double />
        <Button label='.' click={this.addDigit} />
        <Button label='=' click={this.setOperation} operation />
      </div>
    );
  }
}
