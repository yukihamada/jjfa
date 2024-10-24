import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExternalLinks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Follow Us on Social Media</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full max-w-xs"
                  onClick={() => window.open('https://twitter.com/jjfa_official', '_blank')}
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="w-full max-w-xs"
                  onClick={() => window.open('https://www.instagram.com/jjfa_official/', '_blank')}
                >
                  Instagram
                </Button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Discord Community</h3>
              <Button
                variant="outline"
                className="w-full max-w-xs"
                onClick={() => window.open('https://discord.gg/jjfa', '_blank')}
              >
                Discord Server
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExternalLinks;