import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Completely Self Contained',
    Svg: require('@site/static/img/features/user_with_much_info.svg').default,
    description: (
      <>
        Run your Public Key Infrastructure (PKI) from one unified interface.
        Create, manage, and retire keys, ACME accounts, certificates, and more.
      </>
    ),
  },
  {
    title: 'Secure API For Clients',
    Svg: require('@site/static/img/features/server_with_clients.svg').default,
    description: (
      <>
        Individual consumers of keys and certificates retrieve them from Cert Warden
        via a straighforward API call using a scoped API key. Keys can
        be easily rotated for added security or in case of compromise.
      </>
    ),
  },
  {
    title: 'Fully Automated',
    Svg: require('@site/static/img/features/wrench_and_gear.svg').default,
    description: (
      <>
        Once you've configured Cert Warden it handles certificate renewals
        completely autonomously.
      </>
    ),
  },
  {
    title: 'Pick Your Favorite Provider',
    Svg: require('@site/static/img/features/person_with_choices.svg').default,
    description: (
      <>
        Cert Warden is fully compliant with RFC 8555 which means it will work
        with any compliant ACME provider you choose.
      </>
    ),
  },
  {
    title: 'Dozens of Challenge Methods',
    Svg: require('@site/static/img/features/checked_off_list.svg').default,
    description: (
      <>
        Cert Warden has a built in http server for http-01 challenges and
        supports dozens of DNS providers for dns-01 challenges.
      </>
    ),
  },
  {
    title: 'Robust Logging',
    Svg: require('@site/static/img/features/logs.svg').default,
    description: (
      <>
        Robust logging ensures you know who or what is accessing your sensitive
        information. Detailed debug logging can be enabled for even more insight
        and troubleshooting.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles['featureSvg']} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={styles['features']}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
