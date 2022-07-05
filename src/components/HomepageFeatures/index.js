import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Foundation Policy',
    Svg: require('@site/static/img/FPS.svg').default,
    description: (
      <>
        View all enacted legislation of the foundation.
      </>
    ),
  },
  {
    title: 'Department Policy',
    Svg: require('@site/static/img/FPS.svg').default,
    description: (
      <>
        View all enacted policy within a department.
      </>
    ),
  },
  {
    title: 'Wiki',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Learn about the foundation's history and
        help develop new pages.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
