export interface CSVFormat {
    transactionType: string, 
    date: string, 
    label?: string,
    from?: string, 
    value: number, 
    payinId?: string, 
    transferId?: string
}