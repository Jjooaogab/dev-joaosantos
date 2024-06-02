import { ElementType } from "react";

export default function Skills({ skill, icon: Icon }: { skill: string; icon: ElementType }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Icon className="h-12 w-12" />
      <h3 className="text-lg font-bold">{skill}</h3>
    </div>
  );
}
