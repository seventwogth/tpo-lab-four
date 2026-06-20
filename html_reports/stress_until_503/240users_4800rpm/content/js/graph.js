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
        data: {"result": {"minY": 319.0, "minX": 0.0, "maxY": 12175.0, "series": [{"data": [[0.0, 319.0], [0.1, 321.0], [0.2, 324.0], [0.3, 327.0], [0.4, 330.0], [0.5, 333.0], [0.6, 335.0], [0.7, 337.0], [0.8, 341.0], [0.9, 345.0], [1.0, 346.0], [1.1, 349.0], [1.2, 352.0], [1.3, 355.0], [1.4, 357.0], [1.5, 360.0], [1.6, 363.0], [1.7, 367.0], [1.8, 368.0], [1.9, 372.0], [2.0, 376.0], [2.1, 381.0], [2.2, 384.0], [2.3, 386.0], [2.4, 389.0], [2.5, 394.0], [2.6, 399.0], [2.7, 401.0], [2.8, 405.0], [2.9, 409.0], [3.0, 415.0], [3.1, 418.0], [3.2, 422.0], [3.3, 426.0], [3.4, 428.0], [3.5, 432.0], [3.6, 433.0], [3.7, 436.0], [3.8, 438.0], [3.9, 443.0], [4.0, 444.0], [4.1, 446.0], [4.2, 447.0], [4.3, 451.0], [4.4, 453.0], [4.5, 455.0], [4.6, 460.0], [4.7, 463.0], [4.8, 465.0], [4.9, 468.0], [5.0, 477.0], [5.1, 482.0], [5.2, 485.0], [5.3, 490.0], [5.4, 492.0], [5.5, 499.0], [5.6, 506.0], [5.7, 512.0], [5.8, 516.0], [5.9, 528.0], [6.0, 530.0], [6.1, 536.0], [6.2, 541.0], [6.3, 549.0], [6.4, 557.0], [6.5, 562.0], [6.6, 569.0], [6.7, 580.0], [6.8, 588.0], [6.9, 596.0], [7.0, 606.0], [7.1, 610.0], [7.2, 616.0], [7.3, 623.0], [7.4, 635.0], [7.5, 646.0], [7.6, 652.0], [7.7, 658.0], [7.8, 669.0], [7.9, 682.0], [8.0, 687.0], [8.1, 695.0], [8.2, 704.0], [8.3, 719.0], [8.4, 728.0], [8.5, 737.0], [8.6, 747.0], [8.7, 762.0], [8.8, 769.0], [8.9, 780.0], [9.0, 796.0], [9.1, 810.0], [9.2, 821.0], [9.3, 842.0], [9.4, 851.0], [9.5, 870.0], [9.6, 883.0], [9.7, 908.0], [9.8, 917.0], [9.9, 939.0], [10.0, 982.0], [10.1, 1015.0], [10.2, 1022.0], [10.3, 1038.0], [10.4, 1071.0], [10.5, 1109.0], [10.6, 1131.0], [10.7, 1145.0], [10.8, 1173.0], [10.9, 1175.0], [11.0, 1232.0], [11.1, 1298.0], [11.2, 1316.0], [11.3, 1343.0], [11.4, 1390.0], [11.5, 1406.0], [11.6, 1417.0], [11.7, 1451.0], [11.8, 1492.0], [11.9, 1591.0], [12.0, 1605.0], [12.1, 1612.0], [12.2, 1612.0], [12.3, 1656.0], [12.4, 1684.0], [12.5, 1689.0], [12.6, 1690.0], [12.7, 1701.0], [12.8, 1721.0], [12.9, 1754.0], [13.0, 1756.0], [13.1, 1781.0], [13.2, 1815.0], [13.3, 1834.0], [13.4, 1853.0], [13.5, 1853.0], [13.6, 1853.0], [13.7, 1853.0], [13.8, 1853.0], [13.9, 1853.0], [14.0, 1853.0], [14.1, 1853.0], [14.2, 1855.0], [14.3, 1865.0], [14.4, 1866.0], [14.5, 1866.0], [14.6, 1866.0], [14.7, 1866.0], [14.8, 1867.0], [14.9, 1881.0], [15.0, 1883.0], [15.1, 1899.0], [15.2, 1929.0], [15.3, 1929.0], [15.4, 1930.0], [15.5, 1931.0], [15.6, 1931.0], [15.7, 1931.0], [15.8, 1958.0], [15.9, 2002.0], [16.0, 2065.0], [16.1, 2081.0], [16.2, 2081.0], [16.3, 2102.0], [16.4, 2107.0], [16.5, 2109.0], [16.6, 2139.0], [16.7, 2141.0], [16.8, 2147.0], [16.9, 2197.0], [17.0, 2197.0], [17.1, 2199.0], [17.2, 2199.0], [17.3, 2200.0], [17.4, 2217.0], [17.5, 2218.0], [17.6, 2218.0], [17.7, 2218.0], [17.8, 2219.0], [17.9, 2219.0], [18.0, 2220.0], [18.1, 2220.0], [18.2, 2220.0], [18.3, 2221.0], [18.4, 2245.0], [18.5, 2246.0], [18.6, 2246.0], [18.7, 2246.0], [18.8, 2249.0], [18.9, 2249.0], [19.0, 2249.0], [19.1, 2251.0], [19.2, 2251.0], [19.3, 2251.0], [19.4, 2253.0], [19.5, 2286.0], [19.6, 2288.0], [19.7, 2289.0], [19.8, 2290.0], [19.9, 2292.0], [20.0, 2293.0], [20.1, 2294.0], [20.2, 2295.0], [20.3, 2311.0], [20.4, 2311.0], [20.5, 2316.0], [20.6, 2355.0], [20.7, 2369.0], [20.8, 2371.0], [20.9, 2371.0], [21.0, 2373.0], [21.1, 2417.0], [21.2, 2419.0], [21.3, 2419.0], [21.4, 2420.0], [21.5, 2448.0], [21.6, 2448.0], [21.7, 2448.0], [21.8, 2449.0], [21.9, 2449.0], [22.0, 2449.0], [22.1, 2449.0], [22.2, 2450.0], [22.3, 2459.0], [22.4, 2502.0], [22.5, 2508.0], [22.6, 2508.0], [22.7, 2531.0], [22.8, 2531.0], [22.9, 2538.0], [23.0, 2540.0], [23.1, 2540.0], [23.2, 2540.0], [23.3, 2541.0], [23.4, 2541.0], [23.5, 2541.0], [23.6, 2541.0], [23.7, 2551.0], [23.8, 2554.0], [23.9, 2554.0], [24.0, 2595.0], [24.1, 2595.0], [24.2, 2637.0], [24.3, 2637.0], [24.4, 2701.0], [24.5, 2735.0], [24.6, 2737.0], [24.7, 2786.0], [24.8, 2806.0], [24.9, 2835.0], [25.0, 2835.0], [25.1, 2835.0], [25.2, 2835.0], [25.3, 2837.0], [25.4, 2837.0], [25.5, 2837.0], [25.6, 2837.0], [25.7, 2837.0], [25.8, 2951.0], [25.9, 3025.0], [26.0, 3025.0], [26.1, 3026.0], [26.2, 3026.0], [26.3, 3026.0], [26.4, 3027.0], [26.5, 3027.0], [26.6, 3027.0], [26.7, 3027.0], [26.8, 3034.0], [26.9, 3109.0], [27.0, 3110.0], [27.1, 3110.0], [27.2, 3112.0], [27.3, 3138.0], [27.4, 3185.0], [27.5, 3185.0], [27.6, 3190.0], [27.7, 3191.0], [27.8, 3191.0], [27.9, 3192.0], [28.0, 3192.0], [28.1, 3192.0], [28.2, 3193.0], [28.3, 3194.0], [28.4, 3195.0], [28.5, 3200.0], [28.6, 3250.0], [28.7, 3272.0], [28.8, 3272.0], [28.9, 3273.0], [29.0, 3282.0], [29.1, 3284.0], [29.2, 3285.0], [29.3, 3286.0], [29.4, 3327.0], [29.5, 3328.0], [29.6, 3328.0], [29.7, 3328.0], [29.8, 3362.0], [29.9, 3376.0], [30.0, 3392.0], [30.1, 3410.0], [30.2, 3410.0], [30.3, 3410.0], [30.4, 3410.0], [30.5, 3411.0], [30.6, 3411.0], [30.7, 3411.0], [30.8, 3412.0], [30.9, 3412.0], [31.0, 3445.0], [31.1, 3522.0], [31.2, 3581.0], [31.3, 3581.0], [31.4, 3582.0], [31.5, 3583.0], [31.6, 3583.0], [31.7, 3583.0], [31.8, 3609.0], [31.9, 3618.0], [32.0, 3635.0], [32.1, 3635.0], [32.2, 3636.0], [32.3, 3637.0], [32.4, 3637.0], [32.5, 3637.0], [32.6, 3637.0], [32.7, 3638.0], [32.8, 3639.0], [32.9, 3639.0], [33.0, 3696.0], [33.1, 3771.0], [33.2, 3873.0], [33.3, 4019.0], [33.4, 4038.0], [33.5, 4041.0], [33.6, 4047.0], [33.7, 4048.0], [33.8, 4066.0], [33.9, 4067.0], [34.0, 4070.0], [34.1, 4132.0], [34.2, 4148.0], [34.3, 4149.0], [34.4, 4149.0], [34.5, 4150.0], [34.6, 4238.0], [34.7, 4292.0], [34.8, 4303.0], [34.9, 4303.0], [35.0, 4303.0], [35.1, 4305.0], [35.2, 4306.0], [35.3, 4306.0], [35.4, 4306.0], [35.5, 4307.0], [35.6, 4344.0], [35.7, 4354.0], [35.8, 4406.0], [35.9, 4406.0], [36.0, 4407.0], [36.1, 4407.0], [36.2, 4407.0], [36.3, 4407.0], [36.4, 4409.0], [36.5, 4409.0], [36.6, 4410.0], [36.7, 4410.0], [36.8, 4410.0], [36.9, 4410.0], [37.0, 4412.0], [37.1, 4424.0], [37.2, 4449.0], [37.3, 4466.0], [37.4, 4466.0], [37.5, 4497.0], [37.6, 4518.0], [37.7, 4556.0], [37.8, 4563.0], [37.9, 4566.0], [38.0, 4571.0], [38.1, 4571.0], [38.2, 4573.0], [38.3, 4573.0], [38.4, 4615.0], [38.5, 4623.0], [38.6, 4640.0], [38.7, 4641.0], [38.8, 4641.0], [38.9, 4641.0], [39.0, 4641.0], [39.1, 4642.0], [39.2, 4642.0], [39.3, 4643.0], [39.4, 4643.0], [39.5, 4650.0], [39.6, 4651.0], [39.7, 4651.0], [39.8, 4651.0], [39.9, 4651.0], [40.0, 4652.0], [40.1, 4652.0], [40.2, 4653.0], [40.3, 4653.0], [40.4, 4653.0], [40.5, 4653.0], [40.6, 4654.0], [40.7, 4654.0], [40.8, 4654.0], [40.9, 4713.0], [41.0, 4727.0], [41.1, 4747.0], [41.2, 4806.0], [41.3, 4855.0], [41.4, 4872.0], [41.5, 4872.0], [41.6, 4873.0], [41.7, 4875.0], [41.8, 4902.0], [41.9, 4903.0], [42.0, 4907.0], [42.1, 4912.0], [42.2, 4913.0], [42.3, 4913.0], [42.4, 4914.0], [42.5, 4915.0], [42.6, 4962.0], [42.7, 4963.0], [42.8, 4964.0], [42.9, 4964.0], [43.0, 4966.0], [43.1, 4966.0], [43.2, 4966.0], [43.3, 4967.0], [43.4, 4967.0], [43.5, 5049.0], [43.6, 5049.0], [43.7, 5055.0], [43.8, 5085.0], [43.9, 5123.0], [44.0, 5125.0], [44.1, 5125.0], [44.2, 5126.0], [44.3, 5127.0], [44.4, 5213.0], [44.5, 5213.0], [44.6, 5305.0], [44.7, 5335.0], [44.8, 5375.0], [44.9, 5391.0], [45.0, 5391.0], [45.1, 5391.0], [45.2, 5391.0], [45.3, 5392.0], [45.4, 5392.0], [45.5, 5392.0], [45.6, 5394.0], [45.7, 5460.0], [45.8, 5511.0], [45.9, 5652.0], [46.0, 5683.0], [46.1, 5684.0], [46.2, 5684.0], [46.3, 5686.0], [46.4, 5717.0], [46.5, 5750.0], [46.6, 5750.0], [46.7, 5751.0], [46.8, 5751.0], [46.9, 5751.0], [47.0, 5751.0], [47.1, 5751.0], [47.2, 5752.0], [47.3, 5752.0], [47.4, 5752.0], [47.5, 5752.0], [47.6, 5757.0], [47.7, 5757.0], [47.8, 5758.0], [47.9, 5758.0], [48.0, 5758.0], [48.1, 5759.0], [48.2, 5759.0], [48.3, 5759.0], [48.4, 5759.0], [48.5, 5760.0], [48.6, 5760.0], [48.7, 5760.0], [48.8, 5760.0], [48.9, 5761.0], [49.0, 5761.0], [49.1, 5765.0], [49.2, 5765.0], [49.3, 5765.0], [49.4, 5766.0], [49.5, 5766.0], [49.6, 5766.0], [49.7, 5767.0], [49.8, 5768.0], [49.9, 5769.0], [50.0, 5789.0], [50.1, 5807.0], [50.2, 5818.0], [50.3, 5849.0], [50.4, 5849.0], [50.5, 5849.0], [50.6, 5849.0], [50.7, 5850.0], [50.8, 5852.0], [50.9, 5867.0], [51.0, 5869.0], [51.1, 5890.0], [51.2, 5905.0], [51.3, 5912.0], [51.4, 5921.0], [51.5, 5925.0], [51.6, 5927.0], [51.7, 5934.0], [51.8, 5935.0], [51.9, 5935.0], [52.0, 5935.0], [52.1, 5935.0], [52.2, 5936.0], [52.3, 5936.0], [52.4, 5937.0], [52.5, 5939.0], [52.6, 5939.0], [52.7, 5940.0], [52.8, 5953.0], [52.9, 5954.0], [53.0, 5954.0], [53.1, 5954.0], [53.2, 5955.0], [53.3, 5955.0], [53.4, 5956.0], [53.5, 5956.0], [53.6, 5956.0], [53.7, 5957.0], [53.8, 5957.0], [53.9, 5979.0], [54.0, 6005.0], [54.1, 6006.0], [54.2, 6006.0], [54.3, 6006.0], [54.4, 6008.0], [54.5, 6041.0], [54.6, 6042.0], [54.7, 6042.0], [54.8, 6043.0], [54.9, 6044.0], [55.0, 6049.0], [55.1, 6051.0], [55.2, 6060.0], [55.3, 6066.0], [55.4, 6068.0], [55.5, 6068.0], [55.6, 6071.0], [55.7, 6072.0], [55.8, 6095.0], [55.9, 6095.0], [56.0, 6096.0], [56.1, 6096.0], [56.2, 6096.0], [56.3, 6097.0], [56.4, 6116.0], [56.5, 6142.0], [56.6, 6142.0], [56.7, 6142.0], [56.8, 6142.0], [56.9, 6143.0], [57.0, 6152.0], [57.1, 6153.0], [57.2, 6160.0], [57.3, 6161.0], [57.4, 6162.0], [57.5, 6163.0], [57.6, 6163.0], [57.7, 6164.0], [57.8, 6164.0], [57.9, 6165.0], [58.0, 6169.0], [58.1, 6169.0], [58.2, 6169.0], [58.3, 6172.0], [58.4, 6173.0], [58.5, 6196.0], [58.6, 6198.0], [58.7, 6198.0], [58.8, 6230.0], [58.9, 6255.0], [59.0, 6256.0], [59.1, 6256.0], [59.2, 6258.0], [59.3, 6259.0], [59.4, 6259.0], [59.5, 6277.0], [59.6, 6278.0], [59.7, 6279.0], [59.8, 6291.0], [59.9, 6293.0], [60.0, 6293.0], [60.1, 6293.0], [60.2, 6294.0], [60.3, 6304.0], [60.4, 6304.0], [60.5, 6305.0], [60.6, 6306.0], [60.7, 6325.0], [60.8, 6327.0], [60.9, 6332.0], [61.0, 6334.0], [61.1, 6334.0], [61.2, 6342.0], [61.3, 6374.0], [61.4, 6376.0], [61.5, 6376.0], [61.6, 6377.0], [61.7, 6377.0], [61.8, 6377.0], [61.9, 6377.0], [62.0, 6378.0], [62.1, 6380.0], [62.2, 6380.0], [62.3, 6380.0], [62.4, 6398.0], [62.5, 6419.0], [62.6, 6422.0], [62.7, 6422.0], [62.8, 6423.0], [62.9, 6427.0], [63.0, 6433.0], [63.1, 6433.0], [63.2, 6434.0], [63.3, 6457.0], [63.4, 6458.0], [63.5, 6458.0], [63.6, 6458.0], [63.7, 6458.0], [63.8, 6459.0], [63.9, 6461.0], [64.0, 6463.0], [64.1, 6490.0], [64.2, 6509.0], [64.3, 6518.0], [64.4, 6531.0], [64.5, 6531.0], [64.6, 6532.0], [64.7, 6532.0], [64.8, 6532.0], [64.9, 6532.0], [65.0, 6536.0], [65.1, 6557.0], [65.2, 6576.0], [65.3, 6577.0], [65.4, 6583.0], [65.5, 6583.0], [65.6, 6584.0], [65.7, 6584.0], [65.8, 6584.0], [65.9, 6584.0], [66.0, 6619.0], [66.1, 6636.0], [66.2, 6646.0], [66.3, 6646.0], [66.4, 6653.0], [66.5, 6653.0], [66.6, 6654.0], [66.7, 6655.0], [66.8, 6655.0], [66.9, 6655.0], [67.0, 6655.0], [67.1, 6655.0], [67.2, 6655.0], [67.3, 6656.0], [67.4, 6656.0], [67.5, 6657.0], [67.6, 6660.0], [67.7, 6662.0], [67.8, 6662.0], [67.9, 6663.0], [68.0, 6676.0], [68.1, 6676.0], [68.2, 6676.0], [68.3, 6676.0], [68.4, 6676.0], [68.5, 6677.0], [68.6, 6678.0], [68.7, 6678.0], [68.8, 6679.0], [68.9, 6680.0], [69.0, 6680.0], [69.1, 6681.0], [69.2, 6711.0], [69.3, 6715.0], [69.4, 6725.0], [69.5, 6727.0], [69.6, 6727.0], [69.7, 6727.0], [69.8, 6728.0], [69.9, 6728.0], [70.0, 6728.0], [70.1, 6728.0], [70.2, 6728.0], [70.3, 6742.0], [70.4, 6765.0], [70.5, 6768.0], [70.6, 6769.0], [70.7, 6770.0], [70.8, 6770.0], [70.9, 6770.0], [71.0, 6771.0], [71.1, 6771.0], [71.2, 6774.0], [71.3, 6775.0], [71.4, 6775.0], [71.5, 6775.0], [71.6, 6776.0], [71.7, 6776.0], [71.8, 6799.0], [71.9, 6800.0], [72.0, 6800.0], [72.1, 6800.0], [72.2, 6800.0], [72.3, 6800.0], [72.4, 6815.0], [72.5, 6815.0], [72.6, 6817.0], [72.7, 6818.0], [72.8, 6818.0], [72.9, 6885.0], [73.0, 6899.0], [73.1, 6899.0], [73.2, 6899.0], [73.3, 6899.0], [73.4, 6899.0], [73.5, 6901.0], [73.6, 6905.0], [73.7, 6929.0], [73.8, 6929.0], [73.9, 6941.0], [74.0, 6970.0], [74.1, 6972.0], [74.2, 6988.0], [74.3, 6991.0], [74.4, 7018.0], [74.5, 7018.0], [74.6, 7018.0], [74.7, 7040.0], [74.8, 7089.0], [74.9, 7094.0], [75.0, 7122.0], [75.1, 7136.0], [75.2, 7150.0], [75.3, 7150.0], [75.4, 7150.0], [75.5, 7151.0], [75.6, 7156.0], [75.7, 7157.0], [75.8, 7157.0], [75.9, 7158.0], [76.0, 7158.0], [76.1, 7160.0], [76.2, 7168.0], [76.3, 7168.0], [76.4, 7168.0], [76.5, 7176.0], [76.6, 7242.0], [76.7, 7249.0], [76.8, 7266.0], [76.9, 7307.0], [77.0, 7346.0], [77.1, 7361.0], [77.2, 7361.0], [77.3, 7384.0], [77.4, 7421.0], [77.5, 7421.0], [77.6, 7422.0], [77.7, 7422.0], [77.8, 7440.0], [77.9, 7491.0], [78.0, 7518.0], [78.1, 7520.0], [78.2, 7540.0], [78.3, 7608.0], [78.4, 7610.0], [78.5, 7632.0], [78.6, 7634.0], [78.7, 7637.0], [78.8, 7637.0], [78.9, 7637.0], [79.0, 7637.0], [79.1, 7637.0], [79.2, 7638.0], [79.3, 7639.0], [79.4, 7639.0], [79.5, 7639.0], [79.6, 7642.0], [79.7, 7642.0], [79.8, 7643.0], [79.9, 7644.0], [80.0, 7644.0], [80.1, 7653.0], [80.2, 7653.0], [80.3, 7676.0], [80.4, 7676.0], [80.5, 7787.0], [80.6, 7850.0], [80.7, 7850.0], [80.8, 7880.0], [80.9, 7904.0], [81.0, 7936.0], [81.1, 7936.0], [81.2, 7936.0], [81.3, 7937.0], [81.4, 7938.0], [81.5, 7938.0], [81.6, 7938.0], [81.7, 7938.0], [81.8, 7979.0], [81.9, 7985.0], [82.0, 7985.0], [82.1, 7986.0], [82.2, 7986.0], [82.3, 7990.0], [82.4, 7991.0], [82.5, 7991.0], [82.6, 7991.0], [82.7, 7993.0], [82.8, 8024.0], [82.9, 8037.0], [83.0, 8067.0], [83.1, 8068.0], [83.2, 8069.0], [83.3, 8069.0], [83.4, 8069.0], [83.5, 8069.0], [83.6, 8069.0], [83.7, 8111.0], [83.8, 8111.0], [83.9, 8112.0], [84.0, 8120.0], [84.1, 8120.0], [84.2, 8142.0], [84.3, 8166.0], [84.4, 8167.0], [84.5, 8167.0], [84.6, 8167.0], [84.7, 8168.0], [84.8, 8179.0], [84.9, 8181.0], [85.0, 8181.0], [85.1, 8193.0], [85.2, 8193.0], [85.3, 8193.0], [85.4, 8194.0], [85.5, 8201.0], [85.6, 8228.0], [85.7, 8262.0], [85.8, 8375.0], [85.9, 8394.0], [86.0, 8461.0], [86.1, 8462.0], [86.2, 8462.0], [86.3, 8463.0], [86.4, 8463.0], [86.5, 8463.0], [86.6, 8470.0], [86.7, 8470.0], [86.8, 8470.0], [86.9, 8471.0], [87.0, 8471.0], [87.1, 8472.0], [87.2, 8472.0], [87.3, 8479.0], [87.4, 8555.0], [87.5, 8556.0], [87.6, 8573.0], [87.7, 8627.0], [87.8, 8708.0], [87.9, 8709.0], [88.0, 8716.0], [88.1, 8732.0], [88.2, 8733.0], [88.3, 8733.0], [88.4, 8804.0], [88.5, 8806.0], [88.6, 8807.0], [88.7, 8808.0], [88.8, 8810.0], [88.9, 8810.0], [89.0, 8819.0], [89.1, 8821.0], [89.2, 8877.0], [89.3, 8883.0], [89.4, 8884.0], [89.5, 8885.0], [89.6, 8903.0], [89.7, 8910.0], [89.8, 8910.0], [89.9, 8911.0], [90.0, 8941.0], [90.1, 8943.0], [90.2, 8943.0], [90.3, 8944.0], [90.4, 8982.0], [90.5, 9032.0], [90.6, 9052.0], [90.7, 9059.0], [90.8, 9060.0], [90.9, 9061.0], [91.0, 9061.0], [91.1, 9061.0], [91.2, 9061.0], [91.3, 9061.0], [91.4, 9062.0], [91.5, 9089.0], [91.6, 9089.0], [91.7, 9127.0], [91.8, 9135.0], [91.9, 9273.0], [92.0, 9302.0], [92.1, 9302.0], [92.2, 9303.0], [92.3, 9313.0], [92.4, 9315.0], [92.5, 9352.0], [92.6, 9353.0], [92.7, 9354.0], [92.8, 9355.0], [92.9, 9358.0], [93.0, 9366.0], [93.1, 9381.0], [93.2, 9382.0], [93.3, 9382.0], [93.4, 9382.0], [93.5, 9383.0], [93.6, 9383.0], [93.7, 9384.0], [93.8, 9418.0], [93.9, 9418.0], [94.0, 9419.0], [94.1, 9420.0], [94.2, 9420.0], [94.3, 9421.0], [94.4, 9421.0], [94.5, 9421.0], [94.6, 9421.0], [94.7, 9421.0], [94.8, 9423.0], [94.9, 9491.0], [95.0, 9500.0], [95.1, 9543.0], [95.2, 9543.0], [95.3, 9544.0], [95.4, 9544.0], [95.5, 9544.0], [95.6, 9544.0], [95.7, 9545.0], [95.8, 9716.0], [95.9, 9717.0], [96.0, 9717.0], [96.1, 9718.0], [96.2, 9718.0], [96.3, 9718.0], [96.4, 9718.0], [96.5, 9718.0], [96.6, 9718.0], [96.7, 9719.0], [96.8, 9719.0], [96.9, 9724.0], [97.0, 9726.0], [97.1, 9727.0], [97.2, 9727.0], [97.3, 9729.0], [97.4, 9790.0], [97.5, 9792.0], [97.6, 9804.0], [97.7, 9806.0], [97.8, 9993.0], [97.9, 9993.0], [98.0, 9994.0], [98.1, 9994.0], [98.2, 10007.0], [98.3, 10133.0], [98.4, 10133.0], [98.5, 10134.0], [98.6, 10141.0], [98.7, 10195.0], [98.8, 10196.0], [98.9, 10196.0], [99.0, 10198.0], [99.1, 10209.0], [99.2, 10223.0], [99.3, 10224.0], [99.4, 10226.0], [99.5, 10303.0], [99.6, 10333.0], [99.7, 10552.0], [99.8, 11466.0], [99.9, 12175.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 107.0, "series": [{"data": [[300.0, 76.0], [400.0, 83.0], [500.0, 42.0], [600.0, 34.0], [700.0, 26.0], [800.0, 18.0], [900.0, 11.0], [1000.0, 13.0], [1100.0, 12.0], [1200.0, 6.0], [1300.0, 9.0], [1400.0, 12.0], [1500.0, 3.0], [1600.0, 21.0], [1700.0, 13.0], [1800.0, 58.0], [1900.0, 22.0], [2000.0, 11.0], [2100.0, 28.0], [2300.0, 25.0], [2200.0, 86.0], [2400.0, 37.0], [2500.0, 51.0], [2600.0, 7.0], [2800.0, 29.0], [2700.0, 10.0], [2900.0, 3.0], [3000.0, 29.0], [3100.0, 47.0], [3200.0, 26.0], [3300.0, 19.0], [3400.0, 30.0], [3500.0, 20.0], [3600.0, 36.0], [3700.0, 4.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 21.0], [4300.0, 31.0], [4100.0, 16.0], [4200.0, 4.0], [4400.0, 50.0], [4600.0, 73.0], [4500.0, 24.0], [4700.0, 9.0], [4800.0, 17.0], [4900.0, 48.0], [5000.0, 13.0], [5100.0, 13.0], [5300.0, 31.0], [5200.0, 7.0], [5500.0, 5.0], [5600.0, 12.0], [5400.0, 2.0], [5700.0, 107.0], [5800.0, 34.0], [5900.0, 80.0], [6000.0, 70.0], [6100.0, 68.0], [6200.0, 43.0], [6300.0, 63.0], [6500.0, 52.0], [6400.0, 51.0], [6600.0, 92.0], [6800.0, 46.0], [6700.0, 77.0], [6900.0, 26.0], [7100.0, 44.0], [7000.0, 19.0], [7300.0, 13.0], [7200.0, 11.0], [7400.0, 16.0], [7600.0, 62.0], [7500.0, 11.0], [7900.0, 55.0], [7700.0, 4.0], [7800.0, 9.0], [8000.0, 26.0], [8100.0, 52.0], [8400.0, 41.0], [8200.0, 8.0], [8700.0, 18.0], [8600.0, 4.0], [8300.0, 4.0], [8500.0, 9.0], [8800.0, 34.0], [9100.0, 7.0], [8900.0, 25.0], [9000.0, 35.0], [9200.0, 2.0], [9500.0, 21.0], [9600.0, 1.0], [9400.0, 35.0], [9300.0, 52.0], [9700.0, 52.0], [10000.0, 1.0], [10100.0, 24.0], [9900.0, 14.0], [10200.0, 10.0], [9800.0, 5.0], [10300.0, 6.0], [10500.0, 4.0], [11400.0, 3.0], [12100.0, 4.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2678.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2678.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 91.9420180722891, "minX": 1.78195158E12, "maxY": 215.76715843489407, "series": [{"data": [[1.78195158E12, 91.9420180722891], [1.78195164E12, 215.76715843489407]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 240 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195164E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 330.2222222222223, "minX": 1.0, "maxY": 12175.0, "series": [{"data": [[3.0, 477.5], [4.0, 466.0], [5.0, 3707.428571428571], [6.0, 437.6666666666667], [7.0, 2730.6], [8.0, 447.25], [9.0, 408.6666666666667], [10.0, 346.66666666666663], [11.0, 330.2222222222223], [12.0, 2577.6923076923076], [13.0, 345.625], [14.0, 354.22222222222223], [15.0, 1523.8], [16.0, 374.57142857142856], [17.0, 386.27272727272725], [18.0, 399.72727272727275], [19.0, 2056.0714285714284], [20.0, 870.7692307692307], [21.0, 962.9090909090909], [22.0, 898.8461538461538], [23.0, 1042.1], [24.0, 965.0], [25.0, 1024.2727272727273], [26.0, 999.9166666666667], [27.0, 1023.6666666666666], [28.0, 1015.6153846153848], [29.0, 1112.6363636363635], [30.0, 1239.4444444444443], [31.0, 1122.8333333333333], [32.0, 734.2999999999998], [33.0, 1766.3000000000002], [34.0, 811.9], [35.0, 858.3750000000001], [36.0, 903.8888888888888], [37.0, 991.1666666666666], [38.0, 2603.5333333333333], [39.0, 1092.25], [40.0, 1155.5000000000002], [41.0, 1223.0], [42.0, 1315.2], [43.0, 1350.818181818182], [44.0, 1503.142857142857], [45.0, 1528.6666666666667], [47.0, 1697.7500000000002], [48.0, 1774.125], [50.0, 4107.190476190476], [52.0, 1984.7], [54.0, 2218.7272727272725], [56.0, 2186.833333333334], [58.0, 2316.846153846154], [61.0, 2363.9285714285716], [63.0, 2322.8666666666663], [65.0, 2266.705882352941], [67.0, 2824.7727272727266], [69.0, 1996.4444444444446], [71.0, 6402.363636363636], [70.0, 5751.0], [68.0, 5751.0], [72.0, 2050.0], [75.0, 2127.5238095238096], [77.0, 2071.869565217391], [80.0, 2052.521739130435], [82.0, 2100.96], [86.0, 2314.6538461538453], [89.0, 2517.7586206896553], [93.0, 5284.019607843136], [97.0, 2752.272727272727], [99.0, 9059.666666666666], [101.0, 2923.939393939393], [100.0, 7939.0], [106.0, 3170.189189189189], [112.0, 3387.0], [119.0, 4030.523809523811], [123.0, 4132.0], [125.0, 4208.666666666669], [126.0, 3487.0], [130.0, 5886.0], [131.0, 4362.166666666665], [132.0, 3185.0], [133.0, 3362.0], [128.0, 7921.178571428572], [137.0, 4566.0], [138.0, 4006.0425531914884], [143.0, 4448.0], [144.0, 4713.0], [145.0, 4657.442857142858], [151.0, 4942.0], [152.0, 4370.905660377358], [157.0, 4855.333333333333], [158.0, 5127.0], [156.0, 6384.181818181818], [161.0, 4898.597014925372], [168.0, 5910.5], [169.0, 5140.945454545454], [174.0, 5510.5], [175.0, 5806.5], [172.0, 6376.636363636363], [178.0, 5903.804347826087], [179.0, 4537.869565217393], [180.0, 4869.0], [182.0, 5376.0], [187.0, 6696.133333333333], [188.0, 5349.12], [189.0, 6422.0], [193.0, 7178.444444444444], [194.0, 6258.8], [196.0, 8394.357142857141], [198.0, 6285.4000000000015], [199.0, 7525.461538461539], [200.0, 5387.0], [206.0, 7161.304347826087], [207.0, 6928.833333333334], [203.0, 12173.0], [202.0, 12175.0], [211.0, 6105.909090909092], [216.0, 7062.571428571429], [217.0, 5836.5], [220.0, 9688.461538461539], [222.0, 6804.555555555556], [224.0, 6576.4], [225.0, 6758.7692307692305], [229.0, 8127.766666666667], [228.0, 6197.0], [233.0, 8732.78947368421], [236.0, 6969.333333333335], [238.0, 7683.425531914893], [239.0, 6001.826086956522], [240.0, 7634.277837837841], [1.0, 6164.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[158.8084516799443, 5229.727398683754]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 240.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3497.0666666666666, "minX": 1.78195158E12, "maxY": 6005.35, "series": [{"data": [[1.78195158E12, 5112.8], [1.78195164E12, 6005.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195158E12, 3497.0666666666666], [1.78195164E12, 4105.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195164E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2751.9329819277136, "minX": 1.78195158E12, "maxY": 7340.38229634382, "series": [{"data": [[1.78195158E12, 2751.9329819277136], [1.78195164E12, 7340.38229634382]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195164E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2751.9134036144555, "minX": 1.78195158E12, "maxY": 7340.3713919178945, "series": [{"data": [[1.78195158E12, 2751.9134036144555], [1.78195164E12, 7340.3713919178945]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195164E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.059653624118024426, "minX": 1.78195158E12, "maxY": 0.07379518072289158, "series": [{"data": [[1.78195158E12, 0.07379518072289158], [1.78195164E12, 0.059653624118024426]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195164E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 319.0, "minX": 1.78195158E12, "maxY": 617.0, "series": [{"data": [[1.78195158E12, 617.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195158E12, 319.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195158E12, 564.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195158E12, 615.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195158E12, 435.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195158E12, 593.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195158E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 331.5, "minX": 1.0, "maxY": 9790.0, "series": [{"data": [[2.0, 477.5], [37.0, 354.0], [39.0, 611.0], [43.0, 429.5], [42.0, 553.0], [11.0, 438.0], [26.0, 331.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 4791.0], [4.0, 4856.0], [6.0, 6972.0], [8.0, 5658.0], [9.0, 9790.0], [10.0, 8180.0], [13.0, 5146.5], [14.0, 8819.0], [15.0, 6258.0], [16.0, 7421.0], [17.0, 8807.5], [18.0, 2197.5], [19.0, 8883.0], [21.0, 1591.0], [22.0, 9059.0], [23.0, 2249.0], [24.0, 8267.0], [25.0, 1673.0], [26.0, 2220.0], [27.0, 1866.0], [29.0, 2449.0], [30.0, 8167.0], [31.0, 6576.0], [33.0, 3026.0], [32.0, 8193.0], [35.0, 2246.0], [37.0, 1614.0], [39.0, 670.0], [38.0, 6677.5], [41.0, 2147.0], [40.0, 6326.0], [42.0, 5227.0], [43.0, 4653.0], [46.0, 4544.0], [48.0, 4332.5], [50.0, 4854.5], [55.0, 4684.5], [57.0, 4485.0], [62.0, 4194.0], [63.0, 5765.0], [71.0, 6532.0], [73.0, 6899.0], [74.0, 6771.0], [77.0, 6095.0], [85.0, 6680.0], [84.0, 8463.0], [86.0, 6088.0], [88.0, 6800.0], [95.0, 6422.0], [99.0, 6162.0], [1.0, 4746.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 331.5, "minX": 1.0, "maxY": 9790.0, "series": [{"data": [[2.0, 476.0], [37.0, 354.0], [39.0, 611.0], [43.0, 429.5], [42.0, 553.0], [11.0, 438.0], [26.0, 331.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 4791.0], [4.0, 4856.0], [6.0, 6972.0], [8.0, 5658.0], [9.0, 9790.0], [10.0, 8180.0], [13.0, 5146.5], [14.0, 8819.0], [15.0, 6258.0], [16.0, 7421.0], [17.0, 8807.5], [18.0, 2197.5], [19.0, 8883.0], [21.0, 1591.0], [22.0, 9059.0], [23.0, 2249.0], [24.0, 8267.0], [25.0, 1673.0], [26.0, 2220.0], [27.0, 1866.0], [29.0, 2449.0], [30.0, 8167.0], [31.0, 6576.0], [33.0, 3026.0], [32.0, 8193.0], [35.0, 2246.0], [37.0, 1614.0], [39.0, 670.0], [38.0, 6677.5], [41.0, 2147.0], [40.0, 6326.0], [42.0, 5227.0], [43.0, 4653.0], [46.0, 4544.0], [48.0, 4332.5], [50.0, 4854.5], [55.0, 4684.5], [57.0, 4485.0], [62.0, 4194.0], [63.0, 5765.0], [71.0, 6532.0], [73.0, 6899.0], [74.0, 6771.0], [77.0, 6095.0], [85.0, 6680.0], [84.0, 8463.0], [86.0, 6088.0], [88.0, 6800.0], [95.0, 6422.0], [99.0, 6162.0], [1.0, 4746.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.983333333333334, "minX": 1.78195158E12, "maxY": 25.133333333333333, "series": [{"data": [[1.78195158E12, 25.133333333333333], [1.78195164E12, 22.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195164E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.78195158E12, "maxY": 24.383333333333333, "series": [{"data": [[1.78195158E12, 22.133333333333333], [1.78195164E12, 24.383333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195164E12, 1.6]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195164E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195158E12, "maxY": 25.983333333333334, "series": [{"data": [[1.78195158E12, 3.4833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195158E12, 18.65], [1.78195164E12, 25.983333333333334]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195164E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195158E12, "maxY": 25.983333333333334, "series": [{"data": [[1.78195158E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195158E12, 18.65], [1.78195164E12, 25.983333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195164E12, "title": "Total Transactions Per Second"}},
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

