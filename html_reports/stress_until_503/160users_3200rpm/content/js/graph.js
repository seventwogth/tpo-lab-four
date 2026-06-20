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
        data: {"result": {"minY": 337.0, "minX": 0.0, "maxY": 8413.0, "series": [{"data": [[0.0, 337.0], [0.1, 341.0], [0.2, 344.0], [0.3, 348.0], [0.4, 351.0], [0.5, 353.0], [0.6, 355.0], [0.7, 360.0], [0.8, 364.0], [0.9, 366.0], [1.0, 369.0], [1.1, 371.0], [1.2, 375.0], [1.3, 377.0], [1.4, 382.0], [1.5, 386.0], [1.6, 387.0], [1.7, 388.0], [1.8, 390.0], [1.9, 394.0], [2.0, 396.0], [2.1, 397.0], [2.2, 397.0], [2.3, 400.0], [2.4, 402.0], [2.5, 404.0], [2.6, 406.0], [2.7, 408.0], [2.8, 410.0], [2.9, 412.0], [3.0, 415.0], [3.1, 416.0], [3.2, 417.0], [3.3, 420.0], [3.4, 422.0], [3.5, 427.0], [3.6, 430.0], [3.7, 433.0], [3.8, 434.0], [3.9, 436.0], [4.0, 440.0], [4.1, 443.0], [4.2, 444.0], [4.3, 447.0], [4.4, 449.0], [4.5, 454.0], [4.6, 459.0], [4.7, 463.0], [4.8, 467.0], [4.9, 470.0], [5.0, 471.0], [5.1, 474.0], [5.2, 480.0], [5.3, 485.0], [5.4, 491.0], [5.5, 493.0], [5.6, 497.0], [5.7, 504.0], [5.8, 510.0], [5.9, 518.0], [6.0, 523.0], [6.1, 527.0], [6.2, 531.0], [6.3, 538.0], [6.4, 548.0], [6.5, 555.0], [6.6, 559.0], [6.7, 565.0], [6.8, 573.0], [6.9, 583.0], [7.0, 590.0], [7.1, 595.0], [7.2, 601.0], [7.3, 609.0], [7.4, 618.0], [7.5, 631.0], [7.6, 637.0], [7.7, 640.0], [7.8, 649.0], [7.9, 661.0], [8.0, 669.0], [8.1, 678.0], [8.2, 687.0], [8.3, 695.0], [8.4, 707.0], [8.5, 719.0], [8.6, 726.0], [8.7, 737.0], [8.8, 743.0], [8.9, 754.0], [9.0, 770.0], [9.1, 777.0], [9.2, 789.0], [9.3, 801.0], [9.4, 813.0], [9.5, 822.0], [9.6, 835.0], [9.7, 847.0], [9.8, 865.0], [9.9, 874.0], [10.0, 884.0], [10.1, 902.0], [10.2, 908.0], [10.3, 927.0], [10.4, 937.0], [10.5, 946.0], [10.6, 958.0], [10.7, 978.0], [10.8, 989.0], [10.9, 999.0], [11.0, 1010.0], [11.1, 1021.0], [11.2, 1039.0], [11.3, 1050.0], [11.4, 1062.0], [11.5, 1068.0], [11.6, 1079.0], [11.7, 1097.0], [11.8, 1116.0], [11.9, 1126.0], [12.0, 1139.0], [12.1, 1148.0], [12.2, 1168.0], [12.3, 1204.0], [12.4, 1222.0], [12.5, 1239.0], [12.6, 1256.0], [12.7, 1259.0], [12.8, 1267.0], [12.9, 1279.0], [13.0, 1292.0], [13.1, 1308.0], [13.2, 1316.0], [13.3, 1321.0], [13.4, 1326.0], [13.5, 1330.0], [13.6, 1335.0], [13.7, 1337.0], [13.8, 1338.0], [13.9, 1338.0], [14.0, 1346.0], [14.1, 1353.0], [14.2, 1356.0], [14.3, 1360.0], [14.4, 1368.0], [14.5, 1380.0], [14.6, 1380.0], [14.7, 1388.0], [14.8, 1391.0], [14.9, 1394.0], [15.0, 1394.0], [15.1, 1397.0], [15.2, 1402.0], [15.3, 1403.0], [15.4, 1413.0], [15.5, 1425.0], [15.6, 1428.0], [15.7, 1428.0], [15.8, 1431.0], [15.9, 1436.0], [16.0, 1440.0], [16.1, 1462.0], [16.2, 1487.0], [16.3, 1488.0], [16.4, 1490.0], [16.5, 1490.0], [16.6, 1492.0], [16.7, 1492.0], [16.8, 1494.0], [16.9, 1503.0], [17.0, 1503.0], [17.1, 1503.0], [17.2, 1505.0], [17.3, 1507.0], [17.4, 1534.0], [17.5, 1536.0], [17.6, 1539.0], [17.7, 1543.0], [17.8, 1545.0], [17.9, 1550.0], [18.0, 1550.0], [18.1, 1557.0], [18.2, 1557.0], [18.3, 1558.0], [18.4, 1558.0], [18.5, 1565.0], [18.6, 1568.0], [18.7, 1569.0], [18.8, 1569.0], [18.9, 1586.0], [19.0, 1586.0], [19.1, 1586.0], [19.2, 1593.0], [19.3, 1593.0], [19.4, 1608.0], [19.5, 1609.0], [19.6, 1609.0], [19.7, 1624.0], [19.8, 1626.0], [19.9, 1627.0], [20.0, 1630.0], [20.1, 1632.0], [20.2, 1632.0], [20.3, 1633.0], [20.4, 1634.0], [20.5, 1634.0], [20.6, 1634.0], [20.7, 1634.0], [20.8, 1651.0], [20.9, 1658.0], [21.0, 1660.0], [21.1, 1702.0], [21.2, 1705.0], [21.3, 1713.0], [21.4, 1716.0], [21.5, 1717.0], [21.6, 1720.0], [21.7, 1720.0], [21.8, 1722.0], [21.9, 1723.0], [22.0, 1723.0], [22.1, 1729.0], [22.2, 1730.0], [22.3, 1731.0], [22.4, 1748.0], [22.5, 1748.0], [22.6, 1748.0], [22.7, 1749.0], [22.8, 1750.0], [22.9, 1753.0], [23.0, 1753.0], [23.1, 1754.0], [23.2, 1754.0], [23.3, 1762.0], [23.4, 1770.0], [23.5, 1852.0], [23.6, 1895.0], [23.7, 1895.0], [23.8, 1895.0], [23.9, 1896.0], [24.0, 1907.0], [24.1, 1919.0], [24.2, 1920.0], [24.3, 1935.0], [24.4, 1936.0], [24.5, 1937.0], [24.6, 1993.0], [24.7, 2018.0], [24.8, 2018.0], [24.9, 2019.0], [25.0, 2021.0], [25.1, 2023.0], [25.2, 2031.0], [25.3, 2031.0], [25.4, 2032.0], [25.5, 2032.0], [25.6, 2032.0], [25.7, 2033.0], [25.8, 2033.0], [25.9, 2034.0], [26.0, 2034.0], [26.1, 2035.0], [26.2, 2094.0], [26.3, 2098.0], [26.4, 2098.0], [26.5, 2099.0], [26.6, 2101.0], [26.7, 2101.0], [26.8, 2110.0], [26.9, 2155.0], [27.0, 2156.0], [27.1, 2188.0], [27.2, 2188.0], [27.3, 2188.0], [27.4, 2189.0], [27.5, 2197.0], [27.6, 2197.0], [27.7, 2197.0], [27.8, 2197.0], [27.9, 2198.0], [28.0, 2223.0], [28.1, 2226.0], [28.2, 2269.0], [28.3, 2269.0], [28.4, 2269.0], [28.5, 2270.0], [28.6, 2270.0], [28.7, 2299.0], [28.8, 2300.0], [28.9, 2300.0], [29.0, 2314.0], [29.1, 2315.0], [29.2, 2315.0], [29.3, 2437.0], [29.4, 2438.0], [29.5, 2438.0], [29.6, 2438.0], [29.7, 2438.0], [29.8, 2450.0], [29.9, 2480.0], [30.0, 2481.0], [30.1, 2481.0], [30.2, 2481.0], [30.3, 2481.0], [30.4, 2481.0], [30.5, 2483.0], [30.6, 2484.0], [30.7, 2531.0], [30.8, 2531.0], [30.9, 2532.0], [31.0, 2532.0], [31.1, 2533.0], [31.2, 2533.0], [31.3, 2534.0], [31.4, 2534.0], [31.5, 2560.0], [31.6, 2560.0], [31.7, 2560.0], [31.8, 2561.0], [31.9, 2568.0], [32.0, 2569.0], [32.1, 2569.0], [32.2, 2571.0], [32.3, 2575.0], [32.4, 2575.0], [32.5, 2575.0], [32.6, 2610.0], [32.7, 2610.0], [32.8, 2610.0], [32.9, 2611.0], [33.0, 2611.0], [33.1, 2611.0], [33.2, 2612.0], [33.3, 2612.0], [33.4, 2613.0], [33.5, 2665.0], [33.6, 2667.0], [33.7, 2667.0], [33.8, 2668.0], [33.9, 2672.0], [34.0, 2673.0], [34.1, 2674.0], [34.2, 2692.0], [34.3, 2694.0], [34.4, 2695.0], [34.5, 2695.0], [34.6, 2695.0], [34.7, 2695.0], [34.8, 2695.0], [34.9, 2695.0], [35.0, 2718.0], [35.1, 2731.0], [35.2, 2731.0], [35.3, 2732.0], [35.4, 2734.0], [35.5, 2735.0], [35.6, 2740.0], [35.7, 2741.0], [35.8, 2743.0], [35.9, 2744.0], [36.0, 2745.0], [36.1, 2745.0], [36.2, 2819.0], [36.3, 2881.0], [36.4, 2881.0], [36.5, 2883.0], [36.6, 2883.0], [36.7, 2883.0], [36.8, 2883.0], [36.9, 2884.0], [37.0, 2884.0], [37.1, 2885.0], [37.2, 2922.0], [37.3, 2951.0], [37.4, 2952.0], [37.5, 2952.0], [37.6, 2953.0], [37.7, 2954.0], [37.8, 2959.0], [37.9, 2960.0], [38.0, 2960.0], [38.1, 2962.0], [38.2, 2970.0], [38.3, 2970.0], [38.4, 2971.0], [38.5, 2971.0], [38.6, 2971.0], [38.7, 2972.0], [38.8, 2972.0], [38.9, 2972.0], [39.0, 2973.0], [39.1, 3019.0], [39.2, 3019.0], [39.3, 3020.0], [39.4, 3036.0], [39.5, 3039.0], [39.6, 3039.0], [39.7, 3039.0], [39.8, 3040.0], [39.9, 3041.0], [40.0, 3065.0], [40.1, 3069.0], [40.2, 3074.0], [40.3, 3075.0], [40.4, 3075.0], [40.5, 3075.0], [40.6, 3075.0], [40.7, 3076.0], [40.8, 3076.0], [40.9, 3076.0], [41.0, 3076.0], [41.1, 3077.0], [41.2, 3089.0], [41.3, 3107.0], [41.4, 3151.0], [41.5, 3189.0], [41.6, 3189.0], [41.7, 3189.0], [41.8, 3189.0], [41.9, 3190.0], [42.0, 3191.0], [42.1, 3191.0], [42.2, 3191.0], [42.3, 3191.0], [42.4, 3192.0], [42.5, 3192.0], [42.6, 3192.0], [42.7, 3192.0], [42.8, 3196.0], [42.9, 3197.0], [43.0, 3253.0], [43.1, 3269.0], [43.2, 3345.0], [43.3, 3353.0], [43.4, 3353.0], [43.5, 3353.0], [43.6, 3354.0], [43.7, 3355.0], [43.8, 3355.0], [43.9, 3355.0], [44.0, 3355.0], [44.1, 3356.0], [44.2, 3358.0], [44.3, 3379.0], [44.4, 3394.0], [44.5, 3420.0], [44.6, 3428.0], [44.7, 3463.0], [44.8, 3483.0], [44.9, 3483.0], [45.0, 3484.0], [45.1, 3484.0], [45.2, 3484.0], [45.3, 3485.0], [45.4, 3485.0], [45.5, 3498.0], [45.6, 3498.0], [45.7, 3498.0], [45.8, 3498.0], [45.9, 3499.0], [46.0, 3530.0], [46.1, 3533.0], [46.2, 3534.0], [46.3, 3535.0], [46.4, 3563.0], [46.5, 3607.0], [46.6, 3608.0], [46.7, 3608.0], [46.8, 3608.0], [46.9, 3639.0], [47.0, 3641.0], [47.1, 3646.0], [47.2, 3673.0], [47.3, 3679.0], [47.4, 3680.0], [47.5, 3680.0], [47.6, 3680.0], [47.7, 3681.0], [47.8, 3681.0], [47.9, 3681.0], [48.0, 3681.0], [48.1, 3744.0], [48.2, 3765.0], [48.3, 3767.0], [48.4, 3767.0], [48.5, 3768.0], [48.6, 3768.0], [48.7, 3768.0], [48.8, 3768.0], [48.9, 3768.0], [49.0, 3769.0], [49.1, 3769.0], [49.2, 3770.0], [49.3, 3814.0], [49.4, 3836.0], [49.5, 3849.0], [49.6, 3850.0], [49.7, 3850.0], [49.8, 3852.0], [49.9, 3865.0], [50.0, 3886.0], [50.1, 3888.0], [50.2, 3888.0], [50.3, 3888.0], [50.4, 3889.0], [50.5, 3889.0], [50.6, 3889.0], [50.7, 3891.0], [50.8, 3891.0], [50.9, 3894.0], [51.0, 3896.0], [51.1, 3923.0], [51.2, 3923.0], [51.3, 3938.0], [51.4, 4022.0], [51.5, 4066.0], [51.6, 4067.0], [51.7, 4089.0], [51.8, 4105.0], [51.9, 4129.0], [52.0, 4131.0], [52.1, 4131.0], [52.2, 4131.0], [52.3, 4132.0], [52.4, 4148.0], [52.5, 4149.0], [52.6, 4149.0], [52.7, 4149.0], [52.8, 4150.0], [52.9, 4150.0], [53.0, 4150.0], [53.1, 4150.0], [53.2, 4151.0], [53.3, 4151.0], [53.4, 4151.0], [53.5, 4152.0], [53.6, 4152.0], [53.7, 4155.0], [53.8, 4157.0], [53.9, 4157.0], [54.0, 4157.0], [54.1, 4157.0], [54.2, 4157.0], [54.3, 4157.0], [54.4, 4157.0], [54.5, 4158.0], [54.6, 4158.0], [54.7, 4162.0], [54.8, 4163.0], [54.9, 4166.0], [55.0, 4166.0], [55.1, 4171.0], [55.2, 4172.0], [55.3, 4173.0], [55.4, 4173.0], [55.5, 4173.0], [55.6, 4173.0], [55.7, 4174.0], [55.8, 4175.0], [55.9, 4175.0], [56.0, 4176.0], [56.1, 4176.0], [56.2, 4178.0], [56.3, 4178.0], [56.4, 4178.0], [56.5, 4179.0], [56.6, 4179.0], [56.7, 4180.0], [56.8, 4190.0], [56.9, 4193.0], [57.0, 4195.0], [57.1, 4195.0], [57.2, 4204.0], [57.3, 4205.0], [57.4, 4205.0], [57.5, 4206.0], [57.6, 4206.0], [57.7, 4206.0], [57.8, 4207.0], [57.9, 4207.0], [58.0, 4207.0], [58.1, 4208.0], [58.2, 4212.0], [58.3, 4212.0], [58.4, 4213.0], [58.5, 4213.0], [58.6, 4213.0], [58.7, 4213.0], [58.8, 4213.0], [58.9, 4213.0], [59.0, 4214.0], [59.1, 4214.0], [59.2, 4219.0], [59.3, 4219.0], [59.4, 4220.0], [59.5, 4222.0], [59.6, 4224.0], [59.7, 4224.0], [59.8, 4225.0], [59.9, 4225.0], [60.0, 4225.0], [60.1, 4225.0], [60.2, 4226.0], [60.3, 4232.0], [60.4, 4234.0], [60.5, 4234.0], [60.6, 4244.0], [60.7, 4244.0], [60.8, 4245.0], [60.9, 4246.0], [61.0, 4246.0], [61.1, 4246.0], [61.2, 4247.0], [61.3, 4251.0], [61.4, 4251.0], [61.5, 4252.0], [61.6, 4252.0], [61.7, 4252.0], [61.8, 4253.0], [61.9, 4253.0], [62.0, 4253.0], [62.1, 4254.0], [62.2, 4254.0], [62.3, 4255.0], [62.4, 4256.0], [62.5, 4256.0], [62.6, 4258.0], [62.7, 4258.0], [62.8, 4259.0], [62.9, 4279.0], [63.0, 4279.0], [63.1, 4280.0], [63.2, 4281.0], [63.3, 4294.0], [63.4, 4295.0], [63.5, 4295.0], [63.6, 4295.0], [63.7, 4296.0], [63.8, 4296.0], [63.9, 4296.0], [64.0, 4297.0], [64.1, 4307.0], [64.2, 4308.0], [64.3, 4308.0], [64.4, 4308.0], [64.5, 4308.0], [64.6, 4319.0], [64.7, 4319.0], [64.8, 4321.0], [64.9, 4321.0], [65.0, 4322.0], [65.1, 4322.0], [65.2, 4322.0], [65.3, 4322.0], [65.4, 4322.0], [65.5, 4322.0], [65.6, 4323.0], [65.7, 4323.0], [65.8, 4323.0], [65.9, 4324.0], [66.0, 4325.0], [66.1, 4328.0], [66.2, 4328.0], [66.3, 4328.0], [66.4, 4329.0], [66.5, 4329.0], [66.6, 4330.0], [66.7, 4330.0], [66.8, 4331.0], [66.9, 4335.0], [67.0, 4337.0], [67.1, 4339.0], [67.2, 4347.0], [67.3, 4356.0], [67.4, 4356.0], [67.5, 4357.0], [67.6, 4358.0], [67.7, 4358.0], [67.8, 4358.0], [67.9, 4359.0], [68.0, 4360.0], [68.1, 4363.0], [68.2, 4374.0], [68.3, 4414.0], [68.4, 4414.0], [68.5, 4415.0], [68.6, 4416.0], [68.7, 4427.0], [68.8, 4427.0], [68.9, 4427.0], [69.0, 4427.0], [69.1, 4428.0], [69.2, 4429.0], [69.3, 4429.0], [69.4, 4430.0], [69.5, 4438.0], [69.6, 4439.0], [69.7, 4440.0], [69.8, 4440.0], [69.9, 4440.0], [70.0, 4441.0], [70.1, 4441.0], [70.2, 4442.0], [70.3, 4442.0], [70.4, 4442.0], [70.5, 4442.0], [70.6, 4481.0], [70.7, 4481.0], [70.8, 4499.0], [70.9, 4500.0], [71.0, 4500.0], [71.1, 4503.0], [71.2, 4513.0], [71.3, 4515.0], [71.4, 4515.0], [71.5, 4517.0], [71.6, 4518.0], [71.7, 4521.0], [71.8, 4521.0], [71.9, 4521.0], [72.0, 4521.0], [72.1, 4521.0], [72.2, 4536.0], [72.3, 4561.0], [72.4, 4562.0], [72.5, 4567.0], [72.6, 4568.0], [72.7, 4569.0], [72.8, 4569.0], [72.9, 4586.0], [73.0, 4614.0], [73.1, 4617.0], [73.2, 4648.0], [73.3, 4650.0], [73.4, 4665.0], [73.5, 4687.0], [73.6, 4703.0], [73.7, 4712.0], [73.8, 4723.0], [73.9, 4725.0], [74.0, 4725.0], [74.1, 4725.0], [74.2, 4725.0], [74.3, 4725.0], [74.4, 4725.0], [74.5, 4726.0], [74.6, 4726.0], [74.7, 4726.0], [74.8, 4726.0], [74.9, 4727.0], [75.0, 4729.0], [75.1, 4730.0], [75.2, 4748.0], [75.3, 4760.0], [75.4, 4762.0], [75.5, 4763.0], [75.6, 4764.0], [75.7, 4765.0], [75.8, 4766.0], [75.9, 4768.0], [76.0, 4794.0], [76.1, 4888.0], [76.2, 4908.0], [76.3, 4970.0], [76.4, 4971.0], [76.5, 4972.0], [76.6, 4972.0], [76.7, 4973.0], [76.8, 4973.0], [76.9, 4974.0], [77.0, 4974.0], [77.1, 4975.0], [77.2, 4991.0], [77.3, 5015.0], [77.4, 5083.0], [77.5, 5084.0], [77.6, 5086.0], [77.7, 5087.0], [77.8, 5087.0], [77.9, 5088.0], [78.0, 5123.0], [78.1, 5125.0], [78.2, 5142.0], [78.3, 5182.0], [78.4, 5183.0], [78.5, 5184.0], [78.6, 5184.0], [78.7, 5185.0], [78.8, 5185.0], [78.9, 5185.0], [79.0, 5185.0], [79.1, 5186.0], [79.2, 5187.0], [79.3, 5233.0], [79.4, 5242.0], [79.5, 5311.0], [79.6, 5313.0], [79.7, 5324.0], [79.8, 5328.0], [79.9, 5366.0], [80.0, 5406.0], [80.1, 5407.0], [80.2, 5408.0], [80.3, 5408.0], [80.4, 5425.0], [80.5, 5428.0], [80.6, 5428.0], [80.7, 5455.0], [80.8, 5455.0], [80.9, 5460.0], [81.0, 5461.0], [81.1, 5462.0], [81.2, 5462.0], [81.3, 5462.0], [81.4, 5476.0], [81.5, 5478.0], [81.6, 5479.0], [81.7, 5489.0], [81.8, 5492.0], [81.9, 5492.0], [82.0, 5492.0], [82.1, 5494.0], [82.2, 5499.0], [82.3, 5547.0], [82.4, 5547.0], [82.5, 5548.0], [82.6, 5550.0], [82.7, 5550.0], [82.8, 5551.0], [82.9, 5551.0], [83.0, 5551.0], [83.1, 5551.0], [83.2, 5552.0], [83.3, 5552.0], [83.4, 5552.0], [83.5, 5558.0], [83.6, 5558.0], [83.7, 5559.0], [83.8, 5563.0], [83.9, 5564.0], [84.0, 5589.0], [84.1, 5617.0], [84.2, 5625.0], [84.3, 5626.0], [84.4, 5627.0], [84.5, 5631.0], [84.6, 5632.0], [84.7, 5632.0], [84.8, 5632.0], [84.9, 5632.0], [85.0, 5633.0], [85.1, 5634.0], [85.2, 5667.0], [85.3, 5667.0], [85.4, 5668.0], [85.5, 5668.0], [85.6, 5670.0], [85.7, 5675.0], [85.8, 5676.0], [85.9, 5676.0], [86.0, 5697.0], [86.1, 5710.0], [86.2, 5711.0], [86.3, 5712.0], [86.4, 5715.0], [86.5, 5716.0], [86.6, 5717.0], [86.7, 5718.0], [86.8, 5748.0], [86.9, 5749.0], [87.0, 5749.0], [87.1, 5749.0], [87.2, 5750.0], [87.3, 5773.0], [87.4, 5798.0], [87.5, 5798.0], [87.6, 5799.0], [87.7, 5799.0], [87.8, 5800.0], [87.9, 5800.0], [88.0, 5800.0], [88.1, 5815.0], [88.2, 5816.0], [88.3, 5817.0], [88.4, 5817.0], [88.5, 5835.0], [88.6, 5840.0], [88.7, 5843.0], [88.8, 5843.0], [88.9, 5851.0], [89.0, 5852.0], [89.1, 5852.0], [89.2, 5857.0], [89.3, 5859.0], [89.4, 5859.0], [89.5, 5859.0], [89.6, 5860.0], [89.7, 5861.0], [89.8, 5861.0], [89.9, 5862.0], [90.0, 5873.0], [90.1, 5881.0], [90.2, 5881.0], [90.3, 5881.0], [90.4, 5882.0], [90.5, 5883.0], [90.6, 5904.0], [90.7, 5906.0], [90.8, 5907.0], [90.9, 5939.0], [91.0, 5939.0], [91.1, 5940.0], [91.2, 5945.0], [91.3, 5958.0], [91.4, 5960.0], [91.5, 5976.0], [91.6, 5977.0], [91.7, 5978.0], [91.8, 5978.0], [91.9, 5985.0], [92.0, 5987.0], [92.1, 6002.0], [92.2, 6003.0], [92.3, 6003.0], [92.4, 6003.0], [92.5, 6003.0], [92.6, 6004.0], [92.7, 6004.0], [92.8, 6005.0], [92.9, 6050.0], [93.0, 6050.0], [93.1, 6050.0], [93.2, 6051.0], [93.3, 6051.0], [93.4, 6051.0], [93.5, 6053.0], [93.6, 6054.0], [93.7, 6084.0], [93.8, 6084.0], [93.9, 6084.0], [94.0, 6085.0], [94.1, 6085.0], [94.2, 6085.0], [94.3, 6086.0], [94.4, 6087.0], [94.5, 6093.0], [94.6, 6096.0], [94.7, 6145.0], [94.8, 6164.0], [94.9, 6316.0], [95.0, 6317.0], [95.1, 6317.0], [95.2, 6318.0], [95.3, 6320.0], [95.4, 6340.0], [95.5, 6340.0], [95.6, 6341.0], [95.7, 6341.0], [95.8, 6341.0], [95.9, 6342.0], [96.0, 6342.0], [96.1, 6342.0], [96.2, 6342.0], [96.3, 6343.0], [96.4, 6344.0], [96.5, 6385.0], [96.6, 6387.0], [96.7, 6388.0], [96.8, 6393.0], [96.9, 6396.0], [97.0, 6396.0], [97.1, 6428.0], [97.2, 6541.0], [97.3, 6592.0], [97.4, 6632.0], [97.5, 6850.0], [97.6, 7672.0], [97.7, 7713.0], [97.8, 7891.0], [97.9, 7891.0], [98.0, 7891.0], [98.1, 8129.0], [98.2, 8216.0], [98.3, 8217.0], [98.4, 8217.0], [98.5, 8255.0], [98.6, 8265.0], [98.7, 8265.0], [98.8, 8267.0], [98.9, 8316.0], [99.0, 8317.0], [99.1, 8317.0], [99.2, 8319.0], [99.3, 8321.0], [99.4, 8411.0], [99.5, 8411.0], [99.6, 8412.0], [99.7, 8412.0], [99.8, 8412.0], [99.9, 8412.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 194.0, "series": [{"data": [[600.0, 33.0], [700.0, 27.0], [800.0, 22.0], [900.0, 24.0], [1000.0, 22.0], [1100.0, 16.0], [1200.0, 21.0], [1300.0, 59.0], [1400.0, 49.0], [1500.0, 71.0], [1600.0, 48.0], [1700.0, 66.0], [1800.0, 14.0], [1900.0, 20.0], [2000.0, 55.0], [2100.0, 39.0], [2200.0, 23.0], [2300.0, 12.0], [2400.0, 41.0], [2500.0, 54.0], [2600.0, 68.0], [2700.0, 34.0], [2800.0, 27.0], [2900.0, 53.0], [3000.0, 63.0], [3100.0, 46.0], [3200.0, 8.0], [3300.0, 35.0], [3400.0, 42.0], [3500.0, 14.0], [3600.0, 46.0], [3700.0, 35.0], [3800.0, 49.0], [3900.0, 8.0], [4000.0, 13.0], [4100.0, 151.0], [4200.0, 194.0], [4300.0, 120.0], [4400.0, 73.0], [4500.0, 58.0], [4600.0, 18.0], [4700.0, 70.0], [4800.0, 4.0], [4900.0, 30.0], [5100.0, 35.0], [5000.0, 20.0], [5300.0, 15.0], [5200.0, 7.0], [5400.0, 63.0], [5500.0, 51.0], [5600.0, 57.0], [5700.0, 48.0], [5800.0, 80.0], [6100.0, 5.0], [6000.0, 74.0], [5900.0, 40.0], [6300.0, 61.0], [6200.0, 2.0], [6400.0, 3.0], [6500.0, 4.0], [6600.0, 4.0], [6900.0, 1.0], [6800.0, 2.0], [7300.0, 1.0], [7600.0, 3.0], [7700.0, 2.0], [7800.0, 7.0], [8000.0, 2.0], [8100.0, 3.0], [8300.0, 13.0], [8200.0, 20.0], [8400.0, 18.0], [300.0, 64.0], [400.0, 94.0], [500.0, 44.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2609.0, "series": [{"data": [[0.0, 158.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2609.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 78.19597069597076, "minX": 1.7819511E12, "maxY": 151.61779661016973, "series": [{"data": [[1.7819511E12, 78.19597069597076], [1.78195116E12, 151.61779661016973]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 160 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 345.125, "minX": 1.0, "maxY": 8412.0, "series": [{"data": [[2.0, 2343.5], [3.0, 470.0], [4.0, 473.5], [5.0, 453.5], [6.0, 2361.0], [7.0, 416.42857142857144], [8.0, 345.125], [9.0, 353.1111111111111], [10.0, 1717.3076923076924], [11.0, 374.3], [12.0, 385.5], [13.0, 399.0], [14.0, 405.1538461538462], [15.0, 1612.4444444444443], [16.0, 419.1333333333334], [17.0, 441.78571428571433], [18.0, 464.1428571428571], [19.0, 1556.8125], [20.0, 515.7857142857142], [21.0, 1042.6470588235295], [22.0, 921.3333333333333], [23.0, 894.3571428571429], [24.0, 906.2], [25.0, 979.3076923076925], [26.0, 1010.7692307692307], [27.0, 1098.7272727272727], [28.0, 1085.7692307692307], [29.0, 1129.6923076923078], [30.0, 1220.181818181818], [31.0, 967.5000000000001], [32.0, 1015.1], [33.0, 1060.8181818181818], [34.0, 1115.1], [35.0, 1172.5], [36.0, 1228.888888888889], [37.0, 1287.4999999999998], [38.0, 1319.1818181818182], [39.0, 1376.7272727272727], [40.0, 1423.3333333333333], [41.0, 1382.2], [42.0, 1480.0], [43.0, 1481.3333333333335], [44.0, 1454.2], [45.0, 1534.0], [46.0, 1482.875], [47.0, 1523.3124999999998], [48.0, 1527.0], [49.0, 1524.3000000000002], [50.0, 1510.4444444444441], [51.0, 1488.0], [52.0, 1570.4545454545453], [53.0, 1495.8], [54.0, 1613.1666666666665], [55.0, 1984.2307692307693], [56.0, 1781.0], [57.0, 1807.8461538461538], [58.0, 1720.0714285714284], [59.0, 2043.6666666666665], [60.0, 1719.9333333333332], [61.0, 1805.9285714285716], [63.0, 1766.4375000000002], [64.0, 1870.4375000000002], [66.0, 1963.6666666666663], [67.0, 1915.875], [69.0, 2102.8499999999995], [70.0, 2197.1052631578946], [71.0, 4255.0], [72.0, 2445.2727272727275], [74.0, 2422.6190476190477], [75.0, 4176.0], [76.0, 2514.4166666666665], [78.0, 2469.0], [81.0, 2707.0384615384623], [83.0, 2678.84], [80.0, 4175.0], [85.0, 2722.444444444445], [87.0, 2559.777777777778], [86.0, 4175.0], [90.0, 2711.0333333333333], [92.0, 2698.5], [95.0, 2815.806451612903], [98.0, 2926.848484848485], [100.0, 3125.9444444444443], [101.0, 2616.0], [103.0, 3065.542857142857], [107.0, 3281.9534883720926], [106.0, 4252.75], [104.0, 4252.5], [111.0, 3614.933333333332], [110.0, 4172.25], [109.0, 4252.0], [108.0, 4222.250000000001], [115.0, 3828.6749999999993], [114.0, 4275.0], [118.0, 3754.488372093024], [119.0, 8044.0], [122.0, 3679.2790697674413], [123.0, 3145.0], [121.0, 4296.0], [126.0, 3782.3469387755094], [127.0, 8412.0], [125.0, 6765.8], [130.0, 3894.8085106383], [134.0, 4860.766233766233], [135.0, 3465.0], [131.0, 4827.8], [129.0, 6501.75], [128.0, 7019.5], [139.0, 4321.862745098039], [142.0, 4751.0], [143.0, 5486.857142857143], [137.0, 5547.333333333333], [144.0, 4364.928571428572], [148.0, 5324.0], [149.0, 4692.051724137932], [150.0, 5476.0], [152.0, 5013.5], [153.0, 5390.0], [154.0, 4696.047619047621], [159.0, 4960.718749999999], [160.0, 5251.223333333335], [1.0, 4190.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[108.94038325053226, 3564.5180979417996]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 160.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3107.3333333333335, "minX": 1.7819511E12, "maxY": 6306.3, "series": [{"data": [[1.7819511E12, 6306.3], [1.78195116E12, 4543.633333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7819511E12, 4313.4], [1.78195116E12, 3107.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2391.686813186816, "minX": 1.7819511E12, "maxY": 5192.566949152544, "series": [{"data": [[1.7819511E12, 2391.686813186816], [1.78195116E12, 5192.566949152544]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2391.6642246642277, "minX": 1.7819511E12, "maxY": 5192.55762711865, "series": [{"data": [[1.7819511E12, 2391.6642246642277], [1.78195116E12, 5192.55762711865]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027966101694915247, "minX": 1.7819511E12, "maxY": 0.061050061050061055, "series": [{"data": [[1.7819511E12, 0.061050061050061055], [1.78195116E12, 0.027966101694915247]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 337.0, "minX": 1.7819511E12, "maxY": 618.0, "series": [{"data": [[1.7819511E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7819511E12, 337.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7819511E12, 565.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7819511E12, 613.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7819511E12, 433.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7819511E12, 592.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819511E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 351.5, "minX": 1.0, "maxY": 6085.0, "series": [{"data": [[32.0, 402.5], [35.0, 434.0], [36.0, 530.5], [22.0, 351.5], [6.0, 471.0], [14.0, 438.0], [30.0, 379.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 787.0], [33.0, 1907.0], [2.0, 5198.5], [34.0, 1545.0], [35.0, 3076.0], [36.0, 5492.0], [37.0, 3354.0], [38.0, 2269.0], [39.0, 3768.0], [40.0, 4157.0], [42.0, 1634.0], [43.0, 2745.0], [47.0, 4246.0], [3.0, 5328.0], [51.0, 4534.0], [52.0, 4669.0], [54.0, 2560.0], [55.0, 6085.0], [56.0, 4941.5], [59.0, 5123.0], [60.0, 4656.5], [62.0, 4517.0], [64.0, 5716.0], [67.0, 4790.0], [77.0, 4359.5], [5.0, 5212.0], [6.0, 4066.5], [132.0, 4296.0], [9.0, 5558.0], [10.0, 5906.0], [11.0, 4725.0], [1.0, 3948.0], [16.0, 5547.0], [17.0, 3968.0], [18.0, 4871.5], [21.0, 2571.0], [22.0, 2198.0], [23.0, 1492.0], [25.0, 2095.5], [27.0, 1171.0], [29.0, 1550.0], [30.0, 1748.0], [31.0, 2883.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 132.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 351.5, "minX": 1.0, "maxY": 6085.0, "series": [{"data": [[32.0, 402.5], [35.0, 434.0], [36.0, 530.5], [22.0, 351.5], [6.0, 471.0], [14.0, 438.0], [30.0, 378.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 787.0], [33.0, 1907.0], [2.0, 5198.5], [34.0, 1545.0], [35.0, 3076.0], [36.0, 5492.0], [37.0, 3354.0], [38.0, 2269.0], [39.0, 3768.0], [40.0, 4157.0], [42.0, 1634.0], [43.0, 2745.0], [47.0, 4245.0], [3.0, 5328.0], [51.0, 4534.0], [52.0, 4669.0], [54.0, 2560.0], [55.0, 6085.0], [56.0, 4941.5], [59.0, 5123.0], [60.0, 4656.5], [62.0, 4516.5], [64.0, 5716.0], [67.0, 4790.0], [77.0, 4359.5], [5.0, 5212.0], [6.0, 4066.5], [132.0, 4296.0], [9.0, 5558.0], [10.0, 5906.0], [11.0, 4725.0], [1.0, 3947.5], [16.0, 5547.0], [17.0, 3968.0], [18.0, 4871.5], [21.0, 2571.0], [22.0, 2198.0], [23.0, 1492.0], [25.0, 2095.5], [27.0, 1171.0], [29.0, 1550.0], [30.0, 1748.0], [31.0, 2883.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 132.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.15, "minX": 1.7819511E12, "maxY": 29.816666666666666, "series": [{"data": [[1.7819511E12, 29.816666666666666], [1.78195116E12, 17.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.7819511E12, "maxY": 27.3, "series": [{"data": [[1.7819511E12, 27.3], [1.78195116E12, 19.35]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195116E12, 0.31666666666666665]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.7819511E12, "maxY": 23.816666666666666, "series": [{"data": [[1.7819511E12, 3.4833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7819511E12, 23.816666666666666], [1.78195116E12, 19.666666666666668]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.7819511E12, "maxY": 23.816666666666666, "series": [{"data": [[1.7819511E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7819511E12, 23.816666666666666], [1.78195116E12, 19.666666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195116E12, "title": "Total Transactions Per Second"}},
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

