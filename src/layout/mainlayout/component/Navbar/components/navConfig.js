export const NAVBAR_ITEMS = [
    { name: 'Home', path: '/' },
    {
        name: 'Destinations',
        children: [
            {
                name: 'Popular Places',
                path: '/popular-places',
                children: [
                    {
                        name: 'Europe',
                        path: '/popular-places/europe',
                        children: [{ name: 'France', path: '/popular-places/europe/france' }],
                    },
                    { name: 'Asia', path: '/popular-places/asia' },
                    { name: 'America', path: '/popular-places/america' },
                ],
            },
            { name: 'Featured Tours', path: '/featured-tours' },
        ],
    },
    {
        name: 'Services',
        children: [
            { name: 'Tour Packages', path: '/tour-packages' },
            { name: 'Custom Tours', path: '/custom-tours' },
        ],
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];