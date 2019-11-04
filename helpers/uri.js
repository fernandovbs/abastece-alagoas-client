export const URI = {
    getPostos: (location) => `https://api.abastecealagoas.com/postos/lat?q=${location.lat}&long=${location.long}`,
};