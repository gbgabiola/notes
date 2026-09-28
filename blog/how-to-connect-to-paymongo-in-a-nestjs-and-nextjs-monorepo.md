# How to Connect PayMongo in a NestJS and Next.js Monorepo

Managing payments across a monorepo works best when your secret keys stay safely on the NestJS backend, while Next.js handles the user interface.

## 1. Configure Environment Variables

Add your PayMongo API keys to the respective `.env` files in your monorepo apps.

- NestJS Backend (apps/api/.env):
  ```
  PAYMONGO_SECRET_KEY=sk_test_your_secret_key_here
  ```
- Next.js Frontend (apps/web/.env.local):
  ```
  NEXT_PUBLIC_PAYMONGO_PUBLIC_KEY=pk_test_your_public_key_here
  ```

## 2. Create a Payment Intent in NestJS

Handle the secure request to PayMongo on your backend server. Create a payment module and service in NestJS to generate a payment intent.

```ts
// apps/api/src/payment/payment.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
vcmport class PaymentService {
  private paymongoUrl = 'https://paymongo.com';

  async createPaymentIntent(amount: number) {
    const encodedKey = Buffer.from(process.env.PAYMONGO_SECRET_KEY + ':').toString('base64');
    
    const response = await axios.post(
      this.paymongoUrl,
      {
        data: {
          attributes: {
            amount: amount, // Amount in centavos (e.g., 10000 = ₱100.00)
            payment_method_allowed: ['card', 'gcash', 'paymaya'],
            currency: 'PHP',
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${encodedKey}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  }
}
```

## 3. Trigger Payment from Next.js

Call your NestJS API endpoint from your Next.js app to fetch the `client_key`, then use PayMongo's frontend flow to complete the transaction.

```ts
// apps/web/app/checkout/page.tsx
'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    // Call your NestJS backend endpoint
    const res = await fetch('http://localhost:8000/payment/intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50000 }), // ₱500.00
    });
    const data = await res.json();
    
    // Extract client_key and redirect or mount PayMongo elements
    const clientKey = data.data.attributes.client_key;
    console.log('Client Key ready for attachment:', clientKey);
    setLoading(false);
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? 'Processing...' : 'Pay ₱500 with PayMongo'}
    </button>
  );
}
```

## 4. Handle Webhooks in NestJS

Set up a webhook route in NestJS to listen for event updates like `payment_intent.succeeded` so you can fulfill orders safely after payment confirmation.
