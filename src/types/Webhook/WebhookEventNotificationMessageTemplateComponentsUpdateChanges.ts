/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { TemplateButtonType } from "../Templates/TemplateButton.js";

export type WebhookEventNotificationMessageTemplateComponentsUpdateChanges = {
  field: "message_template_components_update";
  value: {
    message_template_id: number;
    message_template_name: string;
    message_template_language: string;
    message_template_title: string;
    message_template_element: string;
    message_template_footer: string;
    message_template_buttons: {
      message_template_button_type: TemplateButtonType;
      message_template_button_text: string;
      message_template_button_url?: string;
      message_template_button_phone_number?: string;
    }[];
  };
};
