import MoneyTrack from "../assets/app.webp";
import GreenSS from "../assets/greenss.webp";
import MusicCity from "../assets/music.webp";
import GreenSupper from "../assets/green.webp";
import Appss from "../assets/appss.webp";
import Musicss from "../assets/musicss.webp";
import Provision from "../assets/provision.webp";
import Provisionss from "../assets/provisionss.webp";
import SouthAlba from "../assets/southalba.webp";
import SouthAlbaSS from "../assets/southalbass.webp";
import Lady from "../assets/lady.webp";
import LadySS from "../assets/ladyss.webp";
import Riverside from "../assets/riverside.webp";
import RiversideSS from "../assets/riversidess.webp";
import PortfolioSS from "../assets/portfolioss.webp";
import Portfolio from "../assets/portfolio.webp";
import Trust from "../assets/trust.webp";
import TrustSS from "../assets/trustss.webp";
import Store from "../assets/store&snore.webp";
import StoreSS from "../assets/store&snoress.webp";
import Seen from "../assets/seen.webp";
import SeenSS from "../assets/seenss.webp";
import Portfoliolink from "../assets/portfoliolinkx.webp";
import PortfoliolinkSS from "../assets/portfoliolinkss(1).webp";
import Ladybudz from "../assets/ladybudzchicago.webp";
import LadybudzSs from "../assets/ladybudzss.webp";
import Nuts from "../assets/natsisland.webp";
import NutsSS from "../assets/natsislandss.webp";
import Shilohstempl from "../assets/shilohstempl.webp";
import ShilohstemplSS from "../assets/shilohstemple.webp";

import StoreAndSnore from "../assets/new_mockups/storeandsnore.webp";
import PlanItPerfect from "../assets/new_mockups/planitperfect.webp";
import SovereignTrust from "../assets/new_mockups/sovereign_trust.webp";
import PortfolioLink from "../assets/new_mockups/portfoliolink.webp";
import StoreAndSnoreNashville from "../assets/new_mockups/storeandsnore_nashville.webp";
import LadyLuckNew from "../assets/new_mockups/ladyluck.webp";
import LadyBudzNew from "../assets/new_mockups/ladybudz.webp";
import SeenNew from "../assets/new_mockups/seen.webp";
import SeenTn from "../assets/new_mockups/seentn.webp";
import App from "../assets/new_mockups/app.webp";
import Provix from "../assets/new_mockups/provix.webp";
import Velin from "../assets/new_mockups/velin.webp";

