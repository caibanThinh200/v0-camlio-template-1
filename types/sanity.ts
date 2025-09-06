export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

export interface BaseComponent {
  _type: string
  _key: string
}

export interface HeroComponent extends BaseComponent {
  _type: "hero"
  title: string
  subtitle: string
  description: string
  availableText: string
}

export interface ServicesComponent extends BaseComponent {
  _type: "services"
  services: {
    title: string
    description: string
    tags: string[]
    gradient: "purple-blue" | "blue-purple"
  }[]
}

export interface CaseStudyComponent extends BaseComponent {
  _type: "caseStudy"
  title: string
  category: string
  description: string
  tags: string[]
  image: SanityImage
  variant: "light" | "dark"
  badge?: SanityImage
}

export interface AwardsComponent extends BaseComponent {
  _type: "awards"
  awards: {
    year: string
    title: string
    category: string
    link: string
  }[]
}

export interface CallToActionComponent extends BaseComponent {
  _type: "callToAction"
  title: string
  logo: SanityImage
  socialLinks: {
    platform: string
    url: string
  }[]
  copyright: string
  availabilityText: string
}

export type PageComponent =
  | HeroComponent
  | ServicesComponent
  | CaseStudyComponent
  | AwardsComponent
  | CallToActionComponent

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  components: PageComponent[]
}
