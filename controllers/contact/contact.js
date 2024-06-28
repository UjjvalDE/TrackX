const contactModel = require('../../models/contact/contact.js')
const { isEmpty } = require('underscore');
const url = process.env.URL
module.exports = {
	CONTACT_US: async function (data, callback) {
		//send data
		var sendData = {
			ReturnCode: 200,
			err: 0,
			Data: {},
			ReturnMsg: ""
		};
        console.log("data>",data)

		let contact_data = {
				name: data.name,
				email: data.email,
				description: data.description
			}
		const create_contact = await contactModel.create(contact_data)
		console.log("create_contact>",create_contact)

		// 		ejs.renderFile(path.join(__dirname + '/../../templates/confirm_account.ejs'), { link: link }, (err, data) => {
		// 			console.log("err>>", err)
		// 			console.log("data>>>", data)
		// 			if (!err) {
		// 				console.log(err);
						// var subject = "Confirm your TrackerX account"
						// commonController.__sendEmail(respD.email, subject, data);
		// 			}
		// 		})

		let html = `<b>${data.name}</b> sent you an email from <b>${data.email}</b> for the purpose of <br>${data.description}</br>`
		let subject = "Contact Us Email"
		commonController.__sendEmail("app.trackerx@gmail.com", subject, html);
			
		sendData['Data'] = {
			Userdata: {
				name: data.name,
				email: data.email,
			},
		};
		sendData['ReturnMsg'] = "Email will be received from " + data.email,
		callback(sendData);
	}
}