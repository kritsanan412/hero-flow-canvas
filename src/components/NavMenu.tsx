
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, MessageSquare } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface NavMenuProps {
  links: { text: string; href: string }[];
  user?: {
    name: string;
    avatar: string;
  };
  className?: string;
  variant?: "default" | "minimal" | "transparent";
  onGithubSync?: () => void;
  onChatToggle?: () => void;
}

export function NavMenu({
  links,
  user,
  className,
  variant = "default",
  onGithubSync,
  onChatToggle
}: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Determine background style based on variant
  const getContainerStyle = () => {
    switch (variant) {
      case "minimal":
        return "border-b";
      case "transparent":
        return "bg-transparent";
      default:
        return "bg-white shadow-sm";
    }
  };

  return (
    <nav className={cn(
      "w-full transition-all duration-300 py-4",
      getContainerStyle(),
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </Button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Right side - user menu, github, chat */}
          <div className="flex items-center space-x-4">
            {/* GitHub sync button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex items-center gap-2"
              onClick={onGithubSync}
            >
              <Github size={18} />
              <span className="hidden lg:inline">Sync</span>
            </Button>
            
            {/* Chat mode toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex items-center gap-2"
              onClick={onChatToggle}
            >
              <MessageSquare size={18} />
              <span className="hidden lg:inline">Chat</span>
            </Button>
            
            {/* User dropdown */}
            {user && (
              <DropdownMenu open={menuVisible} onOpenChange={setMenuVisible}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full" 
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown size={16} className="text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56 animate-in fade-in-20 slide-in-from-top-5"
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden ${isOpen ? 'block animate-in fade-in-50 duration-200' : 'hidden'} mt-4`}
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </a>
            ))}
            <div className="pt-4 flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={onGithubSync}
              >
                <Github size={18} />
                <span>GitHub Sync</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={onChatToggle}
              >
                <MessageSquare size={18} />
                <span>Chat Mode</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
