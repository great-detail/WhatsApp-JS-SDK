/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type WebhookEventNotificationPartnerSolutionsChanges = {
  field: "partner_solutions";

  value: {
    event: "SOLUTION_CREATED" | "SOLUTION_UPDATED";
    solution_id: string;
    solution_status:
      | "ACTIVE"
      | "DEACTIVATED"
      | "DRAFT"
      | "INITIATED"
      | "PENDING_DEACTIVATION"
      | "REJECTED";
  };
};
