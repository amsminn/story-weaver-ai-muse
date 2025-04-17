
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import EditorDemo from "@/components/EditorDemo";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AIComparison from "@/components/AIComparison";
import FAQ from "@/components/FAQ";
import SignupForm from "@/components/SignupForm";
import { Sparkles, BookOpen, RefreshCw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-storyweaver-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
              AI와 함께하는 창의적인 웹소설 창작
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              StoryWeaver AI는 웹소설 작가를 위한 AI 글쓰기 도우미로, 단조로운 설명문이 아닌 생생한 비유와 묘사를 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-storyweaver-primary hover:bg-storyweaver-primary/90">
                베타 테스터 신청하기
              </Button>
              <Button size="lg" variant="outline">
                더 알아보기
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Sparkles className="w-8 h-8 text-storyweaver-accent mb-2" />
                <h3 className="text-3xl font-bold mb-1">95%</h3>
                <p className="text-gray-600 text-sm">작가 만족도</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <BookOpen className="w-8 h-8 text-storyweaver-accent mb-2" />
                <h3 className="text-3xl font-bold mb-1">3배</h3>
                <p className="text-gray-600 text-sm">생산성 향상</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <RefreshCw className="w-8 h-8 text-storyweaver-accent mb-2" />
                <h3 className="text-3xl font-bold mb-1">500+</h3>
                <p className="text-gray-600 text-sm">일일 추천 제안</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">StoryWeaver AI로 글쓰기 체험하기</h2>
          <EditorDemo />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-storyweaver-light/30">
        <Features />
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <HowItWorks />
      </section>

      {/* AI Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 bg-storyweaver-light/30">
        <AIComparison />
      </section>

      {/* Testimonials - We'll skip this for now as it's a beta product */}

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <FAQ />
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 md:py-24 bg-gradient-to-b from-storyweaver-light/30 to-white">
        <SignupForm />
      </section>

      {/* Footer */}
      <footer className="bg-storyweaver-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">StoryWeaver AI</h3>
              <p className="text-gray-300">AI가 돕는 창의적인 웹소설 창작</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">기능</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">작동 원리</a>
              <a href="#comparison" className="text-gray-300 hover:text-white transition">비교</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
              <a href="#signup" className="text-gray-300 hover:text-white transition">베타 신청</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} StoryWeaver AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
