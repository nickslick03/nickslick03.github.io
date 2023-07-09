import eleanorMund from '../images/eleanorMund.png';
import whereTheBoysAt from '../images/whereTheBoysAt.png';
import forcastr from '../images/forcastr.png';

export const PROJECTS: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    links: {
        href: string;
        text: string;
    }[];
}[] = 
[
    {
      "imageSrc": eleanorMund,
      "imageAlt": "Eleanor Mund homepage",
      "title": `Portfolio Project - Eleanor Mund`,
      "description": "This website was for a group project in my web development class at Messiah University. We decided to make a portfolio website for one of our team members, Eleanor Mund, a theater major. We had lots of fun and learned a lot about creating and implementing a design in a team setting. The site was built using HTML, CSS and JavaScript.",
      "links": [
        {
          "href": "https://replit.com/@eleanorgmund/Portfolio",
          "text": "Replit page"
        },
        {
          "href": "https://portfolio.eleanorgmund.repl.co/",
          "text": "live site"
        }
      ]
    },
    {
        "imageSrc": whereTheBoysAt,
        "imageAlt": "whereTheBoysAt website game",
        "title": "Where The Boys At?",
        "description": "This site was inspired by the popular puzzle books, Where's Waldo. Users are given 3 random characters to search for in a mirage of familiar internet meme characters. When finished, the user has the option to submit their name and time into a database where it is displayed on a scoreboard. This website was built using Solid.js, TailWindCSS, and Supabase.",
        "links": [
          {
            "href": "https://github.com/nickslick03/WhereTheBoysAt",
            "text": "Github"
          },
          {
            "href": "https://wheretheboysat.netlify.app/#/",
            "text": "live site"
          }
        ]
    },
    {
      "imageSrc": forcastr,
      "imageAlt": "forcastr homepage",
      "title": "ForcastR",
      "description": "This site pulls from the openWeatherMap and IPInfo APIs to create a curated weather report for the user. A search function is included to show weather reports in different locations. The site was built using HTML, CSS and JavaScript.",
      "links": [
        {
          "href": "https://github.com/nickslick03/forcastR",
          "text": "Github"
        },
        {
          "href": "https://nickslick03.github.io/forcastR/",
          "text": "live site"
        }
      ]
    },
];