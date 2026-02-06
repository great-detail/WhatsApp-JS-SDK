/**
 * WhatsApp NodeJS SDK.
 *
 * @author Great Detail Ltd <info@greatdetail.com>
 * @author Dom Webber <dom.webber@hotmail.com>
 * @see    https://greatdetail.com
 */

export enum MessageType {
  Audio = "audio", // for audio messages.
  Contacts = "contacts", // for contact messages.
  Document = "document", // for document messages.
  Image = "image", // for image messages.
  Interactive = "interactive", // for list and reply button messages.
  Location = "location", // for location messages.
  Reaction = "reaction", // for reaction messages.

  Sticker = "sticker", // for sticker messages.

  /** Not supported for Outgoing Messages. */
  System = "system",

  /** Not supported for Outgoing Messages. */
  Button = "button",

  /** Not supported for Outgoing Messages. */
  Order = "order",

  Template = "template", // for template messages. Text and media (images and documents) message templates are supported.
  Text = "text", // for text messages.
  Video = "video", // for video messages

  Unsupported = "unsupported", // for unsupported message types.
}
