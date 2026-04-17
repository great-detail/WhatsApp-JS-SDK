/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type WebhookEventNotificationPaymentConfigurationUpdateChanges = {
  field: "payment_configuration_update";
  value: {
    configuration_name: string;
    provider_name: string;
    provider_mid: string;
    status: string; // TODO: Enum?
    created_timestamp: number;
    updated_timestamp: number;
  };
};
