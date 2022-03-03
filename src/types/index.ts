export interface BasicProps {
  className?: string;
}

export type navLinkType = { to: string; label: string; secondRoute?: string };

export interface SocialLinksType {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  telegram?: string;
  medium?: string;
  dextools?: string;
}

export interface AboutMeType {
  image: string;
  name: string;
  description: string;
  tabs: {
    label: string;
    content: JSX.Element;
  }[];
}
