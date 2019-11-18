const firebase = require('firebase')

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

async function saveSolutionToDB() {



}

// let snapshot = await usersRef.where('email', '==', email).get()

async function getCompetitions() {
  let snapshot = await competitionsRef.orderBy('number').get()
  let data = []
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.push({
      "number": docData.number,
  		"algorandEscrowAddress": docData.algorandEscrowAddress,
  		"isSolved": docData.isSolved,
      "solverName": docData.solverName ? docData.solverName : undefined,
      "solution": docData.solution ? docData.solution : {},
      "solveDate": docData.solveDate ? docData.solveDate : undefined
    })
  })
  return data
}

module.exports = { getCompetitions }
