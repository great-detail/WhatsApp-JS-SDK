/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { WhatsappBusinessAccountID } from "../WhatsappBusinessAccount/index.js";
import type { WebhookEventNotificationAccountAlertsChanges } from "./WebhookEventNotificationAccountAlertsChanges.js";
import type { WebhookEventNotificationAccountReviewUpdateChanges } from "./WebhookEventNotificationAccountReviewUpdateChanges.js";
import type { WebhookEventNotificationAccountUpdateChanges } from "./WebhookEventNotificationAccountUpdateChanges.js";
import type { WebhookEventNotificationCallsChanges } from "./WebhookEventNotificationCallsChanges.js";
import type { WebhookEventNotificationMessageTemplateCategoryUpdateChanges } from "./WebhookEventNotificationMessageTemplateCategoryUpdateChanges.js";
import type { WebhookEventNotificationMessageTemplateComponentsUpdateChanges } from "./WebhookEventNotificationMessageTemplateComponentsUpdateChanges.js";
import type { WebhookEventNotificationMessageTemplateQualityUpdateChanges } from "./WebhookEventNotificationMessageTemplateQualityUpdateChanges.js";
import type { WebhookEventNotificationMessageTemplateStatusUpdateChanges } from "./WebhookEventNotificationMessageTemplateStatusUpdateChanges.js";
import type { WebhookEventNotificationMessagesChanges } from "./WebhookEventNotificationMessagesChanges.js";
import type { WebhookEventNotificationPartnerSolutionsChanges } from "./WebhookEventNotificationPartnerSolutionsChanges.js";
import type { WebhookEventNotificationPaymentConfigurationUpdateChanges } from "./WebhookEventNotificationPaymentConfigurationUpdateChanges.js";
import type { WebhookEventNotificationPhoneNumberNameUpdateChanges } from "./WebhookEventNotificationPhoneNumberNameUpdateChanges.js";
import type { WebhookEventNotificationPhoneNumberQualityUpdateChanges } from "./WebhookEventNotificationPhoneNumberQualityUpdateChanges.js";
import type { WebhookEventNotificationSecurityChanges } from "./WebhookEventNotificationSecurityChanges.js";
import type { WebhookEventNotificationUserIDUpdateChanges } from "./WebhookEventNotificationUserIDUpdateChanges.js";
import type { WebhookEventNotificationUserPreferencesChanges } from "./WebhookEventNotificationUserPreferencesChanges.js";

export type * from "./WebhookEventNotification.shared.js";
export type * from "./WebhookEventNotificationAccountAlertsChanges.js";
export type * from "./WebhookEventNotificationAccountReviewUpdateChanges.js";
export type * from "./WebhookEventNotificationAccountUpdateChanges.js";
export type * from "./WebhookEventNotificationCallsChanges.js";
export type * from "./WebhookEventNotificationMessageTemplateCategoryUpdateChanges.js";
export type * from "./WebhookEventNotificationMessageTemplateComponentsUpdateChanges.js";
export type * from "./WebhookEventNotificationMessageTemplateQualityUpdateChanges.js";
export * from "./WebhookEventNotificationMessageTemplateStatusUpdateChanges.js";
export type * from "./WebhookEventNotificationMessagesChanges.js";
export type * from "./WebhookEventNotificationPartnerSolutionsChanges.js";
export type * from "./WebhookEventNotificationPaymentConfigurationUpdateChanges.js";
export type * from "./WebhookEventNotificationPhoneNumberNameUpdateChanges.js";
export type * from "./WebhookEventNotificationPhoneNumberQualityUpdateChanges.js";
export type * from "./WebhookEventNotificationSecurityChanges.js";
export type * from "./WebhookEventNotificationUserIDUpdateChanges.js";
export type * from "./WebhookEventNotificationUserPreferencesChanges.js";

export type WebhookEventNotificationChange =
  | WebhookEventNotificationMessagesChanges
  | WebhookEventNotificationAccountUpdateChanges
  | WebhookEventNotificationAccountReviewUpdateChanges
  | WebhookEventNotificationAccountAlertsChanges
  | WebhookEventNotificationMessageTemplateStatusUpdateChanges
  | WebhookEventNotificationMessageTemplateCategoryUpdateChanges
  | WebhookEventNotificationMessageTemplateComponentsUpdateChanges
  | WebhookEventNotificationMessageTemplateQualityUpdateChanges
  | WebhookEventNotificationPhoneNumberNameUpdateChanges
  | WebhookEventNotificationPhoneNumberQualityUpdateChanges
  | WebhookEventNotificationPaymentConfigurationUpdateChanges
  | WebhookEventNotificationUserPreferencesChanges
  | WebhookEventNotificationPartnerSolutionsChanges
  | WebhookEventNotificationSecurityChanges
  | WebhookEventNotificationUserIDUpdateChanges
  | WebhookEventNotificationCallsChanges;

export type WebhookEventNotification = {
  /**
   * The specific webhook a business is subscribed to. The webhook is
   * whatsapp_business_account.
   */
  object: string;

  /** An array of entry objects. */
  entry: {
    /**
     * The WhatsApp Business Account ID for the business that is subscribed to
     * the webhook.
     */
    id: WhatsappBusinessAccountID;

    /** An array of change objects. */
    changes: WebhookEventNotificationChange[];
  }[];
};
