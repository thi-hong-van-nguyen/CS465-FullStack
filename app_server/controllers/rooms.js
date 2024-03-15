/* GET rooms view */
const rooms = (req, res) => {
	res.render("rooms", { title: "Travlr Getaways", selectedRooms: true });
};

module.exports = {
	rooms,
};
