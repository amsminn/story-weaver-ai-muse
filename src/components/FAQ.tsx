
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "StoryWeaver AI는 소설을 완전히 대체해서 써주나요?",
      answer: "아니요. StoryWeaver는 작가의 창의성을 대체하는 것이 아니라, 확장하고 보조하는 도구입니다. 작가가 쓴 내용을 분석하여 다음 문단을 위한 여러 제안을 제공하고, 작가는 이 중에서 선택하거나 영감을 얻어 자신만의 글을 완성할 수 있습니다."
    },
    {
      question: "기존 AI 글쓰기 도구와 어떻게 다른가요?",
      answer: "기존 AI는 전체 이야기를 한번에 생성하여 설명적이고 평면적인 글을 만드는 경향이 있습니다. StoryWeaver는 문단 단위로 작동하며, 작가가 쓴 내용에 이어질 수 있는 다양한 표현과 비유를 제안함으로써 더 생생하고 독창적인 글쓰기를 가능하게 합니다."
    },
    {
      question: "어떤 유형의 소설 작업에 적합한가요?",
      answer: "웹소설, 라이트노벨, 장르문학 등 다양한 형태의 소설 작업에 활용할 수 있습니다. 특히 일정한 분량을 정기적으로 연재해야 하는 웹소설 작가에게 유용한 생산성 도구가 될 수 있습니다."
    },
    {
      question: "저작권은 어떻게 되나요?",
      answer: "StoryWeaver AI를 사용하여 생성된 모든 콘텐츠의 저작권은 사용자에게 있습니다. AI는 작가의 도구일 뿐, 모든 창작물에 대한 권리는 작가가 보유합니다."
    },
    {
      question: "베타 테스트는 언제부터 시작되나요?",
      answer: "현재 베타 테스트 준비 중이며, 신청자를 모집하고 있습니다. 베타 테스트는 다음 달부터 시작될 예정이며, 신청하신 분들께 순차적으로 초대장을 보내드릴 계획입니다."
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-4 text-lg font-medium hover:text-storyweaver-primary transition">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 py-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
