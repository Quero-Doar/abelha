import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement>;

export const MailIcon: React.FC<Props> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 52 40"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0 w-5 h-5 lg:w-8 lg:h-8", className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.625 1.98167L2.4375 0H49.5625L51.375 1.98167V37.6518L49.5625 39.6335H2.4375L0.625 37.6518V1.98167ZM4.25 6.08374V35.6701H47.75V6.0877L27.1238 23.3838H24.9125L4.25 6.08374ZM44.2337 3.96335H7.76625L26 19.2975L44.2337 3.96335Z"
      fill="white"
    />
  </svg>
);
