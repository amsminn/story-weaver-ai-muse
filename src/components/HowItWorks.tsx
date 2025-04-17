
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Sparkles, MousePointer, BookOpen } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-storyweaver-primary" />,
      title: "글쓰기 시작",
      description:
        "작가가 자신의 이야기를 작성합니다. 기존에 쓰던 방식대로 첫 문단이나 여러 문단을 자유롭게 작성합니다."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-storyweaver-primary" />,
      title: "AI 제안 생성",
      description:
        "StoryWeaver AI가 작성된 내용을 분석하고 다음에 이어질 수 있는 다양한 문단, 비유, 대화 등을 제안합니다."
    },
    {
      icon: <MousePointer className="w-10 h-10 text-storyweaver-primary" />,
      title: "선택 및 수정",
      description:
        "작가가 AI의 제안 중에서 마음에 드는 것을 선택하거나, 영감을 받아 자신만의 내용으로 수정합니다."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-storyweaver-primary" />,
      title: "이야기 완성",
      description:
        "이 과정을 반복하며 작가의 창의성과 AI의 지원이 결합된 독창적인 이야기가 완성됩니다."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">작동 원리</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        StoryWeaver AI는 작가가 주도하는 창작 과정을 존중하며, 작가의 창의성을 증폭시켜주는 동반자 역할을 합니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="border border-gray-200 hover:border-storyweaver-primary/30 transition duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-storyweaver-light rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center mt-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-storyweaver-primary/30 to-transparent"></div>
                    <div className="w-3 h-3 rounded-full bg-storyweaver-primary"></div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
