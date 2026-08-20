import Reveal from "../../hooks/Reveal";
import ProjectCard from "./ProjectCard";
import epiqura1 from "../../assets/Project/epiqura/epiqura1.png";
import epiqura2 from "../../assets/Project/epiqura/epiqura2.png";
import epiqura3 from "../../assets/Project/epiqura/epiqura3.png";
import epiqura4 from "../../assets/Project/epiqura/epiqura4.png";

const PROJECTS = [
  {
    id: "01",
    title: "EveryDay Wear",
    cat: "Fashion E-Commerce · Full-Stack Web Platform",
    desc: "Modern fashion e-commerce platform built for everyday wear, featuring men's and women's collections, dynamic product browsing, advanced filtering and sorting, wishlist and cart functionality, secure checkout, customer authentication, order management, fashion blogging, and a dedicated admin dashboard.",
    gallery: ["lamuse1", "lamuse2", "lamuse3", "lamuse4"],
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB Atlas",
      "NextAuth.js",
      "Google Authentication",
      "Stripe",
      "Zustand",
      "TanStack Query",
      "Framer Motion",
      "GSAP",
      "Recharts",
      "Swiper",
    ],
    ac: "#C59DD9",
    bg: ["#2B0D3E", "#14071D"],
    span: 2,

    info: [
      ["Architecture", "Next.js App Router"],
      ["Frontend", "React + JavaScript"],
      ["Styling", "Tailwind CSS + DaisyUI"],
      ["Database", "MongoDB Atlas"],
      ["Authentication", "NextAuth.js + Google Login"],
      ["Product System", "Dynamic Product Catalog + CRUD"],
      ["Collections", "Men's + Women's Collections"],
      ["Product Discovery", "Search + Filtering + Sorting"],
      ["Filters", "Category, Size, Color, Rating, Price"],
      ["Cart", "Persistent Shopping Cart"],
      ["Wishlist", "Save + Manage Favorite Products"],
      ["Checkout", "Customer Checkout Workflow"],
      ["Payments", "Stripe + Cash on Delivery"],
      ["Orders", "Order Creation + Order Management"],
      ["User Dashboard", "Profile + Orders + Wishlist"],
      ["Admin Dashboard", "Products + Orders + Customers"],
      ["Analytics", "Revenue + Order Statistics"],
      ["Charts", "Recharts Analytics Dashboard"],
      ["Blog", "Fashion Blog System"],
      ["State Management", "Zustand"],
      ["Data Fetching", "TanStack Query"],
      ["Animations", "Framer Motion + GSAP"],
      ["UI Components", "Responsive Modern Interface"],
      ["Responsive Design", "Mobile + Tablet + Desktop"],
      ["Deployment", "Production Deployment"],
    ],
    status: "Live",
    link: "https://everydaywears.netlify.app/",
  },
  {
    id: "02",
    title: "Epiqura",
    cat: "Creative Agency · Premium SaaS",
    desc: "High-performance digital agency platform focused on branding, UI/UX systems, and scalable web solutions. Built with immersive motion design and conversion-optimized layouts. Enterprise-ready eCommerce platform with multi-role authentication, admin dashboard, secure payments, product lifecycle management, and analytics. Designed with scalable architecture and production-grade state management.",
    gallery: [epiqura1, epiqura2, epiqura3, epiqura4],
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Role-Based Access Control",
      "Stripe Integration",
      "TanStack Query",
      "Axios API Layer",
      "Leaflet Maps",
      "Framer Motion",
      "Recharts Analytics",
    ],
    ac: "#8B5CF6",
    bg: ["#0A0714", "#060410"],
    span: 1,
    info: [
      ["Architecture", "SPA · Component-Driven"],
      ["Auth System", "Firebase + Role-Based Access"],
      ["User Roles", "Admin · User"],
      ["Product Control", "Create · Update · Delete · Manage"],
      ["Order System", "Order Tracking · Status Control"],
      ["Payment System", "Stripe Checkout + History Logs"],
      ["Review System", "User Ratings + Moderation"],
      ["Profile Management", "Editable User Dashboard"],
      ["State Management", "TanStack Query + Local Cache"],
      ["Analytics", "Recharts Admin Dashboard"],
      ["Status", "Live — Production Ready"],
    ],
    status: "Live",
    link: "https://epiqura.netlify.app/",
  },

  {
    id: "03",
    title: "UrbanBite Platform",
    cat: "FoodTech · Role-Based Dashboard System",
    desc: "Complete food ordering ecosystem with dynamic cart logic, live order management, admin moderation tools, and payment history tracking. Designed with scalable client-side architecture and optimized data fetching.",
    gallery: ["urban1", "urban2", "urban3", "urban4"],
    tags: [
      "React 19",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "Axios",
      "Leaflet",
      "Framer Motion",
      "Recharts",
    ],
    ac: "#10B981",
    bg: ["#020E08", "#041006"],
    span: 3,
    info: [
      ["Architecture", "Component-Driven SPA"],
      ["User Roles", "Admin · User"],
      ["Cart System", "Persistent + Real-Time Sync"],
      ["Product Control", "Add · Update · Delete"],
      ["Order Tracking", "Status Control + History"],
      ["Payments", "Stripe + Transaction Logs"],
      ["Review Control", "Rating + Moderation"],
      ["Admin Panel", "Dashboard Metrics"],
      ["State Layer", "TanStack Query"],
      ["Status", "Not Live Yet"],
    ],
    status: "Not Live Yet",
    link: "https://urbanbite-demo.netlify.app/",
  },
  {
    id: "04",
    title: "Atlas Market Pro",
    cat: "Digital Marketplace · SaaS Infrastructure",
    desc: "Advanced marketplace architecture featuring role-segmented dashboards, dynamic product pipelines, revenue analytics, and secure transaction workflows. Built for scalability and maintainability.",
    gallery: ["atlas1", "atlas2", "atlas3", "atlas4"],
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Firebase Auth",
      "Stripe Integration",
      "TanStack Query",
      "Axios",
      "React Router",
      "Recharts",
      "Framer Motion",
    ],
    ac: "#F43F5E",
    bg: ["#0E0204", "#120204"],
    span: 1,
    info: [
      ["Architecture", "SPA + Modular Routing"],
      ["Access Control", "Role-Based Middleware"],
      ["Product System", "Dynamic Inventory Control"],
      ["Order Engine", "Status Workflow System"],
      ["Payments", "Stripe Secure Gateway"],
      ["Payment History", "Transaction Archive"],
      ["Analytics", "Revenue + User Metrics"],
      ["Profile Panel", "Editable User Settings"],
      ["API Layer", "Axios Structured Calls"],
      ["Status", "Not Live Yet"],
    ],
    status: "Not Live Yet",
    link: "https://atlasmarket-demo.netlify.app/",
  },
  {
    id: "05",
    title: "CoreCart Admin Suite",
    cat: "Enterprise Dashboard · eCommerce Control Panel",
    desc: "High-performance admin-centric commerce platform with advanced role control, review moderation engine, financial analytics dashboard, and secure payment orchestration.",
    gallery: ["core1", "core2", "core3", "core4"],
    tags: [
      "React 19",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "Axios",
      "Recharts",
      "Leaflet Maps",
      "Framer Motion",
    ],
    ac: "#F59E0B",
    bg: ["#0E0800", "#120A00"],
    span: 2,
    info: [
      ["Architecture", "SPA · Dashboard-Focused"],
      ["User Roles", "Admin · Moderator · User"],
      ["Product Control", "Full CRUD System"],
      ["Review Engine", "Approval + Delete Control"],
      ["Order Management", "Lifecycle + History"],
      ["Payment Control", "Stripe + Logs"],
      ["Analytics", "Real-Time Charts"],
      ["State Management", "TanStack Query Cache"],
      ["UI System", "Tailwind + Motion Effects"],
      ["Status", "Not Live Yet"],
    ],
    status: "Not Live Yet",
    link: "https://corecart-demo.netlify.app/",
  },
];
function ProjectsSection() {
  return (
    <section
      id="work"
      className="bg-[var(--ink2)] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-[6%] lg:py-[140px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto mb-12 flex w-full flex-wrap items-end justify-between gap-6 sm:mb-14 md:mb-16">
          <Reveal>
            <span className="sl mb-4 inline-flex">Selected Work</span>

            <h2 className="mt-4 text-[clamp(44px,7vw,96px)] font-[var(--fd)] leading-[0.88] tracking-[-2px] text-[var(--snow)]">
              PROJECT
              <br />
              <span className="gt-aurora">SHOWCASE</span>
            </h2>
          </Reveal>

          <Reveal d={0.15}>
            <div className="text-left sm:text-right">
              <div className="text-[48px] font-[var(--fd)] font-normal leading-none text-[var(--fog)] sm:text-[56px]">
                47
              </div>

              <div className="text-[9px] font-[var(--fm)] tracking-[3px] text-[var(--fog)] sm:text-[10px]">
                TOTAL PROJECTS
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>

        <Reveal d={0.2}>
          <div className="mt-10 text-center sm:mt-12 md:mt-14">
            <a href="#contact" className="btn-outline-px">
              View All 0.0 Projects →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectsSection;
