export interface CSVFormat {
    transactionType: string, 
    date: string, 
    label?: string,
    from?: string, 
    value: number | undefined, 
    payinId?: string, 
    transferId?: number
}