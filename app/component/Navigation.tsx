import * as React from 'react';
import Gravatar from 'react-gravatar';
import { Link, NavLink } from 'remix';
import LogoutIcon from '@heroicons/react/outline/LogoutIcon';
import UserIcon from '@heroicons/react/outline/UserIcon';
import UsersIcon from '@heroicons/react/outline/UsersIcon';
import UserGroup from '@heroicons/react/outline/UserGroupIcon';
import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
import ArchiveIcon from '@heroicons/react/outline/ArchiveIcon';
import FingerPrintIcon from '@heroicons/react/outline/FingerPrintIcon';

import { useCurrentUser } from '~/context/CurrentUser';

export const Navigation = () => {
  const user = useCurrentUser();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 whitespace-nowrap">
        <Link to="/" prefetch="intent">
          <h1 className="text-lg font-bold">
            <img src="/favicon.ico" alt="logo" className="mask mask-circle w-10 inline-block mr-5" />
            Turbo Remote Cache
          </h1>
        </Link>
      </div>
      <div className="flex-none">
        {user && (
          <ul className="menu menu-horizontal p-0 gap-1">
            <li>
              <NavLink to="/users">
                <UsersIcon className="h-5" />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams">
                <UserGroup className="h-5" />
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink to="/sessions">
                <LightningBoltIcon className="h-5" />
                Sessions
              </NavLink>
            </li>
            <li>
              <NavLink to="/artifacts">
                <ArchiveIcon className="h-5" />
                Artifacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/tokens">
                <FingerPrintIcon className="h-5" />
                Tokens
              </NavLink>
            </li>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <Gravatar className="w-10 rounded-full" email={user.email} />
              </label>
              <ul tabIndex={0} className="mt-3 p-2 menu menu-compact shadow-xl dropdown-content bg-base-100 rounded-box w-52">
                <li className="w-full">
                  <Link className="flex justify-between w-full" to="/profile">
                    Profile
                    <UserIcon className="h-5" />
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="flex justify-between w-full" to="/logout">
                    Logout
                    <LogoutIcon className="h-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;