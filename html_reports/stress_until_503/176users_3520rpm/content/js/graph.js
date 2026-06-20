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
        data: {"result": {"minY": 343.0, "minX": 0.0, "maxY": 9457.0, "series": [{"data": [[0.0, 343.0], [0.1, 345.0], [0.2, 349.0], [0.3, 351.0], [0.4, 354.0], [0.5, 358.0], [0.6, 360.0], [0.7, 362.0], [0.8, 366.0], [0.9, 367.0], [1.0, 369.0], [1.1, 371.0], [1.2, 371.0], [1.3, 373.0], [1.4, 376.0], [1.5, 377.0], [1.6, 378.0], [1.7, 380.0], [1.8, 380.0], [1.9, 383.0], [2.0, 386.0], [2.1, 388.0], [2.2, 389.0], [2.3, 390.0], [2.4, 393.0], [2.5, 396.0], [2.6, 398.0], [2.7, 401.0], [2.8, 405.0], [2.9, 406.0], [3.0, 408.0], [3.1, 409.0], [3.2, 411.0], [3.3, 412.0], [3.4, 416.0], [3.5, 419.0], [3.6, 422.0], [3.7, 426.0], [3.8, 430.0], [3.9, 435.0], [4.0, 437.0], [4.1, 441.0], [4.2, 446.0], [4.3, 450.0], [4.4, 452.0], [4.5, 456.0], [4.6, 457.0], [4.7, 462.0], [4.8, 464.0], [4.9, 467.0], [5.0, 472.0], [5.1, 475.0], [5.2, 479.0], [5.3, 485.0], [5.4, 490.0], [5.5, 494.0], [5.6, 500.0], [5.7, 505.0], [5.8, 509.0], [5.9, 515.0], [6.0, 527.0], [6.1, 533.0], [6.2, 537.0], [6.3, 541.0], [6.4, 546.0], [6.5, 555.0], [6.6, 563.0], [6.7, 567.0], [6.8, 575.0], [6.9, 581.0], [7.0, 590.0], [7.1, 596.0], [7.2, 604.0], [7.3, 612.0], [7.4, 624.0], [7.5, 630.0], [7.6, 634.0], [7.7, 643.0], [7.8, 652.0], [7.9, 666.0], [8.0, 673.0], [8.1, 677.0], [8.2, 687.0], [8.3, 705.0], [8.4, 714.0], [8.5, 722.0], [8.6, 733.0], [8.7, 737.0], [8.8, 747.0], [8.9, 762.0], [9.0, 771.0], [9.1, 782.0], [9.2, 794.0], [9.3, 808.0], [9.4, 817.0], [9.5, 830.0], [9.6, 840.0], [9.7, 858.0], [9.8, 865.0], [9.9, 875.0], [10.0, 889.0], [10.1, 913.0], [10.2, 923.0], [10.3, 932.0], [10.4, 941.0], [10.5, 958.0], [10.6, 977.0], [10.7, 988.0], [10.8, 1005.0], [10.9, 1015.0], [11.0, 1039.0], [11.1, 1051.0], [11.2, 1072.0], [11.3, 1083.0], [11.4, 1098.0], [11.5, 1112.0], [11.6, 1134.0], [11.7, 1164.0], [11.8, 1201.0], [11.9, 1211.0], [12.0, 1225.0], [12.1, 1239.0], [12.2, 1269.0], [12.3, 1287.0], [12.4, 1290.0], [12.5, 1328.0], [12.6, 1355.0], [12.7, 1359.0], [12.8, 1375.0], [12.9, 1381.0], [13.0, 1388.0], [13.1, 1393.0], [13.2, 1417.0], [13.3, 1423.0], [13.4, 1426.0], [13.5, 1428.0], [13.6, 1436.0], [13.7, 1459.0], [13.8, 1460.0], [13.9, 1461.0], [14.0, 1482.0], [14.1, 1491.0], [14.2, 1496.0], [14.3, 1499.0], [14.4, 1499.0], [14.5, 1506.0], [14.6, 1506.0], [14.7, 1508.0], [14.8, 1517.0], [14.9, 1523.0], [15.0, 1524.0], [15.1, 1526.0], [15.2, 1536.0], [15.3, 1538.0], [15.4, 1541.0], [15.5, 1542.0], [15.6, 1555.0], [15.7, 1555.0], [15.8, 1556.0], [15.9, 1560.0], [16.0, 1563.0], [16.1, 1563.0], [16.2, 1568.0], [16.3, 1568.0], [16.4, 1571.0], [16.5, 1573.0], [16.6, 1594.0], [16.7, 1607.0], [16.8, 1615.0], [16.9, 1616.0], [17.0, 1617.0], [17.1, 1617.0], [17.2, 1625.0], [17.3, 1625.0], [17.4, 1635.0], [17.5, 1636.0], [17.6, 1642.0], [17.7, 1643.0], [17.8, 1643.0], [17.9, 1668.0], [18.0, 1669.0], [18.1, 1669.0], [18.2, 1670.0], [18.3, 1683.0], [18.4, 1684.0], [18.5, 1685.0], [18.6, 1690.0], [18.7, 1694.0], [18.8, 1694.0], [18.9, 1696.0], [19.0, 1701.0], [19.1, 1703.0], [19.2, 1722.0], [19.3, 1727.0], [19.4, 1751.0], [19.5, 1752.0], [19.6, 1752.0], [19.7, 1752.0], [19.8, 1753.0], [19.9, 1762.0], [20.0, 1763.0], [20.1, 1764.0], [20.2, 1764.0], [20.3, 1766.0], [20.4, 1766.0], [20.5, 1769.0], [20.6, 1776.0], [20.7, 1777.0], [20.8, 1777.0], [20.9, 1780.0], [21.0, 1807.0], [21.1, 1843.0], [21.2, 1845.0], [21.3, 1846.0], [21.4, 1846.0], [21.5, 1846.0], [21.6, 1862.0], [21.7, 1869.0], [21.8, 1869.0], [21.9, 1869.0], [22.0, 1871.0], [22.1, 1871.0], [22.2, 1872.0], [22.3, 1872.0], [22.4, 1872.0], [22.5, 1891.0], [22.6, 1913.0], [22.7, 1918.0], [22.8, 1918.0], [22.9, 1918.0], [23.0, 1919.0], [23.1, 1931.0], [23.2, 1944.0], [23.3, 1952.0], [23.4, 1953.0], [23.5, 1953.0], [23.6, 1953.0], [23.7, 1954.0], [23.8, 1981.0], [23.9, 1981.0], [24.0, 2008.0], [24.1, 2009.0], [24.2, 2021.0], [24.3, 2022.0], [24.4, 2022.0], [24.5, 2055.0], [24.6, 2055.0], [24.7, 2055.0], [24.8, 2059.0], [24.9, 2060.0], [25.0, 2103.0], [25.1, 2104.0], [25.2, 2104.0], [25.3, 2104.0], [25.4, 2105.0], [25.5, 2159.0], [25.6, 2160.0], [25.7, 2164.0], [25.8, 2166.0], [25.9, 2187.0], [26.0, 2221.0], [26.1, 2221.0], [26.2, 2221.0], [26.3, 2221.0], [26.4, 2222.0], [26.5, 2228.0], [26.6, 2229.0], [26.7, 2241.0], [26.8, 2248.0], [26.9, 2248.0], [27.0, 2249.0], [27.1, 2249.0], [27.2, 2250.0], [27.3, 2262.0], [27.4, 2297.0], [27.5, 2298.0], [27.6, 2298.0], [27.7, 2300.0], [27.8, 2464.0], [27.9, 2593.0], [28.0, 2595.0], [28.1, 2595.0], [28.2, 2597.0], [28.3, 2597.0], [28.4, 2597.0], [28.5, 2598.0], [28.6, 2598.0], [28.7, 2598.0], [28.8, 2599.0], [28.9, 2621.0], [29.0, 2623.0], [29.1, 2627.0], [29.2, 2634.0], [29.3, 2672.0], [29.4, 2672.0], [29.5, 2672.0], [29.6, 2673.0], [29.7, 2673.0], [29.8, 2674.0], [29.9, 2674.0], [30.0, 2674.0], [30.1, 2713.0], [30.2, 2714.0], [30.3, 2714.0], [30.4, 2798.0], [30.5, 2798.0], [30.6, 2798.0], [30.7, 2799.0], [30.8, 2799.0], [30.9, 2799.0], [31.0, 2799.0], [31.1, 2799.0], [31.2, 2800.0], [31.3, 2804.0], [31.4, 2817.0], [31.5, 2818.0], [31.6, 2819.0], [31.7, 2820.0], [31.8, 2841.0], [31.9, 2842.0], [32.0, 2843.0], [32.1, 2843.0], [32.2, 2843.0], [32.3, 2847.0], [32.4, 2847.0], [32.5, 2847.0], [32.6, 2848.0], [32.7, 2848.0], [32.8, 2848.0], [32.9, 2848.0], [33.0, 2849.0], [33.1, 2849.0], [33.2, 2902.0], [33.3, 2902.0], [33.4, 2902.0], [33.5, 2903.0], [33.6, 2903.0], [33.7, 2903.0], [33.8, 2903.0], [33.9, 2904.0], [34.0, 2904.0], [34.1, 2904.0], [34.2, 2905.0], [34.3, 2963.0], [34.4, 2964.0], [34.5, 2964.0], [34.6, 2965.0], [34.7, 2966.0], [34.8, 2966.0], [34.9, 2966.0], [35.0, 2967.0], [35.1, 2967.0], [35.2, 2976.0], [35.3, 2979.0], [35.4, 2980.0], [35.5, 2980.0], [35.6, 2993.0], [35.7, 2998.0], [35.8, 2998.0], [35.9, 2999.0], [36.0, 2999.0], [36.1, 2999.0], [36.2, 2999.0], [36.3, 2999.0], [36.4, 3000.0], [36.5, 3004.0], [36.6, 3005.0], [36.7, 3007.0], [36.8, 3032.0], [36.9, 3050.0], [37.0, 3050.0], [37.1, 3051.0], [37.2, 3051.0], [37.3, 3054.0], [37.4, 3077.0], [37.5, 3079.0], [37.6, 3079.0], [37.7, 3080.0], [37.8, 3080.0], [37.9, 3081.0], [38.0, 3081.0], [38.1, 3082.0], [38.2, 3106.0], [38.3, 3133.0], [38.4, 3163.0], [38.5, 3165.0], [38.6, 3165.0], [38.7, 3179.0], [38.8, 3179.0], [38.9, 3179.0], [39.0, 3180.0], [39.1, 3180.0], [39.2, 3198.0], [39.3, 3199.0], [39.4, 3201.0], [39.5, 3207.0], [39.6, 3212.0], [39.7, 3217.0], [39.8, 3218.0], [39.9, 3218.0], [40.0, 3218.0], [40.1, 3219.0], [40.2, 3219.0], [40.3, 3219.0], [40.4, 3219.0], [40.5, 3219.0], [40.6, 3221.0], [40.7, 3256.0], [40.8, 3256.0], [40.9, 3259.0], [41.0, 3262.0], [41.1, 3262.0], [41.2, 3282.0], [41.3, 3332.0], [41.4, 3357.0], [41.5, 3358.0], [41.6, 3358.0], [41.7, 3358.0], [41.8, 3416.0], [41.9, 3432.0], [42.0, 3447.0], [42.1, 3472.0], [42.2, 3486.0], [42.3, 3516.0], [42.4, 3562.0], [42.5, 3608.0], [42.6, 3608.0], [42.7, 3609.0], [42.8, 3652.0], [42.9, 3652.0], [43.0, 3653.0], [43.1, 3654.0], [43.2, 3654.0], [43.3, 3655.0], [43.4, 3655.0], [43.5, 3655.0], [43.6, 3656.0], [43.7, 3656.0], [43.8, 3738.0], [43.9, 3739.0], [44.0, 3739.0], [44.1, 3740.0], [44.2, 3741.0], [44.3, 3741.0], [44.4, 3777.0], [44.5, 3814.0], [44.6, 3895.0], [44.7, 3903.0], [44.8, 4043.0], [44.9, 4043.0], [45.0, 4044.0], [45.1, 4044.0], [45.2, 4097.0], [45.3, 4120.0], [45.4, 4120.0], [45.5, 4120.0], [45.6, 4120.0], [45.7, 4129.0], [45.8, 4135.0], [45.9, 4135.0], [46.0, 4135.0], [46.1, 4135.0], [46.2, 4136.0], [46.3, 4136.0], [46.4, 4137.0], [46.5, 4138.0], [46.6, 4138.0], [46.7, 4161.0], [46.8, 4162.0], [46.9, 4171.0], [47.0, 4172.0], [47.1, 4173.0], [47.2, 4174.0], [47.3, 4198.0], [47.4, 4198.0], [47.5, 4199.0], [47.6, 4200.0], [47.7, 4200.0], [47.8, 4202.0], [47.9, 4202.0], [48.0, 4202.0], [48.1, 4203.0], [48.2, 4203.0], [48.3, 4203.0], [48.4, 4203.0], [48.5, 4204.0], [48.6, 4205.0], [48.7, 4205.0], [48.8, 4205.0], [48.9, 4205.0], [49.0, 4206.0], [49.1, 4207.0], [49.2, 4207.0], [49.3, 4214.0], [49.4, 4221.0], [49.5, 4224.0], [49.6, 4234.0], [49.7, 4243.0], [49.8, 4243.0], [49.9, 4243.0], [50.0, 4243.0], [50.1, 4243.0], [50.2, 4243.0], [50.3, 4243.0], [50.4, 4243.0], [50.5, 4244.0], [50.6, 4287.0], [50.7, 4306.0], [50.8, 4306.0], [50.9, 4306.0], [51.0, 4307.0], [51.1, 4314.0], [51.2, 4314.0], [51.3, 4314.0], [51.4, 4314.0], [51.5, 4315.0], [51.6, 4315.0], [51.7, 4315.0], [51.8, 4315.0], [51.9, 4316.0], [52.0, 4320.0], [52.1, 4337.0], [52.2, 4337.0], [52.3, 4337.0], [52.4, 4338.0], [52.5, 4357.0], [52.6, 4358.0], [52.7, 4358.0], [52.8, 4358.0], [52.9, 4381.0], [53.0, 4382.0], [53.1, 4382.0], [53.2, 4382.0], [53.3, 4383.0], [53.4, 4447.0], [53.5, 4449.0], [53.6, 4449.0], [53.7, 4449.0], [53.8, 4450.0], [53.9, 4467.0], [54.0, 4469.0], [54.1, 4469.0], [54.2, 4489.0], [54.3, 4490.0], [54.4, 4491.0], [54.5, 4505.0], [54.6, 4506.0], [54.7, 4507.0], [54.8, 4509.0], [54.9, 4549.0], [55.0, 4557.0], [55.1, 4561.0], [55.2, 4561.0], [55.3, 4563.0], [55.4, 4563.0], [55.5, 4575.0], [55.6, 4622.0], [55.7, 4623.0], [55.8, 4623.0], [55.9, 4624.0], [56.0, 4631.0], [56.1, 4650.0], [56.2, 4651.0], [56.3, 4652.0], [56.4, 4652.0], [56.5, 4652.0], [56.6, 4652.0], [56.7, 4653.0], [56.8, 4653.0], [56.9, 4653.0], [57.0, 4656.0], [57.1, 4657.0], [57.2, 4663.0], [57.3, 4667.0], [57.4, 4667.0], [57.5, 4668.0], [57.6, 4668.0], [57.7, 4669.0], [57.8, 4682.0], [57.9, 4690.0], [58.0, 4691.0], [58.1, 4716.0], [58.2, 4717.0], [58.3, 4717.0], [58.4, 4718.0], [58.5, 4719.0], [58.6, 4743.0], [58.7, 4744.0], [58.8, 4744.0], [58.9, 4745.0], [59.0, 4745.0], [59.1, 4745.0], [59.2, 4747.0], [59.3, 4772.0], [59.4, 4778.0], [59.5, 4778.0], [59.6, 4778.0], [59.7, 4779.0], [59.8, 4779.0], [59.9, 4781.0], [60.0, 4781.0], [60.1, 4828.0], [60.2, 4828.0], [60.3, 4830.0], [60.4, 4830.0], [60.5, 4830.0], [60.6, 4859.0], [60.7, 4860.0], [60.8, 4860.0], [60.9, 4879.0], [61.0, 4880.0], [61.1, 4880.0], [61.2, 4880.0], [61.3, 4881.0], [61.4, 4881.0], [61.5, 4882.0], [61.6, 4883.0], [61.7, 4883.0], [61.8, 4902.0], [61.9, 4902.0], [62.0, 4903.0], [62.1, 4914.0], [62.2, 4924.0], [62.3, 4926.0], [62.4, 4928.0], [62.5, 4928.0], [62.6, 4929.0], [62.7, 4929.0], [62.8, 4930.0], [62.9, 4931.0], [63.0, 4931.0], [63.1, 4931.0], [63.2, 4933.0], [63.3, 4934.0], [63.4, 4934.0], [63.5, 4936.0], [63.6, 4936.0], [63.7, 4937.0], [63.8, 4937.0], [63.9, 4942.0], [64.0, 4943.0], [64.1, 4964.0], [64.2, 5073.0], [64.3, 5073.0], [64.4, 5136.0], [64.5, 5136.0], [64.6, 5138.0], [64.7, 5139.0], [64.8, 5139.0], [64.9, 5150.0], [65.0, 5153.0], [65.1, 5153.0], [65.2, 5154.0], [65.3, 5154.0], [65.4, 5154.0], [65.5, 5154.0], [65.6, 5155.0], [65.7, 5155.0], [65.8, 5155.0], [65.9, 5155.0], [66.0, 5155.0], [66.1, 5155.0], [66.2, 5155.0], [66.3, 5168.0], [66.4, 5169.0], [66.5, 5170.0], [66.6, 5170.0], [66.7, 5170.0], [66.8, 5171.0], [66.9, 5171.0], [67.0, 5171.0], [67.1, 5186.0], [67.2, 5189.0], [67.3, 5189.0], [67.4, 5190.0], [67.5, 5191.0], [67.6, 5195.0], [67.7, 5195.0], [67.8, 5196.0], [67.9, 5197.0], [68.0, 5197.0], [68.1, 5199.0], [68.2, 5202.0], [68.3, 5202.0], [68.4, 5202.0], [68.5, 5202.0], [68.6, 5202.0], [68.7, 5203.0], [68.8, 5204.0], [68.9, 5216.0], [69.0, 5216.0], [69.1, 5217.0], [69.2, 5218.0], [69.3, 5218.0], [69.4, 5219.0], [69.5, 5219.0], [69.6, 5224.0], [69.7, 5224.0], [69.8, 5225.0], [69.9, 5226.0], [70.0, 5226.0], [70.1, 5227.0], [70.2, 5227.0], [70.3, 5235.0], [70.4, 5236.0], [70.5, 5238.0], [70.6, 5238.0], [70.7, 5239.0], [70.8, 5246.0], [70.9, 5248.0], [71.0, 5249.0], [71.1, 5250.0], [71.2, 5298.0], [71.3, 5299.0], [71.4, 5299.0], [71.5, 5301.0], [71.6, 5301.0], [71.7, 5302.0], [71.8, 5304.0], [71.9, 5304.0], [72.0, 5327.0], [72.1, 5328.0], [72.2, 5367.0], [72.3, 5367.0], [72.4, 5367.0], [72.5, 5368.0], [72.6, 5375.0], [72.7, 5377.0], [72.8, 5378.0], [72.9, 5379.0], [73.0, 5381.0], [73.1, 5403.0], [73.2, 5404.0], [73.3, 5404.0], [73.4, 5404.0], [73.5, 5406.0], [73.6, 5406.0], [73.7, 5422.0], [73.8, 5422.0], [73.9, 5423.0], [74.0, 5424.0], [74.1, 5424.0], [74.2, 5424.0], [74.3, 5425.0], [74.4, 5425.0], [74.5, 5425.0], [74.6, 5425.0], [74.7, 5425.0], [74.8, 5425.0], [74.9, 5425.0], [75.0, 5425.0], [75.1, 5435.0], [75.2, 5436.0], [75.3, 5437.0], [75.4, 5527.0], [75.5, 5528.0], [75.6, 5528.0], [75.7, 5528.0], [75.8, 5530.0], [75.9, 5538.0], [76.0, 5538.0], [76.1, 5539.0], [76.2, 5552.0], [76.3, 5556.0], [76.4, 5557.0], [76.5, 5557.0], [76.6, 5613.0], [76.7, 5629.0], [76.8, 5630.0], [76.9, 5631.0], [77.0, 5631.0], [77.1, 5631.0], [77.2, 5632.0], [77.3, 5639.0], [77.4, 5660.0], [77.5, 5661.0], [77.6, 5662.0], [77.7, 5662.0], [77.8, 5663.0], [77.9, 5663.0], [78.0, 5670.0], [78.1, 5671.0], [78.2, 5671.0], [78.3, 5671.0], [78.4, 5672.0], [78.5, 5732.0], [78.6, 5761.0], [78.7, 5763.0], [78.8, 5763.0], [78.9, 5764.0], [79.0, 5764.0], [79.1, 5792.0], [79.2, 5792.0], [79.3, 5793.0], [79.4, 5793.0], [79.5, 5831.0], [79.6, 5917.0], [79.7, 5917.0], [79.8, 5918.0], [79.9, 5918.0], [80.0, 5930.0], [80.1, 5933.0], [80.2, 5934.0], [80.3, 5934.0], [80.4, 5958.0], [80.5, 5958.0], [80.6, 5959.0], [80.7, 5984.0], [80.8, 5984.0], [80.9, 5984.0], [81.0, 5984.0], [81.1, 5985.0], [81.2, 6019.0], [81.3, 6019.0], [81.4, 6025.0], [81.5, 6050.0], [81.6, 6051.0], [81.7, 6052.0], [81.8, 6052.0], [81.9, 6052.0], [82.0, 6067.0], [82.1, 6076.0], [82.2, 6076.0], [82.3, 6077.0], [82.4, 6077.0], [82.5, 6113.0], [82.6, 6113.0], [82.7, 6114.0], [82.8, 6114.0], [82.9, 6114.0], [83.0, 6114.0], [83.1, 6115.0], [83.2, 6115.0], [83.3, 6115.0], [83.4, 6115.0], [83.5, 6116.0], [83.6, 6116.0], [83.7, 6118.0], [83.8, 6132.0], [83.9, 6160.0], [84.0, 6170.0], [84.1, 6172.0], [84.2, 6172.0], [84.3, 6172.0], [84.4, 6173.0], [84.5, 6173.0], [84.6, 6173.0], [84.7, 6173.0], [84.8, 6174.0], [84.9, 6174.0], [85.0, 6178.0], [85.1, 6178.0], [85.2, 6178.0], [85.3, 6179.0], [85.4, 6182.0], [85.5, 6218.0], [85.6, 6219.0], [85.7, 6225.0], [85.8, 6261.0], [85.9, 6281.0], [86.0, 6286.0], [86.1, 6313.0], [86.2, 6314.0], [86.3, 6314.0], [86.4, 6314.0], [86.5, 6314.0], [86.6, 6315.0], [86.7, 6315.0], [86.8, 6315.0], [86.9, 6316.0], [87.0, 6317.0], [87.1, 6344.0], [87.2, 6344.0], [87.3, 6344.0], [87.4, 6344.0], [87.5, 6345.0], [87.6, 6345.0], [87.7, 6345.0], [87.8, 6346.0], [87.9, 6362.0], [88.0, 6380.0], [88.1, 6425.0], [88.2, 6426.0], [88.3, 6427.0], [88.4, 6427.0], [88.5, 6428.0], [88.6, 6428.0], [88.7, 6428.0], [88.8, 6429.0], [88.9, 6430.0], [89.0, 6439.0], [89.1, 6443.0], [89.2, 6448.0], [89.3, 6449.0], [89.4, 6449.0], [89.5, 6467.0], [89.6, 6468.0], [89.7, 6469.0], [89.8, 6513.0], [89.9, 6515.0], [90.0, 6523.0], [90.1, 6525.0], [90.2, 6525.0], [90.3, 6527.0], [90.4, 6532.0], [90.5, 6532.0], [90.6, 6533.0], [90.7, 6534.0], [90.8, 6589.0], [90.9, 6591.0], [91.0, 6591.0], [91.1, 6625.0], [91.2, 6642.0], [91.3, 6657.0], [91.4, 6657.0], [91.5, 6658.0], [91.6, 6708.0], [91.7, 6713.0], [91.8, 6824.0], [91.9, 6824.0], [92.0, 6826.0], [92.1, 6826.0], [92.2, 6837.0], [92.3, 6838.0], [92.4, 6838.0], [92.5, 6838.0], [92.6, 6852.0], [92.7, 6865.0], [92.8, 6922.0], [92.9, 6925.0], [93.0, 6965.0], [93.1, 6993.0], [93.2, 7015.0], [93.3, 7019.0], [93.4, 7069.0], [93.5, 7109.0], [93.6, 7145.0], [93.7, 7145.0], [93.8, 7146.0], [93.9, 7146.0], [94.0, 7146.0], [94.1, 7164.0], [94.2, 7166.0], [94.3, 7227.0], [94.4, 7228.0], [94.5, 7229.0], [94.6, 7229.0], [94.7, 7230.0], [94.8, 7230.0], [94.9, 7230.0], [95.0, 7230.0], [95.1, 7231.0], [95.2, 7231.0], [95.3, 7231.0], [95.4, 7233.0], [95.5, 7248.0], [95.6, 7256.0], [95.7, 7359.0], [95.8, 7652.0], [95.9, 7652.0], [96.0, 7654.0], [96.1, 7782.0], [96.2, 7782.0], [96.3, 7783.0], [96.4, 7783.0], [96.5, 7783.0], [96.6, 7783.0], [96.7, 7785.0], [96.8, 7809.0], [96.9, 7810.0], [97.0, 7846.0], [97.1, 7847.0], [97.2, 7848.0], [97.3, 7890.0], [97.4, 7891.0], [97.5, 7891.0], [97.6, 7985.0], [97.7, 7985.0], [97.8, 7987.0], [97.9, 7987.0], [98.0, 8217.0], [98.1, 8336.0], [98.2, 8337.0], [98.3, 8337.0], [98.4, 8338.0], [98.5, 8757.0], [98.6, 8758.0], [98.7, 8758.0], [98.8, 8760.0], [98.9, 8890.0], [99.0, 8890.0], [99.1, 9402.0], [99.2, 9402.0], [99.3, 9402.0], [99.4, 9452.0], [99.5, 9453.0], [99.6, 9454.0], [99.7, 9454.0], [99.8, 9456.0], [99.9, 9456.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 108.0, "series": [{"data": [[600.0, 32.0], [700.0, 27.0], [800.0, 24.0], [900.0, 20.0], [1000.0, 18.0], [1100.0, 10.0], [1200.0, 18.0], [1300.0, 20.0], [1400.0, 36.0], [1500.0, 63.0], [1600.0, 65.0], [1700.0, 57.0], [1800.0, 45.0], [1900.0, 39.0], [2000.0, 30.0], [2100.0, 26.0], [2200.0, 50.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 27.0], [2600.0, 35.0], [2700.0, 31.0], [2800.0, 57.0], [2900.0, 91.0], [3000.0, 51.0], [3100.0, 32.0], [3200.0, 54.0], [3300.0, 16.0], [3400.0, 12.0], [3500.0, 6.0], [3600.0, 38.0], [3700.0, 19.0], [3800.0, 6.0], [3900.0, 3.0], [4000.0, 13.0], [4100.0, 67.0], [4200.0, 86.0], [4300.0, 77.0], [4600.0, 71.0], [4500.0, 30.0], [4400.0, 31.0], [4700.0, 57.0], [4800.0, 48.0], [4900.0, 67.0], [5100.0, 108.0], [5000.0, 6.0], [5200.0, 93.0], [5300.0, 44.0], [5500.0, 35.0], [5400.0, 66.0], [5600.0, 54.0], [5700.0, 28.0], [5800.0, 2.0], [5900.0, 45.0], [6100.0, 85.0], [6000.0, 37.0], [6200.0, 16.0], [6300.0, 58.0], [6600.0, 15.0], [6500.0, 36.0], [6400.0, 48.0], [6900.0, 12.0], [6700.0, 6.0], [6800.0, 27.0], [7000.0, 7.0], [7100.0, 24.0], [7300.0, 2.0], [7200.0, 39.0], [7600.0, 7.0], [7500.0, 1.0], [7700.0, 22.0], [7800.0, 22.0], [7900.0, 11.0], [8200.0, 2.0], [8400.0, 2.0], [8300.0, 11.0], [8700.0, 10.0], [8800.0, 5.0], [9400.0, 28.0], [300.0, 74.0], [400.0, 84.0], [500.0, 44.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2617.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2617.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.124535315985135, "minX": 1.78195116E12, "maxY": 144.6145610278372, "series": [{"data": [[1.78195122E12, 136.63152114222964], [1.78195128E12, 144.6145610278372], [1.78195116E12, 31.124535315985135]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 176 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 379.07692307692304, "minX": 1.0, "maxY": 9453.0, "series": [{"data": [[2.0, 3732.0], [3.0, 3711.5], [4.0, 2068.5], [5.0, 2066.75], [6.0, 1505.5], [7.0, 1453.1666666666665], [8.0, 1446.0], [9.0, 1062.111111111111], [10.0, 981.3], [11.0, 912.0], [12.0, 889.4545454545454], [13.0, 810.5384615384615], [14.0, 379.07692307692304], [15.0, 1211.142857142857], [16.0, 410.42857142857144], [17.0, 427.09090909090907], [18.0, 445.16666666666663], [19.0, 466.7142857142857], [20.0, 493.07142857142856], [21.0, 519.1999999999999], [22.0, 545.0666666666666], [23.0, 577.25], [24.0, 609.1666666666667], [25.0, 643.5], [26.0, 678.090909090909], [27.0, 720.6666666666666], [28.0, 760.1818181818181], [29.0, 805.3636363636364], [30.0, 852.6666666666666], [31.0, 901.5555555555555], [32.0, 2871.9230769230767], [33.0, 1474.8461538461538], [34.0, 1059.888888888889], [35.0, 1107.111111111111], [36.0, 1190.3999999999999], [37.0, 1249.7777777777778], [38.0, 1334.8571428571427], [39.0, 1410.375], [40.0, 5396.482758620689], [41.0, 1447.3333333333333], [42.0, 1572.8999999999999], [43.0, 1612.5833333333333], [44.0, 1589.25], [45.0, 1548.8], [46.0, 1642.3999999999999], [47.0, 1649.2222222222222], [48.0, 1658.142857142857], [49.0, 1651.7], [50.0, 1608.25], [51.0, 4449.818181818182], [52.0, 1580.7777777777778], [53.0, 1691.3333333333333], [54.0, 1614.0], [55.0, 1662.769230769231], [56.0, 3358.4374999999995], [57.0, 1636.5714285714284], [58.0, 1678.3333333333333], [60.0, 1689.0], [61.0, 3182.789473684211], [62.0, 2093.0588235294117], [64.0, 1779.0], [65.0, 2335.6], [66.0, 1837.5882352941173], [68.0, 1862.6666666666665], [70.0, 2756.958333333334], [72.0, 2121.55], [74.0, 2976.48], [76.0, 2353.681818181819], [78.0, 2455.8695652173915], [79.0, 6344.4], [81.0, 2470.041666666667], [84.0, 2752.3076923076924], [86.0, 2802.3461538461543], [87.0, 2841.0], [89.0, 2920.75], [90.0, 6344.6], [92.0, 2780.433333333334], [95.0, 2864.129032258065], [94.0, 6369.8], [98.0, 2866.636363636364], [99.0, 6427.4], [101.0, 2839.588235294118], [104.0, 2975.342857142857], [106.0, 6002.5], [107.0, 3096.447368421053], [111.0, 3657.8604651162796], [112.0, 2656.0], [116.0, 4040.456521739131], [120.0, 3766.0], [121.0, 5804.333333333333], [123.0, 6313.0], [124.0, 3834.0], [127.0, 6279.0], [126.0, 6281.0], [128.0, 5190.0], [129.0, 3928.0444444444443], [130.0, 3968.4], [133.0, 4622.909090909091], [134.0, 3912.7567567567557], [135.0, 6114.2], [137.0, 4492.5], [138.0, 4079.2666666666655], [139.0, 3608.714285714286], [143.0, 4425.483333333332], [148.0, 4771.666666666667], [149.0, 4613.934782608695], [150.0, 4043.7], [146.0, 7179.0], [154.0, 5371.0], [155.0, 5059.307692307692], [156.0, 4294.0], [159.0, 5552.0], [161.0, 5355.6595744680835], [162.0, 4449.214285714286], [165.0, 5613.0], [167.0, 6420.142857142857], [163.0, 9158.29411764706], [168.0, 4946.155555555554], [172.0, 5630.8], [174.0, 6482.0], [175.0, 6151.619047619048], [173.0, 9453.0], [176.0, 5720.016339869284], [1.0, 6998.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[117.86482661004969, 3981.3075017692854]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 176.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1229.7666666666667, "minX": 1.78195116E12, "maxY": 7011.35, "series": [{"data": [[1.78195122E12, 7011.35], [1.78195128E12, 1800.3833333333334], [1.78195116E12, 2071.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195122E12, 4795.3], [1.78195128E12, 1229.7666666666667], [1.78195116E12, 1416.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 970.0724907063195, "minX": 1.78195116E12, "maxY": 6107.197002141335, "series": [{"data": [[1.78195122E12, 4325.763316858866], [1.78195128E12, 6107.197002141335], [1.78195116E12, 970.0724907063195]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 970.0315985130114, "minX": 1.78195116E12, "maxY": 6107.182012847964, "series": [{"data": [[1.78195122E12, 4325.751784733657], [1.78195128E12, 6107.182012847964], [1.78195116E12, 970.0315985130114]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03953871499176285, "minX": 1.78195116E12, "maxY": 0.07708779443254814, "series": [{"data": [[1.78195122E12, 0.03953871499176285], [1.78195128E12, 0.07708779443254814], [1.78195116E12, 0.06691449814126399]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 343.0, "minX": 1.78195116E12, "maxY": 617.0, "series": [{"data": [[1.78195116E12, 617.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195116E12, 343.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195116E12, 565.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195116E12, 614.7]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195116E12, 426.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195116E12, 593.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 360.0, "minX": 1.0, "maxY": 7166.0, "series": [{"data": [[32.0, 360.0], [35.0, 591.5], [36.0, 447.5], [39.0, 450.0], [5.0, 460.0], [21.0, 375.0], [15.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 3651.0], [33.0, 4317.0], [2.0, 5613.0], [35.0, 3079.0], [34.0, 1397.5], [37.0, 4689.0], [38.0, 3843.5], [39.0, 2160.0], [40.0, 3653.0], [41.0, 4135.0], [42.0, 5631.0], [44.0, 4243.0], [47.0, 2249.0], [49.0, 4314.0], [48.0, 4622.0], [3.0, 5459.5], [52.0, 4549.0], [53.0, 5527.0], [54.0, 4492.5], [55.0, 5404.0], [56.0, 4133.0], [57.0, 5424.0], [59.0, 5490.0], [61.0, 4451.0], [69.0, 5556.0], [68.0, 6315.0], [5.0, 5552.0], [95.0, 6430.0], [105.0, 5215.0], [125.0, 5155.0], [9.0, 6026.0], [10.0, 5631.0], [12.0, 6771.0], [13.0, 5298.0], [1.0, 6281.0], [17.0, 4931.0], [18.0, 5437.0], [20.0, 6604.0], [21.0, 4631.0], [22.0, 1986.0], [23.0, 7166.0], [26.0, 2598.0], [27.0, 2673.0], [28.0, 2056.0], [29.0, 1249.0], [30.0, 1975.5], [31.0, 1643.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 360.0, "minX": 1.0, "maxY": 7166.0, "series": [{"data": [[32.0, 360.0], [35.0, 591.5], [36.0, 447.5], [39.0, 450.0], [5.0, 460.0], [21.0, 375.0], [15.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 3651.0], [33.0, 4317.0], [2.0, 5613.0], [35.0, 3079.0], [34.0, 1397.5], [37.0, 4689.0], [38.0, 3843.5], [39.0, 2160.0], [40.0, 3653.0], [41.0, 4135.0], [42.0, 5631.0], [44.0, 4243.0], [47.0, 2249.0], [49.0, 4314.0], [48.0, 4621.0], [3.0, 5459.5], [52.0, 4549.0], [53.0, 5527.0], [54.0, 4492.5], [55.0, 5404.0], [56.0, 4133.0], [57.0, 5424.0], [59.0, 5490.0], [61.0, 4451.0], [69.0, 5556.0], [68.0, 6315.0], [5.0, 5552.0], [95.0, 6429.0], [105.0, 5215.0], [125.0, 5155.0], [9.0, 6026.0], [10.0, 5631.0], [12.0, 6771.0], [13.0, 5298.0], [1.0, 6281.0], [17.0, 4931.0], [18.0, 5437.0], [20.0, 6604.0], [21.0, 4631.0], [22.0, 1986.0], [23.0, 7166.0], [26.0, 2598.0], [27.0, 2673.0], [28.0, 2056.0], [29.0, 1249.0], [30.0, 1975.5], [31.0, 1643.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.85, "minX": 1.78195116E12, "maxY": 32.31666666666667, "series": [{"data": [[1.78195122E12, 32.31666666666667], [1.78195128E12, 4.85], [1.78195116E12, 9.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.78195116E12, "maxY": 30.1, "series": [{"data": [[1.78195122E12, 30.1], [1.78195128E12, 6.566666666666666], [1.78195116E12, 8.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78195122E12, 0.25], [1.78195128E12, 1.2166666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195116E12, "maxY": 30.35, "series": [{"data": [[1.78195116E12, 3.4833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195122E12, 30.35], [1.78195128E12, 7.783333333333333], [1.78195116E12, 5.483333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.78195116E12, "maxY": 30.35, "series": [{"data": [[1.78195116E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195122E12, 30.35], [1.78195128E12, 7.783333333333333], [1.78195116E12, 5.483333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195128E12, "title": "Total Transactions Per Second"}},
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

