import React from 'react';

const SidepanelPanel = ({title, count}) => {
  return (
    <section className="content_panel">
      <section className="panel_info">
        <h2 className="count">{count}</h2>
        <h2 className="category">{title}</h2>
      </section>
    </section>
  )
};

export default SidepanelPanel;