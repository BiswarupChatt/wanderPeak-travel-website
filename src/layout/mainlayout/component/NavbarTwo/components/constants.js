/* -------------------- NAV DATA -------------------- */
/**
 * layout:
 *  - "megaRegions"  -> India/World (top links + left rail + right columns)
 *  - "cards"        -> Speciality Tours (card grid + bands + footer links)
 *  - "icons"        -> Customized Holidays (left icons list + right image cards)
 *  - "inbound"      -> Inbound (banner + left cards + right list with divider)
 *  - "simple"       -> Plain link (Corporate, Forex, Gift Cards, Contact)
 *
 * NOTE: image boxes are grey placeholders; replace later.
 */
export const navData = [
    {
        title: "India",
        layout: "megaRegions",
        topLinks: [
            "Top Recommended Destinations",
            "Rajasthan",
            "Kerala",
            "Andaman and Nicobar",
            "North East",
            "Gujarat",
        ],
        leftRail: [
            "North India",
            "South India",
            "East & North East India",
            "Rajasthan, West & Central India",
        ],
        columns: [
            { heading: "Delhi", items: ["Chandrataal", "Dalhousie", "Dharamshala", "Kaza", "Manali", "Shimla", "Spiti Valley"] },
            { heading: "Leh-Ladakh", items: ["Kargil", "Leh", "Nubra Valley", "Pangong Tso", "Turtuk"] },
            { heading: "Amritsar", items: [] },
            { heading: "Chandigarh", items: [] },
            { heading: "Punjab & Haryana", items: ["Kurukshetra", "Panipat"] },
            { heading: "Uttarakhand", items: ["Jim Corbett Park", "Haridwar", "Mussoorie", "Nainital", "Rishikesh", "Chardham Yatra"] },
            { heading: "Uttar Pradesh", items: ["Agra", "Ayodhya", "Fatehpur Sikri", "Jhansi", "Lucknow", "Mathura", "Prayagraj", "Sarnath", "Varanasi", "Vrindavan"] },
        ],
    },
    {
        title: "World",
        layout: "megaRegions",
        topLinks: [
            "Top Recommended Destinations",
            "America",
            "Europe",
            "South East Asia",
            "Australia New Zealand",
            "Africa",
            "Japan China Korea Taiwan",
        ],
        leftRail: ["Africa", "America", "Asia", "Australia & New Zealand", "Europe", "Middle East", "Antarctica"],
        columns: [
            { heading: "Egypt", items: ["Alexandria", "Aswan", "Cairo", "Hurghada", "Luxor", "Nile Cruise"] },
            { heading: "Kenya", items: ["Masai Mara"] },
            { heading: "Mauritius", items: ["Port Louis"] },
            { heading: "Seychelles", items: [] },
            { heading: "South Africa", items: ["Cape Town", "George", "Johannesburg", "Knysna", "Mossel Bay", "Outdshoorn", "Pilanesberg National Park", "Port Elizabeth (Gqeberha)", "Stellenbosch", "Sun City"] },
            { heading: "Tanzania", items: [] },
            { heading: "Zimbabwe", items: ["Victoria Falls"] },
        ],
    },
    {
        title: "Speciality Tours",
        layout: "cards",
        bestselling: [
            { title: "Women's Special", sub: "104 Departures", img: "" },
            { title: "Seniors' Special", sub: "74 Departures", img: "" },
            { title: "Family Tour Packages", sub: "1080 Departures", img: "" },
            { title: "Honeymoon Special", sub: "27 Departures", img: "" },
        ],
        somethingNew: [
            { title: "Couples Only", sub: "(2 Departures)" },
            { title: "Luxury Group Tours", sub: "(2 Departures)" },
            { title: "Post Tour Holidays", sub: "" },
            { title: "Road Trips", sub: "(3 Departures)" },
            { title: "Short Trips", sub: "(78 Departures)" },
            { title: "YOLO Outdoors", sub: "(6 Departures)" },
        ],
        newlyLaunched: [
            { title: "Women's Special with Kids", sub: "(4 Departures)" },
            { title: "Women's Special Shopping and Food Tours", sub: "" },
            { title: "Women's Special Spiritual Tours", sub: "(2 Departures)" },
            { title: "Grandparents and Grandchildren Special Tours", sub: "(4 Departures)" },
        ],
        footerLinks: [
            "One Week One Place",
            "Treks & Hikes",
            "City Walks & Day Trips",
            "Students' Special",
            "Women's Special YOLO Tours",
        ],
    },
    {
        title: "Customized Holidays",
        layout: "icons",
        leftList: [
            { title: "Family Fun" },
            { title: "Romantic Holidays" },
            { title: "Getaways" },
            { title: "Hidden Gems", badge: "Newly Launched" },
            { title: "Self Drive Holidays" },
            { title: "Air Inclusive Holidays" },
            { title: "Cruise Holidays" },
        ],
        rightCards: [
            { title: "Luxury Holidays", sub: "choose the right tailor-made luxury travel vacations", img: "" },
            { title: "Island Getaways", sub: "explore the tropical island getaways", img: "" },
        ],
    },
    {
        title: "Corporate Travel",
        layout: "simple",
    },
    {
        title: "Inbound",
        layout: "inbound",
        banner: "Tailor-made Indian journeys for NRIs and foreign guests seeking culture and spirituality. Explore Now",
        leftCards: [
            { title: "Rajasthan Royale", sub: "Beyond The Forts", img: "" },
            { title: "Rajasthan", sub: "Roars & Royals", img: "" },
            { title: "Golden Grandeur", sub: "The Triangle of Royalty", img: "" },
            { title: "Udaipur", sub: "The Triangle of Royalty", img: "" },
        ],
        rightListA: [
            { title: "India Royale", sub: "Roots & Routes", img: "" },
            { title: "Sacred Trails", sub: "Ayodhya Prayagraj Varanasi", img: "" },
            { title: "On Buddha’s Trail", sub: "A pilgrimage route", img: "" },
            { title: "The Himalayan Kingdom", sub: "Mountain Range of Asia", img: "" },
        ],
        rightListB: [
            { title: "Maharaja’s Express", sub: "The Indian Panorama", img: "" },
            { title: "Blissful Bhutan", sub: "Nature, Nirvana, Monks", img: "" },
            { title: "Nepal", sub: "Mountain Lakes & Wildlife", img: "" },
            { title: "Sri Lanka", sub: "Sacred Sites to Sandy Shores", img: "" },
        ],
    },
    { title: "Forex", layout: "simple" },
    { title: "Gift Cards", layout: "simple" },
    { title: "Contact Us", layout: "simple" },
];