
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSignupClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignupClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignupClick = () => {
    onSignupClick?.();
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">StoryWeaver AI</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-700 hover:text-storyweaver-primary transition">기능</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-storyweaver-primary transition">작동 원리</a>
          <a href="#comparison" className="text-gray-700 hover:text-storyweaver-primary transition">비교</a>
          <a href="#faq" className="text-gray-700 hover:text-storyweaver-primary transition">FAQ</a>
          <Button 
            className="bg-storyweaver-primary hover:bg-storyweaver-primary/90"
            onClick={handleSignupClick}
          >
            베타 신청
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4 px-6">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-storyweaver-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              기능
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-storyweaver-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              작동 원리
            </a>
            <a 
              href="#comparison" 
              className="text-gray-700 hover:text-storyweaver-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              비교
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-storyweaver-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-storyweaver-primary hover:bg-storyweaver-primary/90 w-full mt-2"
              onClick={handleSignupClick}
            >
              베타 신청
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

