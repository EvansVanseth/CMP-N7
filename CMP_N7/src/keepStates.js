import { fillAppDataLost, fillDataLost } from "./initialData"

/** Data State Manipulation */
export function loadAppData (defaultAppData) {
  const LocalAppData = window.localStorage.getItem('cmp-app-data')
  const LocalData = window.localStorage.getItem('cmp-data')

  if (LocalAppData) {
    return fillAppDataLost(JSON.parse(LocalAppData))
  }
  else if (LocalData) {
    const newLocalAppData = {
      selected: -1,
      fighters: [fillDataLost(JSON.parse(LocalData))] 
    }
    return newLocalAppData
  } else return defaultAppData
}

export function saveAppData (AppData) {
  window.localStorage.setItem('cmp-app-data', JSON.stringify(AppData))
}

export function resetAppData () {
  window.localStorage.removeItem('cmp-app-data')
}
