var Mime = require("mime/Mime");

export const mimeTypes = new Mime(require("mime/types/standard.json"));
mimeTypes.define(require("mime/types/other.json"));