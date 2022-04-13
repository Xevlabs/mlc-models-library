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
    position: number,
    published_at?: string | null
}

export interface DocumentModel extends BaseDocumentFormModel, LocalizedModel {}
