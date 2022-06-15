export interface HubspotSettingsModel extends HubspotLabelSettingsModel, HubspotIdSettingsModel {}

export interface TemplateHubspotSettingsModel extends HubspotLabelSettingsModel, Partial<HubspotIdSettingsModel> {}

interface HubspotLabelSettingsModel {
    registrationPipelineLabel: string,
    registrationPersonalInfoStageLabel: string,
    registrationUserCreatedStageLabel: string,
    registrationWaitingValidPayinStageLabel: string,
    registrationWaitingTreezorReviewStageLabel: string,
    registrationWaitingBaseScoreStageLabel: string,
    registrationValidationFinishedStageLabel: string
}

export interface HubspotIdSettingsModel {
    registrationPipelineId: string,
    registrationPersonalInfoStageId: string,
    registrationUserCreatedStageId: string,
    registrationWaitingValidPayinStageId: string,
    registrationWaitingTreezorReviewStageId: string,
    registrationWaitingBaseScoreStageId: string,
    registrationValidationFinishedStageId: string
}

export interface HubspotPipelineTemplate {
    id: string,
    label: string,
    displayOrder: number,
    stages: HubspotStageTemplate[]
}

export interface HubspotStageTemplate {
    id: string,
    label: string,
    displayOrder: number
}
