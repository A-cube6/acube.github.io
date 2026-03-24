# Acube Management — GitHub Pages Static Next.js Starter

This starter gives you a clean, static Next.js website for **Acube Management** that you can:
- run locally in VS Code
- push to your **public GitHub repo**
- deploy through **GitHub Pages**
- connect to a **custom domain later**

## What is included
- Next.js App Router project
- Static export enabled (`output: 'export'`)
- Pages:
  - Home
  - Services
  - Client Work
  - About
  - Contact
- GitHub Actions workflow for GitHub Pages deployment
- Clean corporate styling inspired by the Smile & Care pattern

## Before you start
Make sure you have:
- Node.js 20 or later installed
- VS Code installed
- A public GitHub repo already created

## Local setup
Open the project in VS Code and run:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## How to use this with your existing GitHub repo
### Option A — easiest
1. Unzip this starter.
2. Open your existing local GitHub repo folder.
3. Copy all files from this starter into that repo.
4. In the terminal inside your repo, run:

```bash
npm install
npm run dev
```

5. If it looks good, commit and push:

```bash
git add .
git commit -m "Add Acube Management static Next.js site"
git push origin main
```

## GitHub Pages setup steps
After pushing the code:
1. Open your GitHub repository.
2. Go to **Settings**.
3. In the left menu, open **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` or manually run the workflow from the **Actions** tab.
6. Wait for deployment to complete.
7. GitHub Pages will then show your site URL.

## Important note about base path
This starter automatically handles the normal GitHub Pages cases:
- If your repo is named `yourusername.github.io`, it deploys at the root.
- If your repo is a normal project repo, it deploys under `/repo-name`.

That logic is already included in `.github/workflows/deploy.yml`.

## Custom domain later
When you connect a custom domain later:
1. In GitHub repo **Settings > Pages**, add the custom domain.
2. Update DNS at your domain provider.
3. Enable HTTPS once GitHub finishes verifying it.
4. Then edit the workflow if needed so `BASE_PATH` becomes empty for the custom-domain build.

### Custom-domain workflow tweak
If your custom domain is serving the site from the domain root, change this block in `.github/workflows/deploy.yml`:

```bash
if [ "$REPO_NAME" = "$OWNER_NAME.github.io" ]; then
  echo "BASE_PATH=" >> "$GITHUB_ENV"
else
  echo "BASE_PATH=/$REPO_NAME" >> "$GITHUB_ENV"
fi
```

to simply:

```bash
echo "BASE_PATH=" >> "$GITHUB_ENV"
```

## Content editing guide
### Main homepage
Edit:
- `app/page.tsx`

### Services page
Edit:
- `app/services/page.tsx`

### Client work page
Edit:
- `app/client-work/page.tsx`

### About page
Edit:
- `app/about/page.tsx`

### Contact page
Edit:
- `app/contact/page.tsx`

### Global styling
Edit:
- `app/globals.css`

## Later Supabase upgrade
You can later add Supabase for:
- contact forms
- auth
- PostgreSQL-backed content
- lightweight admin-driven content

If you keep hosting on GitHub Pages, use Supabase mainly from the client side or with Supabase Edge Functions for backend logic.

## Suggested next edits after unzip
1. Replace placeholder contact details in `app/contact/page.tsx`
2. Refine homepage copy in `app/page.tsx`
3. Add screenshots or logos later if needed inside `/public`
4. Update the Client Work section with Smile & Care details
5. Push to GitHub and enable Pages


## Contact form

The contact page is wired to FormSubmit so the static GitHub Pages site can forward enquiries to `mailtoacube@gmail.com` without its own backend. The first submission may trigger a one-time email confirmation for that inbox before forwarding starts.
