import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  description: string;
  role?: string;
  imagePath?: string;
}

export const TeamMember = ({ name, description, role, imagePath }: TeamMemberProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <div className="mb-4">
          {imagePath ? (
            <img 
              src={imagePath} 
              alt={name} 
              className="w-32 h-32 rounded-full mx-auto object-cover object-top"
            />
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <CardTitle className="text-slate-800">{name}</CardTitle>
        {role && (
          <p className="text-sm font-medium text-slate-600 mt-1">{role}</p>
        )}
        <CardDescription className="text-slate-600 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};