export type ServiceCategory = "reading" | "ritual" | "combo";

export type ServicePrice = {
  crc: number;
  usd: number;
};

export type ServiceDuration = {
  min: number;
  max: number;
};

export type Service = {
  id: string;
  category: ServiceCategory;
  featured?: boolean;
  name: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  details: {
    es: string;
    en: string;
  };
  price: ServicePrice;
  duration: ServiceDuration;
};