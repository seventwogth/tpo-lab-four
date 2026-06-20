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
        data: {"result": {"minY": 358.0, "minX": 0.0, "maxY": 1112.0, "series": [{"data": [[0.0, 358.0], [0.1, 361.0], [0.2, 361.0], [0.3, 362.0], [0.4, 363.0], [0.5, 363.0], [0.6, 363.0], [0.7, 363.0], [0.8, 364.0], [0.9, 366.0], [1.0, 366.0], [1.1, 366.0], [1.2, 367.0], [1.3, 368.0], [1.4, 370.0], [1.5, 371.0], [1.6, 372.0], [1.7, 373.0], [1.8, 374.0], [1.9, 374.0], [2.0, 375.0], [2.1, 376.0], [2.2, 377.0], [2.3, 377.0], [2.4, 378.0], [2.5, 380.0], [2.6, 382.0], [2.7, 383.0], [2.8, 384.0], [2.9, 385.0], [3.0, 390.0], [3.1, 391.0], [3.2, 392.0], [3.3, 395.0], [3.4, 397.0], [3.5, 397.0], [3.6, 398.0], [3.7, 399.0], [3.8, 404.0], [3.9, 404.0], [4.0, 407.0], [4.1, 409.0], [4.2, 411.0], [4.3, 412.0], [4.4, 417.0], [4.5, 417.0], [4.6, 421.0], [4.7, 423.0], [4.8, 424.0], [4.9, 427.0], [5.0, 435.0], [5.1, 438.0], [5.2, 442.0], [5.3, 446.0], [5.4, 449.0], [5.5, 451.0], [5.6, 456.0], [5.7, 457.0], [5.8, 458.0], [5.9, 464.0], [6.0, 468.0], [6.1, 472.0], [6.2, 480.0], [6.3, 484.0], [6.4, 486.0], [6.5, 488.0], [6.6, 492.0], [6.7, 496.0], [6.8, 510.0], [6.9, 515.0], [7.0, 520.0], [7.1, 521.0], [7.2, 523.0], [7.3, 527.0], [7.4, 531.0], [7.5, 537.0], [7.6, 540.0], [7.7, 546.0], [7.8, 552.0], [7.9, 559.0], [8.0, 562.0], [8.1, 564.0], [8.2, 572.0], [8.3, 580.0], [8.4, 582.0], [8.5, 587.0], [8.6, 592.0], [8.7, 598.0], [8.8, 603.0], [8.9, 609.0], [9.0, 611.0], [9.1, 621.0], [9.2, 627.0], [9.3, 629.0], [9.4, 634.0], [9.5, 635.0], [9.6, 641.0], [9.7, 650.0], [9.8, 653.0], [9.9, 656.0], [10.0, 668.0], [10.1, 673.0], [10.2, 674.0], [10.3, 678.0], [10.4, 680.0], [10.5, 688.0], [10.6, 688.0], [10.7, 691.0], [10.8, 705.0], [10.9, 708.0], [11.0, 711.0], [11.1, 715.0], [11.2, 715.0], [11.3, 719.0], [11.4, 726.0], [11.5, 727.0], [11.6, 737.0], [11.7, 742.0], [11.8, 746.0], [11.9, 747.0], [12.0, 749.0], [12.1, 750.0], [12.2, 751.0], [12.3, 754.0], [12.4, 764.0], [12.5, 770.0], [12.6, 774.0], [12.7, 774.0], [12.8, 774.0], [12.9, 777.0], [13.0, 778.0], [13.1, 780.0], [13.2, 782.0], [13.3, 789.0], [13.4, 790.0], [13.5, 793.0], [13.6, 793.0], [13.7, 793.0], [13.8, 794.0], [13.9, 794.0], [14.0, 795.0], [14.1, 797.0], [14.2, 797.0], [14.3, 797.0], [14.4, 797.0], [14.5, 797.0], [14.6, 798.0], [14.7, 798.0], [14.8, 798.0], [14.9, 798.0], [15.0, 798.0], [15.1, 798.0], [15.2, 798.0], [15.3, 798.0], [15.4, 798.0], [15.5, 799.0], [15.6, 799.0], [15.7, 801.0], [15.8, 801.0], [15.9, 801.0], [16.0, 801.0], [16.1, 801.0], [16.2, 802.0], [16.3, 802.0], [16.4, 802.0], [16.5, 802.0], [16.6, 802.0], [16.7, 802.0], [16.8, 803.0], [16.9, 803.0], [17.0, 803.0], [17.1, 804.0], [17.2, 805.0], [17.3, 805.0], [17.4, 805.0], [17.5, 805.0], [17.6, 805.0], [17.7, 805.0], [17.8, 805.0], [17.9, 805.0], [18.0, 805.0], [18.1, 806.0], [18.2, 806.0], [18.3, 806.0], [18.4, 806.0], [18.5, 806.0], [18.6, 806.0], [18.7, 806.0], [18.8, 806.0], [18.9, 806.0], [19.0, 806.0], [19.1, 806.0], [19.2, 806.0], [19.3, 807.0], [19.4, 807.0], [19.5, 807.0], [19.6, 809.0], [19.7, 809.0], [19.8, 809.0], [19.9, 809.0], [20.0, 809.0], [20.1, 809.0], [20.2, 809.0], [20.3, 809.0], [20.4, 809.0], [20.5, 809.0], [20.6, 809.0], [20.7, 809.0], [20.8, 809.0], [20.9, 809.0], [21.0, 810.0], [21.1, 810.0], [21.2, 810.0], [21.3, 810.0], [21.4, 810.0], [21.5, 810.0], [21.6, 810.0], [21.7, 810.0], [21.8, 810.0], [21.9, 810.0], [22.0, 810.0], [22.1, 810.0], [22.2, 810.0], [22.3, 810.0], [22.4, 810.0], [22.5, 810.0], [22.6, 810.0], [22.7, 811.0], [22.8, 811.0], [22.9, 811.0], [23.0, 811.0], [23.1, 812.0], [23.2, 812.0], [23.3, 813.0], [23.4, 813.0], [23.5, 813.0], [23.6, 813.0], [23.7, 813.0], [23.8, 813.0], [23.9, 813.0], [24.0, 813.0], [24.1, 813.0], [24.2, 813.0], [24.3, 813.0], [24.4, 813.0], [24.5, 813.0], [24.6, 813.0], [24.7, 813.0], [24.8, 813.0], [24.9, 813.0], [25.0, 814.0], [25.1, 814.0], [25.2, 814.0], [25.3, 814.0], [25.4, 814.0], [25.5, 814.0], [25.6, 814.0], [25.7, 814.0], [25.8, 814.0], [25.9, 814.0], [26.0, 814.0], [26.1, 814.0], [26.2, 814.0], [26.3, 814.0], [26.4, 814.0], [26.5, 814.0], [26.6, 814.0], [26.7, 814.0], [26.8, 814.0], [26.9, 814.0], [27.0, 814.0], [27.1, 814.0], [27.2, 814.0], [27.3, 814.0], [27.4, 814.0], [27.5, 815.0], [27.6, 815.0], [27.7, 816.0], [27.8, 816.0], [27.9, 816.0], [28.0, 817.0], [28.1, 817.0], [28.2, 817.0], [28.3, 817.0], [28.4, 817.0], [28.5, 817.0], [28.6, 817.0], [28.7, 817.0], [28.8, 817.0], [28.9, 817.0], [29.0, 817.0], [29.1, 817.0], [29.2, 817.0], [29.3, 817.0], [29.4, 817.0], [29.5, 817.0], [29.6, 817.0], [29.7, 817.0], [29.8, 818.0], [29.9, 818.0], [30.0, 818.0], [30.1, 818.0], [30.2, 818.0], [30.3, 818.0], [30.4, 818.0], [30.5, 818.0], [30.6, 818.0], [30.7, 818.0], [30.8, 818.0], [30.9, 818.0], [31.0, 818.0], [31.1, 818.0], [31.2, 818.0], [31.3, 818.0], [31.4, 818.0], [31.5, 818.0], [31.6, 818.0], [31.7, 818.0], [31.8, 818.0], [31.9, 819.0], [32.0, 819.0], [32.1, 819.0], [32.2, 819.0], [32.3, 819.0], [32.4, 819.0], [32.5, 819.0], [32.6, 820.0], [32.7, 820.0], [32.8, 820.0], [32.9, 820.0], [33.0, 821.0], [33.1, 821.0], [33.2, 821.0], [33.3, 822.0], [33.4, 822.0], [33.5, 822.0], [33.6, 822.0], [33.7, 822.0], [33.8, 822.0], [33.9, 822.0], [34.0, 822.0], [34.1, 822.0], [34.2, 822.0], [34.3, 822.0], [34.4, 822.0], [34.5, 822.0], [34.6, 822.0], [34.7, 823.0], [34.8, 823.0], [34.9, 823.0], [35.0, 823.0], [35.1, 823.0], [35.2, 823.0], [35.3, 823.0], [35.4, 823.0], [35.5, 823.0], [35.6, 823.0], [35.7, 823.0], [35.8, 824.0], [35.9, 824.0], [36.0, 824.0], [36.1, 824.0], [36.2, 825.0], [36.3, 825.0], [36.4, 825.0], [36.5, 825.0], [36.6, 826.0], [36.7, 826.0], [36.8, 826.0], [36.9, 826.0], [37.0, 826.0], [37.1, 826.0], [37.2, 826.0], [37.3, 826.0], [37.4, 826.0], [37.5, 826.0], [37.6, 826.0], [37.7, 826.0], [37.8, 826.0], [37.9, 826.0], [38.0, 826.0], [38.1, 826.0], [38.2, 826.0], [38.3, 826.0], [38.4, 826.0], [38.5, 826.0], [38.6, 826.0], [38.7, 826.0], [38.8, 826.0], [38.9, 826.0], [39.0, 827.0], [39.1, 827.0], [39.2, 827.0], [39.3, 827.0], [39.4, 827.0], [39.5, 827.0], [39.6, 827.0], [39.7, 827.0], [39.8, 827.0], [39.9, 827.0], [40.0, 827.0], [40.1, 827.0], [40.2, 827.0], [40.3, 827.0], [40.4, 827.0], [40.5, 827.0], [40.6, 827.0], [40.7, 827.0], [40.8, 827.0], [40.9, 827.0], [41.0, 827.0], [41.1, 827.0], [41.2, 827.0], [41.3, 828.0], [41.4, 828.0], [41.5, 828.0], [41.6, 828.0], [41.7, 828.0], [41.8, 828.0], [41.9, 828.0], [42.0, 828.0], [42.1, 828.0], [42.2, 828.0], [42.3, 828.0], [42.4, 829.0], [42.5, 829.0], [42.6, 829.0], [42.7, 829.0], [42.8, 830.0], [42.9, 830.0], [43.0, 830.0], [43.1, 830.0], [43.2, 830.0], [43.3, 830.0], [43.4, 830.0], [43.5, 830.0], [43.6, 830.0], [43.7, 830.0], [43.8, 830.0], [43.9, 830.0], [44.0, 830.0], [44.1, 830.0], [44.2, 830.0], [44.3, 830.0], [44.4, 830.0], [44.5, 830.0], [44.6, 830.0], [44.7, 830.0], [44.8, 830.0], [44.9, 830.0], [45.0, 831.0], [45.1, 831.0], [45.2, 831.0], [45.3, 831.0], [45.4, 831.0], [45.5, 831.0], [45.6, 831.0], [45.7, 831.0], [45.8, 831.0], [45.9, 831.0], [46.0, 831.0], [46.1, 831.0], [46.2, 831.0], [46.3, 831.0], [46.4, 831.0], [46.5, 831.0], [46.6, 831.0], [46.7, 831.0], [46.8, 831.0], [46.9, 831.0], [47.0, 831.0], [47.1, 831.0], [47.2, 831.0], [47.3, 832.0], [47.4, 832.0], [47.5, 832.0], [47.6, 832.0], [47.7, 832.0], [47.8, 832.0], [47.9, 832.0], [48.0, 832.0], [48.1, 833.0], [48.2, 833.0], [48.3, 833.0], [48.4, 833.0], [48.5, 833.0], [48.6, 833.0], [48.7, 833.0], [48.8, 833.0], [48.9, 834.0], [49.0, 834.0], [49.1, 834.0], [49.2, 834.0], [49.3, 834.0], [49.4, 834.0], [49.5, 834.0], [49.6, 834.0], [49.7, 834.0], [49.8, 834.0], [49.9, 834.0], [50.0, 834.0], [50.1, 834.0], [50.2, 834.0], [50.3, 834.0], [50.4, 834.0], [50.5, 834.0], [50.6, 834.0], [50.7, 834.0], [50.8, 834.0], [50.9, 834.0], [51.0, 834.0], [51.1, 835.0], [51.2, 835.0], [51.3, 835.0], [51.4, 835.0], [51.5, 835.0], [51.6, 835.0], [51.7, 835.0], [51.8, 835.0], [51.9, 835.0], [52.0, 835.0], [52.1, 835.0], [52.2, 835.0], [52.3, 835.0], [52.4, 835.0], [52.5, 835.0], [52.6, 835.0], [52.7, 835.0], [52.8, 836.0], [52.9, 836.0], [53.0, 836.0], [53.1, 836.0], [53.2, 836.0], [53.3, 836.0], [53.4, 837.0], [53.5, 837.0], [53.6, 837.0], [53.7, 838.0], [53.8, 838.0], [53.9, 838.0], [54.0, 838.0], [54.1, 839.0], [54.2, 839.0], [54.3, 839.0], [54.4, 839.0], [54.5, 839.0], [54.6, 839.0], [54.7, 839.0], [54.8, 839.0], [54.9, 839.0], [55.0, 839.0], [55.1, 839.0], [55.2, 839.0], [55.3, 839.0], [55.4, 839.0], [55.5, 839.0], [55.6, 839.0], [55.7, 839.0], [55.8, 839.0], [55.9, 839.0], [56.0, 839.0], [56.1, 840.0], [56.2, 840.0], [56.3, 840.0], [56.4, 840.0], [56.5, 840.0], [56.6, 840.0], [56.7, 840.0], [56.8, 840.0], [56.9, 840.0], [57.0, 840.0], [57.1, 840.0], [57.2, 840.0], [57.3, 840.0], [57.4, 840.0], [57.5, 840.0], [57.6, 840.0], [57.7, 840.0], [57.8, 840.0], [57.9, 840.0], [58.0, 841.0], [58.1, 841.0], [58.2, 841.0], [58.3, 841.0], [58.4, 842.0], [58.5, 842.0], [58.6, 842.0], [58.7, 842.0], [58.8, 843.0], [58.9, 843.0], [59.0, 843.0], [59.1, 843.0], [59.2, 843.0], [59.3, 843.0], [59.4, 843.0], [59.5, 843.0], [59.6, 843.0], [59.7, 843.0], [59.8, 843.0], [59.9, 843.0], [60.0, 843.0], [60.1, 844.0], [60.2, 844.0], [60.3, 844.0], [60.4, 844.0], [60.5, 844.0], [60.6, 844.0], [60.7, 844.0], [60.8, 844.0], [60.9, 844.0], [61.0, 844.0], [61.1, 844.0], [61.2, 844.0], [61.3, 844.0], [61.4, 844.0], [61.5, 844.0], [61.6, 844.0], [61.7, 845.0], [61.8, 845.0], [61.9, 845.0], [62.0, 845.0], [62.1, 845.0], [62.2, 845.0], [62.3, 845.0], [62.4, 846.0], [62.5, 846.0], [62.6, 846.0], [62.7, 846.0], [62.8, 847.0], [62.9, 847.0], [63.0, 847.0], [63.1, 847.0], [63.2, 847.0], [63.3, 847.0], [63.4, 847.0], [63.5, 847.0], [63.6, 847.0], [63.7, 847.0], [63.8, 847.0], [63.9, 847.0], [64.0, 848.0], [64.1, 848.0], [64.2, 848.0], [64.3, 848.0], [64.4, 848.0], [64.5, 848.0], [64.6, 848.0], [64.7, 848.0], [64.8, 848.0], [64.9, 848.0], [65.0, 848.0], [65.1, 848.0], [65.2, 848.0], [65.3, 848.0], [65.4, 848.0], [65.5, 848.0], [65.6, 848.0], [65.7, 849.0], [65.8, 849.0], [65.9, 849.0], [66.0, 849.0], [66.1, 850.0], [66.2, 850.0], [66.3, 850.0], [66.4, 851.0], [66.5, 851.0], [66.6, 851.0], [66.7, 851.0], [66.8, 851.0], [66.9, 852.0], [67.0, 852.0], [67.1, 852.0], [67.2, 852.0], [67.3, 852.0], [67.4, 852.0], [67.5, 852.0], [67.6, 852.0], [67.7, 852.0], [67.8, 852.0], [67.9, 852.0], [68.0, 852.0], [68.1, 852.0], [68.2, 852.0], [68.3, 852.0], [68.4, 852.0], [68.5, 853.0], [68.6, 853.0], [68.7, 853.0], [68.8, 853.0], [68.9, 853.0], [69.0, 853.0], [69.1, 853.0], [69.2, 853.0], [69.3, 853.0], [69.4, 853.0], [69.5, 853.0], [69.6, 853.0], [69.7, 853.0], [69.8, 853.0], [69.9, 853.0], [70.0, 853.0], [70.1, 853.0], [70.2, 853.0], [70.3, 853.0], [70.4, 853.0], [70.5, 853.0], [70.6, 853.0], [70.7, 854.0], [70.8, 854.0], [70.9, 854.0], [71.0, 854.0], [71.1, 855.0], [71.2, 855.0], [71.3, 855.0], [71.4, 855.0], [71.5, 855.0], [71.6, 856.0], [71.7, 856.0], [71.8, 856.0], [71.9, 856.0], [72.0, 856.0], [72.1, 856.0], [72.2, 856.0], [72.3, 856.0], [72.4, 856.0], [72.5, 856.0], [72.6, 856.0], [72.7, 856.0], [72.8, 856.0], [72.9, 856.0], [73.0, 856.0], [73.1, 856.0], [73.2, 856.0], [73.3, 857.0], [73.4, 857.0], [73.5, 857.0], [73.6, 857.0], [73.7, 857.0], [73.8, 857.0], [73.9, 857.0], [74.0, 857.0], [74.1, 857.0], [74.2, 857.0], [74.3, 857.0], [74.4, 857.0], [74.5, 857.0], [74.6, 857.0], [74.7, 857.0], [74.8, 857.0], [74.9, 857.0], [75.0, 857.0], [75.1, 857.0], [75.2, 857.0], [75.3, 857.0], [75.4, 857.0], [75.5, 857.0], [75.6, 857.0], [75.7, 858.0], [75.8, 858.0], [75.9, 858.0], [76.0, 858.0], [76.1, 858.0], [76.2, 858.0], [76.3, 859.0], [76.4, 859.0], [76.5, 859.0], [76.6, 859.0], [76.7, 859.0], [76.8, 859.0], [76.9, 859.0], [77.0, 860.0], [77.1, 860.0], [77.2, 860.0], [77.3, 860.0], [77.4, 860.0], [77.5, 861.0], [77.6, 861.0], [77.7, 861.0], [77.8, 861.0], [77.9, 861.0], [78.0, 861.0], [78.1, 861.0], [78.2, 861.0], [78.3, 861.0], [78.4, 861.0], [78.5, 861.0], [78.6, 861.0], [78.7, 861.0], [78.8, 861.0], [78.9, 861.0], [79.0, 862.0], [79.1, 862.0], [79.2, 862.0], [79.3, 862.0], [79.4, 862.0], [79.5, 862.0], [79.6, 862.0], [79.7, 862.0], [79.8, 862.0], [79.9, 862.0], [80.0, 862.0], [80.1, 862.0], [80.2, 862.0], [80.3, 862.0], [80.4, 862.0], [80.5, 863.0], [80.6, 863.0], [80.7, 863.0], [80.8, 863.0], [80.9, 863.0], [81.0, 863.0], [81.1, 863.0], [81.2, 863.0], [81.3, 863.0], [81.4, 863.0], [81.5, 864.0], [81.6, 864.0], [81.7, 864.0], [81.8, 864.0], [81.9, 864.0], [82.0, 864.0], [82.1, 864.0], [82.2, 864.0], [82.3, 864.0], [82.4, 864.0], [82.5, 864.0], [82.6, 864.0], [82.7, 865.0], [82.8, 865.0], [82.9, 865.0], [83.0, 865.0], [83.1, 865.0], [83.2, 865.0], [83.3, 865.0], [83.4, 865.0], [83.5, 865.0], [83.6, 865.0], [83.7, 866.0], [83.8, 866.0], [83.9, 866.0], [84.0, 866.0], [84.1, 866.0], [84.2, 866.0], [84.3, 866.0], [84.4, 866.0], [84.5, 866.0], [84.6, 866.0], [84.7, 866.0], [84.8, 866.0], [84.9, 867.0], [85.0, 867.0], [85.1, 867.0], [85.2, 867.0], [85.3, 867.0], [85.4, 867.0], [85.5, 867.0], [85.6, 867.0], [85.7, 867.0], [85.8, 867.0], [85.9, 867.0], [86.0, 867.0], [86.1, 867.0], [86.2, 868.0], [86.3, 868.0], [86.4, 868.0], [86.5, 868.0], [86.6, 868.0], [86.7, 868.0], [86.8, 868.0], [86.9, 868.0], [87.0, 869.0], [87.1, 869.0], [87.2, 869.0], [87.3, 869.0], [87.4, 869.0], [87.5, 869.0], [87.6, 870.0], [87.7, 870.0], [87.8, 870.0], [87.9, 870.0], [88.0, 870.0], [88.1, 870.0], [88.2, 870.0], [88.3, 870.0], [88.4, 870.0], [88.5, 870.0], [88.6, 870.0], [88.7, 871.0], [88.8, 871.0], [88.9, 871.0], [89.0, 871.0], [89.1, 871.0], [89.2, 871.0], [89.3, 871.0], [89.4, 872.0], [89.5, 872.0], [89.6, 872.0], [89.7, 872.0], [89.8, 872.0], [89.9, 872.0], [90.0, 872.0], [90.1, 873.0], [90.2, 873.0], [90.3, 873.0], [90.4, 873.0], [90.5, 874.0], [90.6, 874.0], [90.7, 874.0], [90.8, 874.0], [90.9, 874.0], [91.0, 874.0], [91.1, 874.0], [91.2, 874.0], [91.3, 874.0], [91.4, 874.0], [91.5, 874.0], [91.6, 875.0], [91.7, 875.0], [91.8, 875.0], [91.9, 875.0], [92.0, 875.0], [92.1, 875.0], [92.2, 875.0], [92.3, 875.0], [92.4, 876.0], [92.5, 876.0], [92.6, 876.0], [92.7, 876.0], [92.8, 877.0], [92.9, 878.0], [93.0, 878.0], [93.1, 879.0], [93.2, 879.0], [93.3, 879.0], [93.4, 879.0], [93.5, 879.0], [93.6, 880.0], [93.7, 880.0], [93.8, 880.0], [93.9, 880.0], [94.0, 881.0], [94.1, 881.0], [94.2, 881.0], [94.3, 882.0], [94.4, 882.0], [94.5, 882.0], [94.6, 883.0], [94.7, 883.0], [94.8, 884.0], [94.9, 884.0], [95.0, 884.0], [95.1, 887.0], [95.2, 888.0], [95.3, 888.0], [95.4, 889.0], [95.5, 889.0], [95.6, 890.0], [95.7, 890.0], [95.8, 890.0], [95.9, 891.0], [96.0, 892.0], [96.1, 892.0], [96.2, 892.0], [96.3, 893.0], [96.4, 893.0], [96.5, 893.0], [96.6, 894.0], [96.7, 894.0], [96.8, 895.0], [96.9, 895.0], [97.0, 895.0], [97.1, 895.0], [97.2, 895.0], [97.3, 896.0], [97.4, 896.0], [97.5, 896.0], [97.6, 896.0], [97.7, 897.0], [97.8, 898.0], [97.9, 898.0], [98.0, 899.0], [98.1, 899.0], [98.2, 899.0], [98.3, 900.0], [98.4, 901.0], [98.5, 901.0], [98.6, 901.0], [98.7, 903.0], [98.8, 903.0], [98.9, 904.0], [99.0, 906.0], [99.1, 907.0], [99.2, 909.0], [99.3, 912.0], [99.4, 916.0], [99.5, 925.0], [99.6, 939.0], [99.7, 963.0], [99.8, 1030.0], [99.9, 1039.0], [100.0, 1112.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 1935.0, "series": [{"data": [[1100.0, 1.0], [300.0, 87.0], [600.0, 46.0], [700.0, 115.0], [400.0, 70.0], [800.0, 1935.0], [900.0, 37.0], [500.0, 48.0], [1000.0, 4.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 56.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2130.0, "series": [{"data": [[0.0, 157.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 56.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2130.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.70370370370375, "minX": 1.78195062E12, "maxY": 76.36954206602768, "series": [{"data": [[1.78195062E12, 40.70370370370375], [1.78195068E12, 76.36954206602768]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 80 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195068E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 390.5882352941176, "minX": 1.0, "maxY": 893.24, "series": [{"data": [[2.0, 576.6666666666666], [3.0, 484.5], [4.0, 453.87500000000006], [5.0, 430.70000000000005], [6.0, 413.75000000000006], [7.0, 393.1764705882353], [8.0, 390.5882352941176], [9.0, 396.44444444444446], [10.0, 417.0], [11.0, 434.0454545454546], [12.0, 466.77272727272725], [13.0, 504.4117647058824], [14.0, 535.3478260869566], [15.0, 576.7894736842104], [16.0, 613.2222222222224], [17.0, 649.9999999999999], [18.0, 687.0526315789474], [19.0, 720.4], [20.0, 750.0499999999998], [21.0, 777.0], [22.0, 799.3809523809524], [23.0, 808.8571428571429], [24.0, 815.909090909091], [25.0, 818.9545454545455], [26.0, 813.6666666666666], [27.0, 893.24], [28.0, 834.0909090909091], [29.0, 822.9545454545453], [30.0, 820.6842105263157], [31.0, 821.7619047619047], [32.0, 827.5416666666667], [33.0, 825.8333333333334], [34.0, 838.3333333333333], [35.0, 828.3529411764706], [36.0, 840.4347826086956], [37.0, 839.076923076923], [38.0, 838.3888888888889], [39.0, 835.7391304347826], [40.0, 840.4000000000001], [41.0, 846.2272727272727], [42.0, 844.1500000000001], [43.0, 847.6250000000001], [44.0, 846.6500000000001], [45.0, 849.1304347826087], [46.0, 852.9473684210527], [47.0, 847.0], [48.0, 853.6538461538462], [49.0, 841.6842105263157], [50.0, 851.7619047619047], [51.0, 856.4761904761906], [52.0, 850.6111111111111], [53.0, 856.7499999999999], [54.0, 857.3684210526316], [55.0, 851.9599999999999], [56.0, 865.4736842105262], [57.0, 847.6363636363637], [58.0, 865.6999999999999], [59.0, 875.1000000000001], [60.0, 854.8695652173913], [61.0, 866.0454545454546], [62.0, 862.9473684210525], [63.0, 861.4583333333333], [64.0, 858.9047619047619], [65.0, 873.0476190476192], [66.0, 854.3913043478261], [67.0, 860.6666666666665], [68.0, 867.5238095238094], [69.0, 849.9523809523812], [70.0, 857.9545454545455], [71.0, 866.9600000000002], [72.0, 859.875], [73.0, 859.0434782608695], [74.0, 872.8181818181818], [75.0, 861.0869565217392], [76.0, 857.6499999999999], [77.0, 862.0], [78.0, 866.2608695652174], [79.0, 871.44], [80.0, 832.9216710182776], [1.0, 663.5]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[54.99743918053786, 801.2701664532655]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2472.7, "minX": 1.78195062E12, "maxY": 5405.4, "series": [{"data": [[1.78195062E12, 5405.4], [1.78195068E12, 3615.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195062E12, 3697.2], [1.78195068E12, 2472.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195068E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 778.69586894587, "minX": 1.78195062E12, "maxY": 835.0234291799776, "series": [{"data": [[1.78195062E12, 778.69586894587], [1.78195068E12, 835.0234291799776]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195068E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 778.6773504273503, "minX": 1.78195062E12, "maxY": 835.01703940362, "series": [{"data": [[1.78195062E12, 778.6773504273503], [1.78195068E12, 835.01703940362]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195068E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017039403620873323, "minX": 1.78195062E12, "maxY": 0.03917378917378916, "series": [{"data": [[1.78195062E12, 0.03917378917378916], [1.78195068E12, 0.017039403620873323]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195068E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 358.0, "minX": 1.78195062E12, "maxY": 618.0, "series": [{"data": [[1.78195062E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195062E12, 358.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195062E12, 571.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195062E12, 613.5799999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195062E12, 418.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195062E12, 595.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 363.0, "minX": 1.0, "maxY": 869.0, "series": [{"data": [[1.0, 488.0], [4.0, 431.0], [10.0, 399.5], [21.0, 404.0], [11.0, 384.0], [22.0, 363.0], [23.0, 531.0], [25.0, 372.5], [26.0, 484.5], [27.0, 509.0], [15.0, 373.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 869.0], [33.0, 867.0], [23.0, 834.0], [24.0, 826.0], [25.0, 839.5], [26.0, 831.0], [27.0, 839.0], [28.0, 855.0], [29.0, 847.5], [30.0, 831.0], [31.0, 840.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 363.0, "minX": 1.0, "maxY": 869.0, "series": [{"data": [[1.0, 485.0], [4.0, 431.0], [10.0, 399.5], [21.0, 404.0], [11.0, 384.0], [22.0, 363.0], [23.0, 531.0], [25.0, 372.5], [26.0, 484.5], [27.0, 509.0], [15.0, 373.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 869.0], [33.0, 867.0], [23.0, 834.0], [24.0, 826.0], [25.0, 839.5], [26.0, 831.0], [27.0, 839.0], [28.0, 855.0], [29.0, 847.5], [30.0, 831.0], [31.0, 840.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.333333333333334, "minX": 1.78195062E12, "maxY": 23.716666666666665, "series": [{"data": [[1.78195062E12, 23.716666666666665], [1.78195068E12, 15.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195068E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.65, "minX": 1.78195062E12, "maxY": 23.4, "series": [{"data": [[1.78195062E12, 23.4], [1.78195068E12, 15.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195068E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.55, "minX": 1.78195062E12, "maxY": 19.85, "series": [{"data": [[1.78195062E12, 3.55]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195062E12, 19.85], [1.78195068E12, 15.65]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195068E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.55, "minX": 1.78195062E12, "maxY": 19.85, "series": [{"data": [[1.78195062E12, 3.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195062E12, 19.85], [1.78195068E12, 15.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195068E12, "title": "Total Transactions Per Second"}},
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

