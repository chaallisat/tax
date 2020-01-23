
const layoutStyle = {
  margin: 20,
  padding: 20,
//   border: '1px solid #DDD',
  backgroundColor: 'green'
};

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;

