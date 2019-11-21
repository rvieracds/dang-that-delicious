
exports.homePage = (req, res) => {
    console.log('req', req)
    const pepe = { name: 'Pato', lastname: 'Donald' };
    res.json(pepe);

    // If i want to access to query parameters from the url
    //      req.query.queryParameters
    console.log(req.query)
}