import { SearchNgo } from "./_components/SearchNgo";
import { listNgos, searchNgos } from "@/server/ports/ngo";
import { SearchNgoResult } from "./_components/SearchNgoResult";

type SearchParams = {
  search?: string;
};

type Props = {
  searchParams: SearchParams;
};

// TODO Add pagination to SearchNgoResult component
// TODO When it has internal server error page, add it here
export default async function FindNgosPage({ searchParams }: Props) {
  if (!searchParams.search) {
    const { data } = await listNgos();

    return <SearchNgo ngos={data!.users} />;
  }

  const { data } = await searchNgos({
    search: searchParams.search,
    page: 1,
    limit: 9,
  });

  return <SearchNgoResult ngos={data!.users} />;
}
