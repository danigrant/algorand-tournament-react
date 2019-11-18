import Link from 'next/link'

const CompetitionsGrid = props => {
  return (
    <div className="competition-grid-wrapper margin-top-lrg">
    {
      props.competitions.map((c, index) => {
        return (
          <div key={index} className="competition-card background-light-blue green-border rounded-border margin-bottom-med">
            <p className="font-color-grey"><span className="font-color-yellow font-weight-bold">{c.number}</span> = a³ + b³ + c³</p>
            <p className="font-color-grey">Prize Pool: <span className="font-color-white">0 Algos</span></p>
            <p className="margin-bottom-none font-color-yellow font-size-sml">74d1091b66c0e09678687a7d443be273bd2c9514e5c7cb9</p>
            <p className="margin-top-none font-color-grey font-size-sml">send algos to this addr to increase the prize pool</p>
            <Link href={`/competition/${c.number}`}>
              <p className="font-color-grey link">Submit Answer ></p>
            </Link>
          </div>
        )
      })
    }
    </div>
  )
}

export default CompetitionsGrid
