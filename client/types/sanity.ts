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

export interface HeroComponent extends BaseComponent {
  _type: "template_1_hero";
  title: BlockContent;
  description: string;
  note: string;
}

export interface ServicesComponent extends BaseComponent {
  _type: "services";
  services: {
    title: string;
    description: string;
    tags: string[];
    gradient: "purple-blue" | "blue-purple";
  }[];
}

export interface CaseStudyComponent extends BaseComponent {
  _type: "caseStudy";
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: SanityImage;
  variant: "light" | "dark";
  badge?: SanityImage;
}

export interface AwardsComponent extends BaseComponent {
  _type: "awards";
  awards: {
    year: string;
    title: string;
    category: string;
    link: string;
  }[];
}

export interface CallToActionComponent extends BaseComponent {
  _type: "callToAction";
  title: string;
  logo: SanityImage;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  copyright: string;
  availabilityText: string;
}

export type PageComponent =
  | HeroComponent
  | ServicesComponent
  | CaseStudyComponent
  | AwardsComponent
  | CallToActionComponent;

export interface Page {
  _id: string;
  _type: "template_1";
  pageBuilder: PageComponent[];
}
