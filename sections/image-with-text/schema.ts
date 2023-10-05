import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { ImageWithTextSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const imageWithText: ShopifySection<ImageWithTextSection> = {
  name: "Image with text",
  settings: [
    sectionGlobals.topPadding,
    sectionGlobals.bottomPadding,
    sectionGlobals.responsiveVisibility,
    sectionGlobals.colorScheme,
    sectionGlobals.sectionID,
  ],
  max_blocks: 1,
  blocks: [
    {
      type: "benefit",
      name: "Text next to Image",
      settings: [
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "header",
          content: "Content",
        },
        {
          type: "color",
          id: "body_text",
          label: "Body text",
          default: "#000000",
        },
        {
          type: "color_background",
          id: "background",
          label: "Background",
          default: "linear-gradient(#ffffff, #000000)",
        },
        {
          type: "richtext",
          id: "subtitle",
          label: "Subtitle",
          default: "<p>why this is cool.</p>",
        },
        fontTypeRange({ id: "subtitle_font", label: "Subtitle font", default_font: 1 }),
        {
          type: "richtext",
          id: "title",
          label: "Title",
          default: "<p>phasellus vocibus sem metus postulant</p>",
        },
        fontTypeRange({ id: "title_font", label: "Title font", default_font: 1 }),
        {
          type: "richtext",
          id: "content",
          label: "Richtext",
          default:
            "<p>A lot fo cool things about this product. You really need this product. Shroom shroom. A lot fo cool things about this product. You really need this product. Shroom shroom. A lot fo cool things about this product. You really need this product. Shroom shroom.</p>",
        },
        fontTypeRange({ id: "content_font", label: "Content font", default_font: 1 }),
      ],
    },
  ],

  presets: [
    {
      name: "Benefit tabs",
      settings: {
        padding_top: "pt-md",
        padding_bottom: "pb-0",
        responsive_visibility: "responsive",
        color_scheme: "color_scheme_1",
      },
      blocks: [
        {
          type: "benefit",
          settings: {
            title: "<p>A benefit.</p>",
            title_font: 1,
          },
        },
      ],
    },
  ],
};
