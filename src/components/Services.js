import React from 'react';
import { ServiceConsumer } from '../Context';

export default function Services() {
  return (
    <ServiceConsumer>
      {value => {
        const { title, company, info } = value.detailService;
        return (
          <div>
            <h1>{title}</h1>
            <span>{company}</span>
            <p>{info}</p>
          </div>
        );
      }}
    </ServiceConsumer>
  );
}
