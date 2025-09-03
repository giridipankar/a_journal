const GET_HOROSCOPE = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?';

export const fetchHoroscope = async (sign: string) => {
    try {
        const response = await fetch(`${GET_HOROSCOPE}sign=${sign}&day=TODAY`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        throw error;
    }
};
