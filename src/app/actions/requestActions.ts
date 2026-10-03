"use server";
import { InvitationRepository } from "@/lib/repository";
import { RequestData } from "@/lib/types";
import crypto from "crypto";

export async function submitRequest(data: Omit<RequestData, "id" | "status" | "createdAt">) {
  const request: RequestData = {
    customerName: data.customerName?.trim() || "Guest",
    email: data.email?.trim() || "",
    phone: data.phone?.trim() || "",
    invitationType: data.invitationType?.trim() || "General",
    eventDate: data.eventDate?.trim() || "",
    venue: data.venue?.trim() || "",
    message: data.message?.trim() || "",
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
