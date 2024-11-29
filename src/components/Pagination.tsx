import { cn } from "@/lib/utils";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadPagination,
} from "./ui/pagination";

type Props = {
  url: string;
  pagesLength: number;
  currentPage: number;
};

/**
 * Generic QD pagination component
 * @param url - The url of the without the page number
 * @param pagesLength - The total number of pagesLength
 * @param currentPage - The current page number
 */
export const Pagination: React.FC<Props> = ({
  url,
  currentPage,
  pagesLength,
}) => {
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(currentPage + 2, pagesLength);

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <ShadPagination>
      <PaginationContent>
        <PaginationPrevious
          href={url + (currentPage - 1)}
          className={cn({ hidden: currentPage <= 1 })}
        />
        {currentPage - 2 > 1 && <PaginationEllipsis />}

        {pagesToShow.map((page) => (
          <PaginationItem
            key={page}
            className="active:border active:border-blue-dark"
          >
            <PaginationLink isActive={page === currentPage} href={url + page}>
              <p
                className={cn("text-xs lg:text-sm text-black font-medium", {
                  "opacity-40": page !== currentPage,
                })}
              >
                {page}
              </p>
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage + 2 < pagesLength && <PaginationEllipsis />}

        <PaginationNext href={url + (currentPage + 1)} />
      </PaginationContent>
    </ShadPagination>
  );
};
