import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomePage/HomepageFeatures/HomePageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={
        'hero row text--center margin-vert--none padding-horiz--xl padding-vert--md'
      }
    >
      <div className={'col col--4 ' + clsx(styles['heroBanner'])}>
        <Heading as='h1' className='hero__title'>
          {siteConfig.tagline}
        </Heading>

        <p className='hero__subtitle'>Your entire PKI at your fingertips.</p>
      </div>

      <div className='col col--8'>
        <img src='/img/screenshots/dashboard.png' />
      </div>
    </header>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description='LeGo CertHub - Centralized ACME Certificate Management'
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
