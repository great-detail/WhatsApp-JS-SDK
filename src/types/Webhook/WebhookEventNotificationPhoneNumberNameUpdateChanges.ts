/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type WebhookEventNotificationPhoneNumberNameUpdateChanges = {
  field: "phone_number_name_update";
  value: {
    display_phone_number: string;
    decision: string; // TODO: Enum?
    requested_verified_name?: string;
    rejection_reason: string; // TODO: Enum? NONE?
  };
};
