# LittleUrl Backend API

This is the backend API for the LittleUrl URL shortener service.

## Deployment to Vercel

### Step 1: Deploy the Backend

1. Push the backend code to GitHub:
   ```bash
   cd BACKEND
   git init
   git add .
   git commit -m "Initial backend commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/littleurl-backend.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your backend GitHub repository
5. Configure the project:
   - Set the Framework Preset to "Other"
   - Set the Root Directory to the project root (where your `vercel.json` is located)
   - In the "Environment Variables" section, add:
     - `MONGO_URI`: Your MongoDB connection string
6. Click "Deploy"

### Step 2: Get Your Backend URL

After deployment, Vercel will provide you with a URL for your backend API. It will look something like:
```
https://littleurl-backend.vercel.app
```

Use this URL as the `VITE_API_URL` environment variable when deploying your frontend.

## API Endpoints

- `POST /api/create`: Create a new short URL
  - Request body: `{ "url": "https://example.com" }`
  - Response: `{ "shortUrl": "https://littleurl-backend.vercel.app/abc123" }`

- `GET /:shortId`: Redirect to the original URL

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://...
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on http://localhost:3000.
