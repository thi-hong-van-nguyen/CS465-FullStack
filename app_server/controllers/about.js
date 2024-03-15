/* GET about view */
const about = (req, res) => {
	res.render("about", { title: "Travlr Getaways", selectedAbout: true });
};

module.exports = {
	about,
};
