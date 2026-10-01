"use client";

import { InvitationData } from "@/lib/types";
import { RoyalTemplate } from "./RoyalTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { CinematicTemplate } from "./CinematicTemplate";
import { ModernTemplate } from "./ModernTemplate";
import { 
  FloralTemplate, 
  LuxuryTemplate, 
  ElegantTemplate, 
  FunTemplate, 
  TraditionalTemplate 
} from "./AdditionalTemplates";
import { CorporateTemplate, OrganicTemplate, GlamourTemplate } from "./MoreTemplates";
import { PosterTemplate, NeonTemplate, ArchTemplate } from "./EvenMoreTemplates";

export function InvitationRenderer({ data }: { data: InvitationData }) {
  switch (data.template) {
    case "royal":
      return <RoyalTemplate data={data} />;
    case "minimal":
      return <MinimalTemplate data={data} />;
    case "cinematic":
      return <CinematicTemplate data={data} />;
    case "modern":
      return <ModernTemplate data={data} />;
    case "floral":
      return <FloralTemplate data={data} />;
    case "luxury":
      return <LuxuryTemplate data={data} />;
    case "elegant":
      return <ElegantTemplate data={data} />;
    case "fun":
    case "colorful":
      return <FunTemplate data={data} />;
    case "traditional":
      return <TraditionalTemplate data={data} />;
    case "professional":
      return <CorporateTemplate data={data} />;
    case "classic":
      return <OrganicTemplate data={data} />;
    case "premium":
      return <GlamourTemplate data={data} />;
    case "celebration":
      return <FunTemplate data={data} />;
    case "poster":
      return <PosterTemplate data={data} />;
    case "neon":
      return <NeonTemplate data={data} />;
    case "arch":
      return <ArchTemplate data={data} />;
    default:
      return <CinematicTemplate data={data} />;
  }
}
