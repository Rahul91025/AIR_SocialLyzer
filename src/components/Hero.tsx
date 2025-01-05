import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        {" "}
        {/* Reduced padding-top */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-md mt-[2rem] "
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium ">
                Analytics Platform
              </span>
              <ArrowRight className="ml-2 h-4 w-4 text-purple-600" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Analyze Your{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Social Impact
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Get deep insights into your social media performance with our
              advanced analytics platform. Track engagement, growth, and ROI
              across all platforms.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px -10px rgba(79, 70, 229, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all duration-200 shadow-lg"
              >
                Start Analysis
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px -10px rgba(79, 70, 229, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-indigo-600 rounded-lg border-2 border-indigo-600/20 transition-all duration-200 shadow-lg"
              >
                View Demo
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: BarChart2, text: "Real-time Analytics" },
                { icon: TrendingUp, text: "Growth Tracking" },
                { icon: Users, text: "Audience Insights" },
                { icon: Activity, text: "Engagement Metrics" },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-3 rounded-lg"
                >
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Analytics Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-indigo-50 p-4 rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Analytics Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Growth Rate</p>
                    <p className="font-bold text-gray-900">+127%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
