import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrainingRecordForm } from "./TrainingRecordForm";
import { TrainingRecordList } from "./TrainingRecordList";

export const TrainingTracker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>トレーニング記録</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TrainingRecordForm />
        <TrainingRecordList />
      </CardContent>
    </Card>
  );
};