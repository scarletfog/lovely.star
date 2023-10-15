# Lovely Star
## Setup

``` bash
nvm use

npm install

npm run build

npm start

```

The project will run on port `8080`.

## Other commands

Other commands for running cypress, test cases, and linting + formatting:
``` bash
npm run cypress:open

npm run test

npm run lint

npm run formatting
```

## Notes

### What I would add:

- Storybook
- Maybe error boundaries (if handy tooling was available - like Sentry)
- Translations
- Missing loading state, forgotten only because it worked fast
- A session with UI designers, all I design is 💩. Missing design gave me a headache.

### What I skipped intentionally:
- React context. It could have been used for building the form UI but I used a lib, or for theming but there is a theme provider (styled-components).

### Extra notes:
- I have never used React Query before so re-checking the logic with another dev would be a good idea.
- Layout is used for protected page(s), ie. login is outside.