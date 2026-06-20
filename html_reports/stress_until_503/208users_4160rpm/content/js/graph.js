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
        data: {"result": {"minY": 334.0, "minX": 0.0, "maxY": 11156.0, "series": [{"data": [[0.0, 334.0], [0.1, 337.0], [0.2, 341.0], [0.3, 345.0], [0.4, 348.0], [0.5, 351.0], [0.6, 353.0], [0.7, 356.0], [0.8, 358.0], [0.9, 361.0], [1.0, 365.0], [1.1, 367.0], [1.2, 370.0], [1.3, 372.0], [1.4, 376.0], [1.5, 379.0], [1.6, 381.0], [1.7, 382.0], [1.8, 385.0], [1.9, 387.0], [2.0, 388.0], [2.1, 389.0], [2.2, 392.0], [2.3, 394.0], [2.4, 396.0], [2.5, 396.0], [2.6, 399.0], [2.7, 401.0], [2.8, 404.0], [2.9, 405.0], [3.0, 408.0], [3.1, 410.0], [3.2, 411.0], [3.3, 413.0], [3.4, 415.0], [3.5, 419.0], [3.6, 421.0], [3.7, 425.0], [3.8, 432.0], [3.9, 440.0], [4.0, 446.0], [4.1, 450.0], [4.2, 471.0], [4.3, 474.0], [4.4, 482.0], [4.5, 490.0], [4.6, 494.0], [4.7, 498.0], [4.8, 503.0], [4.9, 508.0], [5.0, 513.0], [5.1, 514.0], [5.2, 521.0], [5.3, 528.0], [5.4, 528.0], [5.5, 529.0], [5.6, 529.0], [5.7, 548.0], [5.8, 562.0], [5.9, 565.0], [6.0, 568.0], [6.1, 569.0], [6.2, 571.0], [6.3, 573.0], [6.4, 578.0], [6.5, 582.0], [6.6, 594.0], [6.7, 598.0], [6.8, 601.0], [6.9, 609.0], [7.0, 617.0], [7.1, 623.0], [7.2, 627.0], [7.3, 637.0], [7.4, 643.0], [7.5, 652.0], [7.6, 665.0], [7.7, 670.0], [7.8, 677.0], [7.9, 683.0], [8.0, 690.0], [8.1, 698.0], [8.2, 708.0], [8.3, 718.0], [8.4, 729.0], [8.5, 739.0], [8.6, 755.0], [8.7, 765.0], [8.8, 777.0], [8.9, 789.0], [9.0, 798.0], [9.1, 805.0], [9.2, 817.0], [9.3, 831.0], [9.4, 849.0], [9.5, 856.0], [9.6, 870.0], [9.7, 897.0], [9.8, 915.0], [9.9, 931.0], [10.0, 934.0], [10.1, 953.0], [10.2, 965.0], [10.3, 984.0], [10.4, 1002.0], [10.5, 1027.0], [10.6, 1063.0], [10.7, 1114.0], [10.8, 1137.0], [10.9, 1157.0], [11.0, 1166.0], [11.1, 1193.0], [11.2, 1198.0], [11.3, 1223.0], [11.4, 1309.0], [11.5, 1358.0], [11.6, 1376.0], [11.7, 1400.0], [11.8, 1409.0], [11.9, 1437.0], [12.0, 1437.0], [12.1, 1440.0], [12.2, 1466.0], [12.3, 1471.0], [12.4, 1484.0], [12.5, 1487.0], [12.6, 1487.0], [12.7, 1523.0], [12.8, 1546.0], [12.9, 1602.0], [13.0, 1602.0], [13.1, 1607.0], [13.2, 1632.0], [13.3, 1639.0], [13.4, 1643.0], [13.5, 1644.0], [13.6, 1682.0], [13.7, 1695.0], [13.8, 1710.0], [13.9, 1712.0], [14.0, 1712.0], [14.1, 1764.0], [14.2, 1766.0], [14.3, 1766.0], [14.4, 1769.0], [14.5, 1778.0], [14.6, 1778.0], [14.7, 1799.0], [14.8, 1800.0], [14.9, 1800.0], [15.0, 1801.0], [15.1, 1801.0], [15.2, 1801.0], [15.3, 1802.0], [15.4, 1809.0], [15.5, 1809.0], [15.6, 1810.0], [15.7, 1812.0], [15.8, 1812.0], [15.9, 1813.0], [16.0, 1813.0], [16.1, 1813.0], [16.2, 1813.0], [16.3, 1814.0], [16.4, 1815.0], [16.5, 1820.0], [16.6, 1823.0], [16.7, 1875.0], [16.8, 1876.0], [16.9, 1876.0], [17.0, 1877.0], [17.1, 1877.0], [17.2, 1891.0], [17.3, 1891.0], [17.4, 1892.0], [17.5, 1917.0], [17.6, 1919.0], [17.7, 1920.0], [17.8, 1923.0], [17.9, 1923.0], [18.0, 1923.0], [18.1, 1925.0], [18.2, 1961.0], [18.3, 1963.0], [18.4, 1963.0], [18.5, 1963.0], [18.6, 1967.0], [18.7, 1970.0], [18.8, 1972.0], [18.9, 1984.0], [19.0, 1986.0], [19.1, 1988.0], [19.2, 1989.0], [19.3, 1989.0], [19.4, 1990.0], [19.5, 2008.0], [19.6, 2008.0], [19.7, 2008.0], [19.8, 2009.0], [19.9, 2009.0], [20.0, 2009.0], [20.1, 2031.0], [20.2, 2036.0], [20.3, 2036.0], [20.4, 2051.0], [20.5, 2077.0], [20.6, 2079.0], [20.7, 2079.0], [20.8, 2079.0], [20.9, 2112.0], [21.0, 2113.0], [21.1, 2138.0], [21.2, 2160.0], [21.3, 2160.0], [21.4, 2184.0], [21.5, 2194.0], [21.6, 2194.0], [21.7, 2195.0], [21.8, 2195.0], [21.9, 2197.0], [22.0, 2199.0], [22.1, 2211.0], [22.2, 2228.0], [22.3, 2247.0], [22.4, 2248.0], [22.5, 2278.0], [22.6, 2279.0], [22.7, 2280.0], [22.8, 2285.0], [22.9, 2286.0], [23.0, 2286.0], [23.1, 2287.0], [23.2, 2287.0], [23.3, 2295.0], [23.4, 2296.0], [23.5, 2297.0], [23.6, 2297.0], [23.7, 2298.0], [23.8, 2298.0], [23.9, 2299.0], [24.0, 2299.0], [24.1, 2319.0], [24.2, 2337.0], [24.3, 2383.0], [24.4, 2407.0], [24.5, 2453.0], [24.6, 2453.0], [24.7, 2454.0], [24.8, 2468.0], [24.9, 2486.0], [25.0, 2535.0], [25.1, 2583.0], [25.2, 2584.0], [25.3, 2615.0], [25.4, 2615.0], [25.5, 2624.0], [25.6, 2624.0], [25.7, 2624.0], [25.8, 2625.0], [25.9, 2625.0], [26.0, 2625.0], [26.1, 2625.0], [26.2, 2626.0], [26.3, 2652.0], [26.4, 2653.0], [26.5, 2686.0], [26.6, 2799.0], [26.7, 2801.0], [26.8, 2824.0], [26.9, 2856.0], [27.0, 2857.0], [27.1, 2857.0], [27.2, 2857.0], [27.3, 2858.0], [27.4, 2868.0], [27.5, 2868.0], [27.6, 2869.0], [27.7, 2884.0], [27.8, 2885.0], [27.9, 2936.0], [28.0, 2948.0], [28.1, 3004.0], [28.2, 3004.0], [28.3, 3004.0], [28.4, 3005.0], [28.5, 3012.0], [28.6, 3013.0], [28.7, 3013.0], [28.8, 3014.0], [28.9, 3014.0], [29.0, 3015.0], [29.1, 3015.0], [29.2, 3015.0], [29.3, 3017.0], [29.4, 3095.0], [29.5, 3108.0], [29.6, 3109.0], [29.7, 3109.0], [29.8, 3110.0], [29.9, 3112.0], [30.0, 3127.0], [30.1, 3128.0], [30.2, 3128.0], [30.3, 3129.0], [30.4, 3129.0], [30.5, 3130.0], [30.6, 3130.0], [30.7, 3130.0], [30.8, 3135.0], [30.9, 3147.0], [31.0, 3171.0], [31.1, 3278.0], [31.2, 3282.0], [31.3, 3323.0], [31.4, 3324.0], [31.5, 3324.0], [31.6, 3334.0], [31.7, 3334.0], [31.8, 3334.0], [31.9, 3335.0], [32.0, 3335.0], [32.1, 3342.0], [32.2, 3374.0], [32.3, 3374.0], [32.4, 3375.0], [32.5, 3375.0], [32.6, 3376.0], [32.7, 3376.0], [32.8, 3377.0], [32.9, 3378.0], [33.0, 3381.0], [33.1, 3428.0], [33.2, 3428.0], [33.3, 3429.0], [33.4, 3432.0], [33.5, 3432.0], [33.6, 3435.0], [33.7, 3437.0], [33.8, 3437.0], [33.9, 3438.0], [34.0, 3438.0], [34.1, 3439.0], [34.2, 3451.0], [34.3, 3509.0], [34.4, 3512.0], [34.5, 3524.0], [34.6, 3558.0], [34.7, 3559.0], [34.8, 3560.0], [34.9, 3560.0], [35.0, 3560.0], [35.1, 3561.0], [35.2, 3562.0], [35.3, 3604.0], [35.4, 3640.0], [35.5, 3642.0], [35.6, 3644.0], [35.7, 3677.0], [35.8, 3702.0], [35.9, 3802.0], [36.0, 3832.0], [36.1, 3854.0], [36.2, 3915.0], [36.3, 3924.0], [36.4, 3924.0], [36.5, 3925.0], [36.6, 3925.0], [36.7, 3925.0], [36.8, 3925.0], [36.9, 3926.0], [37.0, 3926.0], [37.1, 3926.0], [37.2, 3951.0], [37.3, 3952.0], [37.4, 3965.0], [37.5, 3991.0], [37.6, 3991.0], [37.7, 3992.0], [37.8, 3992.0], [37.9, 4052.0], [38.0, 4067.0], [38.1, 4086.0], [38.2, 4086.0], [38.3, 4086.0], [38.4, 4086.0], [38.5, 4087.0], [38.6, 4087.0], [38.7, 4087.0], [38.8, 4087.0], [38.9, 4087.0], [39.0, 4087.0], [39.1, 4087.0], [39.2, 4087.0], [39.3, 4094.0], [39.4, 4098.0], [39.5, 4098.0], [39.6, 4105.0], [39.7, 4106.0], [39.8, 4106.0], [39.9, 4108.0], [40.0, 4108.0], [40.1, 4109.0], [40.2, 4109.0], [40.3, 4109.0], [40.4, 4110.0], [40.5, 4114.0], [40.6, 4125.0], [40.7, 4159.0], [40.8, 4161.0], [40.9, 4161.0], [41.0, 4161.0], [41.1, 4162.0], [41.2, 4162.0], [41.3, 4162.0], [41.4, 4162.0], [41.5, 4163.0], [41.6, 4187.0], [41.7, 4189.0], [41.8, 4190.0], [41.9, 4195.0], [42.0, 4196.0], [42.1, 4196.0], [42.2, 4196.0], [42.3, 4196.0], [42.4, 4197.0], [42.5, 4203.0], [42.6, 4212.0], [42.7, 4212.0], [42.8, 4213.0], [42.9, 4214.0], [43.0, 4215.0], [43.1, 4215.0], [43.2, 4215.0], [43.3, 4215.0], [43.4, 4233.0], [43.5, 4234.0], [43.6, 4236.0], [43.7, 4237.0], [43.8, 4239.0], [43.9, 4239.0], [44.0, 4241.0], [44.1, 4241.0], [44.2, 4241.0], [44.3, 4241.0], [44.4, 4242.0], [44.5, 4242.0], [44.6, 4242.0], [44.7, 4242.0], [44.8, 4243.0], [44.9, 4278.0], [45.0, 4281.0], [45.1, 4301.0], [45.2, 4342.0], [45.3, 4349.0], [45.4, 4350.0], [45.5, 4350.0], [45.6, 4350.0], [45.7, 4379.0], [45.8, 4386.0], [45.9, 4392.0], [46.0, 4392.0], [46.1, 4456.0], [46.2, 4470.0], [46.3, 4471.0], [46.4, 4472.0], [46.5, 4472.0], [46.6, 4472.0], [46.7, 4472.0], [46.8, 4473.0], [46.9, 4477.0], [47.0, 4499.0], [47.1, 4646.0], [47.2, 4646.0], [47.3, 4647.0], [47.4, 4647.0], [47.5, 4648.0], [47.6, 4648.0], [47.7, 4648.0], [47.8, 4657.0], [47.9, 4667.0], [48.0, 4667.0], [48.1, 4667.0], [48.2, 4667.0], [48.3, 4668.0], [48.4, 4668.0], [48.5, 4668.0], [48.6, 4669.0], [48.7, 4678.0], [48.8, 4679.0], [48.9, 4679.0], [49.0, 4680.0], [49.1, 4680.0], [49.2, 4680.0], [49.3, 4680.0], [49.4, 4688.0], [49.5, 4690.0], [49.6, 4715.0], [49.7, 4715.0], [49.8, 4716.0], [49.9, 4716.0], [50.0, 4717.0], [50.1, 4773.0], [50.2, 4773.0], [50.3, 4773.0], [50.4, 4773.0], [50.5, 4773.0], [50.6, 4774.0], [50.7, 4774.0], [50.8, 4774.0], [50.9, 4780.0], [51.0, 4780.0], [51.1, 4780.0], [51.2, 4781.0], [51.3, 4782.0], [51.4, 4782.0], [51.5, 4866.0], [51.6, 4888.0], [51.7, 4888.0], [51.8, 4895.0], [51.9, 4895.0], [52.0, 4896.0], [52.1, 4896.0], [52.2, 4896.0], [52.3, 4896.0], [52.4, 4950.0], [52.5, 4954.0], [52.6, 5038.0], [52.7, 5040.0], [52.8, 5042.0], [52.9, 5044.0], [53.0, 5072.0], [53.1, 5149.0], [53.2, 5209.0], [53.3, 5211.0], [53.4, 5211.0], [53.5, 5215.0], [53.6, 5248.0], [53.7, 5265.0], [53.8, 5266.0], [53.9, 5266.0], [54.0, 5267.0], [54.1, 5268.0], [54.2, 5269.0], [54.3, 5281.0], [54.4, 5288.0], [54.5, 5289.0], [54.6, 5290.0], [54.7, 5290.0], [54.8, 5290.0], [54.9, 5291.0], [55.0, 5291.0], [55.1, 5305.0], [55.2, 5305.0], [55.3, 5305.0], [55.4, 5305.0], [55.5, 5305.0], [55.6, 5305.0], [55.7, 5305.0], [55.8, 5305.0], [55.9, 5306.0], [56.0, 5306.0], [56.1, 5306.0], [56.2, 5306.0], [56.3, 5306.0], [56.4, 5307.0], [56.5, 5307.0], [56.6, 5307.0], [56.7, 5307.0], [56.8, 5308.0], [56.9, 5308.0], [57.0, 5311.0], [57.1, 5318.0], [57.2, 5320.0], [57.3, 5321.0], [57.4, 5347.0], [57.5, 5347.0], [57.6, 5347.0], [57.7, 5348.0], [57.8, 5349.0], [57.9, 5349.0], [58.0, 5349.0], [58.1, 5349.0], [58.2, 5349.0], [58.3, 5349.0], [58.4, 5350.0], [58.5, 5351.0], [58.6, 5377.0], [58.7, 5379.0], [58.8, 5379.0], [58.9, 5382.0], [59.0, 5383.0], [59.1, 5384.0], [59.2, 5399.0], [59.3, 5401.0], [59.4, 5415.0], [59.5, 5416.0], [59.6, 5416.0], [59.7, 5417.0], [59.8, 5424.0], [59.9, 5424.0], [60.0, 5424.0], [60.1, 5424.0], [60.2, 5424.0], [60.3, 5425.0], [60.4, 5426.0], [60.5, 5426.0], [60.6, 5426.0], [60.7, 5426.0], [60.8, 5427.0], [60.9, 5427.0], [61.0, 5427.0], [61.1, 5427.0], [61.2, 5427.0], [61.3, 5428.0], [61.4, 5428.0], [61.5, 5432.0], [61.6, 5473.0], [61.7, 5508.0], [61.8, 5509.0], [61.9, 5509.0], [62.0, 5509.0], [62.1, 5510.0], [62.2, 5510.0], [62.3, 5510.0], [62.4, 5512.0], [62.5, 5516.0], [62.6, 5516.0], [62.7, 5539.0], [62.8, 5551.0], [62.9, 5601.0], [63.0, 5616.0], [63.1, 5669.0], [63.2, 5670.0], [63.3, 5671.0], [63.4, 5676.0], [63.5, 5713.0], [63.6, 5728.0], [63.7, 5733.0], [63.8, 5733.0], [63.9, 5734.0], [64.0, 5762.0], [64.1, 5781.0], [64.2, 5781.0], [64.3, 5782.0], [64.4, 5795.0], [64.5, 5796.0], [64.6, 5796.0], [64.7, 5796.0], [64.8, 5798.0], [64.9, 5808.0], [65.0, 5809.0], [65.1, 5810.0], [65.2, 5811.0], [65.3, 5812.0], [65.4, 5813.0], [65.5, 5814.0], [65.6, 5816.0], [65.7, 5837.0], [65.8, 5837.0], [65.9, 5837.0], [66.0, 5837.0], [66.1, 5838.0], [66.2, 5838.0], [66.3, 5839.0], [66.4, 5848.0], [66.5, 5866.0], [66.6, 5867.0], [66.7, 5869.0], [66.8, 5870.0], [66.9, 5884.0], [67.0, 5884.0], [67.1, 5885.0], [67.2, 5888.0], [67.3, 5904.0], [67.4, 5911.0], [67.5, 5917.0], [67.6, 5920.0], [67.7, 5921.0], [67.8, 5921.0], [67.9, 5924.0], [68.0, 5924.0], [68.1, 5924.0], [68.2, 5925.0], [68.3, 5925.0], [68.4, 5925.0], [68.5, 5926.0], [68.6, 5927.0], [68.7, 5943.0], [68.8, 5945.0], [68.9, 5948.0], [69.0, 5955.0], [69.1, 5957.0], [69.2, 5960.0], [69.3, 5962.0], [69.4, 5972.0], [69.5, 5972.0], [69.6, 5974.0], [69.7, 5984.0], [69.8, 5984.0], [69.9, 5985.0], [70.0, 5990.0], [70.1, 5991.0], [70.2, 5992.0], [70.3, 5994.0], [70.4, 6001.0], [70.5, 6001.0], [70.6, 6002.0], [70.7, 6002.0], [70.8, 6002.0], [70.9, 6003.0], [71.0, 6003.0], [71.1, 6003.0], [71.2, 6003.0], [71.3, 6004.0], [71.4, 6005.0], [71.5, 6005.0], [71.6, 6007.0], [71.7, 6008.0], [71.8, 6011.0], [71.9, 6032.0], [72.0, 6033.0], [72.1, 6036.0], [72.2, 6048.0], [72.3, 6051.0], [72.4, 6080.0], [72.5, 6080.0], [72.6, 6083.0], [72.7, 6102.0], [72.8, 6103.0], [72.9, 6103.0], [73.0, 6104.0], [73.1, 6125.0], [73.2, 6135.0], [73.3, 6136.0], [73.4, 6137.0], [73.5, 6137.0], [73.6, 6137.0], [73.7, 6138.0], [73.8, 6138.0], [73.9, 6155.0], [74.0, 6155.0], [74.1, 6156.0], [74.2, 6165.0], [74.3, 6165.0], [74.4, 6167.0], [74.5, 6174.0], [74.6, 6175.0], [74.7, 6176.0], [74.8, 6177.0], [74.9, 6180.0], [75.0, 6184.0], [75.1, 6186.0], [75.2, 6199.0], [75.3, 6253.0], [75.4, 6255.0], [75.5, 6257.0], [75.6, 6271.0], [75.7, 6274.0], [75.8, 6284.0], [75.9, 6287.0], [76.0, 6298.0], [76.1, 6298.0], [76.2, 6299.0], [76.3, 6300.0], [76.4, 6300.0], [76.5, 6300.0], [76.6, 6301.0], [76.7, 6301.0], [76.8, 6302.0], [76.9, 6303.0], [77.0, 6303.0], [77.1, 6304.0], [77.2, 6304.0], [77.3, 6304.0], [77.4, 6305.0], [77.5, 6306.0], [77.6, 6320.0], [77.7, 6321.0], [77.8, 6336.0], [77.9, 6388.0], [78.0, 6398.0], [78.1, 6401.0], [78.2, 6402.0], [78.3, 6405.0], [78.4, 6406.0], [78.5, 6406.0], [78.6, 6417.0], [78.7, 6448.0], [78.8, 6449.0], [78.9, 6460.0], [79.0, 6473.0], [79.1, 6474.0], [79.2, 6481.0], [79.3, 6482.0], [79.4, 6483.0], [79.5, 6511.0], [79.6, 6511.0], [79.7, 6524.0], [79.8, 6562.0], [79.9, 6564.0], [80.0, 6574.0], [80.1, 6584.0], [80.2, 6591.0], [80.3, 6607.0], [80.4, 6608.0], [80.5, 6674.0], [80.6, 6675.0], [80.7, 6676.0], [80.8, 6691.0], [80.9, 6703.0], [81.0, 6755.0], [81.1, 6762.0], [81.2, 6786.0], [81.3, 6797.0], [81.4, 6835.0], [81.5, 6860.0], [81.6, 6888.0], [81.7, 6888.0], [81.8, 6889.0], [81.9, 6890.0], [82.0, 6891.0], [82.1, 6891.0], [82.2, 6891.0], [82.3, 6892.0], [82.4, 6892.0], [82.5, 6892.0], [82.6, 6938.0], [82.7, 6939.0], [82.8, 6962.0], [82.9, 6988.0], [83.0, 6988.0], [83.1, 6988.0], [83.2, 6989.0], [83.3, 6989.0], [83.4, 6990.0], [83.5, 7007.0], [83.6, 7029.0], [83.7, 7030.0], [83.8, 7104.0], [83.9, 7192.0], [84.0, 7232.0], [84.1, 7232.0], [84.2, 7233.0], [84.3, 7254.0], [84.4, 7268.0], [84.5, 7269.0], [84.6, 7270.0], [84.7, 7272.0], [84.8, 7292.0], [84.9, 7338.0], [85.0, 7339.0], [85.1, 7339.0], [85.2, 7384.0], [85.3, 7402.0], [85.4, 7444.0], [85.5, 7461.0], [85.6, 7461.0], [85.7, 7461.0], [85.8, 7461.0], [85.9, 7461.0], [86.0, 7461.0], [86.1, 7461.0], [86.2, 7461.0], [86.3, 7462.0], [86.4, 7465.0], [86.5, 7472.0], [86.6, 7473.0], [86.7, 7477.0], [86.8, 7486.0], [86.9, 7486.0], [87.0, 7487.0], [87.1, 7488.0], [87.2, 7491.0], [87.3, 7502.0], [87.4, 7541.0], [87.5, 7541.0], [87.6, 7541.0], [87.7, 7542.0], [87.8, 7542.0], [87.9, 7542.0], [88.0, 7543.0], [88.1, 7543.0], [88.2, 7543.0], [88.3, 7559.0], [88.4, 7559.0], [88.5, 7561.0], [88.6, 7579.0], [88.7, 7602.0], [88.8, 7603.0], [88.9, 7604.0], [89.0, 7631.0], [89.1, 7658.0], [89.2, 7719.0], [89.3, 7746.0], [89.4, 7768.0], [89.5, 7769.0], [89.6, 7769.0], [89.7, 7769.0], [89.8, 7770.0], [89.9, 7770.0], [90.0, 7771.0], [90.1, 7771.0], [90.2, 7807.0], [90.3, 7835.0], [90.4, 7837.0], [90.5, 7838.0], [90.6, 7856.0], [90.7, 7860.0], [90.8, 7861.0], [90.9, 7865.0], [91.0, 7865.0], [91.1, 7865.0], [91.2, 7900.0], [91.3, 7902.0], [91.4, 7916.0], [91.5, 8055.0], [91.6, 8057.0], [91.7, 8057.0], [91.8, 8057.0], [91.9, 8058.0], [92.0, 8058.0], [92.1, 8059.0], [92.2, 8066.0], [92.3, 8066.0], [92.4, 8067.0], [92.5, 8229.0], [92.6, 8296.0], [92.7, 8424.0], [92.8, 8425.0], [92.9, 8425.0], [93.0, 8425.0], [93.1, 8458.0], [93.2, 8473.0], [93.3, 8529.0], [93.4, 8531.0], [93.5, 8532.0], [93.6, 8534.0], [93.7, 8644.0], [93.8, 8647.0], [93.9, 8647.0], [94.0, 8648.0], [94.1, 8648.0], [94.2, 8648.0], [94.3, 8648.0], [94.4, 8648.0], [94.5, 8650.0], [94.6, 8677.0], [94.7, 8678.0], [94.8, 8679.0], [94.9, 8679.0], [95.0, 8679.0], [95.1, 8679.0], [95.2, 8680.0], [95.3, 8680.0], [95.4, 8680.0], [95.5, 8681.0], [95.6, 8682.0], [95.7, 8684.0], [95.8, 8684.0], [95.9, 8685.0], [96.0, 8685.0], [96.1, 8685.0], [96.2, 8685.0], [96.3, 8686.0], [96.4, 8727.0], [96.5, 8738.0], [96.6, 8739.0], [96.7, 8739.0], [96.8, 8740.0], [96.9, 8740.0], [97.0, 8742.0], [97.1, 8805.0], [97.2, 8897.0], [97.3, 8911.0], [97.4, 9312.0], [97.5, 9522.0], [97.6, 9523.0], [97.7, 9523.0], [97.8, 9581.0], [97.9, 9718.0], [98.0, 9718.0], [98.1, 9718.0], [98.2, 9719.0], [98.3, 9720.0], [98.4, 9808.0], [98.5, 9808.0], [98.6, 10227.0], [98.7, 10228.0], [98.8, 10228.0], [98.9, 10229.0], [99.0, 10230.0], [99.1, 10495.0], [99.2, 10498.0], [99.3, 10720.0], [99.4, 10722.0], [99.5, 10736.0], [99.6, 11154.0], [99.7, 11154.0], [99.8, 11155.0], [99.9, 11156.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 124.0, "series": [{"data": [[600.0, 40.0], [700.0, 26.0], [800.0, 20.0], [900.0, 19.0], [1000.0, 9.0], [1100.0, 15.0], [1200.0, 4.0], [1300.0, 10.0], [1400.0, 29.0], [1500.0, 4.0], [1600.0, 27.0], [1700.0, 30.0], [1800.0, 77.0], [1900.0, 58.0], [2000.0, 40.0], [2100.0, 34.0], [2200.0, 59.0], [2300.0, 9.0], [2400.0, 17.0], [2500.0, 9.0], [2600.0, 37.0], [2800.0, 34.0], [2700.0, 4.0], [2900.0, 6.0], [3000.0, 40.0], [3100.0, 46.0], [3200.0, 6.0], [3300.0, 54.0], [3400.0, 34.0], [3500.0, 30.0], [3600.0, 14.0], [3700.0, 4.0], [3800.0, 7.0], [3900.0, 49.0], [4000.0, 51.0], [4200.0, 76.0], [4100.0, 82.0], [4300.0, 28.0], [4400.0, 29.0], [4600.0, 73.0], [4800.0, 24.0], [4700.0, 57.0], [4900.0, 6.0], [5100.0, 4.0], [5000.0, 14.0], [5200.0, 54.0], [5300.0, 124.0], [5400.0, 69.0], [5500.0, 36.0], [5600.0, 15.0], [5700.0, 42.0], [5800.0, 68.0], [5900.0, 91.0], [6100.0, 73.0], [6000.0, 68.0], [6300.0, 51.0], [6200.0, 31.0], [6500.0, 24.0], [6400.0, 40.0], [6600.0, 18.0], [6900.0, 25.0], [6700.0, 13.0], [6800.0, 37.0], [7000.0, 10.0], [7100.0, 4.0], [7200.0, 27.0], [7400.0, 58.0], [7300.0, 10.0], [7500.0, 42.0], [7600.0, 15.0], [7800.0, 29.0], [7700.0, 29.0], [7900.0, 9.0], [8100.0, 1.0], [8000.0, 27.0], [8700.0, 20.0], [8400.0, 17.0], [8500.0, 12.0], [8300.0, 2.0], [8200.0, 5.0], [8600.0, 78.0], [9000.0, 1.0], [8800.0, 5.0], [9200.0, 1.0], [8900.0, 2.0], [9500.0, 10.0], [9300.0, 3.0], [9700.0, 14.0], [9800.0, 8.0], [10200.0, 14.0], [10400.0, 4.0], [10700.0, 9.0], [11100.0, 14.0], [300.0, 76.0], [400.0, 62.0], [500.0, 58.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 67.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2695.0, "series": [{"data": [[0.0, 138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 67.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2695.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.863636363636362, "minX": 1.78195134E12, "maxY": 192.48643761301994, "series": [{"data": [[1.7819514E12, 110.33577878103847], [1.78195146E12, 192.48643761301994], [1.78195134E12, 5.863636363636362]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 208 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195146E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 339.6666666666667, "minX": 2.0, "maxY": 9524.0, "series": [{"data": [[2.0, 5815.5], [3.0, 2261.666666666667], [4.0, 339.6666666666667], [5.0, 341.6666666666667], [6.0, 2394.125], [7.0, 350.1666666666667], [8.0, 354.8], [9.0, 359.42857142857144], [10.0, 2182.9166666666665], [11.0, 375.8571428571429], [12.0, 385.7], [13.0, 398.0], [14.0, 407.44444444444446], [15.0, 2001.8235294117646], [16.0, 387.90000000000003], [17.0, 402.1666666666667], [18.0, 417.14285714285717], [19.0, 1632.1052631578948], [20.0, 446.0], [21.0, 998.2727272727273], [22.0, 5801.0], [23.0, 740.7391304347827], [24.0, 5724.0], [25.0, 783.8333333333335], [26.0, 3107.0], [27.0, 826.2916666666667], [28.0, 1882.0], [29.0, 930.5999999999999], [30.0, 1210.5], [31.0, 777.0], [32.0, 800.5], [33.0, 859.375], [34.0, 889.5], [35.0, 945.0], [36.0, 1026.5714285714287], [37.0, 1100.1666666666667], [38.0, 1375.0], [39.0, 1167.9166666666667], [40.0, 1269.375], [41.0, 1413.4], [42.0, 1461.4], [43.0, 1528.5], [44.0, 1482.6], [45.0, 1651.25], [46.0, 1769.6666666666667], [48.0, 1887.111111111111], [49.0, 2257.1111111111113], [50.0, 2236.8], [52.0, 2114.2], [53.0, 2012.0000000000002], [54.0, 2222.1666666666665], [56.0, 2069.0833333333335], [57.0, 2080.0], [59.0, 1884.6923076923078], [61.0, 1924.8666666666668], [62.0, 2183.9333333333334], [64.0, 1951.4117647058824], [66.0, 1895.6250000000002], [67.0, 1837.6315789473688], [70.0, 1915.9411764705883], [69.0, 6304.0], [72.0, 2006.0952380952388], [74.0, 2038.3000000000002], [73.0, 6305.0], [76.0, 2277.375], [78.0, 2054.6363636363635], [81.0, 2183.6400000000003], [83.0, 6306.0], [84.0, 2419.56], [87.0, 2864.413793103448], [91.0, 3011.9655172413795], [89.0, 6011.333333333333], [94.0, 3375.6], [95.0, 5426.0], [93.0, 6303.0], [98.0, 3020.0624999999995], [97.0, 5427.0], [96.0, 5428.0], [102.0, 3251.361111111111], [106.0, 3184.594594594595], [104.0, 5426.0], [110.0, 3216.0769230769224], [111.0, 5616.812499999998], [109.0, 5601.200000000001], [108.0, 5425.5], [112.0, 3645.0], [116.0, 3622.0], [120.0, 3785.0], [124.0, 4052.0], [125.0, 3646.466666666667], [131.0, 3949.333333333334], [135.0, 4280.0], [137.0, 4144.791666666668], [138.0, 3852.0], [143.0, 5263.0], [141.0, 4115.0], [139.0, 3644.0], [144.0, 4558.28], [148.0, 4688.5], [150.0, 5054.7027027027025], [151.0, 4030.6315789473683], [157.0, 4955.4], [158.0, 5134.754716981131], [159.0, 3864.0], [155.0, 3864.0], [162.0, 4744.25], [163.0, 4467.25], [165.0, 5305.266666666666], [166.0, 4281.111111111111], [167.0, 4046.4545454545455], [164.0, 4087.0], [161.0, 3938.0], [160.0, 4086.0], [172.0, 6567.0], [173.0, 5080.333333333331], [174.0, 7272.0], [168.0, 7273.0], [176.0, 5145.0], [177.0, 5528.200000000001], [179.0, 6738.5], [180.0, 5432.391304347827], [181.0, 4499.0], [182.0, 4896.999999999999], [183.0, 5140.666666666667], [187.0, 6742.571428571429], [188.0, 6510.375], [189.0, 5240.875], [190.0, 4111.0], [184.0, 4114.0], [192.0, 5644.4], [193.0, 5733.125], [194.0, 6453.0], [195.0, 6058.384615384616], [198.0, 6672.0], [199.0, 5401.916666666667], [196.0, 9524.0], [200.0, 6084.000000000001], [201.0, 6132.5], [202.0, 6332.6], [206.0, 7377.0526315789475], [204.0, 5610.0666666666675], [208.0, 6856.05215646941]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[140.87344827586222, 4607.611379310336]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 208.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 57.93333333333333, "minX": 1.78195134E12, "maxY": 6822.433333333333, "series": [{"data": [[1.7819514E12, 6822.433333333333], [1.78195146E12, 4260.8], [1.78195134E12, 84.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7819514E12, 4666.266666666666], [1.78195146E12, 2912.4666666666667], [1.78195134E12, 57.93333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195146E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 359.1363636363636, "minX": 1.78195134E12, "maxY": 6590.223327305608, "series": [{"data": [[1.7819514E12, 3422.9034988713333], [1.78195146E12, 6590.223327305608], [1.78195134E12, 359.1363636363636]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195146E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 359.00000000000006, "minX": 1.78195134E12, "maxY": 6590.214285714288, "series": [{"data": [[1.7819514E12, 3422.893340857786], [1.78195146E12, 6590.214285714288], [1.78195134E12, 359.00000000000006]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195146E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0406320541760723, "minX": 1.78195134E12, "maxY": 0.7272727272727272, "series": [{"data": [[1.7819514E12, 0.0406320541760723], [1.78195146E12, 0.04339963833634714], [1.78195134E12, 0.7272727272727272]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195146E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 334.0, "minX": 1.78195134E12, "maxY": 619.0, "series": [{"data": [[1.7819514E12, 619.0], [1.78195134E12, 501.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7819514E12, 353.0], [1.78195134E12, 334.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7819514E12, 579.2], [1.78195134E12, 439.29999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7819514E12, 617.3199999999999], [1.78195134E12, 501.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7819514E12, 437.0], [1.78195134E12, 347.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7819514E12, 599.8], [1.78195134E12, 496.6499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819514E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 347.0, "minX": 1.0, "maxY": 8679.0, "series": [{"data": [[32.0, 400.5], [17.0, 348.0], [35.0, 401.0], [38.0, 486.0], [5.0, 347.0], [45.0, 560.0], [24.0, 367.5], [28.0, 604.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1988.0], [32.0, 4360.5], [2.0, 6961.5], [35.0, 4487.5], [36.0, 3375.0], [37.0, 7719.0], [38.0, 660.0], [39.0, 3435.0], [41.0, 3119.0], [43.0, 4161.0], [45.0, 6008.0], [47.0, 2009.0], [46.0, 4202.0], [3.0, 4281.0], [49.0, 5305.0], [50.0, 4984.0], [51.0, 5666.0], [55.0, 6988.0], [54.0, 6888.0], [57.0, 4350.0], [63.0, 6188.0], [4.0, 8230.5], [69.0, 6415.0], [80.0, 8679.0], [93.0, 4105.0], [96.0, 4715.0], [105.0, 7486.5], [111.0, 5669.0], [7.0, 5941.0], [114.0, 6266.0], [8.0, 5211.0], [10.0, 7559.0], [11.0, 5993.0], [14.0, 8425.0], [15.0, 5321.0], [1.0, 5263.0], [17.0, 3925.0], [18.0, 3748.0], [19.0, 4896.0], [21.0, 3796.5], [23.0, 2178.0], [25.0, 2298.0], [26.0, 1754.5], [27.0, 6177.0], [28.0, 2625.0], [29.0, 1809.0], [31.0, 1975.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 347.0, "minX": 1.0, "maxY": 8679.0, "series": [{"data": [[32.0, 400.5], [17.0, 348.0], [35.0, 401.0], [38.0, 486.0], [5.0, 347.0], [45.0, 560.0], [24.0, 367.5], [28.0, 604.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1988.0], [32.0, 4360.5], [2.0, 6961.5], [35.0, 4487.5], [36.0, 3375.0], [37.0, 7719.0], [38.0, 660.0], [39.0, 3435.0], [41.0, 3119.0], [43.0, 4161.0], [45.0, 6008.0], [47.0, 2009.0], [46.0, 4202.0], [3.0, 4281.0], [49.0, 5305.0], [50.0, 4984.0], [51.0, 5666.0], [55.0, 6988.0], [54.0, 6888.0], [57.0, 4350.0], [63.0, 6188.0], [4.0, 8230.5], [69.0, 6415.0], [80.0, 8679.0], [93.0, 4105.0], [96.0, 4715.0], [105.0, 7486.5], [111.0, 5669.0], [7.0, 5941.0], [114.0, 6266.0], [8.0, 5211.0], [10.0, 7559.0], [11.0, 5993.0], [14.0, 8425.0], [15.0, 5321.0], [1.0, 5263.0], [17.0, 3925.0], [18.0, 3748.0], [19.0, 4896.0], [21.0, 3796.5], [23.0, 2178.0], [25.0, 2298.0], [26.0, 1754.5], [27.0, 6177.0], [28.0, 2625.0], [29.0, 1809.0], [31.0, 1975.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.78195134E12, "maxY": 32.86666666666667, "series": [{"data": [[1.7819514E12, 32.86666666666667], [1.78195146E12, 14.966666666666667], [1.78195134E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195146E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.78195134E12, "maxY": 29.416666666666668, "series": [{"data": [[1.7819514E12, 29.416666666666668], [1.78195146E12, 17.083333333333332], [1.78195134E12, 0.36666666666666664]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7819514E12, 0.11666666666666667], [1.78195146E12, 1.35]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195146E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.78195134E12, "maxY": 26.483333333333334, "series": [{"data": [[1.7819514E12, 3.05], [1.78195134E12, 0.36666666666666664]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7819514E12, 26.483333333333334], [1.78195146E12, 18.433333333333334]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195146E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.78195134E12, "maxY": 26.483333333333334, "series": [{"data": [[1.7819514E12, 3.05], [1.78195134E12, 0.36666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7819514E12, 26.483333333333334], [1.78195146E12, 18.433333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195146E12, "title": "Total Transactions Per Second"}},
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

