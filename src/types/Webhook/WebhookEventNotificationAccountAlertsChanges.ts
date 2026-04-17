/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type WebhookEventNotificationAccountAlertsChanges = {
  field: "account_alerts";

  value: {
    entity_type: "BUSINESS" | "PHONE_NUMBER" | "CURRENT_STATUS_ID";
    entity_id: string;
    alert_info: {
      alert_severity: "CRITICAL" | "INFORMATIONAL" | "WARNING";
      alert_status: "ACTIVE" | "NONE";
      alert_type:
        | "INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED"
        | "INCREASED_CAPABILITIES_ELIGIBILITY_FAILED"
        | "INCREASED_CAPABILITIES_ELIGIBILITY_NEED_MORE_INFO"
        | "OBA_APPROVED"
        | "OBA_REJECTED"
        | "PROFILE_PICTURE_LOST";
      alert_description: string;
    };
  };
};
