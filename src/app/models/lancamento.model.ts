export interface Lancamento {
    id?: number;
    nome?: string;
    periodicidade: any;
    user: any;
    categoria: any;
    valorTotal: number;
    dataCriacao: Date;
    dataAlteracao: Date;
}

export interface LancamentoRequest {
    id?: number;
    nome?: string;
    categoriaId?: number;
    periodicidadeId?: number;
    userId?: number;
    quantidadeRepeticao?: number;
    valorTotal?: number;
    dataCriacao?: Date;
    dataAlteracao?: Date;
    tipoLancamentoId?: number;
}
