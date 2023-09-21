import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'One App. Manage all Investments.\n Feel Empowered',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (

      <p> Get your net worth at a glance, know your risk profile and get the right asset allocation to meet your goals</p>

    ),
  },
  {
    title: 'Data-Driven Insights Like Never Before!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (

        <p>Stay worry-free as we monitor your portfolio, detect risks, and send timely alerts!</p>

    ),
  },
  {
    title: 'Ensuring Privacy, Securing Your Trust',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (


          <p>No storing credentials, no data sales, read-only access – your security is priority</p>

    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
