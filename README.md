<div align="center">

# 🚀 Nexus Advertising Platform

### A Modern Advertising, Membership & Referral Management System

<p>
  <strong>Built with Next.js, Node.js, Express, PostgreSQL, and TypeScript</strong>
</p>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-000000?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

# 📖 Overview

Nexus Advertising Platform is a full-stack advertising ecosystem that combines membership subscriptions, referral marketing, commission distribution, wallet management, and administrative tools into one scalable application.

The platform enables users to register, purchase membership plans, earn commissions through referrals, manage their wallets, submit withdrawal requests, and interact with advertising products, while administrators oversee the entire ecosystem through a dedicated dashboard.

---

# ✨ Features

## 👤 Authentication

- Secure JWT Authentication
- Refresh Token Support
- Role-Based Authorization
- Protected Routes
- Password Encryption (bcrypt)

---

## 💳 Membership System

- Internship Membership
- Premium Memberships
- Membership Upgrade Requests
- Admin Approval Workflow
- Membership Benefits

---

## 👥 Referral System

- Unique Referral Codes
- Multi-Level Referral Structure
- Referral Tracking
- Referral Rewards
- Automatic Commission Distribution

---

## 💰 Wallet

- User Wallet Creation
- Wallet Balance
- Deposit Tracking
- Withdrawal Requests
- Transaction History

---

## 💸 Commission Engine

- Automatic Commission Calculation
- Referral Bonuses
- Purchase Rewards
- Wallet Crediting
- Commission Logs

---

## 🛍 Products

- Membership Products
- Product Purchases
- Purchase History
- Purchase Validation

---

## 📢 Advertisement System

- Advertisement Management
- Advertisement Viewing
- Advertisement Rewards
- Campaign Support

---

## 🔔 Notifications

- System Notifications
- Upgrade Notifications
- Withdrawal Updates
- Commission Alerts

---

## 📊 Admin Dashboard

- User Management
- Membership Management
- Wallet Management
- Upgrade Approvals
- Withdrawal Management
- Reports & Analytics

---

# 🏗 Project Structure

```
Nexus Advertising Platform
│
├── client/                 # Next.js Frontend
│
├── server/                 # Express Backend
│
├── database/
│
└── PostgreSQL
```

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- TanStack Query
- Zustand
- Axios
- Zod

---

## Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- JWT
- bcrypt

---

## Cloud Services

- Supabase PostgreSQL
- Render
- Vercel
- Cloudinary

---

# 📂 Architecture

```
Frontend (Next.js)

        │

        ▼

REST API

        │

        ▼

Express.js

        │

        ▼

Business Services

        │

        ▼

Repositories

        │

        ▼

Drizzle ORM

        │

        ▼

PostgreSQL
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/yourusername/nexus-advertising-platform.git
```

---

## Install dependencies

### Backend

```bash
cd server

npm install
```

### Frontend

```bash
cd client

npm install
```

---

## Configure Environment Variables

Create a `.env.local` file using the provided example and add your credentials.

Example:

```env
DATABASE_URL=

JWT_SECRET=

JWT_REFRESH_SECRET=

CLIENT_URL=

NEXT_PUBLIC_API_URL=
```

---

## Run Development Server

### Backend

```bash
npm run dev
```

---

### Frontend

```bash
npm run dev
```

---

# 📦 Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Supabase PostgreSQL |
| Images | Cloudinary |

---

# 🔐 Security

- Password Hashing (bcrypt)
- JWT Authentication
- Refresh Tokens
- Secure Cookies
- Role-Based Access Control
- Input Validation (Zod)
- Protected API Routes

---

# 📈 Future Improvements

- Two-Factor Authentication
- Email Verification
- SMS OTP
- Real-time Notifications
- Analytics Dashboard
- Payment Gateway Integration
- AI-powered Fraud Detection
- Mobile Application

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### Built with ❤️ using Next.js, Express.js and PostgreSQL

**Nexus Advertising Platform**

</div>