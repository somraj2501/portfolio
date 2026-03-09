import { motion } from 'motion/react';

const coreSkills = [
  {
    name: "Angular",
    icon: "https://cdn.simpleicons.org/angular/DD0031",
    desc: "Primary front-end framework"
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    desc: "Secondary front-end framework"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    desc: "Typed JavaScript for scalable apps"
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    desc: "Back-end JavaScript runtime"
  },
  {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express/000000",
    desc: "Minimal Node.js web framework"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    desc: "Relational database & schema design"
  },
  {
    name: "NgRx/RxJs",
    icon: "https://cdn.simpleicons.org/ngrx/BA2BD2",
    desc: "Angular state management library"
  },
  {
    name: "Gemini AI",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
    desc: "LLM integration & AI pipelines"
  }
];

const secondarySkills = [
  'Ionic Framework', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
  'Responsive Design', 'JWT', 'Authentication',
  'Authorization', 'Cron Jobs', 'MongoDB', 'SQLite',
  'Query Optimization', 'Redux Toolkit', 'OpenAI Whisper',
  'Speech-to-Text', 'Git', 'GitLab', 'CI/CD Pipelines', 'Agile / Scrum',
  'i18n', 'Service Workers', 'Web Notifications API', 'UAT',
  'System Integration',
];

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen snap-start py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Doto, sans-serif' }}
          >
            Skills
          </h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </motion.div>

        {/* ── Core Skills ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="rounded-2xl border border-gray-200 p-5 flex flex-col gap-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              <span className="font-bold text-base leading-tight">{skill.name}</span>
              <span className="text-xs text-gray-500 leading-snug">{skill.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Secondary Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {secondarySkills.map((skill, i) => (
              <motion.span
                key={skill}
                className="text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-default"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.03 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
