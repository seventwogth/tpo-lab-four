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
        data: {"result": {"minY": 321.0, "minX": 0.0, "maxY": 9942.0, "series": [{"data": [[0.0, 321.0], [0.1, 323.0], [0.2, 324.0], [0.3, 326.0], [0.4, 329.0], [0.5, 331.0], [0.6, 333.0], [0.7, 335.0], [0.8, 337.0], [0.9, 339.0], [1.0, 340.0], [1.1, 342.0], [1.2, 345.0], [1.3, 348.0], [1.4, 349.0], [1.5, 355.0], [1.6, 358.0], [1.7, 359.0], [1.8, 362.0], [1.9, 365.0], [2.0, 367.0], [2.1, 370.0], [2.2, 373.0], [2.3, 378.0], [2.4, 381.0], [2.5, 383.0], [2.6, 388.0], [2.7, 391.0], [2.8, 393.0], [2.9, 399.0], [3.0, 403.0], [3.1, 405.0], [3.2, 410.0], [3.3, 411.0], [3.4, 413.0], [3.5, 415.0], [3.6, 418.0], [3.7, 420.0], [3.8, 424.0], [3.9, 426.0], [4.0, 428.0], [4.1, 430.0], [4.2, 432.0], [4.3, 438.0], [4.4, 442.0], [4.5, 446.0], [4.6, 451.0], [4.7, 456.0], [4.8, 463.0], [4.9, 465.0], [5.0, 471.0], [5.1, 478.0], [5.2, 484.0], [5.3, 488.0], [5.4, 493.0], [5.5, 498.0], [5.6, 507.0], [5.7, 512.0], [5.8, 518.0], [5.9, 523.0], [6.0, 527.0], [6.1, 536.0], [6.2, 543.0], [6.3, 547.0], [6.4, 554.0], [6.5, 559.0], [6.6, 572.0], [6.7, 577.0], [6.8, 583.0], [6.9, 591.0], [7.0, 598.0], [7.1, 610.0], [7.2, 615.0], [7.3, 621.0], [7.4, 629.0], [7.5, 640.0], [7.6, 647.0], [7.7, 655.0], [7.8, 666.0], [7.9, 683.0], [8.0, 688.0], [8.1, 693.0], [8.2, 700.0], [8.3, 715.0], [8.4, 724.0], [8.5, 732.0], [8.6, 743.0], [8.7, 754.0], [8.8, 769.0], [8.9, 777.0], [9.0, 785.0], [9.1, 797.0], [9.2, 813.0], [9.3, 822.0], [9.4, 834.0], [9.5, 848.0], [9.6, 865.0], [9.7, 874.0], [9.8, 883.0], [9.9, 897.0], [10.0, 920.0], [10.1, 927.0], [10.2, 942.0], [10.3, 957.0], [10.4, 980.0], [10.5, 996.0], [10.6, 1015.0], [10.7, 1036.0], [10.8, 1052.0], [10.9, 1064.0], [11.0, 1091.0], [11.1, 1116.0], [11.2, 1150.0], [11.3, 1168.0], [11.4, 1192.0], [11.5, 1237.0], [11.6, 1256.0], [11.7, 1282.0], [11.8, 1294.0], [11.9, 1333.0], [12.0, 1348.0], [12.1, 1353.0], [12.2, 1400.0], [12.3, 1413.0], [12.4, 1417.0], [12.5, 1420.0], [12.6, 1421.0], [12.7, 1448.0], [12.8, 1460.0], [12.9, 1461.0], [13.0, 1466.0], [13.1, 1480.0], [13.2, 1494.0], [13.3, 1514.0], [13.4, 1517.0], [13.5, 1530.0], [13.6, 1532.0], [13.7, 1560.0], [13.8, 1565.0], [13.9, 1576.0], [14.0, 1578.0], [14.1, 1580.0], [14.2, 1592.0], [14.3, 1605.0], [14.4, 1606.0], [14.5, 1624.0], [14.6, 1626.0], [14.7, 1632.0], [14.8, 1635.0], [14.9, 1639.0], [15.0, 1645.0], [15.1, 1645.0], [15.2, 1648.0], [15.3, 1649.0], [15.4, 1658.0], [15.5, 1660.0], [15.6, 1660.0], [15.7, 1662.0], [15.8, 1686.0], [15.9, 1697.0], [16.0, 1697.0], [16.1, 1699.0], [16.2, 1699.0], [16.3, 1700.0], [16.4, 1704.0], [16.5, 1705.0], [16.6, 1724.0], [16.7, 1724.0], [16.8, 1724.0], [16.9, 1726.0], [17.0, 1726.0], [17.1, 1766.0], [17.2, 1766.0], [17.3, 1767.0], [17.4, 1767.0], [17.5, 1767.0], [17.6, 1767.0], [17.7, 1769.0], [17.8, 1771.0], [17.9, 1772.0], [18.0, 1773.0], [18.1, 1787.0], [18.2, 1788.0], [18.3, 1790.0], [18.4, 1791.0], [18.5, 1796.0], [18.6, 1801.0], [18.7, 1801.0], [18.8, 1801.0], [18.9, 1804.0], [19.0, 1810.0], [19.1, 1812.0], [19.2, 1854.0], [19.3, 1855.0], [19.4, 1855.0], [19.5, 1855.0], [19.6, 1856.0], [19.7, 1857.0], [19.8, 1858.0], [19.9, 1860.0], [20.0, 1862.0], [20.1, 1862.0], [20.2, 1863.0], [20.3, 1896.0], [20.4, 1907.0], [20.5, 1908.0], [20.6, 1909.0], [20.7, 1912.0], [20.8, 1913.0], [20.9, 1913.0], [21.0, 1914.0], [21.1, 1933.0], [21.2, 1934.0], [21.3, 1934.0], [21.4, 1934.0], [21.5, 1977.0], [21.6, 1977.0], [21.7, 1977.0], [21.8, 1977.0], [21.9, 1977.0], [22.0, 1978.0], [22.1, 1978.0], [22.2, 2000.0], [22.3, 2001.0], [22.4, 2001.0], [22.5, 2001.0], [22.6, 2002.0], [22.7, 2024.0], [22.8, 2025.0], [22.9, 2064.0], [23.0, 2084.0], [23.1, 2095.0], [23.2, 2108.0], [23.3, 2168.0], [23.4, 2168.0], [23.5, 2169.0], [23.6, 2172.0], [23.7, 2178.0], [23.8, 2178.0], [23.9, 2178.0], [24.0, 2179.0], [24.1, 2181.0], [24.2, 2209.0], [24.3, 2211.0], [24.4, 2211.0], [24.5, 2212.0], [24.6, 2212.0], [24.7, 2230.0], [24.8, 2230.0], [24.9, 2230.0], [25.0, 2231.0], [25.1, 2231.0], [25.2, 2233.0], [25.3, 2315.0], [25.4, 2317.0], [25.5, 2317.0], [25.6, 2319.0], [25.7, 2391.0], [25.8, 2430.0], [25.9, 2431.0], [26.0, 2431.0], [26.1, 2431.0], [26.2, 2439.0], [26.3, 2439.0], [26.4, 2440.0], [26.5, 2440.0], [26.6, 2441.0], [26.7, 2441.0], [26.8, 2519.0], [26.9, 2523.0], [27.0, 2523.0], [27.1, 2524.0], [27.2, 2524.0], [27.3, 2542.0], [27.4, 2650.0], [27.5, 2650.0], [27.6, 2651.0], [27.7, 2651.0], [27.8, 2651.0], [27.9, 2651.0], [28.0, 2651.0], [28.1, 2651.0], [28.2, 2731.0], [28.3, 2732.0], [28.4, 2733.0], [28.5, 2746.0], [28.6, 2746.0], [28.7, 2746.0], [28.8, 2746.0], [28.9, 2747.0], [29.0, 2747.0], [29.1, 2747.0], [29.2, 2748.0], [29.3, 2776.0], [29.4, 2776.0], [29.5, 2822.0], [29.6, 2833.0], [29.7, 2837.0], [29.8, 2837.0], [29.9, 2837.0], [30.0, 2843.0], [30.1, 2843.0], [30.2, 2845.0], [30.3, 2848.0], [30.4, 2873.0], [30.5, 2972.0], [30.6, 3027.0], [30.7, 3027.0], [30.8, 3028.0], [30.9, 3028.0], [31.0, 3028.0], [31.1, 3029.0], [31.2, 3029.0], [31.3, 3029.0], [31.4, 3068.0], [31.5, 3068.0], [31.6, 3110.0], [31.7, 3110.0], [31.8, 3110.0], [31.9, 3110.0], [32.0, 3110.0], [32.1, 3110.0], [32.2, 3110.0], [32.3, 3111.0], [32.4, 3112.0], [32.5, 3120.0], [32.6, 3163.0], [32.7, 3170.0], [32.8, 3170.0], [32.9, 3170.0], [33.0, 3178.0], [33.1, 3186.0], [33.2, 3224.0], [33.3, 3225.0], [33.4, 3225.0], [33.5, 3226.0], [33.6, 3226.0], [33.7, 3226.0], [33.8, 3226.0], [33.9, 3227.0], [34.0, 3284.0], [34.1, 3284.0], [34.2, 3284.0], [34.3, 3284.0], [34.4, 3284.0], [34.5, 3285.0], [34.6, 3285.0], [34.7, 3285.0], [34.8, 3290.0], [34.9, 3291.0], [35.0, 3291.0], [35.1, 3291.0], [35.2, 3292.0], [35.3, 3292.0], [35.4, 3292.0], [35.5, 3292.0], [35.6, 3294.0], [35.7, 3341.0], [35.8, 3374.0], [35.9, 3375.0], [36.0, 3375.0], [36.1, 3375.0], [36.2, 3375.0], [36.3, 3376.0], [36.4, 3376.0], [36.5, 3376.0], [36.6, 3376.0], [36.7, 3404.0], [36.8, 3405.0], [36.9, 3409.0], [37.0, 3411.0], [37.1, 3411.0], [37.2, 3413.0], [37.3, 3413.0], [37.4, 3440.0], [37.5, 3458.0], [37.6, 3491.0], [37.7, 3496.0], [37.8, 3497.0], [37.9, 3497.0], [38.0, 3497.0], [38.1, 3498.0], [38.2, 3498.0], [38.3, 3514.0], [38.4, 3572.0], [38.5, 3661.0], [38.6, 3769.0], [38.7, 3788.0], [38.8, 3805.0], [38.9, 3806.0], [39.0, 3806.0], [39.1, 3806.0], [39.2, 3807.0], [39.3, 3821.0], [39.4, 3823.0], [39.5, 3823.0], [39.6, 3864.0], [39.7, 3940.0], [39.8, 3947.0], [39.9, 3947.0], [40.0, 3947.0], [40.1, 3947.0], [40.2, 3948.0], [40.3, 3948.0], [40.4, 3948.0], [40.5, 3948.0], [40.6, 3949.0], [40.7, 3964.0], [40.8, 3965.0], [40.9, 3969.0], [41.0, 3969.0], [41.1, 3970.0], [41.2, 3970.0], [41.3, 3970.0], [41.4, 3970.0], [41.5, 3971.0], [41.6, 3972.0], [41.7, 3972.0], [41.8, 3993.0], [41.9, 3993.0], [42.0, 3994.0], [42.1, 3994.0], [42.2, 3995.0], [42.3, 4005.0], [42.4, 4006.0], [42.5, 4006.0], [42.6, 4039.0], [42.7, 4039.0], [42.8, 4039.0], [42.9, 4040.0], [43.0, 4040.0], [43.1, 4040.0], [43.2, 4040.0], [43.3, 4041.0], [43.4, 4066.0], [43.5, 4068.0], [43.6, 4077.0], [43.7, 4091.0], [43.8, 4100.0], [43.9, 4116.0], [44.0, 4132.0], [44.1, 4132.0], [44.2, 4133.0], [44.3, 4133.0], [44.4, 4133.0], [44.5, 4133.0], [44.6, 4134.0], [44.7, 4134.0], [44.8, 4151.0], [44.9, 4151.0], [45.0, 4151.0], [45.1, 4151.0], [45.2, 4152.0], [45.3, 4152.0], [45.4, 4153.0], [45.5, 4243.0], [45.6, 4251.0], [45.7, 4251.0], [45.8, 4253.0], [45.9, 4253.0], [46.0, 4253.0], [46.1, 4253.0], [46.2, 4253.0], [46.3, 4254.0], [46.4, 4254.0], [46.5, 4274.0], [46.6, 4274.0], [46.7, 4274.0], [46.8, 4274.0], [46.9, 4301.0], [47.0, 4312.0], [47.1, 4314.0], [47.2, 4325.0], [47.3, 4326.0], [47.4, 4326.0], [47.5, 4326.0], [47.6, 4327.0], [47.7, 4327.0], [47.8, 4327.0], [47.9, 4327.0], [48.0, 4327.0], [48.1, 4328.0], [48.2, 4328.0], [48.3, 4328.0], [48.4, 4329.0], [48.5, 4329.0], [48.6, 4329.0], [48.7, 4329.0], [48.8, 4329.0], [48.9, 4329.0], [49.0, 4330.0], [49.1, 4330.0], [49.2, 4331.0], [49.3, 4331.0], [49.4, 4332.0], [49.5, 4333.0], [49.6, 4333.0], [49.7, 4357.0], [49.8, 4379.0], [49.9, 4380.0], [50.0, 4380.0], [50.1, 4380.0], [50.2, 4381.0], [50.3, 4396.0], [50.4, 4445.0], [50.5, 4469.0], [50.6, 4470.0], [50.7, 4470.0], [50.8, 4470.0], [50.9, 4471.0], [51.0, 4516.0], [51.1, 4521.0], [51.2, 4526.0], [51.3, 4526.0], [51.4, 4526.0], [51.5, 4526.0], [51.6, 4526.0], [51.7, 4527.0], [51.8, 4528.0], [51.9, 4529.0], [52.0, 4530.0], [52.1, 4606.0], [52.2, 4615.0], [52.3, 4617.0], [52.4, 4617.0], [52.5, 4617.0], [52.6, 4618.0], [52.7, 4618.0], [52.8, 4618.0], [52.9, 4618.0], [53.0, 4618.0], [53.1, 4618.0], [53.2, 4619.0], [53.3, 4619.0], [53.4, 4619.0], [53.5, 4620.0], [53.6, 4631.0], [53.7, 4658.0], [53.8, 4679.0], [53.9, 4680.0], [54.0, 4702.0], [54.1, 4702.0], [54.2, 4708.0], [54.3, 4708.0], [54.4, 4709.0], [54.5, 4709.0], [54.6, 4709.0], [54.7, 4710.0], [54.8, 4710.0], [54.9, 4710.0], [55.0, 4710.0], [55.1, 4710.0], [55.2, 4711.0], [55.3, 4712.0], [55.4, 4712.0], [55.5, 4722.0], [55.6, 4742.0], [55.7, 4742.0], [55.8, 4743.0], [55.9, 4785.0], [56.0, 4788.0], [56.1, 4789.0], [56.2, 4790.0], [56.3, 4792.0], [56.4, 4793.0], [56.5, 4793.0], [56.6, 4795.0], [56.7, 4795.0], [56.8, 4795.0], [56.9, 4795.0], [57.0, 4795.0], [57.1, 4796.0], [57.2, 4796.0], [57.3, 4818.0], [57.4, 4818.0], [57.5, 4837.0], [57.6, 4837.0], [57.7, 4838.0], [57.8, 4838.0], [57.9, 4838.0], [58.0, 4839.0], [58.1, 4864.0], [58.2, 4866.0], [58.3, 4902.0], [58.4, 4914.0], [58.5, 4915.0], [58.6, 4915.0], [58.7, 4915.0], [58.8, 4922.0], [58.9, 4923.0], [59.0, 4973.0], [59.1, 4978.0], [59.2, 4978.0], [59.3, 4987.0], [59.4, 5016.0], [59.5, 5022.0], [59.6, 5023.0], [59.7, 5023.0], [59.8, 5025.0], [59.9, 5088.0], [60.0, 5124.0], [60.1, 5124.0], [60.2, 5125.0], [60.3, 5125.0], [60.4, 5126.0], [60.5, 5146.0], [60.6, 5148.0], [60.7, 5148.0], [60.8, 5148.0], [60.9, 5168.0], [61.0, 5169.0], [61.1, 5169.0], [61.2, 5170.0], [61.3, 5170.0], [61.4, 5170.0], [61.5, 5170.0], [61.6, 5171.0], [61.7, 5191.0], [61.8, 5192.0], [61.9, 5192.0], [62.0, 5196.0], [62.1, 5203.0], [62.2, 5213.0], [62.3, 5250.0], [62.4, 5252.0], [62.5, 5252.0], [62.6, 5253.0], [62.7, 5253.0], [62.8, 5253.0], [62.9, 5257.0], [63.0, 5274.0], [63.1, 5277.0], [63.2, 5290.0], [63.3, 5291.0], [63.4, 5313.0], [63.5, 5323.0], [63.6, 5323.0], [63.7, 5324.0], [63.8, 5324.0], [63.9, 5324.0], [64.0, 5324.0], [64.1, 5324.0], [64.2, 5324.0], [64.3, 5325.0], [64.4, 5325.0], [64.5, 5325.0], [64.6, 5326.0], [64.7, 5326.0], [64.8, 5326.0], [64.9, 5326.0], [65.0, 5326.0], [65.1, 5326.0], [65.2, 5327.0], [65.3, 5327.0], [65.4, 5328.0], [65.5, 5336.0], [65.6, 5338.0], [65.7, 5338.0], [65.8, 5346.0], [65.9, 5386.0], [66.0, 5416.0], [66.1, 5418.0], [66.2, 5418.0], [66.3, 5418.0], [66.4, 5418.0], [66.5, 5418.0], [66.6, 5418.0], [66.7, 5418.0], [66.8, 5419.0], [66.9, 5426.0], [67.0, 5426.0], [67.1, 5427.0], [67.2, 5427.0], [67.3, 5429.0], [67.4, 5437.0], [67.5, 5437.0], [67.6, 5445.0], [67.7, 5477.0], [67.8, 5477.0], [67.9, 5479.0], [68.0, 5480.0], [68.1, 5499.0], [68.2, 5501.0], [68.3, 5502.0], [68.4, 5503.0], [68.5, 5503.0], [68.6, 5503.0], [68.7, 5503.0], [68.8, 5503.0], [68.9, 5504.0], [69.0, 5504.0], [69.1, 5504.0], [69.2, 5504.0], [69.3, 5504.0], [69.4, 5504.0], [69.5, 5505.0], [69.6, 5505.0], [69.7, 5505.0], [69.8, 5505.0], [69.9, 5506.0], [70.0, 5507.0], [70.1, 5508.0], [70.2, 5508.0], [70.3, 5509.0], [70.4, 5528.0], [70.5, 5529.0], [70.6, 5529.0], [70.7, 5530.0], [70.8, 5530.0], [70.9, 5531.0], [71.0, 5531.0], [71.1, 5531.0], [71.2, 5531.0], [71.3, 5532.0], [71.4, 5533.0], [71.5, 5533.0], [71.6, 5533.0], [71.7, 5534.0], [71.8, 5535.0], [71.9, 5536.0], [72.0, 5595.0], [72.1, 5631.0], [72.2, 5632.0], [72.3, 5632.0], [72.4, 5632.0], [72.5, 5632.0], [72.6, 5632.0], [72.7, 5633.0], [72.8, 5634.0], [72.9, 5639.0], [73.0, 5651.0], [73.1, 5684.0], [73.2, 5710.0], [73.3, 5717.0], [73.4, 5717.0], [73.5, 5723.0], [73.6, 5726.0], [73.7, 5730.0], [73.8, 5731.0], [73.9, 5732.0], [74.0, 5732.0], [74.1, 5751.0], [74.2, 5752.0], [74.3, 5752.0], [74.4, 5753.0], [74.5, 5783.0], [74.6, 5785.0], [74.7, 5816.0], [74.8, 5822.0], [74.9, 5823.0], [75.0, 5823.0], [75.1, 5823.0], [75.2, 5823.0], [75.3, 5824.0], [75.4, 5824.0], [75.5, 5842.0], [75.6, 5842.0], [75.7, 5843.0], [75.8, 5843.0], [75.9, 5843.0], [76.0, 5844.0], [76.1, 5844.0], [76.2, 5845.0], [76.3, 5845.0], [76.4, 5845.0], [76.5, 5846.0], [76.6, 5846.0], [76.7, 5846.0], [76.8, 5847.0], [76.9, 5872.0], [77.0, 5872.0], [77.1, 5873.0], [77.2, 5881.0], [77.3, 5881.0], [77.4, 5884.0], [77.5, 5892.0], [77.6, 5932.0], [77.7, 5941.0], [77.8, 5952.0], [77.9, 5964.0], [78.0, 5964.0], [78.1, 5966.0], [78.2, 5972.0], [78.3, 5973.0], [78.4, 5973.0], [78.5, 5973.0], [78.6, 5974.0], [78.7, 5974.0], [78.8, 5978.0], [78.9, 5979.0], [79.0, 5980.0], [79.1, 5981.0], [79.2, 5999.0], [79.3, 5999.0], [79.4, 5999.0], [79.5, 5999.0], [79.6, 6000.0], [79.7, 6000.0], [79.8, 6001.0], [79.9, 6003.0], [80.0, 6031.0], [80.1, 6135.0], [80.2, 6136.0], [80.3, 6136.0], [80.4, 6138.0], [80.5, 6158.0], [80.6, 6161.0], [80.7, 6161.0], [80.8, 6162.0], [80.9, 6162.0], [81.0, 6162.0], [81.1, 6163.0], [81.2, 6171.0], [81.3, 6171.0], [81.4, 6172.0], [81.5, 6172.0], [81.6, 6172.0], [81.7, 6172.0], [81.8, 6197.0], [81.9, 6240.0], [82.0, 6240.0], [82.1, 6247.0], [82.2, 6248.0], [82.3, 6248.0], [82.4, 6248.0], [82.5, 6248.0], [82.6, 6249.0], [82.7, 6249.0], [82.8, 6249.0], [82.9, 6250.0], [83.0, 6250.0], [83.1, 6250.0], [83.2, 6280.0], [83.3, 6280.0], [83.4, 6284.0], [83.5, 6286.0], [83.6, 6286.0], [83.7, 6297.0], [83.8, 6406.0], [83.9, 6436.0], [84.0, 6437.0], [84.1, 6446.0], [84.2, 6448.0], [84.3, 6449.0], [84.4, 6449.0], [84.5, 6450.0], [84.6, 6452.0], [84.7, 6469.0], [84.8, 6538.0], [84.9, 6539.0], [85.0, 6542.0], [85.1, 6542.0], [85.2, 6566.0], [85.3, 6566.0], [85.4, 6567.0], [85.5, 6580.0], [85.6, 6584.0], [85.7, 6668.0], [85.8, 6668.0], [85.9, 6669.0], [86.0, 6669.0], [86.1, 6670.0], [86.2, 6672.0], [86.3, 6672.0], [86.4, 6673.0], [86.5, 6673.0], [86.6, 6673.0], [86.7, 6673.0], [86.8, 6674.0], [86.9, 6674.0], [87.0, 6674.0], [87.1, 6697.0], [87.2, 6697.0], [87.3, 6699.0], [87.4, 6781.0], [87.5, 6799.0], [87.6, 6801.0], [87.7, 6802.0], [87.8, 6803.0], [87.9, 6803.0], [88.0, 6824.0], [88.1, 6837.0], [88.2, 6839.0], [88.3, 6893.0], [88.4, 6896.0], [88.5, 6921.0], [88.6, 6921.0], [88.7, 6923.0], [88.8, 6945.0], [88.9, 6946.0], [89.0, 6947.0], [89.1, 6947.0], [89.2, 6947.0], [89.3, 6947.0], [89.4, 6948.0], [89.5, 6949.0], [89.6, 6950.0], [89.7, 7040.0], [89.8, 7046.0], [89.9, 7047.0], [90.0, 7047.0], [90.1, 7048.0], [90.2, 7049.0], [90.3, 7049.0], [90.4, 7065.0], [90.5, 7065.0], [90.6, 7065.0], [90.7, 7078.0], [90.8, 7078.0], [90.9, 7078.0], [91.0, 7079.0], [91.1, 7079.0], [91.2, 7080.0], [91.3, 7086.0], [91.4, 7181.0], [91.5, 7182.0], [91.6, 7183.0], [91.7, 7183.0], [91.8, 7183.0], [91.9, 7183.0], [92.0, 7183.0], [92.1, 7183.0], [92.2, 7184.0], [92.3, 7186.0], [92.4, 7196.0], [92.5, 7197.0], [92.6, 7197.0], [92.7, 7201.0], [92.8, 7233.0], [92.9, 7233.0], [93.0, 7234.0], [93.1, 7234.0], [93.2, 7234.0], [93.3, 7234.0], [93.4, 7253.0], [93.5, 7291.0], [93.6, 7291.0], [93.7, 7291.0], [93.8, 7292.0], [93.9, 7293.0], [94.0, 7293.0], [94.1, 7317.0], [94.2, 7318.0], [94.3, 7352.0], [94.4, 7352.0], [94.5, 7353.0], [94.6, 7354.0], [94.7, 7354.0], [94.8, 7356.0], [94.9, 7487.0], [95.0, 7488.0], [95.1, 7488.0], [95.2, 7488.0], [95.3, 7488.0], [95.4, 7488.0], [95.5, 7489.0], [95.6, 7502.0], [95.7, 7666.0], [95.8, 7952.0], [95.9, 8090.0], [96.0, 8090.0], [96.1, 8246.0], [96.2, 8246.0], [96.3, 8248.0], [96.4, 8248.0], [96.5, 8248.0], [96.6, 8264.0], [96.7, 8401.0], [96.8, 8404.0], [96.9, 8516.0], [97.0, 8518.0], [97.1, 8519.0], [97.2, 8519.0], [97.3, 8559.0], [97.4, 8577.0], [97.5, 8615.0], [97.6, 8615.0], [97.7, 8616.0], [97.8, 8668.0], [97.9, 8669.0], [98.0, 8670.0], [98.1, 8738.0], [98.2, 8740.0], [98.3, 8767.0], [98.4, 8787.0], [98.5, 8788.0], [98.6, 8804.0], [98.7, 8806.0], [98.8, 8809.0], [98.9, 8992.0], [99.0, 8994.0], [99.1, 8994.0], [99.2, 8994.0], [99.3, 8995.0], [99.4, 9828.0], [99.5, 9828.0], [99.6, 9828.0], [99.7, 9829.0], [99.8, 9831.0], [99.9, 9831.0], [100.0, 9942.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 112.0, "series": [{"data": [[600.0, 33.0], [700.0, 27.0], [800.0, 23.0], [900.0, 17.0], [1000.0, 16.0], [1100.0, 11.0], [1200.0, 12.0], [1300.0, 9.0], [1400.0, 30.0], [1500.0, 29.0], [1600.0, 59.0], [1700.0, 65.0], [1800.0, 51.0], [1900.0, 54.0], [2000.0, 28.0], [2100.0, 29.0], [2200.0, 30.0], [2300.0, 15.0], [2400.0, 30.0], [2500.0, 17.0], [2600.0, 24.0], [2700.0, 35.0], [2800.0, 29.0], [2900.0, 3.0], [3000.0, 30.0], [3100.0, 44.0], [3300.0, 31.0], [3200.0, 72.0], [3400.0, 45.0], [3500.0, 5.0], [3600.0, 4.0], [3700.0, 6.0], [3800.0, 24.0], [3900.0, 77.0], [4000.0, 42.0], [4200.0, 41.0], [4300.0, 99.0], [4100.0, 49.0], [4500.0, 33.0], [4600.0, 55.0], [4400.0, 18.0], [4700.0, 93.0], [4800.0, 30.0], [5100.0, 62.0], [5000.0, 15.0], [4900.0, 32.0], [5300.0, 74.0], [5200.0, 37.0], [5400.0, 63.0], [5500.0, 112.0], [5600.0, 32.0], [5700.0, 43.0], [5800.0, 83.0], [6100.0, 51.0], [6000.0, 13.0], [5900.0, 60.0], [6200.0, 56.0], [6300.0, 1.0], [6400.0, 26.0], [6500.0, 27.0], [6600.0, 48.0], [6800.0, 26.0], [6700.0, 7.0], [6900.0, 34.0], [7000.0, 50.0], [7100.0, 38.0], [7300.0, 21.0], [7200.0, 40.0], [7400.0, 20.0], [7600.0, 2.0], [7500.0, 4.0], [7900.0, 2.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 5.0], [8200.0, 19.0], [8400.0, 4.0], [8500.0, 17.0], [8600.0, 19.0], [8700.0, 14.0], [8900.0, 14.0], [8800.0, 7.0], [9900.0, 1.0], [9800.0, 19.0], [300.0, 84.0], [400.0, 75.0], [500.0, 43.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2667.0, "series": [{"data": [[0.0, 160.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 49.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2667.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 67.60636515912903, "minX": 1.78195128E12, "maxY": 174.57550535077286, "series": [{"data": [[1.78195128E12, 67.60636515912903], [1.78195134E12, 174.57550535077286]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 192 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195134E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 802.3636363636364, "minX": 1.0, "maxY": 7022.333333333332, "series": [{"data": [[2.0, 3097.0], [3.0, 2155.666666666667], [4.0, 1691.25], [5.0, 1414.6], [6.0, 1227.5], [7.0, 1099.5714285714284], [8.0, 1007.25], [9.0, 944.1111111111111], [10.0, 948.3333333333334], [11.0, 847.1818181818182], [12.0, 813.6666666666667], [13.0, 909.8], [14.0, 919.0], [15.0, 808.9230769230769], [16.0, 819.6153846153845], [17.0, 849.6666666666667], [18.0, 861.75], [19.0, 816.5714285714284], [20.0, 864.0769230769231], [21.0, 881.3846153846154], [22.0, 850.8666666666667], [23.0, 1026.6999999999998], [24.0, 889.8666666666667], [25.0, 1062.0], [26.0, 957.4285714285714], [27.0, 1064.0], [28.0, 1055.75], [29.0, 1086.5], [30.0, 802.3636363636364], [31.0, 847.6], [32.0, 892.7], [33.0, 937.3333333333334], [34.0, 995.125], [35.0, 1050.0909090909092], [36.0, 1120.2], [37.0, 1187.7272727272727], [38.0, 1280.2857142857142], [39.0, 1320.625], [40.0, 1404.5], [41.0, 1460.2222222222222], [42.0, 1524.4545454545453], [43.0, 1573.3333333333333], [44.0, 1629.5], [45.0, 1672.9999999999998], [46.0, 4687.708333333333], [47.0, 1691.75], [48.0, 1728.75], [49.0, 1791.888888888889], [50.0, 1745.3333333333333], [51.0, 1746.1000000000001], [52.0, 1842.6], [53.0, 1785.2727272727273], [55.0, 1723.2727272727273], [54.0, 6802.0], [56.0, 4307.2380952380945], [57.0, 1787.0], [59.0, 3063.75], [60.0, 2036.0666666666666], [61.0, 1785.5333333333333], [63.0, 1744.2000000000003], [64.0, 1974.5555555555557], [66.0, 1788.5624999999998], [67.0, 1809.736842105263], [69.0, 1772.2352941176468], [71.0, 2176.4545454545455], [73.0, 2060.3157894736846], [75.0, 2198.695652173914], [74.0, 5509.0], [78.0, 2246.523809523809], [80.0, 2448.1923076923076], [83.0, 2554.3913043478265], [86.0, 2817.1379310344823], [89.0, 2778.3846153846152], [93.0, 3029.09375], [96.0, 3039.2000000000007], [98.0, 5503.8], [97.0, 5503.0], [100.0, 3146.714285714286], [103.0, 2990.970588235294], [102.0, 5508.0], [106.0, 4904.5], [107.0, 3081.9189189189187], [110.0, 3236.3333333333335], [111.0, 3123.2], [108.0, 5507.0], [115.0, 5506.5], [114.0, 5507.0], [113.0, 5504.0], [116.0, 3708.954545454546], [119.0, 3642.1219512195116], [120.0, 2933.0], [124.0, 3546.2608695652175], [127.0, 4590.5], [129.0, 3854.1111111111113], [134.0, 4611.0], [135.0, 4184.617021276595], [131.0, 5536.0], [138.0, 4516.666666666667], [140.0, 4461.961538461537], [143.0, 5512.0], [142.0, 5512.666666666667], [141.0, 5504.0], [137.0, 5506.0], [145.0, 5404.2], [146.0, 5347.0], [147.0, 4653.43137254902], [150.0, 4865.6], [144.0, 5504.25], [153.0, 4948.358490566039], [157.0, 5291.0], [159.0, 5088.698113207549], [152.0, 5533.0], [160.0, 4006.6666666666665], [163.0, 4978.5], [166.0, 4967.566666666666], [161.0, 5505.0], [170.0, 5289.25], [172.0, 5965.8], [173.0, 5096.288461538462], [175.0, 5505.0], [177.0, 5399.625], [180.0, 5210.0847457627115], [183.0, 5514.0], [182.0, 5510.666666666666], [181.0, 5514.4], [179.0, 5534.0], [176.0, 5504.0], [185.0, 5792.999999999999], [186.0, 7022.333333333332], [187.0, 5625.8], [189.0, 4837.812499999999], [191.0, 5531.153846153846], [184.0, 5512.833333333334], [192.0, 6190.451481103164], [1.0, 5873.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[130.15785813630038, 4215.527816411681]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 192.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3144.2, "minX": 1.78195128E12, "maxY": 6477.6, "series": [{"data": [[1.78195128E12, 4596.9], [1.78195134E12, 6477.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195128E12, 3144.2], [1.78195134E12, 4429.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195134E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2036.964824120605, "minX": 1.78195128E12, "maxY": 5762.022592152197, "series": [{"data": [[1.78195128E12, 2036.964824120605], [1.78195134E12, 5762.022592152197]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195134E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2036.9438860971545, "minX": 1.78195128E12, "maxY": 5762.0053507729, "series": [{"data": [[1.78195128E12, 2036.9438860971545], [1.78195134E12, 5762.0053507729]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195134E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05648038049940557, "minX": 1.78195128E12, "maxY": 0.07118927973199347, "series": [{"data": [[1.78195128E12, 0.07118927973199347], [1.78195134E12, 0.05648038049940557]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195134E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.78195128E12, "maxY": 618.0, "series": [{"data": [[1.78195128E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195128E12, 321.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195128E12, 569.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195128E12, 614.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195128E12, 419.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195128E12, 591.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 324.5, "minX": 1.0, "maxY": 7197.0, "series": [{"data": [[32.0, 394.0], [36.0, 493.0], [38.0, 575.0], [41.0, 430.0], [21.0, 336.0], [3.0, 333.0], [12.0, 324.5], [29.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1769.0], [32.0, 5280.5], [34.0, 1530.5], [35.0, 5752.0], [36.0, 1862.0], [37.0, 3722.0], [38.0, 4301.0], [40.0, 2210.5], [42.0, 3947.0], [45.0, 4251.0], [46.0, 4915.5], [47.0, 5437.0], [49.0, 4658.0], [3.0, 6781.0], [51.0, 7183.0], [52.0, 5018.5], [53.0, 6000.0], [54.0, 5023.0], [56.0, 4529.0], [57.0, 6242.0], [58.0, 5298.0], [80.0, 6566.5], [6.0, 7092.5], [104.0, 5326.0], [105.0, 4329.0], [7.0, 5952.0], [8.0, 4978.0], [133.0, 5529.0], [9.0, 6220.5], [10.0, 5338.0], [13.0, 5743.0], [1.0, 4520.0], [17.0, 7197.0], [21.0, 2073.0], [22.0, 4619.0], [23.0, 1838.5], [24.0, 1281.0], [25.0, 5946.5], [26.0, 2746.0], [27.0, 4473.0], [28.0, 1810.0], [29.0, 4838.0], [30.0, 1699.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 133.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 324.5, "minX": 1.0, "maxY": 7197.0, "series": [{"data": [[32.0, 394.0], [36.0, 493.0], [38.0, 575.0], [41.0, 430.0], [21.0, 336.0], [3.0, 333.0], [12.0, 324.5], [29.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1769.0], [32.0, 5280.5], [34.0, 1530.5], [35.0, 5752.0], [36.0, 1862.0], [37.0, 3722.0], [38.0, 4301.0], [40.0, 2210.5], [42.0, 3947.0], [45.0, 4251.0], [46.0, 4915.5], [47.0, 5437.0], [49.0, 4658.0], [3.0, 6781.0], [51.0, 7183.0], [52.0, 5018.5], [53.0, 6000.0], [54.0, 5023.0], [56.0, 4529.0], [57.0, 6242.0], [58.0, 5298.0], [80.0, 6566.0], [6.0, 7092.5], [104.0, 5326.0], [105.0, 4329.0], [7.0, 5952.0], [8.0, 4978.0], [133.0, 5529.0], [9.0, 6220.5], [10.0, 5337.5], [13.0, 5743.0], [1.0, 4520.0], [17.0, 7197.0], [21.0, 2073.0], [22.0, 4619.0], [23.0, 1838.5], [24.0, 1281.0], [25.0, 5946.5], [26.0, 2746.0], [27.0, 4473.0], [28.0, 1810.0], [29.0, 4838.0], [30.0, 1699.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 133.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.083333333333332, "minX": 1.78195128E12, "maxY": 25.85, "series": [{"data": [[1.78195128E12, 22.083333333333332], [1.78195134E12, 25.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195134E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.78195128E12, "maxY": 27.083333333333332, "series": [{"data": [[1.78195128E12, 19.9], [1.78195134E12, 27.083333333333332]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195134E12, 0.95]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195134E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195128E12, "maxY": 28.033333333333335, "series": [{"data": [[1.78195128E12, 3.4833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195128E12, 16.416666666666668], [1.78195134E12, 28.033333333333335]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195134E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195128E12, "maxY": 28.033333333333335, "series": [{"data": [[1.78195128E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195128E12, 16.416666666666668], [1.78195134E12, 28.033333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195134E12, "title": "Total Transactions Per Second"}},
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

