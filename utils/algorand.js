async function getAlgorandAddressBalance(addr) {
  let res = await fetch(`https://betanet-algorand.api.purestake.io/ps1/v1/account/${addr}`, {
    headers: { 'x-api-key': process.env.PURESTAKE_API_KEY }
  })
  let json = await res.json()
  return json.amount * 100000 // json.amount is in microalgos, 100k microalgos is 1 algo
}

module.exports = { getAlgorandAddressBalance }
