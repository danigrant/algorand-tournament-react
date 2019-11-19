const firebase = require('firebase')
import { getAlgorandAddressBalance } from './algorand'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "algorand-tournament.firebaseapp.com",
  databaseURL: "https://algorand-tournament.firebaseio.com",
  projectId: "algorand-tournament",
  storageBucket: "algorand-tournament.appspot.com",
  messagingSenderId: "283477236370",
  appId: "1:283477236370:web:c7558718f40fabd7cf244b"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const competitionsRef = db.collection('competitions');

async function getCompetitions() {
  let snapshot = await competitionsRef.orderBy('number').get()
  let data = []
  await snapshot.forEach(async (doc) => {
    let docData = doc.data()

    await data.push({
      "number": docData.number,
  		"algorandEscrowAddress": docData.algorandEscrowAddress,
  		"isSolved": docData.isSolved,
      "solverName": docData.solverName ? docData.solverName : undefined,
      "solution": docData.solution ? docData.solution : {},
      "solveDate": docData.solveDate ? docData.solveDate : undefined
    })
  })

  // now get balances
  await data.forEach(async (escrowAccount, index) => {
    let algoBalance = await getAlgorandAddressBalance(escrowAccount.algorandEscrowAddress)
    Object.assign(data[index], { balance: algoBalance })
  })

  if (!data[0].balance) {
    await new Promise(cb => setTimeout(cb, 800))
  }

  console.log('in getCompetitions: ', data[3]); // this prints the balance correctly
  console.log('in getCompetitions: ', data[3].balance); // this prints undefined (unless i wait a whole second)
  return data
}

module.exports = { getCompetitions }
