import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    padding: 20,
    // border: '1px solid #DDD',
    color: 'white',
    // backgroundColor: 'azure'
    fontSize: 20,
};

const baconStyle = {
    marginRight: 15,
    padding: 20,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center'
};

const Footer = () => (
    <div style={baconStyle}>
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
        <br></br>
        <br></br>
        <small>&copy; 2019 Loranda Tax Service, LLC</small>
    </div>
);

export default Footer;