# LittleUrl Frontend

This is the frontend for the LittleUrl URL shortener service.

## Deployment to Vercel

### Prerequisites

Before deploying the frontend, you need to:
1. Deploy the backend first
2. Get the backend URL (e.g., https://littleurl-backend.vercel.app)

### Step 1: Set Up Environment Variables

1. Create a `.env.production` file with your backend URL:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

### Step 2: Deploy the Frontend

1. Push the frontend code to GitHub:
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
   - Set the Framework Preset to "Vite"
   - Set the Root Directory to the project root
   - In the "Environment Variables" section, add:
     - `VITE_API_URL`: Your backend URL (e.g., https://littleurl-backend.vercel.app)
6. Click "Deploy"

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your backend URL:
   ```
   VITE_API_URL=http://localhost:3000
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The development server will run on http://localhost:5173.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
