import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Ajay kumar",
    role: "AI & ML Developer",
    image:
      "https://i.postimg.cc/nzVwrqZ3/Whats-App-Image-2025-01-05-at-6-51-23-PM.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ajay-kumar-516111245/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Anish Raj",
    role: "Java Developer",
    image:
      "https://i.postimg.cc/brVXp3t0/Whats-App-Image-2025-01-05-at-6-38-03-PM.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/anish-kumar-ray-91248b256/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rahul Gupta",
    role: "Full Stack Developer",
    image:
      "https://i.postimg.cc/nhZWgyg8/Whats-App-Image-2025-01-05-at-6-52-44-PM.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/rahul-gupta-9742ab226/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Akash Bhattacharjee",
    role: "Devops Engineer",
    image:
      "https://i.postimg.cc/rp7NXWsd/Whats-App-Image-2025-01-05-at-6-55-54-PM.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/akash-bhattacharjee-b12525215/",
      twitter: "#",
      github: "#",
    },
  },
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Experts dedicated to revolutionizing social media analytics
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;