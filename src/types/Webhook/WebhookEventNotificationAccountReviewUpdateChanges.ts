/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type WebhookEventNotificationAccountReviewUpdateChanges = {
  field: "account_review_update";
  value: {
    decision: string; // TODO: Enum?
  };
};
