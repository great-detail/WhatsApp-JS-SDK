/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export type ConversationalAutomationPrompt = string;

export type ConversationalAutomationCommand = {
  command_name: string;
  command_description?: string;
};

export type ConversationalAutomation = {
  prompts: ConversationalAutomationPrompt[];
  commands: ConversationalAutomationCommand[];
};

export type CreateConversationalAutomationOptions = ConversationalAutomation & {
  phoneNumberID: string;
};

export type CreateConversationalAutomationPayload = {
  success: boolean;
};
