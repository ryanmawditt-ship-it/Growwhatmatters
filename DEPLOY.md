# Deploying to Vercel

The folder is already set up. `vercel.json` handles caching and security headers, and `.vercelignore` keeps the build source out of the upload.

One thing to know before you start: Vercel has no drag-and-drop upload in the dashboard. That is a Netlify feature. With Vercel you either use the command line or connect a Git repo.

---

## Sending Amy a draft link (two commands)

Open Terminal, then:

```bash
cd "path/to/growwhatmatters"
npx vercel
```

The first run asks you to log in, which opens a browser window. After that it asks a few setup questions. The defaults are all correct, so press Enter through them:

- Set up and deploy? **y**
- Which scope? your account or team
- Link to existing project? **n**
- Project name? `grow-what-matters`
- In which directory is your code located? `./`
- Want to modify these settings? **n**

You get back a URL like `grow-what-matters-abc123.vercel.app`. Send that to Amy.

**Why this URL is safe to share while it is still a draft:** deployments made with plain `vercel` are preview deployments, and Vercel serves those with a `noindex` header, so Google will not pick the draft up. Only the production deployment gets indexed.

If you want to be doubly sure, deploy the `website` folder from `Grow What Matters - website draft.zip` instead. Every page in that copy has a `noindex` tag written into the HTML as well.

---

## Going live later

Once Amy has signed off and the items in `READ-ME-FIRST.md` are done:

```bash
npx vercel --prod
```

Then add the domain in the Vercel dashboard, under Project → Settings → Domains. Enter `growwhatmatters.com.au`, and Vercel shows you the DNS records to add wherever the domain is registered. Add both the apex domain and `www`.

Once DNS has propagated, submit `sitemap.xml` in Google Search Console.

---

## Better long-term: connect it to GitHub

Worth doing at some point, because then every change is version-controlled and deploys automatically.

The folder is already a Git repo with an initial commit. To push it:

1. Create an empty private repo on GitHub, called `grow-what-matters`. Do not add a README or `.gitignore`, since there is already a commit here.
2. Then:

```bash
cd "path/to/growwhatmatters"
git remote add origin https://github.com/YOUR-USERNAME/grow-what-matters.git
git branch -M main
git push -u origin main
```

3. In Vercel: Add New → Project → import the repo. Framework preset **Other**, output directory `./`. No build command needed.

From then on, `git push` deploys automatically, and pushing to a branch gives you a preview URL to share before anything goes live.

---

## Making changes after it is deployed

Edit the files, then:

```bash
node _src/build.js     # only if you changed anything in _src
npx vercel --prod      # or git push, if you connected GitHub
```

`_src/layout.js` controls the capacity notice, phone number, navigation and footer across all pages. Everything else lives in the page files.
