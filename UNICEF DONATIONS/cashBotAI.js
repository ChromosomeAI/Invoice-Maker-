const OpenAI = require('openai');

class CashBotAI {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async processWorkOrder(prompt) {
        try {
            const completion = await this.openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {
                        role: "system",
                        content: "You are Cash.Bot.AI, a specialized assistant for processing work orders and payments via Cash App."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            });

            return completion.choices[0].message.content;
        } catch (error) {
            console.error('AI Processing Error:', error);
            throw error;
        }
    }
}

module.exports = CashBotAI;
