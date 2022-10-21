import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  name: "Name",
  twitter: "Twitter",
  country: "us",
  badge: "cadet",
};

export const leaderCardsBlockSchema: TinaTemplate = {
  name: "leaderCards",
  label: "Leader Cards",
  ui: {
    defaultItem: {
      category: "home",
      headline: "This is the main headline",
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      label: "Category",
      name: "category",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Home", value: "home" },
        { label: "Cadet", value: "cadet" },
        { label: "Ensign", value: "ensign" },
        { label: "Lieutenant", value: "lieutenant" },
        { label: "Captain", value: "captain" },
        { label: "Spaceship", value: "spaceship" },
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
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Card Labels",
      name: "cardlabels",
      type: "object",
      ui: {
        component: 'group',
      },
      fields: [
        {
          label: "Name Label",
          name: "nameLabel",
          type: "string"
        },
        {
          label: "Country Label",
          name: "countryLabel",
          type: "string"
        },
        {
          label: "Badge Label",
          name: "badgeLabel",
          type: "string"
        }
      ],
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
          label: "Twitter Handle",
          name: "twitter",
          type: "string",
        },
        {
          label: "Country",
          name: "country",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Australia", value: "australia" },
            { label: "China", value: "china" },
            { label: "Germany", value: "germany" },
            { label: "India", value: "india" },
            { label: "Kenya", value: "kenya" },
            { label: "Nigeria", value: "nigeria" },
            { label: "Singapore", value: "singapore" },
            { label: "South Korea", value: "south-korea" },
            { label: "Spain", value: "spain" },
            { label: "Switzerland", value: "switzerland" },
            { label: "Tanzania", value: "tanzania" },
            { label: "Thailand", value: "thailand" },
            { label: "Uganda", value: "uganda" },
            { label: "UK", value: "uk" },
            { label: "US", value: "us" },
            { label: "World", value: "world" },
          ]
        },
        {
          label: "Badge",
          name: "badge",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Captain", value: "captain" },
            { label: "Lietenant", value: "lieutenant" },
            { label: "Ensign", value: "ensign" },
            { label: "Cadet", value: "cadet" },
            { label: "Spaceship", value: "spaceship" },
          ]
        },
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
