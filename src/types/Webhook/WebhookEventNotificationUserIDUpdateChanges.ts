/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { BSUID } from "../Account.js";
import type { PhoneNumberString } from "../PhoneNumber.js";
import type { WebhookEventNotificationMetadata } from "./WebhookEventNotification.shared.js";

export type WebhookEventNotificationUserIDUpdateChanges = {
  field: "user_id_update";
  value: {
    messaging_product: "whatsapp";
    metadata: WebhookEventNotificationMetadata;
    contacts: Array<{
      profile: {
        name: string;
      };

      /**
       * Will be set to the user's phone number if available. Will be omitted
       * if the user has enabled the username feature and we are unable to
       * include their phone number.
       */
      wa_id?: PhoneNumberString;
    }>;

    user_id_update: Array<{
      /**
       * Will be set to the user's phone number if available. Will be omitted
       * if the user has enabled the username feature and we are unable to
       * include their phone number.
       */
      wa_id?: PhoneNumberString;

      /** A human-readable description of the update. */
      detail: string;

      user_id: {
        /** The user's old BSUID. */
        previous: BSUID;

        /** The user's new BSUID. */
        current: BSUID;
      };

      parent_user_id?: {
        /** The user's old parent BSUID. */
        previous: BSUID;

        /** The user's new parent BSUID. */
        current: BSUID;
      };

      /** Unix timestamp indicating when the webhook was sent. */
      timestamp: number;
    }>;
  };
};
