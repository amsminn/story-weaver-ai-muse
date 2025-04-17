
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from 'lucide-react';

const AIComparison = () => {
  const traditionalAIIssues = [
    {
      title: "지시한 내용 이상의 결과물을 만들 수 없음",
      description: "기존 AI는 프롬프트에 작성된 내용만 반영하여 창의적인 비유나 독창적인 표현 생성이 어렵습니다."
    },
    {
      title: "등장인물의 성격과 특징이 평면적으로 변함",
      description: "캐릭터의 깊이와 다양한 면모를 표현하지 못하고 단순화되는 경향이 있습니다."
    },
    {
      title: "상황을 묘사하기보다 축약하여 보여주는 경향",
      description: "독자가 몰입할 수 있는 생생한 묘사 대신 설명적이고 요약된 서술을 제공합니다."
    }
  ];

  const storyWeaverAdvantages = [
    {
      title: "문단 단위 추천과 비유 생성",
      description: "작가의 글에 이어질 다양한 문단을 제안하고, 작가가 의도한 비유를 자연스럽게 확장합니다."
    },
    {
      title: "작가의 창의성 보조",
      description: "AI가 글을 완전히 대체하지 않고, 작가의 아이디어를 다양한 형태로 발전시키도록 돕습니다."
    },
    {
      title: "맥락 인식 추천 시스템",
      description: "이전 내용을 분석하여 캐릭터, 플롯, 문체에 일관성 있는 제안을 제공합니다."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">AI 소설 작성의 한계와 StoryWeaver의 해결책</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional AI Issues */}
        <Card className="p-6 bg-gray-50 border-red-200">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="text-red-500" size={24} />
            <h3 className="text-xl font-semibold">기존 AI 작문의 한계점</h3>
          </div>
          <div className="space-y-6">
            {traditionalAIIssues.map((issue, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-lg mb-2">{issue.title}</h4>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* StoryWeaver Advantages */}
        <Card className="p-6 bg-storyweaver-light border-storyweaver-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-storyweaver-primary" size={24} />
            <h3 className="text-xl font-semibold">StoryWeaver AI의 해결책</h3>
          </div>
          <div className="space-y-6">
            {storyWeaverAdvantages.map((advantage, index) => (
              <div key={index} className="border-b border-storyweaver-primary/10 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-lg mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIComparison;
