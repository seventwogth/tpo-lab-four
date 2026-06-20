/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 360.0, "minX": 0.0, "maxY": 11688.0, "series": [{"data": [[0.0, 360.0], [0.1, 362.0], [0.2, 366.0], [0.3, 371.0], [0.4, 375.0], [0.5, 377.0], [0.6, 382.0], [0.7, 385.0], [0.8, 386.0], [0.9, 388.0], [1.0, 390.0], [1.1, 392.0], [1.2, 394.0], [1.3, 396.0], [1.4, 397.0], [1.5, 400.0], [1.6, 403.0], [1.7, 405.0], [1.8, 407.0], [1.9, 411.0], [2.0, 414.0], [2.1, 416.0], [2.2, 418.0], [2.3, 419.0], [2.4, 421.0], [2.5, 424.0], [2.6, 428.0], [2.7, 431.0], [2.8, 433.0], [2.9, 434.0], [3.0, 436.0], [3.1, 437.0], [3.2, 439.0], [3.3, 442.0], [3.4, 444.0], [3.5, 446.0], [3.6, 450.0], [3.7, 451.0], [3.8, 453.0], [3.9, 458.0], [4.0, 460.0], [4.1, 462.0], [4.2, 464.0], [4.3, 467.0], [4.4, 468.0], [4.5, 469.0], [4.6, 471.0], [4.7, 479.0], [4.8, 481.0], [4.9, 484.0], [5.0, 489.0], [5.1, 493.0], [5.2, 496.0], [5.3, 504.0], [5.4, 510.0], [5.5, 516.0], [5.6, 528.0], [5.7, 531.0], [5.8, 534.0], [5.9, 538.0], [6.0, 543.0], [6.1, 554.0], [6.2, 558.0], [6.3, 563.0], [6.4, 569.0], [6.5, 574.0], [6.6, 578.0], [6.7, 582.0], [6.8, 590.0], [6.9, 594.0], [7.0, 600.0], [7.1, 606.0], [7.2, 617.0], [7.3, 624.0], [7.4, 629.0], [7.5, 633.0], [7.6, 646.0], [7.7, 654.0], [7.8, 661.0], [7.9, 671.0], [8.0, 681.0], [8.1, 695.0], [8.2, 701.0], [8.3, 709.0], [8.4, 722.0], [8.5, 729.0], [8.6, 740.0], [8.7, 750.0], [8.8, 763.0], [8.9, 773.0], [9.0, 782.0], [9.1, 794.0], [9.2, 805.0], [9.3, 818.0], [9.4, 835.0], [9.5, 860.0], [9.6, 874.0], [9.7, 882.0], [9.8, 892.0], [9.9, 908.0], [10.0, 939.0], [10.1, 973.0], [10.2, 993.0], [10.3, 1013.0], [10.4, 1036.0], [10.5, 1052.0], [10.6, 1085.0], [10.7, 1089.0], [10.8, 1124.0], [10.9, 1152.0], [11.0, 1189.0], [11.1, 1228.0], [11.2, 1253.0], [11.3, 1301.0], [11.4, 1309.0], [11.5, 1330.0], [11.6, 1414.0], [11.7, 1425.0], [11.8, 1442.0], [11.9, 1463.0], [12.0, 1475.0], [12.1, 1479.0], [12.2, 1528.0], [12.3, 1532.0], [12.4, 1570.0], [12.5, 1628.0], [12.6, 1650.0], [12.7, 1653.0], [12.8, 1665.0], [12.9, 1666.0], [13.0, 1676.0], [13.1, 1687.0], [13.2, 1687.0], [13.3, 1688.0], [13.4, 1701.0], [13.5, 1719.0], [13.6, 1728.0], [13.7, 1735.0], [13.8, 1747.0], [13.9, 1784.0], [14.0, 1784.0], [14.1, 1784.0], [14.2, 1785.0], [14.3, 1790.0], [14.4, 1798.0], [14.5, 1799.0], [14.6, 1801.0], [14.7, 1802.0], [14.8, 1839.0], [14.9, 1893.0], [15.0, 1893.0], [15.1, 1914.0], [15.2, 1914.0], [15.3, 1919.0], [15.4, 1920.0], [15.5, 1926.0], [15.6, 1933.0], [15.7, 1943.0], [15.8, 1944.0], [15.9, 1944.0], [16.0, 1944.0], [16.1, 1944.0], [16.2, 1950.0], [16.3, 1966.0], [16.4, 1966.0], [16.5, 1967.0], [16.6, 1968.0], [16.7, 1969.0], [16.8, 1982.0], [16.9, 2041.0], [17.0, 2041.0], [17.1, 2042.0], [17.2, 2043.0], [17.3, 2044.0], [17.4, 2071.0], [17.5, 2077.0], [17.6, 2077.0], [17.7, 2078.0], [17.8, 2079.0], [17.9, 2105.0], [18.0, 2117.0], [18.1, 2117.0], [18.2, 2118.0], [18.3, 2119.0], [18.4, 2119.0], [18.5, 2132.0], [18.6, 2134.0], [18.7, 2134.0], [18.8, 2165.0], [18.9, 2165.0], [19.0, 2165.0], [19.1, 2166.0], [19.2, 2167.0], [19.3, 2167.0], [19.4, 2167.0], [19.5, 2167.0], [19.6, 2169.0], [19.7, 2170.0], [19.8, 2173.0], [19.9, 2173.0], [20.0, 2181.0], [20.1, 2185.0], [20.2, 2185.0], [20.3, 2186.0], [20.4, 2187.0], [20.5, 2187.0], [20.6, 2188.0], [20.7, 2189.0], [20.8, 2193.0], [20.9, 2199.0], [21.0, 2224.0], [21.1, 2224.0], [21.2, 2225.0], [21.3, 2226.0], [21.4, 2277.0], [21.5, 2277.0], [21.6, 2278.0], [21.7, 2278.0], [21.8, 2278.0], [21.9, 2279.0], [22.0, 2280.0], [22.1, 2298.0], [22.2, 2298.0], [22.3, 2300.0], [22.4, 2300.0], [22.5, 2322.0], [22.6, 2327.0], [22.7, 2343.0], [22.8, 2344.0], [22.9, 2345.0], [23.0, 2346.0], [23.1, 2401.0], [23.2, 2402.0], [23.3, 2402.0], [23.4, 2403.0], [23.5, 2406.0], [23.6, 2441.0], [23.7, 2464.0], [23.8, 2465.0], [23.9, 2466.0], [24.0, 2481.0], [24.1, 2484.0], [24.2, 2524.0], [24.3, 2530.0], [24.4, 2562.0], [24.5, 2596.0], [24.6, 2602.0], [24.7, 2603.0], [24.8, 2711.0], [24.9, 2758.0], [25.0, 2759.0], [25.1, 2760.0], [25.2, 2760.0], [25.3, 2760.0], [25.4, 2760.0], [25.5, 2760.0], [25.6, 2761.0], [25.7, 2789.0], [25.8, 2805.0], [25.9, 2834.0], [26.0, 2834.0], [26.1, 2835.0], [26.2, 2835.0], [26.3, 2863.0], [26.4, 2937.0], [26.5, 2938.0], [26.6, 2939.0], [26.7, 2939.0], [26.8, 2955.0], [26.9, 2955.0], [27.0, 2955.0], [27.1, 2955.0], [27.2, 2955.0], [27.3, 2956.0], [27.4, 2956.0], [27.5, 2963.0], [27.6, 2964.0], [27.7, 2981.0], [27.8, 3044.0], [27.9, 3044.0], [28.0, 3056.0], [28.1, 3099.0], [28.2, 3128.0], [28.3, 3137.0], [28.4, 3165.0], [28.5, 3177.0], [28.6, 3178.0], [28.7, 3178.0], [28.8, 3178.0], [28.9, 3178.0], [29.0, 3179.0], [29.1, 3180.0], [29.2, 3182.0], [29.3, 3182.0], [29.4, 3182.0], [29.5, 3182.0], [29.6, 3182.0], [29.7, 3183.0], [29.8, 3204.0], [29.9, 3234.0], [30.0, 3247.0], [30.1, 3247.0], [30.2, 3248.0], [30.3, 3287.0], [30.4, 3287.0], [30.5, 3288.0], [30.6, 3289.0], [30.7, 3297.0], [30.8, 3298.0], [30.9, 3364.0], [31.0, 3392.0], [31.1, 3392.0], [31.2, 3392.0], [31.3, 3392.0], [31.4, 3392.0], [31.5, 3393.0], [31.6, 3393.0], [31.7, 3398.0], [31.8, 3422.0], [31.9, 3430.0], [32.0, 3450.0], [32.1, 3514.0], [32.2, 3575.0], [32.3, 3577.0], [32.4, 3578.0], [32.5, 3587.0], [32.6, 3587.0], [32.7, 3587.0], [32.8, 3588.0], [32.9, 3588.0], [33.0, 3589.0], [33.1, 3597.0], [33.2, 3603.0], [33.3, 3604.0], [33.4, 3659.0], [33.5, 3659.0], [33.6, 3660.0], [33.7, 3665.0], [33.8, 3716.0], [33.9, 3771.0], [34.0, 3806.0], [34.1, 3806.0], [34.2, 3806.0], [34.3, 3807.0], [34.4, 3808.0], [34.5, 3808.0], [34.6, 3808.0], [34.7, 3809.0], [34.8, 3826.0], [34.9, 3896.0], [35.0, 3967.0], [35.1, 4037.0], [35.2, 4077.0], [35.3, 4079.0], [35.4, 4081.0], [35.5, 4110.0], [35.6, 4110.0], [35.7, 4111.0], [35.8, 4113.0], [35.9, 4114.0], [36.0, 4114.0], [36.1, 4114.0], [36.2, 4115.0], [36.3, 4115.0], [36.4, 4115.0], [36.5, 4116.0], [36.6, 4162.0], [36.7, 4162.0], [36.8, 4162.0], [36.9, 4162.0], [37.0, 4162.0], [37.1, 4162.0], [37.2, 4163.0], [37.3, 4173.0], [37.4, 4203.0], [37.5, 4246.0], [37.6, 4306.0], [37.7, 4339.0], [37.8, 4340.0], [37.9, 4340.0], [38.0, 4340.0], [38.1, 4341.0], [38.2, 4341.0], [38.3, 4344.0], [38.4, 4388.0], [38.5, 4388.0], [38.6, 4389.0], [38.7, 4389.0], [38.8, 4389.0], [38.9, 4390.0], [39.0, 4391.0], [39.1, 4402.0], [39.2, 4450.0], [39.3, 4476.0], [39.4, 4476.0], [39.5, 4476.0], [39.6, 4479.0], [39.7, 4486.0], [39.8, 4487.0], [39.9, 4487.0], [40.0, 4488.0], [40.1, 4492.0], [40.2, 4493.0], [40.3, 4494.0], [40.4, 4495.0], [40.5, 4495.0], [40.6, 4496.0], [40.7, 4503.0], [40.8, 4504.0], [40.9, 4505.0], [41.0, 4505.0], [41.1, 4506.0], [41.2, 4507.0], [41.3, 4507.0], [41.4, 4516.0], [41.5, 4535.0], [41.6, 4535.0], [41.7, 4600.0], [41.8, 4600.0], [41.9, 4600.0], [42.0, 4600.0], [42.1, 4600.0], [42.2, 4601.0], [42.3, 4601.0], [42.4, 4620.0], [42.5, 4637.0], [42.6, 4638.0], [42.7, 4638.0], [42.8, 4638.0], [42.9, 4638.0], [43.0, 4638.0], [43.1, 4639.0], [43.2, 4639.0], [43.3, 4792.0], [43.4, 4841.0], [43.5, 4858.0], [43.6, 4863.0], [43.7, 4863.0], [43.8, 4863.0], [43.9, 4882.0], [44.0, 4930.0], [44.1, 4930.0], [44.2, 4931.0], [44.3, 4931.0], [44.4, 4936.0], [44.5, 4936.0], [44.6, 4937.0], [44.7, 4937.0], [44.8, 4938.0], [44.9, 4938.0], [45.0, 4938.0], [45.1, 4939.0], [45.2, 4939.0], [45.3, 4940.0], [45.4, 4947.0], [45.5, 4947.0], [45.6, 4947.0], [45.7, 4948.0], [45.8, 4948.0], [45.9, 4962.0], [46.0, 4966.0], [46.1, 4986.0], [46.2, 5039.0], [46.3, 5045.0], [46.4, 5046.0], [46.5, 5046.0], [46.6, 5047.0], [46.7, 5047.0], [46.8, 5048.0], [46.9, 5050.0], [47.0, 5060.0], [47.1, 5063.0], [47.2, 5064.0], [47.3, 5065.0], [47.4, 5097.0], [47.5, 5107.0], [47.6, 5108.0], [47.7, 5108.0], [47.8, 5108.0], [47.9, 5110.0], [48.0, 5111.0], [48.1, 5111.0], [48.2, 5111.0], [48.3, 5112.0], [48.4, 5131.0], [48.5, 5133.0], [48.6, 5134.0], [48.7, 5134.0], [48.8, 5134.0], [48.9, 5135.0], [49.0, 5157.0], [49.1, 5157.0], [49.2, 5158.0], [49.3, 5192.0], [49.4, 5204.0], [49.5, 5204.0], [49.6, 5204.0], [49.7, 5209.0], [49.8, 5210.0], [49.9, 5240.0], [50.0, 5249.0], [50.1, 5250.0], [50.2, 5250.0], [50.3, 5250.0], [50.4, 5250.0], [50.5, 5251.0], [50.6, 5251.0], [50.7, 5251.0], [50.8, 5251.0], [50.9, 5252.0], [51.0, 5312.0], [51.1, 5325.0], [51.2, 5325.0], [51.3, 5339.0], [51.4, 5339.0], [51.5, 5391.0], [51.6, 5416.0], [51.7, 5417.0], [51.8, 5451.0], [51.9, 5454.0], [52.0, 5454.0], [52.1, 5514.0], [52.2, 5514.0], [52.3, 5520.0], [52.4, 5520.0], [52.5, 5520.0], [52.6, 5520.0], [52.7, 5521.0], [52.8, 5521.0], [52.9, 5553.0], [53.0, 5605.0], [53.1, 5611.0], [53.2, 5614.0], [53.3, 5638.0], [53.4, 5639.0], [53.5, 5639.0], [53.6, 5701.0], [53.7, 5722.0], [53.8, 5733.0], [53.9, 5741.0], [54.0, 5766.0], [54.1, 5766.0], [54.2, 5769.0], [54.3, 5769.0], [54.4, 5769.0], [54.5, 5769.0], [54.6, 5811.0], [54.7, 5832.0], [54.8, 5833.0], [54.9, 5833.0], [55.0, 5834.0], [55.1, 5834.0], [55.2, 5834.0], [55.3, 5835.0], [55.4, 5835.0], [55.5, 5836.0], [55.6, 5836.0], [55.7, 5856.0], [55.8, 5857.0], [55.9, 5863.0], [56.0, 5863.0], [56.1, 5866.0], [56.2, 5868.0], [56.3, 5868.0], [56.4, 5869.0], [56.5, 5870.0], [56.6, 5870.0], [56.7, 5871.0], [56.8, 5874.0], [56.9, 5875.0], [57.0, 5876.0], [57.1, 5877.0], [57.2, 5878.0], [57.3, 5880.0], [57.4, 5889.0], [57.5, 5889.0], [57.6, 5890.0], [57.7, 5890.0], [57.8, 5890.0], [57.9, 5891.0], [58.0, 5891.0], [58.1, 5892.0], [58.2, 5901.0], [58.3, 5916.0], [58.4, 5916.0], [58.5, 5918.0], [58.6, 5933.0], [58.7, 5934.0], [58.8, 5934.0], [58.9, 5934.0], [59.0, 5934.0], [59.1, 5934.0], [59.2, 5935.0], [59.3, 5935.0], [59.4, 5937.0], [59.5, 5944.0], [59.6, 5945.0], [59.7, 5962.0], [59.8, 5962.0], [59.9, 5965.0], [60.0, 5970.0], [60.1, 5971.0], [60.2, 5973.0], [60.3, 5973.0], [60.4, 5975.0], [60.5, 5976.0], [60.6, 5977.0], [60.7, 5978.0], [60.8, 5979.0], [60.9, 5995.0], [61.0, 5995.0], [61.1, 5995.0], [61.2, 5995.0], [61.3, 6014.0], [61.4, 6016.0], [61.5, 6017.0], [61.6, 6018.0], [61.7, 6066.0], [61.8, 6067.0], [61.9, 6073.0], [62.0, 6075.0], [62.1, 6094.0], [62.2, 6107.0], [62.3, 6108.0], [62.4, 6108.0], [62.5, 6127.0], [62.6, 6221.0], [62.7, 6222.0], [62.8, 6222.0], [62.9, 6222.0], [63.0, 6222.0], [63.1, 6222.0], [63.2, 6223.0], [63.3, 6223.0], [63.4, 6224.0], [63.5, 6225.0], [63.6, 6225.0], [63.7, 6284.0], [63.8, 6323.0], [63.9, 6324.0], [64.0, 6325.0], [64.1, 6325.0], [64.2, 6327.0], [64.3, 6327.0], [64.4, 6327.0], [64.5, 6327.0], [64.6, 6327.0], [64.7, 6337.0], [64.8, 6338.0], [64.9, 6338.0], [65.0, 6339.0], [65.1, 6339.0], [65.2, 6396.0], [65.3, 6399.0], [65.4, 6422.0], [65.5, 6425.0], [65.6, 6426.0], [65.7, 6426.0], [65.8, 6426.0], [65.9, 6426.0], [66.0, 6426.0], [66.1, 6427.0], [66.2, 6427.0], [66.3, 6427.0], [66.4, 6428.0], [66.5, 6428.0], [66.6, 6428.0], [66.7, 6428.0], [66.8, 6428.0], [66.9, 6429.0], [67.0, 6429.0], [67.1, 6429.0], [67.2, 6429.0], [67.3, 6429.0], [67.4, 6429.0], [67.5, 6429.0], [67.6, 6429.0], [67.7, 6429.0], [67.8, 6429.0], [67.9, 6430.0], [68.0, 6430.0], [68.1, 6430.0], [68.2, 6430.0], [68.3, 6431.0], [68.4, 6431.0], [68.5, 6431.0], [68.6, 6431.0], [68.7, 6431.0], [68.8, 6431.0], [68.9, 6432.0], [69.0, 6432.0], [69.1, 6432.0], [69.2, 6434.0], [69.3, 6435.0], [69.4, 6448.0], [69.5, 6448.0], [69.6, 6454.0], [69.7, 6454.0], [69.8, 6454.0], [69.9, 6454.0], [70.0, 6455.0], [70.1, 6455.0], [70.2, 6455.0], [70.3, 6456.0], [70.4, 6456.0], [70.5, 6456.0], [70.6, 6457.0], [70.7, 6457.0], [70.8, 6491.0], [70.9, 6491.0], [71.0, 6492.0], [71.1, 6492.0], [71.2, 6492.0], [71.3, 6498.0], [71.4, 6507.0], [71.5, 6509.0], [71.6, 6509.0], [71.7, 6522.0], [71.8, 6536.0], [71.9, 6546.0], [72.0, 6553.0], [72.1, 6553.0], [72.2, 6555.0], [72.3, 6579.0], [72.4, 6590.0], [72.5, 6637.0], [72.6, 6638.0], [72.7, 6638.0], [72.8, 6657.0], [72.9, 6669.0], [73.0, 6669.0], [73.1, 6670.0], [73.2, 6683.0], [73.3, 6684.0], [73.4, 6684.0], [73.5, 6684.0], [73.6, 6684.0], [73.7, 6687.0], [73.8, 6693.0], [73.9, 6693.0], [74.0, 6693.0], [74.1, 6693.0], [74.2, 6693.0], [74.3, 6693.0], [74.4, 6697.0], [74.5, 6698.0], [74.6, 6698.0], [74.7, 6710.0], [74.8, 6710.0], [74.9, 6710.0], [75.0, 6710.0], [75.1, 6713.0], [75.2, 6758.0], [75.3, 6775.0], [75.4, 6775.0], [75.5, 6776.0], [75.6, 6776.0], [75.7, 6776.0], [75.8, 6800.0], [75.9, 6849.0], [76.0, 6851.0], [76.1, 6852.0], [76.2, 6945.0], [76.3, 6976.0], [76.4, 6977.0], [76.5, 6977.0], [76.6, 6979.0], [76.7, 6979.0], [76.8, 6995.0], [76.9, 7014.0], [77.0, 7141.0], [77.1, 7143.0], [77.2, 7148.0], [77.3, 7149.0], [77.4, 7149.0], [77.5, 7161.0], [77.6, 7173.0], [77.7, 7195.0], [77.8, 7195.0], [77.9, 7195.0], [78.0, 7197.0], [78.1, 7208.0], [78.2, 7209.0], [78.3, 7209.0], [78.4, 7210.0], [78.5, 7210.0], [78.6, 7210.0], [78.7, 7211.0], [78.8, 7211.0], [78.9, 7211.0], [79.0, 7212.0], [79.1, 7216.0], [79.2, 7219.0], [79.3, 7219.0], [79.4, 7220.0], [79.5, 7220.0], [79.6, 7235.0], [79.7, 7237.0], [79.8, 7237.0], [79.9, 7237.0], [80.0, 7238.0], [80.1, 7238.0], [80.2, 7240.0], [80.3, 7247.0], [80.4, 7249.0], [80.5, 7250.0], [80.6, 7250.0], [80.7, 7250.0], [80.8, 7251.0], [80.9, 7251.0], [81.0, 7251.0], [81.1, 7251.0], [81.2, 7251.0], [81.3, 7251.0], [81.4, 7252.0], [81.5, 7252.0], [81.6, 7252.0], [81.7, 7253.0], [81.8, 7254.0], [81.9, 7254.0], [82.0, 7254.0], [82.1, 7254.0], [82.2, 7256.0], [82.3, 7260.0], [82.4, 7260.0], [82.5, 7261.0], [82.6, 7262.0], [82.7, 7263.0], [82.8, 7285.0], [82.9, 7295.0], [83.0, 7313.0], [83.1, 7317.0], [83.2, 7321.0], [83.3, 7322.0], [83.4, 7323.0], [83.5, 7324.0], [83.6, 7356.0], [83.7, 7357.0], [83.8, 7357.0], [83.9, 7358.0], [84.0, 7364.0], [84.1, 7385.0], [84.2, 7387.0], [84.3, 7387.0], [84.4, 7388.0], [84.5, 7409.0], [84.6, 7409.0], [84.7, 7411.0], [84.8, 7418.0], [84.9, 7418.0], [85.0, 7418.0], [85.1, 7418.0], [85.2, 7418.0], [85.3, 7456.0], [85.4, 7484.0], [85.5, 7485.0], [85.6, 7488.0], [85.7, 7488.0], [85.8, 7509.0], [85.9, 7544.0], [86.0, 7560.0], [86.1, 7632.0], [86.2, 7633.0], [86.3, 7677.0], [86.4, 7677.0], [86.5, 7677.0], [86.6, 7688.0], [86.7, 7689.0], [86.8, 7690.0], [86.9, 7702.0], [87.0, 7705.0], [87.1, 7705.0], [87.2, 7705.0], [87.3, 7707.0], [87.4, 7784.0], [87.5, 7788.0], [87.6, 7818.0], [87.7, 7834.0], [87.8, 7835.0], [87.9, 7836.0], [88.0, 7914.0], [88.1, 7914.0], [88.2, 7915.0], [88.3, 7916.0], [88.4, 7916.0], [88.5, 7948.0], [88.6, 7949.0], [88.7, 7949.0], [88.8, 7949.0], [88.9, 7986.0], [89.0, 7988.0], [89.1, 7988.0], [89.2, 7989.0], [89.3, 7990.0], [89.4, 8064.0], [89.5, 8068.0], [89.6, 8188.0], [89.7, 8242.0], [89.8, 8242.0], [89.9, 8243.0], [90.0, 8254.0], [90.1, 8260.0], [90.2, 8356.0], [90.3, 8432.0], [90.4, 8432.0], [90.5, 8433.0], [90.6, 8433.0], [90.7, 8434.0], [90.8, 8434.0], [90.9, 8533.0], [91.0, 8538.0], [91.1, 8547.0], [91.2, 8622.0], [91.3, 8623.0], [91.4, 8683.0], [91.5, 8756.0], [91.6, 8801.0], [91.7, 8827.0], [91.8, 8948.0], [91.9, 8948.0], [92.0, 8949.0], [92.1, 8950.0], [92.2, 8950.0], [92.3, 8950.0], [92.4, 9004.0], [92.5, 9139.0], [92.6, 9140.0], [92.7, 9140.0], [92.8, 9141.0], [92.9, 9141.0], [93.0, 9142.0], [93.1, 9142.0], [93.2, 9142.0], [93.3, 9142.0], [93.4, 9142.0], [93.5, 9142.0], [93.6, 9143.0], [93.7, 9143.0], [93.8, 9143.0], [93.9, 9151.0], [94.0, 9215.0], [94.1, 9224.0], [94.2, 9224.0], [94.3, 9224.0], [94.4, 9225.0], [94.5, 9225.0], [94.6, 9225.0], [94.7, 9232.0], [94.8, 9233.0], [94.9, 9285.0], [95.0, 9286.0], [95.1, 9287.0], [95.2, 9334.0], [95.3, 9363.0], [95.4, 9371.0], [95.5, 9372.0], [95.6, 9372.0], [95.7, 9401.0], [95.8, 9401.0], [95.9, 9402.0], [96.0, 9419.0], [96.1, 9419.0], [96.2, 9698.0], [96.3, 9721.0], [96.4, 9764.0], [96.5, 9766.0], [96.6, 9766.0], [96.7, 9766.0], [96.8, 9766.0], [96.9, 9768.0], [97.0, 9803.0], [97.1, 9804.0], [97.2, 9805.0], [97.3, 9809.0], [97.4, 9809.0], [97.5, 9810.0], [97.6, 9810.0], [97.7, 9811.0], [97.8, 9811.0], [97.9, 10472.0], [98.0, 10472.0], [98.1, 10472.0], [98.2, 10474.0], [98.3, 10545.0], [98.4, 10647.0], [98.5, 11181.0], [98.6, 11182.0], [98.7, 11182.0], [98.8, 11183.0], [98.9, 11184.0], [99.0, 11184.0], [99.1, 11185.0], [99.2, 11185.0], [99.3, 11185.0], [99.4, 11185.0], [99.5, 11186.0], [99.6, 11685.0], [99.7, 11685.0], [99.8, 11685.0], [99.9, 11685.0], [100.0, 11688.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 172.0, "series": [{"data": [[300.0, 42.0], [400.0, 107.0], [500.0, 51.0], [600.0, 34.0], [700.0, 28.0], [800.0, 20.0], [900.0, 11.0], [1000.0, 14.0], [1100.0, 9.0], [1200.0, 7.0], [1300.0, 9.0], [1400.0, 16.0], [1500.0, 8.0], [1600.0, 27.0], [1700.0, 34.0], [1800.0, 14.0], [1900.0, 51.0], [2000.0, 30.0], [2100.0, 87.0], [2300.0, 23.0], [2200.0, 38.0], [2400.0, 32.0], [2500.0, 10.0], [2600.0, 8.0], [2700.0, 29.0], [2800.0, 16.0], [2900.0, 39.0], [3000.0, 12.0], [3100.0, 46.0], [3200.0, 31.0], [3300.0, 26.0], [3400.0, 8.0], [3500.0, 32.0], [3700.0, 6.0], [3600.0, 18.0], [3800.0, 27.0], [3900.0, 5.0], [4000.0, 11.0], [4200.0, 6.0], [4100.0, 55.0], [4300.0, 43.0], [4400.0, 46.0], [4500.0, 27.0], [4600.0, 46.0], [4800.0, 17.0], [4700.0, 2.0], [4900.0, 63.0], [5100.0, 54.0], [5000.0, 38.0], [5200.0, 48.0], [5300.0, 17.0], [5400.0, 14.0], [5500.0, 24.0], [5600.0, 19.0], [5800.0, 104.0], [5700.0, 28.0], [6000.0, 27.0], [6100.0, 11.0], [5900.0, 88.0], [6300.0, 44.0], [6200.0, 34.0], [6500.0, 32.0], [6600.0, 65.0], [6400.0, 172.0], [6700.0, 31.0], [6900.0, 19.0], [6800.0, 11.0], [7100.0, 31.0], [7000.0, 4.0], [7400.0, 39.0], [7200.0, 140.0], [7300.0, 43.0], [7500.0, 7.0], [7600.0, 24.0], [7800.0, 10.0], [7700.0, 20.0], [7900.0, 41.0], [8000.0, 6.0], [8100.0, 2.0], [8500.0, 7.0], [8300.0, 3.0], [8200.0, 14.0], [8400.0, 19.0], [8600.0, 8.0], [8700.0, 3.0], [8900.0, 17.0], [8800.0, 8.0], [9000.0, 3.0], [9200.0, 35.0], [9100.0, 42.0], [9600.0, 3.0], [9300.0, 13.0], [9700.0, 19.0], [9500.0, 1.0], [9400.0, 14.0], [9800.0, 26.0], [10400.0, 12.0], [10500.0, 2.0], [10600.0, 4.0], [11100.0, 31.0], [11600.0, 13.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 58.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2658.0, "series": [{"data": [[0.0, 149.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 58.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2658.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 45.52089552238803, "minX": 1.78195146E12, "maxY": 183.39072107322508, "series": [{"data": [[1.78195152E12, 183.39072107322508], [1.78195158E12, 175.26354679802955], [1.78195146E12, 45.52089552238803]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 224 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195158E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 380.1, "minX": 2.0, "maxY": 11186.0, "series": [{"data": [[2.0, 6433.0], [3.0, 3514.0], [4.0, 575.0], [5.0, 448.0], [6.0, 1598.6], [7.0, 397.0], [8.0, 398.2], [9.0, 406.16666666666663], [10.0, 413.5], [11.0, 419.5], [12.0, 1182.25], [13.0, 442.7142857142857], [14.0, 454.44444444444446], [15.0, 425.8888888888889], [16.0, 380.1], [17.0, 382.30769230769226], [18.0, 2042.4545454545453], [19.0, 960.1538461538462], [20.0, 420.6666666666667], [21.0, 451.31578947368416], [22.0, 1211.125], [23.0, 485.18750000000006], [24.0, 1048.2727272727273], [25.0, 536.3846153846155], [26.0, 1397.7142857142858], [27.0, 584.0666666666665], [28.0, 612.6666666666666], [29.0, 642.5625], [30.0, 1164.5833333333333], [31.0, 1532.4285714285716], [32.0, 748.5384615384615], [33.0, 791.5000000000001], [34.0, 857.8333333333333], [35.0, 879.0714285714286], [36.0, 957.0], [37.0, 1001.1666666666666], [38.0, 1781.25], [39.0, 1548.4999999999998], [40.0, 1241.25], [41.0, 1308.3], [43.0, 2213.153846153846], [44.0, 1446.8333333333335], [45.0, 1587.0], [46.0, 2732.8888888888887], [48.0, 1827.125], [49.0, 1832.111111111111], [50.0, 1866.4444444444446], [53.0, 2177.9], [52.0, 6428.0], [54.0, 2155.083333333333], [56.0, 2048.090909090909], [58.0, 2238.0714285714284], [59.0, 6432.0], [60.0, 2438.285714285714], [62.0, 2228.125], [63.0, 6432.0], [64.0, 2429.6874999999995], [66.0, 2064.4444444444443], [67.0, 6431.0], [68.0, 1954.2941176470586], [70.0, 2342.0909090909095], [72.0, 2007.0], [74.0, 2001.454545454546], [75.0, 6431.0], [73.0, 6430.5], [77.0, 2025.5714285714282], [80.0, 2199.72], [82.0, 2065.1666666666665], [85.0, 2317.5], [87.0, 4648.0], [88.0, 2757.4666666666662], [91.0, 6349.0], [90.0, 6381.099999999999], [89.0, 6429.8], [92.0, 2804.1428571428573], [95.0, 3231.0], [93.0, 6221.142857142857], [96.0, 2883.4516129032263], [100.0, 3088.967741935484], [104.0, 3255.6666666666665], [105.0, 3180.2285714285717], [107.0, 6426.0], [106.0, 6425.666666666667], [109.0, 3817.560975609756], [111.0, 6429.0], [110.0, 6429.0], [108.0, 6429.5], [113.0, 5853.076923076923], [114.0, 3896.0], [115.0, 6427.0], [112.0, 6428.5], [116.0, 4032.069767441861], [118.0, 11185.0], [117.0, 6428.083333333332], [121.0, 4167.589743589745], [124.0, 4079.0], [126.0, 3843.2926829268285], [129.0, 3625.3333333333335], [131.0, 4173.0], [132.0, 3938.8048780487793], [135.0, 3659.375], [136.0, 3961.0], [138.0, 3751.9795918367345], [143.0, 5744.0], [140.0, 11186.0], [145.0, 4262.931818181818], [148.0, 4111.727272727273], [151.0, 5199.72], [150.0, 11182.0], [146.0, 7990.0], [144.0, 11186.0], [152.0, 3935.870967741935], [157.0, 5239.666666666667], [159.0, 9841.815789473681], [158.0, 11185.0], [156.0, 7989.0], [155.0, 7989.0], [154.0, 11185.0], [160.0, 5099.020833333333], [164.0, 5673.578947368421], [168.0, 6005.434782608695], [169.0, 4622.23076923077], [170.0, 4882.0], [171.0, 5191.5], [176.0, 6960.466666666666], [177.0, 5510.227272727272], [181.0, 5520.277777777777], [182.0, 7106.833333333333], [184.0, 8092.374999999999], [185.0, 6015.944444444445], [187.0, 4935.343749999999], [188.0, 5072.666666666667], [191.0, 6903.333333333332], [190.0, 9144.0], [195.0, 6092.421052631579], [196.0, 5166.999999999999], [199.0, 5818.000000000001], [192.0, 7173.0], [202.0, 8138.0], [203.0, 6240.210526315789], [206.0, 5722.399999999999], [207.0, 5459.875], [211.0, 7698.2], [212.0, 6488.428571428572], [216.0, 6458.51111111111], [217.0, 5701.5], [219.0, 6061.6875], [222.0, 6337.666666666667], [223.0, 6522.0], [224.0, 7308.4640998959385]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[149.99720767888272, 4975.93403141362]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 224.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1069.1333333333334, "minX": 1.78195146E12, "maxY": 6889.05, "series": [{"data": [[1.78195152E12, 6889.05], [1.78195158E12, 1565.1666666666667], [1.78195146E12, 2579.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195152E12, 4711.033333333334], [1.78195158E12, 1069.1333333333334], [1.78195146E12, 1764.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195158E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1337.8059701492534, "minX": 1.78195146E12, "maxY": 7296.746305418719, "series": [{"data": [[1.78195152E12, 5811.761878144203], [1.78195158E12, 7296.746305418719], [1.78195146E12, 1337.8059701492534]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195158E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1337.788059701493, "minX": 1.78195146E12, "maxY": 7296.736453201969, "series": [{"data": [[1.78195152E12, 5811.757965343771], [1.78195158E12, 7296.736453201969], [1.78195146E12, 1337.788059701493]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195158E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.046394633873672396, "minX": 1.78195146E12, "maxY": 0.06157635467980297, "series": [{"data": [[1.78195152E12, 0.046394633873672396], [1.78195158E12, 0.06157635467980297], [1.78195146E12, 0.05970149253731343]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195158E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 360.0, "minX": 1.78195146E12, "maxY": 617.0, "series": [{"data": [[1.78195146E12, 617.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195146E12, 360.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195146E12, 574.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195146E12, 611.76]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195146E12, 450.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195146E12, 593.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195146E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 394.0, "minX": 3.0, "maxY": 9141.0, "series": [{"data": [[32.0, 445.5], [35.0, 607.5], [5.0, 575.0], [42.0, 442.0], [43.0, 546.0], [24.0, 418.0], [14.0, 394.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2955.0], [35.0, 3587.0], [37.0, 6852.0], [38.0, 1680.0], [39.0, 5152.0], [41.0, 2105.0], [40.0, 7817.0], [42.0, 629.0], [43.0, 4822.5], [44.0, 4841.5], [46.0, 4621.5], [47.0, 6693.0], [49.0, 4388.0], [48.0, 4476.5], [3.0, 5240.0], [50.0, 3603.0], [53.0, 4939.0], [55.0, 4389.0], [54.0, 5965.0], [57.0, 7212.0], [4.0, 6338.0], [65.0, 9141.0], [69.0, 7689.0], [72.0, 5833.0], [5.0, 7240.0], [105.0, 6325.0], [115.0, 7284.0], [114.0, 7250.5], [116.0, 5937.0], [8.0, 5417.0], [159.0, 6430.0], [11.0, 5973.5], [12.0, 7322.5], [13.0, 5995.0], [14.0, 6736.0], [15.0, 6995.0], [16.0, 6338.0], [19.0, 2042.0], [20.0, 2077.0], [21.0, 1801.0], [22.0, 1228.0], [23.0, 2119.0], [24.0, 1730.0], [26.0, 5521.0], [27.0, 4582.5], [28.0, 2758.0], [31.0, 2561.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 159.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 394.0, "minX": 3.0, "maxY": 9141.0, "series": [{"data": [[32.0, 445.5], [35.0, 607.5], [5.0, 575.0], [42.0, 442.0], [43.0, 546.0], [24.0, 418.0], [14.0, 394.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2955.0], [35.0, 3587.0], [37.0, 6852.0], [38.0, 1680.0], [39.0, 5152.0], [41.0, 2105.0], [40.0, 7817.0], [42.0, 629.0], [43.0, 4822.5], [44.0, 4841.5], [46.0, 4621.5], [47.0, 6693.0], [49.0, 4388.0], [48.0, 4476.5], [3.0, 5240.0], [50.0, 3603.0], [53.0, 4939.0], [55.0, 4389.0], [54.0, 5965.0], [57.0, 7212.0], [4.0, 6338.0], [65.0, 9141.0], [69.0, 7689.0], [72.0, 5833.0], [5.0, 7240.0], [105.0, 6325.0], [115.0, 7284.0], [114.0, 7250.5], [116.0, 5937.0], [8.0, 5417.0], [159.0, 6430.0], [11.0, 5973.5], [12.0, 7322.5], [13.0, 5995.0], [14.0, 6736.0], [15.0, 6995.0], [16.0, 6338.0], [19.0, 2042.0], [20.0, 2077.0], [21.0, 1801.0], [22.0, 1228.0], [23.0, 2119.0], [24.0, 1730.0], [26.0, 5521.0], [27.0, 4582.5], [28.0, 2758.0], [31.0, 2561.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 159.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.033333333333333, "minX": 1.78195146E12, "maxY": 32.1, "series": [{"data": [[1.78195152E12, 32.1], [1.78195158E12, 3.033333333333333], [1.78195146E12, 12.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195158E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.78195146E12, "maxY": 29.116666666666667, "series": [{"data": [[1.78195152E12, 29.116666666666667], [1.78195158E12, 5.733333333333333], [1.78195146E12, 11.166666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195152E12, 0.7], [1.78195158E12, 1.0333333333333334]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195158E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.45, "minX": 1.78195146E12, "maxY": 29.816666666666666, "series": [{"data": [[1.78195146E12, 3.45]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195152E12, 29.816666666666666], [1.78195158E12, 6.766666666666667], [1.78195146E12, 7.716666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195158E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.45, "minX": 1.78195146E12, "maxY": 29.816666666666666, "series": [{"data": [[1.78195146E12, 3.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195152E12, 29.816666666666666], [1.78195158E12, 6.766666666666667], [1.78195146E12, 7.716666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195158E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

