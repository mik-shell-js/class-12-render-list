// source: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react';

import AccordionPanel from './AccordionPanel'

export default function Accordion() {
  const [expandedPanel, setExpandedPanel] = useState(1);
  const accordianData = [
    { title: "Props",
      content: <p>React components use props to communicate with each other.</p>
    },
    { title: "State",
      content: <p>React components use props to communicate with each other.</p>
    }
  ];

  return (
    <div>
      {
        accordianData.map((item, index) => (
          <AccordionPanel
            key={index}
            title={item.title}
            isExpanded={expandedPanel === index}
            onExpand={() => setExpandedPanel(index)}
          >
            {item.content}
          </AccordionPanel>
        )
      )
      }
    </div>
  );
}
