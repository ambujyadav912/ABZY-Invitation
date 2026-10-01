"use server";

import { InvitationRepository } from "@/lib/repository";
import { InvitationData } from "@/lib/types";
import crypto from "crypto";

export async function createAndPublishInvitation(data: Omit<InvitationData, "id" | "slug" | "status" | "createdAt">, editId?: string | null) {
  let id = editId;
  let slug = "";
  
  if (editId) {
    const existing = await InvitationRepository.getInvitationById(editId);
    if (existing) {
      slug = existing.slug;
    }
  }

  if (!id || !slug) {
    id = crypto.randomUUID();
    slug = `ABZY-${crypto.randomBytes(3).toString("hex").toUpperCase()}`; // e.g. ABZY-X7K29P
  }
  
  const invitation: InvitationData = {
    ...data,
    id: id as string,
    slug,
    status: "published",
    createdAt: Date.now()
  };

  await InvitationRepository.saveInvitation(invitation);
  return { success: true, slug: invitation.slug };
}

export async function getInvitation(slug: string) {
  return await InvitationRepository.getInvitationBySlug(slug);
}

export async function getInvitationById(id: string) {
  return await InvitationRepository.getInvitationById(id);
}
