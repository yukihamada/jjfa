import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrainingRecordForm } from "./TrainingRecordForm";
import { TrainingGoalForm } from "./TrainingGoalForm";

export const TrainingDashboard = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [goals, setGoals] = useState<any[]>([]);
  const [totalTokens, setTotalTokens] = useState(0);

  const fetchData = async () => {
    // トレーニング記録を取得
    const { data: recordsData } = await supabase
      .from("training_records")
      .select("*")
      .order("training_date", { ascending: false });

    if (recordsData) {
      setRecords(recordsData);
      setTotalTokens(recordsData.reduce((sum, record) => sum + (record.tokens_earned || 0), 0));
    }

    // 目標を取得
    const { data: goalsData } = await supabase
      .from("training_goals")
      .select("*")
      .order("end_date", { ascending: true });

    if (goalsData) {
      setGoals(goalsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>トレーニング記録</CardTitle>
          </CardHeader>
          <CardContent>
            <TrainingRecordForm onRecordAdded={fetchData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>目標設定</CardTitle>
          </CardHeader>
          <CardContent>
            <TrainingGoalForm onGoalAdded={fetchData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>獲得トークン</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{totalTokens} トークン</p>
          <p className="text-sm text-gray-500">10分のトレーニングごとに1トークン獲得できます</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>最近のトレーニング</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {records.slice(0, 5).map((record) => (
              <div key={record.id} className="border-b pb-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{record.training_type}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(record.training_date).toLocaleDateString()} - {record.duration}分
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">強度: {record.intensity}</p>
                    <p className="text-sm text-green-600">+{record.tokens_earned} トークン</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>目標進捗</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-medium">{goal.goal_type}</p>
                  <p className="text-sm">
                    期限: {new Date(goal.end_date).toLocaleDateString()}
                  </p>
                </div>
                <Progress value={(goal.current_value / goal.target_value) * 100} />
                <p className="text-sm text-gray-500">
                  {goal.current_value} / {goal.target_value}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};