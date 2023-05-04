import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
    image: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt } = JSON.parse(req.body);

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512"
    });
    res.status(200).json({ image: response.data.data[0].url})
}

