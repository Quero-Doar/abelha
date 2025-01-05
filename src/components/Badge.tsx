import { Tooltip } from "./Tooltip";

type Props = {
  label: string;
};

export const Badge: React.FC<Props> = ({ label }) => (
  <div className="bg-blue py-1 md:py-2 px-2 md:px-5 rounded-full flex items-center">
    <Tooltip content={label}>
      <p className="text-xs text-white text-center truncate max-w-24 md:max-w-32">
        {label}
      </p>
    </Tooltip>
  </div>
);
