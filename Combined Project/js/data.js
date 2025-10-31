let fakeTopics = JSON.parse(localStorage.getItem('topics')) || [
    {
        id: 1,
        title: "Software Issues",
        description: "Report bugs and issues related to software problems.",
        category: "Technical",
        postCount: 1,
        lastActivity: "2025-12-12"
    },

    {
        id: 2,
        title: "Printing and Supplies",
        description: "How to order printing paper and office supplies.",
        category: "Non-Technical",
        postCount: 1,
        lastActivity: "2025-31-10"
    }
]


let fakePosts = JSON.parse(localStorage.getItem('posts')) || [
   {
        id: 1,
        topicId: 1,
        title: "Cannot login to the system",
        content: "When trying to log in, I get an 'Authentication Failed' error. Has anyone else experienced this?",
        author: "Bob",
        createdAt: "2025-10-25 09:30"
    },
    {
        id: 2,
        topicId: 1,
        title: "Solution: Clear browser cache",
        content: "I had the same issue. Clear your browser cache and cookies, then restart your browser.",
        author: "Michael",
        createdAt: "2025-10-26 14:15"
    },
    
];

