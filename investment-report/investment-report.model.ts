export interface InvestmentReportModel extends InvestmentReportFormModel {
    points: InvestmentReportPointModel[],
}

export interface InvestmentReportFormModel {
    startDate: number,
    endDate: number
}

export interface InvestmentReportPointModel {
    date: number,
    balance: number,
    earnings: number,
    transactionValue?: number
}
