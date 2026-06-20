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
        data: {"result": {"minY": 354.0, "minX": 0.0, "maxY": 4755.0, "series": [{"data": [[0.0, 354.0], [0.1, 356.0], [0.2, 358.0], [0.3, 360.0], [0.4, 362.0], [0.5, 362.0], [0.6, 364.0], [0.7, 366.0], [0.8, 367.0], [0.9, 368.0], [1.0, 370.0], [1.1, 370.0], [1.2, 371.0], [1.3, 372.0], [1.4, 372.0], [1.5, 373.0], [1.6, 375.0], [1.7, 377.0], [1.8, 378.0], [1.9, 378.0], [2.0, 380.0], [2.1, 381.0], [2.2, 383.0], [2.3, 385.0], [2.4, 387.0], [2.5, 387.0], [2.6, 389.0], [2.7, 391.0], [2.8, 393.0], [2.9, 396.0], [3.0, 400.0], [3.1, 402.0], [3.2, 405.0], [3.3, 407.0], [3.4, 410.0], [3.5, 412.0], [3.6, 415.0], [3.7, 422.0], [3.8, 426.0], [3.9, 431.0], [4.0, 434.0], [4.1, 436.0], [4.2, 440.0], [4.3, 447.0], [4.4, 454.0], [4.5, 457.0], [4.6, 461.0], [4.7, 463.0], [4.8, 468.0], [4.9, 473.0], [5.0, 478.0], [5.1, 482.0], [5.2, 489.0], [5.3, 493.0], [5.4, 496.0], [5.5, 502.0], [5.6, 506.0], [5.7, 511.0], [5.8, 511.0], [5.9, 517.0], [6.0, 522.0], [6.1, 526.0], [6.2, 527.0], [6.3, 534.0], [6.4, 538.0], [6.5, 547.0], [6.6, 558.0], [6.7, 564.0], [6.8, 566.0], [6.9, 572.0], [7.0, 580.0], [7.1, 589.0], [7.2, 598.0], [7.3, 604.0], [7.4, 612.0], [7.5, 618.0], [7.6, 626.0], [7.7, 632.0], [7.8, 644.0], [7.9, 652.0], [8.0, 659.0], [8.1, 666.0], [8.2, 672.0], [8.3, 685.0], [8.4, 694.0], [8.5, 700.0], [8.6, 708.0], [8.7, 718.0], [8.8, 726.0], [8.9, 737.0], [9.0, 743.0], [9.1, 751.0], [9.2, 763.0], [9.3, 770.0], [9.4, 775.0], [9.5, 782.0], [9.6, 798.0], [9.7, 805.0], [9.8, 814.0], [9.9, 817.0], [10.0, 823.0], [10.1, 839.0], [10.2, 848.0], [10.3, 856.0], [10.4, 862.0], [10.5, 866.0], [10.6, 880.0], [10.7, 884.0], [10.8, 889.0], [10.9, 893.0], [11.0, 903.0], [11.1, 912.0], [11.2, 917.0], [11.3, 922.0], [11.4, 923.0], [11.5, 927.0], [11.6, 932.0], [11.7, 937.0], [11.8, 948.0], [11.9, 952.0], [12.0, 957.0], [12.1, 962.0], [12.2, 963.0], [12.3, 968.0], [12.4, 968.0], [12.5, 972.0], [12.6, 973.0], [12.7, 977.0], [12.8, 978.0], [12.9, 983.0], [13.0, 984.0], [13.1, 984.0], [13.2, 984.0], [13.3, 988.0], [13.4, 988.0], [13.5, 988.0], [13.6, 989.0], [13.7, 989.0], [13.8, 989.0], [13.9, 992.0], [14.0, 993.0], [14.1, 993.0], [14.2, 994.0], [14.3, 994.0], [14.4, 994.0], [14.5, 995.0], [14.6, 997.0], [14.7, 999.0], [14.8, 999.0], [14.9, 1000.0], [15.0, 1000.0], [15.1, 1000.0], [15.2, 1004.0], [15.3, 1005.0], [15.4, 1005.0], [15.5, 1006.0], [15.6, 1009.0], [15.7, 1012.0], [15.8, 1016.0], [15.9, 1024.0], [16.0, 1030.0], [16.1, 1037.0], [16.2, 1043.0], [16.3, 1046.0], [16.4, 1047.0], [16.5, 1053.0], [16.6, 1056.0], [16.7, 1059.0], [16.8, 1071.0], [16.9, 1075.0], [17.0, 1081.0], [17.1, 1082.0], [17.2, 1086.0], [17.3, 1088.0], [17.4, 1093.0], [17.5, 1099.0], [17.6, 1103.0], [17.7, 1113.0], [17.8, 1126.0], [17.9, 1138.0], [18.0, 1140.0], [18.1, 1145.0], [18.2, 1153.0], [18.3, 1156.0], [18.4, 1156.0], [18.5, 1162.0], [18.6, 1165.0], [18.7, 1166.0], [18.8, 1169.0], [18.9, 1171.0], [19.0, 1176.0], [19.1, 1189.0], [19.2, 1194.0], [19.3, 1196.0], [19.4, 1208.0], [19.5, 1209.0], [19.6, 1217.0], [19.7, 1219.0], [19.8, 1221.0], [19.9, 1229.0], [20.0, 1229.0], [20.1, 1243.0], [20.2, 1245.0], [20.3, 1259.0], [20.4, 1263.0], [20.5, 1270.0], [20.6, 1272.0], [20.7, 1280.0], [20.8, 1288.0], [20.9, 1289.0], [21.0, 1289.0], [21.1, 1295.0], [21.2, 1298.0], [21.3, 1316.0], [21.4, 1318.0], [21.5, 1319.0], [21.6, 1340.0], [21.7, 1353.0], [21.8, 1353.0], [21.9, 1353.0], [22.0, 1364.0], [22.1, 1365.0], [22.2, 1368.0], [22.3, 1378.0], [22.4, 1386.0], [22.5, 1387.0], [22.6, 1387.0], [22.7, 1395.0], [22.8, 1401.0], [22.9, 1402.0], [23.0, 1403.0], [23.1, 1429.0], [23.2, 1430.0], [23.3, 1454.0], [23.4, 1457.0], [23.5, 1470.0], [23.6, 1470.0], [23.7, 1472.0], [23.8, 1472.0], [23.9, 1486.0], [24.0, 1487.0], [24.1, 1488.0], [24.2, 1492.0], [24.3, 1494.0], [24.4, 1500.0], [24.5, 1507.0], [24.6, 1507.0], [24.7, 1552.0], [24.8, 1556.0], [24.9, 1569.0], [25.0, 1569.0], [25.1, 1573.0], [25.2, 1573.0], [25.3, 1574.0], [25.4, 1578.0], [25.5, 1582.0], [25.6, 1582.0], [25.7, 1583.0], [25.8, 1592.0], [25.9, 1597.0], [26.0, 1598.0], [26.1, 1598.0], [26.2, 1598.0], [26.3, 1601.0], [26.4, 1639.0], [26.5, 1639.0], [26.6, 1640.0], [26.7, 1664.0], [26.8, 1671.0], [26.9, 1671.0], [27.0, 1673.0], [27.1, 1673.0], [27.2, 1673.0], [27.3, 1679.0], [27.4, 1679.0], [27.5, 1680.0], [27.6, 1684.0], [27.7, 1686.0], [27.8, 1687.0], [27.9, 1693.0], [28.0, 1695.0], [28.1, 1695.0], [28.2, 1696.0], [28.3, 1717.0], [28.4, 1718.0], [28.5, 1719.0], [28.6, 1726.0], [28.7, 1727.0], [28.8, 1727.0], [28.9, 1729.0], [29.0, 1737.0], [29.1, 1739.0], [29.2, 1739.0], [29.3, 1740.0], [29.4, 1754.0], [29.5, 1757.0], [29.6, 1757.0], [29.7, 1758.0], [29.8, 1764.0], [29.9, 1766.0], [30.0, 1779.0], [30.1, 1779.0], [30.2, 1779.0], [30.3, 1780.0], [30.4, 1780.0], [30.5, 1780.0], [30.6, 1797.0], [30.7, 1809.0], [30.8, 1820.0], [30.9, 1833.0], [31.0, 1833.0], [31.1, 1833.0], [31.2, 1851.0], [31.3, 1852.0], [31.4, 1852.0], [31.5, 1852.0], [31.6, 1853.0], [31.7, 1861.0], [31.8, 1898.0], [31.9, 1901.0], [32.0, 1901.0], [32.1, 1913.0], [32.2, 1913.0], [32.3, 1915.0], [32.4, 1919.0], [32.5, 1941.0], [32.6, 1941.0], [32.7, 1942.0], [32.8, 1942.0], [32.9, 1943.0], [33.0, 1943.0], [33.1, 1943.0], [33.2, 1951.0], [33.3, 1974.0], [33.4, 1975.0], [33.5, 1976.0], [33.6, 1976.0], [33.7, 1976.0], [33.8, 1977.0], [33.9, 1978.0], [34.0, 1978.0], [34.1, 1979.0], [34.2, 1982.0], [34.3, 1982.0], [34.4, 1982.0], [34.5, 1983.0], [34.6, 1984.0], [34.7, 1985.0], [34.8, 1986.0], [34.9, 1986.0], [35.0, 1987.0], [35.1, 1987.0], [35.2, 1987.0], [35.3, 2002.0], [35.4, 2014.0], [35.5, 2016.0], [35.6, 2018.0], [35.7, 2018.0], [35.8, 2018.0], [35.9, 2018.0], [36.0, 2029.0], [36.1, 2034.0], [36.2, 2040.0], [36.3, 2041.0], [36.4, 2041.0], [36.5, 2041.0], [36.6, 2041.0], [36.7, 2042.0], [36.8, 2051.0], [36.9, 2054.0], [37.0, 2054.0], [37.1, 2055.0], [37.2, 2055.0], [37.3, 2064.0], [37.4, 2064.0], [37.5, 2072.0], [37.6, 2076.0], [37.7, 2076.0], [37.8, 2085.0], [37.9, 2085.0], [38.0, 2097.0], [38.1, 2097.0], [38.2, 2097.0], [38.3, 2098.0], [38.4, 2126.0], [38.5, 2126.0], [38.6, 2127.0], [38.7, 2127.0], [38.8, 2127.0], [38.9, 2128.0], [39.0, 2141.0], [39.1, 2146.0], [39.2, 2146.0], [39.3, 2147.0], [39.4, 2161.0], [39.5, 2171.0], [39.6, 2187.0], [39.7, 2188.0], [39.8, 2188.0], [39.9, 2191.0], [40.0, 2194.0], [40.1, 2260.0], [40.2, 2260.0], [40.3, 2264.0], [40.4, 2284.0], [40.5, 2284.0], [40.6, 2286.0], [40.7, 2286.0], [40.8, 2296.0], [40.9, 2296.0], [41.0, 2297.0], [41.1, 2297.0], [41.2, 2297.0], [41.3, 2297.0], [41.4, 2304.0], [41.5, 2306.0], [41.6, 2307.0], [41.7, 2308.0], [41.8, 2323.0], [41.9, 2324.0], [42.0, 2331.0], [42.1, 2370.0], [42.2, 2371.0], [42.3, 2371.0], [42.4, 2371.0], [42.5, 2371.0], [42.6, 2372.0], [42.7, 2372.0], [42.8, 2372.0], [42.9, 2372.0], [43.0, 2373.0], [43.1, 2373.0], [43.2, 2376.0], [43.3, 2377.0], [43.4, 2377.0], [43.5, 2378.0], [43.6, 2385.0], [43.7, 2386.0], [43.8, 2386.0], [43.9, 2387.0], [44.0, 2389.0], [44.1, 2390.0], [44.2, 2400.0], [44.3, 2400.0], [44.4, 2401.0], [44.5, 2401.0], [44.6, 2401.0], [44.7, 2401.0], [44.8, 2402.0], [44.9, 2402.0], [45.0, 2428.0], [45.1, 2428.0], [45.2, 2429.0], [45.3, 2429.0], [45.4, 2436.0], [45.5, 2437.0], [45.6, 2449.0], [45.7, 2453.0], [45.8, 2454.0], [45.9, 2456.0], [46.0, 2457.0], [46.1, 2457.0], [46.2, 2457.0], [46.3, 2457.0], [46.4, 2457.0], [46.5, 2457.0], [46.6, 2458.0], [46.7, 2458.0], [46.8, 2459.0], [46.9, 2459.0], [47.0, 2459.0], [47.1, 2459.0], [47.2, 2459.0], [47.3, 2462.0], [47.4, 2463.0], [47.5, 2463.0], [47.6, 2463.0], [47.7, 2464.0], [47.8, 2464.0], [47.9, 2465.0], [48.0, 2475.0], [48.1, 2476.0], [48.2, 2485.0], [48.3, 2488.0], [48.4, 2524.0], [48.5, 2525.0], [48.6, 2527.0], [48.7, 2527.0], [48.8, 2529.0], [48.9, 2530.0], [49.0, 2531.0], [49.1, 2531.0], [49.2, 2536.0], [49.3, 2536.0], [49.4, 2536.0], [49.5, 2538.0], [49.6, 2559.0], [49.7, 2559.0], [49.8, 2559.0], [49.9, 2559.0], [50.0, 2559.0], [50.1, 2560.0], [50.2, 2560.0], [50.3, 2560.0], [50.4, 2560.0], [50.5, 2560.0], [50.6, 2560.0], [50.7, 2561.0], [50.8, 2562.0], [50.9, 2569.0], [51.0, 2570.0], [51.1, 2571.0], [51.2, 2571.0], [51.3, 2584.0], [51.4, 2585.0], [51.5, 2586.0], [51.6, 2588.0], [51.7, 2606.0], [51.8, 2607.0], [51.9, 2619.0], [52.0, 2619.0], [52.1, 2621.0], [52.2, 2622.0], [52.3, 2626.0], [52.4, 2626.0], [52.5, 2626.0], [52.6, 2626.0], [52.7, 2626.0], [52.8, 2627.0], [52.9, 2627.0], [53.0, 2627.0], [53.1, 2627.0], [53.2, 2627.0], [53.3, 2629.0], [53.4, 2655.0], [53.5, 2657.0], [53.6, 2660.0], [53.7, 2662.0], [53.8, 2662.0], [53.9, 2662.0], [54.0, 2662.0], [54.1, 2664.0], [54.2, 2664.0], [54.3, 2677.0], [54.4, 2677.0], [54.5, 2678.0], [54.6, 2695.0], [54.7, 2697.0], [54.8, 2697.0], [54.9, 2698.0], [55.0, 2702.0], [55.1, 2707.0], [55.2, 2707.0], [55.3, 2710.0], [55.4, 2715.0], [55.5, 2716.0], [55.6, 2716.0], [55.7, 2716.0], [55.8, 2717.0], [55.9, 2727.0], [56.0, 2727.0], [56.1, 2727.0], [56.2, 2727.0], [56.3, 2728.0], [56.4, 2731.0], [56.5, 2761.0], [56.6, 2762.0], [56.7, 2762.0], [56.8, 2785.0], [56.9, 2788.0], [57.0, 2811.0], [57.1, 2813.0], [57.2, 2813.0], [57.3, 2813.0], [57.4, 2814.0], [57.5, 2814.0], [57.6, 2815.0], [57.7, 2816.0], [57.8, 2818.0], [57.9, 2834.0], [58.0, 2835.0], [58.1, 2835.0], [58.2, 2835.0], [58.3, 2835.0], [58.4, 2836.0], [58.5, 2836.0], [58.6, 2836.0], [58.7, 2845.0], [58.8, 2845.0], [58.9, 2845.0], [59.0, 2845.0], [59.1, 2846.0], [59.2, 2846.0], [59.3, 2846.0], [59.4, 2849.0], [59.5, 2850.0], [59.6, 2858.0], [59.7, 2869.0], [59.8, 2869.0], [59.9, 2876.0], [60.0, 2876.0], [60.1, 2876.0], [60.2, 2877.0], [60.3, 2877.0], [60.4, 2877.0], [60.5, 2878.0], [60.6, 2878.0], [60.7, 2896.0], [60.8, 2924.0], [60.9, 2942.0], [61.0, 2957.0], [61.1, 2959.0], [61.2, 2970.0], [61.3, 2971.0], [61.4, 2971.0], [61.5, 2971.0], [61.6, 2972.0], [61.7, 2972.0], [61.8, 2972.0], [61.9, 2973.0], [62.0, 2978.0], [62.1, 2982.0], [62.2, 2983.0], [62.3, 2983.0], [62.4, 2983.0], [62.5, 2983.0], [62.6, 2983.0], [62.7, 2983.0], [62.8, 2984.0], [62.9, 2984.0], [63.0, 2984.0], [63.1, 2985.0], [63.2, 2991.0], [63.3, 2996.0], [63.4, 2997.0], [63.5, 2997.0], [63.6, 3002.0], [63.7, 3003.0], [63.8, 3003.0], [63.9, 3004.0], [64.0, 3035.0], [64.1, 3038.0], [64.2, 3038.0], [64.3, 3038.0], [64.4, 3038.0], [64.5, 3038.0], [64.6, 3038.0], [64.7, 3041.0], [64.8, 3041.0], [64.9, 3041.0], [65.0, 3044.0], [65.1, 3065.0], [65.2, 3078.0], [65.3, 3093.0], [65.4, 3094.0], [65.5, 3100.0], [65.6, 3101.0], [65.7, 3104.0], [65.8, 3104.0], [65.9, 3105.0], [66.0, 3105.0], [66.1, 3106.0], [66.2, 3107.0], [66.3, 3134.0], [66.4, 3137.0], [66.5, 3143.0], [66.6, 3144.0], [66.7, 3145.0], [66.8, 3159.0], [66.9, 3159.0], [67.0, 3159.0], [67.1, 3174.0], [67.2, 3175.0], [67.3, 3193.0], [67.4, 3194.0], [67.5, 3196.0], [67.6, 3197.0], [67.7, 3218.0], [67.8, 3219.0], [67.9, 3219.0], [68.0, 3220.0], [68.1, 3220.0], [68.2, 3220.0], [68.3, 3221.0], [68.4, 3222.0], [68.5, 3236.0], [68.6, 3240.0], [68.7, 3240.0], [68.8, 3241.0], [68.9, 3242.0], [69.0, 3244.0], [69.1, 3245.0], [69.2, 3245.0], [69.3, 3250.0], [69.4, 3250.0], [69.5, 3251.0], [69.6, 3251.0], [69.7, 3258.0], [69.8, 3263.0], [69.9, 3276.0], [70.0, 3277.0], [70.1, 3277.0], [70.2, 3277.0], [70.3, 3278.0], [70.4, 3278.0], [70.5, 3279.0], [70.6, 3280.0], [70.7, 3281.0], [70.8, 3283.0], [70.9, 3317.0], [71.0, 3317.0], [71.1, 3317.0], [71.2, 3317.0], [71.3, 3318.0], [71.4, 3318.0], [71.5, 3326.0], [71.6, 3347.0], [71.7, 3347.0], [71.8, 3347.0], [71.9, 3348.0], [72.0, 3348.0], [72.1, 3348.0], [72.2, 3348.0], [72.3, 3349.0], [72.4, 3349.0], [72.5, 3349.0], [72.6, 3349.0], [72.7, 3350.0], [72.8, 3350.0], [72.9, 3351.0], [73.0, 3351.0], [73.1, 3352.0], [73.2, 3353.0], [73.3, 3362.0], [73.4, 3363.0], [73.5, 3363.0], [73.6, 3363.0], [73.7, 3368.0], [73.8, 3375.0], [73.9, 3376.0], [74.0, 3377.0], [74.1, 3383.0], [74.2, 3422.0], [74.3, 3429.0], [74.4, 3431.0], [74.5, 3431.0], [74.6, 3433.0], [74.7, 3489.0], [74.8, 3497.0], [74.9, 3497.0], [75.0, 3498.0], [75.1, 3498.0], [75.2, 3499.0], [75.3, 3513.0], [75.4, 3522.0], [75.5, 3551.0], [75.6, 3551.0], [75.7, 3557.0], [75.8, 3559.0], [75.9, 3559.0], [76.0, 3559.0], [76.1, 3559.0], [76.2, 3559.0], [76.3, 3559.0], [76.4, 3560.0], [76.5, 3561.0], [76.6, 3562.0], [76.7, 3576.0], [76.8, 3584.0], [76.9, 3584.0], [77.0, 3585.0], [77.1, 3585.0], [77.2, 3585.0], [77.3, 3587.0], [77.4, 3587.0], [77.5, 3593.0], [77.6, 3630.0], [77.7, 3630.0], [77.8, 3631.0], [77.9, 3632.0], [78.0, 3633.0], [78.1, 3633.0], [78.2, 3633.0], [78.3, 3634.0], [78.4, 3634.0], [78.5, 3635.0], [78.6, 3635.0], [78.7, 3652.0], [78.8, 3652.0], [78.9, 3653.0], [79.0, 3653.0], [79.1, 3656.0], [79.2, 3656.0], [79.3, 3656.0], [79.4, 3656.0], [79.5, 3656.0], [79.6, 3657.0], [79.7, 3657.0], [79.8, 3663.0], [79.9, 3663.0], [80.0, 3664.0], [80.1, 3685.0], [80.2, 3685.0], [80.3, 3685.0], [80.4, 3685.0], [80.5, 3685.0], [80.6, 3685.0], [80.7, 3686.0], [80.8, 3686.0], [80.9, 3686.0], [81.0, 3686.0], [81.1, 3686.0], [81.2, 3686.0], [81.3, 3686.0], [81.4, 3686.0], [81.5, 3686.0], [81.6, 3686.0], [81.7, 3687.0], [81.8, 3687.0], [81.9, 3688.0], [82.0, 3688.0], [82.1, 3689.0], [82.2, 3689.0], [82.3, 3691.0], [82.4, 3707.0], [82.5, 3708.0], [82.6, 3708.0], [82.7, 3709.0], [82.8, 3709.0], [82.9, 3709.0], [83.0, 3709.0], [83.1, 3710.0], [83.2, 3710.0], [83.3, 3713.0], [83.4, 3714.0], [83.5, 3715.0], [83.6, 3715.0], [83.7, 3715.0], [83.8, 3716.0], [83.9, 3716.0], [84.0, 3717.0], [84.1, 3717.0], [84.2, 3717.0], [84.3, 3718.0], [84.4, 3731.0], [84.5, 3731.0], [84.6, 3732.0], [84.7, 3733.0], [84.8, 3734.0], [84.9, 3734.0], [85.0, 3743.0], [85.1, 3744.0], [85.2, 3762.0], [85.3, 3763.0], [85.4, 3773.0], [85.5, 3781.0], [85.6, 3781.0], [85.7, 3781.0], [85.8, 3781.0], [85.9, 3781.0], [86.0, 3782.0], [86.1, 3782.0], [86.2, 3782.0], [86.3, 3787.0], [86.4, 3787.0], [86.5, 3787.0], [86.6, 3788.0], [86.7, 3788.0], [86.8, 3788.0], [86.9, 3788.0], [87.0, 3788.0], [87.1, 3788.0], [87.2, 3789.0], [87.3, 3789.0], [87.4, 3789.0], [87.5, 3789.0], [87.6, 3789.0], [87.7, 3790.0], [87.8, 3790.0], [87.9, 3792.0], [88.0, 3792.0], [88.1, 3792.0], [88.2, 3793.0], [88.3, 3793.0], [88.4, 3793.0], [88.5, 3793.0], [88.6, 3797.0], [88.7, 3797.0], [88.8, 3797.0], [88.9, 3797.0], [89.0, 3798.0], [89.1, 3798.0], [89.2, 3798.0], [89.3, 3798.0], [89.4, 3803.0], [89.5, 3804.0], [89.6, 3804.0], [89.7, 3804.0], [89.8, 3804.0], [89.9, 3805.0], [90.0, 3805.0], [90.1, 3805.0], [90.2, 3815.0], [90.3, 3816.0], [90.4, 3817.0], [90.5, 3817.0], [90.6, 3818.0], [90.7, 3818.0], [90.8, 3818.0], [90.9, 3819.0], [91.0, 3835.0], [91.1, 3835.0], [91.2, 3838.0], [91.3, 3838.0], [91.4, 3839.0], [91.5, 3839.0], [91.6, 3839.0], [91.7, 3839.0], [91.8, 3839.0], [91.9, 3840.0], [92.0, 3840.0], [92.1, 3841.0], [92.2, 3845.0], [92.3, 3846.0], [92.4, 3846.0], [92.5, 3846.0], [92.6, 3847.0], [92.7, 3847.0], [92.8, 3847.0], [92.9, 3848.0], [93.0, 3889.0], [93.1, 3890.0], [93.2, 3890.0], [93.3, 3890.0], [93.4, 3890.0], [93.5, 3891.0], [93.6, 3891.0], [93.7, 3891.0], [93.8, 3891.0], [93.9, 3891.0], [94.0, 3891.0], [94.1, 3892.0], [94.2, 3892.0], [94.3, 3892.0], [94.4, 3892.0], [94.5, 3967.0], [94.6, 3968.0], [94.7, 3968.0], [94.8, 3968.0], [94.9, 3968.0], [95.0, 3969.0], [95.1, 3969.0], [95.2, 3975.0], [95.3, 3975.0], [95.4, 3976.0], [95.5, 3976.0], [95.6, 3976.0], [95.7, 3976.0], [95.8, 3976.0], [95.9, 3977.0], [96.0, 3990.0], [96.1, 3991.0], [96.2, 3991.0], [96.3, 3992.0], [96.4, 3999.0], [96.5, 4001.0], [96.6, 4003.0], [96.7, 4006.0], [96.8, 4069.0], [96.9, 4092.0], [97.0, 4092.0], [97.1, 4093.0], [97.2, 4093.0], [97.3, 4093.0], [97.4, 4093.0], [97.5, 4093.0], [97.6, 4094.0], [97.7, 4094.0], [97.8, 4118.0], [97.9, 4120.0], [98.0, 4120.0], [98.1, 4121.0], [98.2, 4121.0], [98.3, 4121.0], [98.4, 4122.0], [98.5, 4128.0], [98.6, 4128.0], [98.7, 4129.0], [98.8, 4135.0], [98.9, 4171.0], [99.0, 4171.0], [99.1, 4172.0], [99.2, 4172.0], [99.3, 4172.0], [99.4, 4173.0], [99.5, 4259.0], [99.6, 4259.0], [99.7, 4260.0], [99.8, 4260.0], [99.9, 4281.0], [100.0, 4755.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 196.0, "series": [{"data": [[600.0, 36.0], [700.0, 31.0], [800.0, 38.0], [900.0, 108.0], [1000.0, 73.0], [1100.0, 52.0], [1200.0, 52.0], [1300.0, 43.0], [1400.0, 44.0], [1500.0, 53.0], [1600.0, 54.0], [1700.0, 68.0], [1800.0, 33.0], [1900.0, 94.0], [2000.0, 87.0], [2100.0, 45.0], [2200.0, 38.0], [2300.0, 77.0], [2400.0, 117.0], [2500.0, 91.0], [2600.0, 92.0], [2700.0, 55.0], [2800.0, 105.0], [2900.0, 80.0], [3000.0, 52.0], [3100.0, 60.0], [3200.0, 89.0], [3300.0, 92.0], [3400.0, 32.0], [3500.0, 62.0], [3700.0, 196.0], [3600.0, 133.0], [3800.0, 141.0], [3900.0, 56.0], [4000.0, 35.0], [4100.0, 48.0], [4200.0, 13.0], [4300.0, 1.0], [300.0, 82.0], [4700.0, 1.0], [400.0, 70.0], [500.0, 48.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2568.0, "series": [{"data": [[0.0, 152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 57.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2568.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 46.12264150943394, "minX": 1.7819508E12, "maxY": 104.97342192691036, "series": [{"data": [[1.7819508E12, 46.12264150943394], [1.78195086E12, 104.97342192691036]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 112 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195086E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 521.6666666666666, "minX": 1.0, "maxY": 3774.3249999999994, "series": [{"data": [[2.0, 1124.25], [3.0, 1126.75], [4.0, 1041.6], [5.0, 865.6666666666667], [6.0, 769.1428571428571], [7.0, 594.3076923076924], [8.0, 638.0], [9.0, 539.5], [10.0, 567.4615384615385], [11.0, 521.6666666666666], [12.0, 554.625], [13.0, 582.6], [14.0, 575.2777777777778], [15.0, 595.0], [16.0, 630.4444444444446], [17.0, 684.4000000000001], [18.0, 698.2352941176471], [19.0, 749.1333333333333], [20.0, 770.9411764705883], [21.0, 805.3888888888889], [22.0, 869.7333333333333], [23.0, 922.2307692307693], [24.0, 924.5000000000001], [25.0, 986.7142857142858], [26.0, 999.9375000000001], [27.0, 1024.625], [28.0, 1055.1333333333334], [29.0, 1051.0], [30.0, 990.8571428571429], [31.0, 989.7894736842106], [32.0, 998.2666666666667], [33.0, 1000.1666666666666], [34.0, 1012.1875000000001], [35.0, 1042.2222222222224], [36.0, 1074.1333333333334], [37.0, 1101.1764705882354], [38.0, 1150.1176470588234], [39.0, 1172.9375], [40.0, 1213.0], [41.0, 1219.7894736842106], [42.0, 1285.0], [43.0, 1319.0555555555557], [44.0, 1368.6923076923078], [45.0, 1390.7500000000002], [46.0, 1463.2], [47.0, 1576.75], [48.0, 1584.4117647058824], [49.0, 1525.0], [50.0, 1523.2631578947373], [51.0, 1586.1000000000001], [52.0, 1767.8999999999999], [53.0, 1685.1363636363633], [54.0, 1836.2307692307695], [55.0, 1664.5416666666667], [56.0, 1728.9166666666665], [57.0, 1817.6923076923076], [58.0, 1831.4615384615383], [59.0, 1891.0666666666666], [60.0, 1846.607142857143], [61.0, 1918.7333333333333], [62.0, 2004.7333333333331], [63.0, 2112.8333333333335], [64.0, 1958.5625000000002], [65.0, 2795.645833333333], [66.0, 1939.7058823529412], [67.0, 1930.8333333333335], [68.0, 2100.055555555556], [70.0, 2165.5263157894738], [71.0, 2284.1052631578946], [72.0, 2298.571428571428], [73.0, 2137.9999999999995], [75.0, 2346.1818181818176], [76.0, 2336.8636363636365], [77.0, 2363.8695652173915], [79.0, 2346.4782608695655], [80.0, 2505.0833333333335], [82.0, 2625.88], [83.0, 2548.115384615384], [85.0, 2546.0], [87.0, 2735.4999999999995], [88.0, 2864.074074074074], [90.0, 2895.3124999999995], [92.0, 2871.7241379310353], [94.0, 2805.1250000000005], [96.0, 2951.933333333333], [97.0, 2870.117647058824], [99.0, 2849.272727272728], [100.0, 3350.0], [101.0, 2959.5714285714284], [103.0, 2943.638888888889], [106.0, 3008.5135135135138], [105.0, 3371.9250000000015], [108.0, 3247.9189189189187], [111.0, 3774.3249999999994], [112.0, 3439.3281733746117], [1.0, 3028.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[78.01692473892679, 2447.823190493339]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 112.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3349.6, "minX": 1.7819508E12, "maxY": 5794.25, "series": [{"data": [[1.7819508E12, 4897.2], [1.78195086E12, 5794.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7819508E12, 3349.6], [1.78195086E12, 3963.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195086E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1443.7264150943402, "minX": 1.7819508E12, "maxY": 3296.4684385382066, "series": [{"data": [[1.7819508E12, 1443.7264150943402], [1.78195086E12, 3296.4684385382066]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195086E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1443.709905660377, "minX": 1.7819508E12, "maxY": 3296.4617940199323, "series": [{"data": [[1.7819508E12, 1443.709905660377], [1.78195086E12, 3296.4617940199323]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195086E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.025913621262458466, "minX": 1.7819508E12, "maxY": 0.04323899371069192, "series": [{"data": [[1.7819508E12, 0.04323899371069192], [1.78195086E12, 0.025913621262458466]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195086E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 354.0, "minX": 1.7819508E12, "maxY": 618.0, "series": [{"data": [[1.7819508E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7819508E12, 354.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7819508E12, 566.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7819508E12, 615.6]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7819508E12, 425.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7819508E12, 595.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819508E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 369.0, "minX": 1.0, "maxY": 3686.0, "series": [{"data": [[1.0, 522.0], [9.0, 418.0], [18.0, 381.0], [5.0, 511.0], [23.0, 369.0], [25.0, 371.0], [29.0, 439.0], [30.0, 395.5], [31.0, 526.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1087.0], [33.0, 1598.0], [35.0, 1982.0], [34.0, 3037.5], [36.0, 3219.0], [37.0, 3317.0], [38.0, 1943.5], [40.0, 3686.0], [41.0, 3685.0], [42.0, 2110.0], [47.0, 2297.0], [55.0, 3041.0], [10.0, 3076.0], [18.0, 2284.0], [21.0, 2475.0], [22.0, 2098.0], [23.0, 2188.0], [24.0, 1757.0], [25.0, 2463.0], [26.0, 2372.0], [27.0, 1319.0], [28.0, 1764.0], [29.0, 1663.5], [30.0, 1716.5], [31.0, 1268.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 369.0, "minX": 1.0, "maxY": 3686.0, "series": [{"data": [[1.0, 519.0], [9.0, 418.0], [18.0, 381.0], [5.0, 511.0], [23.0, 369.0], [25.0, 371.0], [29.0, 439.0], [30.0, 395.5], [31.0, 526.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1086.5], [33.0, 1598.0], [35.0, 1982.0], [34.0, 3037.5], [36.0, 3219.0], [37.0, 3317.0], [38.0, 1943.5], [40.0, 3686.0], [41.0, 3685.0], [42.0, 2110.0], [47.0, 2297.0], [55.0, 3041.0], [10.0, 3076.0], [18.0, 2284.0], [21.0, 2475.0], [22.0, 2098.0], [23.0, 2188.0], [24.0, 1757.0], [25.0, 2463.0], [26.0, 2372.0], [27.0, 1319.0], [28.0, 1764.0], [29.0, 1663.5], [30.0, 1716.5], [31.0, 1268.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.633333333333333, "minX": 1.7819508E12, "maxY": 23.65, "series": [{"data": [[1.7819508E12, 22.633333333333333], [1.78195086E12, 23.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195086E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.2, "minX": 1.7819508E12, "maxY": 25.083333333333332, "series": [{"data": [[1.7819508E12, 21.2], [1.78195086E12, 25.083333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195086E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.7819508E12, "maxY": 25.083333333333332, "series": [{"data": [[1.7819508E12, 3.4833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7819508E12, 17.716666666666665], [1.78195086E12, 25.083333333333332]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195086E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.7819508E12, "maxY": 25.083333333333332, "series": [{"data": [[1.7819508E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7819508E12, 17.716666666666665], [1.78195086E12, 25.083333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195086E12, "title": "Total Transactions Per Second"}},
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

