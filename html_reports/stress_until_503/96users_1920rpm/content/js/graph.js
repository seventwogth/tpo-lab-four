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
        data: {"result": {"minY": 374.0, "minX": 0.0, "maxY": 3725.0, "series": [{"data": [[0.0, 374.0], [0.1, 377.0], [0.2, 377.0], [0.3, 378.0], [0.4, 379.0], [0.5, 380.0], [0.6, 381.0], [0.7, 381.0], [0.8, 381.0], [0.9, 382.0], [1.0, 382.0], [1.1, 382.0], [1.2, 384.0], [1.3, 384.0], [1.4, 384.0], [1.5, 386.0], [1.6, 386.0], [1.7, 387.0], [1.8, 388.0], [1.9, 388.0], [2.0, 389.0], [2.1, 391.0], [2.2, 393.0], [2.3, 395.0], [2.4, 396.0], [2.5, 397.0], [2.6, 398.0], [2.7, 399.0], [2.8, 401.0], [2.9, 402.0], [3.0, 403.0], [3.1, 405.0], [3.2, 411.0], [3.3, 412.0], [3.4, 412.0], [3.5, 418.0], [3.6, 419.0], [3.7, 421.0], [3.8, 424.0], [3.9, 426.0], [4.0, 429.0], [4.1, 430.0], [4.2, 431.0], [4.3, 436.0], [4.4, 438.0], [4.5, 445.0], [4.6, 449.0], [4.7, 452.0], [4.8, 457.0], [4.9, 461.0], [5.0, 464.0], [5.1, 468.0], [5.2, 472.0], [5.3, 481.0], [5.4, 485.0], [5.5, 488.0], [5.6, 494.0], [5.7, 499.0], [5.8, 504.0], [5.9, 510.0], [6.0, 515.0], [6.1, 519.0], [6.2, 523.0], [6.3, 528.0], [6.4, 531.0], [6.5, 538.0], [6.6, 545.0], [6.7, 549.0], [6.8, 554.0], [6.9, 564.0], [7.0, 569.0], [7.1, 573.0], [7.2, 579.0], [7.3, 587.0], [7.4, 592.0], [7.5, 600.0], [7.6, 609.0], [7.7, 618.0], [7.8, 620.0], [7.9, 628.0], [8.0, 638.0], [8.1, 644.0], [8.2, 650.0], [8.3, 658.0], [8.4, 665.0], [8.5, 671.0], [8.6, 682.0], [8.7, 685.0], [8.8, 690.0], [8.9, 702.0], [9.0, 709.0], [9.1, 714.0], [9.2, 725.0], [9.3, 728.0], [9.4, 732.0], [9.5, 743.0], [9.6, 753.0], [9.7, 759.0], [9.8, 763.0], [9.9, 769.0], [10.0, 777.0], [10.1, 779.0], [10.2, 787.0], [10.3, 798.0], [10.4, 802.0], [10.5, 809.0], [10.6, 813.0], [10.7, 817.0], [10.8, 823.0], [10.9, 827.0], [11.0, 835.0], [11.1, 835.0], [11.2, 847.0], [11.3, 848.0], [11.4, 853.0], [11.5, 856.0], [11.6, 861.0], [11.7, 862.0], [11.8, 863.0], [11.9, 871.0], [12.0, 874.0], [12.1, 879.0], [12.2, 883.0], [12.3, 884.0], [12.4, 890.0], [12.5, 894.0], [12.6, 897.0], [12.7, 898.0], [12.8, 900.0], [12.9, 902.0], [13.0, 903.0], [13.1, 907.0], [13.2, 907.0], [13.3, 908.0], [13.4, 912.0], [13.5, 912.0], [13.6, 913.0], [13.7, 913.0], [13.8, 914.0], [13.9, 917.0], [14.0, 917.0], [14.1, 918.0], [14.2, 918.0], [14.3, 918.0], [14.4, 919.0], [14.5, 922.0], [14.6, 922.0], [14.7, 923.0], [14.8, 923.0], [14.9, 923.0], [15.0, 926.0], [15.1, 926.0], [15.2, 926.0], [15.3, 927.0], [15.4, 927.0], [15.5, 927.0], [15.6, 927.0], [15.7, 931.0], [15.8, 931.0], [15.9, 932.0], [16.0, 932.0], [16.1, 933.0], [16.2, 936.0], [16.3, 936.0], [16.4, 936.0], [16.5, 937.0], [16.6, 941.0], [16.7, 941.0], [16.8, 941.0], [16.9, 942.0], [17.0, 942.0], [17.1, 943.0], [17.2, 944.0], [17.3, 947.0], [17.4, 948.0], [17.5, 948.0], [17.6, 951.0], [17.7, 952.0], [17.8, 953.0], [17.9, 955.0], [18.0, 957.0], [18.1, 958.0], [18.2, 958.0], [18.3, 958.0], [18.4, 963.0], [18.5, 963.0], [18.6, 964.0], [18.7, 967.0], [18.8, 967.0], [18.9, 969.0], [19.0, 972.0], [19.1, 973.0], [19.2, 973.0], [19.3, 974.0], [19.4, 977.0], [19.5, 978.0], [19.6, 979.0], [19.7, 980.0], [19.8, 980.0], [19.9, 984.0], [20.0, 984.0], [20.1, 987.0], [20.2, 988.0], [20.3, 989.0], [20.4, 991.0], [20.5, 993.0], [20.6, 994.0], [20.7, 1000.0], [20.8, 1004.0], [20.9, 1005.0], [21.0, 1006.0], [21.1, 1014.0], [21.2, 1017.0], [21.3, 1019.0], [21.4, 1021.0], [21.5, 1025.0], [21.6, 1027.0], [21.7, 1032.0], [21.8, 1039.0], [21.9, 1041.0], [22.0, 1046.0], [22.1, 1049.0], [22.2, 1051.0], [22.3, 1055.0], [22.4, 1059.0], [22.5, 1062.0], [22.6, 1064.0], [22.7, 1074.0], [22.8, 1080.0], [22.9, 1082.0], [23.0, 1099.0], [23.1, 1102.0], [23.2, 1111.0], [23.3, 1115.0], [23.4, 1121.0], [23.5, 1123.0], [23.6, 1132.0], [23.7, 1138.0], [23.8, 1148.0], [23.9, 1153.0], [24.0, 1155.0], [24.1, 1164.0], [24.2, 1165.0], [24.3, 1177.0], [24.4, 1181.0], [24.5, 1191.0], [24.6, 1202.0], [24.7, 1208.0], [24.8, 1216.0], [24.9, 1222.0], [25.0, 1231.0], [25.1, 1256.0], [25.2, 1257.0], [25.3, 1263.0], [25.4, 1269.0], [25.5, 1275.0], [25.6, 1277.0], [25.7, 1283.0], [25.8, 1286.0], [25.9, 1290.0], [26.0, 1299.0], [26.1, 1302.0], [26.2, 1302.0], [26.3, 1319.0], [26.4, 1322.0], [26.5, 1337.0], [26.6, 1340.0], [26.7, 1346.0], [26.8, 1350.0], [26.9, 1356.0], [27.0, 1360.0], [27.1, 1366.0], [27.2, 1368.0], [27.3, 1368.0], [27.4, 1373.0], [27.5, 1376.0], [27.6, 1382.0], [27.7, 1383.0], [27.8, 1387.0], [27.9, 1394.0], [28.0, 1399.0], [28.1, 1405.0], [28.2, 1407.0], [28.3, 1408.0], [28.4, 1421.0], [28.5, 1426.0], [28.6, 1426.0], [28.7, 1428.0], [28.8, 1432.0], [28.9, 1433.0], [29.0, 1436.0], [29.1, 1437.0], [29.2, 1438.0], [29.3, 1447.0], [29.4, 1459.0], [29.5, 1468.0], [29.6, 1478.0], [29.7, 1481.0], [29.8, 1488.0], [29.9, 1488.0], [30.0, 1489.0], [30.1, 1494.0], [30.2, 1500.0], [30.3, 1508.0], [30.4, 1512.0], [30.5, 1520.0], [30.6, 1524.0], [30.7, 1531.0], [30.8, 1538.0], [30.9, 1543.0], [31.0, 1545.0], [31.1, 1547.0], [31.2, 1553.0], [31.3, 1558.0], [31.4, 1566.0], [31.5, 1570.0], [31.6, 1571.0], [31.7, 1575.0], [31.8, 1579.0], [31.9, 1579.0], [32.0, 1581.0], [32.1, 1582.0], [32.2, 1586.0], [32.3, 1587.0], [32.4, 1589.0], [32.5, 1592.0], [32.6, 1592.0], [32.7, 1598.0], [32.8, 1599.0], [32.9, 1600.0], [33.0, 1604.0], [33.1, 1606.0], [33.2, 1609.0], [33.3, 1612.0], [33.4, 1626.0], [33.5, 1632.0], [33.6, 1636.0], [33.7, 1645.0], [33.8, 1647.0], [33.9, 1647.0], [34.0, 1656.0], [34.1, 1659.0], [34.2, 1662.0], [34.3, 1664.0], [34.4, 1667.0], [34.5, 1667.0], [34.6, 1670.0], [34.7, 1674.0], [34.8, 1676.0], [34.9, 1677.0], [35.0, 1678.0], [35.1, 1681.0], [35.2, 1684.0], [35.3, 1686.0], [35.4, 1691.0], [35.5, 1691.0], [35.6, 1695.0], [35.7, 1702.0], [35.8, 1704.0], [35.9, 1708.0], [36.0, 1714.0], [36.1, 1723.0], [36.2, 1725.0], [36.3, 1725.0], [36.4, 1726.0], [36.5, 1727.0], [36.6, 1727.0], [36.7, 1730.0], [36.8, 1731.0], [36.9, 1734.0], [37.0, 1735.0], [37.1, 1738.0], [37.2, 1740.0], [37.3, 1742.0], [37.4, 1742.0], [37.5, 1743.0], [37.6, 1752.0], [37.7, 1760.0], [37.8, 1778.0], [37.9, 1785.0], [38.0, 1798.0], [38.1, 1801.0], [38.2, 1802.0], [38.3, 1803.0], [38.4, 1808.0], [38.5, 1811.0], [38.6, 1812.0], [38.7, 1813.0], [38.8, 1814.0], [38.9, 1816.0], [39.0, 1822.0], [39.1, 1824.0], [39.2, 1825.0], [39.3, 1826.0], [39.4, 1831.0], [39.5, 1836.0], [39.6, 1842.0], [39.7, 1851.0], [39.8, 1862.0], [39.9, 1865.0], [40.0, 1876.0], [40.1, 1879.0], [40.2, 1881.0], [40.3, 1894.0], [40.4, 1897.0], [40.5, 1899.0], [40.6, 1905.0], [40.7, 1905.0], [40.8, 1907.0], [40.9, 1908.0], [41.0, 1909.0], [41.1, 1911.0], [41.2, 1915.0], [41.3, 1916.0], [41.4, 1917.0], [41.5, 1920.0], [41.6, 1936.0], [41.7, 1939.0], [41.8, 1939.0], [41.9, 1943.0], [42.0, 1947.0], [42.1, 1952.0], [42.2, 1953.0], [42.3, 1954.0], [42.4, 1958.0], [42.5, 1958.0], [42.6, 1958.0], [42.7, 1961.0], [42.8, 1967.0], [42.9, 1971.0], [43.0, 1980.0], [43.1, 1981.0], [43.2, 1984.0], [43.3, 1984.0], [43.4, 1985.0], [43.5, 1985.0], [43.6, 1988.0], [43.7, 1990.0], [43.8, 1990.0], [43.9, 1991.0], [44.0, 1991.0], [44.1, 1998.0], [44.2, 2015.0], [44.3, 2016.0], [44.4, 2016.0], [44.5, 2020.0], [44.6, 2022.0], [44.7, 2022.0], [44.8, 2023.0], [44.9, 2027.0], [45.0, 2032.0], [45.1, 2034.0], [45.2, 2034.0], [45.3, 2046.0], [45.4, 2046.0], [45.5, 2047.0], [45.6, 2047.0], [45.7, 2048.0], [45.8, 2060.0], [45.9, 2064.0], [46.0, 2067.0], [46.1, 2077.0], [46.2, 2096.0], [46.3, 2101.0], [46.4, 2102.0], [46.5, 2107.0], [46.6, 2109.0], [46.7, 2109.0], [46.8, 2126.0], [46.9, 2127.0], [47.0, 2127.0], [47.1, 2134.0], [47.2, 2137.0], [47.3, 2138.0], [47.4, 2138.0], [47.5, 2145.0], [47.6, 2146.0], [47.7, 2146.0], [47.8, 2148.0], [47.9, 2149.0], [48.0, 2149.0], [48.1, 2149.0], [48.2, 2150.0], [48.3, 2158.0], [48.4, 2159.0], [48.5, 2174.0], [48.6, 2176.0], [48.7, 2176.0], [48.8, 2183.0], [48.9, 2183.0], [49.0, 2188.0], [49.1, 2190.0], [49.2, 2191.0], [49.3, 2196.0], [49.4, 2196.0], [49.5, 2199.0], [49.6, 2207.0], [49.7, 2208.0], [49.8, 2208.0], [49.9, 2210.0], [50.0, 2211.0], [50.1, 2212.0], [50.2, 2217.0], [50.3, 2219.0], [50.4, 2219.0], [50.5, 2226.0], [50.6, 2228.0], [50.7, 2235.0], [50.8, 2237.0], [50.9, 2240.0], [51.0, 2250.0], [51.1, 2260.0], [51.2, 2270.0], [51.3, 2277.0], [51.4, 2277.0], [51.5, 2282.0], [51.6, 2284.0], [51.7, 2287.0], [51.8, 2294.0], [51.9, 2298.0], [52.0, 2303.0], [52.1, 2303.0], [52.2, 2304.0], [52.3, 2309.0], [52.4, 2318.0], [52.5, 2320.0], [52.6, 2322.0], [52.7, 2330.0], [52.8, 2332.0], [52.9, 2332.0], [53.0, 2333.0], [53.1, 2333.0], [53.2, 2334.0], [53.3, 2334.0], [53.4, 2336.0], [53.5, 2336.0], [53.6, 2350.0], [53.7, 2350.0], [53.8, 2354.0], [53.9, 2357.0], [54.0, 2365.0], [54.1, 2369.0], [54.2, 2373.0], [54.3, 2376.0], [54.4, 2379.0], [54.5, 2382.0], [54.6, 2382.0], [54.7, 2384.0], [54.8, 2392.0], [54.9, 2392.0], [55.0, 2394.0], [55.1, 2397.0], [55.2, 2403.0], [55.3, 2411.0], [55.4, 2411.0], [55.5, 2414.0], [55.6, 2415.0], [55.7, 2417.0], [55.8, 2417.0], [55.9, 2418.0], [56.0, 2423.0], [56.1, 2427.0], [56.2, 2427.0], [56.3, 2431.0], [56.4, 2432.0], [56.5, 2434.0], [56.6, 2441.0], [56.7, 2442.0], [56.8, 2444.0], [56.9, 2444.0], [57.0, 2445.0], [57.1, 2445.0], [57.2, 2449.0], [57.3, 2451.0], [57.4, 2454.0], [57.5, 2457.0], [57.6, 2470.0], [57.7, 2472.0], [57.8, 2481.0], [57.9, 2482.0], [58.0, 2484.0], [58.1, 2489.0], [58.2, 2492.0], [58.3, 2500.0], [58.4, 2500.0], [58.5, 2507.0], [58.6, 2512.0], [58.7, 2513.0], [58.8, 2522.0], [58.9, 2526.0], [59.0, 2527.0], [59.1, 2528.0], [59.2, 2528.0], [59.3, 2530.0], [59.4, 2536.0], [59.5, 2540.0], [59.6, 2542.0], [59.7, 2543.0], [59.8, 2543.0], [59.9, 2544.0], [60.0, 2546.0], [60.1, 2552.0], [60.2, 2552.0], [60.3, 2553.0], [60.4, 2556.0], [60.5, 2556.0], [60.6, 2557.0], [60.7, 2560.0], [60.8, 2561.0], [60.9, 2563.0], [61.0, 2564.0], [61.1, 2568.0], [61.2, 2572.0], [61.3, 2583.0], [61.4, 2585.0], [61.5, 2590.0], [61.6, 2591.0], [61.7, 2592.0], [61.8, 2593.0], [61.9, 2594.0], [62.0, 2594.0], [62.1, 2596.0], [62.2, 2596.0], [62.3, 2597.0], [62.4, 2604.0], [62.5, 2604.0], [62.6, 2610.0], [62.7, 2617.0], [62.8, 2619.0], [62.9, 2624.0], [63.0, 2624.0], [63.1, 2625.0], [63.2, 2626.0], [63.3, 2628.0], [63.4, 2628.0], [63.5, 2628.0], [63.6, 2629.0], [63.7, 2629.0], [63.8, 2630.0], [63.9, 2634.0], [64.0, 2634.0], [64.1, 2635.0], [64.2, 2635.0], [64.3, 2635.0], [64.4, 2641.0], [64.5, 2642.0], [64.6, 2644.0], [64.7, 2647.0], [64.8, 2647.0], [64.9, 2647.0], [65.0, 2653.0], [65.1, 2654.0], [65.2, 2655.0], [65.3, 2669.0], [65.4, 2677.0], [65.5, 2679.0], [65.6, 2684.0], [65.7, 2686.0], [65.8, 2686.0], [65.9, 2686.0], [66.0, 2692.0], [66.1, 2694.0], [66.2, 2694.0], [66.3, 2697.0], [66.4, 2701.0], [66.5, 2704.0], [66.6, 2705.0], [66.7, 2708.0], [66.8, 2709.0], [66.9, 2709.0], [67.0, 2710.0], [67.1, 2711.0], [67.2, 2714.0], [67.3, 2714.0], [67.4, 2716.0], [67.5, 2716.0], [67.6, 2732.0], [67.7, 2734.0], [67.8, 2735.0], [67.9, 2735.0], [68.0, 2740.0], [68.1, 2741.0], [68.2, 2741.0], [68.3, 2742.0], [68.4, 2743.0], [68.5, 2743.0], [68.6, 2744.0], [68.7, 2752.0], [68.8, 2753.0], [68.9, 2755.0], [69.0, 2757.0], [69.1, 2765.0], [69.2, 2768.0], [69.3, 2771.0], [69.4, 2772.0], [69.5, 2772.0], [69.6, 2772.0], [69.7, 2773.0], [69.8, 2773.0], [69.9, 2773.0], [70.0, 2776.0], [70.1, 2780.0], [70.2, 2782.0], [70.3, 2788.0], [70.4, 2788.0], [70.5, 2790.0], [70.6, 2790.0], [70.7, 2791.0], [70.8, 2791.0], [70.9, 2792.0], [71.0, 2792.0], [71.1, 2793.0], [71.2, 2794.0], [71.3, 2804.0], [71.4, 2804.0], [71.5, 2805.0], [71.6, 2806.0], [71.7, 2811.0], [71.8, 2811.0], [71.9, 2811.0], [72.0, 2812.0], [72.1, 2812.0], [72.2, 2813.0], [72.3, 2815.0], [72.4, 2818.0], [72.5, 2818.0], [72.6, 2825.0], [72.7, 2832.0], [72.8, 2835.0], [72.9, 2838.0], [73.0, 2849.0], [73.1, 2849.0], [73.2, 2854.0], [73.3, 2856.0], [73.4, 2858.0], [73.5, 2858.0], [73.6, 2858.0], [73.7, 2863.0], [73.8, 2866.0], [73.9, 2866.0], [74.0, 2866.0], [74.1, 2867.0], [74.2, 2869.0], [74.3, 2873.0], [74.4, 2877.0], [74.5, 2888.0], [74.6, 2888.0], [74.7, 2888.0], [74.8, 2889.0], [74.9, 2890.0], [75.0, 2892.0], [75.1, 2892.0], [75.2, 2893.0], [75.3, 2895.0], [75.4, 2896.0], [75.5, 2899.0], [75.6, 2899.0], [75.7, 2905.0], [75.8, 2905.0], [75.9, 2906.0], [76.0, 2908.0], [76.1, 2908.0], [76.2, 2908.0], [76.3, 2910.0], [76.4, 2911.0], [76.5, 2913.0], [76.6, 2913.0], [76.7, 2919.0], [76.8, 2920.0], [76.9, 2920.0], [77.0, 2921.0], [77.1, 2921.0], [77.2, 2921.0], [77.3, 2925.0], [77.4, 2927.0], [77.5, 2935.0], [77.6, 2935.0], [77.7, 2935.0], [77.8, 2938.0], [77.9, 2939.0], [78.0, 2942.0], [78.1, 2943.0], [78.2, 2945.0], [78.3, 2950.0], [78.4, 2952.0], [78.5, 2953.0], [78.6, 2954.0], [78.7, 2955.0], [78.8, 2963.0], [78.9, 2963.0], [79.0, 2963.0], [79.1, 2964.0], [79.2, 2965.0], [79.3, 2965.0], [79.4, 2969.0], [79.5, 2974.0], [79.6, 2974.0], [79.7, 2977.0], [79.8, 2978.0], [79.9, 2978.0], [80.0, 2981.0], [80.1, 2984.0], [80.2, 2988.0], [80.3, 2994.0], [80.4, 2995.0], [80.5, 2996.0], [80.6, 2999.0], [80.7, 2999.0], [80.8, 3007.0], [80.9, 3008.0], [81.0, 3009.0], [81.1, 3009.0], [81.2, 3011.0], [81.3, 3011.0], [81.4, 3013.0], [81.5, 3013.0], [81.6, 3016.0], [81.7, 3017.0], [81.8, 3018.0], [81.9, 3019.0], [82.0, 3020.0], [82.1, 3021.0], [82.2, 3021.0], [82.3, 3021.0], [82.4, 3022.0], [82.5, 3023.0], [82.6, 3024.0], [82.7, 3025.0], [82.8, 3027.0], [82.9, 3029.0], [83.0, 3030.0], [83.1, 3036.0], [83.2, 3036.0], [83.3, 3038.0], [83.4, 3039.0], [83.5, 3042.0], [83.6, 3044.0], [83.7, 3047.0], [83.8, 3049.0], [83.9, 3049.0], [84.0, 3050.0], [84.1, 3051.0], [84.2, 3053.0], [84.3, 3054.0], [84.4, 3062.0], [84.5, 3062.0], [84.6, 3062.0], [84.7, 3069.0], [84.8, 3071.0], [84.9, 3071.0], [85.0, 3072.0], [85.1, 3073.0], [85.2, 3074.0], [85.3, 3076.0], [85.4, 3080.0], [85.5, 3084.0], [85.6, 3086.0], [85.7, 3088.0], [85.8, 3091.0], [85.9, 3092.0], [86.0, 3093.0], [86.1, 3098.0], [86.2, 3100.0], [86.3, 3101.0], [86.4, 3104.0], [86.5, 3105.0], [86.6, 3107.0], [86.7, 3109.0], [86.8, 3110.0], [86.9, 3111.0], [87.0, 3113.0], [87.1, 3114.0], [87.2, 3115.0], [87.3, 3117.0], [87.4, 3117.0], [87.5, 3119.0], [87.6, 3119.0], [87.7, 3121.0], [87.8, 3121.0], [87.9, 3125.0], [88.0, 3125.0], [88.1, 3127.0], [88.2, 3130.0], [88.3, 3130.0], [88.4, 3130.0], [88.5, 3130.0], [88.6, 3130.0], [88.7, 3131.0], [88.8, 3132.0], [88.9, 3136.0], [89.0, 3136.0], [89.1, 3137.0], [89.2, 3137.0], [89.3, 3147.0], [89.4, 3148.0], [89.5, 3149.0], [89.6, 3150.0], [89.7, 3152.0], [89.8, 3152.0], [89.9, 3152.0], [90.0, 3155.0], [90.1, 3156.0], [90.2, 3157.0], [90.3, 3158.0], [90.4, 3160.0], [90.5, 3163.0], [90.6, 3168.0], [90.7, 3168.0], [90.8, 3175.0], [90.9, 3179.0], [91.0, 3181.0], [91.1, 3184.0], [91.2, 3185.0], [91.3, 3186.0], [91.4, 3186.0], [91.5, 3187.0], [91.6, 3189.0], [91.7, 3189.0], [91.8, 3190.0], [91.9, 3191.0], [92.0, 3192.0], [92.1, 3197.0], [92.2, 3198.0], [92.3, 3198.0], [92.4, 3199.0], [92.5, 3199.0], [92.6, 3199.0], [92.7, 3200.0], [92.8, 3200.0], [92.9, 3201.0], [93.0, 3201.0], [93.1, 3201.0], [93.2, 3209.0], [93.3, 3210.0], [93.4, 3214.0], [93.5, 3220.0], [93.6, 3221.0], [93.7, 3221.0], [93.8, 3221.0], [93.9, 3222.0], [94.0, 3224.0], [94.1, 3225.0], [94.2, 3227.0], [94.3, 3231.0], [94.4, 3233.0], [94.5, 3238.0], [94.6, 3240.0], [94.7, 3240.0], [94.8, 3240.0], [94.9, 3243.0], [95.0, 3243.0], [95.1, 3244.0], [95.2, 3245.0], [95.3, 3246.0], [95.4, 3247.0], [95.5, 3247.0], [95.6, 3252.0], [95.7, 3256.0], [95.8, 3257.0], [95.9, 3261.0], [96.0, 3263.0], [96.1, 3280.0], [96.2, 3281.0], [96.3, 3281.0], [96.4, 3284.0], [96.5, 3285.0], [96.6, 3286.0], [96.7, 3297.0], [96.8, 3297.0], [96.9, 3298.0], [97.0, 3301.0], [97.1, 3304.0], [97.2, 3305.0], [97.3, 3312.0], [97.4, 3313.0], [97.5, 3314.0], [97.6, 3316.0], [97.7, 3317.0], [97.8, 3325.0], [97.9, 3326.0], [98.0, 3327.0], [98.1, 3328.0], [98.2, 3328.0], [98.3, 3330.0], [98.4, 3334.0], [98.5, 3335.0], [98.6, 3335.0], [98.7, 3339.0], [98.8, 3340.0], [98.9, 3340.0], [99.0, 3341.0], [99.1, 3343.0], [99.2, 3349.0], [99.3, 3350.0], [99.4, 3353.0], [99.5, 3354.0], [99.6, 3364.0], [99.7, 3370.0], [99.8, 3400.0], [99.9, 3412.0], [100.0, 3725.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 300.0, "maxY": 214.0, "series": [{"data": [[600.0, 38.0], [700.0, 40.0], [800.0, 65.0], [900.0, 214.0], [1000.0, 64.0], [1100.0, 41.0], [1200.0, 41.0], [1300.0, 52.0], [1400.0, 59.0], [1500.0, 71.0], [1600.0, 77.0], [1700.0, 65.0], [1800.0, 66.0], [1900.0, 97.0], [2000.0, 59.0], [2100.0, 87.0], [2200.0, 66.0], [2300.0, 85.0], [2400.0, 86.0], [2500.0, 109.0], [2600.0, 110.0], [2700.0, 130.0], [2800.0, 119.0], [2900.0, 138.0], [3000.0, 147.0], [3100.0, 176.0], [3200.0, 116.0], [3300.0, 76.0], [3400.0, 4.0], [3700.0, 2.0], [300.0, 73.0], [400.0, 82.0], [500.0, 47.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 56.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2491.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 56.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2491.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 20.66795366795368, "minX": 1.78195068E12, "maxY": 83.83933518005541, "series": [{"data": [[1.78195074E12, 76.7158529895777], [1.7819508E12, 83.83933518005541], [1.78195068E12, 20.66795366795368]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 96 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 498.3684210526317, "minX": 1.0, "maxY": 2941.848898216161, "series": [{"data": [[2.0, 1045.25], [3.0, 1010.5], [4.0, 856.2], [5.0, 653.3333333333334], [6.0, 593.8181818181818], [7.0, 582.2727272727273], [8.0, 538.2857142857142], [9.0, 542.6153846153845], [10.0, 498.3684210526317], [11.0, 510.77777777777777], [12.0, 542.6111111111111], [13.0, 557.7368421052631], [14.0, 583.2631578947368], [15.0, 623.0555555555555], [16.0, 648.2631578947369], [17.0, 685.9473684210526], [18.0, 737.6874999999999], [19.0, 760.9999999999999], [20.0, 808.125], [21.0, 826.8947368421054], [22.0, 877.5555555555554], [23.0, 909.4444444444445], [24.0, 945.4375], [25.0, 952.7222222222223], [26.0, 962.4736842105262], [27.0, 986.0000000000001], [28.0, 1004.0000000000001], [29.0, 985.9], [30.0, 987.2857142857142], [31.0, 1028.0526315789473], [32.0, 997.0454545454545], [33.0, 950.6842105263158], [34.0, 961.9999999999999], [35.0, 973.9000000000001], [36.0, 979.8333333333334], [37.0, 997.15], [38.0, 1088.0], [39.0, 1161.5], [40.0, 1208.409090909091], [41.0, 1116.1666666666667], [42.0, 1157.2222222222222], [43.0, 1533.2307692307693], [44.0, 1301.8333333333333], [45.0, 1315.1], [46.0, 1395.1999999999996], [47.0, 1417.478260869565], [48.0, 1451.7058823529412], [49.0, 1455.388888888889], [50.0, 1522.5263157894738], [51.0, 1574.7500000000002], [52.0, 1601.5238095238094], [53.0, 2365.6842105263154], [54.0, 1689.695652173913], [55.0, 1594.3750000000002], [56.0, 1599.0434782608697], [57.0, 1626.8999999999999], [58.0, 1766.5555555555557], [59.0, 2181.095238095238], [60.0, 1703.416666666667], [61.0, 1838.3437500000005], [62.0, 1906.8125], [63.0, 1912.8823529411766], [64.0, 1793.9411764705883], [65.0, 1821.5625000000002], [66.0, 1890.0624999999998], [67.0, 1895.9999999999998], [68.0, 1911.1764705882354], [69.0, 2076.3500000000004], [70.0, 2023.2777777777778], [71.0, 2155.714285714286], [72.0, 2189.105263157895], [73.0, 2182.909090909091], [75.0, 2117.7999999999993], [74.0, 2470.5454545454545], [76.0, 2186.782608695652], [77.0, 2155.5454545454545], [78.0, 2195.0416666666665], [79.0, 2257.260869565217], [80.0, 2892.571428571429], [81.0, 2434.5862068965525], [82.0, 2355.2380952380954], [83.0, 2396.7916666666674], [84.0, 2543.0999999999995], [85.0, 2289.8333333333335], [86.0, 2432.7586206896553], [87.0, 2867.6666666666665], [88.0, 2506.6206896551726], [89.0, 2736.6206896551726], [90.0, 2731.3333333333335], [91.0, 2772.2000000000003], [92.0, 2599.75], [93.0, 2805.6153846153848], [94.0, 2824.333333333333], [96.0, 2941.848898216161], [1.0, 2542.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[66.92264988897122, 2063.908956328645]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 950.6333333333333, "minX": 1.78195068E12, "maxY": 7018.55, "series": [{"data": [[1.78195074E12, 7018.55], [1.7819508E12, 1389.85], [1.78195068E12, 1994.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195074E12, 4800.566666666667], [1.7819508E12, 950.6333333333333], [1.78195068E12, 1364.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 699.2220077220079, "minX": 1.78195068E12, "maxY": 2906.354570637119, "series": [{"data": [[1.78195074E12, 2284.8551837630266], [1.7819508E12, 2906.354570637119], [1.78195068E12, 699.2220077220079]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 699.183397683398, "minX": 1.78195068E12, "maxY": 2906.354570637119, "series": [{"data": [[1.78195074E12, 2284.8469555677448], [1.7819508E12, 2906.354570637119], [1.78195068E12, 699.183397683398]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013850415512465398, "minX": 1.78195068E12, "maxY": 0.061776061776061854, "series": [{"data": [[1.78195074E12, 0.025781678551837654], [1.7819508E12, 0.013850415512465398], [1.78195068E12, 0.061776061776061854]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 374.0, "minX": 1.78195068E12, "maxY": 620.0, "series": [{"data": [[1.78195068E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195068E12, 374.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195068E12, 569.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195068E12, 618.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195068E12, 426.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195068E12, 596.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 382.5, "minX": 3.0, "maxY": 3087.0, "series": [{"data": [[32.0, 451.0], [18.0, 388.0], [10.0, 430.5], [20.0, 382.5], [3.0, 545.0], [12.0, 408.0], [26.0, 411.0], [27.0, 437.5], [29.0, 569.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1219.0], [33.0, 1366.0], [35.0, 2368.0], [34.0, 2684.5], [36.0, 1958.0], [37.0, 3021.0], [38.0, 2320.5], [39.0, 2984.0], [41.0, 2592.0], [40.0, 2953.5], [43.0, 2936.0], [42.0, 2877.0], [44.0, 2599.5], [47.0, 1865.0], [14.0, 1767.0], [17.0, 1863.0], [18.0, 2919.0], [19.0, 2544.0], [20.0, 1985.0], [21.0, 2999.0], [22.0, 3073.5], [23.0, 3087.0], [24.0, 2556.0], [25.0, 2298.0], [26.0, 2744.0], [27.0, 831.0], [28.0, 2122.0], [29.0, 1356.0], [30.0, 925.5], [31.0, 1000.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 382.5, "minX": 3.0, "maxY": 3087.0, "series": [{"data": [[32.0, 451.0], [18.0, 388.0], [10.0, 430.5], [20.0, 382.5], [3.0, 545.0], [12.0, 408.0], [26.0, 411.0], [27.0, 437.5], [29.0, 569.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1219.0], [33.0, 1366.0], [35.0, 2368.0], [34.0, 2684.5], [36.0, 1958.0], [37.0, 3021.0], [38.0, 2320.5], [39.0, 2984.0], [41.0, 2592.0], [40.0, 2953.5], [43.0, 2936.0], [42.0, 2877.0], [44.0, 2599.5], [47.0, 1865.0], [14.0, 1767.0], [17.0, 1863.0], [18.0, 2919.0], [19.0, 2544.0], [20.0, 1985.0], [21.0, 2999.0], [22.0, 3073.5], [23.0, 3087.0], [24.0, 2556.0], [25.0, 2298.0], [26.0, 2744.0], [27.0, 831.0], [28.0, 2122.0], [29.0, 1356.0], [30.0, 925.5], [31.0, 1000.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.45, "minX": 1.78195068E12, "maxY": 31.416666666666668, "series": [{"data": [[1.78195074E12, 31.416666666666668], [1.7819508E12, 4.45], [1.78195068E12, 9.166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819508E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.78195068E12, "maxY": 30.383333333333333, "series": [{"data": [[1.78195074E12, 30.383333333333333], [1.7819508E12, 6.016666666666667], [1.78195068E12, 8.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.5166666666666666, "minX": 1.78195068E12, "maxY": 30.383333333333333, "series": [{"data": [[1.78195068E12, 3.5166666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195074E12, 30.383333333333333], [1.7819508E12, 6.016666666666667], [1.78195068E12, 5.116666666666666]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5166666666666666, "minX": 1.78195068E12, "maxY": 30.383333333333333, "series": [{"data": [[1.78195068E12, 3.5166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195074E12, 30.383333333333333], [1.7819508E12, 6.016666666666667], [1.78195068E12, 5.116666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819508E12, "title": "Total Transactions Per Second"}},
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

