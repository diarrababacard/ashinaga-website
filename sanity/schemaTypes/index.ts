import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './pageType'
import { partnerType } from './partnerType'
import { postType } from './postType'
import { programType } from './programType'
import { siteSettingsType } from './siteSettingsType'
import { teamMemberType } from './teamMemberType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettingsType, pageType, postType, programType, partnerType, teamMemberType],
}
