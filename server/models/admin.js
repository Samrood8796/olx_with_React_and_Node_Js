const mongoose = require('mongoose')
const Admin = new mongoose.Schema(
	{
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ collection: 'Admindata' }
)

const model = mongoose.model('AdminData', Admin)

module.exports = model