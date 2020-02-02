export function randomViewAllText (num) {
  return Math.floor(Math.random() * (num - 1 + 1) + 1)
}

export const spotlights = [
  {
    isLarge: true,
    heading: 'Introducing LEAP 2x',
    subheading: 'Major Update',
    text: 'LEAP 2x is one of the most innovative updates our software has seen.',
    url: 'sample1.jpg'
  },
  {
    isLarge: true,
    heading: 'Ideas Hub',
    subheading: 'Feature',
    text: 'Share your ideas and suggest feedback on new features.',
    url: 'sample2.jpg'
  },
  {
    isLarge: true,
    heading: 'ByLawyers 2.0',
    subheading: 'What\'s New',
    text: 'See new ByLawyers features',
    url: 'sample3.jpg'
  }
]

export const trending = [
  {
    isLarge: true,
    heading: 'Getting Started',
    subheading: 'Installing and Setup',
    text: 'Your LEAP software has been designed to work on Windows-based workstations in simple home or office networks.'
  },
  {
    isLarge: true,
    heading: 'Importing a document to a matter',
    subheading: 'Matter Management',
    text: 'We recommend that before archiving a matter, you should finalise all balances and transactions'
  },
  {
    isLarge: true,
    heading: 'Creating a New Matter',
    subheading: 'Matter Management',
    text: 'Make sure that the information you enter is accurate because it will auto-populate into all letters, forms and precedents created in the matter'
  },
  {
    isLarge: true,
    heading: 'Creating a Supplier Card',
    subheading: 'Card Management',
    text: 'You create a supplier card just as you would for a person or an organisation'
  }
]

export const sideTrending = [
  {
    isLarge: false,
    heading: 'Getting Started',
    subheading: 'Installing and Setup'
  },
  {
    isLarge: false,
    heading: 'Importing a document to a matter',
    subheading: 'Matter Management'
  },
  {
    isLarge: false,
    heading: 'Creating a New Matter',
    subheading: 'Matter Management'
  },
  {
    isLarge: false,
    heading: 'Creating a Supplier Card',
    subheading: 'Card Management'
  }
]

export const companions = [
  {
    article_item: {
      isLarge: true,
      heading: 'By Lawyers'
      // text: 'Australia’s leading library of practical legal guides, written by lawyers, for lawyers.'
    },
    article_list: [
      {
        isLarge: false,
        heading: 'Tips and Tricks for Working with By Lawyers Precedents',
        text: 'If any of the tips or tricks below provide insufficient assistance, then please do not.'
      },
      {
        isLarge: false,
        heading: 'Ask a Question in Mentor',
        text: 'Asking a question on Mentor is very straightforward. The quality of the Mentor interaction is reflected in its intuitive design.'
      },
      {
        isLarge: false,
        heading: 'Retainer Instructions',
        text: 'When it comes to claims against solicitors, the rule of thumb is, Good instructions = Good defence'
      },
      {
        isLarge: false,
        heading: 'Creating a PDF of the By Lawyers Contract for Sale',
        text: 'The days of printing, compiling and posting, or delivering, numerous contracts to agents are gone.'
      }
    ]
  },
  {
    article_item: {
      isLarge: true,
      heading: 'Info Track'
      // text: 'Searches order directly from the matter within LEAP.'
    },
    article_list: [
    ]
  },
  {
    article_item: {
      isLarge: true,
      heading: 'RapidPay'
      // text: 'A smarter way for law firms to get paid.'
    },
    article_list: [
    ]
  },
  {
    article_item: {
      isLarge: true,
      heading: 'LawConnect'
      // text: 'Secure document management system for law firms and their clients'
    },
    article_list: [
    ]
  }
]

export const sidebarTopics = {
  heading: 'Main Topics',
  topics: [
    { text: 'What\'s New' },
    { text: 'Installing & Setting Up' },
    { text: 'Cards' },
    { text: 'Calendar & Tasks' },
    { text: 'Time & Fee Recording' },
    { text: 'Guides & Precedences' },
    { text: 'Office Accounting' },
    { text: 'Trust Accounting' },
    { text: 'Reports & Dashboards' }
  ]
}

