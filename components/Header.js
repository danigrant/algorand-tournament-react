import Link from 'next/link'

const Header = props => (
  <div className="font-color-green margin-top-med">
    <Link href="/">
      <div className="link inline-block font-weight-bold margin-left-med">Discover Algo</div>
    </Link>
    <div className="float-right inline-block">
      <Link href="/learn">
        <div className="link inline-block margin-right-med">Learn</div>
      </Link>
      <Link href="/competition/6">
        <div className="link inline-block margin-right-med">Submit Answer</div>
      </Link>
      <Link href="leaderboard">
        <div className="link inline-block margin-right-med">Leaderboard</div>
      </Link>
    </div>
  </div>
);

export default Header;
