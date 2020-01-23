import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    padding: 20,
    // border: '1px solid #DDD',
    color: 'black',
    backgroundColor: 'azure'
};

const Footer = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/contact">
            <a style={linkStyle}>Contact</a>
        </Link>
        <Link href="#">
            <a style={linkStyle}>Terms and Conditions</a>
        </Link>
        <Link href="#">
            <a style={linkStyle}>Privacy Policy</a>
        </Link>
        <p style={linkStyle}>&copy; 2019 Loranda Tax Service, LLC</p>
    </div>
);

export default Footer;