export default {
  logo: {
    src: "images/ItecceLogo.png",
    alt: "Itecce Logo",
    srcset: "images/ItecceLogo-p-500.png 500w, images/ItecceLogo-p-800.png 800w, images/ItecceLogo-p-1080.png 1080w, images/ItecceLogo-p-1600.png 1600w, images/ItecceLogo.png 1613w",
    sizes: "129px",
		href: '/'
  },
  mobileLogo: {
    src: "images/brand-logo.svg",
    alt: "Brand Logo"
  },
  homeLink: "old-home.html",
  menuItems: [
    { href: "/", text: "Inicio" },
    { href: "/acerca-de", text: "Nosotros" },
    { href: "/carreras", text: "Carreras" },
  ],
  pagesDropdown: {
    label: "Reglamentos",
    columns: [
      {
        links: [
          { href: "https://www.universidaditecce.mx/_files/ugd/66e106_97a64edc941443e48df504889138da31.pdf", text: "Escolar Media Superior", current: true },
          { href: "https://www.universidaditecce.mx/_files/ugd/66e106_38b5d50d99db4a20a5dfa0161bd8b5c9.pdf", text: "Escolar Educación Superior" },
          { href: "https://drive.google.com/file/d/1FSGtdhx9Yt3k_YdpfBgzEB4bB8FPkW6B/view", text: "Biblioteca" },
          { href: "https://drive.google.com/file/d/1XjabC-mU2S_03m9AALkGIIVbk6dZ71T2/view", text: "Centro de Cómputo" },
          { href: "https://drive.google.com/file/d/14aUW4xMn6x41ppUutAZk0Nyt1WuTPNmv/view", text: "Finanzas" },
        ]
      },
    ],
    footer: {
      copyright: "",
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
	portalDropdown: {
		label: "Portales",
		columns: [
			{
				links: [
					{ href: "https://elibro.net/es/lc/itecce/login_usuario/?next=/es/lc/itecce/inicio/", text: "Biblioteca Virtual" },
					{ href: "https://c1-universidaditecce.algebraix.com/bin/g/start/default/?x_load=0", text: "Algebraix" },
				]
			}
		]
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
