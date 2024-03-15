  // valores por defecto de la aplicación
  export const defaultData = {
    turn: 0,
    inTurn: false,
    playerName: 'Jugador',
    lifeValue: 20,
    lifeTotal: 20,
    lifeBP: 0,
    lifeRE: 0,
    shldValue: 20,
    shldTotal: 20,
    shldBP: 0,
    shldRE: 2,
    shldBroke: 0,
    rcPIndex: -1,
    rcPTurns: 0,
    rcPFirst: false,
    numCarga: 0,
    powers: [],
    guns: []
  }

  export function fillDataLost(data) {
    if (data.turn===undefined) data.turn = defaultData.turn
    if (data.inTurn===undefined) data.inTurn = defaultData.inTurn
    if (data.playerName===undefined) data.playerName = defaultData.playerName
    if (data.lifeValue===undefined) data.lifeValue = defaultData.lifeValue
    if (data.lifeTotal===undefined) data.lifeTotal = defaultData.lifeTotal
    if (data.lifeBP===undefined) data.lifeBP = defaultData.lifeBP
    if (data.lifeRE===undefined) data.lifeRE = defaultData.lifeRE
    if (data.shldValue===undefined) data.shldValue = defaultData.shldValue
    if (data.shldTotal===undefined) data.shldTotal = defaultData.shldTotal
    if (data.shldBP===undefined) data.shldBP = defaultData.shldBP
    if (data.shldRE===undefined) data.shldRE = defaultData.shldRE
    if (data.shldBroke===undefined) data.shldBroke = defaultData.shldBroke
    if (data.rcPIndex===undefined) data.rcPIndex = defaultData.rcPIndex
    if (data.rcPTurns===undefined) data.rcPTurns = defaultData.rcPTurns
    if (data.rcPFirst===undefined) data.rcPFirst = defaultData.rcPFirst
    if (data.numCarga===undefined) data.numCarga = defaultData.numCarga
    if (data.powers===undefined) data.powers = defaultData.powers
    if (data.guns===undefined) data.guns = defaultData.guns
    return data
  }