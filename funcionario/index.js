class Funcionario {
  constructor(nome, id, salarioBase) {
    this.nome = nome;
    this.id = id;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }

  obterDados() {
    return `ID: ${this.id} | Nome: ${
      this.nome
    } | Salário: R$${this.calcularSalario()}`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, id, salarioBase, nivel, linguagem) {
    super(nome, id, salarioBase);

    this.nivel = nivel;
    this.linguagem = linguagem;
    this.bonus = this.calcularBonus();
  }
  calcularBonus() {
    const bonusPorNivel = {
      junior: 0.1,
      pleno: 0.2,
      senior: 0.3,
    };
    return bonusPorNivel[this.nivel] || 0;
  }
}
