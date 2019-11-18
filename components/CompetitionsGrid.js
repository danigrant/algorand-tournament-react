const competitions = [
  {
    "number":6,
    "escrow_addr":"QQSJBNFSTXLT5KKXSZRXLKQSW7MCHNEJM7ABKT6R7SZPD4ASUYJDJFWW3U"
  },
  {
    "number":114,
    "escrow_addr":"77UY3RJHIYUVTRJ6EUR3KK2JF5LD2IXAD3VYH6TBT364G7VSAATJLXWCDQ"
  },
  {
    "number":165,
    "escrow_addr":"NGEASWTLTEK6OUYN7RZBVEZ7B7JHZPQAUDRX4ZPW65NBLE3YNCZYXSKGXA"
  },
  {
    "number":390,
    "escrow_addr":"5YKX62DKK3UCKJ3FSCS5FQ67YSFMOE4HTEZLJUUHNWJ5G4GRVEDFWTJ3XE"
  },
  {
    "number":579,
    "escrow_addr":"TIZ3CAWJ3ZIILE44GG7Y2E2TKD2DANO4UIC3PZGNUBOFUWDSSU34OVC4WU"
  },
  {
    "number":627,
    "escrow_addr":"UJNNFAK5KEHANPV4PQVXV7L5NTMTQT7YOWEOSRYF4OEDGFHJRHMEIA46OE"
  },
  {
    "number":633,
    "escrow_addr":"7GC6XERPHLJYJD74M5AMWJ4BJY3QOS66KOJ6SLEUP4DSLCIRRMNAQRGRUE"
  },
  {
    "number":732,
    "escrow_addr":"ROBZMNVTF5EBMP4AQVFBEKQR6VOKS65V6LS632PNPBOCHWX45XTJ3ATGLU"
  },
  {
    "number":906,
    "escrow_addr":"O52IBHEHCMCVNE7SJ7LD3K6HPMS5ODZPSINHCIM4YP6JSYIM3BX3QCNI54"
  },
  {
    "number":921,"escrow_addr":"UF2GR3437BNDI6HL5R2AGP3C2HFDSQF3EXHXXL2AKNRWYQU6Q5GINPSVUU"
  },
  {
    "number":975,
    "escrow_addr":"NE2KRDSM43K75TEP2SMHDMQS4E7R5NOTLB45B4PHOSZZMSK4HPXA2MWOVI"
  }
]

const CompetitionsGrid = props => {
  return (
    <div>
    {
      competitions.map(c => {
        return (
          <div className="background-light-blue green-border rounded-border">
            <p className="font-color-grey"></p>
          </div>
        )
      })
    }
    </div>
  )
}

export default CompetitionsGrid
