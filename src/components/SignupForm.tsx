
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    writeExperience: '',
    aiExperience: '',
    novelGenre: '',
    writingFrequency: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "베타 신청이 완료되었습니다",
        description: "웹소설 AI 도구 테스터로 선정되면 곧 이메일로 연락드리겠습니다.",
      });
      setFormData({
        name: '',
        email: '',
        writeExperience: '',
        aiExperience: '',
        novelGenre: '',
        writingFrequency: '',
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold mb-6 text-center">StoryWeaver AI 베타 테스터 신청</h2>
        <p className="text-gray-600 mb-8 text-center">
          웹소설 작가의 창의성을 높여줄 AI 도구의 베타 테스트에 참여해보세요.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="귀하의 이름을 입력해주세요"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="연락받으실 이메일을 입력해주세요"
              required
            />
          </div>
          
          <div>
            <label htmlFor="novelGenre" className="block text-sm font-medium text-gray-700 mb-1">
              주로 쓰는 웹소설 장르
            </label>
            <Input
              id="novelGenre"
              name="novelGenre"
              value={formData.novelGenre}
              onChange={handleChange}
              placeholder="예: 판타지, 로맨스, SF 등"
            />
          </div>

          <div>
            <label htmlFor="writingFrequency" className="block text-sm font-medium text-gray-700 mb-1">
              글쓰기 빈도
            </label>
            <Input
              id="writingFrequency"
              name="writingFrequency"
              value={formData.writingFrequency}
              onChange={handleChange}
              placeholder="예: 주 1회, 월 2회 등"
            />
          </div>
          
          <div>
            <label htmlFor="writeExperience" className="block text-sm font-medium text-gray-700 mb-1">
              글쓰기 경험
            </label>
            <Textarea
              id="writeExperience"
              name="writeExperience"
              value={formData.writeExperience}
              onChange={handleChange}
              placeholder="웹소설, 소설 등 글쓰기 경험이 있으시다면 간략히 알려주세요."
              rows={3}
            />
          </div>
          
          <div>
            <label htmlFor="aiExperience" className="block text-sm font-medium text-gray-700 mb-1">
              AI 글쓰기 도구 사용 경험
            </label>
            <Textarea
              id="aiExperience"
              name="aiExperience"
              value={formData.aiExperience}
              onChange={handleChange}
              placeholder="기존의 AI 글쓰기 도구를 사용해보신 경험이 있으신가요? (선택사항)"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-storyweaver-primary hover:bg-storyweaver-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? '제출 중...' : '베타 테스터 신청하기'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

