import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, Design } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Branding",
    content:
      "We make sure that your online presence is the best representation of you",
  },
  {
    id: "feature-2",
    icon: Design,
    title: "Design",
    content:
      "Our team will create clean, sleek designs for websites and social media that compliments both you and your business.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "SEO Management",
    content:
      "We use excellent SEO strategies to get your website ranking well in search engine pages.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Software Masters helped me to create a website that was everything that I asked for and met the requirements",
    name: "Lawrence",
    title: "Founder, Virpio Homes",
    img: people01,
  },
  /*{
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },*/
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];


import {
  design,
  Editing,
  Hootsuite,
  HTML,
  Responsiveness
} from "../assets";

import {
  SEO,
  Shopify,
  Social,
  Wordpress,
  Facebook
} from "../assets";

const sportCarsArray = [
  {
    id: 0,
    logo: design,
    text: `Design`,
    width: "150px",
  },
  {
    id: 1,
    logo: Wordpress,
    text: `Wordpress`,
    width: "150px",
  },
  {
    id: 2,
    logo: HTML,
    text: `HTML`,
    width: "150px",
  },
  {
    id: 3,
    logo: design,
    text: "Design",
    width: "150px",
  },
  {
    id: 4,
    logo: Responsiveness,
    text: "Responsiveness",
    width: "150px",
  },
];

const electricCarsArray = [
  {
    id: 0,
    logo: SEO,
    text: `SEO`,
    width: "160px",
  },
  {
    id: 1,
    logo: Social,
    text: `Social`,
    width: "150px",
  },
  {
    id: 2,
    logo: Facebook,
    text: `Facebook`,
    width: "150px",
  },
  {
    id: 3,
    logo: Hootsuite,
    text: `Hootsuite`,
    width: "150px",
  },
  {
    id: 4,
    logo: Facebook,
    text: `Facebook`,
    width: "101px",
  },
];

export { sportCarsArray, electricCarsArray };