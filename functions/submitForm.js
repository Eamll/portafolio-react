const axios = require("axios");

exports.handler = async function (event, context) {
    const { httpMethod, body } = event;

    if (httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, apellidos, email, message } = JSON.parse(body);

    const data = {
        "form-name": "contact",
        name,
        apellidos,
        email,
        message,
    };

    try {
        const response = await axios.post("/", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully." }),
        };
    } catch (error) {
        console.log("Error submitting form: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error submitting form." }),
        };
    }
};
