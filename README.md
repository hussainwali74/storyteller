# Storyteller

Storyteller is a full-stack MERN web application that allows users to write, share, and read short stories. Authenticated users can create their own stories, browse public stories from others, and manage their writing in a personal dashboard.

## Features

- **Google OAuth Authentication**: Sign in securely using your Google account.
- **Write and Share Stories**: Create short stories and choose to make them public or keep them private.
- **Personal Dashboard**: View and manage all your stories in one place.
- **Browse Public Stories**: Read stories shared by other writers on the platform.
- **Rich User Profiles**: User information and avatars are automatically imported from Google.
- **Session Management**: Secure session storage using MongoDB.
- **Modern UI**: Clean, responsive interface built with Materialize CSS and Handlebars.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Handlebars (server-side templates), Materialize CSS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Google OAuth 2.0

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hussainwali74/storyteller.git
   cd storyteller
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB URI and Google OAuth credentials.

4. **Run the app:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5000`.

## Folder Structure

- `models/` - Mongoose data models for User and Story.
- `routes/` - Express route handlers (authentication, stories, dashboard, etc).
- `views/` - Handlebars templates for all pages.
- `public/` - Static files (CSS, JS).
- `middleware/` - Custom Express middleware for authentication.

## License

MIT

---

*Create, share, and discover stories with Storyteller!*
