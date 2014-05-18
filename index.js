/*!
 * Mongoose deletedAt Timestamp Plugin
 * Copyright(c) 2014 Agustin Anfuso
 * MIT Licensed
 */

function deletedAtPlugin (schema, options) {
  schema.add({ deletedAt: Date });

  schema.statics.undeleted = function (cb) {
    this.where('deletedAt').exists(false).exec(cb);
  }

  schema.methods.paranoid_remove = function (id, cb) {
    this.deletedAt = new Date;
  }
}

module.exports = deletedAtPlugin;
