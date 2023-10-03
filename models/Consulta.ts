export class Consulta {
    private nomePaciente: string;
    private nomeMedico: string;
    private data: Date;
  
    constructor(nomePaciente: string, nomeMedico: string, data: Date) {
      this.nomePaciente = nomePaciente;
      this.nomeMedico = nomeMedico;
      this.data = data;
    }
  
    public registrarConsulta(): void {
      // Lógica para registrar uma consulta
    }
  
    public consultarAgenda(): void {
      // Lógica para consultar a agenda
    }
  
    public getNomePaciente(): string {
      return this.nomePaciente;
    }
  
    public getNomeMedico(): string {
      return this.nomeMedico;
    }
  
    public getData(): Date {
      return this.data;
    }
  
    public setNomePaciente(nomePaciente: string): void {
      this.nomePaciente = nomePaciente;
    }
  
    public setNomeMedico(nomeMedico: string): void {
      this.nomeMedico = nomeMedico;
    }
  
    public setData(data: Date): void {
      this.data = data;
    }
  }
  