export const ProjectList = [
  {
    slug: "storeandsnore-platform",
    title: "Store & Snore Booking",
    headline: "Luggage Storage Booking Platform",
    image: StoreAndSnore,
    skills: [
      "Next.js",
      "Redux",
      "TypeScript",
      "SQL",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "Git",
      "Stripe",
      "UI/UX",
    ],
    ss: "",
    giturl: "",
    weburl: "https://storeandsnore.com/",
    description:
      "As Store & Snore grew beyond the WordPress site I originally shipped for them, they needed a scalable product rather than incremental theme tweaks. I designed and built a new platform on Next.js and Tailwind CSS with Redux for client-side state, Supabase for a relational SQL backend with room to extend, Stripe for payments, and deployment on Vercel. The architecture is intentionally modular so features and data models can evolve as the business does. For operations, I delivered an advanced admin dashboard: bookings can be monitored in a dense table view and in a calendar view so staff see availability and fulfillment at a glance. I also implemented a full referral program: partners sign up, receive unique referral IDs, and can generate flyers and business cards with QR codes; referral events are tracked in the system with payout tooling for their earnings. UX was a major focus throughout: clearer navigation into the booking flow reduced friction for travelers and helped lift sales by about 30% after launch.",
  },

  {
    slug: "planitperfectevent",
    title: "Plan It Perfect Marketplace",
    headline: "Multivendor Event Marketplace",
    image: PlanItPerfect,
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Stripe Connect",
      "SQL",
      "Supabase",
      "Vercel",
      "Google Analytics",
      "SEO",
      "UI/UX",
      "Figma",
      "TypeScript",
      "Git",
    ],
    ss: "",
    giturl: "",
    weburl: "https://planitperfectevent.com/",
    description:
      "Plan It Perfect is a multivendor marketplace that connects event suppliers (caterers, décor, AV, venues, and more) with people planning weddings, corporate events, and celebrations. Organizers browse and compare vendors in one place, while suppliers run their own storefronts, availability, and pricing under shared trust and discovery. The product is built with Next.js and TypeScript on the front end, styled with Tailwind CSS, and designed end-to-end in Figma with a strong UI/UX focus so both sides can move from search to inquiry to booking without friction. Data and workflows live in Supabase with a relational SQL model suited to vendors, listings, orders, and messaging. Stripe Connect powers marketplace payments: customers pay securely, funds can be split and settled to the right suppliers, and the platform can grow new payout rules as the network scales. The app ships on Vercel for fast global delivery, and Google Analytics plus SEO help suppliers get found and help the business understand demand. Source is managed with Git so features and integrations can evolve safely as the marketplace grows.",
  },

  {
    slug: "sovereign-trust",
    title: "Sovereign Trust",
    headline: "Trust Services Business Website",
    image: SovereignTrust,
    skills: [
      "WordPress",
      "Woocommerce",
      "Elementor",
      "JavaScript",
      "CSS",
      "Google Analytics",
      "SEO",
      "UI/UX",
      "Figma",
    ],

    giturl: "",
    weburl: "https://sovereigntrustco.com/",
    description:
      "Project for a client based in the USA who runs a trust-based business. Wordpress-based project. Logo and all branding designed by me.",
  },
  {
    slug: "provix-digital",
    title: "Provix Digital",
    headline: "Automation Agency Website",
    image: Provix,
    skills: ["Next.js", "React", "Tailwind CSS", "Vercel", "UI/UX", "SEO"],
    ss: "",
    giturl: "",
    weburl: "https://www.provixdigital.com/",
    description:
      "Provix Digital is the site for an international development and automation agency based in Colombo that serves clients across the USA, UK, and worldwide. I built it as a Next.js and React marketing platform with Tailwind CSS and shipped it on Vercel, aimed at turning visitors into strategy calls rather than just listing services. The homepage opens on a clear offer — automation, web, and mobile — then breaks the work into four practices: AI and intelligent automation (custom AI and LLM development, autonomous workflows, and chatbots with support triage), custom business systems (CRM, ERP, multi-tenant SaaS, and cloud architecture), website development (Next.js and React engineering, conversion-focused UI/UX, and technical SEO with Core Web Vitals), and mobile apps (Flutter, React Native, and native iOS and Android through App Store and Google Play launch). Further down, the page explains how the team works in three steps — discover, design, and deliver — with weekly releases, QA, and support after launch, alongside a client-story section and a strip of organizations the agency has shipped for, including NHS, 9 News, SEEN, Store & Snore, and Lady Luck. The positioning line, “Turning ideas into AI-powered digital experiences that scale,” runs through the page, and the title and metadata are written so the agency can be found for the services it actually sells.",
  },
  {
    slug: "velin",
    title: "Velin",
    headline: "Scrolling Animation Website",
    image: Velin,
    skills: ["Next.js", "React", "Tailwind CSS", "Vercel", "UI/UX"],
    ss: "",
    giturl: "",
    weburl: "https://velin-theta.vercel.app/",
    description:
      "Velin is a test project I built to practice a long, scroll-driven product page. It presents Velin One, a brass fountain pen that captures handwriting on dotted paper, as one continuous story instead of a stack of static sections. The site is built with Next.js and React, styled with Tailwind CSS, and deployed on Vercel. The page opens on a full-bleed hero, “Brass ink that stays,” then moves through the pen, who writes with it, the dotted paper, and what arrives in the case. A fixed navigation stays on screen, type scrambles into place, and product photography — the nib, the notebook, the charge puck, and five finishes — takes over the viewport as you scroll. The reserve call-to-action stays in the header so the motion never hides the offer. The exercise was pacing a narrative with scroll, keeping the type quiet, and making a marketing page feel physical.",
  },
  {
    slug: "portfoliolink",
    title: "PortfolioLink Platform",
    headline: "Portfolio Builder SaaS Platform",
    image: PortfolioLink,
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "AwsS3",
      "NextAuth",
      "Vercel",
      "Stripe",
      "Git",
    ],
    ss: PortfoliolinkSS,
    giturl: "https://github.com/puliya2002/portfoliolink.git",
    weburl: "https://portfoliolink-six.vercel.app/",
    description:
      "PortfoliLink is my university final-year project, a SaaS platform designed to help freelancers and creative professionals create and showcase personalized portfolios effortlessly. It features an intuitive and responsive interface built with Next.js, Tailwind CSS, Shadcn, and TypeScript, along with customizable templates tailored to various professions. The platform removes technical barriers by providing personalized URLs under a shared domain and supports mobile app access for real-time portfolio updates through a React Native app. I built a RESTful API using Next.js API routes, integrated NextAuth.js for secure authentication, and used MongoDB for data storage to enable efficient portfolio management. File uploads are handled via AWS S3, the platform is deployed on Vercel, and I plan to containerize it with Docker.  PortfoliLink is set to be finished this month, aiming to make professional branding more accessible and affordable.",
  },

  {
    slug: "store-and-snore",
    title: "Store and Snore Nashville",
    headline: "Luggage Storage Booking Website",
    image: StoreAndSnoreNashville,
    skills: ["WordPress", "Woocommerce", "Elementor", "Paypal", "Stripe"],
    ss: StoreSS,
    giturl: "",
    weburl: "https://storeandsnorenashville.com/",
    description:
      "Store & Snore is a luggage booking website designed to provide seamless booking experiences for travelers. The website was built on WordPress with WooCommerce and Elementor for a user-friendly interface. I integrated the RnD Booking plugin to handle the booking system efficiently. The payment system includes Stripe and PayPal gateways for secure transactions. The UI design was meticulously planned and created using Figma to ensure a clean and intuitive user experience.",
  },
  {
    slug: "SEEN-TN",
    title: "SEEN TN",
    headline: "Non-Profit Student Ministry Website",
    image: SeenTn,
    skills: ["WordPress", "Woocommerce", "Elementor", "JavaScript", "CSS"],
    ss: SeenSS,
    giturl: "",
    weburl: "https://seentn.org/",
    description:
      "Designed and developed a website for SEEN TN, a non-profit organization that provides a safe and supportive environment for students to learn and grow. The platform effectively communicates the organization’s mission to nurture young hearts to know Jesus, live as Kingdom citizens, and walk in spiritual authority. With a clean, faith-inspired design and clear content structure, the website provides information about programs, values, and community involvement, helping families connect with the ministry's vision.",
  },
  {
    slug: "lady-budz-chicago",
    title: "Lady Budz Chicago",
    headline: "Lifestyle Brand E-commerce Store",
    image: LadyBudzNew,
    skills: ["WordPress", "Woocommerce", "Elementor", "JavaScript", "CSS"],
    ss: LadybudzSs,
    giturl: "",
    weburl: "https://ladybudzchicago.com/",
    description:
      "Developed a vibrant and stylish website for Lady Budz Chicago, a lifestyle brand rooted in quality, culture, and authenticity. The platform showcases a curated  premium collection alternatives and fashion-forward merchandise designed to reflect individuality and self-expression. With a sleek, modern design and user-friendly layout, the site creates an engaging experience for visitors looking to explore a brand that celebrates community, creativity, and elevated style.",
  },
  {
    slug: "seen-org",
    title: "SEEN Org",
    headline: "Non-Profit Donation Website",
    image: SeenNew,
    skills: ["WordPress", "Woocommerce", "CSS", "Paypal", "Figma"],
    ss: SeenSS,
    giturl: "",
    weburl: "https://equityempowerment.org/",
    description:
      "SEEN Org is a website created for a non-profit organization to increase awareness about its mission and initiatives. The site was built to help visitors easily learn about the organization and its impact. I included an option for online donations to support their cause. Designed with a focus on simplicity and clarity, the website ensures an engaging experience for users while effectively communicating the organization’s goals.",
  },
  {
    slug: "money-track",
    title: "Money Tack",
    headline: "Expense Tracking Mobile App",
    image: App,
    skills: ["Flutter", "Firebase", "UI/UX", "Git"],
    ss: Appss,
    giturl: "https://github.com/puliya2002/money_track.git",
    weburl: "",
    description:
      "As part of a second-year university group project, We developed MoneyTrack, an expense tracking application using the Flutter framework and integrated with a Firebase database. The goal of MoneyTrack is to provide a user-friendly platform for recording and monitoring expenses efficiently. This project showcases my skills in teamwork, mobile app development, database integration, and creating intuitive user interfaces.",
  },
  {
    slug: "shilohs-temple",
    title: "Shilohs Temple",
    headline: "Children's Ministry Website",
    image: Shilohstempl,
    skills: ["WordPress", "Woocommerce", "Elementor", "JavaScript", "CSS"],
    ss: ShilohstemplSS,
    giturl: "",
    weburl: "https://shilohstemple.com/",
    description:
      "Designed and developed a website for Shiloh’s Temple, an after-school ministry for children aged 5 to 10, centered on biblical teachings and the core themes of King, Kingdom, and Keys. The platform effectively communicates the ministry’s mission to nurture young hearts to know Jesus, live as Kingdom citizens, and walk in spiritual authority. With a clean, faith-inspired design and clear content structure, the website provides information about programs, values, and community involvement, helping families connect with the ministry's vision.",
  },
  {
    slug: "green-supermarket",
    title: "Green Supermarket",
    headline: "Supermarket E-commerce Web App",
    image: GreenSupper,
    skills: ["HTML", "CSS", "JavaScript", "JAVA", "Git", "SQL"],
    ss: GreenSS,
    giturl: "https://github.com/puliya2002/GreenSuperMarket.git",
    weburl: "",
    description:
      "University second-year group project involved developing an e-commerce web application tailored for a supermarket We used HTML, CSS, and JavaScript as front-end technologies and JAVA for the backend. Integrated PayPal sandbox as the payment gateway.",
  },

  {
    slug: "lady-luck",
    title: "Lady Luck",
    headline: "Casino-Themed E-commerce Store",
    image: Lady,
    skills: ["WordPress", "Woocommerce", "CSS", "Paypal"],
    ss: LadySS,
    giturl: "",
    weburl: "https://ladyluckaz.com/",
    description:
      "Project for a client in the USA who specializes in selling cannabis pre-rolls. For this project, I adopted a distinctive dark theme to evoke a luxurious casino ambiance. The website was built on WordPress, with all branding elements, including the logo, meticulously designed by me",
  },

  {
    slug: "natsisland",
    title: "Natsisland",
    headline: "Restaurant Menu & Brand Website",
    image: Nuts,
    skills: ["WordPress", "Woocommerce", "Elementor", "JavaScript", "CSS"],
    ss: NutsSS,
    giturl: "",
    weburl: "https://natsisland.com/",
    description:
      "Nat’s Island Flavor is a vibrant culinary brand based in Port St. Lucie, FL, offering authentic Jamaican cuisine infused with fresh, locally sourced ingredients. This project features a modern website that showcases a unique Island fusion menu, combining rich Caribbean flavors with a contemporary twist. Designed with user experience in mind, the platform provides an engaging and visually appealing way to explore dishes, learn about the brand’s story, and stay updated on events and promotions. It bridges cultural authenticity and digital accessibility to deliver a flavorful online experience.",
  },

  {
    slug: "music-city-luggage",
    title: "Music City Luggage Lounge",
    headline: "Luggage Storage Booking System",
    image: MusicCity,
    skills: ["WordPress", "Woocommerce", "CSS", "Paypal"],
    ss: Musicss,
    giturl: "",
    weburl: "https://musiccityluggage.com/",
    description:
      "Excited to share my latest freelancing project: a comprehensive website and luggage booking system. This project showcases my branding, design, and web development skills using WordPress and WooCommerce to deliver an exceptional user experience. The website features a robust admin dashboard and a booking calendar to streamline operations and enhance usability for staff and customers. By leveraging WordPress's capabilities, I created a platform that is both visually appealing and highly functional.",
  },
  {
    slug: "provisions-graphic",
    title: "ProVisions Graphic",
    headline: "Design Subscription Platform",
    image: Provision,
    skills: ["Startup", "WordPress", "Woocommerce", "CSS", "PHP", "Stripe"],
    ss: Provisionss,
    giturl: "",
    weburl: "https://provisionsgraphic.com/",
    description:
      "My Startup for offering monthly subscription packages for graphic designs. WordPress and WooCommerce-based project. This project will incorporate advanced functionalities such as membership and subscription features to facilitate seamless user experiences and recurring revenue models. I integrated Stripe as the payment gateway.",
  },
  {
    slug: "south-alba-sports",
    title: "South Alba Sports",
    headline: "Running Event Registration Website",
    image: SouthAlba,
    skills: ["WordPress", "Woocommerce", "CSS", "Paypal"],
    ss: SouthAlbaSS,
    giturl: "",
    weburl: "https://southalbasports.com/",
    description:
      "Project for a client based in the UK who organizes running events. Started to use Mid-journey ai generated images for projects from this project. The website was built on WordPress, and I designed all branding elements, including the logo. I customized the Kadence theme with custom CSS and used Elementor as the page builder. Additionally, I integrated PayPal as the payment gateway.",
  },

  {
    slug: "riverside-academy",
    title: "Riverside Accademy",
    headline: "Online Course Sales Website",
    image: Riverside,
    skills: ["WordPress", "Woocommerce", "CSS"],
    ss: RiversideSS,
    giturl: "",
    weburl: "https://riverside-academy.com/",
    description:
      "Project for a client based in the UK who runs a baby photography business. The project involves creating a website to sell their online baby photography course. Wordpress-based project. Logo and all branding designed by me.",
  },
];
