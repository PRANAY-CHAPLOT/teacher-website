
import { Paper, Course, BlogPost, Certification, SearchResult } from '../types';

export const PAPERS: Paper[] = [
  {
    id: '2025-1',
    title: 'Single-View Depth Estimation: Advancing 3D Scene Interpretation With One Lens',
    year: 2025,
    journal: 'IEEE Access',
    abstract: 'Advancing 3D scene interpretation utilizing single-view depth estimation techniques to enhance computer vision capabilities.',
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10854440'
  },
  {
    id: '2025-2',
    title: 'Physiological signal-based mental stress detection using hybrid deep learning models',
    year: 2025,
    journal: 'Discover Artificial Intelligence',
    abstract: 'A study on detecting mental stress through physiological signals using advanced hybrid deep learning architectures.',
    link: 'https://link.springer.com/article/10.1007/s44163-025-00412-8'
  },
  {
    id: '2025-3',
    title: 'Unmasking the Strategists: An Intent-Driven Multi-Agent Framework for Analyzing Manipulation in Courtroom Dialogues',
    year: 2025,
    conference: 'Proceedings of the Third Workshop on Social Influence in Conversations',
    abstract: 'An intent-driven multi-agent framework designed to analyze and detect manipulation strategies within courtroom dialogues.',
    link: 'https://aclanthology.org/2025.sicon-1.8/'
  },
  {
    id: '2025-4',
    title: 'Food image classifier using deep learning models',
    year: 2025,
    conference: 'Intelligent Computing and Communication Techniques',
    abstract: 'Development of a robust food image classifier leveraging state-of-the-art deep learning models.',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003635680-7/food-image-classifier-using-deep-learning-models-mansa-dixit-neelam-chaplot'
  },
  {
    id: '2025-5',
    title: 'Unveiling Insights: Analyzing Machine and Deep Learning Models on Electronic Health Record Data',
    year: 2025,
    conference: 'International Conference On Innovative Computing And Communication (ICICC)',
    abstract: 'A comparative analysis of machine and deep learning models applied to Electronic Health Record (EHR) data for medical insights.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-7523-4_11'
  },
  {
    id: '2024-1',
    title: 'Emoji support predictive mental health assessment using machine learning: unveiling personalized intervention avenues',
    year: 2024,
    journal: 'International Academic Publishing House',
    abstract: 'Exploring personalized mental health interventions through predictive assessment using machine learning and emoji support.',
    link: 'https://www.academia.edu/download/117888678/Emoji_Support_Predictive_Mental_Health_Assessment_Using_Machine.pdf'
  },
  {
    id: '1',
    title: 'A Comprehensive Analysis of Artificial Intelligence Techniques for the Prediction and Prognosis of Genetic Disorders Using Various Gene Disorders',
    year: 2023,
    journal: 'Archives of Computational Methods in Engineering',
    abstract: 'Exploring AI methodologies for genetic disorder prognosis.',
    link: 'https://link.springer.com/article/10.1007/s11831-023-09904-1'
  },
  {
    id: '2',
    title: 'Disease identification of Groundnut leaves by Deep learning Technology',
    year: 2023,
    journal: 'NEUROQUANTOLOGY',
    abstract: 'Application of deep learning for agricultural disease detection.',
    link: 'https://www.neuroquantology.com/media/article_pdfs/892-891.pdf'
  },
  {
    id: '3',
    title: 'A Review of Deep Transfer Learning Approaches for Class-Wise Prediction of Alzheimer’s Disease Using MRI Images',
    year: 2023,
    journal: 'Archives of Computational Methods in Engineering',
    abstract: 'Reviewing transfer learning techniques for early Alzheimer’s detection via MRI.',
    link: 'https://link.springer.com/article/10.1007/s11831-022-09870-0'
  },
  {
    id: '4',
    title: 'Disease Identification in Sunflower Leaves by Deep Learning Technology',
    year: 2022,
    journal: 'Gongcheng Kexue Yu Jishu/Advanced Engineering Science',
    abstract: 'Deep learning models for sunflower leaf disease identification.',
    link: 'https://advancedengineeringscience.com/article/620.html'
  },
  {
    id: '5',
    title: 'Proposed method to identify oil seed leaf diseases by deep learning techniques',
    year: 2022,
    conference: 'Lecture Notes on Data Engineering and Communications Technologies',
    abstract: 'Novel methods for identifying diseases in oil seed crops.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-16-6289-8_47'
  },
  {
    id: '6',
    title: 'Analysis of Diseases in Plant’s Leaves Using Deep Learning Techniques',
    year: 2021,
    conference: 'Lecture Notes in Networks and Systems, Springer',
    abstract: 'Comprehensive analysis of plant pathology using modern DL frameworks.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-16-0882-7_88'
  },
  {
    id: '7',
    title: 'Backlog Prediction using Classification Techniques of Machine Learning',
    year: 2018,
    journal: 'International Journal of Computer Applications',
    abstract: 'Predictive modeling for academic backlog analysis.',
    link: 'https://www.ijcaonline.org/archives/volume182/number23/30071-2018918020/'
  },
  {
    id: '8',
    title: 'Sentiment Analysis of Live Tweets After Elections',
    year: 2018,
    conference: 'Springer Nature',
    abstract: 'Real-time sentiment analysis of political discourse post-elections.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-13-2285-3_36'
  },
  {
    id: '9',
    title: 'Sentiment Analysis of Movie Reviews using Machine Learning Techniques',
    year: 2017,
    journal: 'International Journal of Computer Applications',
    abstract: 'ML-based sentiment classification for entertainment reviews.',
    link: 'https://www.ijcaonline.org/archives/volume179/number7/28752-28752-2017916005/'
  },
  {
    id: '10',
    title: 'Predictive Approach of CBR in Artificial Intelligence: A Case of Astrological Predictions about the Status of Person',
    year: 2017,
    conference: 'Springer Singapore',
    abstract: 'Case-Based Reasoning applications in predictive modeling.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-10-2750-5_64'
  },
  {
    id: '11',
    title: 'Predictive Approach of Case Base Reasoning in Artificial Intelligence',
    year: 2016,
    conference: 'ICTCS-2016',
    abstract: 'Astrological predictions about famous personalities using CBR.',
    link: 'https://dl.acm.org/doi/10.1145/2905055.2905148'
  },
  {
    id: '12',
    title: 'Astrological Prediction for Profession Doctor using Classification Techniques of Artificial Intelligence',
    year: 2015,
    journal: 'International Journal of Computer Applications',
    abstract: 'AI classification techniques applied to profession prediction.',
    link: 'https://www.ijcaonline.org/archives/volume122/number15/21778-5052/'
  },
  {
    id: '13',
    title: 'Astrological Prediction for Profession using Classification Techniques of Artificial Intelligence',
    year: 2015,
    conference: 'IEEE ICCCA',
    abstract: 'IEEE Xplore conference paper on AI classification.',
    link: 'https://ieeexplore.ieee.org/document/7148378?arnumber=7148378&queryText=Neelam%20Chaplot&matchBoolean=true&newsearch=true&searchField=Search_All'
  },
  {
    id: '14',
    title: 'Astrology and Artificial Intelligence',
    year: 2015,
    journal: 'Technikon Half Yearly Journal, Shankra Group of Institutes',
    abstract: 'Exploring the intersection of astrological algorithms and AI.',
    link: '#'
  },
  {
    id: '15',
    title: 'A Review on Machine Learning Concepts for Prediction Based Applications',
    year: 2013,
    journal: 'International Journal of Computational Science, Engineering & Technology',
    abstract: 'Foundational review of ML concepts for predictive apps.',
    link: 'http://eclatjournals.com/IJCSET/Vol-I_issue-II.html'
  },
  {
    id: '16',
    title: 'Role of soft skills in engineering education: students’ perceptions and feedback',
    year: 2012,
    journal: 'Woodhead Publishing Limited',
    abstract: 'Enhancing learning and teaching through student feedback.',
    link: 'https://books.google.co.in/books?id=SWNEAgAAQBAJ&pg=PR6&lpg=PR6&dq=Neelam+chaplot&source=bl&ots=RzubPByVF2&sig=hHw9A99-LEfSzNembV7vXP2nUjc&hl=en&sa=X&ved=0ahUKEwjZ5_Tsi4bKAhWMGo4KHZQIAo04ChDoAQgsMAM#v=onepage&q=Neelam%20chaplot&f=false'
  },
  {
    id: '17',
    title: 'Web Based Learning System Using Case Based Reasoning',
    year: 2011,
    conference: 'International Conference on Web Based Learning and Library Management',
    abstract: 'Implementing CBR in e-learning systems.',
    link: '#'
  },
  {
    id: '18',
    title: 'Predictive Role of Case Based Reasoning for Astrological Predictions',
    year: 2010,
    conference: 'IEEE International Conference on Communication and Computational Intelligence',
    abstract: 'System modeling approach for predictive CBR.',
    link: 'https://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5738749&url=http%3A%2F%2Fieeexplore.ieee.org%2Fiel5%2F5733272%2F5738714%2F05738749.pdf%3Farnumber%3D5738749'
  },
  {
    id: '19',
    title: 'Archetype of Astrological Prediction System about Profession of any Persons Using Case Based Reasoning',
    year: 2010,
    conference: 'IEEE International Conference on Communication and Computational Intelligence',
    abstract: 'IEEE Xplore article on prediction systems.',
    link: 'https://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5738760&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5738760'
  },
  {
    id: '20',
    title: 'Testing Automation: A redefinition of software testing',
    year: 2007,
    conference: 'National conference on Emerging Trends in Software Engineering',
    abstract: 'Redefining software testing through automation.',
    link: '#'
  },
  {
    id: '21',
    title: 'Modified waterfall model for customer site development',
    year: 2007,
    conference: 'National Seminar on IT ENABLED SYSTEMS, CSI',
    abstract: 'Adapting the waterfall model for specific customer needs.',
    link: '#'
  }
];

