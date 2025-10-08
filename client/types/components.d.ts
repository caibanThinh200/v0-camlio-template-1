export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<
    | {
        _key: string;
      }
    | {
        linkType?: "href" | "page" | "post";
        href?: string;
        page?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
        //   [internalGroqTypeReferenceTo]?: "page";
        };
        openInNewTab?: boolean;
        _type: "link";
        _key: string;
      }
  >;
  level?: number;
  _type: "block";
  _key: string;
}>;
