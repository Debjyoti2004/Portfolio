import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    mongodb,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    kubernetes,
    aws,
    jenkins,
    terraform,
    ansible,
    argocd,
    aws_in,
    juniper,
    hashnode,
    argobrain,
    controllhub,
    Roomchat,
    cloudscale,
    cicd_pipeline,
    cloud_project,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
      {
        name: "Ansible",
        icon: ansible,
      },
      {
        name: "ArgoCD",
        icon: argocd,
      },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      id: 0,
      img: juniper,
      role: "Juniper Virtual Internship",
      company: "Juniper",
      date: "Jul 2024 - Sep 2024",
      desc: "During my internship, I explored various cloud computing services, including deployment, security, and networking, while working on scalable web applications. I also gained hands-on experience in integrating cloud solutions to enhance performance and ensure secure development.",
      skills: [
        "AWS",
        "Cloud Security",
        "DevOps",
        "Docker",
        "CI/CD Pipelines",
        "Networking",
        "Terraform",
        "Linux",
    ]    
    },
    {
      id: 1,
      img: aws_in,
      role: "AWS Virtual Internship",
      company: "AWS",
      date: "Oct 2024 - Dec 2024",
      desc: "During my internship, I worked with AWS services like S3, EC2, Lambda, API Gateway, and CloudFront to build scalable cloud architectures. I implemented DevOps practices using Docker, Terraform, and Portainer for automation, containerization, and infrastructure management. Additionally, I optimized serverless applications and built decoupled systems using Amazon SQS and Nginx for efficient deployments.",
      skills: [
        "AWS",
        "Docker",
        "Terraform",
        "CI/CD",
        "Serverless",
        "Infrastructure as Code (IaC)"
    ]
    },
    {
      id: 2,
      img: hashnode,
      role: "Content Writer",
      company: "Hashnode",
      date: "Jan 2025 - Present",
      desc: " Writing and publishing technical blogs on DevOps, Cloud Computing, CI/CD, and Web Security. Sharing hands-on experience with AWS, Docker, Kubernetes, and cloud infrastructure. Engaging with the developer community through in-depth tutorials, best practices, and real-world implementations.",
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
        name: "Agriculture Based Application",
        description: "Agriculture AI Assistant – An intelligent agriculture-based application featuring Crop Recommendation, Disease Prediction, Agriculture Insights, and Weather Forecasting to help farmers make data-driven decisions for better yield and sustainability.",
        category: "web development",
        tags: [
            { name: "React", color: "blue-text-gradient" },
            { name: "MongoDB", color: "green-text-gradient" },
            { name: "Express", color: "pink-text-gradient" },
            { name: "Node.js", color: "pink-text-gradient" },
            { name: "Tailwind CSS", color: "pink-text-gradient" },
        ],
        image: argobrain,
        source_code_link: "https://github.com/Debjyoti2004/Agrobrain",
    },
    {
        name: "Admin Dashboard",
        description: "A feature-rich admin dashboard application built with React and Syncfusion components, offering comprehensive data visualization, business analytics, and project management capabilities.",
        category: "web development",  
        tags: [
            { name: "React", color: "blue-text-gradient" },
            { name: "JavaScript", color: "green-text-gradient" },
            { name: "Tailwind CSS", color: "green-text-gradient" },
            { name: "Syncfusion", color: "pink-text-gradient" },
        ],
        image: controllhub,
        source_code_link: "https://github.com/Debjyoti2004/ControlHub",
    },
    {
      name: "Chat Room",
      description: "A chat room application built with React and Socket.io, offering real-time chat functionality and user authentication.",
      category: "web development",
      tags: [
          { name: "React", color: "blue-text-gradient" },
          { name: "Socket.io", color: "green-text-gradient" },
          { name: "Tailwind CSS", color: "pink-text-gradient" },
      ],
      image: Roomchat,
      source_code_link: "https://github.com/Debjyoti2004/NovaRoom",
  },
  {
    name: "AWS Infrastructure",
    description: "A robust, production-ready AWS infrastructure implementing auto-scaling across multiple availability zones with enhanced security and monitoring capabilities.",
    category: "cloud computing",  
    tags: [
        { name: "EC2", color: "blue-text-gradient" },
        { name: "ELB", color: "green-text-gradient" },
        { name: "VPC", color: "pink-text-gradient" },
        { name: "IAM", color: "pink-text-gradient" },
        { name: "Internet Gateway", color: "pink-text-gradient" },

    ],
    image: cloudscale,
    source_code_link: "https://github.com/Debjyoti2004/CloudScale-Monitor",
},
{
  name: "CI/CD Pipeline",
  description: "Designed and implemented a CI/CD pipeline on AWS using CodeCommit, CodeBuild, CodeDeploy, and CodePipeline for automated deployments. Integrated IAM, S3, and AWS compute services (EC2, ECS, Lambda) to ensure secure and scalable application delivery",
  category: "devops",  
  tags: [
      { name: "AWS CodeBuild", color: "blue-text-gradient" },
      { name: "AWS CodeDeploy", color: "green-text-gradient" },
      { name: "AWS CodePipeline", color: "pink-text-gradient" },

  ],
  image: cicd_pipeline,
  source_code_link: "https://github.com/Debjyoti2004/CloudScale-Monitor",
},
{
  name: "Multi-Environment AWS Infrastructure",
  description: "Designed a multi-environment AWS architecture (Dev, Stage, Prod) using Terraform for automated infrastructure provisioning. Integrated S3, RDS, and EC2 instances to ensure scalability, reliability, and seamless deployment across environments.",
  category: "cloud computing",  
  tags: [
      { name: "terraform", color: "blue-text-gradient" },
      { name: "AWS S3", color: "green-text-gradient" },
      { name: "AWS DynamoDB", color: "pink-text-gradient" },
      { name: "AWS EC2", color: "pink-text-gradient" },

  ],
  image: cloud_project,
  source_code_link: "https://github.com/Debjyoti2004/terraform-iac-aws",
}
];

  
  export { services, technologies, experiences, testimonials, projects };