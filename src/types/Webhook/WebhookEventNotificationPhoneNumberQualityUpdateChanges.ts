/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { PhoneNumberMessagingLimitTier } from "../PhoneNumbers/index.js";

export type WebhookEventNotificationPhoneNumberQualityUpdateChanges = {
  field: "phone_number_quality_update";
  value: {
    display_phone_number: string;
    event: string; // TODO: Enum?
    current_limit: PhoneNumberMessagingLimitTier;
    old_limit: PhoneNumberMessagingLimitTier;
    max_daily_conversations_per_business: string; // TODO: Enum?
  };
};
