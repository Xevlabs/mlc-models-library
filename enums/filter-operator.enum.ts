// https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#filters

export enum FilterOperatorEnum {
    eq = 'eq',
    ne = 'ne',
    lt = 'lt',
    gt = 'gt',
    lte = 'lte',
    gte = 'gte',
    in = 'in',
    nin = 'nin',
    contains = 'contains',
    ncontains = 'ncontains',
    containss = 'containss',
    ncontainss = 'ncontainss',
    null = 'null'
}
