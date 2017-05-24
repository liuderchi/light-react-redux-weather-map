import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesCurve } from 'react-sparklines';

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
        <SparklinesCurve color={color} divisor="0.33" />
        <SparklinesReferenceLine type={type} />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
}
