
import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { toast } from "@/hooks/use-toast";

export function NavMenuDemo() {
  const [chatMode, setChatMode] = useState(false);
  
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Features", href: "#features" },
    { text: "Pricing", href: "#pricing" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];
  
  const user = {
    name: "John Doe",
    avatar: "https://github.com/shadcn.png",
  };
  
  const handleGithubSync = () => {
    toast({
      title: "GitHub Sync",
      description: "Starting GitHub synchronization...",
    });
  };
  
  const handleChatToggle = () => {
    setChatMode(!chatMode);
    toast({
      title: `Chat Mode ${chatMode ? "Disabled" : "Enabled"}`,
      description: `You've ${chatMode ? "disabled" : "enabled"} chat mode for debugging and issue resolution.`,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-2">Default Variant</h2>
        <NavMenu 
          links={navLinks} 
          user={user} 
          onGithubSync={handleGithubSync}
          onChatToggle={handleChatToggle}
        />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-2">Minimal Variant</h2>
        <NavMenu 
          links={navLinks} 
          user={user} 
          variant="minimal"
          onGithubSync={handleGithubSync}
          onChatToggle={handleChatToggle}
        />
      </div>
      
      <div className="bg-gray-800 p-4">
        <h2 className="text-lg font-semibold mb-2 text-white">Transparent Variant</h2>
        <NavMenu 
          links={navLinks} 
          user={user} 
          variant="transparent"
          className="text-white"
          onGithubSync={handleGithubSync}
          onChatToggle={handleChatToggle}
        />
      </div>
    </div>
  );
}
