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
        data: {"result": {"minY": 329.0, "minX": 0.0, "maxY": 12390.0, "series": [{"data": [[0.0, 329.0], [0.1, 331.0], [0.2, 334.0], [0.3, 337.0], [0.4, 340.0], [0.5, 343.0], [0.6, 347.0], [0.7, 349.0], [0.8, 351.0], [0.9, 355.0], [1.0, 358.0], [1.1, 360.0], [1.2, 366.0], [1.3, 367.0], [1.4, 371.0], [1.5, 374.0], [1.6, 377.0], [1.7, 381.0], [1.8, 385.0], [1.9, 387.0], [2.0, 392.0], [2.1, 396.0], [2.2, 399.0], [2.3, 403.0], [2.4, 409.0], [2.5, 413.0], [2.6, 417.0], [2.7, 419.0], [2.8, 427.0], [2.9, 428.0], [3.0, 433.0], [3.1, 438.0], [3.2, 442.0], [3.3, 446.0], [3.4, 452.0], [3.5, 458.0], [3.6, 463.0], [3.7, 468.0], [3.8, 472.0], [3.9, 474.0], [4.0, 478.0], [4.1, 481.0], [4.2, 484.0], [4.3, 485.0], [4.4, 488.0], [4.5, 491.0], [4.6, 492.0], [4.7, 498.0], [4.8, 500.0], [4.9, 503.0], [5.0, 505.0], [5.1, 507.0], [5.2, 511.0], [5.3, 513.0], [5.4, 514.0], [5.5, 518.0], [5.6, 521.0], [5.7, 525.0], [5.8, 528.0], [5.9, 532.0], [6.0, 537.0], [6.1, 541.0], [6.2, 551.0], [6.3, 557.0], [6.4, 562.0], [6.5, 569.0], [6.6, 579.0], [6.7, 587.0], [6.8, 592.0], [6.9, 600.0], [7.0, 612.0], [7.1, 617.0], [7.2, 623.0], [7.3, 631.0], [7.4, 647.0], [7.5, 653.0], [7.6, 659.0], [7.7, 671.0], [7.8, 681.0], [7.9, 687.0], [8.0, 697.0], [8.1, 711.0], [8.2, 730.0], [8.3, 735.0], [8.4, 750.0], [8.5, 763.0], [8.6, 777.0], [8.7, 801.0], [8.8, 821.0], [8.9, 836.0], [9.0, 846.0], [9.1, 878.0], [9.2, 890.0], [9.3, 923.0], [9.4, 926.0], [9.5, 951.0], [9.6, 997.0], [9.7, 1019.0], [9.8, 1027.0], [9.9, 1039.0], [10.0, 1098.0], [10.1, 1112.0], [10.2, 1117.0], [10.3, 1141.0], [10.4, 1232.0], [10.5, 1243.0], [10.6, 1273.0], [10.7, 1279.0], [10.8, 1311.0], [10.9, 1404.0], [11.0, 1406.0], [11.1, 1412.0], [11.2, 1423.0], [11.3, 1529.0], [11.4, 1588.0], [11.5, 1590.0], [11.6, 1593.0], [11.7, 1597.0], [11.8, 1651.0], [11.9, 1755.0], [12.0, 1762.0], [12.1, 1807.0], [12.2, 1807.0], [12.3, 1836.0], [12.4, 1837.0], [12.5, 1870.0], [12.6, 1871.0], [12.7, 1872.0], [12.8, 2008.0], [12.9, 2011.0], [13.0, 2036.0], [13.1, 2037.0], [13.2, 2038.0], [13.3, 2038.0], [13.4, 2038.0], [13.5, 2039.0], [13.6, 2039.0], [13.7, 2103.0], [13.8, 2110.0], [13.9, 2116.0], [14.0, 2116.0], [14.1, 2117.0], [14.2, 2118.0], [14.3, 2144.0], [14.4, 2145.0], [14.5, 2145.0], [14.6, 2145.0], [14.7, 2147.0], [14.8, 2171.0], [14.9, 2172.0], [15.0, 2172.0], [15.1, 2172.0], [15.2, 2172.0], [15.3, 2173.0], [15.4, 2174.0], [15.5, 2174.0], [15.6, 2200.0], [15.7, 2200.0], [15.8, 2200.0], [15.9, 2201.0], [16.0, 2201.0], [16.1, 2202.0], [16.2, 2207.0], [16.3, 2207.0], [16.4, 2247.0], [16.5, 2247.0], [16.6, 2249.0], [16.7, 2249.0], [16.8, 2264.0], [16.9, 2271.0], [17.0, 2273.0], [17.1, 2276.0], [17.2, 2276.0], [17.3, 2277.0], [17.4, 2277.0], [17.5, 2278.0], [17.6, 2278.0], [17.7, 2278.0], [17.8, 2278.0], [17.9, 2303.0], [18.0, 2321.0], [18.1, 2405.0], [18.2, 2448.0], [18.3, 2450.0], [18.4, 2450.0], [18.5, 2462.0], [18.6, 2463.0], [18.7, 2463.0], [18.8, 2463.0], [18.9, 2464.0], [19.0, 2469.0], [19.1, 2495.0], [19.2, 2537.0], [19.3, 2537.0], [19.4, 2537.0], [19.5, 2538.0], [19.6, 2538.0], [19.7, 2538.0], [19.8, 2539.0], [19.9, 2539.0], [20.0, 2539.0], [20.1, 2542.0], [20.2, 2589.0], [20.3, 2639.0], [20.4, 2683.0], [20.5, 2683.0], [20.6, 2683.0], [20.7, 2690.0], [20.8, 2702.0], [20.9, 2703.0], [21.0, 2703.0], [21.1, 2703.0], [21.2, 2703.0], [21.3, 2703.0], [21.4, 2704.0], [21.5, 2704.0], [21.6, 2704.0], [21.7, 2724.0], [21.8, 2764.0], [21.9, 2810.0], [22.0, 2825.0], [22.1, 2856.0], [22.2, 2875.0], [22.3, 2888.0], [22.4, 2888.0], [22.5, 2894.0], [22.6, 2894.0], [22.7, 2894.0], [22.8, 2895.0], [22.9, 2895.0], [23.0, 2896.0], [23.1, 2896.0], [23.2, 2896.0], [23.3, 2898.0], [23.4, 2906.0], [23.5, 2911.0], [23.6, 2916.0], [23.7, 2917.0], [23.8, 2918.0], [23.9, 2919.0], [24.0, 2945.0], [24.1, 2977.0], [24.2, 2977.0], [24.3, 2980.0], [24.4, 2986.0], [24.5, 2987.0], [24.6, 2987.0], [24.7, 2994.0], [24.8, 2996.0], [24.9, 2996.0], [25.0, 3048.0], [25.1, 3155.0], [25.2, 3270.0], [25.3, 3312.0], [25.4, 3313.0], [25.5, 3315.0], [25.6, 3316.0], [25.7, 3317.0], [25.8, 3377.0], [25.9, 3401.0], [26.0, 3402.0], [26.1, 3403.0], [26.2, 3404.0], [26.3, 3404.0], [26.4, 3404.0], [26.5, 3406.0], [26.6, 3406.0], [26.7, 3408.0], [26.8, 3493.0], [26.9, 3613.0], [27.0, 3613.0], [27.1, 3613.0], [27.2, 3614.0], [27.3, 3614.0], [27.4, 3614.0], [27.5, 3636.0], [27.6, 3637.0], [27.7, 3637.0], [27.8, 3637.0], [27.9, 3638.0], [28.0, 3660.0], [28.1, 3661.0], [28.2, 3664.0], [28.3, 3704.0], [28.4, 3704.0], [28.5, 3705.0], [28.6, 3705.0], [28.7, 3706.0], [28.8, 3707.0], [28.9, 3718.0], [29.0, 3719.0], [29.1, 3719.0], [29.2, 3719.0], [29.3, 3719.0], [29.4, 3720.0], [29.5, 3720.0], [29.6, 3742.0], [29.7, 3822.0], [29.8, 3873.0], [29.9, 3873.0], [30.0, 3873.0], [30.1, 3874.0], [30.2, 3874.0], [30.3, 3874.0], [30.4, 3885.0], [30.5, 3923.0], [30.6, 3928.0], [30.7, 3963.0], [30.8, 4044.0], [30.9, 4045.0], [31.0, 4045.0], [31.1, 4045.0], [31.2, 4045.0], [31.3, 4045.0], [31.4, 4046.0], [31.5, 4046.0], [31.6, 4046.0], [31.7, 4076.0], [31.8, 4107.0], [31.9, 4142.0], [32.0, 4145.0], [32.1, 4183.0], [32.2, 4324.0], [32.3, 4342.0], [32.4, 4342.0], [32.5, 4342.0], [32.6, 4342.0], [32.7, 4462.0], [32.8, 4463.0], [32.9, 4463.0], [33.0, 4463.0], [33.1, 4463.0], [33.2, 4464.0], [33.3, 4470.0], [33.4, 4471.0], [33.5, 4512.0], [33.6, 4512.0], [33.7, 4517.0], [33.8, 4520.0], [33.9, 4545.0], [34.0, 4610.0], [34.1, 4693.0], [34.2, 4697.0], [34.3, 4699.0], [34.4, 4699.0], [34.5, 4699.0], [34.6, 4700.0], [34.7, 4701.0], [34.8, 4701.0], [34.9, 4701.0], [35.0, 4724.0], [35.1, 4786.0], [35.2, 4916.0], [35.3, 4945.0], [35.4, 4952.0], [35.5, 5006.0], [35.6, 5067.0], [35.7, 5136.0], [35.8, 5168.0], [35.9, 5216.0], [36.0, 5216.0], [36.1, 5217.0], [36.2, 5218.0], [36.3, 5218.0], [36.4, 5218.0], [36.5, 5218.0], [36.6, 5219.0], [36.7, 5228.0], [36.8, 5238.0], [36.9, 5238.0], [37.0, 5329.0], [37.1, 5330.0], [37.2, 5330.0], [37.3, 5331.0], [37.4, 5331.0], [37.5, 5332.0], [37.6, 5380.0], [37.7, 5384.0], [37.8, 5384.0], [37.9, 5386.0], [38.0, 5386.0], [38.1, 5387.0], [38.2, 5388.0], [38.3, 5388.0], [38.4, 5394.0], [38.5, 5394.0], [38.6, 5430.0], [38.7, 5431.0], [38.8, 5445.0], [38.9, 5450.0], [39.0, 5451.0], [39.1, 5469.0], [39.2, 5472.0], [39.3, 5472.0], [39.4, 5473.0], [39.5, 5473.0], [39.6, 5473.0], [39.7, 5473.0], [39.8, 5474.0], [39.9, 5474.0], [40.0, 5482.0], [40.1, 5493.0], [40.2, 5511.0], [40.3, 5512.0], [40.4, 5512.0], [40.5, 5512.0], [40.6, 5513.0], [40.7, 5514.0], [40.8, 5552.0], [40.9, 5556.0], [41.0, 5560.0], [41.1, 5561.0], [41.2, 5561.0], [41.3, 5561.0], [41.4, 5561.0], [41.5, 5562.0], [41.6, 5562.0], [41.7, 5562.0], [41.8, 5562.0], [41.9, 5574.0], [42.0, 5574.0], [42.1, 5574.0], [42.2, 5574.0], [42.3, 5574.0], [42.4, 5575.0], [42.5, 5576.0], [42.6, 5576.0], [42.7, 5583.0], [42.8, 5583.0], [42.9, 5585.0], [43.0, 5585.0], [43.1, 5585.0], [43.2, 5585.0], [43.3, 5600.0], [43.4, 5601.0], [43.5, 5601.0], [43.6, 5602.0], [43.7, 5603.0], [43.8, 5648.0], [43.9, 5650.0], [44.0, 5653.0], [44.1, 5683.0], [44.2, 5756.0], [44.3, 5776.0], [44.4, 5795.0], [44.5, 5807.0], [44.6, 5821.0], [44.7, 5821.0], [44.8, 5822.0], [44.9, 5822.0], [45.0, 5823.0], [45.1, 5823.0], [45.2, 5869.0], [45.3, 5887.0], [45.4, 5916.0], [45.5, 5925.0], [45.6, 5993.0], [45.7, 6002.0], [45.8, 6002.0], [45.9, 6003.0], [46.0, 6003.0], [46.1, 6003.0], [46.2, 6008.0], [46.3, 6009.0], [46.4, 6010.0], [46.5, 6011.0], [46.6, 6011.0], [46.7, 6011.0], [46.8, 6011.0], [46.9, 6011.0], [47.0, 6067.0], [47.1, 6085.0], [47.2, 6104.0], [47.3, 6104.0], [47.4, 6105.0], [47.5, 6106.0], [47.6, 6106.0], [47.7, 6126.0], [47.8, 6137.0], [47.9, 6138.0], [48.0, 6151.0], [48.1, 6173.0], [48.2, 6174.0], [48.3, 6175.0], [48.4, 6175.0], [48.5, 6175.0], [48.6, 6178.0], [48.7, 6179.0], [48.8, 6180.0], [48.9, 6181.0], [49.0, 6181.0], [49.1, 6213.0], [49.2, 6228.0], [49.3, 6229.0], [49.4, 6230.0], [49.5, 6230.0], [49.6, 6231.0], [49.7, 6231.0], [49.8, 6231.0], [49.9, 6231.0], [50.0, 6233.0], [50.1, 6233.0], [50.2, 6233.0], [50.3, 6244.0], [50.4, 6260.0], [50.5, 6260.0], [50.6, 6260.0], [50.7, 6261.0], [50.8, 6261.0], [50.9, 6262.0], [51.0, 6262.0], [51.1, 6262.0], [51.2, 6288.0], [51.3, 6319.0], [51.4, 6343.0], [51.5, 6343.0], [51.6, 6343.0], [51.7, 6344.0], [51.8, 6344.0], [51.9, 6344.0], [52.0, 6364.0], [52.1, 6368.0], [52.2, 6369.0], [52.3, 6396.0], [52.4, 6398.0], [52.5, 6408.0], [52.6, 6409.0], [52.7, 6444.0], [52.8, 6494.0], [52.9, 6494.0], [53.0, 6508.0], [53.1, 6509.0], [53.2, 6510.0], [53.3, 6511.0], [53.4, 6512.0], [53.5, 6520.0], [53.6, 6550.0], [53.7, 6551.0], [53.8, 6551.0], [53.9, 6562.0], [54.0, 6563.0], [54.1, 6563.0], [54.2, 6649.0], [54.3, 6650.0], [54.4, 6651.0], [54.5, 6651.0], [54.6, 6652.0], [54.7, 6652.0], [54.8, 6677.0], [54.9, 6677.0], [55.0, 6678.0], [55.1, 6679.0], [55.2, 6722.0], [55.3, 6723.0], [55.4, 6738.0], [55.5, 6757.0], [55.6, 6759.0], [55.7, 6759.0], [55.8, 6762.0], [55.9, 6764.0], [56.0, 6785.0], [56.1, 6786.0], [56.2, 6787.0], [56.3, 6788.0], [56.4, 6788.0], [56.5, 6824.0], [56.6, 6824.0], [56.7, 6825.0], [56.8, 6825.0], [56.9, 6825.0], [57.0, 6826.0], [57.1, 6826.0], [57.2, 6849.0], [57.3, 6879.0], [57.4, 6881.0], [57.5, 6882.0], [57.6, 6884.0], [57.7, 6886.0], [57.8, 6900.0], [57.9, 6908.0], [58.0, 6918.0], [58.1, 6918.0], [58.2, 6933.0], [58.3, 6951.0], [58.4, 6953.0], [58.5, 7032.0], [58.6, 7032.0], [58.7, 7033.0], [58.8, 7033.0], [58.9, 7033.0], [59.0, 7033.0], [59.1, 7036.0], [59.2, 7104.0], [59.3, 7161.0], [59.4, 7172.0], [59.5, 7244.0], [59.6, 7244.0], [59.7, 7244.0], [59.8, 7245.0], [59.9, 7245.0], [60.0, 7245.0], [60.1, 7285.0], [60.2, 7285.0], [60.3, 7291.0], [60.4, 7320.0], [60.5, 7321.0], [60.6, 7321.0], [60.7, 7322.0], [60.8, 7322.0], [60.9, 7353.0], [61.0, 7365.0], [61.1, 7365.0], [61.2, 7370.0], [61.3, 7370.0], [61.4, 7370.0], [61.5, 7372.0], [61.6, 7373.0], [61.7, 7373.0], [61.8, 7374.0], [61.9, 7375.0], [62.0, 7384.0], [62.1, 7397.0], [62.2, 7420.0], [62.3, 7421.0], [62.4, 7421.0], [62.5, 7421.0], [62.6, 7421.0], [62.7, 7422.0], [62.8, 7428.0], [62.9, 7428.0], [63.0, 7429.0], [63.1, 7432.0], [63.2, 7458.0], [63.3, 7459.0], [63.4, 7531.0], [63.5, 7532.0], [63.6, 7553.0], [63.7, 7553.0], [63.8, 7554.0], [63.9, 7573.0], [64.0, 7579.0], [64.1, 7580.0], [64.2, 7625.0], [64.3, 7626.0], [64.4, 7631.0], [64.5, 7637.0], [64.6, 7637.0], [64.7, 7637.0], [64.8, 7638.0], [64.9, 7638.0], [65.0, 7645.0], [65.1, 7646.0], [65.2, 7647.0], [65.3, 7648.0], [65.4, 7689.0], [65.5, 7695.0], [65.6, 7695.0], [65.7, 7696.0], [65.8, 7705.0], [65.9, 7706.0], [66.0, 7727.0], [66.1, 7727.0], [66.2, 7727.0], [66.3, 7728.0], [66.4, 7780.0], [66.5, 7780.0], [66.6, 7780.0], [66.7, 7782.0], [66.8, 7782.0], [66.9, 7782.0], [67.0, 7783.0], [67.1, 7783.0], [67.2, 7783.0], [67.3, 7783.0], [67.4, 7784.0], [67.5, 7785.0], [67.6, 7785.0], [67.7, 7785.0], [67.8, 7785.0], [67.9, 7810.0], [68.0, 7837.0], [68.1, 7841.0], [68.2, 7844.0], [68.3, 7844.0], [68.4, 7850.0], [68.5, 7850.0], [68.6, 7850.0], [68.7, 7850.0], [68.8, 7852.0], [68.9, 7852.0], [69.0, 7852.0], [69.1, 7852.0], [69.2, 7852.0], [69.3, 7852.0], [69.4, 7852.0], [69.5, 7853.0], [69.6, 7861.0], [69.7, 7863.0], [69.8, 7863.0], [69.9, 7864.0], [70.0, 7880.0], [70.1, 7885.0], [70.2, 7886.0], [70.3, 7886.0], [70.4, 7887.0], [70.5, 7887.0], [70.6, 7889.0], [70.7, 7903.0], [70.8, 7913.0], [70.9, 7913.0], [71.0, 7961.0], [71.1, 7976.0], [71.2, 7977.0], [71.3, 7978.0], [71.4, 8014.0], [71.5, 8018.0], [71.6, 8019.0], [71.7, 8020.0], [71.8, 8076.0], [71.9, 8077.0], [72.0, 8077.0], [72.1, 8078.0], [72.2, 8078.0], [72.3, 8079.0], [72.4, 8079.0], [72.5, 8195.0], [72.6, 8236.0], [72.7, 8237.0], [72.8, 8240.0], [72.9, 8251.0], [73.0, 8287.0], [73.1, 8316.0], [73.2, 8319.0], [73.3, 8320.0], [73.4, 8376.0], [73.5, 8377.0], [73.6, 8378.0], [73.7, 8379.0], [73.8, 8404.0], [73.9, 8404.0], [74.0, 8405.0], [74.1, 8406.0], [74.2, 8407.0], [74.3, 8416.0], [74.4, 8421.0], [74.5, 8436.0], [74.6, 8453.0], [74.7, 8455.0], [74.8, 8455.0], [74.9, 8456.0], [75.0, 8456.0], [75.1, 8491.0], [75.2, 8494.0], [75.3, 8496.0], [75.4, 8496.0], [75.5, 8498.0], [75.6, 8498.0], [75.7, 8498.0], [75.8, 8510.0], [75.9, 8518.0], [76.0, 8604.0], [76.1, 8608.0], [76.2, 8644.0], [76.3, 8646.0], [76.4, 8646.0], [76.5, 8646.0], [76.6, 8646.0], [76.7, 8646.0], [76.8, 8646.0], [76.9, 8646.0], [77.0, 8647.0], [77.1, 8706.0], [77.2, 8708.0], [77.3, 8709.0], [77.4, 8709.0], [77.5, 8710.0], [77.6, 8711.0], [77.7, 8712.0], [77.8, 8731.0], [77.9, 8750.0], [78.0, 8756.0], [78.1, 8785.0], [78.2, 8786.0], [78.3, 8786.0], [78.4, 8786.0], [78.5, 8787.0], [78.6, 8804.0], [78.7, 8806.0], [78.8, 8858.0], [78.9, 8858.0], [79.0, 8858.0], [79.1, 8858.0], [79.2, 8858.0], [79.3, 8859.0], [79.4, 8859.0], [79.5, 8859.0], [79.6, 8859.0], [79.7, 8859.0], [79.8, 8860.0], [79.9, 8907.0], [80.0, 8908.0], [80.1, 8908.0], [80.2, 8908.0], [80.3, 8909.0], [80.4, 8909.0], [80.5, 8910.0], [80.6, 8911.0], [80.7, 8948.0], [80.8, 8951.0], [80.9, 8975.0], [81.0, 8975.0], [81.1, 8981.0], [81.2, 9014.0], [81.3, 9015.0], [81.4, 9016.0], [81.5, 9016.0], [81.6, 9017.0], [81.7, 9017.0], [81.8, 9018.0], [81.9, 9045.0], [82.0, 9072.0], [82.1, 9072.0], [82.2, 9100.0], [82.3, 9118.0], [82.4, 9119.0], [82.5, 9119.0], [82.6, 9153.0], [82.7, 9159.0], [82.8, 9160.0], [82.9, 9160.0], [83.0, 9161.0], [83.1, 9162.0], [83.2, 9163.0], [83.3, 9170.0], [83.4, 9258.0], [83.5, 9259.0], [83.6, 9259.0], [83.7, 9259.0], [83.8, 9260.0], [83.9, 9264.0], [84.0, 9265.0], [84.1, 9324.0], [84.2, 9348.0], [84.3, 9348.0], [84.4, 9348.0], [84.5, 9348.0], [84.6, 9348.0], [84.7, 9349.0], [84.8, 9349.0], [84.9, 9349.0], [85.0, 9350.0], [85.1, 9361.0], [85.2, 9420.0], [85.3, 9476.0], [85.4, 9515.0], [85.5, 9517.0], [85.6, 9543.0], [85.7, 9552.0], [85.8, 9552.0], [85.9, 9554.0], [86.0, 9554.0], [86.1, 9615.0], [86.2, 9617.0], [86.3, 9697.0], [86.4, 9722.0], [86.5, 9723.0], [86.6, 9724.0], [86.7, 9733.0], [86.8, 9733.0], [86.9, 9734.0], [87.0, 9734.0], [87.1, 9734.0], [87.2, 9734.0], [87.3, 9735.0], [87.4, 9735.0], [87.5, 9752.0], [87.6, 9917.0], [87.7, 9983.0], [87.8, 10001.0], [87.9, 10003.0], [88.0, 10003.0], [88.1, 10003.0], [88.2, 10004.0], [88.3, 10027.0], [88.4, 10029.0], [88.5, 10038.0], [88.6, 10194.0], [88.7, 10206.0], [88.8, 10238.0], [88.9, 10240.0], [89.0, 10240.0], [89.1, 10240.0], [89.2, 10240.0], [89.3, 10241.0], [89.4, 10241.0], [89.5, 10241.0], [89.6, 10241.0], [89.7, 10241.0], [89.8, 10242.0], [89.9, 10257.0], [90.0, 10313.0], [90.1, 10314.0], [90.2, 10324.0], [90.3, 10326.0], [90.4, 10326.0], [90.5, 10327.0], [90.6, 10327.0], [90.7, 10349.0], [90.8, 10352.0], [90.9, 10352.0], [91.0, 10353.0], [91.1, 10354.0], [91.2, 10368.0], [91.3, 10368.0], [91.4, 10369.0], [91.5, 10370.0], [91.6, 10370.0], [91.7, 10370.0], [91.8, 10370.0], [91.9, 10371.0], [92.0, 10372.0], [92.1, 10428.0], [92.2, 10428.0], [92.3, 10429.0], [92.4, 10429.0], [92.5, 10429.0], [92.6, 10429.0], [92.7, 10431.0], [92.8, 10431.0], [92.9, 10433.0], [93.0, 10477.0], [93.1, 10480.0], [93.2, 10480.0], [93.3, 10481.0], [93.4, 10481.0], [93.5, 10481.0], [93.6, 10488.0], [93.7, 10488.0], [93.8, 10488.0], [93.9, 10488.0], [94.0, 10488.0], [94.1, 10489.0], [94.2, 10489.0], [94.3, 10489.0], [94.4, 10489.0], [94.5, 10489.0], [94.6, 10489.0], [94.7, 10537.0], [94.8, 10538.0], [94.9, 10538.0], [95.0, 10538.0], [95.1, 10539.0], [95.2, 10539.0], [95.3, 10540.0], [95.4, 10541.0], [95.5, 10553.0], [95.6, 10555.0], [95.7, 10555.0], [95.8, 10556.0], [95.9, 10571.0], [96.0, 10642.0], [96.1, 10643.0], [96.2, 10643.0], [96.3, 10643.0], [96.4, 10643.0], [96.5, 10643.0], [96.6, 10698.0], [96.7, 10705.0], [96.8, 10705.0], [96.9, 10706.0], [97.0, 10706.0], [97.1, 10717.0], [97.2, 10795.0], [97.3, 10796.0], [97.4, 10797.0], [97.5, 10797.0], [97.6, 10797.0], [97.7, 10919.0], [97.8, 10925.0], [97.9, 10926.0], [98.0, 10927.0], [98.1, 10927.0], [98.2, 10928.0], [98.3, 10933.0], [98.4, 10933.0], [98.5, 10935.0], [98.6, 10935.0], [98.7, 10935.0], [98.8, 10935.0], [98.9, 11181.0], [99.0, 11182.0], [99.1, 11183.0], [99.2, 11184.0], [99.3, 11185.0], [99.4, 11185.0], [99.5, 11186.0], [99.6, 11385.0], [99.7, 11386.0], [99.8, 11983.0], [99.9, 12025.0], [100.0, 12390.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 92.0, "series": [{"data": [[300.0, 65.0], [400.0, 75.0], [500.0, 62.0], [600.0, 33.0], [700.0, 19.0], [800.0, 16.0], [900.0, 12.0], [1000.0, 11.0], [1100.0, 10.0], [1200.0, 12.0], [1300.0, 4.0], [1400.0, 11.0], [1500.0, 14.0], [1600.0, 2.0], [1700.0, 7.0], [1800.0, 20.0], [2000.0, 27.0], [2100.0, 56.0], [2300.0, 6.0], [2200.0, 68.0], [2400.0, 30.0], [2500.0, 32.0], [2600.0, 16.0], [2800.0, 43.0], [2700.0, 32.0], [2900.0, 47.0], [3000.0, 5.0], [3100.0, 2.0], [3300.0, 17.0], [3200.0, 2.0], [3400.0, 29.0], [3500.0, 2.0], [3700.0, 39.0], [3600.0, 41.0], [3800.0, 25.0], [3900.0, 9.0], [4000.0, 29.0], [4300.0, 13.0], [4100.0, 11.0], [4200.0, 2.0], [4600.0, 17.0], [4500.0, 15.0], [4400.0, 24.0], [4700.0, 17.0], [4800.0, 2.0], [5100.0, 5.0], [4900.0, 8.0], [5000.0, 5.0], [5200.0, 34.0], [5300.0, 46.0], [5400.0, 47.0], [5500.0, 92.0], [5600.0, 24.0], [5700.0, 11.0], [5800.0, 25.0], [5900.0, 9.0], [6000.0, 43.0], [6100.0, 57.0], [6200.0, 65.0], [6300.0, 35.0], [6500.0, 34.0], [6400.0, 15.0], [6600.0, 28.0], [6700.0, 39.0], [6900.0, 20.0], [6800.0, 39.0], [7100.0, 9.0], [7000.0, 21.0], [7300.0, 53.0], [7400.0, 35.0], [7200.0, 25.0], [7500.0, 23.0], [7600.0, 48.0], [7900.0, 21.0], [7700.0, 61.0], [7800.0, 83.0], [8000.0, 32.0], [8100.0, 1.0], [8700.0, 44.0], [8400.0, 61.0], [8200.0, 15.0], [8300.0, 20.0], [8500.0, 6.0], [8600.0, 32.0], [9100.0, 35.0], [8900.0, 38.0], [9200.0, 21.0], [9000.0, 28.0], [8800.0, 38.0], [9500.0, 22.0], [9300.0, 33.0], [9700.0, 36.0], [9400.0, 4.0], [9600.0, 7.0], [9900.0, 5.0], [10200.0, 39.0], [10100.0, 3.0], [10000.0, 24.0], [9800.0, 1.0], [10300.0, 59.0], [10500.0, 37.0], [10400.0, 78.0], [10600.0, 20.0], [10700.0, 31.0], [10900.0, 34.0], [11100.0, 20.0], [11500.0, 1.0], [11300.0, 6.0], [11900.0, 3.0], [11800.0, 1.0], [12000.0, 1.0], [12300.0, 2.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 69.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2719.0, "series": [{"data": [[0.0, 141.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 69.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2719.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 62.106649937264734, "minX": 1.78195176E12, "maxY": 232.74771167048053, "series": [{"data": [[1.78195188E12, 186.98697916666666], [1.78195176E12, 62.106649937264734], [1.78195182E12, 232.74771167048053]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 272 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195188E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 654.4999999999999, "minX": 1.0, "maxY": 11184.0, "series": [{"data": [[2.0, 6188.0], [3.0, 3324.5], [4.0, 3301.5], [5.0, 2346.666666666667], [6.0, 2341.333333333333], [7.0, 2311.333333333333], [8.0, 1578.8], [9.0, 1852.0], [10.0, 1403.3333333333333], [11.0, 1586.6], [12.0, 1410.1666666666665], [13.0, 1036.888888888889], [14.0, 885.8], [15.0, 952.2222222222222], [16.0, 897.1], [17.0, 854.5454545454545], [18.0, 864.7272727272727], [19.0, 872.0909090909091], [20.0, 882.909090909091], [21.0, 853.75], [22.0, 951.8000000000001], [23.0, 916.4545454545455], [24.0, 858.1538461538462], [25.0, 944.5454545454545], [26.0, 962.3636363636364], [27.0, 940.9166666666667], [28.0, 961.8333333333334], [29.0, 1064.4], [30.0, 1040.1818181818182], [31.0, 1076.9166666666665], [32.0, 654.4999999999999], [33.0, 684.0], [34.0, 722.5555555555555], [35.0, 767.625], [36.0, 809.6666666666666], [37.0, 862.125], [38.0, 912.1428571428572], [39.0, 977.875], [40.0, 1019.5], [41.0, 1087.8999999999999], [42.0, 1158.0], [43.0, 1219.6666666666665], [44.0, 1295.3333333333335], [45.0, 1361.2857142857142], [46.0, 1428.857142857143], [48.0, 1522.375], [49.0, 1642.111111111111], [51.0, 2523.4545454545455], [53.0, 6272.6923076923085], [52.0, 6378.714285714286], [54.0, 1974.9090909090908], [56.0, 2108.9166666666674], [59.0, 2306.384615384615], [62.0, 2610.666666666667], [63.0, 7667.199999999999], [66.0, 2689.0625], [69.0, 2730.2105263157896], [72.0, 2644.263157894737], [76.0, 2593.136363636363], [79.0, 4629.769230769231], [82.0, 2392.7200000000003], [85.0, 2166.346153846154], [89.0, 2251.857142857143], [93.0, 2296.9333333333334], [97.0, 2471.499999999999], [101.0, 2555.1176470588234], [106.0, 3596.651162790698], [107.0, 7850.0], [105.0, 8975.0], [111.0, 9008.666666666666], [108.0, 7850.0], [112.0, 3159.4102564102564], [113.0, 9014.5], [119.0, 3737.925], [117.0, 6232.25], [120.0, 3083.0], [121.0, 3338.0], [122.0, 6230.4], [127.0, 4156.391304347826], [126.0, 6230.75], [132.0, 6228.75], [131.0, 6230.0], [129.0, 6230.0], [136.0, 4589.086956521742], [137.0, 3965.0], [138.0, 4158.0], [142.0, 7391.6], [140.0, 6229.0], [139.0, 6230.0], [144.0, 4641.749999999999], [145.0, 3922.0], [148.0, 9520.57142857143], [151.0, 5267.0], [152.0, 4642.370370370371], [154.0, 4143.666666666667], [159.0, 5160.0], [158.0, 10926.1], [160.0, 4721.035714285713], [164.0, 4519.0], [168.0, 5237.8], [169.0, 4589.584905660377], [172.0, 4493.09090909091], [179.0, 5992.157894736842], [180.0, 4738.439024390244], [185.0, 5394.000000000001], [190.0, 6562.428571428572], [194.0, 6095.249999999999], [197.0, 6189.625], [204.0, 8927.166666666668], [208.0, 6934.666666666667], [211.0, 7649.066666666666], [215.0, 7646.400000000001], [216.0, 8308.5], [219.0, 5806.125000000001], [222.0, 6658.116279069767], [226.0, 8249.700000000003], [231.0, 7402.280000000001], [230.0, 7321.5], [227.0, 7586.142857142857], [225.0, 7436.5], [224.0, 7321.5], [233.0, 5680.873015873015], [237.0, 5821.733333333334], [235.0, 7540.5], [234.0, 7783.5], [232.0, 7632.4], [241.0, 8637.624999999998], [242.0, 8130.0], [246.0, 8030.4], [247.0, 9291.777777777777], [245.0, 11184.0], [240.0, 8910.0], [248.0, 6356.0], [252.0, 6896.9800000000005], [250.0, 9890.379310344832], [258.0, 9833.076923076924], [262.0, 9932.285714285714], [268.0, 7930.0], [269.0, 9138.716666666665], [271.0, 7647.823529411765], [272.0, 8761.203426124197], [1.0, 6211.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[180.31580744281302, 5936.493683851143]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 272.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1011.2, "minX": 1.78195176E12, "maxY": 6730.333333333333, "series": [{"data": [[1.78195188E12, 1479.2], [1.78195176E12, 3068.45], [1.78195182E12, 6730.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195188E12, 1011.2], [1.78195176E12, 2098.766666666667], [1.78195182E12, 4603.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195188E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1777.337515683816, "minX": 1.78195176E12, "maxY": 8087.992187500008, "series": [{"data": [[1.78195188E12, 8087.992187500008], [1.78195176E12, 1777.337515683816], [1.78195182E12, 7360.219107551496]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195188E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1777.3111668757867, "minX": 1.78195176E12, "maxY": 8087.98958333333, "series": [{"data": [[1.78195188E12, 8087.98958333333], [1.78195176E12, 1777.3111668757867], [1.78195182E12, 7360.207665903885]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195188E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010416666666666664, "minX": 1.78195176E12, "maxY": 0.07779171894604772, "series": [{"data": [[1.78195188E12, 0.010416666666666664], [1.78195176E12, 0.07779171894604772], [1.78195182E12, 0.05263157894736839]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195188E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 329.0, "minX": 1.78195176E12, "maxY": 620.0, "series": [{"data": [[1.78195176E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195176E12, 329.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195176E12, 567.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195176E12, 617.89]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195176E12, 462.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195176E12, 593.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195176E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 348.0, "minX": 1.0, "maxY": 10935.0, "series": [{"data": [[1.0, 511.0], [18.0, 507.0], [39.0, 348.0], [41.0, 619.0], [11.0, 482.0], [45.0, 558.0], [47.0, 427.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 4519.5], [5.0, 8237.0], [6.0, 5106.0], [7.0, 6562.0], [9.0, 6364.0], [10.0, 7646.0], [11.0, 4512.0], [12.0, 8751.0], [13.0, 8320.0], [14.0, 7393.0], [15.0, 6033.5], [16.0, 10553.0], [17.0, 5386.0], [18.0, 1736.5], [19.0, 3707.5], [22.0, 5041.0], [23.0, 2116.0], [24.0, 10643.0], [25.0, 5301.0], [26.0, 5601.5], [28.0, 8709.0], [29.0, 10429.0], [30.0, 2278.0], [31.0, 1765.5], [32.0, 4713.0], [35.0, 878.0], [34.0, 3720.0], [36.0, 2895.0], [39.0, 3403.0], [38.0, 10935.0], [41.0, 5869.0], [42.0, 4045.0], [43.0, 6107.0], [45.0, 2249.0], [46.0, 4697.0], [47.0, 8646.0], [49.0, 10240.0], [50.0, 5917.0], [52.0, 7978.0], [54.0, 4774.5], [55.0, 4850.0], [58.0, 5861.0], [60.0, 5803.5], [61.0, 9446.0], [67.0, 8728.0], [68.0, 10370.0], [78.0, 8455.0], [79.0, 5561.0], [94.0, 10003.0], [107.0, 7850.0], [137.0, 7783.0], [1.0, 9985.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 137.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 348.0, "minX": 1.0, "maxY": 10935.0, "series": [{"data": [[1.0, 509.0], [18.0, 506.5], [39.0, 348.0], [41.0, 619.0], [11.0, 482.0], [45.0, 558.0], [47.0, 427.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 4519.5], [5.0, 8237.0], [6.0, 5106.0], [7.0, 6562.0], [9.0, 6364.0], [10.0, 7646.0], [11.0, 4512.0], [12.0, 8751.0], [13.0, 8320.0], [14.0, 7393.0], [15.0, 6033.5], [16.0, 10553.0], [17.0, 5386.0], [18.0, 1736.5], [19.0, 3707.5], [22.0, 5041.0], [23.0, 2116.0], [24.0, 10643.0], [25.0, 5301.0], [26.0, 5601.5], [28.0, 8709.0], [29.0, 10429.0], [30.0, 2278.0], [31.0, 1765.5], [32.0, 4713.0], [35.0, 878.0], [34.0, 3720.0], [36.0, 2895.0], [39.0, 3403.0], [38.0, 10935.0], [41.0, 5869.0], [42.0, 4045.0], [43.0, 6107.0], [45.0, 2249.0], [46.0, 4697.0], [47.0, 8646.0], [49.0, 10240.0], [50.0, 5917.0], [52.0, 7978.0], [54.0, 4774.5], [55.0, 4850.0], [58.0, 5861.0], [60.0, 5803.5], [61.0, 9446.0], [67.0, 8728.0], [68.0, 10370.0], [78.0, 8455.0], [79.0, 5561.0], [94.0, 10003.0], [107.0, 7850.0], [137.0, 7783.0], [1.0, 9985.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 137.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.78195176E12, "maxY": 31.65, "series": [{"data": [[1.78195188E12, 1.8666666666666667], [1.78195176E12, 15.3], [1.78195182E12, 31.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195188E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.78195176E12, "maxY": 28.866666666666667, "series": [{"data": [[1.78195188E12, 6.0], [1.78195176E12, 13.283333333333333], [1.78195182E12, 28.866666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195188E12, 0.4], [1.78195182E12, 0.26666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195188E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.78195176E12, "maxY": 29.133333333333333, "series": [{"data": [[1.78195176E12, 3.5]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195188E12, 6.4], [1.78195176E12, 9.783333333333333], [1.78195182E12, 29.133333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195188E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.78195176E12, "maxY": 29.133333333333333, "series": [{"data": [[1.78195176E12, 3.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195188E12, 6.4], [1.78195176E12, 9.783333333333333], [1.78195182E12, 29.133333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195188E12, "title": "Total Transactions Per Second"}},
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

