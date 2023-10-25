import React, { useState } from 'react';

function TabComponent() {
  const tabs = [
    { id: 0, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 1, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 2, label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tab-menu">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={activeTab.id === tab.id ? 'active' : ''}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{activeTab.content}</div>
    </div>
  );
}

export default TabComponent;
