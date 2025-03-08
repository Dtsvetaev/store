import { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store({ products }) {
  const [viewType, setViewType] = useState('view_module');

  const toggleView = () => {
    setViewType(prev => prev === 'view_module' ? 'view_list' : 'view_module');
  };

  return (
    <div className="store-container">
      <IconSwitch icon={viewType} onSwitch={toggleView} />
      {viewType === 'view_module'
        ? <CardsView cards={products} />
        : <ListView items={products} />
      }
    </div>
  );
}



