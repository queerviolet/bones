# JustHome 

This is a sample e-commerce application to demonstrate the end-to-end usage
of the NERP stack.

## Running Locally

### Prerequisites
- Node (>6.7) and npm
- PostgreSQL

### Run It

```sh
npm install
npm run seed
npm run build-watch
npm run dev
```

The above script will go through the following steps:
1. install npm dependencies
1. populate your Postgres DB with the seed data in `db/seed.js`
1. perform a build with Webpack and watch for changes
1. run the server and watch for file changes with nodemon

## Deploying to Heroku

All pushes to GitHub are being built and tested by Travis CI. However, only a select few of these builds will be deployed to Heroku.

We have two versions of the app on Heroku:  
**Prod**: [https://just-home.herokuapp.com/](https://just-home.herokuapp.com/)  
**Test**: [https://just-home-test.herokuapp.com/](https://just-home-test.herokuapp.com/)  

### Deploying to Test

Right now, only branches specified in our `.travis.yml` file will be deployed to Heroku by Travis CI. You can mark a branch for deployment to Test by editing the following section like so:

```yml
...
  app:
    master: just-home
    your_branch: just-home-test
...
```

If you do this, be sure not to change the other branches and their deployment targets.

### Deploying to Prod

All deployments to Prod will go through the following process:

1. A feature branch opens up a Pull Request on `master`
2. The branch is built and tested by Travis CI
3. If the build/tests pass, GitHub will allow collaborators to complete the merge
4. Once the PR is merged, Travis will rebuild the repo and deploy to Prod

No changes need to be made to the `.travis.yml` file to enable this process. Be sure not to directly push to `master` in an effort to avoid bad builds being deployed to Prod.