export class Agenda {
    private data: Date;
    private nomePaciente: string;
  
    constructor(data: Date, nomePaciente: string) {
      this.data = data;
      this.nomePaciente = nomePaciente;
    }
  
    public getData(): Date {
      return this.data;
    }
  
    public getNomePaciente(): string {
      return this.nomePaciente;
    }
  
    public setData(data: Date): void {
      this.data = data;
    }
  
    public setNomePaciente(nomePaciente: string): void {
      this.nomePaciente = nomePaciente;
    }
  }
  