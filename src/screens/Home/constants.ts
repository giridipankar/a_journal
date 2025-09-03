export const HOROSCOPES = [
    { id: 1, name: 'Aries', value: 'ARI', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0235.gif' },
    { id: 2, name: 'Taurus', value: 'TAU', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0264.gif' },
    { id: 3, name: 'Gemini', value: 'GEM', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0076.jpg' },
    { id: 4, name: 'Cancer', value: 'CAN', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0252.gif' },
    { id: 5, name: 'Leo', value: 'LEO', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0143.gif' },
    { id: 6, name: 'Virgo', value: 'VIR', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0092.gif' },
    { id: 7, name: 'Libra', value: 'LIB', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0241.gif' },
    { id: 8, name: 'Scorpio', value: 'SCO', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0225.gif' },
    { id: 9, name: 'Sagittarius', value: 'SAG', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0041.gif' },
    { id: 10, name: 'Capricorn', value: 'CAP', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0150.gif' },
    { id: 11, name: 'Aquarius', value: 'AQU', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0166.gif' },
    { id: 12, name: 'Pisces', value: 'PIS', uri: 'https://www.animatedimages.org/data/media/1683/animated-zodiac-sign-image-0267.gif' },
];

export type HoroscopeDataType = {
    date: string;
    horoscope_data: string;
};
