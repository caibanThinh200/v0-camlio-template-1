import { BlockContent } from "./components";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface BaseComponent {
  _type: string;
  _key: string;
}

export interface CTA {
  text?: string;
  link?: string;
}

export interface HeroBannerComponent extends BaseComponent {
  _type: "heroBanner";
  title: BlockContent;
  description: string;
  cta?: CTA;
  extraNote?: string;
}

export interface ServiceCard {
  _key: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ServicesBlockComponent extends BaseComponent {
  _type: "servicesBlock";
  serviceCards: ServiceCard[];
}

export interface CaseStudyBlockComponent extends BaseComponent {
  _type: "caseStudyBlock";
  variant: "light" | "dark";
  title: string;
  headline: string;
  description: string;
  categories: string[];
  image: SanityImage;
  cta: CTA;
}

export interface Award {
  _key: string;
  headline: string;
  description: string;
  link?: string;
}

export interface AwardsBlockComponent extends BaseComponent {
  _type: "awardsBlock";
  title: string;
  awardsList: Award[];
}

export interface Social {
  _key: string;
  text: string;
  url?: string;
}

export interface ContactBlockComponent extends BaseComponent {
  _type: "contactBlock";
  title: string;
  copyright: string;
  extraNote?: string;
  cta?: CTA;
  socials?: Social[];
}

export type PageComponent =
  | HeroBannerComponent
  | ServicesBlockComponent
  | CaseStudyBlockComponent
  | AwardsBlockComponent
  | ContactBlockComponent;

export interface Page {
  _id: string;
  pageName: string;
  slug: string;
  pageBuilder: PageComponent[];
}

// Header types
export interface MenuItem {
  _key: string;
  text: string;
  link: string;
}

export interface HeaderData {
  _id: string;
  logo?: {
    image?: SanityImage;
    link: string;
  };
  menuItems?: MenuItem[];
  cta?: CTA;
}

// Settings types
export interface SEO {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
}

export interface SettingsData {
  _id: string;
  seo?: SEO;
}
