import { PopulatedBaseModel } from '../base/base.model'
import { FileModel, TimestampModel } from '../common/common.model'

export interface OnboardingModel extends PopulatedBaseModel, TimestampModel {
    title: string
    content: string
    picture: FileModel
    position: number
}
