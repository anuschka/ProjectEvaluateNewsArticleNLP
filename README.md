# Project Description

For this Front End Nanodegree project we built a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. We used Meaningcloud for the API calls. The API help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

# User Interaction

The user accesses the site and is presented with a simple form. The form has one input field. This is where the user enters the URL
for the article and clicks submit. The user receives Polarity and Subjectivity as output. Empty input field is not allowed.

# Show content offline
The application uses service workers to show the content when offline.

# Installation

## Clone the repo:
https://github.com/anuschka/fend-evaluate-news-article-nlp

To install the web application locally one needs to have Node Webserver installed.
Once you clone, you will need to install everything.

`cd fend-evaluate-news-article-nlp`

`npm install`

## Prod instance:
`npm run build-prod` 

## Dev instance:
`npm run build-dev`

## Start the server:
`npm start`

## Run tests:
`npm test`

## Access the web application:
Prod URL: http://localhost:8081

Dev URL: http://localhost:8080