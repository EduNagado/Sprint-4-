"use client";
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import { useState} from 'react';

type Message = {
  text: string;
  sender: 'user' | 'ia';
};

export default function Ia() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Eu sou Fernanda, a assistente virtual da MEF. Como posso te ajudar?', sender: 'ia' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false); 

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      
     
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Estou processando sua solicitação...', sender: 'ia' }
        ]);
        setIsTyping(false); 
      }, 2000); 
    }
  };

  return (
    <>
    <Header/>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
            <div className="h-[500px] overflow-y-auto p-2 space-y-4">
            {messages.map((message, index) => (
                <div
                key={index}
                className={`flex ${message.sender === 'ia' ? 'justify-start' : 'justify-end'}`}
                >
                <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'ia' ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'
                    }`}
                >
                    {message.text}
                </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-300 text-gray-800 italic">
                    Fernanda está digitando...
                </div>
                </div>
            )}
            </div>
            <div className="mt-4 flex items-center">
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Enviar
            </button>
            </div>
        </div>
        </div>
        <Footer/>
    </>
    
  );
}
