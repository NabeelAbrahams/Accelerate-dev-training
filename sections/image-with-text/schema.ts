import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { ImageWithTextSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const imageWithText: ShopifySection<ImageWithTextSection> = {
  name: "Image with text",
  settings: [
    {
      type: "radio",
      id: "layout",
      label: "Desktop Layout",
      default: "order-2",
      options: [
        {
          value: "order-2",
          label: "Image Left",
        },
        {
          value: "-order-1",
          label: "Image Right",
        },
      ],
    },
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
      name: "the block",
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
          default: "<p>See you later, Pop. Whoo! Time to change that oil.</p>",
        },
        fontTypeRange({ id: "content_font", label: "Content font", default_font: 1 }),
      ],
    },
  ],

  presets: [
    {
      name: "Benefit tabs",
      settings: {
        layout: "order-2",
        padding_top: "pt-md",
        padding_bottom: "pb-md",
        responsive_visibility: "responsive",
        color_scheme: "color_scheme_1",
      },
      blocks: [
        {
          type: "benefit",
          settings: {
            title: "<p>Mark Dixon</p>",
            title_font: 1,
            content:
              "<p>I noticed your band is on the roster for the dance auditions after school today. Why even bother, McFly? You don't have a chance. You're too much like your old man. No McFly ever amounted to anything in the history of Hill Valley!</p>",
          },
        },
      ],
    },
  ],
};
