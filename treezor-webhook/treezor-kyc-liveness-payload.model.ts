export interface TreezorKycLivenessPayloadModel {
    'kyc-status': string,
    comment: string,
    user_id: string,
    'started-at': string,
    'updated-at': string,
    score: number,
    identity: {
        'last-name': string,
        'first-name': string,
        'birth-date': string
    }
}
