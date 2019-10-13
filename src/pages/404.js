import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container type="content" className="text-center">
        <h1>Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
