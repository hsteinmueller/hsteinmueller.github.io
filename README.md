# todo

### priority

- [x] integrate cv as pdf + download
  - make resume repo public and host pdf as gh-page, access it via url: not good because public
  - somehow download/access the artifact from private repo (github api, with credentials)
    - using github api to get pdf, asset download wont work becuase of authorization of private repo
    - nextjs api: getserversideprops
    - using release for now, maybe can use artifacts
    - https://github.com/hsteinmueller/resume/releases/latest/download/resume_en.pdf
- [ ] blog list by date + link to specific entry
- [ ] navbar

### maybe later

- [ ] fix scroll to top when changing resume pages
- [ ] nicer buttons
- [ ] raw loader
- [ ] tailwind css / styling

# what this is

Source for my github-pages blog at:
[https://hsteinmueller.github.io/](https://hsteinmueller.github.io/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Run the development server:
  ```bash
  $ npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
