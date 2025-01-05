import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { NgoResponse } from "@/lib/schemas/ngo";

import { Badge } from "./Badge";
import { Tooltip } from "./Tooltip";
import { LikeIcon } from "./icons/Like";

type Props = {
  ngos: NgoResponse[];
};

export const NgoCards: React.FC<Props> = ({ ngos }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-self-center">
    {ngos.map(({ id, name, categories }) => (
      <Card key={id} className="w-40 md:w-52">
        <NgoCardHeader picture={undefined} isLiked={false} />

        <NgoCardFooter name={name} categories={categories} />
      </Card>
    ))}
  </div>
);

const NgoCardHeader: React.FC<{ isLiked: boolean; picture?: string }> = ({
  picture,
  isLiked,
}) => (
  <CardContent
    className={cn(
      "relative h-24 md:h-28 p-3 bg-pink border border-pink-dark border-b-0 rounded-t-lg",
      { "bg-transparent": picture }
    )}
  >
    {picture && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-65 rounded-t-lg"
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}

    <div className="relative z-10">
      <LikeIcon className="relative top-0" isFilled={isLiked} />
    </div>
  </CardContent>
);

const NgoCardFooter: React.FC<Pick<NgoResponse, "categories" | "name">> = ({
  name,
  categories,
}) => (
  <CardContent className="bg-gray flex flex-col items-center justify-center space-y-2 p-2 md:p-4 border border-gray-darklight border-t-0 rounded-b-lg">
    <Tooltip content={name}>
      <p className="opacity-50 text-center text-xs md:text-lg truncate w-28 md:w-32">
        {name}
      </p>
    </Tooltip>

    <div className="flex space-x-2">
      <Badge label={categories[0].name} />
      {categories.length > 1 && (
        <Tooltip
          content={categories
            .slice(1)
            .map((item) => item.name)
            .join(", ")}
        >
          <Badge label={`+${categories.length - 1}`} />
        </Tooltip>
      )}
    </div>
  </CardContent>
);