export const topicCatalog = [
  {
    name: 'What\'s New',
    topics: [{ text: 'Latest Release' }, { text: 'Previous Releases' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Installing & Setting Up',
    topics: [{ text: 'Getting Started' }, { text: 'Installing LEAP' }, { text: 'Installing LEAP Conveyancer' }, { text: 'General Admin Tasks' }, { text: 'Accounting Admin Tasks' }, { text: 'Managing Your Staff' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Matter Management',
    topics: [{ text: 'Creating a New Matter' }, { text: 'Duplicating a Matter' }, { text: 'Sorting Matters' }, { text: 'Customising a Matter' }, { text: 'Recurring Matters' }, { text: 'Archiving Matters' }, { text: 'Restricting Staff Access to a Matter' }, { text: 'Deleting a Matter' }, { text: 'Cost Estimates' }, { text: 'Document Register & Packet' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Card Management',
    topics: [{ text: 'Creating Cards' }, { text: 'Card Tabs' }, { text: 'Search, Sort & Filter Cards' }, { text: 'Merge Cards' }, { text: 'Deleting a Card' }, { text: 'Conflict of Interest Check' }, { text: 'People topics' }, { text: 'Referrers' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Guides & Precedents',
    topics: [{ text: 'Guides - By Lawyers' }, { text: 'Precedents' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Office Accounting',
    topics: [{ text: 'GL Link' }, { text: 'Invoicing' }, { text: 'Deposits/Cheques' }, { text: 'Office Payments' }, { text: 'Office Receipts' }, { text: 'Credit Notes' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Calendar & Tasks',
    topics: [{ text: 'Calendar Appointments' }, { text: 'Critical Dates' }, { text: 'Tasks' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  },
  {
    name: 'Reports & Dashboards',
    topics: [{ text: 'Matters & Clients' }, { text: 'Trust' }, { text: 'Office' }, { text: 'Management' }, { text: 'Dashboards' }],
    viewall_count: `View all ${randomViewAllText(60)} articles`
  }
]

export const topicArticles = [
  {
    heading: 'Setting Up Your General Ledger to Automatically Export Journals',
    metadata: ['Caroline Winter', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Charging Interest on Overdue Invoices',
    metadata: ['Rosalie Strong', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Setting the Invoice Term and Interest Rate',
    metadata: ['Cassie Gross', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Entering Your Credentials to Use LEAP Integrations',
    metadata: ['Jordanna Sparks', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Enabling Auto Numbering for Your Documents',
    metadata: ['Marcia Lindsay', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual',
    metadata: ['Forrest Valenzuela', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Changing Your Password',
    metadata: ['Tom Sweet', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Auto Completion of the Text for LEAP Transactions',
    metadata: ['Maximillian Cassidy', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Installing LEAP on a New Computer',
    metadata: ['Nola Rocha', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Installing LEAP Conveyancer on a New Computer',
    metadata: ['Walter Butler', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Adding LEAP to Your Antivirus Exceptions List',
    metadata: ['Jesus Ortega', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  },
  {
    heading: 'Updating LEAP',
    metadata: ['Everly Beard', 'May 2017 at 12:17 AM'],
    activity_count: {
      views: randomViewAllText(500),
      likes: randomViewAllText(100),
      comments: randomViewAllText(15)
    }
  }
]

export const sidebarTopicsSubtopic = {
  heading: 'Main Topics',
  topics: [
    { text: 'What\'s New' },
    { text: 'Installing & Setting Up', topics: [{ text: 'Getting Started' }, { text: 'Installing LEAP' }, { text: 'Installing LEAP Conveyancer' }, { text: 'General Admin Tasks' }, { text: 'Accounting Admin Tasks' }, { text: 'Managing Your Staff' }] },
    { text: 'Cards' },
    { text: 'Calendar & Tasks' },
    { text: 'Time & Fee Recording' },
    { text: 'Guides & Precedences' },
    { text: 'Office Accounting' },
    { text: 'Trust Accounting' },
    { text: 'Reports & Dashboards' }
  ]
}
