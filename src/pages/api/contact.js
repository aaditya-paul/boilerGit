const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

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
      //   console.log("successss");
      res.json({"success": "true"});
    })
    .catch((e) => {
      console.error(e);
    });
}
