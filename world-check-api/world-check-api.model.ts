import { WorldCheckApiFieldResultEnum } from '../enums/world-check-api/world-check-api-field-result.enum';

export interface WorldCheckApiScreeningRequestModel {
    groupId: string,
    entityType: string,
    caseId: string,
    providerTypes: string[],
    caseScreeningState: { WATCHLIST: string },
    name: string,
    nameTransposition: boolean,
    secondaryFields: WorldCheckApiSecondaryField[],
    customFields: WorldCheckApiSecondaryField[]
}

interface WorldCheckApiSecondaryField {
    typeId: string,
    value?: string | number | boolean,
    dateTimeValue?: string
}

export interface WorldCheckApiScreeningResponseModel extends WorldCheckApiScreeningRequestModel {
    caseSystemId: string,
    lifecycleState: string,
    creator: WorldCheckApiUser,
    modifier: WorldCheckApiUser,
    assignee?: WorldCheckApiUser,
    creationDate: string,
    modificationDate: string,
    outstandingActions: boolean,
    results: WorldCheckApiResult[]
}

interface WorldCheckApiUser {
    userId: string,
    firstName: string,
    lastName: string,
    fullName: string,
    email: string,
    status: string
}

interface WorldCheckApiResult {
    resultId: string,
    referenceId: string,
    matchScore: number,
    matchStrength: string,
    matchedTerm: string,
    matchedNameType: string,
    secondaryFieldResults: WorldCheckSecondaryFieldResult[],
    sources: string[],
    categories: string[],
    resolution: {
        statusId: string,
        riskId?: string,
        reasonId?: string,
        resolutionRemark?: string,
        resolutionDate?: string
    }
    primaryName: string,
    events: WorldCheckEvent[],
    countryLinks: WorldCheckCountryLink[],
    identityDocuments: [],
    category: string,
    providerTpye: string,
    gender: string
}

interface WorldCheckSecondaryFieldResult {
    field: WorldCheckApiSecondaryField,
    typeId: string,
    submittedValue?: string | number | boolean,
    submittedDateTimeValue?: string,
    matchedValue?:  string | number | boolean,
    matchedDateTimeValue?: string,
    fieldResult: WorldCheckApiFieldResultEnum,
}

interface WorldCheckCountryLink {
    country: {
        code: string,
        name: string
    },
    countryText: string,
    type: string
}

interface WorldCheckEvent {
    address?: any,
    alledgedAddresses: any[],
    day?: number,
    fullDate: string,
    month?: number,
    type: string,
    year: number
}
