I'll help you integrate OpenAI with your Cash App project to create Cash.Bot.AI for automated work orders.

Install OpenAI dependency:
npm install openai

Update environment variables:

Test the AI integration:
curl -X POST http://localhost:3000/work-orders \
-H "Content-Type: application/json" \
-d '{"prompt": "Create a work order for cleaning service payment of $150"}'

Debug Guide:

OpenAI API Issues:
// Add debug logging
console.log('OpenAI Request:', prompt);
console.log('OpenAI Response:', completion);

Authentication Problems:
// Verify API key
if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key not found');
}

Response Processing:
// Add response validation
if (!aiResponse) {
    throw new Error('Empty AI response');
}

Error Handling:
// Enhanced error logging
catch (error) {
    console.error('Detailed Error:', {
        message: error.message,
        code: error.code,
        type: error.type,
        stack: error.stack
    });
    throw error;
}

Usage Example:

// Example prompts
const examples = [
    "Create a work order for plumbing repair payment of $200",
    "Process monthly cleaning service payment of $150",
    "Schedule weekly maintenance payment of $75"
];

The AI will:

Parse work order details
Format payment information
Generate appropriate responses
Help automate payment processing
Remember to:

Keep prompts clear and specific
Include payment amounts
Specify service types
Add any special instructions
