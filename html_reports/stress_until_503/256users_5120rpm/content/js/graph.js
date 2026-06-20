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
        data: {"result": {"minY": 372.0, "minX": 0.0, "maxY": 12091.0, "series": [{"data": [[0.0, 372.0], [0.1, 375.0], [0.2, 376.0], [0.3, 378.0], [0.4, 382.0], [0.5, 383.0], [0.6, 386.0], [0.7, 387.0], [0.8, 389.0], [0.9, 390.0], [1.0, 391.0], [1.1, 394.0], [1.2, 395.0], [1.3, 398.0], [1.4, 400.0], [1.5, 402.0], [1.6, 403.0], [1.7, 404.0], [1.8, 406.0], [1.9, 410.0], [2.0, 412.0], [2.1, 413.0], [2.2, 415.0], [2.3, 417.0], [2.4, 418.0], [2.5, 421.0], [2.6, 423.0], [2.7, 424.0], [2.8, 426.0], [2.9, 427.0], [3.0, 430.0], [3.1, 430.0], [3.2, 433.0], [3.3, 433.0], [3.4, 436.0], [3.5, 438.0], [3.6, 439.0], [3.7, 441.0], [3.8, 442.0], [3.9, 445.0], [4.0, 448.0], [4.1, 451.0], [4.2, 453.0], [4.3, 455.0], [4.4, 457.0], [4.5, 459.0], [4.6, 463.0], [4.7, 469.0], [4.8, 474.0], [4.9, 480.0], [5.0, 486.0], [5.1, 491.0], [5.2, 518.0], [5.3, 526.0], [5.4, 537.0], [5.5, 542.0], [5.6, 547.0], [5.7, 555.0], [5.8, 560.0], [5.9, 565.0], [6.0, 571.0], [6.1, 579.0], [6.2, 584.0], [6.3, 591.0], [6.4, 598.0], [6.5, 610.0], [6.6, 612.0], [6.7, 623.0], [6.8, 628.0], [6.9, 633.0], [7.0, 640.0], [7.1, 646.0], [7.2, 655.0], [7.3, 671.0], [7.4, 674.0], [7.5, 681.0], [7.6, 690.0], [7.7, 705.0], [7.8, 715.0], [7.9, 725.0], [8.0, 728.0], [8.1, 736.0], [8.2, 747.0], [8.3, 759.0], [8.4, 778.0], [8.5, 797.0], [8.6, 808.0], [8.7, 820.0], [8.8, 841.0], [8.9, 866.0], [9.0, 899.0], [9.1, 917.0], [9.2, 952.0], [9.3, 982.0], [9.4, 993.0], [9.5, 1018.0], [9.6, 1070.0], [9.7, 1097.0], [9.8, 1139.0], [9.9, 1142.0], [10.0, 1162.0], [10.1, 1186.0], [10.2, 1206.0], [10.3, 1230.0], [10.4, 1260.0], [10.5, 1304.0], [10.6, 1327.0], [10.7, 1332.0], [10.8, 1385.0], [10.9, 1409.0], [11.0, 1410.0], [11.1, 1486.0], [11.2, 1486.0], [11.3, 1618.0], [11.4, 1629.0], [11.5, 1688.0], [11.6, 1710.0], [11.7, 1712.0], [11.8, 1744.0], [11.9, 1809.0], [12.0, 1896.0], [12.1, 1897.0], [12.2, 1898.0], [12.3, 1899.0], [12.4, 1933.0], [12.5, 1951.0], [12.6, 1952.0], [12.7, 1956.0], [12.8, 1958.0], [12.9, 2003.0], [13.0, 2025.0], [13.1, 2026.0], [13.2, 2026.0], [13.3, 2027.0], [13.4, 2027.0], [13.5, 2042.0], [13.6, 2045.0], [13.7, 2045.0], [13.8, 2065.0], [13.9, 2078.0], [14.0, 2078.0], [14.1, 2079.0], [14.2, 2086.0], [14.3, 2143.0], [14.4, 2143.0], [14.5, 2143.0], [14.6, 2144.0], [14.7, 2145.0], [14.8, 2145.0], [14.9, 2164.0], [15.0, 2179.0], [15.1, 2179.0], [15.2, 2194.0], [15.3, 2195.0], [15.4, 2196.0], [15.5, 2199.0], [15.6, 2200.0], [15.7, 2201.0], [15.8, 2201.0], [15.9, 2202.0], [16.0, 2202.0], [16.1, 2203.0], [16.2, 2203.0], [16.3, 2223.0], [16.4, 2225.0], [16.5, 2226.0], [16.6, 2226.0], [16.7, 2226.0], [16.8, 2226.0], [16.9, 2226.0], [17.0, 2251.0], [17.1, 2251.0], [17.2, 2255.0], [17.3, 2256.0], [17.4, 2256.0], [17.5, 2256.0], [17.6, 2257.0], [17.7, 2258.0], [17.8, 2258.0], [17.9, 2258.0], [18.0, 2270.0], [18.1, 2273.0], [18.2, 2279.0], [18.3, 2281.0], [18.4, 2300.0], [18.5, 2330.0], [18.6, 2363.0], [18.7, 2389.0], [18.8, 2399.0], [18.9, 2464.0], [19.0, 2464.0], [19.1, 2464.0], [19.2, 2464.0], [19.3, 2464.0], [19.4, 2464.0], [19.5, 2464.0], [19.6, 2466.0], [19.7, 2466.0], [19.8, 2503.0], [19.9, 2549.0], [20.0, 2553.0], [20.1, 2554.0], [20.2, 2554.0], [20.3, 2571.0], [20.4, 2571.0], [20.5, 2572.0], [20.6, 2575.0], [20.7, 2588.0], [20.8, 2588.0], [20.9, 2594.0], [21.0, 2594.0], [21.1, 2594.0], [21.2, 2596.0], [21.3, 2607.0], [21.4, 2609.0], [21.5, 2609.0], [21.6, 2609.0], [21.7, 2610.0], [21.8, 2610.0], [21.9, 2628.0], [22.0, 2635.0], [22.1, 2636.0], [22.2, 2673.0], [22.3, 2722.0], [22.4, 2723.0], [22.5, 2738.0], [22.6, 2805.0], [22.7, 2825.0], [22.8, 2826.0], [22.9, 2837.0], [23.0, 2856.0], [23.1, 2856.0], [23.2, 2856.0], [23.3, 2857.0], [23.4, 2857.0], [23.5, 2857.0], [23.6, 2857.0], [23.7, 2858.0], [23.8, 2858.0], [23.9, 2880.0], [24.0, 2890.0], [24.1, 2925.0], [24.2, 2972.0], [24.3, 3076.0], [24.4, 3077.0], [24.5, 3077.0], [24.6, 3108.0], [24.7, 3176.0], [24.8, 3177.0], [24.9, 3177.0], [25.0, 3178.0], [25.1, 3178.0], [25.2, 3178.0], [25.3, 3180.0], [25.4, 3180.0], [25.5, 3186.0], [25.6, 3188.0], [25.7, 3189.0], [25.8, 3214.0], [25.9, 3226.0], [26.0, 3227.0], [26.1, 3227.0], [26.2, 3227.0], [26.3, 3227.0], [26.4, 3227.0], [26.5, 3227.0], [26.6, 3228.0], [26.7, 3229.0], [26.8, 3290.0], [26.9, 3290.0], [27.0, 3291.0], [27.1, 3291.0], [27.2, 3291.0], [27.3, 3348.0], [27.4, 3349.0], [27.5, 3349.0], [27.6, 3349.0], [27.7, 3350.0], [27.8, 3350.0], [27.9, 3352.0], [28.0, 3373.0], [28.1, 3405.0], [28.2, 3472.0], [28.3, 3606.0], [28.4, 3631.0], [28.5, 3632.0], [28.6, 3633.0], [28.7, 3633.0], [28.8, 3633.0], [28.9, 3633.0], [29.0, 3634.0], [29.1, 3634.0], [29.2, 3639.0], [29.3, 3699.0], [29.4, 3717.0], [29.5, 3718.0], [29.6, 3741.0], [29.7, 3742.0], [29.8, 3742.0], [29.9, 3743.0], [30.0, 3743.0], [30.1, 3743.0], [30.2, 3743.0], [30.3, 3872.0], [30.4, 3898.0], [30.5, 3898.0], [30.6, 3898.0], [30.7, 3898.0], [30.8, 3899.0], [30.9, 3899.0], [31.0, 3899.0], [31.1, 3939.0], [31.2, 4005.0], [31.3, 4032.0], [31.4, 4034.0], [31.5, 4070.0], [31.6, 4072.0], [31.7, 4073.0], [31.8, 4100.0], [31.9, 4100.0], [32.0, 4100.0], [32.1, 4100.0], [32.2, 4101.0], [32.3, 4101.0], [32.4, 4101.0], [32.5, 4172.0], [32.6, 4240.0], [32.7, 4298.0], [32.8, 4298.0], [32.9, 4299.0], [33.0, 4299.0], [33.1, 4300.0], [33.2, 4300.0], [33.3, 4301.0], [33.4, 4301.0], [33.5, 4305.0], [33.6, 4411.0], [33.7, 4472.0], [33.8, 4533.0], [33.9, 4575.0], [34.0, 4581.0], [34.1, 4644.0], [34.2, 4644.0], [34.3, 4645.0], [34.4, 4645.0], [34.5, 4645.0], [34.6, 4645.0], [34.7, 4645.0], [34.8, 4646.0], [34.9, 4667.0], [35.0, 4694.0], [35.1, 4694.0], [35.2, 4694.0], [35.3, 4694.0], [35.4, 4695.0], [35.5, 4695.0], [35.6, 4734.0], [35.7, 4742.0], [35.8, 4743.0], [35.9, 4744.0], [36.0, 4744.0], [36.1, 4744.0], [36.2, 4744.0], [36.3, 4744.0], [36.4, 4746.0], [36.5, 4775.0], [36.6, 4886.0], [36.7, 4890.0], [36.8, 4890.0], [36.9, 4890.0], [37.0, 4890.0], [37.1, 4891.0], [37.2, 4891.0], [37.3, 4892.0], [37.4, 4910.0], [37.5, 4918.0], [37.6, 4919.0], [37.7, 4919.0], [37.8, 4920.0], [37.9, 4920.0], [38.0, 4920.0], [38.1, 4921.0], [38.2, 4949.0], [38.3, 4952.0], [38.4, 5118.0], [38.5, 5137.0], [38.6, 5137.0], [38.7, 5144.0], [38.8, 5145.0], [38.9, 5163.0], [39.0, 5164.0], [39.1, 5223.0], [39.2, 5268.0], [39.3, 5269.0], [39.4, 5281.0], [39.5, 5281.0], [39.6, 5281.0], [39.7, 5281.0], [39.8, 5283.0], [39.9, 5284.0], [40.0, 5374.0], [40.1, 5435.0], [40.2, 5469.0], [40.3, 5477.0], [40.4, 5506.0], [40.5, 5516.0], [40.6, 5517.0], [40.7, 5517.0], [40.8, 5517.0], [40.9, 5517.0], [41.0, 5517.0], [41.1, 5517.0], [41.2, 5517.0], [41.3, 5539.0], [41.4, 5581.0], [41.5, 5607.0], [41.6, 5607.0], [41.7, 5609.0], [41.8, 5618.0], [41.9, 5618.0], [42.0, 5619.0], [42.1, 5683.0], [42.2, 5684.0], [42.3, 5692.0], [42.4, 5718.0], [42.5, 5719.0], [42.6, 5719.0], [42.7, 5728.0], [42.8, 5803.0], [42.9, 5804.0], [43.0, 5811.0], [43.1, 5812.0], [43.2, 5812.0], [43.3, 5812.0], [43.4, 5813.0], [43.5, 5831.0], [43.6, 5864.0], [43.7, 5864.0], [43.8, 5865.0], [43.9, 5866.0], [44.0, 5907.0], [44.1, 5946.0], [44.2, 5949.0], [44.3, 5968.0], [44.4, 5990.0], [44.5, 5990.0], [44.6, 5991.0], [44.7, 5992.0], [44.8, 6001.0], [44.9, 6001.0], [45.0, 6002.0], [45.1, 6010.0], [45.2, 6010.0], [45.3, 6010.0], [45.4, 6010.0], [45.5, 6048.0], [45.6, 6079.0], [45.7, 6080.0], [45.8, 6082.0], [45.9, 6083.0], [46.0, 6083.0], [46.1, 6098.0], [46.2, 6098.0], [46.3, 6099.0], [46.4, 6104.0], [46.5, 6124.0], [46.6, 6124.0], [46.7, 6124.0], [46.8, 6125.0], [46.9, 6134.0], [47.0, 6143.0], [47.1, 6160.0], [47.2, 6169.0], [47.3, 6180.0], [47.4, 6180.0], [47.5, 6201.0], [47.6, 6201.0], [47.7, 6202.0], [47.8, 6210.0], [47.9, 6221.0], [48.0, 6246.0], [48.1, 6247.0], [48.2, 6247.0], [48.3, 6268.0], [48.4, 6268.0], [48.5, 6269.0], [48.6, 6270.0], [48.7, 6271.0], [48.8, 6272.0], [48.9, 6314.0], [49.0, 6326.0], [49.1, 6327.0], [49.2, 6327.0], [49.3, 6327.0], [49.4, 6327.0], [49.5, 6327.0], [49.6, 6328.0], [49.7, 6328.0], [49.8, 6328.0], [49.9, 6329.0], [50.0, 6353.0], [50.1, 6393.0], [50.2, 6408.0], [50.3, 6409.0], [50.4, 6409.0], [50.5, 6410.0], [50.6, 6410.0], [50.7, 6410.0], [50.8, 6410.0], [50.9, 6410.0], [51.0, 6410.0], [51.1, 6410.0], [51.2, 6410.0], [51.3, 6411.0], [51.4, 6411.0], [51.5, 6412.0], [51.6, 6413.0], [51.7, 6438.0], [51.8, 6461.0], [51.9, 6470.0], [52.0, 6471.0], [52.1, 6472.0], [52.2, 6472.0], [52.3, 6472.0], [52.4, 6472.0], [52.5, 6472.0], [52.6, 6473.0], [52.7, 6474.0], [52.8, 6474.0], [52.9, 6475.0], [53.0, 6475.0], [53.1, 6476.0], [53.2, 6477.0], [53.3, 6479.0], [53.4, 6480.0], [53.5, 6480.0], [53.6, 6480.0], [53.7, 6480.0], [53.8, 6480.0], [53.9, 6480.0], [54.0, 6487.0], [54.1, 6488.0], [54.2, 6489.0], [54.3, 6489.0], [54.4, 6489.0], [54.5, 6490.0], [54.6, 6490.0], [54.7, 6490.0], [54.8, 6491.0], [54.9, 6491.0], [55.0, 6491.0], [55.1, 6491.0], [55.2, 6491.0], [55.3, 6491.0], [55.4, 6491.0], [55.5, 6492.0], [55.6, 6493.0], [55.7, 6493.0], [55.8, 6493.0], [55.9, 6494.0], [56.0, 6495.0], [56.1, 6501.0], [56.2, 6503.0], [56.3, 6503.0], [56.4, 6504.0], [56.5, 6504.0], [56.6, 6505.0], [56.7, 6505.0], [56.8, 6505.0], [56.9, 6505.0], [57.0, 6505.0], [57.1, 6508.0], [57.2, 6536.0], [57.3, 6536.0], [57.4, 6536.0], [57.5, 6537.0], [57.6, 6537.0], [57.7, 6538.0], [57.8, 6538.0], [57.9, 6543.0], [58.0, 6544.0], [58.1, 6545.0], [58.2, 6545.0], [58.3, 6546.0], [58.4, 6547.0], [58.5, 6564.0], [58.6, 6565.0], [58.7, 6567.0], [58.8, 6579.0], [58.9, 6579.0], [59.0, 6579.0], [59.1, 6579.0], [59.2, 6580.0], [59.3, 6580.0], [59.4, 6583.0], [59.5, 6584.0], [59.6, 6584.0], [59.7, 6584.0], [59.8, 6607.0], [59.9, 6622.0], [60.0, 6622.0], [60.1, 6622.0], [60.2, 6623.0], [60.3, 6623.0], [60.4, 6625.0], [60.5, 6625.0], [60.6, 6625.0], [60.7, 6626.0], [60.8, 6628.0], [60.9, 6628.0], [61.0, 6629.0], [61.1, 6653.0], [61.2, 6654.0], [61.3, 6656.0], [61.4, 6656.0], [61.5, 6656.0], [61.6, 6658.0], [61.7, 6672.0], [61.8, 6673.0], [61.9, 6673.0], [62.0, 6675.0], [62.1, 6689.0], [62.2, 6696.0], [62.3, 6703.0], [62.4, 6751.0], [62.5, 6794.0], [62.6, 6796.0], [62.7, 6796.0], [62.8, 6796.0], [62.9, 6796.0], [63.0, 6796.0], [63.1, 6797.0], [63.2, 6797.0], [63.3, 6797.0], [63.4, 6797.0], [63.5, 6797.0], [63.6, 6797.0], [63.7, 6797.0], [63.8, 6798.0], [63.9, 6798.0], [64.0, 6798.0], [64.1, 6798.0], [64.2, 6798.0], [64.3, 6798.0], [64.4, 6799.0], [64.5, 6799.0], [64.6, 6799.0], [64.7, 6799.0], [64.8, 6799.0], [64.9, 6799.0], [65.0, 6799.0], [65.1, 6799.0], [65.2, 6800.0], [65.3, 6800.0], [65.4, 6800.0], [65.5, 6800.0], [65.6, 6801.0], [65.7, 6801.0], [65.8, 6801.0], [65.9, 6801.0], [66.0, 6801.0], [66.1, 6802.0], [66.2, 6802.0], [66.3, 6802.0], [66.4, 6802.0], [66.5, 6802.0], [66.6, 6802.0], [66.7, 6803.0], [66.8, 6803.0], [66.9, 6804.0], [67.0, 6804.0], [67.1, 6805.0], [67.2, 6806.0], [67.3, 6806.0], [67.4, 6820.0], [67.5, 6822.0], [67.6, 6822.0], [67.7, 6823.0], [67.8, 6869.0], [67.9, 6904.0], [68.0, 6904.0], [68.1, 6905.0], [68.2, 6924.0], [68.3, 6933.0], [68.4, 6934.0], [68.5, 6936.0], [68.6, 6952.0], [68.7, 6952.0], [68.8, 6954.0], [68.9, 6954.0], [69.0, 6955.0], [69.1, 6955.0], [69.2, 6955.0], [69.3, 6965.0], [69.4, 6984.0], [69.5, 6985.0], [69.6, 7021.0], [69.7, 7022.0], [69.8, 7023.0], [69.9, 7023.0], [70.0, 7023.0], [70.1, 7023.0], [70.2, 7026.0], [70.3, 7027.0], [70.4, 7027.0], [70.5, 7029.0], [70.6, 7030.0], [70.7, 7030.0], [70.8, 7030.0], [70.9, 7030.0], [71.0, 7037.0], [71.1, 7050.0], [71.2, 7052.0], [71.3, 7053.0], [71.4, 7056.0], [71.5, 7057.0], [71.6, 7078.0], [71.7, 7078.0], [71.8, 7081.0], [71.9, 7083.0], [72.0, 7101.0], [72.1, 7103.0], [72.2, 7103.0], [72.3, 7103.0], [72.4, 7103.0], [72.5, 7104.0], [72.6, 7104.0], [72.7, 7104.0], [72.8, 7104.0], [72.9, 7105.0], [73.0, 7105.0], [73.1, 7106.0], [73.2, 7119.0], [73.3, 7120.0], [73.4, 7121.0], [73.5, 7122.0], [73.6, 7122.0], [73.7, 7170.0], [73.8, 7170.0], [73.9, 7170.0], [74.0, 7172.0], [74.1, 7172.0], [74.2, 7173.0], [74.3, 7251.0], [74.4, 7252.0], [74.5, 7253.0], [74.6, 7254.0], [74.7, 7273.0], [74.8, 7291.0], [74.9, 7307.0], [75.0, 7308.0], [75.1, 7309.0], [75.2, 7310.0], [75.3, 7310.0], [75.4, 7310.0], [75.5, 7310.0], [75.6, 7311.0], [75.7, 7311.0], [75.8, 7311.0], [75.9, 7311.0], [76.0, 7312.0], [76.1, 7313.0], [76.2, 7314.0], [76.3, 7370.0], [76.4, 7414.0], [76.5, 7414.0], [76.6, 7415.0], [76.7, 7415.0], [76.8, 7429.0], [76.9, 7429.0], [77.0, 7429.0], [77.1, 7437.0], [77.2, 7437.0], [77.3, 7444.0], [77.4, 7455.0], [77.5, 7456.0], [77.6, 7457.0], [77.7, 7458.0], [77.8, 7458.0], [77.9, 7459.0], [78.0, 7459.0], [78.1, 7459.0], [78.2, 7459.0], [78.3, 7459.0], [78.4, 7459.0], [78.5, 7460.0], [78.6, 7461.0], [78.7, 7461.0], [78.8, 7463.0], [78.9, 7463.0], [79.0, 7473.0], [79.1, 7474.0], [79.2, 7475.0], [79.3, 7475.0], [79.4, 7506.0], [79.5, 7549.0], [79.6, 7609.0], [79.7, 7616.0], [79.8, 7618.0], [79.9, 7619.0], [80.0, 7619.0], [80.1, 7619.0], [80.2, 7619.0], [80.3, 7619.0], [80.4, 7619.0], [80.5, 7620.0], [80.6, 7621.0], [80.7, 7621.0], [80.8, 7622.0], [80.9, 7622.0], [81.0, 7622.0], [81.1, 7622.0], [81.2, 7622.0], [81.3, 7623.0], [81.4, 7623.0], [81.5, 7623.0], [81.6, 7623.0], [81.7, 7623.0], [81.8, 7623.0], [81.9, 7623.0], [82.0, 7624.0], [82.1, 7624.0], [82.2, 7625.0], [82.3, 7626.0], [82.4, 7627.0], [82.5, 7634.0], [82.6, 7635.0], [82.7, 7636.0], [82.8, 7637.0], [82.9, 7638.0], [83.0, 7640.0], [83.1, 7726.0], [83.2, 7747.0], [83.3, 7850.0], [83.4, 7975.0], [83.5, 8025.0], [83.6, 8033.0], [83.7, 8035.0], [83.8, 8036.0], [83.9, 8138.0], [84.0, 8149.0], [84.1, 8161.0], [84.2, 8182.0], [84.3, 8337.0], [84.4, 8337.0], [84.5, 8338.0], [84.6, 8338.0], [84.7, 8338.0], [84.8, 8338.0], [84.9, 8339.0], [85.0, 8351.0], [85.1, 8351.0], [85.2, 8354.0], [85.3, 8355.0], [85.4, 8371.0], [85.5, 8372.0], [85.6, 8372.0], [85.7, 8407.0], [85.8, 8418.0], [85.9, 8436.0], [86.0, 8436.0], [86.1, 8437.0], [86.2, 8437.0], [86.3, 8439.0], [86.4, 8439.0], [86.5, 8511.0], [86.6, 8567.0], [86.7, 8570.0], [86.8, 8647.0], [86.9, 8701.0], [87.0, 8702.0], [87.1, 8702.0], [87.2, 8702.0], [87.3, 8703.0], [87.4, 8711.0], [87.5, 8711.0], [87.6, 8730.0], [87.7, 8844.0], [87.8, 8858.0], [87.9, 8908.0], [88.0, 8916.0], [88.1, 8970.0], [88.2, 8971.0], [88.3, 8980.0], [88.4, 8980.0], [88.5, 8981.0], [88.6, 8981.0], [88.7, 8988.0], [88.8, 9096.0], [88.9, 9096.0], [89.0, 9107.0], [89.1, 9109.0], [89.2, 9110.0], [89.3, 9136.0], [89.4, 9137.0], [89.5, 9139.0], [89.6, 9191.0], [89.7, 9203.0], [89.8, 9217.0], [89.9, 9219.0], [90.0, 9232.0], [90.1, 9232.0], [90.2, 9320.0], [90.3, 9437.0], [90.4, 9495.0], [90.5, 9547.0], [90.6, 9588.0], [90.7, 9633.0], [90.8, 9669.0], [90.9, 9687.0], [91.0, 9688.0], [91.1, 9746.0], [91.2, 9746.0], [91.3, 9747.0], [91.4, 9758.0], [91.5, 9758.0], [91.6, 9758.0], [91.7, 9881.0], [91.8, 9883.0], [91.9, 9883.0], [92.0, 9883.0], [92.1, 9884.0], [92.2, 9884.0], [92.3, 9884.0], [92.4, 9972.0], [92.5, 9974.0], [92.6, 9974.0], [92.7, 9975.0], [92.8, 9976.0], [92.9, 9976.0], [93.0, 10061.0], [93.1, 10063.0], [93.2, 10063.0], [93.3, 10063.0], [93.4, 10064.0], [93.5, 10064.0], [93.6, 10136.0], [93.7, 10137.0], [93.8, 10138.0], [93.9, 10138.0], [94.0, 10138.0], [94.1, 10142.0], [94.2, 10160.0], [94.3, 10161.0], [94.4, 10161.0], [94.5, 10162.0], [94.6, 10162.0], [94.7, 10163.0], [94.8, 10163.0], [94.9, 10164.0], [95.0, 10165.0], [95.1, 10201.0], [95.2, 10201.0], [95.3, 10203.0], [95.4, 10204.0], [95.5, 10204.0], [95.6, 10207.0], [95.7, 10210.0], [95.8, 10211.0], [95.9, 10219.0], [96.0, 10219.0], [96.1, 10219.0], [96.2, 10220.0], [96.3, 10220.0], [96.4, 10220.0], [96.5, 10220.0], [96.6, 10221.0], [96.7, 10221.0], [96.8, 10328.0], [96.9, 10355.0], [97.0, 10419.0], [97.1, 10460.0], [97.2, 10607.0], [97.3, 10607.0], [97.4, 10608.0], [97.5, 10608.0], [97.6, 10613.0], [97.7, 10613.0], [97.8, 10614.0], [97.9, 10614.0], [98.0, 10614.0], [98.1, 10614.0], [98.2, 10614.0], [98.3, 11039.0], [98.4, 11045.0], [98.5, 11058.0], [98.6, 11058.0], [98.7, 11058.0], [98.8, 11058.0], [98.9, 11059.0], [99.0, 11059.0], [99.1, 11060.0], [99.2, 11060.0], [99.3, 11109.0], [99.4, 11109.0], [99.5, 11110.0], [99.6, 11110.0], [99.7, 11201.0], [99.8, 12087.0], [99.9, 12088.0], [100.0, 12091.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 179.0, "series": [{"data": [[300.0, 41.0], [400.0, 114.0], [500.0, 39.0], [600.0, 36.0], [700.0, 28.0], [800.0, 16.0], [900.0, 11.0], [1000.0, 11.0], [1100.0, 11.0], [1200.0, 10.0], [1300.0, 12.0], [1400.0, 10.0], [1500.0, 1.0], [1600.0, 9.0], [1700.0, 9.0], [1800.0, 15.0], [1900.0, 16.0], [2000.0, 42.0], [2100.0, 40.0], [2200.0, 84.0], [2300.0, 14.0], [2400.0, 29.0], [2500.0, 45.0], [2600.0, 31.0], [2800.0, 44.0], [2700.0, 9.0], [2900.0, 5.0], [3000.0, 11.0], [3100.0, 35.0], [3200.0, 45.0], [3300.0, 26.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 32.0], [3700.0, 28.0], [3800.0, 23.0], [3900.0, 4.0], [4000.0, 18.0], [4200.0, 17.0], [4300.0, 16.0], [4100.0, 23.0], [4600.0, 44.0], [4500.0, 10.0], [4400.0, 4.0], [4800.0, 26.0], [4700.0, 30.0], [4900.0, 31.0], [5100.0, 21.0], [5200.0, 26.0], [5300.0, 3.0], [5500.0, 33.0], [5600.0, 26.0], [5400.0, 10.0], [5800.0, 37.0], [5700.0, 12.0], [5900.0, 23.0], [6100.0, 33.0], [6000.0, 49.0], [6300.0, 38.0], [6200.0, 44.0], [6500.0, 112.0], [6600.0, 76.0], [6400.0, 179.0], [6900.0, 52.0], [6700.0, 87.0], [6800.0, 81.0], [7100.0, 68.0], [7000.0, 73.0], [7400.0, 91.0], [7300.0, 47.0], [7200.0, 19.0], [7600.0, 105.0], [7500.0, 5.0], [7900.0, 5.0], [7700.0, 7.0], [7800.0, 2.0], [8000.0, 10.0], [8100.0, 13.0], [8400.0, 24.0], [8600.0, 4.0], [8300.0, 42.0], [8500.0, 8.0], [8700.0, 24.0], [8200.0, 1.0], [8800.0, 6.0], [9000.0, 8.0], [9200.0, 13.0], [9100.0, 21.0], [8900.0, 26.0], [9700.0, 19.0], [9600.0, 14.0], [9300.0, 5.0], [9400.0, 5.0], [9500.0, 5.0], [10100.0, 44.0], [9800.0, 20.0], [9900.0, 19.0], [10000.0, 18.0], [10200.0, 52.0], [10400.0, 6.0], [10300.0, 7.0], [10700.0, 2.0], [10600.0, 31.0], [11100.0, 12.0], [11000.0, 30.0], [11200.0, 3.0], [12000.0, 7.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2823.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2823.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.184466019417474, "minX": 1.78195164E12, "maxY": 232.09905660377333, "series": [{"data": [[1.7819517E12, 157.71615472127414], [1.78195176E12, 232.09905660377333], [1.78195164E12, 19.184466019417474]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 256 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195176E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 379.5, "minX": 3.0, "maxY": 10614.0, "series": [{"data": [[3.0, 422.0], [4.0, 379.5], [5.0, 381.0], [6.0, 380.5], [7.0, 386.0], [8.0, 389.2], [9.0, 395.25], [10.0, 400.8], [11.0, 408.8333333333333], [12.0, 416.5], [13.0, 425.0], [14.0, 433.2857142857143], [15.0, 432.0], [16.0, 444.375], [17.0, 434.2], [18.0, 381.25], [19.0, 393.3333333333333], [20.0, 408.44444444444446], [21.0, 878.2142857142858], [22.0, 440.0], [23.0, 944.6923076923077], [24.0, 475.375], [25.0, 489.83333333333337], [26.0, 593.4705882352943], [27.0, 541.0], [28.0, 571.5714285714284], [29.0, 595.2222222222222], [30.0, 1647.6666666666665], [31.0, 642.7500000000001], [32.0, 679.5], [33.0, 707.0], [34.0, 740.2307692307693], [35.0, 1341.181818181818], [36.0, 834.5714285714286], [38.0, 954.6153846153848], [39.0, 981.0], [40.0, 1108.7777777777778], [41.0, 1271.6666666666667], [42.0, 1200.75], [43.0, 1180.2500000000002], [45.0, 1388.857142857143], [47.0, 1602.4285714285716], [48.0, 1564.2222222222222], [50.0, 2281.1111111111113], [53.0, 2513.833333333333], [52.0, 6801.0], [54.0, 2521.6666666666665], [55.0, 6803.333333333333], [57.0, 2131.6666666666665], [56.0, 6806.0], [59.0, 8709.75], [60.0, 2436.6428571428573], [62.0, 2366.7142857142853], [65.0, 2592.235294117647], [68.0, 2421.9411764705887], [71.0, 2371.9], [69.0, 10614.0], [74.0, 2669.190476190476], [76.0, 2289.1000000000004], [77.0, 2087.0], [79.0, 2433.7083333333335], [83.0, 3447.3870967741946], [82.0, 8706.75], [81.0, 8163.4285714285725], [86.0, 3909.342857142857], [85.0, 8072.666666666667], [89.0, 2834.375], [88.0, 6802.0], [92.0, 2266.566666666667], [96.0, 2420.967741935484], [101.0, 2748.323529411765], [103.0, 6800.0], [106.0, 3061.361111111111], [107.0, 2389.0], [105.0, 6801.0], [111.0, 6798.0], [110.0, 6798.0], [112.0, 3351.684210526316], [114.0, 6798.0], [119.0, 3908.5714285714294], [121.0, 5086.0], [123.0, 6801.0], [126.0, 4132.311111111111], [133.0, 4144.6530612244915], [135.0, 6797.25], [134.0, 6797.833333333333], [132.0, 6798.5], [131.0, 6798.0], [140.0, 4163.4150943396235], [142.0, 4732.333333333333], [143.0, 6799.0], [141.0, 6799.0], [139.0, 6798.8], [138.0, 6798.666666666667], [137.0, 6798.0], [147.0, 4179.288461538462], [148.0, 3559.0], [144.0, 6800.0], [152.0, 4411.0], [155.0, 4874.552631578946], [156.0, 3742.5789473684213], [159.0, 5464.6], [158.0, 6800.0], [157.0, 6798.0], [153.0, 6800.0], [162.0, 5271.0], [163.0, 5539.0], [164.0, 4677.210526315787], [160.0, 10609.0], [168.0, 7108.461538461538], [172.0, 6189.333333333333], [173.0, 4896.183333333334], [171.0, 7585.241379310345], [170.0, 9336.666666666666], [169.0, 6796.0], [177.0, 5136.666666666667], [182.0, 6148.0], [183.0, 6409.333333333333], [178.0, 6495.0], [176.0, 6494.0], [184.0, 5501.692307692306], [186.0, 5154.1], [190.0, 6079.875], [188.0, 6493.0], [193.0, 7828.692307692308], [194.0, 7410.5], [196.0, 5823.372093023257], [199.0, 6101.636363636364], [198.0, 6493.0], [202.0, 6699.333333333333], [203.0, 8637.136363636364], [204.0, 7255.5], [206.0, 7607.5], [201.0, 6494.0], [208.0, 5747.615384615385], [210.0, 6184.799999999999], [215.0, 8087.666666666664], [214.0, 6489.0], [213.0, 6492.166666666667], [216.0, 6121.0], [220.0, 5973.633333333332], [222.0, 6195.523809523809], [224.0, 6701.382352941176], [226.0, 6020.0], [231.0, 6672.285714285715], [230.0, 6490.200000000002], [229.0, 6488.833333333333], [233.0, 7050.666666666667], [235.0, 8203.199999999999], [236.0, 6483.837837837838], [237.0, 6165.0], [239.0, 10098.75], [240.0, 6331.65], [242.0, 8832.36363636364], [248.0, 6471.666666666667], [250.0, 8042.2631578947385], [252.0, 7160.833333333334], [253.0, 6688.5], [256.0, 7890.239212007501]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[174.35251322751296, 5542.1114417989575]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 256.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 542.4666666666667, "minX": 1.78195164E12, "maxY": 6768.833333333333, "series": [{"data": [[1.7819517E12, 6768.833333333333], [1.78195176E12, 4086.3333333333335], [1.78195164E12, 793.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7819517E12, 4629.4], [1.78195176E12, 2791.3333333333335], [1.78195164E12, 542.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195176E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 461.1844660194174, "minX": 1.78195164E12, "maxY": 7764.944339622645, "series": [{"data": [[1.7819517E12, 4797.2127417519905], [1.78195176E12, 7764.944339622645], [1.78195164E12, 461.1844660194174]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195176E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 461.1504854368934, "minX": 1.78195164E12, "maxY": 7764.933018867934, "series": [{"data": [[1.7819517E12, 4797.193401592721], [1.78195176E12, 7764.933018867934], [1.78195164E12, 461.1504854368934]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195176E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.046226415094339564, "minX": 1.78195164E12, "maxY": 0.1504854368932039, "series": [{"data": [[1.7819517E12, 0.056882821387940895], [1.78195176E12, 0.046226415094339564], [1.78195164E12, 0.1504854368932039]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195176E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 372.0, "minX": 1.78195164E12, "maxY": 615.0, "series": [{"data": [[1.7819517E12, 615.0], [1.78195164E12, 612.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7819517E12, 611.0], [1.78195164E12, 372.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7819517E12, 615.0], [1.78195164E12, 565.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7819517E12, 615.0], [1.78195164E12, 611.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7819517E12, 613.0], [1.78195164E12, 433.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7819517E12, 615.0], [1.78195164E12, 590.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819517E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 384.0, "minX": 1.0, "maxY": 11109.0, "series": [{"data": [[2.0, 422.0], [34.0, 613.0], [40.0, 456.0], [22.0, 405.0], [46.0, 403.0], [50.0, 564.0], [15.0, 384.0], [31.0, 433.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 3698.0], [3.0, 5942.0], [4.0, 5549.5], [6.0, 5137.0], [7.0, 9109.0], [8.0, 6079.5], [10.0, 6804.0], [11.0, 9219.0], [12.0, 2179.0], [17.0, 5719.0], [18.0, 11109.0], [19.0, 9437.0], [20.0, 2594.0], [22.0, 2079.0], [23.0, 2027.0], [24.0, 1658.5], [25.0, 4462.0], [26.0, 1205.0], [27.0, 8351.0], [28.0, 2251.0], [29.0, 5804.0], [30.0, 4734.5], [31.0, 3999.0], [34.0, 2571.5], [36.0, 3227.0], [37.0, 5517.0], [38.0, 3632.5], [41.0, 8338.0], [42.0, 2951.5], [45.0, 4643.0], [44.0, 6410.0], [49.0, 5145.0], [50.0, 671.0], [51.0, 4472.0], [53.0, 6583.0], [55.0, 5177.5], [54.0, 4258.0], [57.0, 4444.0], [59.0, 4500.0], [62.0, 4404.0], [85.0, 6491.0], [95.0, 7309.0], [102.0, 7122.0], [105.0, 7104.0], [104.0, 6579.5], [136.0, 7021.5], [140.0, 7623.0], [171.0, 6800.0], [1.0, 3892.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 171.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 384.0, "minX": 1.0, "maxY": 11109.0, "series": [{"data": [[2.0, 420.5], [34.0, 613.0], [40.0, 456.0], [22.0, 405.0], [46.0, 403.0], [50.0, 564.0], [15.0, 384.0], [31.0, 433.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 3698.0], [3.0, 5942.0], [4.0, 5549.0], [6.0, 5137.0], [7.0, 9109.0], [8.0, 6079.5], [10.0, 6804.0], [11.0, 9219.0], [12.0, 2179.0], [17.0, 5719.0], [18.0, 11109.0], [19.0, 9437.0], [20.0, 2594.0], [22.0, 2079.0], [23.0, 2027.0], [24.0, 1658.5], [25.0, 4462.0], [26.0, 1205.0], [27.0, 8351.0], [28.0, 2251.0], [29.0, 5804.0], [30.0, 4734.5], [31.0, 3999.0], [34.0, 2571.5], [36.0, 3227.0], [37.0, 5517.0], [38.0, 3632.5], [41.0, 8338.0], [42.0, 2951.5], [45.0, 4643.0], [44.0, 6410.0], [49.0, 5145.0], [50.0, 671.0], [51.0, 4472.0], [53.0, 6583.0], [55.0, 5177.5], [54.0, 4258.0], [57.0, 4444.0], [59.0, 4500.0], [62.0, 4404.0], [85.0, 6491.0], [95.0, 7309.0], [102.0, 7122.0], [105.0, 7104.0], [104.0, 6579.5], [136.0, 7021.5], [140.0, 7623.0], [171.0, 6800.0], [1.0, 3892.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 171.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.933333333333333, "minX": 1.78195164E12, "maxY": 33.06666666666667, "series": [{"data": [[1.7819517E12, 33.06666666666667], [1.78195176E12, 13.4], [1.78195164E12, 3.933333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195176E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.78195164E12, "maxY": 29.033333333333335, "series": [{"data": [[1.7819517E12, 29.033333333333335], [1.78195176E12, 15.0], [1.78195164E12, 3.433333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7819517E12, 0.26666666666666666], [1.78195176E12, 2.6666666666666665]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195176E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78195164E12, "maxY": 29.266666666666666, "series": [{"data": [[1.7819517E12, 0.03333333333333333], [1.78195164E12, 3.316666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7819517E12, 29.266666666666666], [1.78195176E12, 17.666666666666668], [1.78195164E12, 0.11666666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195176E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78195164E12, "maxY": 29.266666666666666, "series": [{"data": [[1.7819517E12, 0.03333333333333333], [1.78195164E12, 3.316666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7819517E12, 29.266666666666666], [1.78195176E12, 17.666666666666668], [1.78195164E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195176E12, "title": "Total Transactions Per Second"}},
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

