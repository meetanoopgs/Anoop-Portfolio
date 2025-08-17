# Portfolio (from scratch)

A minimal, fast, accessible portfolio site using only **HTML + CSS + JS** (no frameworks).

## Quickstart
1. Open `index.html` in your browser to preview locally.
2. Replace content: name, bio, links, experience, projects, credentials.
3. Update `assets/images/profile.svg` with your own photo (or JPG/PNG) and point the `<img>` to it.
4. Add posts in `posts.json` (title, date, tags, summary, url).
5. Deploy:
   - **GitHub Pages**: push this folder as a repo, enable Pages (branch: `main`, folder: `/`).
   - **Netlify/Vercel**: drag-drop the folder or connect repo; set build to "none" (static).

## Custom Domain
- Buy a domain (e.g., Namecheap, Google Domains alternative).
- Point DNS `A`/`CNAME` to your host (GitHub Pages/Netlify/Vercel docs).

## Contact form
This form uses Netlify's form handling (`data-netlify="true"`). If not on Netlify, replace with Formspree action or your backend endpoint.

## Notes
- Dark mode with localStorage.
- Mobile navbar, section highlighting, scroll reveals.
- Accessible landmarks, skip link, focusable controls.
