/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { BSUID } from "../Account.js";
import type { PhoneNumberID, PhoneNumberString } from "../PhoneNumber.js";

export type ConversationType =
  | "authentication"
  | "marketing"
  | "utility"
  | "service"
  | "referral_conversation"
  | (string & NonNullable<unknown>);

export type WebhookEventNotificationMetadata = {
  /** The phone number that is displayed for a business. */
  display_phone_number: PhoneNumberString;

  /**
   * ID for the phone number. A business can respond to a message using this
   * ID.
   */
  phone_number_id: PhoneNumberID;
};

export type WebhookEventNotificationContactProfile = {
  /** Display Name The customer's name. */
  name: string;

  /** Only included if the user has enabled the username feature. */
  username?: string;
};

export type WebhookEventNotificationContact = {
  /**
   * The customer's WhatsApp ID. A business can respond to a customer using
   * this ID. This ID may not match the customer's phone number, which is
   * returned by the API as input when sending a message to the customer.
   */
  wa_id?: PhoneNumberString;

  /** Additional unique, alphanumeric identifier for a WhatsApp user. */
  user_id?: BSUID;

  /** Only included if parent BSUIDs enabled. */
  parent_user_id?: BSUID;

  /** A customer profile object. */
  profile: WebhookEventNotificationContactProfile;
};
