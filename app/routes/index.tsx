import { json, Link, type LoaderFunction, useLoaderData } from 'remix';
import { formatDuration } from '~/utils/intl';
import { getTimeSaved } from '~/services/events.server';
import { requireCookieAuth } from '~/services/authentication.server';

export const loader: LoaderFunction = async ({ request, params, context }) => {
  await requireCookieAuth(request);
  const timeSsaved = await getTimeSaved();
  return json(timeSsaved);
};

export default function Index() {
  const data = useLoaderData<any[]>();

  return (
    <div>
      <h1>TurboRepo Remote Cache</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Local hits</th>
            <th>Local saved</th>
            <th>Remote hits</th>
            <th>Remote saved</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ teamSlug, localHits, localDuration, remoteHits, remoteDuration }) => (
            <tr key={teamSlug}>
              <td>
                <Link to={teamSlug}>{teamSlug}</Link>
              </td>
              <td>{localHits}</td>
              <td>{formatDuration(localDuration)}</td>
              <td>{remoteHits}</td>
              <td>{formatDuration(remoteDuration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
