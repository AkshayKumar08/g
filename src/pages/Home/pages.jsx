import React from 'react';

const education = [
    {
        degree: 'Masters in Computer Science',
        institution: 'The University of Texas At Arlington',
        year: '2024 - present',
        details: ''
    },
];

const experience = [
    {
        role: 'Software Engineering Intern',
        company: 'Adobe Inc',
        year: 'May 2025 – August 2025',
        details: ''
    },
    {
        role: 'Graduate Research Assistant',
        company: 'University of Texas at Arlington',
        year: 'Jun 2024 – Present',
        details: ''
    },
    {
        role: 'Associate Software Engineer',
        company: 'DAZN',
        year: 'Oct 2022 – Aug 2023',
        details: ''
    },
    {
        role: 'Software Development Engineer Intern',
        company: 'Amazon',
        year: 'Feb 2022 – Jul 2022',
        details: ''
    }
];

const projects = [
    {
        name: 'Multi-Agent Research Assistant',
        description: `Automated 90% of research workflow tasks using a multi-agent AI system coordinating retrieval, summarization, Q&A, and citation agents. Built a scalable multi-agent workflow engine automating 90% of research tasks with fault tolerance and 99.99% uptime. (Python, Streamlit, CrewAI, HuggingFace, LangChain)`,
        link: 'https://github.com/akshaykumar08/multi-agent-research-assistant',
        demo: 'https://multi-agent-research-assistant-gcxdy5m7jfbuezjfq2p9aa.streamlit.app/'
    }
];

const technicalSkills = {
    Languages: ['Python', 'Java', 'TypeScript', 'SQL', 'HTML/CSS', 'Go', 'Shell'],
    Databases: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Elasticsearch', 'Redis', 'MongoDB'],
    Frameworks_Libraries: ['Ray', 'PySpark', 'Spring Boot', 'FastAPI', 'PyTorch', 'Hugging Face'],
    Cloud_Infrastructure: ['AWS (S3, Lambda, ECS, SQS)', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
    Others: ['RESTful APIs', 'Microservices', 'Object-Oriented Design', 'Agile Development', 'SDLC', 'Distributed Systems']
};

const Section = ({ title, children }) => (
    <div className="section-block">
        <h2 className="section-title">{title}</h2>
        {children}
    </div>
);


const bio = `Hi, I'm Akshay Kumar, a passionate software engineer and researcher.`;

const contact = {
    email: 'rmakshaykumar09 [at] email [dot] com',
    linkedin: 'https://www.linkedin.com/in/akshay-r-m/',
    github: 'https://github.com/akshaykumar08'
};

const Home = () => {
    return (
        <div className="portfolio-container">
            {/* Bio Section */}
            <div className="bio-section">
                <h1 className="portfolio-title">Akshay's Portfolio</h1>
                <p className="bio-text">{bio}</p>
            </div>

            <Section title="Education">
                {education.map((edu, idx) => (
                    <div key={idx} className="edu-block">
                        <div className="edu-degree">{edu.degree}</div>
                        <div className="edu-details">{edu.institution} | {edu.year}</div>
                        <div className="edu-extra">{edu.details}</div>
                    </div>
                ))}
            </Section>

            <Section title="Experience">
                {experience.map((exp, idx) => (
                    <div key={idx} className="exp-block">
                        <div className="exp-role">{exp.role}</div>
                        <div className="exp-details">{exp.company} | {exp.year}</div>
                        <div className="exp-extra">{exp.details}</div>
                    </div>
                ))}
            </Section>

            <Section title="Projects">
                {projects.map((proj, idx) => (
                    <div key={idx} className="proj-block">
                        <div className="proj-name">{proj.name}</div>
                        <div className="proj-desc">{proj.description}</div>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">View Project</a>
                        {proj.demo && (
                            <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-demo">
                                Live Demo
                            </a>
                        )}
                    </div>
                ))}
            </Section>

            <Section title="Technical Skills">
                {Object.entries(technicalSkills).map(([category, skills], idx) => (
                    <div key={idx} className="skill-block">
                        <div className="skill-category">{category.replace('_', ' & ')}</div>
                        <div className="skill-list">
                            {skills.map((skill, i) => (
                                <span key={i} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </Section>

            {/* Contact Me Section */}
            <div className="contact-section">
                <h2 className="contact-title">Contact Me</h2>
                <div className="contact-text">
                    <div>Email: <span className="contact-email">{contact.email}</span></div>
                    <div>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.linkedin}</a></div>
                    <div>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.github}</a></div>
                </div>
            </div>
        </div>
    );
};

export default Home;