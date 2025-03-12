/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "@/components/card/Card";
import { technologies } from "@/helpers/technologies";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  type: string;
}

const TechnologySection = ({ title, type }: Props) => {
  const t = useTranslations('Technologies');

  const filteredTechs = technologies.filter((tech) => tech.type === type);

  return (
    <div className="flex flex-col w-full mt-2 gap-4 rounded-lg p-4 h-fit">
      {/* <h1 className="text-xl font-semibold text-center">{title}</h1> */}

      <div className="flex flex-col md:flex-row gap-2 mx-auto justify-between items-center">
        {filteredTechs.map((tech) => (
          <Card
          key={tech.id}
          id={tech.id}
          name={tech.name}
          description={t(tech.description)}
          image={tech.image}
          url={tech.url}
          />
        ))}
      </div>
    </div>

  );
};

export default TechnologySection;