import { useOutletContext } from "react-router-dom";
import { ArchivedStreams } from "@/components/profile/ArchivedStreams";

const Archives = () => {
  const { user } = useOutletContext<{ user: { id: string } }>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">配信アーカイブ</h2>
        <p className="text-muted-foreground">
          過去の配信アーカイブを確認できます
        </p>
      </div>

      <ArchivedStreams userId={user.id} />
    </div>
  );
};

export default Archives;