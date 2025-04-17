
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Book, PenLine } from 'lucide-react';

const EditorDemo = () => {
  const [text, setText] = useState(`북유럽 신화에 등장하는 신 중 발두르라는 신이 있다.

몸 어디를 무슨 무기로 맞아도 상처 입지 않는 신인데, 그래서 신들은 그런 발두르에게 이것저것 던지면서 놀았다고 한다.

……참고로 딱히 괴롭힌 건 아니고, 그야말로 발두르와 그렇게 놀았다는 모양이다.`);
  
  const [suggestions, setSuggestions] = useState([
    '어쨌거나 발두르는 그 무엇에도 상처 입지 않으니까.',
    '내 의붓형제와 자매들이 나를 보는 시선이 딱 그랬다.',
    '갑자기 튀어나와서 검을 휘두르건, 활을 쏘건, 미리 알고 피해버리니, 마치 농담이라도 된다는 듯 나에게 검을 휘두르는 것이다.'
  ]);

  const handleSuggestionClick = (suggestion: string) => {
    setText(text + '\n\n' + suggestion);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border">
      <div className="flex flex-col lg:flex-row">
        {/* Editor Section */}
        <div className="flex-1 p-6 border-r">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={20} className="text-storyweaver-secondary" />
              <h3 className="font-semibold text-lg">주인공 일행이 지나치게 성실하다 - Chapter 7</h3>
            </div>
            <Button variant="outline" size="sm" className="text-xs">저장</Button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-storyweaver-primary/20 focus:border-storyweaver-primary outline-none resize-none font-medium text-gray-700"
          />

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-storyweaver-accent" />
              <h4 className="text-sm font-semibold">AI 추천 내용</h4>
            </div>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-3 border border-dashed border-storyweaver-primary/30 rounded-lg cursor-pointer hover:bg-storyweaver-light transition"
                >
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="w-full lg:w-96 bg-storyweaver-light p-6">
          <Tabs defaultValue="suggestions">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="suggestions" className="flex-1">추천</TabsTrigger>
              <TabsTrigger value="style" className="flex-1">문체</TabsTrigger>
              <TabsTrigger value="plot" className="flex-1">플롯</TabsTrigger>
            </TabsList>
            
            <TabsContent value="suggestions" className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Book size={16} className="text-storyweaver-secondary" />
                  <h4 className="text-sm font-semibold">비유 추천</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">북유럽 신화 비유를 활용한 다음 문단 제안:</p>
                <div className="p-2 bg-storyweaver-light/50 rounded text-sm">
                  어쨌거나 발두르는 그 무엇에도 상처 입지 않으니까.<br/><br/>
                  내 의붓형제와 자매들이 나를 보는 시선이 딱 그랬다.
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <PenLine size={16} className="text-storyweaver-secondary" />
                  <h4 className="text-sm font-semibold">장면 전환 추천</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">지금 장면에 이어 쓸 내용:</p>
                <div className="p-2 bg-storyweaver-light/50 rounded text-sm">
                  갑자기 튀어나와서 검을 휘두르건, 활을 쏘건, 미리 알고 피해버리니, 마치 농담이라도 된다는 듯 나에게 검을 휘두르는 것이다.
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="style">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">문체 분석 및 개선 제안</h4>
                <p className="text-xs text-gray-600">현재 글의 문체는 구어체가 적절히 사용된 가벼운 톤으로, 독자와 친근하게 소통하는 느낌입니다. '참고로 딱히 괴롭힌 건 아니고'와 같은 표현은 캐릭터의 목소리를 잘 드러냅니다.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="plot">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">플롯 전개 방향</h4>
                <p className="text-xs text-gray-600">이 비유를 통해 주인공의 의붓형제들이 주인공을 대하는 태도와 주인공의 능력(시간 되돌리기)을 간접적으로 암시하고 있습니다. 이후 루카스와의 구체적인 대결 장면으로 연결하면 좋겠습니다.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditorDemo;
