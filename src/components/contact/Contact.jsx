import React from 'react';

const Contact = () => {
    const WhatsAppIcon = () => (
  <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.78 11.78 0 0012.04 0C5.5 0 .23 5.28.23 11.8c0 2.08.54 4.1 1.58 5.88L0 24l6.5-1.7a11.8 11.8 0 005.54 1.4h.01c6.53 0 11.8-5.28 11.8-11.8 0-3.15-1.23-6.11-3.33-8.22z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5C4.98 5 3.8 6.2 2.3 6.2S-.38 5  -.38 3.5  .8.8 2.3.8s2.68 1.2 2.68 2.7zM.5 8.4h3.6V24H.5zM8.2 8.4h3.4v2.1h.05c.48-.9 1.67-1.85 3.45-1.85 3.7 0 4.4 2.4 4.4 5.6V24h-3.6v-8.1c0-1.9-.04-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24H8.2z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.7v-2.9h2.7V9.4c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.7h-1.3c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 6.2A3.8 3.8 0 1112 16a3.8 3.8 0 010-7.8zm4.5-.9a1 1 0 110-2 1 1 0 010 2z"/>
  </svg>
);

const GmailIcon = () => (
  <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 13.1L2 6.6V18h4v-6l6 4 6-4v6h4V6.6l-10 6.5z"/>
  </svg>
);
    return (
       <section
  id="contact"
  className="relative py-32 px-[6%] bg-[#0c0c0f] overflow-hidden"
>
  
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

  <div className="relative max-w-[1200px] mx-auto">
    
    <div className="text-center mb-20">
      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
        Contact
      </p>
      <h2 className="text-4xl md:text-6xl font-semibold text-white mt-4">
        Let’s Build Something
        <span className="block text-neutral-500">Exceptional</span>
      </h2>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          name: "WhatsApp",
          link: "https://wa.me/YOUR_NUMBER",
          color: "hover:border-green-500/60 hover:shadow-green-500/20",
          icon: <WhatsAppIcon />
        },
        {
          name: "LinkedIn",
          link: "https://linkedin.com/in/YOUR_PROFILE",
          color: "hover:border-blue-600/60 hover:shadow-blue-600/20",
          icon: <LinkedInIcon />
        },
        {
          name: "Instagram",
          link: "https://instagram.com/YOUR_PROFILE",
          color: "hover:border-pink-500/60 hover:shadow-pink-500/20",
          icon: <InstagramIcon />
        },
        {
          name: "Facebook",
          link: "https://facebook.com/YOUR_PROFILE",
          color: "hover:border-blue-500/60 hover:shadow-blue-500/20",
          icon: <FacebookIcon />
        },
        {
          name: "Gmail",
          link: "mailto:your@email.com",
          color: "hover:border-red-500/60 hover:shadow-red-500/20",
          icon: <GmailIcon />
        }
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative backdrop-blur-xl bg-white/5 border border-white/10
          p-10 rounded-2xl transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl ${item.color}`}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            {item.icon}
          </div>

          <h3 className="text-white text-lg font-medium mt-8 tracking-wide">
            {item.name}
          </h3>

          <div className="mt-3 h-[1px] w-10 bg-white/20 group-hover:w-20 transition-all duration-500" />
        </a>
      ))}

    </div>
  </div>
</section>
    );
};

export default Contact;
