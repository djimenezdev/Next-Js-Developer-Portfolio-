const userData = {
  githubUsername: 'djimenezdev',
  name: 'Daniel Jimenez',
  designation: 'Full-Stack/Blockchain Dev',
  avatarUrl: '/images/portfolio-img.jpg',
  email: 'daniel@djimenezdev.com',
  phone: '+1 661-544-5098',
  address: 'Lancaster, California',
  projects: [
    {
      route: 'djbuildspace',
      title: 'DJ BuildSpace DAPP',
      link: 'https://djbuildspace-ethcontract.vercel.app/',
      desc: 'This is a special DAPP I built around the Ethereum Smart Contract BuildSpace has a tutorial on. I added my own twist to the contract and the UI I built for this awesome Decentralized App you can interact with😄',
      repo: 'https://github.com/djimenezdev/djbuildspace-ethcontract-ui',
      accomplishments: [
        "Implemented Friendly UI that let's users send a friendly wave on the Rinkeby Testnet",
        'Utilized hardhat to properly develop, debug, test & deploy Smart Contract to the chain',
        'Optimized to load in under a second for a great experience',
        'Developed with React and craco to develop fast and friendly user experience',
      ],
      technologies: [
        'hardhat',
        'solidity',
        'react',
        'typeScript',
        'chakra',
        'formik',
        'framerMotion',
        'reactRouter',
      ],
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_darkConnected.png?alt=media&token=604bd2e4-7760-4ec5-a441-e466f0ff1f92',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_lightConnected.png?alt=media&token=29cba113-d91f-462e-b2e5-b8de902499ac',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_darkEmail.png?alt=media&token=4a672542-44e8-4683-8ae6-fc3157c495bd',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_lightEmail.png?alt=media&token=bd1f00c9-b44f-416c-b110-0e7cdcad2fb0',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_darkNotConnected.png?alt=media&token=a8906a37-4323-46f4-901b-7c4c258b30ac',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djbuildspace_lightNotConnected.png?alt=media&token=92e125d6-4b21-48a8-bd9e-5a013f6e8b92',
      ],
      type: 'web',
    },
    {
      route: 'djnft',
      title: 'DJ NFT',
      link: 'https://dj-nft-vite.netlify.app/',
      desc: 'A unique dapp that allows you to mint the DJNFT. I learned about a lot of core concept of Smart Contracts and how you can use layer 3 tools like Web3js, moralis, etc to create user friendly front ends to interact with layer 1/2 protocals such as Ethereum',
      repo: 'https://github.com/djimenezdev/dj-nft-vite',
      accomplishments: [
        'Created an NFT minting site exploring the world of Web 3.0',
        'Implemented Moralis for proper wallet authentication and communication with web3js',
        'Utilized remix to create my unique ERC1155 smart contract that contains the NFT',
      ],

      technologies: [
        'vite',
        'react',
        'moralis',
        'oz',
        'hardhat',
        'solidity',
        'remix',
      ],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djnft_notConnected.png?alt=media&token=22168af4-cc72-4eb9-b499-507bd9e299ed',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djnft_walletConnected.png?alt=media&token=3173040b-e7a9-475e-ba65-a7fa69a30333',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djnft_transaction.png?alt=media&token=c991b18c-fd35-40db-ae49-0de039a6649c',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/djnft_congrats.png?alt=media&token=4c2748bc-cc14-4db3-9ebe-b50f30545078',
      ],
    },
    {
      route: 'osclone',
      title: 'Opensea Market Clone',
      link: 'https://os-market-clone.vercel.app/',
      desc: 'A special clone of the amazing NFT Marketplace Opensea I built with CleverProgrammer exploring the world of web 3.0. Showcasing the power of ThirdWeb and so much more.',
      repo: 'https://github.com/djimenezdev/opensea-blockchain-app',
      accomplishments: [
        'Learned how to configure a proper marketplace to share unique NFTs with the world',
        'Configured Marketplace Ethers JS to interact with 3rdweb project Smart Contract',
        'Introduced Sanity.io for powerful, fast and easy to use DB for DAPP Info',
      ],
      technologies: ['react', 'sanityio', 'thirdweb', 'tailwind', 'ethers'],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/osClone_home.png?alt=media&token=8dcfd8a4-e44d-4aa7-9c5e-7633d731aabe',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/osClone_connectWallet.png?alt=media&token=8c2b9a45-17c2-4ddb-963c-0c8ee2ad06e4',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/osClone_collection.png?alt=media&token=a975ea96-9dbe-4721-b385-d610744e985b',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/osClone_available.png?alt=media&token=0122cf9f-e91e-4ffd-b8b9-915d448f1db8',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/osClone_notAvailable.png?alt=media&token=3ed7e075-7a49-48c2-a590-36068fc2b26e',
      ],
    },
    {
      route: 'cbclone',
      title: 'DJ Coinbase Clone',
      link: 'https://dj-coinbase-clone.vercel.app/',
      desc: 'An awesome clone of the cryptocurrency focused DAPP called Coinbase. I built this clone to reinforce the concepts I have been learning about web 3.0. Learning how you can interact on the chain, create your coins on the chain, how you can share those & so many other powerful features.',
      repo: 'https://github.com/djimenezdev/coinbase-blockchain-app-clone',
      accomplishments: [
        'Constructed Clone diving into Thirdweb allowing to send custom created Tokens',
        'Utilized ThirdWeb to configure Token modules and used Sanity.io to store token information',
        'Used styled components to easily style application sticking to component workflow',
        'Implemented chartjs to add powerful visualizations regarding tokens/wallet balance',
      ],
      technologies: ['nextJS', 'thirdweb', 'sanityio', 'ethers'],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cbClone_home.png?alt=media&token=ad50fe96-7612-4cc1-996b-5d19dbd95da4',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cb_connect.png?alt=media&token=f35dcd83-69ec-4f1f-b29f-b7705e71a710',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cbClone_send.png?alt=media&token=9259cd9c-67ec-4369-a83a-6dee3c8e1505',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cbClone_select.png?alt=media&token=0bec94db-b2c1-4a2d-8077-bc49e85bd4d7',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cbClone_receive.png?alt=media&token=17f64043-e7a1-496f-88f1-d1adc504d73e',
      ],
    },
    {
      route: 'cryptotracker',
      title: 'CryptoTracker',
      link: 'https://expo.dev/@djimenez0255/CryptoApp',
      desc: 'This is an unique mobile App I built for an upcoming startup it was a fun build. I developed with React Native as the main infrastructure for the mobile app, utilized firebase auth for authentication, firebase firestore for storage, redux for state management & so much more. ',
      repo: 'https://github.com/djimenezdev/Crypto-Tracker-React-Native-App-',
      accomplishments: [
        'Configured React Redux to reduce state management complexities for an easier to manage and more efficient app',
        'Took advantage of react-navigation to implement multiple screens',
        'Used core features of Expo to bring the functionalities of the app all together',
      ],
      technologies: ['react', 'expo', 'redux', 'firebase', 'reactNavigation'],
      type: 'mobile',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cryptoTracker-thumbnail.jpg?alt=media&token=108e9d32-2114-4179-8471-3c258962765b',
      ],
    },
    {
      route: 'mdshomes',
      title: 'MDS Homes Website',
      link: 'https://www.marlontherealtor.com/',
      desc: 'Here is a unique project I built for a client of mine and had fun working with him building this for his brand in the market of Real Estate! And still work with him to this day updating the site it will always be a favorite of mine. NextJs is the core framework I used to ensure users have a fast and enjoyable experience ',
      repo: 'https://github.com/djimenezdev/MDS-Homes-Realtor-Web-page',
      accomplishments: [
        'Developed Real Estate website using NextJS  to help users find and sell homes',
        'Created visualization charts to help breakdown estimates on homes using React Charts library',
        'Increase revenue and customers for the business by build a user friendly UI',
        'Decreased site load time by 100%, to increase user retention',
        'Increase user exposure, by optimizing website SEO',
      ],
      technologies: [
        'nextJS',
        'bootstrap',
        'formik',
        'firebase',
        'mailChimp',
        'fontAwesome',
        'nodeMailer',
      ],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/mds-website.png?alt=media&token=a1fcb5fd-32cf-4189-8b72-4ffba5093ecd',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/mdshomes_listings.png?alt=media&token=59268ee5-00d8-485e-94c3-c3a799cae1fa',
      ],
    },
    {
      route: 'risingcrytals',
      title: 'Rising Crytals',
      link: 'https://www.lorinamarie.com',
      desc: 'A very unique site I built for another great client! Site is based around the concept of healing crystals and these crystals can you help you achieve a calming state. And they even do tarot readings! Considering even checking out the products myself. Another fun project:)',
      repo: 'none',
      accomplishments: [
        'Created healing website  using WordPress to help people on their healing journey',
        'Store setup for the healing products managed easily via WooCommerce Plugin',
        'Highly enhanced SEO ensuring users get proper info about their healing process',
        'Mobile Ready and quick load time with user friendly UI for great user experience',
      ],
      technologies: ['wp', 'woo', 'stripe', 'elementor'],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/risingcrystals_shop.png?alt=media&token=f1d3c905-c5d8-4ba4-a560-9b6ac7662573',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/risingcrystals_about.png?alt=media&token=47caee3e-8a96-4b0d-9ba0-73ad00d381d0',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/risingcrystals_contact.png?alt=media&token=732ad63e-101f-4ac3-bf85-ba260a512e73',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/risingcrystals_info.png?alt=media&token=cb170ebb-1473-442b-afa7-25bbf72c714a',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/risingcrystals_tarot.png?alt=media&token=6bd7c6a9-678f-4d5c-8815-180a00e638cf',
      ],
    },
    {
      route: 'airbnbclone',
      title: 'Airbnb Clone ',
      link: 'https://dj-airbnb-clone.vercel.app/',
      desc: 'A beautiful rendition of the Airbnb website. This project reinforced a lot development concepts challenging myself to not only build the site but to add my own touch to it',
      repo: 'https://github.com/djimenezdev/airbnb-clone-with-nextjs',
      accomplishments: [
        'Implement SSR based infrastructure with NextJS for high level performance',
        'Utilization of Mapbox for users to easily view locations of places to stay',
        'Instituted variety of sign in options for accessibility and quicker sign up/in',
        'Used Recoil for more efficient state management',
      ],
      technologies: [
        'nextJS',
        'tailwind',
        'fontAwesome',
        'stripe',
        'nextAuth',
        'recoil',
        'nodeMailer',
        'twilio',
        'mapBox',
        'mongoDB',
      ],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/airbnb-clone.jpg?alt=media&token=bfdd8c48-0fbe-4137-90aa-06e6a5edb0ec',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/airbnb_experiences.png?alt=media&token=c60bb8d2-512d-4ed2-a85a-5cdc4aa8f064',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/airbnb_auth.png?alt=media&token=1d073cf4-09d7-4ac5-9786-cad52ade547d',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/airbnb_search.png?alt=media&token=fd669ac9-2584-4699-8392-aed673741117',
      ],
    },
    {
      route: 'uberclone',
      title: 'Uber Clone',
      link: 'https://expo.io/@djimenez0255/projects/uberClone',
      desc: 'Web development is where it begun for me and has been a fun journey but I got curious with mobile app development and took a dive into React Native. Soon building this awesome clone of Uber. Building out the interface and setting up the logic to determine things like the cost based on distance and uber type was so much fun putting together. Definitely recommend checking out.',
      repo: 'https://github.com/djimenezdev/uber-clone',
      accomplishments: [
        'Configured Expo Location to save places for easy access for users',
        'Implemented RN Maps to easily display directions to user',
        'Developed individual screens with React Navigation',
      ],
      technologies: [
        'react',
        'reactNavigation',
        'redux',
        'expo',
        'tailwind',
        'google',
      ],
      type: 'mobile',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/uber-clone.jpg?alt=media&token=26f25114-ace0-4a3a-8911-3da50cafb19b',
      ],
    },
    {
      route: 'amazonclone',
      title: 'Amazon Clone',
      link: 'https://clone-stripe.web.app/',
      desc: 'Another absolutely fun project I built with Sonny Sangha who is an awesome developer. This project taught me the core principles of React and I got to build something so cool. Definitely worth a look:)',
      repo: 'https://github.com/djimenezdev/Amazon-Clone-Main',
      accomplishments: [
        'Learned about the core principles of React',
        'Added powerful animations for unique user experience',
        'Used react router dom to implement proper pages for clone',
        'Utilized stripe for payment based functionalities',
      ],
      technologies: [
        'materialui',
        'react',
        'stripe',
        'bootstrap',
        'firebase',
        'reactRouter',
      ],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/amazon-clone.jpg?alt=media&token=c7a48761-fe3a-4ccb-adcd-0c438ddeda1f',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/amazonclone_auth.png?alt=media&token=04b84acd-1633-410f-94ab-2ce1fb4edd28',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/amazonclone_cart.png?alt=media&token=87e6ae31-de61-4413-be3a-deeaf5903d56',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/amazonclone_checkout.png?alt=media&token=685aa966-0f8e-4d20-b5fb-e7330c020c6a',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/amazonclone_order.png?alt=media&token=81c69ad9-656a-4157-a5d1-27b33fcfaae9',
      ],
    },
    {
      route: 'netflixclone',
      title: 'Netflix Clone',
      link: 'https://netflix-challenge-clone.web.app/',
      desc: 'Another Awesome clone that was fun to build. Learning more about powerful tools such as Redux to make state management so much more efficient + more.',
      repo: 'https://github.com/djimenezdev/netflix-challenge-build/tree/master/src',
      accomplishments: [
        'Learned more about the powerful features of the React JS Framework',
        'Configured react to create a beautiful and blazing fast frontend',
        'Properly configured frontend for a 0.6ms load time',
      ],
      technologies: ['react', 'redux', 'reactRouter', 'firebase', 'stripe'],
      type: 'web',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/netflixClone_home.png?alt=media&token=f85b8d9c-6819-4108-a121-ea8e1e7684f0',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/netflix-clone.jpg?alt=media&token=1351c2af-94a1-47bc-9378-9af4da1f2ce2',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/netflixClone_plan.png?alt=media&token=29f55281-7169-4858-b44c-1bdb8a2c3de5',
      ],
    },

    {
      route: 'signalclone',
      title: 'Signal Clone',
      link: 'https://expo.dev/@djimenez0255/signal-clone',
      desc: 'This React Native project is a special one. Signal is an awesome messaging app and was exciting to build a cool clone of it with React Native.',
      repo: 'https://github.com/djimenezdev/React-Native-Signal-Clone',
      accomplishments: [
        "Stored messages in firebase so users won't lose their messages",
        'Implemented expo splash screen to display loading screen for character',
        'Utilized react native elements to create beautiful UI',
      ],
      technologies: ['react', 'reactNavigation', 'firebase', 'expo'],
      type: 'mobile',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/Signal-Clone-Thumbnail.jpg?alt=media&token=93c90dac-63af-4f3a-bde0-afef81e51aa3',
      ],
    },
  ],
  about: {
    title: [
      "I'm a ",
      ' California Based Full Stack/Blockchain developer & tutor',
      ' that loves building web applications and mobile apps that bring great value to others.',
      ' Always love to take on a challenge!',
    ],
    description: [
      `Technology has always been a part of my genes. `,
      `At the age of 15 is when web development in particular clicked with me. I loved being able to type up some html, css & js  to put together amazing websites. But it wasn't until Rafeh Qazi, the founded of Clever Programmer, introduced me into Full Stack Development. From there I was hooked!`,
      `I have been blessed to be one of his success coaches for his program Profit with JavaScript being able to learn from amazing developers and being able to teach that to the amazing students. And I have been able to do so much more to continue my journey as a Full Stack Developer.`,
      `Taking the skills I've learned as a Full Stack Development, I made the transition into web 3.0 and have had no regrets! This evolution of the internet has provided a new, unique and powerful way to communicate digitally with these powerful blockchains. There is so much to explore and I am so excited to explore more and share that with others!`,
      `I went from just knowing the bare bone basics to building high level applications. I'm excited to bring my knowledge and experience where I go next on my journey:)`,
    ],
  },
  experience: [
    {
      title: 'Blockchain Developer',
      company: 'NFT CHEESE Tools',
      logo: 'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/nftcheese_logo.png?alt=media&token=d6838d66-781d-4b7f-8473-7a137b0c37c7',
      year: '2022',
      companyLink: 'https://www.nftcheese.tools/',
      desc: 'Super excited to be apart of NFT Cheese it is a very promising project around the world of web 3.0. It is also a pleasure being apart of a group of amazing creators with extensive backgrounds such as at Netflix. Building a chrome extension to get all the info you want about NFts and how to get the edge on getting your hands on that special NFT. I highly recommend checking it out',
    },
    {
      title: 'Freelancer',
      company: 'DJimenezDev',
      logo: [
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/portfolio%20dark%20mode.png?alt=media&token=6747c077-0bd0-499b-8d35-a29f7ad56bb7',
        'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/portfolio%20light%20mode.png?alt=media&token=58879938-23c0-45b9-a18b-6c3dc1522971',
      ],
      year: '2021-Present',
      companyLink: 'https://www.djimenezdev.com',
      desc: 'Also do freelancing work helping my clients build the dream site for their brand using the skills I have developed. I not only get excited to build the project, I get true joy when my clients are happy with the completed work and helps their business grow, not just mine.',
    },

    {
      title: 'Full Stack Development Tutor',
      company: 'Wyzant Inc',
      logo: 'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/wyzant-logo.png?alt=media&token=eeca40a4-364d-4ea2-ae7f-7d81cecacd5c',
      year: '2020-Present',
      companyLink: 'https://www.wyzant.com/',
      desc: 'I get into one on one calls with students to discuss their development roadblocks and help them find the solutions to those roadblocks. Working as a Success Coach propelled me so well into tutoring I love exploring this passion with others ensuring for the best experience for my students.',
    },
    {
      title: 'Success Coach',
      company: 'Clever Programmer',
      logo: 'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/cp_logo.png?alt=media&token=0668f53a-c9fe-4166-bf36-39ef34d6a0bf',
      year: '2020-2021',
      companyLink: 'https://www.cleverprogrammer.com/',
      desc: 'Worked with many amazing developers teaching the fundamentals of full stack development to over 2000 students in creative ways. My development skills leveled up working as a Success Coach I had an absolute great time working with a diverse group just learning from some of the best.',
    },
    {
      title: 'HIP Intern',
      company: 'Northrop Grumman',
      logo: 'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/northrop_logo.webp?alt=media&token=dcaed0e5-6cfd-4a2a-a47a-187ecd839c1b',
      year: '2019-2020',
      companyLink: 'https://www.northropgrumman.com/',
      desc: "Participated in monthly webinars learning more about different types of engineering and the processes of those types of engineering.Went to Northrop Once to Observe what we have learned in the webinars and more. It was a great program to be apart of and propelled me into the direction of development I'm passionate about.",
    },
    {
      title: 'I.T. Intern',
      company: 'The Palmdale Aerospace Academy',
      logo: 'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/tpaa_logo.png?alt=media&token=9a800211-5148-4e14-aab1-461eaf236072',
      year: '2019',
      companyLink: 'https://www.tpaa.org/#',
      desc: 'Although not web development. I learned a lot of valuable information in the tech field and was a big jump start in my career as a developer',
    },
  ],
  resumeUrl:
    'https://drive.google.com/file/d/1XC1-Y_7lwSRFJ3mQd_jUWZdP0mgUnknF/view',
  socialLinks: {
    instagram: 'https://instagram.com/djimenezdev',
    twitter: 'https://twitter.com/djimenezdev',
    linkedin: 'https://www.linkedin.com/in/daniel-jimenez-479b961a9/',
    github: 'https://github.com/djimenezdev',
    facebook: 'https://www.facebook.com/djimenezdev',
  },
  techStack: {
    hardhat:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/hardhat-logo.5c5f687b.png?alt=media&token=42b5c679-2a18-43f8-8292-1c7082f4578a',
    thirdweb: 'https://avatars.githubusercontent.com/u/79496167?s=200&v=4',
    moralis: 'https://avatars.githubusercontent.com/u/80474746?s=200&v=4',
    solidity:
      'https://raw.githubusercontent.com/github/explore/ba9de12f88fd08825c51928e91f1678cb5c94b26/topics/solidity/solidity.png',
    remix:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/remix-ide.png?alt=media&token=8c69c88a-21ae-42f0-ac94-ac99a7ac04dd',
    ethers:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/ethers.png?alt=media&token=e4ce47fe-d1c9-4680-ad1b-e578d500af94',
    oz: 'https://avatars.githubusercontent.com/u/20820676?s=200&v=4',
    html: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
    css: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
    bootstrap: 'https://avatars.githubusercontent.com/u/2918581?s=200&v=4',
    tailwind: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4',
    chakra: 'https://avatars.githubusercontent.com/u/54212428?s=200&v=4',
    git: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
    javaScript:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
    typeScript:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
    node: 'https://avatars.githubusercontent.com/u/9950313?s=200&v=4',
    react:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    expo: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4',
    reactNavigation:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/react-navigation.png?alt=media&token=bce20e8a-64fb-4d71-9b3c-1028dd59b6b6',
    reactRouter:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/react-router.png?alt=media&token=ce9a7665-4994-4deb-99c1-cc16ad3e9b0f',
    formik:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/formik-img.png?alt=media&token=f3f33b2f-70e1-4ea9-9462-c26fb758640e',
    nextJS:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/nextJS-logo.png?alt=media&token=d3edf8d6-f24d-46fe-847e-bf22a79a2d23',
    nextAuth: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
    redux: 'https://avatars.githubusercontent.com/u/13142323?s=200&v=4',
    recoil:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/recoil.png?alt=media&token=84eaa80c-85e8-4226-9198-7be2ddcf5a7a',
    framerMotion:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/framer-motion.png?alt=media&token=fc7d02cc-7fff-4553-accf-04fb2ed76fd1',
    fontAwesome: 'square-font-awesome',
    firebase:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
    sanityio: 'https://avatars.githubusercontent.com/u/17177659?s=200&v=4',
    mongoDB:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
    story:
      'https://firebasestorage.googleapis.com/v0/b/djimenezdev-portfolio-backend.appspot.com/o/story-logo.png?alt=media&token=f0b2ef18-9b4d-47ae-865c-571f3f8578cb',
    wp: 'https://avatars.githubusercontent.com/u/276006?s=200&v=4',
    woo: 'https://avatars.githubusercontent.com/u/473596?s=200&v=4',
    vite: 'https://avatars.githubusercontent.com/u/65625612?s=200&v=4',
    elementor: 'elementor',
    stripe: 'https://avatars.githubusercontent.com/u/856813?s=200&v=4',
    mailChimp: 'mailchimp',
    nodeMailer: 'https://avatars.githubusercontent.com/u/16486629?s=200&v=4',
    twilio: 'https://avatars.githubusercontent.com/u/109142?s=200&v=4',
    mapBox: 'https://avatars.githubusercontent.com/u/600935?s=200&v=4',
    google: 'google',
    materialui: 'https://avatars.githubusercontent.com/u/33663932?s=200&v=4',
  },
};

export default userData;

export const svgPaths = {
  arrowDown:
    'M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z',
};

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const iconColors = {
  fontAwesome: '#558FD7',
  elementor: '#E20247',
  mailChimp: '#FFE101',
  google: '#32A752',
};
