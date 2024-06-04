import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Passionate about learning and creating innovative products",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-full w-60",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building react native apps",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-8 md:w-8/12 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cynthia's UniLaunchpad",
    des: "A web-based platform that helps student to enroll into there dream university",
    img: "/p1.svg",
    iconLists: [ "/tail.svg", "/Figma.svg"],
    link: "https://www.figma.com/design/qH6iDPJo4GPvbp72wKs0cJ/Cynthia-UniLaunchpad?node-id=0-1&t=vQHYhhdnNEWryZUS-1",
  },
  {
    id: 2,
    title: "Voice Notes- Note making mobile app",
    des: "Simplify your note making experience with Voice Notes.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/appwrite.svg", "/expo.svg"],
    link: "https://github.com/senpaiblue/Voice-Note",
  },
  {
    id: 3,
    title: "Wish App",
    des: "Designed and developed a price tracking app, which gives notifcation of price spikes",
    img: "/p3.svg",
    iconLists: ["/tail.svg", "/Figma.svg"],
    link: "https://www.figma.com/design/R4gP20HlCtK4HqbeZRMgtY/cibi-UX-design?node-id=0-1&t=3KaBTxlqFJgWAJKO-1",
  },
  {
    id: 4,
    title: "Pull Request Guide Chrome Extension",
    des: "Developed a chrome extension that helps beginner read clearly the summary of a pull request.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://github.com/MizuHorizon/PR-Guide-Extension",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Sakcham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sakcham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sakcham is the ideal partner.",
    name: "Cynthia",
    title: "UniLaunchPad Founder",
    image:"/cynthia.svg"
  },
  {
    quote:
      "Working with Sakcham was a delightful experience. His unwavering professionalism, swift responses, and commitment to excellence were apparent from start to finish. Sakcham's passion for every aspect of development is remarkable. For those looking to enhance their website and brand, Sakcham is the perfect collaborator.",
    name: "Manuel",
    title: "CIBI CO-Founder",
    image:"/manuel.svg"
  },
  {
    quote:
      "Partnering with Sakcham was a joy. His dedication to professionalism, timely delivery, and outstanding results shone throughout our collaboration. Sakcham's excitement for all things development is truly impressive. If you want to boost your website and brand, Sakcham is the ideal choice.",
    name: "Glint Ace",
    title: "Void Strategies CO-Founder",
    image:"/glint.svg"
  },
  {
    quote:
      "It was a pleasure to collaborate with Sakcham. His exceptional professionalism, promptness, and focus on quality were clear throughout our project. Sakcham's zeal for development is particularly noteworthy. For anyone aiming to improve their website and brand presence, Sakcham is the go-to expert.",
    name: "Mohit",
    title: "Product Designer Under25",
    image:"/mohit.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "UI/UX intern at Cynthia",
    desc: "Assisted in the development of a web-based platform using Figma, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native and Expo.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using Next.js enhancing interactivity. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UX Intern",
    desc: "Designed flows for the CIBI applicatiion, NYC based start Up. ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/senpaiblue"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/SakchamSingh07"

  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/sakcham-singh-b45a7721a/"
  },
];