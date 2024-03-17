/* GET 'home' page */
const index = (req, res) => {
	res.render("index", { title: "Travlr Getaways", selectedHome: true });
};

module.exports = {
	index,
};
