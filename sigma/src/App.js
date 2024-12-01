import React from 'react';

const Banner = () => <header style={{ backgroundColor: 'blue', padding: '20px' }}>baner</header>;

const Content = () => (
  <main style={{ flex: 1, padding: '20px' }}>arka gdynia</main>
);

const Sidebar = ({ position }) => (
  <aside style={{ width: '200px', backgroundColor: 'yellow', padding: '20px' }}>
    {position === 'left' ? 'lewo' : 'prawo'}
  </aside>
);

const Footer = () => <footer style={{ backgroundColor: 'blue', padding: '20px' }}>stopka</footer>;

const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Banner />
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar position="left" />
      <Content />
      <Sidebar position="right" />
    </div>
    <Footer />
  </div>
);

export default Layout;