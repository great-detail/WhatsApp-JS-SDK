/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { AccountID } from "../Account.js";
import type { WhatsappBusinessAccountID } from "../WhatsappBusinessAccount/index.js";

export type WebhookEventNotificationAccountUpdateChanges = {
  field: "account_update";
  value: {
    event: "PARTNER_APP_INSTALLED" | (string & NonNullable<unknown>);
    phone_number?: string;
    ban_info?: {
      waba_ban_state: string; // TODO: Enum?
      waba_ban_date: string;
    };

    /** Information about a violation on the account */
    violation_info?: {
      violation_type: string; // TODO: Enum?
    };
    lock_info?: {
      // TODO: IS this a string or number? datetime?
      expiration: string | number;
    };

    /** Information about the restrictions on the account */
    restriction_info?: {
      restriction_type: string; // TODO: Enum?
      // TODO: IS this a string or number? datetime?
      expiration: string | number;
    };

    /** Business verification status */
    business_verification_status: string; // TODO: Enum?

    /** Information about the status of the partner's self certification for a client */
    partner_client_certification_info?: {
      client_business_id: string;

      /** Status of certification */
      status: "PENDING" | "APPROVED" | "FAILED" | "DISCARDED" | "REVOKED";

      /** List of rejection reasons for why the request did not pass verification. */
      rejection_reasons: (
        | "LEGAL NAME NOT MATCHING"
        | "WEBSITE NOT MATCHING"
        | "NONE"
        | "BUSINESS NOT ELIGIBLE"
        | "LEGAL NAME NOT FOUND IN DOCUMENTS"
        | "MALFORMED DOCUMENTS"
        | "ADDRESS NOT MATCHING"
      )[];
    };

    /** Information about a waba for business webhooks */
    waba_info: {
      waba_id: AccountID;

      /** WABA owner business ID */
      owner_business_id: WhatsappBusinessAccountID;

      /** The id of the solution through which this WABA was onboarded */
      solution_id?: string;

      /** List of partner business ids part of the solution */
      solution_partner_business_ids?: string[];
      is_obo_to_shared_migrated?: boolean;
      ad_account_id?: string;
      partner_data?: string;
      partner_app_id: string;
    };

    /** List of countries where two tier price wll be enforced on different time. */
    auth_international_rate_eligibility?: {
      /** The unixtimestamp when the business will be enforced on the two tier pricing for the autentication message. */
      start: number;

      exception_countries: {
        /** Country code for the country where the two tier price will be enforced on a different time stamp. */
        country_code: string;

        /** The actual timestamp that two tier price will be enforced on the country */
        start_time: number;
      }[];
    };
  };
};
