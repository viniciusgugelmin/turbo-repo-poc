import { useEffect, useState } from 'react';
import '../templates/home'

function App() {
  const [tab, setTab] = useState('execucoes');

  useEffect(() => {
    const handleTabClick = (event) => {
      const name = event.target.getAttribute('name');
      if (name) {
        setTab(name);
      }
    };

    const tabs = document.getElementById('article-tabs');
    const tabElements = tabs.children;

    for (const tabElement of tabElements) {
      if (tabElement.nodeType === 1) {
        tabElement.addEventListener('click', handleTabClick);
      }
    }

    return () => {
      for (const tabElement of tabElements) {
        if (tabElement.nodeType === 1) {
          tabElement.removeEventListener('click', handleTabClick);
        }
      }
    };
  }, []);

  useEffect(() => {
    const currTab = document.getElementById(`tab-${tab}`);
    if (currTab) {
      const previousTab = document.querySelector('.article__tabs__item-active');
      if (previousTab) {
        previousTab.classList.remove('article__tabs__item-active');
      }

      currTab.classList.add('article__tabs__item-active');
    }
  }, [tab]);

  const templates = {
    execucoes: <home-executions></home-executions>
  }

  return (
    <div>
      {templates[tab]}
    </div>
  )
}

export { App };
