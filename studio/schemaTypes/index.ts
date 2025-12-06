// Documents
import header from './singletons/header'
import page from './documents/page'

// Blocks
import heroBanner from './blocks/heroBanner'
import serviceCard from './blocks/serviceCard'
import servicesBlock from './blocks/servicesBlock'
import caseStudyBlock from './blocks/caseStudyBlock'
import award from './blocks/award'
import awardsBlock from './blocks/awardsBlock'
import contactBlock from './blocks/contactBlock'
import seoFields from './blocks/seo'
import { settings } from './singletons/settings'

export const schemaTypes = [
  // Documents
  header,
  page,

  // Blocks
  heroBanner,
  serviceCard,
  servicesBlock,
  caseStudyBlock,
  award,
  awardsBlock,
  contactBlock,
  seoFields,
  settings
]
