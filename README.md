# Matt Newman - CV

This repo should power my online CV, via github pages: https://matt-newman.github.io/ 

The repo that powers that site: https://github.com/matt-newman/matt-newman.github.io/

## How it works
The current build uses NuxtJS (therefore vue), its deployed to github pages via a workflow that runs on push to 'master'

## Development

Basically, have a look in package.json, but essentially:

`npm install`

`npm run dev`

n.b: there can be some complications of using the PWA features in dev mode, so test that fully, do:

`npm run generate`

`npx serve ./output/public`

## Considerations of the site:
* works as a PWA (so once visited twice, it works offline)
* is responsive (built mobile first)
* is highly performant (lighthouse score of 100)
* works without any javascript
* works without any css
* is designed to be printable
    * prints on 2 pages by default
    * prints on 3 pages when fully expanded

