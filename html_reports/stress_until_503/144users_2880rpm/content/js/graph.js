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
        data: {"result": {"minY": 356.0, "minX": 0.0, "maxY": 7481.0, "series": [{"data": [[0.0, 356.0], [0.1, 360.0], [0.2, 362.0], [0.3, 363.0], [0.4, 364.0], [0.5, 366.0], [0.6, 368.0], [0.7, 369.0], [0.8, 372.0], [0.9, 374.0], [1.0, 375.0], [1.1, 376.0], [1.2, 377.0], [1.3, 379.0], [1.4, 382.0], [1.5, 384.0], [1.6, 385.0], [1.7, 386.0], [1.8, 387.0], [1.9, 390.0], [2.0, 392.0], [2.1, 396.0], [2.2, 397.0], [2.3, 397.0], [2.4, 399.0], [2.5, 401.0], [2.6, 402.0], [2.7, 404.0], [2.8, 404.0], [2.9, 406.0], [3.0, 409.0], [3.1, 411.0], [3.2, 412.0], [3.3, 415.0], [3.4, 415.0], [3.5, 417.0], [3.6, 420.0], [3.7, 422.0], [3.8, 425.0], [3.9, 430.0], [4.0, 433.0], [4.1, 436.0], [4.2, 438.0], [4.3, 441.0], [4.4, 445.0], [4.5, 452.0], [4.6, 456.0], [4.7, 463.0], [4.8, 464.0], [4.9, 466.0], [5.0, 469.0], [5.1, 474.0], [5.2, 483.0], [5.3, 486.0], [5.4, 491.0], [5.5, 493.0], [5.6, 498.0], [5.7, 501.0], [5.8, 511.0], [5.9, 515.0], [6.0, 520.0], [6.1, 525.0], [6.2, 531.0], [6.3, 538.0], [6.4, 546.0], [6.5, 553.0], [6.6, 557.0], [6.7, 564.0], [6.8, 572.0], [6.9, 578.0], [7.0, 588.0], [7.1, 594.0], [7.2, 603.0], [7.3, 609.0], [7.4, 617.0], [7.5, 626.0], [7.6, 634.0], [7.7, 640.0], [7.8, 651.0], [7.9, 658.0], [8.0, 668.0], [8.1, 678.0], [8.2, 684.0], [8.3, 695.0], [8.4, 705.0], [8.5, 711.0], [8.6, 726.0], [8.7, 732.0], [8.8, 743.0], [8.9, 755.0], [9.0, 762.0], [9.1, 777.0], [9.2, 786.0], [9.3, 797.0], [9.4, 810.0], [9.5, 826.0], [9.6, 831.0], [9.7, 839.0], [9.8, 853.0], [9.9, 866.0], [10.0, 880.0], [10.1, 888.0], [10.2, 894.0], [10.3, 907.0], [10.4, 922.0], [10.5, 936.0], [10.6, 942.0], [10.7, 951.0], [10.8, 962.0], [10.9, 977.0], [11.0, 990.0], [11.1, 993.0], [11.2, 1004.0], [11.3, 1015.0], [11.4, 1022.0], [11.5, 1031.0], [11.6, 1042.0], [11.7, 1050.0], [11.8, 1061.0], [11.9, 1062.0], [12.0, 1072.0], [12.1, 1090.0], [12.2, 1090.0], [12.3, 1097.0], [12.4, 1103.0], [12.5, 1110.0], [12.6, 1117.0], [12.7, 1118.0], [12.8, 1124.0], [12.9, 1131.0], [13.0, 1141.0], [13.1, 1152.0], [13.2, 1167.0], [13.3, 1173.0], [13.4, 1177.0], [13.5, 1185.0], [13.6, 1199.0], [13.7, 1206.0], [13.8, 1208.0], [13.9, 1219.0], [14.0, 1226.0], [14.1, 1231.0], [14.2, 1245.0], [14.3, 1253.0], [14.4, 1257.0], [14.5, 1260.0], [14.6, 1266.0], [14.7, 1267.0], [14.8, 1268.0], [14.9, 1270.0], [15.0, 1277.0], [15.1, 1281.0], [15.2, 1281.0], [15.3, 1284.0], [15.4, 1293.0], [15.5, 1296.0], [15.6, 1296.0], [15.7, 1301.0], [15.8, 1311.0], [15.9, 1311.0], [16.0, 1312.0], [16.1, 1326.0], [16.2, 1329.0], [16.3, 1340.0], [16.4, 1343.0], [16.5, 1348.0], [16.6, 1350.0], [16.7, 1361.0], [16.8, 1362.0], [16.9, 1365.0], [17.0, 1368.0], [17.1, 1368.0], [17.2, 1370.0], [17.3, 1380.0], [17.4, 1381.0], [17.5, 1382.0], [17.6, 1391.0], [17.7, 1396.0], [17.8, 1399.0], [17.9, 1399.0], [18.0, 1402.0], [18.1, 1404.0], [18.2, 1405.0], [18.3, 1406.0], [18.4, 1417.0], [18.5, 1425.0], [18.6, 1427.0], [18.7, 1430.0], [18.8, 1435.0], [18.9, 1435.0], [19.0, 1436.0], [19.1, 1437.0], [19.2, 1447.0], [19.3, 1461.0], [19.4, 1472.0], [19.5, 1476.0], [19.6, 1479.0], [19.7, 1484.0], [19.8, 1485.0], [19.9, 1491.0], [20.0, 1517.0], [20.1, 1531.0], [20.2, 1555.0], [20.3, 1556.0], [20.4, 1561.0], [20.5, 1561.0], [20.6, 1562.0], [20.7, 1562.0], [20.8, 1564.0], [20.9, 1572.0], [21.0, 1574.0], [21.1, 1574.0], [21.2, 1582.0], [21.3, 1583.0], [21.4, 1584.0], [21.5, 1589.0], [21.6, 1603.0], [21.7, 1603.0], [21.8, 1605.0], [21.9, 1605.0], [22.0, 1644.0], [22.1, 1645.0], [22.2, 1647.0], [22.3, 1647.0], [22.4, 1647.0], [22.5, 1649.0], [22.6, 1649.0], [22.7, 1675.0], [22.8, 1675.0], [22.9, 1679.0], [23.0, 1679.0], [23.1, 1683.0], [23.2, 1685.0], [23.3, 1686.0], [23.4, 1707.0], [23.5, 1707.0], [23.6, 1707.0], [23.7, 1709.0], [23.8, 1709.0], [23.9, 1727.0], [24.0, 1728.0], [24.1, 1734.0], [24.2, 1734.0], [24.3, 1739.0], [24.4, 1740.0], [24.5, 1771.0], [24.6, 1780.0], [24.7, 1780.0], [24.8, 1845.0], [24.9, 1846.0], [25.0, 1847.0], [25.1, 1859.0], [25.2, 1859.0], [25.3, 1860.0], [25.4, 1861.0], [25.5, 1870.0], [25.6, 1918.0], [25.7, 1919.0], [25.8, 1958.0], [25.9, 1959.0], [26.0, 1959.0], [26.1, 1960.0], [26.2, 1985.0], [26.3, 1989.0], [26.4, 1989.0], [26.5, 1990.0], [26.6, 2020.0], [26.7, 2021.0], [26.8, 2022.0], [26.9, 2022.0], [27.0, 2022.0], [27.1, 2030.0], [27.2, 2034.0], [27.3, 2037.0], [27.4, 2038.0], [27.5, 2038.0], [27.6, 2038.0], [27.7, 2046.0], [27.8, 2048.0], [27.9, 2091.0], [28.0, 2091.0], [28.1, 2091.0], [28.2, 2091.0], [28.3, 2095.0], [28.4, 2114.0], [28.5, 2123.0], [28.6, 2132.0], [28.7, 2132.0], [28.8, 2133.0], [28.9, 2133.0], [29.0, 2142.0], [29.1, 2143.0], [29.2, 2143.0], [29.3, 2143.0], [29.4, 2144.0], [29.5, 2144.0], [29.6, 2164.0], [29.7, 2187.0], [29.8, 2198.0], [29.9, 2198.0], [30.0, 2198.0], [30.1, 2198.0], [30.2, 2199.0], [30.3, 2199.0], [30.4, 2217.0], [30.5, 2217.0], [30.6, 2218.0], [30.7, 2218.0], [30.8, 2220.0], [30.9, 2220.0], [31.0, 2240.0], [31.1, 2240.0], [31.2, 2241.0], [31.3, 2274.0], [31.4, 2277.0], [31.5, 2280.0], [31.6, 2282.0], [31.7, 2282.0], [31.8, 2282.0], [31.9, 2283.0], [32.0, 2284.0], [32.1, 2284.0], [32.2, 2294.0], [32.3, 2296.0], [32.4, 2296.0], [32.5, 2297.0], [32.6, 2348.0], [32.7, 2374.0], [32.8, 2374.0], [32.9, 2375.0], [33.0, 2375.0], [33.1, 2375.0], [33.2, 2390.0], [33.3, 2437.0], [33.4, 2437.0], [33.5, 2437.0], [33.6, 2522.0], [33.7, 2523.0], [33.8, 2524.0], [33.9, 2524.0], [34.0, 2527.0], [34.1, 2528.0], [34.2, 2528.0], [34.3, 2529.0], [34.4, 2539.0], [34.5, 2542.0], [34.6, 2542.0], [34.7, 2542.0], [34.8, 2543.0], [34.9, 2543.0], [35.0, 2543.0], [35.1, 2543.0], [35.2, 2545.0], [35.3, 2568.0], [35.4, 2639.0], [35.5, 2641.0], [35.6, 2641.0], [35.7, 2662.0], [35.8, 2663.0], [35.9, 2663.0], [36.0, 2664.0], [36.1, 2664.0], [36.2, 2665.0], [36.3, 2665.0], [36.4, 2694.0], [36.5, 2710.0], [36.6, 2710.0], [36.7, 2710.0], [36.8, 2710.0], [36.9, 2725.0], [37.0, 2726.0], [37.1, 2727.0], [37.2, 2728.0], [37.3, 2728.0], [37.4, 2728.0], [37.5, 2729.0], [37.6, 2729.0], [37.7, 2729.0], [37.8, 2730.0], [37.9, 2730.0], [38.0, 2731.0], [38.1, 2732.0], [38.2, 2757.0], [38.3, 2758.0], [38.4, 2758.0], [38.5, 2770.0], [38.6, 2771.0], [38.7, 2772.0], [38.8, 2772.0], [38.9, 2772.0], [39.0, 2772.0], [39.1, 2773.0], [39.2, 2773.0], [39.3, 2774.0], [39.4, 2774.0], [39.5, 2774.0], [39.6, 2774.0], [39.7, 2775.0], [39.8, 2781.0], [39.9, 2781.0], [40.0, 2781.0], [40.1, 2796.0], [40.2, 2797.0], [40.3, 2797.0], [40.4, 2797.0], [40.5, 2798.0], [40.6, 2798.0], [40.7, 2798.0], [40.8, 2798.0], [40.9, 2799.0], [41.0, 2804.0], [41.1, 2832.0], [41.2, 2835.0], [41.3, 2836.0], [41.4, 2855.0], [41.5, 2855.0], [41.6, 2855.0], [41.7, 2865.0], [41.8, 2940.0], [41.9, 2965.0], [42.0, 2966.0], [42.1, 2978.0], [42.2, 2978.0], [42.3, 2978.0], [42.4, 2979.0], [42.5, 2979.0], [42.6, 2980.0], [42.7, 3082.0], [42.8, 3082.0], [42.9, 3083.0], [43.0, 3083.0], [43.1, 3084.0], [43.2, 3092.0], [43.3, 3092.0], [43.4, 3093.0], [43.5, 3093.0], [43.6, 3093.0], [43.7, 3093.0], [43.8, 3094.0], [43.9, 3098.0], [44.0, 3099.0], [44.1, 3100.0], [44.2, 3100.0], [44.3, 3101.0], [44.4, 3101.0], [44.5, 3101.0], [44.6, 3101.0], [44.7, 3101.0], [44.8, 3119.0], [44.9, 3119.0], [45.0, 3119.0], [45.1, 3120.0], [45.2, 3120.0], [45.3, 3120.0], [45.4, 3120.0], [45.5, 3144.0], [45.6, 3155.0], [45.7, 3155.0], [45.8, 3157.0], [45.9, 3158.0], [46.0, 3158.0], [46.1, 3158.0], [46.2, 3158.0], [46.3, 3159.0], [46.4, 3159.0], [46.5, 3191.0], [46.6, 3220.0], [46.7, 3256.0], [46.8, 3257.0], [46.9, 3258.0], [47.0, 3259.0], [47.1, 3259.0], [47.2, 3259.0], [47.3, 3259.0], [47.4, 3260.0], [47.5, 3260.0], [47.6, 3277.0], [47.7, 3290.0], [47.8, 3291.0], [47.9, 3319.0], [48.0, 3328.0], [48.1, 3328.0], [48.2, 3328.0], [48.3, 3329.0], [48.4, 3329.0], [48.5, 3329.0], [48.6, 3329.0], [48.7, 3329.0], [48.8, 3330.0], [48.9, 3342.0], [49.0, 3367.0], [49.1, 3368.0], [49.2, 3369.0], [49.3, 3369.0], [49.4, 3369.0], [49.5, 3370.0], [49.6, 3370.0], [49.7, 3371.0], [49.8, 3371.0], [49.9, 3378.0], [50.0, 3378.0], [50.1, 3382.0], [50.2, 3384.0], [50.3, 3384.0], [50.4, 3385.0], [50.5, 3385.0], [50.6, 3385.0], [50.7, 3385.0], [50.8, 3385.0], [50.9, 3385.0], [51.0, 3386.0], [51.1, 3390.0], [51.2, 3408.0], [51.3, 3409.0], [51.4, 3409.0], [51.5, 3410.0], [51.6, 3410.0], [51.7, 3446.0], [51.8, 3455.0], [51.9, 3455.0], [52.0, 3455.0], [52.1, 3456.0], [52.2, 3456.0], [52.3, 3456.0], [52.4, 3456.0], [52.5, 3456.0], [52.6, 3457.0], [52.7, 3457.0], [52.8, 3457.0], [52.9, 3457.0], [53.0, 3458.0], [53.1, 3458.0], [53.2, 3458.0], [53.3, 3459.0], [53.4, 3459.0], [53.5, 3459.0], [53.6, 3460.0], [53.7, 3461.0], [53.8, 3462.0], [53.9, 3462.0], [54.0, 3462.0], [54.1, 3462.0], [54.2, 3462.0], [54.3, 3462.0], [54.4, 3463.0], [54.5, 3463.0], [54.6, 3463.0], [54.7, 3465.0], [54.8, 3467.0], [54.9, 3469.0], [55.0, 3469.0], [55.1, 3469.0], [55.2, 3471.0], [55.3, 3486.0], [55.4, 3486.0], [55.5, 3496.0], [55.6, 3499.0], [55.7, 3503.0], [55.8, 3503.0], [55.9, 3503.0], [56.0, 3504.0], [56.1, 3504.0], [56.2, 3506.0], [56.3, 3506.0], [56.4, 3506.0], [56.5, 3506.0], [56.6, 3507.0], [56.7, 3507.0], [56.8, 3507.0], [56.9, 3507.0], [57.0, 3507.0], [57.1, 3508.0], [57.2, 3509.0], [57.3, 3513.0], [57.4, 3517.0], [57.5, 3518.0], [57.6, 3519.0], [57.7, 3519.0], [57.8, 3520.0], [57.9, 3524.0], [58.0, 3524.0], [58.1, 3525.0], [58.2, 3525.0], [58.3, 3525.0], [58.4, 3525.0], [58.5, 3525.0], [58.6, 3525.0], [58.7, 3525.0], [58.8, 3526.0], [58.9, 3527.0], [59.0, 3527.0], [59.1, 3539.0], [59.2, 3539.0], [59.3, 3540.0], [59.4, 3555.0], [59.5, 3558.0], [59.6, 3558.0], [59.7, 3559.0], [59.8, 3559.0], [59.9, 3560.0], [60.0, 3560.0], [60.1, 3560.0], [60.2, 3561.0], [60.3, 3562.0], [60.4, 3562.0], [60.5, 3567.0], [60.6, 3568.0], [60.7, 3569.0], [60.8, 3569.0], [60.9, 3570.0], [61.0, 3571.0], [61.1, 3577.0], [61.2, 3578.0], [61.3, 3578.0], [61.4, 3579.0], [61.5, 3579.0], [61.6, 3580.0], [61.7, 3580.0], [61.8, 3581.0], [61.9, 3584.0], [62.0, 3585.0], [62.1, 3587.0], [62.2, 3587.0], [62.3, 3589.0], [62.4, 3604.0], [62.5, 3605.0], [62.6, 3605.0], [62.7, 3606.0], [62.8, 3606.0], [62.9, 3607.0], [63.0, 3607.0], [63.1, 3608.0], [63.2, 3610.0], [63.3, 3618.0], [63.4, 3619.0], [63.5, 3620.0], [63.6, 3620.0], [63.7, 3622.0], [63.8, 3633.0], [63.9, 3634.0], [64.0, 3635.0], [64.1, 3635.0], [64.2, 3643.0], [64.3, 3646.0], [64.4, 3662.0], [64.5, 3662.0], [64.6, 3662.0], [64.7, 3665.0], [64.8, 3665.0], [64.9, 3666.0], [65.0, 3666.0], [65.1, 3667.0], [65.2, 3667.0], [65.3, 3678.0], [65.4, 3698.0], [65.5, 3736.0], [65.6, 3740.0], [65.7, 3741.0], [65.8, 3742.0], [65.9, 3762.0], [66.0, 3762.0], [66.1, 3762.0], [66.2, 3763.0], [66.3, 3763.0], [66.4, 3763.0], [66.5, 3763.0], [66.6, 3764.0], [66.7, 3765.0], [66.8, 3788.0], [66.9, 3789.0], [67.0, 3790.0], [67.1, 3804.0], [67.2, 3812.0], [67.3, 3859.0], [67.4, 3885.0], [67.5, 3885.0], [67.6, 3887.0], [67.7, 3907.0], [67.8, 3918.0], [67.9, 3918.0], [68.0, 3918.0], [68.1, 3919.0], [68.2, 3919.0], [68.3, 3919.0], [68.4, 3919.0], [68.5, 3919.0], [68.6, 3921.0], [68.7, 3929.0], [68.8, 3934.0], [68.9, 3957.0], [69.0, 3957.0], [69.1, 3958.0], [69.2, 3987.0], [69.3, 3988.0], [69.4, 3988.0], [69.5, 3988.0], [69.6, 3988.0], [69.7, 3989.0], [69.8, 3999.0], [69.9, 4000.0], [70.0, 4000.0], [70.1, 4001.0], [70.2, 4002.0], [70.3, 4006.0], [70.4, 4006.0], [70.5, 4006.0], [70.6, 4006.0], [70.7, 4007.0], [70.8, 4007.0], [70.9, 4008.0], [71.0, 4008.0], [71.1, 4009.0], [71.2, 4009.0], [71.3, 4013.0], [71.4, 4029.0], [71.5, 4032.0], [71.6, 4048.0], [71.7, 4048.0], [71.8, 4049.0], [71.9, 4049.0], [72.0, 4049.0], [72.1, 4050.0], [72.2, 4050.0], [72.3, 4050.0], [72.4, 4050.0], [72.5, 4051.0], [72.6, 4051.0], [72.7, 4052.0], [72.8, 4060.0], [72.9, 4141.0], [73.0, 4177.0], [73.1, 4188.0], [73.2, 4193.0], [73.3, 4197.0], [73.4, 4197.0], [73.5, 4197.0], [73.6, 4197.0], [73.7, 4198.0], [73.8, 4198.0], [73.9, 4198.0], [74.0, 4198.0], [74.1, 4207.0], [74.2, 4229.0], [74.3, 4250.0], [74.4, 4251.0], [74.5, 4251.0], [74.6, 4251.0], [74.7, 4252.0], [74.8, 4252.0], [74.9, 4253.0], [75.0, 4299.0], [75.1, 4303.0], [75.2, 4303.0], [75.3, 4305.0], [75.4, 4390.0], [75.5, 4390.0], [75.6, 4390.0], [75.7, 4390.0], [75.8, 4391.0], [75.9, 4391.0], [76.0, 4391.0], [76.1, 4392.0], [76.2, 4392.0], [76.3, 4392.0], [76.4, 4452.0], [76.5, 4508.0], [76.6, 4508.0], [76.7, 4509.0], [76.8, 4509.0], [76.9, 4510.0], [77.0, 4510.0], [77.1, 4511.0], [77.2, 4511.0], [77.3, 4512.0], [77.4, 4513.0], [77.5, 4514.0], [77.6, 4514.0], [77.7, 4516.0], [77.8, 4547.0], [77.9, 4558.0], [78.0, 4564.0], [78.1, 4564.0], [78.2, 4564.0], [78.3, 4564.0], [78.4, 4564.0], [78.5, 4578.0], [78.6, 4580.0], [78.7, 4581.0], [78.8, 4581.0], [78.9, 4581.0], [79.0, 4582.0], [79.1, 4606.0], [79.2, 4727.0], [79.3, 4729.0], [79.4, 4729.0], [79.5, 4730.0], [79.6, 4731.0], [79.7, 4731.0], [79.8, 4732.0], [79.9, 4732.0], [80.0, 4734.0], [80.1, 4734.0], [80.2, 4782.0], [80.3, 4782.0], [80.4, 4783.0], [80.5, 4783.0], [80.6, 4783.0], [80.7, 4783.0], [80.8, 4783.0], [80.9, 4783.0], [81.0, 4783.0], [81.1, 4784.0], [81.2, 4792.0], [81.3, 4794.0], [81.4, 4795.0], [81.5, 4795.0], [81.6, 4795.0], [81.7, 4796.0], [81.8, 4796.0], [81.9, 4796.0], [82.0, 4797.0], [82.1, 4797.0], [82.2, 4806.0], [82.3, 4806.0], [82.4, 4806.0], [82.5, 4806.0], [82.6, 4807.0], [82.7, 4807.0], [82.8, 4807.0], [82.9, 4807.0], [83.0, 4814.0], [83.1, 4848.0], [83.2, 4848.0], [83.3, 4848.0], [83.4, 4848.0], [83.5, 4849.0], [83.6, 4849.0], [83.7, 4849.0], [83.8, 4849.0], [83.9, 4850.0], [84.0, 4864.0], [84.1, 5069.0], [84.2, 5071.0], [84.3, 5074.0], [84.4, 5086.0], [84.5, 5086.0], [84.6, 5086.0], [84.7, 5086.0], [84.8, 5086.0], [84.9, 5087.0], [85.0, 5087.0], [85.1, 5087.0], [85.2, 5087.0], [85.3, 5113.0], [85.4, 5160.0], [85.5, 5161.0], [85.6, 5162.0], [85.7, 5163.0], [85.8, 5163.0], [85.9, 5164.0], [86.0, 5238.0], [86.1, 5239.0], [86.2, 5239.0], [86.3, 5239.0], [86.4, 5263.0], [86.5, 5264.0], [86.6, 5265.0], [86.7, 5290.0], [86.8, 5290.0], [86.9, 5291.0], [87.0, 5291.0], [87.1, 5292.0], [87.2, 5292.0], [87.3, 5292.0], [87.4, 5292.0], [87.5, 5315.0], [87.6, 5315.0], [87.7, 5316.0], [87.8, 5316.0], [87.9, 5316.0], [88.0, 5316.0], [88.1, 5317.0], [88.2, 5317.0], [88.3, 5318.0], [88.4, 5318.0], [88.5, 5378.0], [88.6, 5381.0], [88.7, 5384.0], [88.8, 5385.0], [88.9, 5385.0], [89.0, 5386.0], [89.1, 5386.0], [89.2, 5387.0], [89.3, 5387.0], [89.4, 5388.0], [89.5, 5388.0], [89.6, 5434.0], [89.7, 5438.0], [89.8, 5458.0], [89.9, 5458.0], [90.0, 5458.0], [90.1, 5459.0], [90.2, 5460.0], [90.3, 5467.0], [90.4, 5467.0], [90.5, 5467.0], [90.6, 5467.0], [90.7, 5468.0], [90.8, 5468.0], [90.9, 5470.0], [91.0, 5471.0], [91.1, 5471.0], [91.2, 5487.0], [91.3, 5489.0], [91.4, 5489.0], [91.5, 5492.0], [91.6, 5535.0], [91.7, 5536.0], [91.8, 5537.0], [91.9, 5537.0], [92.0, 5537.0], [92.1, 5538.0], [92.2, 5538.0], [92.3, 5539.0], [92.4, 5539.0], [92.5, 5539.0], [92.6, 5540.0], [92.7, 5599.0], [92.8, 5601.0], [92.9, 5601.0], [93.0, 5622.0], [93.1, 5633.0], [93.2, 5633.0], [93.3, 5634.0], [93.4, 5634.0], [93.5, 5634.0], [93.6, 5634.0], [93.7, 5634.0], [93.8, 5634.0], [93.9, 5635.0], [94.0, 5635.0], [94.1, 5636.0], [94.2, 5681.0], [94.3, 5696.0], [94.4, 5706.0], [94.5, 5707.0], [94.6, 5707.0], [94.7, 5707.0], [94.8, 5709.0], [94.9, 5711.0], [95.0, 5712.0], [95.1, 5719.0], [95.2, 5719.0], [95.3, 5720.0], [95.4, 5721.0], [95.5, 5722.0], [95.6, 5722.0], [95.7, 5723.0], [95.8, 5729.0], [95.9, 5729.0], [96.0, 5730.0], [96.1, 5730.0], [96.2, 5730.0], [96.3, 5731.0], [96.4, 5731.0], [96.5, 5731.0], [96.6, 5732.0], [96.7, 5733.0], [96.8, 5844.0], [96.9, 5857.0], [97.0, 5857.0], [97.1, 5858.0], [97.2, 5858.0], [97.3, 5858.0], [97.4, 5858.0], [97.5, 5858.0], [97.6, 5859.0], [97.7, 5907.0], [97.8, 5907.0], [97.9, 5908.0], [98.0, 5908.0], [98.1, 5908.0], [98.2, 5908.0], [98.3, 5909.0], [98.4, 5910.0], [98.5, 5910.0], [98.6, 6135.0], [98.7, 6859.0], [98.8, 6930.0], [98.9, 6966.0], [99.0, 6967.0], [99.1, 6969.0], [99.2, 6970.0], [99.3, 6971.0], [99.4, 6977.0], [99.5, 6978.0], [99.6, 7141.0], [99.7, 7292.0], [99.8, 7347.0], [99.9, 7480.0], [100.0, 7481.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 190.0, "series": [{"data": [[600.0, 33.0], [700.0, 27.0], [800.0, 26.0], [900.0, 26.0], [1000.0, 32.0], [1100.0, 37.0], [1200.0, 57.0], [1300.0, 65.0], [1400.0, 55.0], [1500.0, 46.0], [1600.0, 49.0], [1700.0, 41.0], [1800.0, 21.0], [1900.0, 28.0], [2000.0, 52.0], [2100.0, 56.0], [2200.0, 62.0], [2300.0, 19.0], [2400.0, 9.0], [2500.0, 51.0], [2600.0, 30.0], [2700.0, 127.0], [2800.0, 23.0], [2900.0, 24.0], [3000.0, 40.0], [3100.0, 70.0], [3200.0, 37.0], [3300.0, 94.0], [3400.0, 124.0], [3500.0, 190.0], [3600.0, 86.0], [3700.0, 47.0], [3800.0, 16.0], [3900.0, 61.0], [4000.0, 85.0], [4200.0, 27.0], [4100.0, 34.0], [4300.0, 38.0], [4600.0, 3.0], [4500.0, 75.0], [4400.0, 1.0], [4700.0, 82.0], [4800.0, 54.0], [4900.0, 1.0], [5000.0, 34.0], [5100.0, 19.0], [5300.0, 58.0], [5200.0, 42.0], [5600.0, 44.0], [5400.0, 58.0], [5500.0, 34.0], [5700.0, 69.0], [5800.0, 24.0], [6100.0, 1.0], [5900.0, 26.0], [6900.0, 22.0], [6800.0, 4.0], [7100.0, 3.0], [7000.0, 1.0], [7400.0, 5.0], [7300.0, 1.0], [7200.0, 3.0], [300.0, 68.0], [400.0, 92.0], [500.0, 42.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2601.0, "series": [{"data": [[0.0, 160.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2601.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 43.42781316348194, "minX": 1.78195098E12, "maxY": 125.5687533440341, "series": [{"data": [[1.78195104E12, 125.5687533440341], [1.78195098E12, 43.42781316348194]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 144 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195104E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 622.4285714285714, "minX": 1.0, "maxY": 5908.4, "series": [{"data": [[2.0, 2360.5], [3.0, 1705.0], [4.0, 1197.6], [5.0, 1146.8], [6.0, 1023.5], [7.0, 760.3], [8.0, 731.1], [9.0, 700.6363636363636], [10.0, 708.1818181818182], [11.0, 716.3636363636363], [12.0, 622.4285714285714], [13.0, 625.8571428571428], [14.0, 638.8571428571429], [15.0, 637.1333333333333], [16.0, 655.8666666666666], [17.0, 675.6], [18.0, 684.8125], [19.0, 711.6875], [20.0, 742.0625000000001], [21.0, 832.0833333333334], [22.0, 798.0], [23.0, 847.5333333333333], [24.0, 912.1538461538462], [25.0, 750.2857142857142], [26.0, 798.9090909090909], [27.0, 845.2307692307693], [28.0, 1789.2666666666667], [29.0, 1193.8461538461538], [30.0, 985.25], [31.0, 1291.6666666666665], [32.0, 1059.769230769231], [33.0, 1095.2], [34.0, 1356.2142857142858], [35.0, 1161.111111111111], [36.0, 1220.3333333333333], [37.0, 1259.4545454545455], [38.0, 1284.6923076923076], [39.0, 1339.2857142857144], [40.0, 1295.909090909091], [41.0, 1304.8], [42.0, 1505.0555555555557], [43.0, 1361.5], [44.0, 1419.5384615384617], [45.0, 1398.2857142857144], [46.0, 1346.75], [47.0, 1450.3749999999998], [48.0, 1412.2941176470586], [49.0, 1777.4166666666667], [50.0, 1474.3684210526317], [51.0, 1390.2857142857142], [52.0, 1555.9230769230767], [53.0, 1404.9999999999998], [54.0, 1605.0434782608697], [55.0, 3235.5555555555543], [56.0, 1694.5], [57.0, 3460.0], [58.0, 1766.7692307692307], [59.0, 1780.5000000000005], [60.0, 1790.9166666666667], [62.0, 1800.4117647058827], [63.0, 1972.6666666666665], [64.0, 1995.8333333333333], [65.0, 1985.5333333333333], [67.0, 2055.631578947368], [68.0, 2632.5357142857147], [70.0, 2229.7], [72.0, 2331.7894736842104], [73.0, 2270.1428571428573], [75.0, 2382.9545454545455], [77.0, 2435.0869565217395], [78.0, 2388.8260869565215], [76.0, 3457.0], [80.0, 2414.0416666666665], [82.0, 2468.4], [85.0, 2795.115384615385], [87.0, 2850.7407407407404], [86.0, 3457.5714285714284], [89.0, 2906.620689655172], [91.0, 2588.857142857144], [93.0, 2719.656249999999], [95.0, 3456.333333333333], [96.0, 2762.833333333333], [98.0, 3069.617647058823], [101.0, 3109.969696969697], [104.0, 3184.4324324324325], [106.0, 3177.542857142857], [105.0, 3944.2], [109.0, 3260.9], [113.0, 3665.0512820512827], [116.0, 3757.759259259259], [119.0, 3556.3571428571436], [123.0, 3758.2608695652175], [121.0, 5908.4], [126.0, 3925.0652173913036], [125.0, 5908.0], [131.0, 4113.061224489795], [134.0, 3938.440000000001], [135.0, 5907.0], [130.0, 5908.0], [138.0, 4189.072727272727], [140.0, 3941.0], [142.0, 4226.622641509432], [144.0, 4637.119914346898], [1.0, 4064.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[98.04233368907849, 3174.232657417288]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 144.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2480.6, "minX": 1.78195098E12, "maxY": 7196.05, "series": [{"data": [[1.78195104E12, 7196.05], [1.78195098E12, 3626.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195104E12, 4921.7], [1.78195098E12, 2480.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195104E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1345.6910828025466, "minX": 1.78195098E12, "maxY": 4095.841091492773, "series": [{"data": [[1.78195104E12, 4095.841091492773], [1.78195098E12, 1345.6910828025466]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195104E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1345.6677282377907, "minX": 1.78195098E12, "maxY": 4095.830390583206, "series": [{"data": [[1.78195104E12, 4095.830390583206], [1.78195098E12, 1345.6677282377907]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195104E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.036383092562867925, "minX": 1.78195098E12, "maxY": 0.05626326963906579, "series": [{"data": [[1.78195104E12, 0.036383092562867925], [1.78195098E12, 0.05626326963906579]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195104E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 356.0, "minX": 1.78195098E12, "maxY": 620.0, "series": [{"data": [[1.78195098E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195098E12, 356.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195098E12, 566.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195098E12, 616.78]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195098E12, 423.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195098E12, 594.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195098E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 366.0, "minX": 1.0, "maxY": 5601.0, "series": [{"data": [[33.0, 457.0], [32.0, 591.0], [18.0, 366.0], [36.0, 455.5], [11.0, 412.0], [23.0, 384.0], [3.0, 486.0], [29.0, 377.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 738.0], [33.0, 2277.0], [35.0, 2028.5], [34.0, 3158.0], [37.0, 1922.5], [36.0, 2143.0], [38.0, 1397.0], [39.0, 3527.0], [40.0, 2524.0], [43.0, 4049.0], [42.0, 4006.0], [44.0, 5458.0], [47.0, 3216.5], [46.0, 4197.0], [49.0, 4792.0], [50.0, 4508.0], [51.0, 4052.0], [53.0, 4782.0], [54.0, 5279.5], [57.0, 4957.0], [63.0, 5601.0], [62.0, 4453.0], [66.0, 5434.0], [70.0, 4381.5], [74.0, 3570.0], [80.0, 3539.5], [86.0, 3607.0], [6.0, 5071.0], [120.0, 4250.5], [1.0, 3827.0], [20.0, 2374.0], [21.0, 2038.0], [22.0, 1435.0], [23.0, 2134.0], [24.0, 4197.0], [25.0, 2284.0], [26.0, 2355.5], [27.0, 1311.0], [28.0, 1679.0], [29.0, 1881.5], [30.0, 1450.5], [31.0, 1858.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 366.0, "minX": 1.0, "maxY": 5601.0, "series": [{"data": [[33.0, 457.0], [32.0, 591.0], [18.0, 366.0], [36.0, 455.5], [11.0, 412.0], [23.0, 384.0], [3.0, 486.0], [29.0, 377.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 738.0], [33.0, 2277.0], [35.0, 2028.5], [34.0, 3158.0], [37.0, 1922.5], [36.0, 2143.0], [38.0, 1397.0], [39.0, 3527.0], [40.0, 2524.0], [43.0, 4049.0], [42.0, 4006.0], [44.0, 5458.0], [47.0, 3216.5], [46.0, 4197.0], [49.0, 4792.0], [50.0, 4508.0], [51.0, 4052.0], [53.0, 4782.0], [54.0, 5279.5], [57.0, 4957.0], [63.0, 5601.0], [62.0, 4453.0], [66.0, 5434.0], [70.0, 4381.5], [74.0, 3570.0], [80.0, 3539.5], [86.0, 3607.0], [6.0, 5071.0], [120.0, 4250.5], [1.0, 3827.0], [20.0, 2374.0], [21.0, 2038.0], [22.0, 1435.0], [23.0, 2134.0], [24.0, 4197.0], [25.0, 2284.0], [26.0, 2355.5], [27.0, 1311.0], [28.0, 1679.0], [29.0, 1881.5], [30.0, 1450.5], [31.0, 1858.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.033333333333335, "minX": 1.78195098E12, "maxY": 29.816666666666666, "series": [{"data": [[1.78195104E12, 29.816666666666666], [1.78195098E12, 17.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195104E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.78195098E12, "maxY": 30.95, "series": [{"data": [[1.78195104E12, 30.95], [1.78195098E12, 15.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195104E12, 0.2]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195104E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.78195098E12, "maxY": 31.15, "series": [{"data": [[1.78195098E12, 3.5]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195104E12, 31.15], [1.78195098E12, 12.2]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195104E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.78195098E12, "maxY": 31.15, "series": [{"data": [[1.78195098E12, 3.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195104E12, 31.15], [1.78195098E12, 12.2]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195104E12, "title": "Total Transactions Per Second"}},
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

