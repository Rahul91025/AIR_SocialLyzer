import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Activity, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '150%',
    label: 'Average Growth',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Users,
    value: '10M+',
    label: 'Analyzed Profiles',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Activity,
    value: '24/7',
    label: 'Real-time Monitoring',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Accuracy Rate',
    color: 'from-orange-400 to-orange-600'
  }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <motion.h3
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;