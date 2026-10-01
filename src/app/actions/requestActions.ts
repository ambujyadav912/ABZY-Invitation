"use server";
import { InvitationRepository } from "@/lib/repository";
import { RequestData } from "@/lib/types";
import crypto from "crypto";

export async function submitRequest(data: Omit<RequestData, "id" | "status" | "createdAt">) {
  const request: RequestData = {
    ...data,
    id: crypto.randomUUID(),
    status: "New",
    createdAt: Date.now()
  };
  await InvitationRepository.saveRequest(request);
  return { success: true };
}

export async function getAllRequestsAction() {
  return await InvitationRepository.getAllRequests();
}

export async function updateRequestStatusAction(id: string, status: RequestData["status"]) {
  await InvitationRepository.updateRequestStatus(id, status);
  return { success: true };
}
