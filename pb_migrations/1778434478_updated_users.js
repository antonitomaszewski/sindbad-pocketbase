/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("bool2531619933")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2531619933",
    "maxSelect": 1,
    "name": "profile_visibility",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "public",
      "private"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool2531619933",
    "name": "profile_visibility",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("select2531619933")

  return app.save(collection)
})
