# Preventia Group Inc. Take-home Assessment

## Format:

The assessment is broken up into three parts:

- `fundamentals` - **Required for all candidates** These are to test the fundamental understanding of programming you can do it in either JavaScript or C#
- `backend` - This is used to test your knowledge on backend development
- `frontend` - This is used to test your knowledge on JavaScript, HTML, & CSS

## Rules:

- You may use whatever tools/frameworks you need to complete the assessment.
- Get as far as you can with each of the assetsments, you do NOT need to complete all questions.
- Do not copy work. If you use StackOverflow, make sure you understand the answer and give the link of where you found the answer.

This is NOT a pass/fail test, we want to see your approach to problem solving and understand where you are in your development experience. You should expect to be asked questions about your assessment in follup interviews.

## Instructions:

1. Clone locally. (This repo is specific to you only.)
1. Do the work in each of the sections that are applicable to you.
1. Push your changes up
1. Create a Pull Request against the public repo.
1. Send us an email when you have finished and are ready for us to take a look at the pull request. (Don't forget to commit your code)

## Instructions for running:

1. run `npm install`
1. make sure you have postgres >13 installed on your computer & run `createdb assessmentcolek`
1. create a .env and add `DB_USER={your_user}` and `DB_PASS={your_pass}`. They are used in `backend/server/db/db.js`
1. run `npm start` to spin up a sever on @localhost:3000
1. to test api routes, import insomnia collection in `/backend/api-testing/insomnia_Routes_Export.json` to your local insomnia app.

Note: the `db.js` file will drop and re-sync the database upon each npm start. comment out line 13 in `backend/server/db/db.js` to prevent this
