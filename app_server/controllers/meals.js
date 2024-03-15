/* GET meals view */
const meals = (req, res) => {
	res.render("meals", { title: "Travlr Getaways", selectedMeals: true });
};

module.exports = {
	meals,
};
