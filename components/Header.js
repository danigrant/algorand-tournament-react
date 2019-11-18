import Link from 'next/link'

const Header = props => (
  <div className="header-width font-color-green margin-top-med">
    <Link href="/">
      <div className="logo link inline-block font-weight-bold margin-left-med">Discover Algo</div>
    </Link>
    <div className="header-items float-right inline-block">
      <Link href="/learn/forfun">
        <div className="link inline-block margin-right-med">Learn</div>
      </Link>
      <Link href="/competition/6">
        <div className="link inline-block margin-right-med">Submit Answer</div>
      </Link>
      <Link href="/leaderboard/hooray">
        <div className="link inline-block margin-right-med">Leaderboard</div>
      </Link>
    </div>
  </div>
);

export default Header;
