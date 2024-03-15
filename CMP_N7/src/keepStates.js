import { fillDataLost } from "./initialData"

/** Data State Manipulation */
export function loadData (defaultData) {
  const LocalData = window.localStorage.getItem('cmp-data')
  if (LocalData) {
    return fillDataLost(JSON.parse(LocalData))
  }
  else return defaultData
}
export function saveData (Data) {
  window.localStorage.setItem('cmp-data', JSON.stringify(Data))
}

export function resetData () {
  window.localStorage.removeItem('cmp-data')
}
