import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
  delay?: number;
}

const ChatMessage = ({ message, delay = 0 }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`flex space-x-2 max-w-[80%] ${
          isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.1 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? 'bg-blue-100' : 'bg-purple-100'
          }`}
        >
          {isUser ? (
            <User className="h-4 w-4 text-blue-600" />
          ) : (
            <Bot className="h-4 w-4 text-purple-600" />
          )}
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
          className={`p-3 rounded-lg ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <ReactMarkdown className="prose prose-sm max-w-none break-words">
            {message.content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;