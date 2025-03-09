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
      company: "AWS.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };