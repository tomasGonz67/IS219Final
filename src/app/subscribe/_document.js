

// src/pages/api/subscribe.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        try {
            const API_KEY = "34b2c8e144f2ab0a947b3389bfabcd2c - us14";
            const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
            const DATACENTER = API_KEY.split('-')[1];

            const data = {
                email_address: email,
                status: 'subscribed'
            };

            const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
                method: 'POST',
                headers: {
                    'Authorization': `apikey ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status >= 400) {
                return res.status(400).json({
                    error: `There was an error subscribing to the newsletter.`
                });
            }

            return res.status(201).json({ message: 'Successfully subscribed!' });
        } catch (error) {
            return res.status(500).json({ error: error.message || error.toString() });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}