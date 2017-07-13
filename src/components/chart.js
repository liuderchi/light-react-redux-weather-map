import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesCurve } from 'react-sparklines';
import { compose, pure, defaultProps, setPropTypes } from 'recompose'

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const enhance = compose(
  pure,
  defaultProps({
    height: 120,
    width: 180,
    color: "green",
    type: "avg",
    units: "",
  }),
  setPropTypes({
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string,
    type: PropTypes.string,
    units: PropTypes.string,
  })
)

const Chart = ({ height, width, data, color, type, units }) => (
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

export default enhance(Chart)
