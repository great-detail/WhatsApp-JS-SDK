/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

import { KyInstance, Options as KyOptions } from "ky";
import {
  GetBusinessProfileFields,
  GetBusinessProfileOptions,
  GetBusinessProfilePayload,
  UpdateBusinessProfileOptions,
  UpdateBusinessProfilePayload,
} from "../types/BusinessProfile/index.js";
import { PhoneNumberID } from "../types/PhoneNumber.js";

interface MethodOptions {
  request?: KyOptions;
}

export default class BusinessProfile {
  constructor(protected _transport: KyInstance) {}

  protected getEndpoint(phoneNumberID: PhoneNumberID) {
    return encodeURIComponent(phoneNumberID) + "/whatsapp_business_profile";
  }

  public getBusinessProfile<Fields extends GetBusinessProfileFields = object>({
    phoneNumberID,
    fields,
    request,
  }: MethodOptions & GetBusinessProfileOptions<Fields>) {
    return this._transport.extend({
      method: "GET",
      searchParams: {
        fields: Object.keys(fields ?? {}).join(","),
      },
    })<GetBusinessProfilePayload<Fields>>(
      this.getEndpoint(phoneNumberID),
      request,
    );
  }

  public updateBusinessProfile({
    phoneNumberID,
    request,
    ...json
  }: MethodOptions & UpdateBusinessProfileOptions) {
    return this._transport.extend({
      method: "POST",
      json: {
        messaging_product: "whatsapp",
        ...json,
      },
    })<UpdateBusinessProfilePayload>(this.getEndpoint(phoneNumberID), request);
  }
}
