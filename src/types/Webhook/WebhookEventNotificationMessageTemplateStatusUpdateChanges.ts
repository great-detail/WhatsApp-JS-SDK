/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export const TEMPLATE_STATUS_UPDATE_EVENTS = [
  "APPROVED",
  "DISABLED",
  "IN_APPEAL",
  "PENDING",
  "REINSTATED",
  "REJECTED",
  "FLAGGED",
] as const;

export type TemplateStatusUpdateEvent =
  (typeof TEMPLATE_STATUS_UPDATE_EVENTS)[number];

export const TEMPLATE_STATUS_UPDATE_REASONS = [
  "ABUSIVE_CONTENT",
  "INCORRECT_CATEGORY",
  "INVALID_FORMAT",
  "NONE",
  "SCAM",
] as const;

export type TemplateStatusUpdateReason =
  (typeof TEMPLATE_STATUS_UPDATE_REASONS)[number];

export type WebhookEventNotificationMessageTemplateStatusUpdateChanges = {
  field: "message_template_status_update";
  value: {
    message_template_id: number;
    message_template_name: string;
    message_template_language: string;
    event: TemplateStatusUpdateEvent;
    reason: TemplateStatusUpdateReason;
    disable_info?: {
      disable_date: string;
    };
    other_info?: {
      title?: string;
      description?: string;
    };
  };
};
