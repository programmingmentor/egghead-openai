import {Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {


    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'Чий Крим?'
            }
        ]
    });

    res.status(200).json({
        data: completion.data
    });

}