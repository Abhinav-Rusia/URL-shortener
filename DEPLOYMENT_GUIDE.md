# LittleUrl Deployment Guide

This guide will walk you through deploying both the backend and frontend of LittleUrl to Vercel.

## Step 1: Deploy the Backend

### 1.1. Prepare the Backend for Deployment

The backend is already configured for Vercel deployment with:
- A `vercel.json` file in the BACKEND directory
- Updated app.js to work with serverless functions
- Environment variable setup for MongoDB

### 1.2. Deploy the Backend to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Create a new GitHub repository for the backend:
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
   - Framework Preset: "Other"
   - Root Directory: Leave as is (should be the root of the backend)
   - Build Command: `npm run vercel-build`
   - Output Directory: Leave blank
   - Install Command: `npm install`
   - Environment Variables:
     - Add `MONGO_URI` with your MongoDB connection string
6. Click "Deploy"

#### Option B: Using Vercel CLI

1. Install Vercel CLI if you haven't already:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the backend directory:
   ```bash
   cd BACKEND
   ```

3. Deploy with Vercel CLI:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy: Yes
   - Link to existing project: No
   - Project name: littleurl-backend (or your preferred name)
   - Directory: ./ (current directory)
   - Override settings: No
   - Add Environment Variables:
     - MONGO_URI: your-mongodb-connection-string

### 1.3. Get Your Backend URL

After deployment, Vercel will provide you with a URL for your backend. It will look something like:
```
https://littleurl-backend.vercel.app
```

**Save this URL** as you'll need it for the frontend deployment.

## Step 2: Deploy the Frontend

### 2.1. Prepare the Frontend for Deployment

1. Create a `.env.production` file in the FRONTEND directory:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   Replace `https://your-backend-url.vercel.app` with your actual backend URL from Step 1.3.

### 2.2. Deploy the Frontend to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Create a new GitHub repository for the frontend:
   ```bash
   cd FRONTEND
   git init
   git add .
   git commit -m "Initial frontend commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/littleurl-frontend.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your frontend GitHub repository
5. Configure the project:
   - Framework Preset: "Vite"
   - Root Directory: Leave as is (should be the root of the frontend)
   - Build Command: `npm run build`
   - Output Directory: dist
   - Install Command: `npm install`
   - Environment Variables:
     - Add `VITE_API_URL` with your backend URL from Step 1.3
6. Click "Deploy"

#### Option B: Using Vercel CLI

1. Navigate to the frontend directory:
   ```bash
   cd FRONTEND
   ```

2. Deploy with Vercel CLI:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Link to existing project: No
   - Project name: littleurl-frontend (or your preferred name)
   - Directory: ./ (current directory)
   - Override settings: No
   - Add Environment Variables:
     - VITE_API_URL: your-backend-url-from-step-1.3

## Step 3: Test Your Deployment

1. Visit your frontend URL (provided by Vercel after deployment)
2. Try creating a short URL
3. Test that the short URL redirects correctly

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error**:
   - Check that your MONGO_URI is correct
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Check Vercel logs for connection errors

2. **API Not Found**:
   - Verify the routes in your vercel.json file
   - Check that app.js is exporting the Express app correctly

### Frontend Issues

1. **API Connection Error**:
   - Verify that VITE_API_URL is set correctly
   - Check for CORS issues (the backend should allow requests from your frontend domain)
   - Check browser console for network errors

2. **Build Errors**:
   - Check Vercel build logs
   - Ensure all dependencies are correctly installed

## Updating Your Deployment

### Backend Updates

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push
   ```
3. Vercel will automatically redeploy

### Frontend Updates

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update frontend"
   git push
   ```
3. Vercel will automatically redeploy
