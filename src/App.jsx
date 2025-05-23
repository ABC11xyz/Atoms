import React from 'react'
import { useRecoilState, useRecoilValue , RecoilRoot } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationAtom } from './atom'

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount , setMessagingCount] = useRecoilState(messagingAtom);
  const totalNotificationAtomCount = useRecoilValue(totalNotificationAtom);


  return <div>
  <button>Home</button>

  <button>Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount })</button>
  <button>Job ({jobAtomCount})</button>
  <button>Messaging ({messagingAtomCount})</button>
  <button>Notification ({notificationAtomCount})</button>

  <button 
   onClick={() => setMessagingCount ( c => c+ 1)}
  >Me ({totalNotificationAtomCount})</button>
  </div>
}

export default App
