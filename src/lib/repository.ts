import 'server-only';
import { InvitationData, RequestData, SettingsData } from "./types";
import { supabaseServer } from "./supabase/server";

// --- Mappers ---
function mapToInvitationData(row: any): InvitationData {
  return {
    id: row.id,
    slug: row.slug,
    status: row.status,
    type: row.type,
    creatorName: row.creator_name,
    recipientName: row.recipient_name,
    eventTitle: row.event_title,
    date: row.event_date,
    time: row.event_time,
    venue: row.venue,
    address: row.address,
    contact: row.contact,
    message: row.message,
    photoUrl: row.photo_url || undefined,
    template: row.template,
    createdAt: Number(row.created_at),
  };
}

function mapFromInvitationData(data: InvitationData): any {
  return {
    id: data.id,
    slug: data.slug,
    status: data.status,
    type: data.type,
    creator_name: data.creatorName,
    recipient_name: data.recipientName,
    event_title: data.eventTitle,
    event_date: data.date,
    event_time: data.time,
    venue: data.venue,
    address: data.address,
    contact: data.contact,
    message: data.message,
    photo_url: data.photoUrl || null,
    template: data.template,
    created_at: data.createdAt,
  };
}

function mapToRequestData(row: any): RequestData {
  return {
    id: row.id,
    customerName: row.customer_name,
    email: row.email,
    phone: row.phone,
    invitationType: row.invitation_type,
    eventDate: row.event_date,
    venue: row.venue,
    message: row.message,
    status: row.status,
    createdAt: Number(row.created_at),
  };
}

function mapFromRequestData(data: RequestData): any {
  return {
    id: data.id,
    customer_name: data.customerName,
    email: data.email,
    phone: data.phone,
    invitation_type: data.invitationType,
    event_date: data.eventDate,
    venue: data.venue,
    message: data.message,
    status: data.status,
    created_at: data.createdAt,
  };
}

// --- Repository ---
export const InvitationRepository = {
  async getInvitationBySlug(slug: string): Promise<InvitationData | null> {
    const { data, error } = await supabaseServer
      .from('invitations')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .limit(1)
      .single();

    if (error || !data) return null;
    return mapToInvitationData(data);
  },

  async getInvitationById(id: string): Promise<InvitationData | null> {
    const { data, error } = await supabaseServer
      .from('invitations')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) return null;
    return mapToInvitationData(data);
  },

  async getAllInvitations(): Promise<InvitationData[]> {
    const { data, error } = await supabaseServer
      .from('invitations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error getting all invitations:", error);
      throw new Error(error.message);
    }
    return (data || []).map(mapToInvitationData);
  },

  async saveInvitation(data: InvitationData): Promise<void> {
    const row = mapFromInvitationData(data);
    const { error } = await supabaseServer
      .from('invitations')
      .upsert(row, { onConflict: 'id' });

    if (error) {
      console.error("Error saving invitation:", error);
      throw new Error(error.message);
    }
  },

  async updateInvitationStatus(id: string, status: InvitationData["status"]): Promise<void> {
    const { error } = await supabaseServer
      .from('invitations')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error("Error updating invitation status:", error);
      throw new Error(error.message);
    }
  },

  async deleteInvitation(id: string): Promise<void> {
    const { error } = await supabaseServer
      .from('invitations')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting invitation:", error);
      throw new Error(error.message);
    }
  },

  async saveRequest(data: RequestData): Promise<void> {
    const row = mapFromRequestData(data);
    const { error } = await supabaseServer
      .from('requests')
      .upsert(row, { onConflict: 'id' });

    if (error) {
      console.error("Error saving request:", error);
      throw new Error(error.message);
    }
  },

  async getAllRequests(): Promise<RequestData[]> {
    const { data, error } = await supabaseServer
      .from('requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error getting all requests:", error);
      throw new Error(error.message);
    }
    return (data || []).map(mapToRequestData);
  },

  async updateRequestStatus(id: string, status: RequestData["status"]): Promise<void> {
    const { error } = await supabaseServer
      .from('requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error("Error updating request status:", error);
      throw new Error(error.message);
    }
  },

  async getSettings(): Promise<SettingsData> {
    const { data, error } = await supabaseServer
      .from('settings')
      .select('*')
      .eq('id', 'general')
      .single();

    if (error || !data) {
      return {
        email: "ahirambuj4@gmail.com",
        phone: "8652460120",
        instagram: "@abzy_cartoon_2026"
      };
    }
    return {
      email: data.email,
      phone: data.phone,
      instagram: data.instagram
    };
  },

  async saveSettings(settings: SettingsData): Promise<void> {
    const { error } = await supabaseServer
      .from('settings')
      .upsert({ id: 'general', ...settings }, { onConflict: 'id' });

    if (error) {
      console.error("Error saving settings:", error);
      throw new Error(error.message);
    }
  }
};
