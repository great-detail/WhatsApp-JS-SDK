/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Lucas Neves <lcneves@gmail.com>
 * @see    https://greatdetail.com
 */

import { CreateMessageMedia } from "./MessageMedia.js";

type InteractiveBody = {
  /** Max 4096 for list messages, max 1024 for button/carousel messages. */
  text: string;
};

type InteractiveFooter = {
  /** Max 60 characters. */
  text: string;
};

type InteractiveHeaderText = {
  type: "text";
  /** Max 60 characters. */
  text: string;
};

type InteractiveHeaderImage = {
  type: "image";
  image: Omit<CreateMessageMedia, "caption" | "filename">;
};

type InteractiveHeaderVideo = {
  type: "video";
  video: Omit<CreateMessageMedia, "caption" | "filename">;
};

type InteractiveHeaderDocument = {
  type: "document";
  document: Omit<CreateMessageMedia, "caption">;
};

type InteractiveHeader =
  | InteractiveHeaderText
  | InteractiveHeaderImage
  | InteractiveHeaderVideo
  | InteractiveHeaderDocument;

type InteractiveMediaHeader =
  | InteractiveHeaderImage
  | InteractiveHeaderVideo
  | InteractiveHeaderDocument;

type InteractiveCTAUrlAction = {
  name: "cta_url";
  parameters: {
    /** Button label text. */
    display_text: string;
    url: string;
  };
};

export type CreateInteractiveCTAUrl = {
  type: "cta_url";
  header?: InteractiveHeader;
  body: InteractiveBody;
  footer?: InteractiveFooter;
  action: InteractiveCTAUrlAction;
};

export type CreateInteractiveList = {
  type: "list";
  header?: InteractiveHeaderText;
  body: InteractiveBody;
  footer?: InteractiveFooter;
  action: {
    /** Supports a single button. Max 20 characters. */
    button: string;
    sections: Array<{
      /** Max 24 characters. */
      title: string;
      rows: Array<{
        /** Max 200 characters. */
        id: string;
        /** Max 24 characters. */
        title: string;
        /** Max 72 characters. */
        description?: string;
      }>;
    }>;
  };
};

type CreateInteractiveCarouselQuickReplyButton = {
  type: "quick_reply";
  quick_reply: {
    id: string;
    title: string;
  };
};

type CreateInteractiveCarouselUrlCard = {
  card_index: number;
  type: "cta_url";
  header: InteractiveMediaHeader;
  body?: InteractiveBody;
  action:
    | InteractiveCTAUrlAction
    | {
        buttons: Array<CreateInteractiveCarouselQuickReplyButton>;
      };
};

type CreateInteractiveCarouselProductCard = {
  card_index: number;
  type: "product";
  action: {
    product_retailer_id: string;
    catalog_id: string;
  };
};

export type CreateInteractiveCarousel = {
  type: "carousel";
  body: InteractiveBody;
  action: {
    cards: Array<
      CreateInteractiveCarouselUrlCard | CreateInteractiveCarouselProductCard
    >;
  };
};

export type CreateInteractiveButton = {
  type: "button";
  header?: InteractiveHeader;
  body: InteractiveBody;
  footer?: InteractiveFooter;
  action: {
    buttons: Array<{
      type: "reply";
      reply: {
        /** Max 256 characters. */
        id: string;
        /** Must be unique across buttons. Max 20 characters. */
        title: string;
      };
    }>;
  };
};

export type CreateMessageInteractive =
  | CreateInteractiveCTAUrl
  | CreateInteractiveList
  | CreateInteractiveCarousel
  | CreateInteractiveButton;

export type EventNotificationMessageInteractive =
  | {
      type: "button_reply";
      button_reply: {
        id: string;
        title: string;
      };
    }
  | {
      type: "list_reply";
      list_reply: {
        id: string;
        title: string;
        description?: string;
      };
    }
  | {
      type: "nfm_reply";
      nfm_reply: {
        name: string;
        body: string;
        response_json: string;
      };
    };
