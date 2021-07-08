import React from 'react';
import Profile from './components/social-profile/Profile';
import user from './user.json';
import Statistic from './components/statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendsList from './components/friend-list/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './transactions.json';

const App = () => (
  <div>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistic title="UPLOAD STATS" stats={statisticalData} />

    <FriendsList friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);

export default App;
