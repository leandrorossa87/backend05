

const renderUploadProductViews = (req, res) => {

    console.log(req.body);

    return res.render('products');
}

module.exports = {
    renderUploadProductViews
};