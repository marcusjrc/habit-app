

export default async function handler(req, res) {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: "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"
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate a workplace habit to pair with this behaviour: ${req.body.habit}`,
        max_tokens: 50,
    });
    res.status(200).json(response.data.choices[0].text);
}