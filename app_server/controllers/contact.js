/* GET contact view */
const contact = (req, res) => {
	res.render("contact", { title: "Travlr Getaways", selectedContact: true });
};

module.exports = {
	contact,
};
