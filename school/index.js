class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  nomeAluno() {
    return `Ola, eu sou o ${this.nome}`;
  }

  adicionarNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.notas.push(nota);
      return `nota ${nota} adicionada com sucesso`;
    }
    return "Nota precisa ser entre 0 e 10";
  }

  #calcularMedia() {
    if (this.notas.length === 0) return 0;

    const totalNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
    return totalNotas / this.notas.length;
  }

  aprovadoOuReprovado() {
    const media = this.#calcularMedia();
    if (media >= 6) return `APROVAODO COM MEDIA: ${media.toFixed(2)}`;
    if (media <= 5) return `REPROVAOD COM MEDIA: ${media.toFixed(2)}`;
  }
}

const aluno = new Aluno("Maria Santos");
console.log(aluno.nomeAluno());
console.log(aluno.adicionarNota(8));
console.log(aluno.adicionarNota(7));
console.log(aluno.adicionarNota(9));
console.log(aluno.aprovadoOuReprovado());
console.log(aluno.cal);
