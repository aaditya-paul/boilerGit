const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.REACT_APP_SG_KEY);

export default async function contact(req, res) {
  const {name, email, msg} = req.body;
  await sgMail
    .send({
      to: email, // Change to your recipient
      from: "aadityapaul2006.programmer@gmail.com", // Change to your verified sender
      subject: "Contact request",
      text: "Shiksha",
      html: `<p><h3><strong>FROM : ${name}</strong></h3> 
      <h4>${msg}</h4></p>
      `,
    })
    .then(() => {
      res.json({"success": "true"});
    })
    .catch((e) => {
      console.error(e);
    });
}
