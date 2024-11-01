'use client'
import { useEffect } from 'react';

type WatsonAssistantOptions = {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  onLoad: (instance: any) => Promise<void>;
};

export default function WatsonChat() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).watsonAssistantChatOptions = {
        integrationID: "09d2f796-266f-4e2c-8aa8-4e8c44fd728d",
        region: "us-south",
        serviceInstanceID: "5b31a3d7-4e66-44fb-82eb-9cac9c8e158c",
        onLoad: async (instance: any) => {
          await instance.render();
        },
      } as WatsonAssistantOptions;

      setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
                     ((window as any).watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);
      }, 0);
    }
  }, []);

  return null;
}
