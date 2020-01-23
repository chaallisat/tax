import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  padding: 20,
  border: '1px solid #DDD',
  color: 'black',
  backgroundColor: 'azure'
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;