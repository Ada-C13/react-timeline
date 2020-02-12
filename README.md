# React Timeline

## At a Glance

- Individual, [stage 1](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-1) project
- Due before class on **DATE HERE**
- Due EOD Friday at 6 PM on **DATE HERE**

## Learning Goals
- Build React components which recieve data through props
- Build React container components which pass information to their subcomponents

## Objective

We will read information from a JSON file and display it as a social media timeline similar to a Facebook or Twitter feed.

## Getting Started

We have provided you an initial Application Skeleton generated with `create-react-app`.  In the `src/data` folder you will have a JSON file filled with timeline data for a specific user.  The application will have the following components:

- `TimelineEvent` - This component will take an individual timeline event data and render it.  Each `TimelineEvent` will contain a person who posted the event, a status message and a timestamp.  You will need to use the `Timestamp` component inside this component.
- `Timeline` - This component will take a list of timeline events as a prop and render a list of `TimelineEvent` components.
- `App` - This component is the traditional outer component of the React App. The App component will read in the data from the JSON file and pass the timeline events to the `Timeline` component which it will contain.

Your job is to implement the `render` functions of each component.  An effective strategy could be to implement each component individually testing their output on the screen with hard-coded prop data before trying to integrate the entire app.

### What's Already Here

We have already implemented some pieces of this project:
- A component `Timestamp`, that displays a time in a human-readable format
- CSS files. These should be included in the project automatically, but you will need to figure out how to attach the styles to the HTML you render.

## Setup Requirements

1. Fork and clone this repo
1. Install this project's dependencies with `$ npm install`
1. Start the local development server that runs our React project with `$ npm start`

## Wave 1

For wave 1 implement the `TimelineEvent` component function.  It should take 3 props.
  - `person` - the person making the post.
  - `status` - the message being posted.
  - `timestamp` - the date-time of the event.

Test the component by rendering it with hardcoded data inside the `App` component.  `TimelineEvent` should use the existing `Timestamp` component to render the time & date of the event.

## Wave 2

For wave 2, you will implement the `Timeline` component.  The `Timeline` component will take one prop, `events`, an array of JavaScript objects.  The `render` function will use the array to render a set of `TimelineEvent` components.

Then read in the `/src/data/timeline.json` file into an array of objects in `/src/App.js`.  In the `render` function of the `App` component, render a `TimeLine` component using the array of objects as the `events` prop.

## Sample Solution

Below is a sample solution:

![Sample App](./images/example-timeline.png)

## Going Further

Add some styling to the application to make it look more like a social media feed.

## What We Are Looking For

You can check [here](./feedback.md) for things the instructors will be looking for.
