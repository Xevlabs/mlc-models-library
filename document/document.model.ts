import { LocalizedModel } from '@/typings/localization/localization.model';

export interface DocumentFormModel {
    name: string,
    content: string,
    type: string,
    version: string,
    locale?: string,
    published_at?: string | null
}

export interface DocumentModel extends Omit<DocumentFormModel, 'locale'>, LocalizedModel {}
