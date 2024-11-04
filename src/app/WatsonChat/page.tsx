'use client'
import { useEffect } from 'react';


type WatsonInstance = {
  render: () => Promise<void>;
};

type WatsonAssistantOptions = {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  clientVersion?: string; 
  onLoad: (instance: WatsonInstance) => Promise<void>;
};

declare global {
  interface Window {
    watsonAssistantChatOptions?: WatsonAssistantOptions;
  }
}

export default function WatsonChat() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.watsonAssistantChatOptions = {
        integrationID: "09d2f796-266f-4e2c-8aa8-4e8c44fd728d",
        region: "us-south",
        serviceInstanceID: "5b31a3d7-4e66-44fb-82eb-9cac9c8e158c",
        clientVersion: "latest", 
        onLoad: async (instance: WatsonInstance) => {
          await instance.render();
        },
      };

      setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
                     (window.watsonAssistantChatOptions?.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);
      }, 0);
    }
  }, []);

  return null;
}
