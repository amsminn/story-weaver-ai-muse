
import React from 'react';
import { MessageSquare, RefreshCw, Feather, BookOpen, Edit, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="feature-icon" />,
      title: "비유 및 은유 생성",
      description: "단순한 설명을 넘어, 작가의 의도에 맞는 비유와 은유를 제안하여 글의 깊이를 더합니다."
    },
    {
      icon: <Edit className="feature-icon" />,
      title: "맞춤형 문체 제안",
      description: "작가의 문체를 학습하고 그에 맞는 문장 구조와 어휘를 제안하여 일관된 톤을 유지합니다."
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "플롯 전개 지원",
      description: "이야기의 흐름을 분석하고 다양한 전개 방향과 갈등 요소를 제안합니다."
    },
    {
      icon: <Feather className="feature-icon" />,
      title: "문단 단위 추천",
      description: "전체 이야기가 아닌 문단 단위로 추천하여 작가의 창의성을 존중합니다."
    },
    {
      icon: <MessageSquare className="feature-icon" />,
      title: "생생한 대화 생성",
      description: "캐릭터의 성격과 상황에 맞는 자연스러운 대화를 제안합니다."
    },
    {
      icon: <RefreshCw className="feature-icon" />,
      title: "실시간 대안 제시",
      description: "여러 대안을 실시간으로 제시하여 작가가 원하는 방향으로 이야기를 발전시킬 수 있습니다."
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">StoryWeaver AI의 주요 기능</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        웹소설 작가의 창의성을 극대화하고 생산성을 높이는 AI 지원 도구입니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card group">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-storyweaver-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
