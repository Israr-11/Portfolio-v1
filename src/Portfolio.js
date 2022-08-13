const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '#',
    title: 'React',
  }
  
  const ABOUT = {
    // all the properties are optional - can be left empty or deleted
    name: 'Israr Ahmed',
    role: 'Front End Engineer',
    description:
    `I have done BS in Electrical Engineering from Institute of Space Technology, Islamabad. My love for great-looking Websites, Web and Mobile Applications leads me to learn JavaScript, related libraries, and frameworks. I love to implement my technical knowledge and learning from designs to develop awesome-looking websites and apps`,
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
  
  const PROJECTS = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Landing Page',
      description:
        'In todays world landing page is requirement of every business to grab the users, so as a portfolio project I created awesome responsive looking landing page with call to action or subscribe option at the bottom',
      stack: ['React', 'HTML 5', 'CSS 3',"Node js"],
      // sourceCode: 'https://github.com',
      livePreview: 'https://foodielover.netlify.app/#',
    },
    {
      name: 'Weather App',
      description:
        'It is an API based web application in which data is obtained from open weather api and used to provide details as search by the user. Web Application is fully responsive',
      stack: ['React', 'API', "HTML 5","CSS 3", "Node js"],
      // sourceCode: 'https://github.com',
      livePreview: 'https://weatheralerts.netlify.app/',
    },
    {
      name: 'Blog App',
      description:
        'Blogposts appear with the author name and date of post and anyone with knowing code can post using Hygraph dashboard because it is build using Next js with Hygraph (previous name GraphCMS). Its fully responsive and very fast',
      stack: ['Next js', 'Tailwind CSS', 'React', "Hygraph"],
      //sourceCode: 'https://github.com',
      livePreview: 'https://israrblog.netlify.app/',
    },
    {
      name: 'Project 4',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      //sourceCode: 'https://github.com',
      livePreview: '#',
    },
    {
      name: 'Project 5',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      //sourceCode: 'https://github.com',
      livePreview: '#',
    },
    {
      name: 'Project 6',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      //sourceCode: 'https://github.com',
      livePreview: '#',
    }
  ]
  
  const SKILLS = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    "HTML 5" ,
    "CSS 3",
    'JavaScript',
    'React js',
    'React Native',
    'Node js',
    'Bootstrap',
    'Material UI ',
    'Git',
    'Github',
    'Next js',
    'PHP',
    'Wordpress',
  ]
  
  const CONTACT = {
    // email is optional - if left empty Contact section won't show up
    email: 'johnsmith@mail.com',
 }
  
  export { header, ABOUT, PROJECTS, SKILLS, CONTACT }
  