/* GET travel view */
const travel = (req, res) => {
	res.render("travel", { title: "Travlr Getaways", selectedTravel: true });
};

module.exports = {
	travel,
};
