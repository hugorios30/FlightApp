
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let values = {};

module.exports = {
    getPlaceInfo: async (req, res) => {
        const place = req.body.place;
        const url = `${process.env.FLIGHTS_API_URL}/place/${process.env.FLIGHTS_API_KEY}/${place}`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        res.send(data);
    },
    getAirportNearby: async (req, res) => {
        const country = 'US';
        const token = req.query.magicKey;
        const url = new URL(`${process.env.FLIGHTS_API_URL}/nearby/${process.env.FLIGHTS_API_KEY}`)
        url.searchParams.set('country', 'US')
        url.searchParams.set('token', token)
        console.log(url.href)
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        res.send(data);
    },
    getFlightInfo: async (req, res) => {
        const {departure, arrival, date, adults, children, infants, cabinClass, currency} = req.body
        const url = new URL(`${process.env.FLIGHTS_API_URL}/onewaytrip/${process.env.FLIGHTS_API_KEY}/${departure}/${arrival}/${date}/${adults}/${children}/${infants}/${cabinClass}/${currency}`);
        console.log(url.href)
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        res.send(data);
    }


}