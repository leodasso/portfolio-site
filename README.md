# Leo's Portfolio

This is my website's guts! This site has sections for projects, about, and links to github,
linkedIn, social media X, social media Y. 

### Features
* Fonts from Google Fonts, with the sweet _Permanent Marker_ as the hero font.
* CSS transition animations
* Embedded google form for feedback
* Built to be responsive

### Screenshots
![header preview](https://github.com/leodasso/portfolio-site/blob/master/readme/portfolio_2.png?raw=true)

![site project preview](https://github.com/leodasso/portfolio-site/blob/master/readme/portfolio_1.png?raw=true)

![feedback form preview](https://github.com/leodasso/portfolio-site/blob/master/readme/portfolio_3.png?raw=true)

## Getting Started
1. Clone the repo to your computer.
2. In the terminal, navigate to the folder 'portfolio-site' and enter `npm install`
3. Still in the terminal, run `npm run client`
4. This will start up the React dev server. From here, open up your browser and go to `http://localhost:3000/`
5. Badabing badaboom

### Adding a new project
1. Navigate to /src/projects/
2. There should be a number of projects already in there, and a file called `projects.index.js`
3. Duplicate one of the project files, and fill in the info for your new project.
4. In `projects.index.js`, import the new project you created, and add it to the `allProjects` array.
