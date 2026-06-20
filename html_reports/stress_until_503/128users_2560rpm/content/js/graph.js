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
        data: {"result": {"minY": 360.0, "minX": 0.0, "maxY": 6504.0, "series": [{"data": [[0.0, 360.0], [0.1, 362.0], [0.2, 364.0], [0.3, 369.0], [0.4, 369.0], [0.5, 369.0], [0.6, 371.0], [0.7, 372.0], [0.8, 376.0], [0.9, 377.0], [1.0, 377.0], [1.1, 380.0], [1.2, 382.0], [1.3, 383.0], [1.4, 386.0], [1.5, 388.0], [1.6, 389.0], [1.7, 391.0], [1.8, 392.0], [1.9, 393.0], [2.0, 395.0], [2.1, 396.0], [2.2, 397.0], [2.3, 397.0], [2.4, 398.0], [2.5, 398.0], [2.6, 401.0], [2.7, 403.0], [2.8, 407.0], [2.9, 408.0], [3.0, 412.0], [3.1, 413.0], [3.2, 415.0], [3.3, 416.0], [3.4, 416.0], [3.5, 419.0], [3.6, 425.0], [3.7, 427.0], [3.8, 430.0], [3.9, 433.0], [4.0, 435.0], [4.1, 438.0], [4.2, 442.0], [4.3, 447.0], [4.4, 452.0], [4.5, 456.0], [4.6, 460.0], [4.7, 463.0], [4.8, 464.0], [4.9, 465.0], [5.0, 471.0], [5.1, 477.0], [5.2, 480.0], [5.3, 482.0], [5.4, 487.0], [5.5, 491.0], [5.6, 496.0], [5.7, 497.0], [5.8, 507.0], [5.9, 511.0], [6.0, 517.0], [6.1, 518.0], [6.2, 526.0], [6.3, 532.0], [6.4, 542.0], [6.5, 545.0], [6.6, 550.0], [6.7, 554.0], [6.8, 563.0], [6.9, 570.0], [7.0, 575.0], [7.1, 584.0], [7.2, 591.0], [7.3, 596.0], [7.4, 604.0], [7.5, 612.0], [7.6, 624.0], [7.7, 628.0], [7.8, 636.0], [7.9, 643.0], [8.0, 653.0], [8.1, 658.0], [8.2, 669.0], [8.3, 681.0], [8.4, 688.0], [8.5, 695.0], [8.6, 705.0], [8.7, 715.0], [8.8, 730.0], [8.9, 736.0], [9.0, 744.0], [9.1, 751.0], [9.2, 762.0], [9.3, 773.0], [9.4, 783.0], [9.5, 790.0], [9.6, 802.0], [9.7, 806.0], [9.8, 817.0], [9.9, 835.0], [10.0, 841.0], [10.1, 844.0], [10.2, 856.0], [10.3, 865.0], [10.4, 883.0], [10.5, 889.0], [10.6, 894.0], [10.7, 903.0], [10.8, 913.0], [10.9, 923.0], [11.0, 936.0], [11.1, 940.0], [11.2, 946.0], [11.3, 952.0], [11.4, 977.0], [11.5, 983.0], [11.6, 986.0], [11.7, 989.0], [11.8, 999.0], [11.9, 1002.0], [12.0, 1005.0], [12.1, 1015.0], [12.2, 1022.0], [12.3, 1032.0], [12.4, 1034.0], [12.5, 1039.0], [12.6, 1044.0], [12.7, 1055.0], [12.8, 1056.0], [12.9, 1061.0], [13.0, 1063.0], [13.1, 1067.0], [13.2, 1067.0], [13.3, 1072.0], [13.4, 1072.0], [13.5, 1078.0], [13.6, 1079.0], [13.7, 1084.0], [13.8, 1085.0], [13.9, 1089.0], [14.0, 1091.0], [14.1, 1091.0], [14.2, 1093.0], [14.3, 1097.0], [14.4, 1101.0], [14.5, 1102.0], [14.6, 1107.0], [14.7, 1117.0], [14.8, 1125.0], [14.9, 1127.0], [15.0, 1133.0], [15.1, 1138.0], [15.2, 1143.0], [15.3, 1144.0], [15.4, 1151.0], [15.5, 1159.0], [15.6, 1161.0], [15.7, 1161.0], [15.8, 1168.0], [15.9, 1169.0], [16.0, 1170.0], [16.1, 1174.0], [16.2, 1184.0], [16.3, 1192.0], [16.4, 1194.0], [16.5, 1197.0], [16.6, 1201.0], [16.7, 1210.0], [16.8, 1214.0], [16.9, 1220.0], [17.0, 1224.0], [17.1, 1225.0], [17.2, 1230.0], [17.3, 1232.0], [17.4, 1233.0], [17.5, 1236.0], [17.6, 1239.0], [17.7, 1240.0], [17.8, 1242.0], [17.9, 1255.0], [18.0, 1261.0], [18.1, 1265.0], [18.2, 1271.0], [18.3, 1286.0], [18.4, 1291.0], [18.5, 1292.0], [18.6, 1294.0], [18.7, 1297.0], [18.8, 1300.0], [18.9, 1303.0], [19.0, 1306.0], [19.1, 1306.0], [19.2, 1307.0], [19.3, 1315.0], [19.4, 1316.0], [19.5, 1328.0], [19.6, 1330.0], [19.7, 1330.0], [19.8, 1339.0], [19.9, 1342.0], [20.0, 1349.0], [20.1, 1352.0], [20.2, 1356.0], [20.3, 1359.0], [20.4, 1363.0], [20.5, 1367.0], [20.6, 1376.0], [20.7, 1382.0], [20.8, 1406.0], [20.9, 1406.0], [21.0, 1415.0], [21.1, 1417.0], [21.2, 1419.0], [21.3, 1419.0], [21.4, 1425.0], [21.5, 1447.0], [21.6, 1447.0], [21.7, 1449.0], [21.8, 1453.0], [21.9, 1467.0], [22.0, 1480.0], [22.1, 1480.0], [22.2, 1481.0], [22.3, 1491.0], [22.4, 1491.0], [22.5, 1491.0], [22.6, 1492.0], [22.7, 1507.0], [22.8, 1535.0], [22.9, 1536.0], [23.0, 1537.0], [23.1, 1542.0], [23.2, 1549.0], [23.3, 1549.0], [23.4, 1570.0], [23.5, 1570.0], [23.6, 1577.0], [23.7, 1592.0], [23.8, 1601.0], [23.9, 1602.0], [24.0, 1619.0], [24.1, 1620.0], [24.2, 1623.0], [24.3, 1625.0], [24.4, 1630.0], [24.5, 1630.0], [24.6, 1654.0], [24.7, 1654.0], [24.8, 1656.0], [24.9, 1669.0], [25.0, 1672.0], [25.1, 1684.0], [25.2, 1684.0], [25.3, 1689.0], [25.4, 1690.0], [25.5, 1691.0], [25.6, 1709.0], [25.7, 1710.0], [25.8, 1710.0], [25.9, 1711.0], [26.0, 1711.0], [26.1, 1712.0], [26.2, 1749.0], [26.3, 1749.0], [26.4, 1751.0], [26.5, 1764.0], [26.6, 1764.0], [26.7, 1767.0], [26.8, 1768.0], [26.9, 1768.0], [27.0, 1768.0], [27.1, 1769.0], [27.2, 1799.0], [27.3, 1799.0], [27.4, 1801.0], [27.5, 1815.0], [27.6, 1818.0], [27.7, 1818.0], [27.8, 1832.0], [27.9, 1834.0], [28.0, 1846.0], [28.1, 1872.0], [28.2, 1872.0], [28.3, 1873.0], [28.4, 1893.0], [28.5, 1905.0], [28.6, 1905.0], [28.7, 1905.0], [28.8, 1906.0], [28.9, 1907.0], [29.0, 1916.0], [29.1, 1916.0], [29.2, 1916.0], [29.3, 1930.0], [29.4, 1930.0], [29.5, 1931.0], [29.6, 1932.0], [29.7, 1971.0], [29.8, 1971.0], [29.9, 1973.0], [30.0, 1973.0], [30.1, 1973.0], [30.2, 1973.0], [30.3, 1994.0], [30.4, 1996.0], [30.5, 2003.0], [30.6, 2003.0], [30.7, 2003.0], [30.8, 2004.0], [30.9, 2038.0], [31.0, 2059.0], [31.1, 2059.0], [31.2, 2059.0], [31.3, 2060.0], [31.4, 2060.0], [31.5, 2069.0], [31.6, 2069.0], [31.7, 2070.0], [31.8, 2070.0], [31.9, 2070.0], [32.0, 2096.0], [32.1, 2097.0], [32.2, 2097.0], [32.3, 2097.0], [32.4, 2097.0], [32.5, 2097.0], [32.6, 2097.0], [32.7, 2098.0], [32.8, 2099.0], [32.9, 2099.0], [33.0, 2107.0], [33.1, 2108.0], [33.2, 2116.0], [33.3, 2119.0], [33.4, 2121.0], [33.5, 2122.0], [33.6, 2124.0], [33.7, 2157.0], [33.8, 2157.0], [33.9, 2157.0], [34.0, 2158.0], [34.1, 2158.0], [34.2, 2158.0], [34.3, 2189.0], [34.4, 2219.0], [34.5, 2220.0], [34.6, 2220.0], [34.7, 2220.0], [34.8, 2221.0], [34.9, 2222.0], [35.0, 2222.0], [35.1, 2237.0], [35.2, 2238.0], [35.3, 2239.0], [35.4, 2239.0], [35.5, 2239.0], [35.6, 2239.0], [35.7, 2243.0], [35.8, 2243.0], [35.9, 2243.0], [36.0, 2244.0], [36.1, 2264.0], [36.2, 2266.0], [36.3, 2267.0], [36.4, 2289.0], [36.5, 2325.0], [36.6, 2325.0], [36.7, 2365.0], [36.8, 2384.0], [36.9, 2384.0], [37.0, 2385.0], [37.1, 2385.0], [37.2, 2386.0], [37.3, 2386.0], [37.4, 2386.0], [37.5, 2386.0], [37.6, 2414.0], [37.7, 2456.0], [37.8, 2457.0], [37.9, 2457.0], [38.0, 2470.0], [38.1, 2478.0], [38.2, 2478.0], [38.3, 2478.0], [38.4, 2496.0], [38.5, 2497.0], [38.6, 2497.0], [38.7, 2497.0], [38.8, 2497.0], [38.9, 2498.0], [39.0, 2499.0], [39.1, 2501.0], [39.2, 2502.0], [39.3, 2502.0], [39.4, 2503.0], [39.5, 2526.0], [39.6, 2526.0], [39.7, 2526.0], [39.8, 2526.0], [39.9, 2563.0], [40.0, 2599.0], [40.1, 2599.0], [40.2, 2600.0], [40.3, 2600.0], [40.4, 2600.0], [40.5, 2600.0], [40.6, 2601.0], [40.7, 2602.0], [40.8, 2607.0], [40.9, 2608.0], [41.0, 2608.0], [41.1, 2609.0], [41.2, 2609.0], [41.3, 2609.0], [41.4, 2609.0], [41.5, 2632.0], [41.6, 2633.0], [41.7, 2634.0], [41.8, 2634.0], [41.9, 2649.0], [42.0, 2649.0], [42.1, 2649.0], [42.2, 2662.0], [42.3, 2664.0], [42.4, 2665.0], [42.5, 2768.0], [42.6, 2768.0], [42.7, 2769.0], [42.8, 2769.0], [42.9, 2769.0], [43.0, 2770.0], [43.1, 2771.0], [43.2, 2791.0], [43.3, 2793.0], [43.4, 2793.0], [43.5, 2809.0], [43.6, 2809.0], [43.7, 2811.0], [43.8, 2821.0], [43.9, 2826.0], [44.0, 2826.0], [44.1, 2826.0], [44.2, 2826.0], [44.3, 2826.0], [44.4, 2826.0], [44.5, 2826.0], [44.6, 2826.0], [44.7, 2827.0], [44.8, 2827.0], [44.9, 2829.0], [45.0, 2829.0], [45.1, 2830.0], [45.2, 2830.0], [45.3, 2830.0], [45.4, 2830.0], [45.5, 2830.0], [45.6, 2831.0], [45.7, 2832.0], [45.8, 2833.0], [45.9, 2834.0], [46.0, 2835.0], [46.1, 2835.0], [46.2, 2836.0], [46.3, 2839.0], [46.4, 2839.0], [46.5, 2840.0], [46.6, 2840.0], [46.7, 2842.0], [46.8, 2842.0], [46.9, 2842.0], [47.0, 2842.0], [47.1, 2842.0], [47.2, 2844.0], [47.3, 2849.0], [47.4, 2849.0], [47.5, 2850.0], [47.6, 2850.0], [47.7, 2850.0], [47.8, 2851.0], [47.9, 2851.0], [48.0, 2851.0], [48.1, 2851.0], [48.2, 2852.0], [48.3, 2854.0], [48.4, 2854.0], [48.5, 2854.0], [48.6, 2856.0], [48.7, 2871.0], [48.8, 2881.0], [48.9, 2882.0], [49.0, 2900.0], [49.1, 2900.0], [49.2, 2923.0], [49.3, 2934.0], [49.4, 2934.0], [49.5, 2934.0], [49.6, 2936.0], [49.7, 2936.0], [49.8, 2936.0], [49.9, 2936.0], [50.0, 2936.0], [50.1, 2938.0], [50.2, 2949.0], [50.3, 2949.0], [50.4, 2950.0], [50.5, 2950.0], [50.6, 2951.0], [50.7, 2965.0], [50.8, 3002.0], [50.9, 3025.0], [51.0, 3026.0], [51.1, 3026.0], [51.2, 3026.0], [51.3, 3026.0], [51.4, 3026.0], [51.5, 3027.0], [51.6, 3027.0], [51.7, 3027.0], [51.8, 3028.0], [51.9, 3028.0], [52.0, 3028.0], [52.1, 3033.0], [52.2, 3038.0], [52.3, 3062.0], [52.4, 3064.0], [52.5, 3066.0], [52.6, 3067.0], [52.7, 3067.0], [52.8, 3073.0], [52.9, 3076.0], [53.0, 3078.0], [53.1, 3078.0], [53.2, 3079.0], [53.3, 3079.0], [53.4, 3080.0], [53.5, 3096.0], [53.6, 3102.0], [53.7, 3103.0], [53.8, 3103.0], [53.9, 3105.0], [54.0, 3120.0], [54.1, 3121.0], [54.2, 3121.0], [54.3, 3121.0], [54.4, 3121.0], [54.5, 3123.0], [54.6, 3128.0], [54.7, 3128.0], [54.8, 3128.0], [54.9, 3129.0], [55.0, 3129.0], [55.1, 3130.0], [55.2, 3136.0], [55.3, 3136.0], [55.4, 3137.0], [55.5, 3137.0], [55.6, 3137.0], [55.7, 3138.0], [55.8, 3139.0], [55.9, 3155.0], [56.0, 3156.0], [56.1, 3166.0], [56.2, 3167.0], [56.3, 3167.0], [56.4, 3167.0], [56.5, 3167.0], [56.6, 3168.0], [56.7, 3168.0], [56.8, 3169.0], [56.9, 3173.0], [57.0, 3174.0], [57.1, 3174.0], [57.2, 3175.0], [57.3, 3175.0], [57.4, 3180.0], [57.5, 3180.0], [57.6, 3180.0], [57.7, 3180.0], [57.8, 3180.0], [57.9, 3182.0], [58.0, 3184.0], [58.1, 3184.0], [58.2, 3185.0], [58.3, 3185.0], [58.4, 3186.0], [58.5, 3186.0], [58.6, 3186.0], [58.7, 3186.0], [58.8, 3186.0], [58.9, 3187.0], [59.0, 3188.0], [59.1, 3199.0], [59.2, 3201.0], [59.3, 3201.0], [59.4, 3201.0], [59.5, 3201.0], [59.6, 3201.0], [59.7, 3201.0], [59.8, 3201.0], [59.9, 3202.0], [60.0, 3202.0], [60.1, 3203.0], [60.2, 3203.0], [60.3, 3204.0], [60.4, 3214.0], [60.5, 3217.0], [60.6, 3217.0], [60.7, 3217.0], [60.8, 3218.0], [60.9, 3218.0], [61.0, 3219.0], [61.1, 3222.0], [61.2, 3231.0], [61.3, 3233.0], [61.4, 3233.0], [61.5, 3233.0], [61.6, 3234.0], [61.7, 3235.0], [61.8, 3236.0], [61.9, 3236.0], [62.0, 3237.0], [62.1, 3237.0], [62.2, 3237.0], [62.3, 3237.0], [62.4, 3248.0], [62.5, 3249.0], [62.6, 3258.0], [62.7, 3260.0], [62.8, 3261.0], [62.9, 3261.0], [63.0, 3262.0], [63.1, 3262.0], [63.2, 3262.0], [63.3, 3263.0], [63.4, 3266.0], [63.5, 3266.0], [63.6, 3267.0], [63.7, 3267.0], [63.8, 3267.0], [63.9, 3267.0], [64.0, 3267.0], [64.1, 3268.0], [64.2, 3268.0], [64.3, 3276.0], [64.4, 3277.0], [64.5, 3277.0], [64.6, 3277.0], [64.7, 3278.0], [64.8, 3289.0], [64.9, 3300.0], [65.0, 3305.0], [65.1, 3306.0], [65.2, 3307.0], [65.3, 3307.0], [65.4, 3308.0], [65.5, 3308.0], [65.6, 3308.0], [65.7, 3309.0], [65.8, 3316.0], [65.9, 3317.0], [66.0, 3319.0], [66.1, 3319.0], [66.2, 3320.0], [66.3, 3320.0], [66.4, 3321.0], [66.5, 3322.0], [66.6, 3323.0], [66.7, 3332.0], [66.8, 3337.0], [66.9, 3339.0], [67.0, 3339.0], [67.1, 3339.0], [67.2, 3340.0], [67.3, 3340.0], [67.4, 3340.0], [67.5, 3341.0], [67.6, 3356.0], [67.7, 3466.0], [67.8, 3469.0], [67.9, 3470.0], [68.0, 3470.0], [68.1, 3471.0], [68.2, 3471.0], [68.3, 3471.0], [68.4, 3471.0], [68.5, 3489.0], [68.6, 3536.0], [68.7, 3536.0], [68.8, 3550.0], [68.9, 3614.0], [69.0, 3697.0], [69.1, 3716.0], [69.2, 3717.0], [69.3, 3717.0], [69.4, 3749.0], [69.5, 3773.0], [69.6, 3779.0], [69.7, 3789.0], [69.8, 3819.0], [69.9, 3819.0], [70.0, 3820.0], [70.1, 3821.0], [70.2, 3823.0], [70.3, 3858.0], [70.4, 3890.0], [70.5, 3891.0], [70.6, 3891.0], [70.7, 3891.0], [70.8, 3891.0], [70.9, 3892.0], [71.0, 3892.0], [71.1, 3938.0], [71.2, 3968.0], [71.3, 4006.0], [71.4, 4013.0], [71.5, 4013.0], [71.6, 4013.0], [71.7, 4014.0], [71.8, 4014.0], [71.9, 4014.0], [72.0, 4015.0], [72.1, 4015.0], [72.2, 4024.0], [72.3, 4024.0], [72.4, 4024.0], [72.5, 4025.0], [72.6, 4025.0], [72.7, 4025.0], [72.8, 4025.0], [72.9, 4043.0], [73.0, 4052.0], [73.1, 4057.0], [73.2, 4057.0], [73.3, 4058.0], [73.4, 4059.0], [73.5, 4059.0], [73.6, 4059.0], [73.7, 4059.0], [73.8, 4060.0], [73.9, 4060.0], [74.0, 4060.0], [74.1, 4060.0], [74.2, 4069.0], [74.3, 4069.0], [74.4, 4069.0], [74.5, 4078.0], [74.6, 4079.0], [74.7, 4079.0], [74.8, 4081.0], [74.9, 4081.0], [75.0, 4081.0], [75.1, 4095.0], [75.2, 4110.0], [75.3, 4111.0], [75.4, 4111.0], [75.5, 4145.0], [75.6, 4155.0], [75.7, 4196.0], [75.8, 4243.0], [75.9, 4268.0], [76.0, 4269.0], [76.1, 4269.0], [76.2, 4270.0], [76.3, 4270.0], [76.4, 4270.0], [76.5, 4271.0], [76.6, 4271.0], [76.7, 4271.0], [76.8, 4271.0], [76.9, 4272.0], [77.0, 4291.0], [77.1, 4292.0], [77.2, 4292.0], [77.3, 4293.0], [77.4, 4293.0], [77.5, 4294.0], [77.6, 4294.0], [77.7, 4294.0], [77.8, 4295.0], [77.9, 4297.0], [78.0, 4297.0], [78.1, 4351.0], [78.2, 4352.0], [78.3, 4352.0], [78.4, 4352.0], [78.5, 4352.0], [78.6, 4352.0], [78.7, 4352.0], [78.8, 4352.0], [78.9, 4368.0], [79.0, 4370.0], [79.1, 4370.0], [79.2, 4370.0], [79.3, 4370.0], [79.4, 4371.0], [79.5, 4372.0], [79.6, 4382.0], [79.7, 4382.0], [79.8, 4382.0], [79.9, 4382.0], [80.0, 4382.0], [80.1, 4383.0], [80.2, 4383.0], [80.3, 4383.0], [80.4, 4383.0], [80.5, 4384.0], [80.6, 4384.0], [80.7, 4400.0], [80.8, 4402.0], [80.9, 4404.0], [81.0, 4428.0], [81.1, 4429.0], [81.2, 4429.0], [81.3, 4429.0], [81.4, 4430.0], [81.5, 4431.0], [81.6, 4431.0], [81.7, 4432.0], [81.8, 4435.0], [81.9, 4473.0], [82.0, 4474.0], [82.1, 4482.0], [82.2, 4482.0], [82.3, 4482.0], [82.4, 4482.0], [82.5, 4483.0], [82.6, 4483.0], [82.7, 4483.0], [82.8, 4483.0], [82.9, 4484.0], [83.0, 4486.0], [83.1, 4488.0], [83.2, 4504.0], [83.3, 4504.0], [83.4, 4504.0], [83.5, 4505.0], [83.6, 4505.0], [83.7, 4505.0], [83.8, 4505.0], [83.9, 4505.0], [84.0, 4505.0], [84.1, 4506.0], [84.2, 4507.0], [84.3, 4549.0], [84.4, 4549.0], [84.5, 4550.0], [84.6, 4550.0], [84.7, 4551.0], [84.8, 4551.0], [84.9, 4551.0], [85.0, 4551.0], [85.1, 4551.0], [85.2, 4552.0], [85.3, 4552.0], [85.4, 4556.0], [85.5, 4557.0], [85.6, 4557.0], [85.7, 4557.0], [85.8, 4557.0], [85.9, 4557.0], [86.0, 4557.0], [86.1, 4557.0], [86.2, 4558.0], [86.3, 4569.0], [86.4, 4572.0], [86.5, 4575.0], [86.6, 4576.0], [86.7, 4576.0], [86.8, 4576.0], [86.9, 4577.0], [87.0, 4577.0], [87.1, 4613.0], [87.2, 4614.0], [87.3, 4615.0], [87.4, 4615.0], [87.5, 4615.0], [87.6, 4615.0], [87.7, 4615.0], [87.8, 4616.0], [87.9, 4616.0], [88.0, 4616.0], [88.1, 4617.0], [88.2, 4687.0], [88.3, 4723.0], [88.4, 4723.0], [88.5, 4724.0], [88.6, 4724.0], [88.7, 4724.0], [88.8, 4724.0], [88.9, 4725.0], [89.0, 4725.0], [89.1, 4725.0], [89.2, 4725.0], [89.3, 4726.0], [89.4, 4738.0], [89.5, 4738.0], [89.6, 4739.0], [89.7, 4739.0], [89.8, 4818.0], [89.9, 4818.0], [90.0, 4819.0], [90.1, 4819.0], [90.2, 4820.0], [90.3, 4822.0], [90.4, 4823.0], [90.5, 4823.0], [90.6, 4823.0], [90.7, 4823.0], [90.8, 4823.0], [90.9, 4824.0], [91.0, 4824.0], [91.1, 4825.0], [91.2, 4825.0], [91.3, 4825.0], [91.4, 4825.0], [91.5, 4825.0], [91.6, 4825.0], [91.7, 4825.0], [91.8, 4826.0], [91.9, 4986.0], [92.0, 4986.0], [92.1, 4987.0], [92.2, 4987.0], [92.3, 4987.0], [92.4, 4988.0], [92.5, 5017.0], [92.6, 5017.0], [92.7, 5018.0], [92.8, 5018.0], [92.9, 5019.0], [93.0, 5019.0], [93.1, 5019.0], [93.2, 5020.0], [93.3, 5020.0], [93.4, 5037.0], [93.5, 5037.0], [93.6, 5038.0], [93.7, 5038.0], [93.8, 5039.0], [93.9, 5039.0], [94.0, 5068.0], [94.1, 5068.0], [94.2, 5074.0], [94.3, 5074.0], [94.4, 5075.0], [94.5, 5075.0], [94.6, 5075.0], [94.7, 5076.0], [94.8, 5076.0], [94.9, 5076.0], [95.0, 5076.0], [95.1, 5076.0], [95.2, 5076.0], [95.3, 5077.0], [95.4, 5077.0], [95.5, 5077.0], [95.6, 5078.0], [95.7, 5078.0], [95.8, 5078.0], [95.9, 5079.0], [96.0, 5079.0], [96.1, 5080.0], [96.2, 5081.0], [96.3, 5081.0], [96.4, 5081.0], [96.5, 5092.0], [96.6, 5094.0], [96.7, 5095.0], [96.8, 5095.0], [96.9, 5095.0], [97.0, 5095.0], [97.1, 5096.0], [97.2, 5096.0], [97.3, 5099.0], [97.4, 5099.0], [97.5, 5101.0], [97.6, 5101.0], [97.7, 5101.0], [97.8, 5109.0], [97.9, 5109.0], [98.0, 5110.0], [98.1, 5119.0], [98.2, 5120.0], [98.3, 5120.0], [98.4, 5120.0], [98.5, 5120.0], [98.6, 5120.0], [98.7, 5121.0], [98.8, 5121.0], [98.9, 5121.0], [99.0, 5121.0], [99.1, 5122.0], [99.2, 5137.0], [99.3, 5138.0], [99.4, 5139.0], [99.5, 5140.0], [99.6, 5140.0], [99.7, 5141.0], [99.8, 6250.0], [99.9, 6387.0], [100.0, 6504.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 159.0, "series": [{"data": [[600.0, 33.0], [700.0, 29.0], [800.0, 30.0], [900.0, 31.0], [1000.0, 70.0], [1100.0, 60.0], [1200.0, 62.0], [1300.0, 54.0], [1400.0, 53.0], [1500.0, 28.0], [1600.0, 52.0], [1700.0, 48.0], [1800.0, 31.0], [1900.0, 54.0], [2000.0, 69.0], [2100.0, 40.0], [2300.0, 30.0], [2200.0, 56.0], [2400.0, 41.0], [2500.0, 32.0], [2600.0, 63.0], [2800.0, 152.0], [2700.0, 27.0], [2900.0, 50.0], [3000.0, 75.0], [3100.0, 154.0], [3200.0, 159.0], [3300.0, 75.0], [3400.0, 25.0], [3500.0, 10.0], [3700.0, 19.0], [3600.0, 4.0], [3800.0, 36.0], [3900.0, 6.0], [4000.0, 107.0], [4300.0, 73.0], [4100.0, 16.0], [4200.0, 63.0], [4600.0, 31.0], [4500.0, 109.0], [4400.0, 68.0], [4800.0, 58.0], [4700.0, 43.0], [4900.0, 15.0], [5000.0, 139.0], [5100.0, 63.0], [6300.0, 1.0], [6200.0, 3.0], [6400.0, 1.0], [6500.0, 1.0], [300.0, 69.0], [400.0, 88.0], [500.0, 45.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2542.0, "series": [{"data": [[0.0, 158.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2542.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 13.320388349514568, "minX": 1.78195086E12, "maxY": 118.07670454545453, "series": [{"data": [[1.78195092E12, 84.16675719717539], [1.78195098E12, 118.07670454545453], [1.78195086E12, 13.320388349514568]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 128 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195098E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 597.0588235294118, "minX": 1.0, "maxY": 5139.0, "series": [{"data": [[2.0, 2391.0], [3.0, 1422.25], [4.0, 1687.0], [5.0, 1212.8], [6.0, 769.6363636363637], [7.0, 816.8888888888889], [8.0, 828.6666666666667], [9.0, 744.4], [10.0, 719.1818181818181], [11.0, 597.0588235294118], [12.0, 605.375], [13.0, 635.0], [14.0, 637.75], [15.0, 657.0], [16.0, 678.25], [17.0, 717.5333333333333], [18.0, 718.1764705882354], [19.0, 762.875], [20.0, 782.8823529411765], [21.0, 842.3333333333334], [22.0, 888.0], [23.0, 894.1875], [24.0, 949.2142857142858], [25.0, 977.8000000000001], [26.0, 1041.5384615384614], [27.0, 1065.2857142857142], [28.0, 942.8461538461538], [29.0, 986.1666666666666], [30.0, 1011.3333333333335], [31.0, 1042.5333333333333], [32.0, 1066.1538461538462], [33.0, 1077.2142857142858], [34.0, 1100.5714285714284], [35.0, 1120.153846153846], [36.0, 1151.2857142857142], [37.0, 1172.4666666666665], [38.0, 1197.6428571428573], [39.0, 1207.5454545454545], [40.0, 1239.111111111111], [41.0, 1257.6666666666667], [42.0, 1253.3125000000002], [43.0, 1288.8333333333335], [44.0, 1326.1538461538462], [45.0, 1343.0], [46.0, 1353.6153846153845], [47.0, 1430.8125], [48.0, 1447.705882352941], [49.0, 1474.0], [50.0, 1493.8888888888887], [51.0, 1575.8500000000001], [52.0, 1646.5], [53.0, 1572.3333333333333], [54.0, 1659.6956521739132], [55.0, 1710.153846153846], [56.0, 1721.090909090909], [57.0, 1878.642857142857], [58.0, 1812.6666666666667], [59.0, 1846.8666666666666], [60.0, 1867.4615384615383], [61.0, 1852.125], [62.0, 1938.857142857143], [63.0, 2138.222222222222], [64.0, 2133.3529411764707], [66.0, 2018.9444444444448], [67.0, 2158.736842105263], [65.0, 4352.0], [68.0, 2092.5], [70.0, 2220.6315789473683], [71.0, 3423.7166666666676], [72.0, 2231.55], [74.0, 2290.1428571428573], [75.0, 2270.8636363636365], [77.0, 2301.4090909090914], [78.0, 2406.208333333333], [80.0, 2407.826086956521], [82.0, 2672.3461538461543], [83.0, 2799.0], [81.0, 3186.3], [84.0, 2512.347826086957], [86.0, 2714.740740740741], [88.0, 2737.7407407407404], [90.0, 3059.210526315789], [92.0, 2875.433333333333], [94.0, 2845.0], [96.0, 2751.242424242424], [98.0, 2856.5937499999995], [100.0, 3333.8888888888887], [103.0, 3030.8857142857146], [105.0, 3131.783783783784], [106.0, 3823.6666666666665], [108.0, 3198.8378378378375], [110.0, 3347.0], [111.0, 3762.6976744186045], [114.0, 3650.238095238096], [116.0, 3542.7], [117.0, 5139.0], [120.0, 3654.777777777778], [122.0, 3694.8372093023245], [125.0, 3712.645833333333], [128.0, 4179.426406926412], [1.0, 4263.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[87.53944020356252, 2857.1384950926904]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 128.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 542.4666666666667, "minX": 1.78195086E12, "maxY": 7087.85, "series": [{"data": [[1.78195092E12, 7087.85], [1.78195098E12, 2710.4666666666667], [1.78195086E12, 793.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195092E12, 4847.966666666666], [1.78195098E12, 1853.8666666666666], [1.78195086E12, 542.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195098E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 448.5873786407769, "minX": 1.78195086E12, "maxY": 4216.015624999994, "series": [{"data": [[1.78195092E12, 2607.0092341118875], [1.78195098E12, 4216.015624999994], [1.78195086E12, 448.5873786407769]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195098E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 448.5242718446601, "minX": 1.78195086E12, "maxY": 4215.992897727277, "series": [{"data": [[1.78195092E12, 2606.9869636067424], [1.78195098E12, 4215.992897727277], [1.78195086E12, 448.5242718446601]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195098E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026988636363636347, "minX": 1.78195086E12, "maxY": 0.11650485436893201, "series": [{"data": [[1.78195092E12, 0.0282455187398153], [1.78195098E12, 0.026988636363636347], [1.78195086E12, 0.11650485436893201]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195098E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 360.0, "minX": 1.78195086E12, "maxY": 619.0, "series": [{"data": [[1.78195092E12, 619.0], [1.78195086E12, 610.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195092E12, 612.0], [1.78195086E12, 360.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195092E12, 619.0], [1.78195086E12, 557.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195092E12, 619.0], [1.78195086E12, 605.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195092E12, 618.0], [1.78195086E12, 428.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195092E12, 619.0], [1.78195086E12, 585.9499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 380.0, "minX": 1.0, "maxY": 5120.0, "series": [{"data": [[32.0, 496.5], [34.0, 392.5], [9.0, 465.0], [5.0, 496.0], [24.0, 380.0], [14.0, 398.0], [30.0, 618.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1601.0], [33.0, 1567.0], [35.0, 3066.0], [36.0, 2097.0], [37.0, 3038.0], [38.0, 3853.0], [41.0, 2220.0], [40.0, 4024.5], [42.0, 4008.5], [43.0, 4078.5], [45.0, 4060.0], [44.0, 4557.0], [47.0, 2220.0], [46.0, 4482.0], [48.0, 4111.0], [51.0, 4726.0], [52.0, 4352.0], [53.0, 5120.0], [54.0, 5017.0], [57.0, 5099.0], [1.0, 3522.0], [19.0, 4088.0], [20.0, 2500.5], [22.0, 2070.0], [24.0, 1817.5], [25.0, 2007.0], [26.0, 2302.0], [27.0, 1543.5], [28.0, 1084.5], [29.0, 1265.0], [30.0, 1915.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 380.0, "minX": 1.0, "maxY": 5120.0, "series": [{"data": [[32.0, 496.5], [34.0, 392.5], [9.0, 465.0], [5.0, 496.0], [24.0, 380.0], [14.0, 398.0], [30.0, 618.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1601.0], [33.0, 1567.0], [35.0, 3066.0], [36.0, 2097.0], [37.0, 3038.0], [38.0, 3853.0], [41.0, 2220.0], [40.0, 4024.0], [42.0, 4008.5], [43.0, 4078.5], [45.0, 4060.0], [44.0, 4557.0], [47.0, 2220.0], [46.0, 4482.0], [48.0, 4111.0], [51.0, 4726.0], [52.0, 4352.0], [53.0, 5120.0], [54.0, 5017.0], [57.0, 5099.0], [1.0, 3522.0], [19.0, 4088.0], [20.0, 2500.5], [22.0, 2070.0], [24.0, 1817.5], [25.0, 2007.0], [26.0, 2302.0], [27.0, 1543.5], [28.0, 1084.0], [29.0, 1265.0], [30.0, 1915.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.783333333333333, "minX": 1.78195086E12, "maxY": 32.46666666666667, "series": [{"data": [[1.78195092E12, 32.46666666666667], [1.78195098E12, 9.6], [1.78195086E12, 3.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195098E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78195086E12, "maxY": 30.683333333333334, "series": [{"data": [[1.78195092E12, 30.683333333333334], [1.78195098E12, 11.7], [1.78195086E12, 3.433333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195098E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195098E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78195086E12, "maxY": 30.633333333333333, "series": [{"data": [[1.78195092E12, 0.05], [1.78195086E12, 3.433333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195092E12, 30.633333333333333], [1.78195098E12, 11.733333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195098E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78195086E12, "maxY": 30.633333333333333, "series": [{"data": [[1.78195092E12, 0.05], [1.78195086E12, 3.433333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195092E12, 30.633333333333333], [1.78195098E12, 11.733333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195098E12, "title": "Total Transactions Per Second"}},
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

