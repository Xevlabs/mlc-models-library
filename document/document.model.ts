import { BaseLocalizedModel, LocalizedModel } from '../localization/localization.model';

export interface DocumentFormModel extends BaseDocumentFormModel, Partial<BaseLocalizedModel> {
    created_by?: string,
    updated_by?: string
}

interface BaseDocumentFormModel {
    name: string,
    content: string,
    type: string,
    version: string,
    published_at?: string | null
}

export interface DocumentModel extends BaseDocumentFormModel, LocalizedModel {}
