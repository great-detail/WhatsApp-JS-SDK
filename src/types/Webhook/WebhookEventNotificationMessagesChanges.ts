/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { AccountID, BSUID } from "../Account.js";
import type { WhatsappError } from "../Error.js";
import type {
  EventNotificationMessageMessage,
  MessageID,
} from "../Message/index.js";
import type { EventNotificationMessageIdentity } from "../Message/MessageIdentity.js";
import type { EventNotificationMessageReferral } from "../Message/MessageReferral.js";
import type { PhoneNumberString } from "../PhoneNumber.js";
import type {
  ConversationType,
  WebhookEventNotificationContact,
  WebhookEventNotificationMetadata,
} from "./WebhookEventNotification.shared.js";

export type WebhookEventNotificationMessagesChanges = {
  /** Notification type. Value will be messages. */
  field: "messages";

  /** A value object. */
  value: {
    /**
     * Array of contact objects with information for the customer who sent a
     * message to the business.
     *
     * Contacts will be included for sent, delivered, and read status.
     */
    contacts: WebhookEventNotificationContact[];

    /** An array of error objects describing the error. */
    errors: WhatsappError[];

    /**
     * Product used to send the message. Value is always whatsapp.
     *
     * @default 'whatsapp'
     */
    messaging_product: "whatsapp";

    /**
     * Information about a message received by the business that is subscribed to
     * the webhook.
     */
    messages?: Array<
      {
        /**
         * The ID for the message that was received by the business. You could use
         * messages endpoint to mark this specific message as read.
         */
        id: MessageID;

        /**
         * Unix timestamp indicating when the WhatsApp server received the message
         * from the customer.
         */
        timestamp: string;

        /**
         * The customer's WhatsApp ID. A business can respond to a customer using
         * this ID. This ID may not match the customer's phone number, which is
         * returned by the API as input when sending a message to the customer.
         *
         * Will be set to the user's phone number if the phone number can be included.
         */
        from?: AccountID;

        from_user_id?: BSUID;
        from_parent_user_id?: BSUID;

        group_id?: string;

        /**
         * Context object. Only included when a user replies or interacts with one of
         * your messages.
         */
        context?: {
          /** Set to true if the message received by the business has been forwarded. */
          forwarded: boolean;

          /**
           * Set to true if the message received by the business has been forwarded
           * more than 5 times.
           */
          frequently_forwarded: boolean;

          /** The WhatsApp ID for the customer who replied to an inbound message. */
          from?: AccountID;

          /** The BSUID for the customer who replied to an inbound message. */
          from_user_id?: BSUID;
          /** The parent BSUID for the customer who replied to an inbound message. */
          from_parent_user_id?: BSUID;

          /** The message ID for the sent message for an inbound reply. */
          id: MessageID;

          /**
           * Referred product object describing the product the user is requesting
           * information about. You must parse this value if you support Product
           * Enquiry Messages.
           */
          referred_product?: {
            /**
             * Unique identifier of the Meta catalog linked to the WhatsApp Business
             * Account.
             */
            catalog_id: string;

            /** Unique identifier of the product in a catalog. */
            product_retailer_id: string;
          };
        };

        /** An array of error objects describing the error. */
        errors?: WhatsappError[];

        /**
         * An identity object. Webhook is triggered when a customer's phone number or
         * profile information has been updated.
         */
        identity: EventNotificationMessageIdentity;

        /**
         * Referral object. When a customer clicks an ad that redirects to WhatsApp,
         * this object is included in the messages object.
         */
        referral?: EventNotificationMessageReferral;
      } & EventNotificationMessageMessage
    >;

    /**
     * A metadata object describing the business subscribed to the webhook.
     */
    metadata: WebhookEventNotificationMetadata;

    /**
     * Status object for a message that was sent by the business that is
     * subscribed to the webhook.
     */
    statuses?: Array<{
      /**
       * The ID for the message that the business that is subscribed to the
       * webhooks sent to a customer.
       */
      id: MessageID;

      /**
       * The customer's WhatsApp ID. A business can respond to a customer using
       * this ID. This ID may not match the customer's phone number, which is
       * returned by the API as input when sending a message to the customer.
       *
       * Can be Group ID.
       */
      recipient_id?: PhoneNumberString;
      recipient_user_id?: BSUID;
      parent_recipient_user_id?: BSUID;

      /**
       * For a status to be read, it must have been delivered. In some scenarios,
       * such as when a user is in the chat screen and a message arrives, the
       * message is delivered and read almost simultaneously. In this or other
       * similar scenarios, the delivered notification will not be sent back, as it
       * is implied that a message has been delivered if it has been read. The
       * reason for this behavior is internal optimization.
       */
      status: "delivered" | "read" | "sent" | "failed";

      /** Date for the status message. */
      timestamp: number;

      /** An object containing pricing information. */
      pricing: {
        /** Indicates the conversation category.  */
        category: ConversationType;

        /** Type of pricing model used by the business. */
        pricing_model: "CBP" | (string & NonNullable<unknown>);

        /**
         * Indicates if the given message or conversation is billable. Default is
         * true for all conversations, including those inside your free tier limit,
         * except those initiated from free entry points. Free entry point
         * conversation are not billable, false. You will not be charged for free
         * tier limit conversations, but they are considered billable and will be
         * reflected on your invoice.
         *
         * @deprecated
         */
        billable: boolean;
      };

      /** Information about the conversation. */
      conversation: {
        /**
         * Represents the ID of the conversation the given status notification
         * belongs to.
         */
        id: string;

        /**
         * Date when the conversation expires. This field is only present for
         * messages with a `status` set to `sent`.
         */
        expiration_timestamp?: number;

        /** Describes conversation category. */
        origin: {
          /**
           * Indicates conversation category. This can also be referred to as a
           * conversation entry point.
           */
          type: ConversationType;
        };
      };

      /** Arbitrary string included in sent message. */
      biz_opaque_callback_data?: string;
    }>;
  };
};
