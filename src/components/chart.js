import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default ({
    height=120,
    width=180,
    data,
    color="green",
    type="avg",
    units=''
  }) => {
  return (
    <div>
      <Sparklines
        height={height}
        width={width}
        data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type={type} />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
}
