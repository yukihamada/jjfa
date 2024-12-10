import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Room } from "livekit-client";
import { getVideoPublishOptions } from "./hooks/config/livekitConfig";

interface StreamPreviewProps {
  streamKey: string;
  isStreaming: boolean;
}

export const StreamPreview = ({ streamKey, isStreaming }: StreamPreviewProps) => {
  const [isDAOMember, setIsDAOMember] = useState(false);

  useEffect(() => {
    const checkDAOMembership = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: daoMembership } = await supabase
          .from('dao_memberships')
          .select('status')
          .eq('user_id', user.id)
          .eq('status', 'active')
          .single();
        
        setIsDAOMember(!!daoMembership);
      }
    };

    checkDAOMembership();
  }, []);

  useEffect(() => {
    if (isStreaming) {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      const videoOptions = getVideoPublishOptions(isIOS, isAndroid, isDAOMember);
      console.log('Streaming with options:', {
        quality: isDAOMember ? 'high' : 'standard',
        ...videoOptions
      });
    }
  }, [isStreaming, isDAOMember]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <div id={`stream-${streamKey}`} className="w-full h-full" />
      {isDAOMember && isStreaming && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          高画質配信
        </div>
      )}
    </div>
  );
};