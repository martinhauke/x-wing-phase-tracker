# X-Wing Phase Tracker

This is just a really simple tool for the X-Wing Miniature Game because I am as lazy as I am forgetful. It just cycles
through the phases, tells you which phase it is and what you can do during the phases, so you won't forget to drop your
stupid bombs during system phase.

You can just visit [https://martinhauke.github.io/x-wing-phase-tracker/](https://martinhauke.github.io/x-wing-phase-tracker/) to use it.

It looks like this:

<img width="373" alt="image" src="https://user-images.githubusercontent.com/12608929/189516629-0913a072-c6c3-4c75-8759-aab527a3bdea.png">


## Dev setup

- clone this repo
- run `nvm use && yarn` to install the dependencies
- run the app locally with `yarn start`

The app will now be available at [http://localhost:3000](http://localhost:3000) 


## Deployment

This app is currently deployed with github pages.

You will need to change the `homepage` in the `package.json` if you want to deploy it yourself:

```json
  "name": "x-wing-phase-tracker",
  "version": "0.1.0",
  "homepage": "https://<YOUR_USERNAME>.github.io/x-wing-phase-tracker",
  "private": true,
  "dependencies": {...}
```
Just run `yarn deploy` to build and deploy your current local version.


