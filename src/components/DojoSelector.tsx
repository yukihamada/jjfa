import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { DojoRegistrationDialog } from "./DojoRegistrationDialog";
import { supabase } from "@/integrations/supabase/client";

interface Dojo {
  id: string;
  name: string;
  address: string;
  distance?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const DojoSelector = ({ onSelect }: { onSelect: (dojo: Dojo) => void }) => {
  const [dojos, setDojos] = useState<Dojo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDojos = async () => {
    const { data, error } = await supabase
      .from('dojos')
      .select('*')
      .eq('status', 'approved');
    
    if (error) {
      console.error('Error fetching dojos:', error);
      return;
    }

    const formattedDojos = data.map(dojo => ({
      id: dojo.id,
      name: dojo.name,
      address: dojo.address || '',
      coordinates: { lat: 0, lng: 0 } // You might want to add actual coordinates to your dojos table
    }));

    setDojos(formattedDojos);
  };

  const getCurrentLocation = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // 現在地からの距離を計算して道場リストを更新
          const dojosWithDistance = dojos.map(dojo => ({
            ...dojo,
            distance: calculateDistance(
              latitude,
              longitude,
              dojo.coordinates.lat,
              dojo.coordinates.lng
            )
          })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

          setDojos(dojosWithDistance);
          setLoading(false);
        },
        (error) => {
          console.error("位置情報の取得に失敗しました:", error);
          setLoading(false);
        }
      );
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // 地球の半径（km）
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180);
  };

  // 初回マウント時に道場リストを取得
  useEffect(() => {
    fetchDojos();
  }, []);

  return (
    <div className="space-y-4">
      <Alert className="bg-blue-50 border-blue-200">
        <InfoIcon className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          現在、JJFAでは提携道場を募集しています。道場運営者の方は、以下のフォームから新規登録をお願いします。
        </AlertDescription>
      </Alert>

      <div className="space-y-2">
        <Button
          onClick={getCurrentLocation}
          className="w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          <Navigation className="h-4 w-4" />
          {loading ? "位置情報を取得中..." : "現在地から近い道場を探す"}
        </Button>

        <DojoRegistrationDialog onSuccess={fetchDojos} />
      </div>

      <div className="grid gap-4">
        {dojos.map((dojo) => (
          <Card
            key={dojo.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelect(dojo)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{dojo.name}</h3>
                  <p className="text-sm text-gray-600">{dojo.address}</p>
                  {dojo.distance && (
                    <p className="text-sm text-gray-500 mt-1">
                      現在地から約{Math.round(dojo.distance)}km
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};