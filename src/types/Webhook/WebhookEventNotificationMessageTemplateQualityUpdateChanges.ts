/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import type { TemplateQualityScore } from "../Templates/TemplateStatus.js";

export type WebhookEventNotificationMessageTemplateQualityUpdateChanges = {
  field: "message_template_quality_update";
  value: {
    message_template_id: number;
    message_template_name: string;
    message_template_language: string;
    previous_quality_score: TemplateQualityScore;
    new_quality_score: TemplateQualityScore;
  };
};
