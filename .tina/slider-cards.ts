import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  name: "Name",
  time: "Time",
};

export const sliderCardsBlockSchema: TinaTemplate = {
  name: "sliderCards",
  label: "Slider Cards",
  ui: {
    defaultItem: {
      slidesToShow: "1",
      headline: "This is the main headline",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a rich text component you can add hyperlinks, etc."
              }
            ]
          }
        ]
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      label: "Slides To Show",
      description: "How many slides to show in one frame",
      name: "slidesToShow",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ]
    },
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    backgroundSchema,
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Cards",
      name: "items",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Image",
          name: "imageSrc",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Time",
          name: "time",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ]
    },
    {
      label: "Button Label",
      name: "buttonLabel",
      type: "string",
    },
    {
      label: "Button Link",
      name: "buttonLink",
      type: "string",
    },
    {
      label: "Button Type",
      name: "buttonType",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Minor", value: "minor" },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
