import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart2, 
  Users, 
  TrendingUp, 
  Share2,
  Target,
  MessageSquare
} from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your social media performance with real-time data tracking.'
  },
  {
    icon: Users,
    title: 'Audience Insights',
    description: 'Understand your audience demographics, behaviors, and engagement patterns.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Tracking',
    description: 'Monitor your account growth and engagement rates across all platforms.'
  },
  {
    icon: Share2,
    title: 'Competitor Analysis',
    description: 'Compare your performance with competitors and identify opportunities.'
  },
  {
    icon: Target,
    title: 'Campaign Monitoring',
    description: 'Track and optimize your social media campaigns in real-time.'
  },
  {
    icon: MessageSquare,
    title: 'Sentiment Analysis',
    description: 'Analyze audience sentiment and feedback across your social channels.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Better Insights
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to understand and improve your social media presence
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;