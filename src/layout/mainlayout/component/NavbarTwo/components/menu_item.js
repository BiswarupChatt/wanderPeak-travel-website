export const MENU_ITEMS = [
  {
    title: "India",
    path: "/india",
    subcategories: [
      {
        title: "North India",
        items: [
          { title: "Kashmir", path: "/india/north/kashmir" },
          { title: "Himachal Pradesh", path: "/india/north/himachal-pradesh" },
          { title: "Punjab", path: "/india/north/punjab" },
          { title: "Uttarakhand", path: "/india/north/uttarakhand" },
        ],
      },
      {
        title: "South India",
        items: [
          { title: "Kerala", path: "/india/south/kerala" },
          { title: "Tamil Nadu", path: "/india/south/tamil-nadu" },
          { title: "Karnataka", path: "/india/south/karnataka" },
          { title: "Andhra Pradesh", path: "/india/south/andhra-pradesh" },
        ],
      },
    ],
  },
  {
    title: "World",
    path: "/world",
    subcategories: [
      {
        title: "Europe",
        items: [
          { title: "France", path: "/world/europe/france" },
          { title: "Italy", path: "/world/europe/italy" },
          { title: "Switzerland", path: "/world/europe/switzerland" },
          { title: "Spain", path: "/world/europe/spain" },
        ],
      },
      {
        title: "Asia",
        items: [
          { title: "Japan", path: "/world/asia/japan" },
          { title: "Thailand", path: "/world/asia/thailand" },
          { title: "Singapore", path: "/world/asia/singapore" },
          { title: "Malaysia", path: "/world/asia/malaysia" },
        ],
      },
    ],
  },
];
