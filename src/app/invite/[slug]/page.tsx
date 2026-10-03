import { ClientExperience } from "./ClientExperience";
import { Metadata } from "next";
import { getInvitation } from "@/app/actions/invitationActions";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "You're Invited | ABZY",
  description: "You have received a special digital invitation.",
};

export default async function InvitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch from our modular DB layer
  const invitation = await getInvitation(slug);
  
  if (!invitation) {
    notFound();
  }

  return <ClientExperience invitation={invitation} />;
}
