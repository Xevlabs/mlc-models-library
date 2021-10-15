/* eslint-disable @typescript-eslint/ban-types */

// https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#model-options
import { FilterOperatorEnum } from '@/typings/enums/filter-operator.enum';

export interface TimestampModel {
    created_at: string;
    updated_at: string;
}

export interface FileModel extends TimestampModel {
    id: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: { [key: string]: any };
    hash: string;
    ext?: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: { [key: string]: any };
    related: any[];
}

export type FilterPathModel<K extends string> = K | `${K}_${FilterOperatorEnum}`;
export type FilterPathsModel<T, K extends keyof T = keyof T> =
    | FilterPathModel<Extract<K, string>>
    | (K extends string
        ? T[K] extends object
            ? `${K}.${Extract<keyof T[K], string>}`
            : never
        : never);

export type FilterModel<T> = {
    [K in FilterPathsModel<T>]?: any;
};

export type SortModel<T> = keyof T extends string
    ? `${keyof T}:${'asc' | 'desc'}`
    : never;

export type WhereModel<T> = FilterModel<T>[] | { _or: (FilterModel<T> | FilterModel<T>[])[] };

export type QueryParamModel<T> = FilterModel<T> & {
    _where?: WhereModel<T>;
    _sort?: string;
    _limit?: number;
    _start?: number;
};


