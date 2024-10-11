import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

import { Badge } from "./Badge";
import { LikeIcon } from "./icons/Like";

type Props = {
  categories: string[];
  ngoName: string;
  isLiked: boolean;
  picture?: string;
};

const NgoCardHeader: React.FC<Pick<Props, "picture" | "isLiked">> = ({
  picture,
  isLiked,
}) => (
  <CardContent
    className={cn(
      "relative h-24 md:h-32 p-3 bg-pink border border-pink-dark border-b-0 rounded-t-lg",
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

const NgoCardFooter: React.FC<Pick<Props, "categories" | "ngoName">> = ({
  ngoName,
  categories,
}) => (
  <CardContent className="bg-gray flex flex-col items-center justify-center space-y-2 p-2 md:p-4 border border-gray-darklight border-t-0 rounded-b-lg">
    <span className="opacity-50 text-sm md:text-2xl">{ngoName}</span>

    <div className="flex space-x-2">
      <Badge label={categories[0]} />
      {categories.length > 1 && <Badge label={`+${categories.length - 1}`} />}
    </div>
  </CardContent>
);

export const NgoCard: React.FC<Props> = ({
  picture,
  ngoName,
  categories,
  isLiked,
}) => (
  <Card className="w-40 md:w-60">
    <NgoCardHeader picture={picture} isLiked={isLiked} />

    <NgoCardFooter ngoName={ngoName} categories={categories} />
  </Card>
);
