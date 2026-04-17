/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { TemplateCategory } from "../Templates/TemplateCategory.js";
import type { TemplateLanguage } from "../Templates/TemplateLanguage.js";

export type WebhookEventNotificationMessageTemplateCategoryUpdateChanges = {
  field: "template_category_update";
  value: {
    message_template_id: number;
    message_template_name: string;
    message_template_language: TemplateLanguage;
    previous_category: TemplateCategory;
    new_category: TemplateCategory;
    correct_category: TemplateCategory;
  };
};
