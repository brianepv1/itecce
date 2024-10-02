export default {
  logo: {
    src: "images/ItecceLogo.png",
    alt: "Itecce Logo",
    srcset: "images/ItecceLogo-p-500.png 500w, images/ItecceLogo-p-800.png 800w, images/ItecceLogo-p-1080.png 1080w, images/ItecceLogo-p-1600.png 1600w, images/ItecceLogo.png 1613w",
    sizes: "129px"
  },
  mobileLogo: {
    src: "images/brand-logo.svg",
    alt: "Brand Logo"
  },
  homeLink: "old-home.html",
  menuItems: [
    { href: "/", text: "Inicio" },
    { href: "/about-us", text: "Nosotros" },
    { href: "/carreras", text: "Carreras" },
    { href: "/blog", text: "Blog" }
  ],
  pagesDropdown: {
    label: "Pages",
    columns: [
      {
        links: [
          { href: "index.html", text: "Home", current: true },
          { href: "about-us.html", text: "About Us" },
          { href: "courses.html", text: "Courses" },
          { href: "https://ocera.webflow.io/course/mastering-the-art-of-blogging", text: "Course Details" },
          { href: "blog.html", text: "Blog" },
          { href: "https://ocera.webflow.io/post/10-essential-skills-every-content-writer-needs", text: "Blog Details" },
          { href: "https://ocera.webflow.io/expert/albert-flores", text: "Expert Details" }
        ]
      },
      {
        links: [
          { href: "contact-us.html", text: "Contact Us" },
          { href: "contact-us.html", text: "Terms & Conditions" },
          { href: "log-in.html", text: "Log In" },
          { href: "sign-up.html", text: "Sign Up" },
          { href: "reset-password.html", text: "Reset Password" },
          { href: "404.html", text: "404" }
        ]
      },
      {
        links: [
          { href: "utilities/style-guides.html", text: "Style Guides" },
          { href: "utilities/licenses.html", text: "Licenses" },
          { href: "utilities/changelog.html", text: "Changelogs" }
        ],
        specialLink: {
          href: "https://webflow.com/templates/designers/flowfye",
          text: "More Webflow Templates",
          class: "navbar-dropdown-item more-templates-link"
        }
      }
    ],
    footer: {
      copyright: "© Made By",
      links: [
        { href: "https://www.flowfye.com", text: "Flowfye", class: "global-link" },
        { href: "https://webflow.com/", text: "Webflow" }
      ],
      socialLinks: [
        { name: "facebook", href: "http://facebook.com" },
        { name: "twitter", href: "http://x.com" },
        { name: "linkedin", href: "http://linkedin.com" },
        { name: "instagram", href: "http://instagram.com" }
      ]
    }
  },
  utilities: {
    search: {
      placeholder: "Search…",
      buttonText: "Search"
    },
    cart: {
      heading: "Your Cart",
      emptyText: "No items found.",
      subtotalText: "Subtotal",
      checkoutButtonText: "Continue to Checkout",
      checkoutLink: "checkout.html"
    },
    loginButton: {
      text: "Log In",
      href: "log-in.html"
    },
    signUpButton: {
      text: "Sign Up",
      href: "sign-up.html"
    }
  }
};
