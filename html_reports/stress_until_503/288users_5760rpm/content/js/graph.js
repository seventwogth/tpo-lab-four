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
        data: {"result": {"minY": 355.0, "minX": 0.0, "maxY": 11983.0, "series": [{"data": [[0.0, 355.0], [0.1, 362.0], [0.2, 364.0], [0.3, 365.0], [0.4, 367.0], [0.5, 368.0], [0.6, 369.0], [0.7, 373.0], [0.8, 376.0], [0.9, 380.0], [1.0, 382.0], [1.1, 385.0], [1.2, 388.0], [1.3, 390.0], [1.4, 392.0], [1.5, 399.0], [1.6, 402.0], [1.7, 407.0], [1.8, 409.0], [1.9, 411.0], [2.0, 413.0], [2.1, 416.0], [2.2, 419.0], [2.3, 421.0], [2.4, 423.0], [2.5, 425.0], [2.6, 426.0], [2.7, 428.0], [2.8, 429.0], [2.9, 433.0], [3.0, 436.0], [3.1, 437.0], [3.2, 440.0], [3.3, 443.0], [3.4, 446.0], [3.5, 448.0], [3.6, 450.0], [3.7, 452.0], [3.8, 454.0], [3.9, 457.0], [4.0, 461.0], [4.1, 462.0], [4.2, 464.0], [4.3, 467.0], [4.4, 469.0], [4.5, 472.0], [4.6, 476.0], [4.7, 480.0], [4.8, 483.0], [4.9, 486.0], [5.0, 489.0], [5.1, 491.0], [5.2, 493.0], [5.3, 504.0], [5.4, 511.0], [5.5, 514.0], [5.6, 516.0], [5.7, 523.0], [5.8, 531.0], [5.9, 539.0], [6.0, 544.0], [6.1, 550.0], [6.2, 559.0], [6.3, 566.0], [6.4, 569.0], [6.5, 582.0], [6.6, 586.0], [6.7, 592.0], [6.8, 598.0], [6.9, 610.0], [7.0, 617.0], [7.1, 621.0], [7.2, 628.0], [7.3, 640.0], [7.4, 647.0], [7.5, 655.0], [7.6, 669.0], [7.7, 682.0], [7.8, 691.0], [7.9, 707.0], [8.0, 715.0], [8.1, 729.0], [8.2, 738.0], [8.3, 765.0], [8.4, 798.0], [8.5, 806.0], [8.6, 827.0], [8.7, 834.0], [8.8, 846.0], [8.9, 870.0], [9.0, 886.0], [9.1, 916.0], [9.2, 927.0], [9.3, 929.0], [9.4, 970.0], [9.5, 993.0], [9.6, 1067.0], [9.7, 1079.0], [9.8, 1087.0], [9.9, 1097.0], [10.0, 1135.0], [10.1, 1171.0], [10.2, 1178.0], [10.3, 1246.0], [10.4, 1259.0], [10.5, 1333.0], [10.6, 1350.0], [10.7, 1359.0], [10.8, 1440.0], [10.9, 1443.0], [11.0, 1495.0], [11.1, 1496.0], [11.2, 1518.0], [11.3, 1541.0], [11.4, 1629.0], [11.5, 1631.0], [11.6, 1756.0], [11.7, 1780.0], [11.8, 1824.0], [11.9, 1824.0], [12.0, 1856.0], [12.1, 1858.0], [12.2, 1872.0], [12.3, 1873.0], [12.4, 1930.0], [12.5, 2062.0], [12.6, 2062.0], [12.7, 2062.0], [12.8, 2098.0], [12.9, 2111.0], [13.0, 2147.0], [13.1, 2163.0], [13.2, 2183.0], [13.3, 2184.0], [13.4, 2184.0], [13.5, 2184.0], [13.6, 2185.0], [13.7, 2186.0], [13.8, 2187.0], [13.9, 2187.0], [14.0, 2187.0], [14.1, 2218.0], [14.2, 2223.0], [14.3, 2224.0], [14.4, 2225.0], [14.5, 2225.0], [14.6, 2226.0], [14.7, 2226.0], [14.8, 2226.0], [14.9, 2226.0], [15.0, 2227.0], [15.1, 2227.0], [15.2, 2265.0], [15.3, 2266.0], [15.4, 2306.0], [15.5, 2306.0], [15.6, 2325.0], [15.7, 2326.0], [15.8, 2326.0], [15.9, 2326.0], [16.0, 2326.0], [16.1, 2326.0], [16.2, 2327.0], [16.3, 2394.0], [16.4, 2450.0], [16.5, 2450.0], [16.6, 2450.0], [16.7, 2453.0], [16.8, 2493.0], [16.9, 2493.0], [17.0, 2494.0], [17.1, 2494.0], [17.2, 2497.0], [17.3, 2497.0], [17.4, 2498.0], [17.5, 2498.0], [17.6, 2498.0], [17.7, 2498.0], [17.8, 2498.0], [17.9, 2499.0], [18.0, 2500.0], [18.1, 2528.0], [18.2, 2529.0], [18.3, 2531.0], [18.4, 2532.0], [18.5, 2532.0], [18.6, 2533.0], [18.7, 2533.0], [18.8, 2565.0], [18.9, 2589.0], [19.0, 2590.0], [19.1, 2590.0], [19.2, 2600.0], [19.3, 2616.0], [19.4, 2643.0], [19.5, 2643.0], [19.6, 2643.0], [19.7, 2643.0], [19.8, 2643.0], [19.9, 2644.0], [20.0, 2661.0], [20.1, 2721.0], [20.2, 2722.0], [20.3, 2722.0], [20.4, 2723.0], [20.5, 2723.0], [20.6, 2723.0], [20.7, 2724.0], [20.8, 2725.0], [20.9, 2742.0], [21.0, 2774.0], [21.1, 2808.0], [21.2, 2810.0], [21.3, 2810.0], [21.4, 2810.0], [21.5, 2812.0], [21.6, 2869.0], [21.7, 2928.0], [21.8, 2980.0], [21.9, 3006.0], [22.0, 3006.0], [22.1, 3008.0], [22.2, 3013.0], [22.3, 3041.0], [22.4, 3057.0], [22.5, 3058.0], [22.6, 3058.0], [22.7, 3058.0], [22.8, 3059.0], [22.9, 3059.0], [23.0, 3059.0], [23.1, 3059.0], [23.2, 3098.0], [23.3, 3106.0], [23.4, 3107.0], [23.5, 3155.0], [23.6, 3198.0], [23.7, 3198.0], [23.8, 3199.0], [23.9, 3221.0], [24.0, 3248.0], [24.1, 3342.0], [24.2, 3343.0], [24.3, 3373.0], [24.4, 3375.0], [24.5, 3448.0], [24.6, 3459.0], [24.7, 3460.0], [24.8, 3499.0], [24.9, 3500.0], [25.0, 3500.0], [25.1, 3501.0], [25.2, 3502.0], [25.3, 3502.0], [25.4, 3503.0], [25.5, 3503.0], [25.6, 3554.0], [25.7, 3554.0], [25.8, 3555.0], [25.9, 3555.0], [26.0, 3555.0], [26.1, 3668.0], [26.2, 3784.0], [26.3, 3805.0], [26.4, 3805.0], [26.5, 3806.0], [26.6, 3859.0], [26.7, 3860.0], [26.8, 3866.0], [26.9, 3866.0], [27.0, 3867.0], [27.1, 3867.0], [27.2, 3879.0], [27.3, 3879.0], [27.4, 3915.0], [27.5, 3915.0], [27.6, 3917.0], [27.7, 3964.0], [27.8, 3964.0], [27.9, 3988.0], [28.0, 4033.0], [28.1, 4081.0], [28.2, 4082.0], [28.3, 4083.0], [28.4, 4083.0], [28.5, 4084.0], [28.6, 4139.0], [28.7, 4140.0], [28.8, 4180.0], [28.9, 4195.0], [29.0, 4197.0], [29.1, 4218.0], [29.2, 4228.0], [29.3, 4231.0], [29.4, 4274.0], [29.5, 4275.0], [29.6, 4276.0], [29.7, 4285.0], [29.8, 4285.0], [29.9, 4291.0], [30.0, 4291.0], [30.1, 4291.0], [30.2, 4291.0], [30.3, 4291.0], [30.4, 4291.0], [30.5, 4292.0], [30.6, 4293.0], [30.7, 4300.0], [30.8, 4300.0], [30.9, 4302.0], [31.0, 4302.0], [31.1, 4319.0], [31.2, 4320.0], [31.3, 4350.0], [31.4, 4382.0], [31.5, 4390.0], [31.6, 4407.0], [31.7, 4613.0], [31.8, 4700.0], [31.9, 4701.0], [32.0, 4702.0], [32.1, 4703.0], [32.2, 4805.0], [32.3, 4822.0], [32.4, 4836.0], [32.5, 4837.0], [32.6, 4837.0], [32.7, 4917.0], [32.8, 4920.0], [32.9, 4973.0], [33.0, 4981.0], [33.1, 4981.0], [33.2, 4982.0], [33.3, 5006.0], [33.4, 5031.0], [33.5, 5106.0], [33.6, 5106.0], [33.7, 5106.0], [33.8, 5107.0], [33.9, 5107.0], [34.0, 5107.0], [34.1, 5107.0], [34.2, 5128.0], [34.3, 5219.0], [34.4, 5248.0], [34.5, 5252.0], [34.6, 5266.0], [34.7, 5276.0], [34.8, 5279.0], [34.9, 5296.0], [35.0, 5297.0], [35.1, 5297.0], [35.2, 5297.0], [35.3, 5310.0], [35.4, 5311.0], [35.5, 5341.0], [35.6, 5341.0], [35.7, 5343.0], [35.8, 5343.0], [35.9, 5406.0], [36.0, 5407.0], [36.1, 5408.0], [36.2, 5421.0], [36.3, 5427.0], [36.4, 5432.0], [36.5, 5456.0], [36.6, 5456.0], [36.7, 5500.0], [36.8, 5505.0], [36.9, 5506.0], [37.0, 5506.0], [37.1, 5507.0], [37.2, 5507.0], [37.3, 5518.0], [37.4, 5518.0], [37.5, 5572.0], [37.6, 5573.0], [37.7, 5630.0], [37.8, 5668.0], [37.9, 5669.0], [38.0, 5669.0], [38.1, 5682.0], [38.2, 5683.0], [38.3, 5683.0], [38.4, 5683.0], [38.5, 5683.0], [38.6, 5684.0], [38.7, 5685.0], [38.8, 5685.0], [38.9, 5685.0], [39.0, 5685.0], [39.1, 5685.0], [39.2, 5686.0], [39.3, 5736.0], [39.4, 5737.0], [39.5, 5768.0], [39.6, 5768.0], [39.7, 5776.0], [39.8, 5776.0], [39.9, 5777.0], [40.0, 5777.0], [40.1, 5812.0], [40.2, 5825.0], [40.3, 5833.0], [40.4, 5835.0], [40.5, 5836.0], [40.6, 5836.0], [40.7, 5836.0], [40.8, 5837.0], [40.9, 5849.0], [41.0, 5852.0], [41.1, 5865.0], [41.2, 5866.0], [41.3, 5872.0], [41.4, 5894.0], [41.5, 5938.0], [41.6, 5940.0], [41.7, 5968.0], [41.8, 5972.0], [41.9, 5972.0], [42.0, 5973.0], [42.1, 6016.0], [42.2, 6040.0], [42.3, 6055.0], [42.4, 6056.0], [42.5, 6057.0], [42.6, 6115.0], [42.7, 6143.0], [42.8, 6144.0], [42.9, 6145.0], [43.0, 6206.0], [43.1, 6253.0], [43.2, 6300.0], [43.3, 6311.0], [43.4, 6319.0], [43.5, 6320.0], [43.6, 6320.0], [43.7, 6321.0], [43.8, 6321.0], [43.9, 6322.0], [44.0, 6323.0], [44.1, 6324.0], [44.2, 6348.0], [44.3, 6348.0], [44.4, 6349.0], [44.5, 6385.0], [44.6, 6428.0], [44.7, 6454.0], [44.8, 6454.0], [44.9, 6457.0], [45.0, 6457.0], [45.1, 6458.0], [45.2, 6459.0], [45.3, 6471.0], [45.4, 6475.0], [45.5, 6476.0], [45.6, 6476.0], [45.7, 6477.0], [45.8, 6498.0], [45.9, 6510.0], [46.0, 6511.0], [46.1, 6519.0], [46.2, 6546.0], [46.3, 6549.0], [46.4, 6563.0], [46.5, 6564.0], [46.6, 6580.0], [46.7, 6611.0], [46.8, 6644.0], [46.9, 6677.0], [47.0, 6711.0], [47.1, 6711.0], [47.2, 6712.0], [47.3, 6713.0], [47.4, 6713.0], [47.5, 6713.0], [47.6, 6713.0], [47.7, 6714.0], [47.8, 6714.0], [47.9, 6714.0], [48.0, 6714.0], [48.1, 6715.0], [48.2, 6715.0], [48.3, 6715.0], [48.4, 6716.0], [48.5, 6716.0], [48.6, 6716.0], [48.7, 6716.0], [48.8, 6716.0], [48.9, 6739.0], [49.0, 6793.0], [49.1, 6824.0], [49.2, 6824.0], [49.3, 6826.0], [49.4, 6827.0], [49.5, 6856.0], [49.6, 6857.0], [49.7, 6857.0], [49.8, 6857.0], [49.9, 6858.0], [50.0, 6874.0], [50.1, 6904.0], [50.2, 6905.0], [50.3, 6914.0], [50.4, 6943.0], [50.5, 6944.0], [50.6, 6945.0], [50.7, 6964.0], [50.8, 6966.0], [50.9, 6966.0], [51.0, 6996.0], [51.1, 6996.0], [51.2, 6997.0], [51.3, 6998.0], [51.4, 7010.0], [51.5, 7010.0], [51.6, 7011.0], [51.7, 7011.0], [51.8, 7012.0], [51.9, 7012.0], [52.0, 7016.0], [52.1, 7036.0], [52.2, 7057.0], [52.3, 7065.0], [52.4, 7072.0], [52.5, 7073.0], [52.6, 7073.0], [52.7, 7073.0], [52.8, 7073.0], [52.9, 7073.0], [53.0, 7074.0], [53.1, 7075.0], [53.2, 7075.0], [53.3, 7075.0], [53.4, 7075.0], [53.5, 7075.0], [53.6, 7076.0], [53.7, 7076.0], [53.8, 7076.0], [53.9, 7076.0], [54.0, 7077.0], [54.1, 7079.0], [54.2, 7080.0], [54.3, 7080.0], [54.4, 7080.0], [54.5, 7081.0], [54.6, 7081.0], [54.7, 7081.0], [54.8, 7082.0], [54.9, 7098.0], [55.0, 7107.0], [55.1, 7118.0], [55.2, 7121.0], [55.3, 7135.0], [55.4, 7136.0], [55.5, 7136.0], [55.6, 7137.0], [55.7, 7138.0], [55.8, 7168.0], [55.9, 7170.0], [56.0, 7170.0], [56.1, 7170.0], [56.2, 7171.0], [56.3, 7171.0], [56.4, 7172.0], [56.5, 7172.0], [56.6, 7172.0], [56.7, 7172.0], [56.8, 7172.0], [56.9, 7173.0], [57.0, 7173.0], [57.1, 7173.0], [57.2, 7173.0], [57.3, 7173.0], [57.4, 7173.0], [57.5, 7173.0], [57.6, 7173.0], [57.7, 7174.0], [57.8, 7174.0], [57.9, 7174.0], [58.0, 7174.0], [58.1, 7174.0], [58.2, 7175.0], [58.3, 7175.0], [58.4, 7175.0], [58.5, 7175.0], [58.6, 7175.0], [58.7, 7176.0], [58.8, 7176.0], [58.9, 7193.0], [59.0, 7207.0], [59.1, 7207.0], [59.2, 7224.0], [59.3, 7255.0], [59.4, 7297.0], [59.5, 7310.0], [59.6, 7312.0], [59.7, 7313.0], [59.8, 7313.0], [59.9, 7314.0], [60.0, 7315.0], [60.1, 7315.0], [60.2, 7316.0], [60.3, 7317.0], [60.4, 7317.0], [60.5, 7326.0], [60.6, 7343.0], [60.7, 7414.0], [60.8, 7489.0], [60.9, 7490.0], [61.0, 7491.0], [61.1, 7491.0], [61.2, 7492.0], [61.3, 7493.0], [61.4, 7508.0], [61.5, 7509.0], [61.6, 7509.0], [61.7, 7509.0], [61.8, 7510.0], [61.9, 7513.0], [62.0, 7533.0], [62.1, 7537.0], [62.2, 7537.0], [62.3, 7542.0], [62.4, 7544.0], [62.5, 7546.0], [62.6, 7557.0], [62.7, 7557.0], [62.8, 7560.0], [62.9, 7595.0], [63.0, 7612.0], [63.1, 7613.0], [63.2, 7620.0], [63.3, 7624.0], [63.4, 7624.0], [63.5, 7624.0], [63.6, 7625.0], [63.7, 7647.0], [63.8, 7648.0], [63.9, 7649.0], [64.0, 7668.0], [64.1, 7677.0], [64.2, 7678.0], [64.3, 7678.0], [64.4, 7679.0], [64.5, 7680.0], [64.6, 7681.0], [64.7, 7681.0], [64.8, 7681.0], [64.9, 7682.0], [65.0, 7684.0], [65.1, 7694.0], [65.2, 7695.0], [65.3, 7712.0], [65.4, 7728.0], [65.5, 7733.0], [65.6, 7733.0], [65.7, 7733.0], [65.8, 7734.0], [65.9, 7734.0], [66.0, 7735.0], [66.1, 7735.0], [66.2, 7735.0], [66.3, 7736.0], [66.4, 7737.0], [66.5, 7737.0], [66.6, 7738.0], [66.7, 7745.0], [66.8, 7750.0], [66.9, 7763.0], [67.0, 7782.0], [67.1, 7782.0], [67.2, 7782.0], [67.3, 7783.0], [67.4, 7783.0], [67.5, 7783.0], [67.6, 7783.0], [67.7, 7825.0], [67.8, 7846.0], [67.9, 7921.0], [68.0, 7944.0], [68.1, 7956.0], [68.2, 7958.0], [68.3, 7959.0], [68.4, 7990.0], [68.5, 7993.0], [68.6, 7993.0], [68.7, 7993.0], [68.8, 7994.0], [68.9, 8003.0], [69.0, 8007.0], [69.1, 8019.0], [69.2, 8020.0], [69.3, 8026.0], [69.4, 8050.0], [69.5, 8053.0], [69.6, 8088.0], [69.7, 8088.0], [69.8, 8089.0], [69.9, 8090.0], [70.0, 8090.0], [70.1, 8090.0], [70.2, 8091.0], [70.3, 8091.0], [70.4, 8091.0], [70.5, 8091.0], [70.6, 8092.0], [70.7, 8127.0], [70.8, 8128.0], [70.9, 8129.0], [71.0, 8137.0], [71.1, 8184.0], [71.2, 8192.0], [71.3, 8192.0], [71.4, 8192.0], [71.5, 8194.0], [71.6, 8195.0], [71.7, 8195.0], [71.8, 8195.0], [71.9, 8196.0], [72.0, 8197.0], [72.1, 8197.0], [72.2, 8222.0], [72.3, 8224.0], [72.4, 8225.0], [72.5, 8259.0], [72.6, 8260.0], [72.7, 8297.0], [72.8, 8298.0], [72.9, 8299.0], [73.0, 8299.0], [73.1, 8311.0], [73.2, 8311.0], [73.3, 8311.0], [73.4, 8311.0], [73.5, 8320.0], [73.6, 8321.0], [73.7, 8321.0], [73.8, 8339.0], [73.9, 8395.0], [74.0, 8421.0], [74.1, 8456.0], [74.2, 8457.0], [74.3, 8457.0], [74.4, 8461.0], [74.5, 8503.0], [74.6, 8513.0], [74.7, 8513.0], [74.8, 8514.0], [74.9, 8514.0], [75.0, 8514.0], [75.1, 8514.0], [75.2, 8514.0], [75.3, 8514.0], [75.4, 8514.0], [75.5, 8515.0], [75.6, 8544.0], [75.7, 8561.0], [75.8, 8569.0], [75.9, 8599.0], [76.0, 8603.0], [76.1, 8603.0], [76.2, 8615.0], [76.3, 8636.0], [76.4, 8637.0], [76.5, 8637.0], [76.6, 8638.0], [76.7, 8638.0], [76.8, 8650.0], [76.9, 8651.0], [77.0, 8651.0], [77.1, 8680.0], [77.2, 8702.0], [77.3, 8710.0], [77.4, 8713.0], [77.5, 8762.0], [77.6, 8791.0], [77.7, 8792.0], [77.8, 8793.0], [77.9, 8806.0], [78.0, 8815.0], [78.1, 8845.0], [78.2, 8890.0], [78.3, 8900.0], [78.4, 8931.0], [78.5, 8931.0], [78.6, 8931.0], [78.7, 8950.0], [78.8, 8960.0], [78.9, 8961.0], [79.0, 8961.0], [79.1, 8962.0], [79.2, 8962.0], [79.3, 8965.0], [79.4, 8966.0], [79.5, 8966.0], [79.6, 8966.0], [79.7, 8966.0], [79.8, 8966.0], [79.9, 9000.0], [80.0, 9022.0], [80.1, 9034.0], [80.2, 9037.0], [80.3, 9037.0], [80.4, 9037.0], [80.5, 9043.0], [80.6, 9046.0], [80.7, 9055.0], [80.8, 9056.0], [80.9, 9056.0], [81.0, 9057.0], [81.1, 9057.0], [81.2, 9111.0], [81.3, 9112.0], [81.4, 9112.0], [81.5, 9112.0], [81.6, 9113.0], [81.7, 9113.0], [81.8, 9113.0], [81.9, 9114.0], [82.0, 9114.0], [82.1, 9114.0], [82.2, 9114.0], [82.3, 9131.0], [82.4, 9134.0], [82.5, 9136.0], [82.6, 9138.0], [82.7, 9140.0], [82.8, 9140.0], [82.9, 9140.0], [83.0, 9140.0], [83.1, 9141.0], [83.2, 9141.0], [83.3, 9141.0], [83.4, 9142.0], [83.5, 9142.0], [83.6, 9144.0], [83.7, 9153.0], [83.8, 9183.0], [83.9, 9210.0], [84.0, 9229.0], [84.1, 9236.0], [84.2, 9255.0], [84.3, 9273.0], [84.4, 9278.0], [84.5, 9278.0], [84.6, 9280.0], [84.7, 9280.0], [84.8, 9281.0], [84.9, 9281.0], [85.0, 9281.0], [85.1, 9281.0], [85.2, 9281.0], [85.3, 9282.0], [85.4, 9283.0], [85.5, 9284.0], [85.6, 9330.0], [85.7, 9342.0], [85.8, 9349.0], [85.9, 9350.0], [86.0, 9350.0], [86.1, 9350.0], [86.2, 9350.0], [86.3, 9388.0], [86.4, 9411.0], [86.5, 9411.0], [86.6, 9412.0], [86.7, 9412.0], [86.8, 9413.0], [86.9, 9414.0], [87.0, 9437.0], [87.1, 9480.0], [87.2, 9490.0], [87.3, 9490.0], [87.4, 9542.0], [87.5, 9543.0], [87.6, 9544.0], [87.7, 9580.0], [87.8, 9580.0], [87.9, 9580.0], [88.0, 9580.0], [88.1, 9580.0], [88.2, 9581.0], [88.3, 9581.0], [88.4, 9581.0], [88.5, 9581.0], [88.6, 9582.0], [88.7, 9582.0], [88.8, 9597.0], [88.9, 9629.0], [89.0, 9629.0], [89.1, 9629.0], [89.2, 9630.0], [89.3, 9630.0], [89.4, 9630.0], [89.5, 9630.0], [89.6, 9631.0], [89.7, 9631.0], [89.8, 9805.0], [89.9, 9820.0], [90.0, 9821.0], [90.1, 9821.0], [90.2, 9822.0], [90.3, 9906.0], [90.4, 9992.0], [90.5, 9992.0], [90.6, 10012.0], [90.7, 10075.0], [90.8, 10198.0], [90.9, 10199.0], [91.0, 10199.0], [91.1, 10199.0], [91.2, 10200.0], [91.3, 10200.0], [91.4, 10221.0], [91.5, 10223.0], [91.6, 10244.0], [91.7, 10245.0], [91.8, 10334.0], [91.9, 10334.0], [92.0, 10334.0], [92.1, 10337.0], [92.2, 10341.0], [92.3, 10341.0], [92.4, 10342.0], [92.5, 10342.0], [92.6, 10342.0], [92.7, 10342.0], [92.8, 10343.0], [92.9, 10345.0], [93.0, 10382.0], [93.1, 10383.0], [93.2, 10383.0], [93.3, 10384.0], [93.4, 10385.0], [93.5, 10386.0], [93.6, 10547.0], [93.7, 10548.0], [93.8, 10548.0], [93.9, 10548.0], [94.0, 10549.0], [94.1, 10549.0], [94.2, 10549.0], [94.3, 10549.0], [94.4, 10549.0], [94.5, 10550.0], [94.6, 10552.0], [94.7, 10585.0], [94.8, 10586.0], [94.9, 10785.0], [95.0, 10828.0], [95.1, 10828.0], [95.2, 10829.0], [95.3, 10829.0], [95.4, 10840.0], [95.5, 10840.0], [95.6, 10840.0], [95.7, 10859.0], [95.8, 10859.0], [95.9, 10861.0], [96.0, 10862.0], [96.1, 11043.0], [96.2, 11203.0], [96.3, 11204.0], [96.4, 11204.0], [96.5, 11204.0], [96.6, 11205.0], [96.7, 11468.0], [96.8, 11468.0], [96.9, 11469.0], [97.0, 11470.0], [97.1, 11471.0], [97.2, 11471.0], [97.3, 11471.0], [97.4, 11471.0], [97.5, 11473.0], [97.6, 11475.0], [97.7, 11475.0], [97.8, 11516.0], [97.9, 11516.0], [98.0, 11516.0], [98.1, 11518.0], [98.2, 11518.0], [98.3, 11519.0], [98.4, 11520.0], [98.5, 11521.0], [98.6, 11667.0], [98.7, 11808.0], [98.8, 11808.0], [98.9, 11808.0], [99.0, 11825.0], [99.1, 11928.0], [99.2, 11929.0], [99.3, 11929.0], [99.4, 11929.0], [99.5, 11929.0], [99.6, 11929.0], [99.7, 11979.0], [99.8, 11980.0], [99.9, 11981.0], [100.0, 11983.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 118.0, "series": [{"data": [[300.0, 47.0], [400.0, 108.0], [500.0, 46.0], [600.0, 30.0], [700.0, 19.0], [800.0, 17.0], [900.0, 14.0], [1000.0, 12.0], [1100.0, 11.0], [1200.0, 6.0], [1300.0, 7.0], [1400.0, 11.0], [1500.0, 7.0], [1600.0, 7.0], [1700.0, 6.0], [1800.0, 17.0], [1900.0, 3.0], [2000.0, 10.0], [2100.0, 37.0], [2200.0, 39.0], [2300.0, 29.0], [2400.0, 48.0], [2500.0, 35.0], [2600.0, 26.0], [2700.0, 30.0], [2800.0, 17.0], [2900.0, 6.0], [3000.0, 41.0], [3100.0, 17.0], [3200.0, 8.0], [3300.0, 11.0], [3400.0, 11.0], [3500.0, 37.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 33.0], [3900.0, 19.0], [4000.0, 17.0], [4200.0, 49.0], [4100.0, 14.0], [4300.0, 26.0], [4600.0, 2.0], [4400.0, 2.0], [4500.0, 2.0], [4700.0, 12.0], [4800.0, 15.0], [5000.0, 5.0], [5100.0, 23.0], [4900.0, 18.0], [5200.0, 30.0], [5300.0, 19.0], [5400.0, 23.0], [5500.0, 30.0], [5600.0, 45.0], [5700.0, 25.0], [5800.0, 40.0], [5900.0, 19.0], [6000.0, 14.0], [6100.0, 13.0], [6300.0, 42.0], [6200.0, 6.0], [6500.0, 24.0], [6400.0, 36.0], [6600.0, 8.0], [6900.0, 39.0], [6700.0, 62.0], [6800.0, 30.0], [7000.0, 106.0], [7100.0, 118.0], [7300.0, 37.0], [7400.0, 20.0], [7200.0, 15.0], [7500.0, 46.0], [7600.0, 69.0], [7900.0, 30.0], [7700.0, 72.0], [7800.0, 5.0], [8100.0, 46.0], [8000.0, 52.0], [8200.0, 26.0], [8600.0, 35.0], [8700.0, 23.0], [8300.0, 27.0], [8500.0, 43.0], [8400.0, 14.0], [9200.0, 51.0], [8800.0, 10.0], [9000.0, 38.0], [9100.0, 78.0], [8900.0, 49.0], [9400.0, 30.0], [9500.0, 43.0], [9600.0, 28.0], [9300.0, 24.0], [9800.0, 15.0], [10200.0, 15.0], [10000.0, 4.0], [9900.0, 9.0], [10100.0, 14.0], [10500.0, 36.0], [10300.0, 56.0], [10700.0, 3.0], [10800.0, 32.0], [11200.0, 17.0], [11000.0, 3.0], [11400.0, 31.0], [11500.0, 25.0], [11600.0, 2.0], [11700.0, 1.0], [11900.0, 27.0], [11800.0, 12.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2745.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 53.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2745.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 110.5869565217391, "minX": 1.78195188E12, "maxY": 258.6219888820258, "series": [{"data": [[1.78195188E12, 110.5869565217391], [1.78195194E12, 258.6219888820258]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 288 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195194E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 368.0, "minX": 2.0, "maxY": 11794.0, "series": [{"data": [[2.0, 6716.0], [4.0, 526.0], [5.0, 431.5], [6.0, 370.0], [7.0, 1428.1666666666665], [8.0, 370.0], [9.0, 368.0], [10.0, 370.3333333333333], [11.0, 1164.125], [12.0, 378.75], [13.0, 386.1111111111111], [14.0, 394.5], [15.0, 1193.25], [16.0, 413.7142857142857], [17.0, 426.125], [18.0, 434.6], [19.0, 1017.8181818181818], [20.0, 1241.75], [21.0, 959.2307692307693], [22.0, 3357.066666666667], [23.0, 430.66666666666663], [24.0, 1073.9], [25.0, 463.63636363636357], [26.0, 1730.8666666666668], [27.0, 504.66666666666663], [28.0, 522.3076923076924], [29.0, 2089.0833333333335], [30.0, 3641.4444444444453], [31.0, 594.8181818181819], [32.0, 620.7777777777778], [33.0, 646.375], [34.0, 681.8000000000001], [35.0, 714.7777777777778], [36.0, 765.4285714285714], [37.0, 816.5], [38.0, 845.5714285714286], [39.0, 905.2727272727273], [40.0, 961.5], [41.0, 1043.0], [42.0, 1061.4], [43.0, 1115.0909090909092], [44.0, 1195.7142857142856], [45.0, 1303.1666666666665], [47.0, 1430.0], [48.0, 2880.4545454545455], [49.0, 6712.5], [50.0, 2830.0000000000005], [51.0, 6713.4], [52.0, 2194.181818181818], [54.0, 1944.090909090909], [57.0, 2013.2499999999998], [60.0, 2916.6249999999995], [64.0, 3264.722222222222], [68.0, 2744.333333333333], [71.0, 2721.4736842105267], [75.0, 6988.499999999999], [73.0, 6713.0], [76.0, 2835.095238095238], [77.0, 7080.444444444444], [80.0, 2808.333333333333], [82.0, 7076.4], [84.0, 2799.6799999999994], [87.0, 2440.535714285714], [85.0, 7075.333333333333], [91.0, 2217.4285714285716], [95.0, 2222.5483870967746], [99.0, 3842.8695652173915], [100.0, 1930.0], [104.0, 2587.057142857143], [109.0, 2901.2857142857138], [110.0, 2183.0], [112.0, 2612.0], [114.0, 7073.8], [116.0, 3254.850000000001], [123.0, 4033.0], [124.0, 3966.526315789473], [126.0, 3459.8333333333335], [132.0, 4701.545454545454], [133.0, 4138.941176470588], [134.0, 3668.0], [135.0, 9714.166666666668], [130.0, 8020.25], [140.0, 5030.0], [142.0, 5455.6], [143.0, 6003.238095238095], [136.0, 11794.0], [145.0, 4301.0], [150.0, 5427.0], [144.0, 7176.0], [152.0, 5776.333333333333], [153.0, 4794.837837837838], [154.0, 4352.0], [158.0, 5250.75], [161.0, 5225.54347826087], [162.0, 4082.7333333333336], [166.0, 4951.0], [168.0, 5234.0], [170.0, 5732.5], [171.0, 4351.199999999999], [177.0, 4981.363636363637], [181.0, 5868.375], [182.0, 5125.274999999998], [183.0, 7174.8], [180.0, 7175.0], [179.0, 7174.0], [178.0, 7173.0], [186.0, 5106.473684210526], [190.0, 6015.5], [191.0, 6152.2], [187.0, 7175.0], [192.0, 6184.666666666666], [195.0, 5260.714285714285], [196.0, 5296.444444444444], [197.0, 7174.0], [202.0, 7082.769230769231], [206.0, 7656.624999999999], [207.0, 7315.25], [205.0, 7176.0], [204.0, 7174.0], [201.0, 7175.0], [208.0, 5949.28125], [212.0, 6321.086956521738], [213.0, 6578.5], [214.0, 7173.0], [216.0, 6881.888888888889], [217.0, 8767.875], [218.0, 6563.571428571428], [223.0, 6805.222222222223], [220.0, 7174.0], [224.0, 6958.782608695653], [230.0, 7172.5], [229.0, 7649.0], [228.0, 7174.0], [226.0, 7171.666666666667], [225.0, 7172.5], [232.0, 8001.517241379313], [234.0, 7198.749999999999], [236.0, 7109.777777777777], [237.0, 7362.0], [238.0, 7541.545454545455], [239.0, 6957.833333333333], [235.0, 7654.857142857143], [240.0, 8721.125], [243.0, 6523.166666666667], [245.0, 8206.520000000002], [254.0, 9564.612903225801], [256.0, 8051.333333333333], [257.0, 7879.771929824562], [259.0, 8688.78947368421], [260.0, 5881.718750000001], [266.0, 7120.666666666667], [275.0, 6600.0], [273.0, 7220.916666666667], [272.0, 8136.607142857145], [274.0, 6852.5], [277.0, 7031.0], [278.0, 7098.0], [281.0, 9468.166666666668], [282.0, 9201.0], [285.0, 8183.636363636364], [286.0, 6995.0], [287.0, 6935.0], [288.0, 8904.261811023624]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[191.74805282763316, 6132.03826617]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 288.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3512.866666666667, "minX": 1.78195188E12, "maxY": 6237.716666666666, "series": [{"data": [[1.78195188E12, 5135.9], [1.78195194E12, 6237.716666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195188E12, 3512.866666666667], [1.78195194E12, 4263.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195194E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3313.514242878566, "minX": 1.78195188E12, "maxY": 8454.404570722669, "series": [{"data": [[1.78195188E12, 3313.514242878566], [1.78195194E12, 8454.404570722669]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195194E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3313.4992503748117, "minX": 1.78195188E12, "maxY": 8454.384187770245, "series": [{"data": [[1.78195188E12, 3313.4992503748117], [1.78195194E12, 8454.384187770245]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195194E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05991352686843733, "minX": 1.78195188E12, "maxY": 0.0697151424287857, "series": [{"data": [[1.78195188E12, 0.0697151424287857], [1.78195194E12, 0.05991352686843733]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195194E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 355.0, "minX": 1.78195188E12, "maxY": 618.0, "series": [{"data": [[1.78195188E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195188E12, 355.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195188E12, 568.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195188E12, 616.8199999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195188E12, 448.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195188E12, 592.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195188E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 10005.0, "series": [{"data": [[35.0, 399.0], [9.0, 370.0], [41.0, 452.0], [43.0, 612.0], [45.0, 544.0], [23.0, 368.0], [49.0, 452.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1374.5], [2.0, 6031.0], [32.0, 5297.0], [34.0, 1131.5], [35.0, 2723.0], [36.0, 3989.0], [38.0, 3058.0], [40.0, 3500.0], [43.0, 4195.5], [45.0, 4291.0], [46.0, 7877.0], [49.0, 5276.0], [51.0, 5507.0], [55.0, 9581.0], [57.0, 6999.5], [56.0, 7694.0], [59.0, 6323.0], [62.0, 8638.0], [66.0, 7783.0], [64.0, 9141.0], [5.0, 6511.0], [83.0, 9411.0], [85.0, 9280.0], [6.0, 7121.0], [98.0, 7738.5], [102.0, 6858.0], [117.0, 8513.0], [126.0, 8457.0], [8.0, 5794.5], [143.0, 7073.0], [145.0, 7175.0], [10.0, 10005.0], [11.0, 4841.5], [12.0, 7612.5], [13.0, 3877.0], [1.0, 7751.0], [18.0, 8792.0], [19.0, 4090.5], [20.0, 7647.5], [21.0, 2772.0], [22.0, 6713.5], [25.0, 3995.0], [26.0, 6477.0], [28.0, 2325.0], [29.0, 2450.0], [31.0, 4607.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 145.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 10005.0, "series": [{"data": [[35.0, 399.0], [9.0, 370.0], [41.0, 452.0], [43.0, 612.0], [45.0, 544.0], [23.0, 368.0], [49.0, 451.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1374.5], [2.0, 6031.0], [32.0, 5297.0], [34.0, 1131.5], [35.0, 2723.0], [36.0, 3989.0], [38.0, 3058.0], [40.0, 3500.0], [43.0, 4195.5], [45.0, 4291.0], [46.0, 7877.0], [49.0, 5276.0], [51.0, 5507.0], [55.0, 9581.0], [57.0, 6999.5], [56.0, 7694.0], [59.0, 6323.0], [62.0, 8638.0], [66.0, 7783.0], [64.0, 9141.0], [5.0, 6511.0], [83.0, 9411.0], [85.0, 9280.0], [6.0, 7121.0], [98.0, 7738.5], [102.0, 6858.0], [117.0, 8513.0], [126.0, 8457.0], [8.0, 5794.5], [143.0, 7073.0], [145.0, 7175.0], [10.0, 10005.0], [11.0, 4841.5], [12.0, 7612.5], [13.0, 3877.0], [1.0, 7751.0], [18.0, 8792.0], [19.0, 4090.5], [20.0, 7647.5], [21.0, 2772.0], [22.0, 6713.5], [25.0, 3995.0], [26.0, 6477.0], [28.0, 2325.0], [29.0, 2450.0], [31.0, 4607.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 145.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.183333333333334, "minX": 1.78195188E12, "maxY": 26.033333333333335, "series": [{"data": [[1.78195188E12, 26.033333333333335], [1.78195194E12, 23.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195194E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.78195188E12, "maxY": 24.7, "series": [{"data": [[1.78195188E12, 22.233333333333334], [1.78195194E12, 24.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195194E12, 2.283333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195194E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.78195188E12, "maxY": 26.983333333333334, "series": [{"data": [[1.78195188E12, 3.466666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195188E12, 18.766666666666666], [1.78195194E12, 26.983333333333334]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195194E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.78195188E12, "maxY": 26.983333333333334, "series": [{"data": [[1.78195188E12, 3.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195188E12, 18.766666666666666], [1.78195194E12, 26.983333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195194E12, "title": "Total Transactions Per Second"}},
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

