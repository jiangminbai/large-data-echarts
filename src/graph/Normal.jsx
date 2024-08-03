import * as echarts from "echarts";
import { useCallback, useEffect, useRef } from "react";
import CommonChart from "../CommonChart";

function Normal (props) {

  const ref = useRef(null)

  const refresh = useCallback(() => {
    const option = getOption()
    const myChart = echarts.init(ref.current);
    myChart.setOption(option);
  }, [])

  useEffect(() => {
    refresh()
  }, [])

  return (
    <CommonChart refresh={refresh}>
      <div className="container" ref={ref}>

      </div>
    </CommonChart>
  )
}

export default Normal

function getOption () {
  const POINT_COUNT = 1e7;

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      }
    },
    legend: {},
    dataZoom: [{
      show: true,
      realtime: true,
      // showDataShadow: false,
      start: 10,
      end: 60
    }],
    xAxis: [{
      type: 'time'
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [],
    animation: false
  };

  var lineStyle = {
    normal: {
      width: 2,
      opacity: 1
    }
  };

  var oneDay = 24 * 3600 * 1000;
  var base = +new Date(1987, 9, 3);
  var y = Math.random() * 1000;
  var values = new Float64Array(POINT_COUNT * 2); // 替换成Array
  var off = 0;
  for (var j = 0; j < POINT_COUNT; j++) {
    y += Math.round(10 + Math.random() * (-10 - 10));
    values[off++] = base += oneDay;
    values[off++] = y;
  }

  option.series.push({
    name: 'line',
    type: 'line',
    hoverAnimation: false,
    showSymbol: false,
    sampling: 'lttb',
    dimensions: ['date', 'value'],
    encode: {
      x: 'date',
      y: 'value'
    },
    data: values,
    lineStyle: lineStyle
  });

  return option
}