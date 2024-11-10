class ContaBancaria {
  constructor(numero, titular, saldoInicial = 0) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Deposito de: R$${valor} realizado, seu saldo atual: R$${this.saldo}`;
    }
    return `valor de deposito invalidao`;
  }

  sacar(valor) {
    if (valor < this.saldo) {
      this.saldo -= valor;
      return `saque no valor de: R$${valor} realizado com sucesso`;
    }
    return "Saldo insuficiente para saque";
  }

  extrato() {
    return `seu saldo atual é de: R$${this.saldo}`;
  }
}

const contaWillian = new ContaBancaria(55577, "Willian Dei Tosi", 200);
console.log(contaWillian.extrato());
console.log(contaWillian.depositar(500));
console.log(contaWillian.sacar(100));
console.log(contaWillian.extrato());
console.log(contaWillian.depositar(-500));
console.log(contaWillian.extrato());
console.log(contaWillian.sacar(700));
console.log(contaWillian.extrato());
