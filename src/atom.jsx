import {atom, selector} from 'recoil'

export const networkAtom = atom({
  key : "networkAtom",
  default : 102,
})

export const jobAtom = atom({
  key : "jobAtom",
  default : 0,
})

export const notificationAtom = atom({
  key : "notificationAtom",
  default : 12,
})

export const messagingAtom = atom({
  key : "messagingAtom",
  default : 0,
})

export const totalNotificationAtom  = selector({
  key : "totalNotificationAtom",
  get : ({get}) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationAtomCount = get(notificationAtom);
    return networkAtomCount + messagingAtomCount +  jobAtomCount + notificationAtomCount;
  }
})