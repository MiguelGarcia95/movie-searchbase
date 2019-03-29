import React from 'react';

const UserPanel = ({account}) => {
  return (
    <section className="user_panel">
      <section className="user_avatar"><img src={`https://gravatar.com/avatar/${account.avatar.gravatar.hash}?d=identicon`} alt={`${account.username} avatar`} /></section>
      <section className="user_name"><h1>{account.username}</h1></section>
    </section>
  )
};

export default UserPanel;