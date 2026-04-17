---
"@great-detail/whatsapp": minor
---

Added `BSUID` and WhatsApp `username` field types

For more information on the underlying API changes, see:
https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids

- \***\*Important**: `from` field in event notification message type is now
  optional - this change reflects updates to the WhatsApp Cloud API. This may
  require usage updates: e.g.
  `const from = message.from ?? message.from_user_id`
- Updated Webhook Event contacts object, added `user_id`, `parent_user_id`,
  `profile.user`. `wa_id` is now optional - this change relects updates to the
  WhatsApp Cloud API. This may require usage updates: e.g.
  `const user = contact.wa_id ?? contact.from_user_id`
- Added optional `recipient` option to message creation to send messages to a
  BSUID
- `to` option in message creation is now optional, to reflect the API's types
- Added `from_user_id`, `from_parent_user_id`, `group_id` fields to event
  notification messages type
- Added types for `user_id_update` webhook event. If the `field` field in a
  Webhook Event notification is not checked, you may also receive non-`messages`
  events.
