/* GET news view */
const news = (req, res) => {
	res.render("news", { title: "Travlr Getaways", selectedNews: true });
};

module.exports = {
	news,
};
