exports.handler = async function (event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
            headers: { Allow: "POST" },
        };
    }

    const { payload } = JSON.parse(event.body);

    // Here, you can process the form data as needed
    console.log("Form data:", payload);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully" }),
    };
};
