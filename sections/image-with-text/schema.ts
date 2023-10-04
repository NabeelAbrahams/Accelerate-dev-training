import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { ImageWithTextSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const imageWithText: ShopifySection<ImageWithTextSection> = {
  name: "Image with text",
  settings: [
    // {
    //   type: "image_picker",
    //   id: "image_with_text_image",
    //   label: "Image all the people",
    // },
    sectionGlobals.sectionLayout,
    sectionGlobals.topPadding,
    sectionGlobals.bottomPadding,
    sectionGlobals.responsiveVisibility,
    sectionGlobals.colorScheme,
    sectionGlobals.sectionID,
  ],
  max_blocks: 2,
  blocks: [
    {
      type: "image",
      name: "Image",
      settings: [
        {
          type: "header",
          content: "Image",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "color_background",
          id: "image__overlay",
          label: "Image Overlay",
        },
        {
          type: "url",
          id: "url",
          label: "URL",
          default: "/",
        },
        {
          type: "header",
          content: "Optional Content",
        },
        {
          type: "richtext",
          id: "title",
          label: "Title",
        },
        fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
        {
          type: "richtext",
          id: "subtitle_richtext",
          label: "Subtitle",
        },
        fontTypeRange({ id: "subtitle_font", label: "Subtitle Font", default_font: 1 }),
        {
          type: "header",
          content: "Layout",
        },
        {
          type: "range",
          id: "border_width",
          label: "Border Width",
          default: 0,
          min: 0,
          max: 8,
          step: 1,
          unit: "px",
        },
        sectionGlobals.responsiveVisibility,
      ],
    },
    {
      type: "benefit",
      name: "Text (benefit)",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "richtext",
          id: "title",
          label: "Title",
        },
        fontTypeRange({ id: "title_font", label: "Title font", default_font: 1 }),
        {
          type: "richtext",
          id: "content",
          label: "Richtext",
          default: "<p>See you later, Pop. Whoo! Time to change that oil.</p>",
        },
        fontTypeRange({ id: "content_font", label: "Content font", default_font: 1 }),
      ],
    },
  ],
  presets: [
    {
      name: "image with text",
      settings: {
        section_layout: "fullwidth",
      },
      blocks: [{ type: "image" }],
    },
  ],
};
