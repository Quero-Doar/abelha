type Props = {
  label: string;
};

export const Badge: React.FC<Props> = ({ label }) => (
  <div className="bg-blue text-xs md:text-sm py-1 px-2 md:px-5 rounded-full text-white flex items-center">
    <p>{label}</p>
  </div>
);
