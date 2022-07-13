export interface InvestmentReportModel extends InvestmentReportFormModel {
    points: InvestmentReportPointModel[],
}

export interface InvestmentReportFormModel {
    startDate: number,
    endDate: number
}

export interface InvestmentReportPointModel extends Omit<InvestmentGraphDataPoint, 'isNow'> {
    date: number,
    isTransactionEnd?: boolean
}

export interface InvestmentGraphDataPoint {
    earnings: number,
    transactionValue?: number,
    isNow: boolean,
    balance: number
}
