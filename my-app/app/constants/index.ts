type PerformanceImage = {
    id: string;
    src: string;
};

type PerformanceImagePosition = {
    id: string;
    left?: number;
    right?: number;
    bottom?: number;
    transform?: string;
};

const navLinks = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iPhone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
];

const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

const performanceImages: PerformanceImage[] = [
    { id: "p1", src: "/performance1.webp" },
    { id: "p2", src: "/performance2.webp" },
    { id: "p3", src: "/performance3.webp" },
    { id: "p4", src: "/performance4.webp" },
    { id: "p5", src: "/performance5.webp" },
    { id: "p6", src: "/performance6.webp" },
    { id: "p7", src: "/performance7.webp" },
];

const performanceImgPositions: PerformanceImagePosition[] = [
    {
        id: "p1",
        left: 5,
        bottom: 65,
    },
    {
        id: "p2",
        right: 10,
        bottom: 60,
    },
    {
        id: "p3",
        right: -5,
        bottom: 45,
    },
    {
        id: "p4",
        right: -10,
        bottom: 0,
    },
    {
        id: "p5",
        left: 20,
        bottom: 50,
    },
    {
        id: "p6",
        left: 2,
        bottom: 30,
    },
    {
        id: "p7",
        left: -5,
        bottom: 0,
    },
];

const features = [
    {
        id: 1,
        icon: "/feature-icon1.svg",
        highlight: "Email AI.",
        text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
        // top-1/2 aur -translate-y-1/2 se vertical center hoga
        styles: "left-5 right-5 md:right-auto md:left-20 sm:top-1/2 top-[35%] -translate-y-1/2 opacity-0",
    },
    {
        id: 2,
        icon: "/feature-icon2.svg",
        highlight: "Image AI.",
        text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
        // Isko right side par rakha hai par vertical center wahi rahega
        styles: "left-5 right-5 md:left-auto md:right-20 sm:top-1/2 top-[35%] -translate-y-1/2 opacity-0",
    },
    {
        id: 3,
        icon: "/feature-icon3.svg",
        highlight: "Summarize AI.",
        text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
        styles: "left-5 right-5 md:right-auto md:left-20 sm:top-1/2 top-[35%] -translate-y-1/2 opacity-0",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

export {
    features,
    featureSequence,
    footerLinks,
    navLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
};
