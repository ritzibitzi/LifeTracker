📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

# Week 3 Assignment: Life Tracker

Submitted by: **Maritza Padilla**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema](https://github.com/ritzibitzi/LifeTracker/blob/main/lifetracker_api/lifetracker-schema.sql) 


### Walkthrough Video

(https://imgur.com/a/30DDkro)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[The topics discussed in my labs prepared me to complete as much of the assignment as I could, but there was a lot of detail to cover. I think I would have preferred working with one kind of site (ex: strictly a vaccine hub site, student store site, or a rate my set up site) since it was a little difficult switching between different topic labs every day. I liked the 2 parter labs for this reason.
* I did feel unprepared to complete tying the frontend to the backend. I was unable to properly implement the login and registration on my website, although it works on the backend. I'm disappointed in myself for not being able to tie it all together, but I learned a lot from the assignment.]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
[I would have allocated more time to React and learning how to set up my frontend properly. I was so intimidated by the backend, that I spent a huge part of my time this week finishing it. I would have implemented less activities to track on my page, so I could have dedicated more time to the other core features of the assignment. I would have really liked to at least get the login and register features implemented on my frontend.]

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[For my demo, I was stil piecing together my logic for my models and routes. I realized that I really need to talk to people more and see how they're approaching problems. I feel like I've been working with my head down this week and a half. I tend to be intent on learning everything first and then implementing it but I need to learn to trust in the process of learning by doing and in myself.]

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

[Shout out to my mentor Lisa for helping me debug and learn SQL. Shout out to Ana for encouraging me to ask for help even when I was too afrad to. I likely would have been stuck on SQL and my model bugs for much longer if I didn't talk to and work with them.]
