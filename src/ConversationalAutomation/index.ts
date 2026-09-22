/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import { KyInstance, Options as KyOptions } from "ky";
import {
  CreateConversationalAutomationOptions,
  CreateConversationalAutomationPayload,
} from "../types/ConversationalAutomation/index.js";
import { PhoneNumberID } from "../types/PhoneNumber.js";

interface MethodOptions {
  request?: KyOptions;
}

export default class ConversationalAutomation {
  constructor(protected _transport: KyInstance) {}

  protected getEndpoint(phoneNumberID: PhoneNumberID) {
    return encodeURIComponent(phoneNumberID) + "/conversational_automation";
  }

  public setConversationalAutomation({
    phoneNumberID,
    request,
    ...json
  }: MethodOptions & CreateConversationalAutomationOptions) {
    return this._transport.extend({
      method: "POST",
      json,
    })<CreateConversationalAutomationPayload>(
      this.getEndpoint(phoneNumberID),
      request,
    );
  }
}
