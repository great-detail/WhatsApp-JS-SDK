/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import { PhoneNumberString } from "../PhoneNumber";

export type WebhookEventNotificationSecurityChanges = {
  field: "security";

  value: {
    display_phone_number: PhoneNumberString;
    event: "PIN_CHANGED" | "PIN_RESET_REQUEST" | "PIN_REQUEST_SUCCESS";
    requester: string;
  };
};
