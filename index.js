var Mime = require("mime/Mime");

export const mimeTypes = new Mime(require("mime/types/standard.js"));
mimeTypes.define(require("mime/types/other.js"));
