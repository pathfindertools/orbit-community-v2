import type { TinaTemplate } from "tinacms"

export const mapBlockSchema: TinaTemplate = {
  name: "map",
  label: "Map",
  ui: {
    defaultItem: {
      mapUrl: "",
    },
  },
  fields: [
    {
      label: "Google Map URL",
      name: "mapUrl",
      type: "string",
    },
  ]
};
