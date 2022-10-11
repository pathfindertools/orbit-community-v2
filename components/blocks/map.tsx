import { useState } from 'react';

export const Map = ({ data, parentField = "" }) => {
  const [interactiveMap, setInteractiveMap] = useState(false);

  return (
    <div className="mt-12 w-full" onClick={() => setInteractiveMap(true)} onMouseLeave={() => setInteractiveMap(false)}>
      <iframe className={`w-full block relative ${interactiveMap ? 'pointer-events-auto' : 'pointer-events-none'}`} width="100%" height="700" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={data.mapUrl}></iframe>
    </div>
  )
}
