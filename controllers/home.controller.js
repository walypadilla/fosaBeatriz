//---------------------------------------------------

const { serviceData, viajesDatos } = require('../data/servicesData');
const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD_EMAIL } = require('../config/config');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'transportesoswen@gmail.com',
		pass: 'molinah7788', // naturally, replace both with your real credentials or an application-specific password
	},
});

// Router INDEX
exports.getIndex = (req, res, next) => {
	res.render('pages/index', {
		path: '/',
		title: 'Limpieza de fosas septicas El Salvador',
	});
};

// Router SERVICES
exports.getServices = (req, res, next) => {
	const datosEnvios = serviceData;
	res.render('pages/servicios', {
		path: '/servicios',
		dato: viajesDatos,
		data: datosEnvios,
		title: 'Servicios',
	});
};

// ROUTES CONTACT
exports.getContact = (req, res, next) => {
	res.render('pages/contacto', {
		path: '/contacto',
		title: 'Contacto',
	});
};

exports.postSendEmail = (req, res, next) => {
	const { nombre, apellido, email, direccion, textArea } = req.body;
	const mailOptions = {
		from: email,
		to: 'transportesoswen@gmail.com',
		subject: 'Solicitud de cotización de servicios',
		html: `
			<p>Hola, soy: <strong>${nombre}, ${apellido}</strong></p>
			<p>Necesito información de sus servicios.</p>
			<p><strong>Correo: </strong>${email}</p>
			<p><strong>Dirección: </strong>${direccion}</p>
			<p><strong>Comentarios adicionales:</strong></p>
			<p>${textArea}</p>
		`,
	};
	const automail = {
		from: 'transportesoswen@gmail.com',
		to: email,
		subject: 'TRANSPORTES Y ENVIOS OSWEN',
		html: `
			<h4>Hola: <strong>${nombre}</strong></h4>
			<p>Tu solicitud de cotizacion a sido recibida.</p>
			<p>Gracias por escribirnos, para nosotros es un placer atenderte.</p>
			<p>En seguida uno de nuestros asesores se pondrá en contacto contigo.</p>
		`,
	};

	transporter.sendMail((automail, mailOptions), function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});

	res.redirect('/contacto');
};
