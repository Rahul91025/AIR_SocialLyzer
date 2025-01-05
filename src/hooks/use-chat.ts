import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your social media analytics assistant. How can I help you today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Add user message
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      // Validate API key
      const apiKey = "AIzaSyDFYQBGPfgOjM6b8S6zBb_18SC43L11g40";
      if (!apiKey) {
        throw new Error('Missing Gemini API key');
      }

      // Initialize Gemini AI
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      // Get response from Gemini
      const result = await model.generateContent(content);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        throw new Error('Empty response from AI');
      }

      // Add assistant message
      const assistantMessage: Message = { role: 'assistant', content: text };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading,
    error
  };
};