"use server";
import { InvitationRepository } from "@/lib/repository";
import { InvitationData, SettingsData } from "@/lib/types";

export async function getAllInvitations() {
  return await InvitationRepository.getAllInvitations();
}

export async function updateInvitationStatusAction(id: string, status: InvitationData["status"]) {
  await InvitationRepository.updateInvitationStatus(id, status);
  return { success: true };
}

export async function deleteInvitationAction(id: string) {
  await InvitationRepository.deleteInvitation(id);
  return { success: true };
}

export async function getDashboardStats() {
  const invites = await InvitationRepository.getAllInvitations();
  const requests = await InvitationRepository.getAllRequests();
  
  return {
    total: invites.length,
    published: invites.filter(i => i.status === "published").length,
    drafts: invites.filter(i => i.status === "draft").length,
    requests: requests.length,
    recentInvitations: invites.slice(0, 5)
  };
}

export async function getSettingsAction() {
  return await InvitationRepository.getSettings();
}

export async function updateSettingsAction(settings: SettingsData) {
  await InvitationRepository.saveSettings(settings);
  return { success: true };
}
