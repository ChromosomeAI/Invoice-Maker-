const CashBotAI = require('./cashBotAI');
const cashBot = new CashBotAI();

// Add this new endpoint
app.post('/work-orders', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const aiResponse = await cashBot.processWorkOrder(prompt);
        
        // Process AI response and create work order
        const workOrder = {
            id: Date.now(),
            prompt,
            aiResponse,
            status: 'created',
            timestamp: new Date()
        };

        res.json(workOrder);
    } catch (error) {
        console.error('Work Order Error:', error);
        res.status(500).json({ error: 'Failed to process work order' });
    }
});
