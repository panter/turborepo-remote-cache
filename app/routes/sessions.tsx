import { type LoaderFunction } from 'remix';
import { useSessionsTable } from '~/hooks/table/useSessionsTable';
import { requireCookieAuth } from '~/services/authentication.server';
import { getSessions, getSessionsCount } from '~/services/session.server';
import { getPaginationFromRequest } from '~/utils/pagination';
import { getOrderByFromRequest } from '~/utils/sort';
import { useTablePageLoaderData } from '~/hooks/useTablePageLoaderData';
import { TablePage } from '~/component/TablePage';

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireCookieAuth(request);
  const { skip, take } = getPaginationFromRequest(request);
  const orderBy = getOrderByFromRequest(request);
  const [items, count] = await Promise.all([getSessions(skip, take, orderBy), getSessionsCount()]);
  return {
    items,
    count,
  };
};

export default function Sessions() {
  const { items, count } = useTablePageLoaderData<Awaited<ReturnType<typeof getSessions>>[number]>();
  const { tableProps, paginationProps } = useSessionsTable(items, count);
  return <TablePage title="All sessions" count={count} tableProps={tableProps} paginationProps={paginationProps} />;
}
