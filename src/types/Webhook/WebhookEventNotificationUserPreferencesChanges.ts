/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { BSUID } from "../Account.js";
import type { PhoneNumberString } from "../PhoneNumber.js";
import type {
  WebhookEventNotificationContact,
  WebhookEventNotificationMetadata,
} from "./WebhookEventNotification.shared.js";

export type WebhookEventNotificationUserPreferencesChanges = {
  field: "user_preferences";
  value: {
    messaging_product: "whatsapp";
    metadata: WebhookEventNotificationMetadata;
    contacts: WebhookEventNotificationContact[];
    user_preferences: Array<{
      wa_id?: PhoneNumberString;
      user_id?: BSUID;
      parent_user_id?: BSUID;
      category: "marketing_messages";
      value: "stop" | "resume";
      detail: string;
      timestamp: number;
    }>;
  };
};