export const CERTIFICATIONS: Certification[] = [
  // Microsoft
  { id: '1', title: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', date: 'Jun 2021', link: '#' },
  { id: '2', title: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', date: 'May 2021', credentialId: '991494821', link: '#' },
  
  // Coursera - Data Science & AI
  { id: '3', title: 'Neural Networks and Deep Learning', issuer: 'Coursera', date: 'Apr 2021', link: '#' },
  { id: '4', title: 'Applied Data Science with Python Specialization', issuer: 'Coursera', date: 'Nov 2020', link: '#' },
  { id: '5', title: 'Applied Social Network Analysis in Python', issuer: 'Coursera', date: 'Nov 2020', link: '#' },
  { id: '6', title: 'Applied Text Mining in Python', issuer: 'Coursera', date: 'Sep 2020', link: '#' },
  { id: '7', title: 'Applied Plotting, Charting & Data Representation in Python', issuer: 'Coursera', date: 'Aug 2020', link: '#' },
  { id: '8', title: 'Machine Learning for All', issuer: 'Coursera', date: 'Aug 2020', link: '#' },
  { id: '9', title: 'AI for Everyone', issuer: 'Coursera', date: 'May 2020', link: '#' },
  { id: '10', title: 'Applied Machine Learning in Python', issuer: 'Coursera', date: 'May 2020', link: '#' },
  { id: '11', title: 'Introduction to Data Science in Python', issuer: 'Coursera', date: 'May 2020', link: '#' },
  
  // NPTEL
  { id: '12', title: 'Joy of Computing Using Python', issuer: 'NPTEL, IIT Madras', date: 'May 2019', credentialId: 'NPTEL19CS09S51480042', link: '#' },
  { id: '13', title: 'Introduction to Machine Learning', issuer: 'NPTEL', date: 'Aug 2018', link: '#' },
  
  // Other MOOCs
  { id: '14', title: 'MOOC on MOOC', issuer: 'IIT Kanpur and COL', date: 'Sep 2014', link: '#' },
  { id: '15', title: 'Mobile for Development', issuer: 'IIT Kanpur and COL', date: 'Oct 2013', link: '#' },
  { id: '16', title: 'Introduction To Computer Science Building A Search Engine', issuer: 'David Evans (Udacity)', date: 'Feb 2012', link: '#' },
  { id: '17', title: 'Introduction to Artificial Intelligence', issuer: 'Sebastian Thrun & Peter Norvig', date: 'Oct 2011', link: '#' },
  
  // IBM
  { id: '18', title: 'IBM Certified Associate Developer Rational Application Developer V6.0', issuer: 'IBM', date: 'Apr 2010', link: '#' },
  { id: '19', title: 'IBM Certified Database Associate DB2 9 Fundamentals', issuer: 'IBM', date: 'Mar 2010', link: '#' }
];

export const COURSES: Course[] = [
  { id: '1', code: 'CSE 301', title: 'Data Structures & Algorithms', description: 'Fundamental concepts of data organization and algorithmic efficiency.', level: 'Undergraduate', semester: 'Fall 2024' },
  { id: '2', code: 'CSE 405', title: 'Software Engineering', description: 'Principles of software development life cycle, agile methodologies, and project management.', level: 'Undergraduate', semester: 'Spring 2024' },
  { id: '3', code: 'CSE 510', title: 'Advanced Database Systems', description: 'Distributed databases, query optimization, and NoSQL technologies.', level: 'Postgraduate', semester: 'Fall 2024' },
  { id: '4', code: 'CSE 450', title: 'Cloud Computing', description: 'Virtualization, cloud service models (IaaS, PaaS, SaaS), and cloud security.', level: 'Undergraduate', semester: 'Spring 2024' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Future of AI in Engineering Education",
    date: "Oct 12, 2024",
    excerpt: "As Large Language Models become ubiquitous, how we teach coding must evolve. It's no longer about syntax memory, but about architectural thinking and prompt engineering.",
    content: "Full content would go here...",
    tags: ["Education"]
  },
  {
    id: '2',
    title: "Understanding Distributed Consensus",
    date: "Sep 05, 2024",
    excerpt: "Raft vs Paxos. A simplified breakdown of how distributed systems agree on truth, specifically designed for my CSE 510 students.",
    content: "Full content would go here...",
    tags: ["Systems"]
  },
  {
    id: '3',
    title: "Active Learning in the Classroom",
    date: "Aug 20, 2024",
    excerpt: "Moving away from traditional lectures to project-based learning. Why student engagement metrics skyrocket when they build real-world applications.",
    content: "Full content would go here...",
    tags: ["Pedagogy"]
  }
];

export const JOURNALS = [
    { id: 1, title: 'Journal of Cloud Computing', publisher: 'Springer Nature', role: 'Reviewer & Contributor' },
    { id: 2, title: 'IEEE Transactions on Education', publisher: 'IEEE', role: 'Reviewer' },
    { id: 3, title: 'International Journal of AI', publisher: 'Elsevier', role: 'Contributor' },
    { id: 4, title: 'ACM Computing Surveys', publisher: 'ACM', role: 'Reviewer' }
];

export const searchContent = (query: string): SearchResult[] => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search Papers
    PAPERS.forEach(paper => {
        if (paper.title.toLowerCase().includes(lowerQuery) || paper.abstract.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'Research Paper', title: paper.title, description: paper.abstract, link: '/research' });
        }
    });

    // Search Courses
    COURSES.forEach(course => {
        if (course.title.toLowerCase().includes(lowerQuery) || course.description.toLowerCase().includes(lowerQuery) || course.code.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'Course', title: `${course.code}: ${course.title}`, description: course.description, link: '/courses' });
        }
    });

    // Search Blog
    BLOG_POSTS.forEach(post => {
        if (post.title.toLowerCase().includes(lowerQuery) || post.excerpt.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'Blog Post', title: post.title, description: post.excerpt, link: '/blog' });
        }
    });
    
    // Search Journals
    JOURNALS.forEach(journal => {
         if (journal.title.toLowerCase().includes(lowerQuery) || journal.publisher.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'Journal', title: journal.title, description: `${journal.role} - ${journal.publisher}`, link: '/journals' });
        }
    });
    
    // Search Certifications
    CERTIFICATIONS.forEach(cert => {
        if (cert.title.toLowerCase().includes(lowerQuery) || cert.issuer.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'Certification', title: cert.title, description: `${cert.issuer} - ${cert.date}`, link: '/certifications' });
        }
    });

    return results;
}
