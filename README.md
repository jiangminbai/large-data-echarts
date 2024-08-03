# large-data-echarts
large data for echarts

## 性能对比

#### 普通Array vs typedArray
参考Normal.jsx。此方案已经替换掉了appendData增量渲染了。
1. typedArray 千万条数据 1s内渲染完成
2. 而普通数组需要近20s才能渲染完成

#### lttb
在数据量远大于像素点的时候降采样策略，可以最大程度保持线条的趋势、形状和极值。缺点：tooltip功能会受限制

### large属性开启

渲染速度和交互速度都提升不少。数据量>5k时启用。原理是数据分片加载和分片渲染。