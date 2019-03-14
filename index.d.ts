declare class Mime {
    /**
     * Lookup a mime type based on extension
     */
    getType(path: string): string;

    /**
     * Return file extension associated with a mime type
     */
    getExtension(type: string): string;
}
declare module "mime-wrapper" {
    /**
     * The mime instance
     */
    const mimeTypes: Mime;
}