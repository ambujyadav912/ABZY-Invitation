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
    } else {
      id = null; // Reset if invalid id was provided
    }
  }

  if (!id || !slug) {
    id = crypto.randomUUID();
    let isUnique = false;
    let attempts = 0;
    while (!isUnique && attempts < 10) {
      attempts++;
      const candidateSlug = `ABZY-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
      const existing = await InvitationRepository.getInvitationBySlug(candidateSlug);
      if (!existing) {
        slug = candidateSlug;
        isUnique = true;
      }
    }
    if (!slug) {
      slug = `ABZY-${Date.now().toString(36).toUpperCase()}`;
    }
  }
  
  const invitation: InvitationData = {
    ...data,
    creatorName: data.creatorName?.trim() || "ABZY",
    recipientName: data.recipientName?.trim() || "Guest",
    eventTitle: data.eventTitle?.trim() || "Untitled Event",
    date: data.date?.trim() || "",
    time: data.time?.trim() || "",
    venue: data.venue?.trim() || "",
    address: data.address?.trim() || "",
    contact: data.contact?.trim() || "",
    message: data.message?.trim() || "",
    photoUrl: data.photoUrl || undefined,
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
