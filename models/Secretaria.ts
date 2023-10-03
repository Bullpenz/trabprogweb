export class Secretaria {
    private nome: string;
    private RG: number;
  
    constructor(nome: string, RG: number) {
      this.nome = nome;
      this.RG = RG;
    }
  
    public cadastroPaciente(): void {
      // Lógica para cadastrar um novo paciente
    }
  
    public gerarNome(): string {
      // Lógica para gerar um novo nome
      return '';
    }
  
    public gerarSenha(): number {
      // Lógica para gerar uma nova senha
      return 0;
    }
  
    public agendarConsulta(): void {
      // Lógica para agendar uma consulta
    }
  
    public emiteRelatorio(): void {
      // Lógica para emitir um relatório
    }
  
    public confereAgenda(): void {
      // Lógica para conferir a agenda
    }
  
    public alterarAgenda(): void {
      // Lógica para alterar a agenda
    }
  }
  