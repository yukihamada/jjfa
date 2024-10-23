import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

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

const SAMPLE_DOJOS: Dojo[] = [
  {
    id: "1",
    name: "JJFA札幌道場",
    address: "北海道札幌市中央区南3条西2丁目",
    coordinates: { lat: 43.058434, lng: 141.354271 }
  },
  {
    id: "2",
    name: "JJFA東京道場",
    address: "東京都渋谷区神南1丁目",
    coordinates: { lat: 35.662158, lng: 139.701447 }
  },
  {
    id: "3",
    name: "JJFA大阪道場",
    address: "大阪府大阪市中央区心斎橋筋",
    coordinates: { lat: 34.671654, lng: 135.502165 }
  }
];

export const DojoSelector = ({ onSelect }: { onSelect: (dojo: Dojo) => void }) => {
  const [dojos, setDojos] = useState<Dojo[]>(SAMPLE_DOJOS);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // 現在地からの距離を計算して道場リストを更新
          const dojosWithDistance = SAMPLE_DOJOS.map(dojo => ({
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

  return (
    <div className="space-y-4">
      <Button
        onClick={getCurrentLocation}
        className="w-full flex items-center justify-center gap-2"
        disabled={loading}
      >
        <Navigation className="h-4 w-4" />
        {loading ? "位置情報を取得中..." : "現在地から近い道場を探す"}
      </Button>

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