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
        data: {"result": {"minY": 360.0, "minX": 0.0, "maxY": 1009.0, "series": [{"data": [[0.0, 360.0], [0.1, 360.0], [0.2, 361.0], [0.3, 362.0], [0.4, 363.0], [0.5, 364.0], [0.6, 364.0], [0.7, 364.0], [0.8, 365.0], [0.9, 366.0], [1.0, 366.0], [1.1, 367.0], [1.2, 368.0], [1.3, 369.0], [1.4, 370.0], [1.5, 371.0], [1.6, 372.0], [1.7, 372.0], [1.8, 373.0], [1.9, 373.0], [2.0, 375.0], [2.1, 375.0], [2.2, 375.0], [2.3, 376.0], [2.4, 376.0], [2.5, 377.0], [2.6, 377.0], [2.7, 378.0], [2.8, 378.0], [2.9, 381.0], [3.0, 383.0], [3.1, 383.0], [3.2, 384.0], [3.3, 385.0], [3.4, 389.0], [3.5, 389.0], [3.6, 390.0], [3.7, 392.0], [3.8, 392.0], [3.9, 394.0], [4.0, 394.0], [4.1, 399.0], [4.2, 401.0], [4.3, 401.0], [4.4, 405.0], [4.5, 408.0], [4.6, 411.0], [4.7, 412.0], [4.8, 417.0], [4.9, 418.0], [5.0, 420.0], [5.1, 420.0], [5.2, 427.0], [5.3, 429.0], [5.4, 436.0], [5.5, 439.0], [5.6, 441.0], [5.7, 443.0], [5.8, 446.0], [5.9, 448.0], [6.0, 452.0], [6.1, 458.0], [6.2, 460.0], [6.3, 463.0], [6.4, 468.0], [6.5, 474.0], [6.6, 478.0], [6.7, 483.0], [6.8, 484.0], [6.9, 487.0], [7.0, 491.0], [7.1, 493.0], [7.2, 498.0], [7.3, 502.0], [7.4, 506.0], [7.5, 510.0], [7.6, 513.0], [7.7, 514.0], [7.8, 523.0], [7.9, 525.0], [8.0, 528.0], [8.1, 532.0], [8.2, 534.0], [8.3, 536.0], [8.4, 539.0], [8.5, 544.0], [8.6, 551.0], [8.7, 558.0], [8.8, 563.0], [8.9, 565.0], [9.0, 568.0], [9.1, 572.0], [9.2, 579.0], [9.3, 583.0], [9.4, 588.0], [9.5, 591.0], [9.6, 595.0], [9.7, 598.0], [9.8, 607.0], [9.9, 611.0], [10.0, 614.0], [10.1, 615.0], [10.2, 617.0], [10.3, 619.0], [10.4, 624.0], [10.5, 628.0], [10.6, 632.0], [10.7, 636.0], [10.8, 644.0], [10.9, 649.0], [11.0, 650.0], [11.1, 657.0], [11.2, 666.0], [11.3, 668.0], [11.4, 668.0], [11.5, 668.0], [11.6, 671.0], [11.7, 674.0], [11.8, 675.0], [11.9, 678.0], [12.0, 678.0], [12.1, 688.0], [12.2, 689.0], [12.3, 690.0], [12.4, 690.0], [12.5, 691.0], [12.6, 691.0], [12.7, 691.0], [12.8, 691.0], [12.9, 693.0], [13.0, 694.0], [13.1, 694.0], [13.2, 695.0], [13.3, 695.0], [13.4, 695.0], [13.5, 695.0], [13.6, 695.0], [13.7, 695.0], [13.8, 696.0], [13.9, 697.0], [14.0, 697.0], [14.1, 697.0], [14.2, 697.0], [14.3, 697.0], [14.4, 697.0], [14.5, 697.0], [14.6, 698.0], [14.7, 698.0], [14.8, 698.0], [14.9, 698.0], [15.0, 698.0], [15.1, 698.0], [15.2, 698.0], [15.3, 698.0], [15.4, 698.0], [15.5, 699.0], [15.6, 699.0], [15.7, 700.0], [15.8, 700.0], [15.9, 700.0], [16.0, 700.0], [16.1, 700.0], [16.2, 700.0], [16.3, 700.0], [16.4, 700.0], [16.5, 700.0], [16.6, 701.0], [16.7, 701.0], [16.8, 701.0], [16.9, 701.0], [17.0, 702.0], [17.1, 702.0], [17.2, 702.0], [17.3, 704.0], [17.4, 704.0], [17.5, 705.0], [17.6, 705.0], [17.7, 705.0], [17.8, 705.0], [17.9, 705.0], [18.0, 706.0], [18.1, 706.0], [18.2, 707.0], [18.3, 707.0], [18.4, 707.0], [18.5, 707.0], [18.6, 707.0], [18.7, 708.0], [18.8, 708.0], [18.9, 708.0], [19.0, 708.0], [19.1, 708.0], [19.2, 708.0], [19.3, 709.0], [19.4, 710.0], [19.5, 710.0], [19.6, 710.0], [19.7, 711.0], [19.8, 711.0], [19.9, 711.0], [20.0, 711.0], [20.1, 711.0], [20.2, 711.0], [20.3, 711.0], [20.4, 711.0], [20.5, 711.0], [20.6, 711.0], [20.7, 711.0], [20.8, 711.0], [20.9, 712.0], [21.0, 712.0], [21.1, 712.0], [21.2, 712.0], [21.3, 712.0], [21.4, 712.0], [21.5, 712.0], [21.6, 712.0], [21.7, 712.0], [21.8, 712.0], [21.9, 712.0], [22.0, 713.0], [22.1, 713.0], [22.2, 713.0], [22.3, 713.0], [22.4, 713.0], [22.5, 714.0], [22.6, 714.0], [22.7, 714.0], [22.8, 714.0], [22.9, 714.0], [23.0, 714.0], [23.1, 714.0], [23.2, 714.0], [23.3, 714.0], [23.4, 714.0], [23.5, 714.0], [23.6, 714.0], [23.7, 714.0], [23.8, 714.0], [23.9, 714.0], [24.0, 714.0], [24.1, 714.0], [24.2, 714.0], [24.3, 715.0], [24.4, 715.0], [24.5, 715.0], [24.6, 715.0], [24.7, 715.0], [24.8, 715.0], [24.9, 715.0], [25.0, 715.0], [25.1, 715.0], [25.2, 715.0], [25.3, 715.0], [25.4, 715.0], [25.5, 715.0], [25.6, 715.0], [25.7, 716.0], [25.8, 716.0], [25.9, 717.0], [26.0, 717.0], [26.1, 717.0], [26.2, 717.0], [26.3, 717.0], [26.4, 718.0], [26.5, 718.0], [26.6, 718.0], [26.7, 718.0], [26.8, 718.0], [26.9, 718.0], [27.0, 718.0], [27.1, 718.0], [27.2, 718.0], [27.3, 718.0], [27.4, 718.0], [27.5, 718.0], [27.6, 718.0], [27.7, 718.0], [27.8, 718.0], [27.9, 718.0], [28.0, 719.0], [28.1, 719.0], [28.2, 719.0], [28.3, 719.0], [28.4, 719.0], [28.5, 719.0], [28.6, 719.0], [28.7, 719.0], [28.8, 719.0], [28.9, 719.0], [29.0, 719.0], [29.1, 719.0], [29.2, 719.0], [29.3, 719.0], [29.4, 719.0], [29.5, 719.0], [29.6, 719.0], [29.7, 719.0], [29.8, 719.0], [29.9, 719.0], [30.0, 719.0], [30.1, 719.0], [30.2, 719.0], [30.3, 720.0], [30.4, 720.0], [30.5, 720.0], [30.6, 720.0], [30.7, 720.0], [30.8, 720.0], [30.9, 721.0], [31.0, 721.0], [31.1, 721.0], [31.2, 721.0], [31.3, 721.0], [31.4, 721.0], [31.5, 721.0], [31.6, 721.0], [31.7, 721.0], [31.8, 721.0], [31.9, 721.0], [32.0, 721.0], [32.1, 721.0], [32.2, 721.0], [32.3, 721.0], [32.4, 721.0], [32.5, 721.0], [32.6, 721.0], [32.7, 721.0], [32.8, 722.0], [32.9, 722.0], [33.0, 722.0], [33.1, 722.0], [33.2, 722.0], [33.3, 722.0], [33.4, 722.0], [33.5, 722.0], [33.6, 722.0], [33.7, 722.0], [33.8, 722.0], [33.9, 722.0], [34.0, 722.0], [34.1, 722.0], [34.2, 722.0], [34.3, 722.0], [34.4, 722.0], [34.5, 722.0], [34.6, 722.0], [34.7, 722.0], [34.8, 722.0], [34.9, 723.0], [35.0, 723.0], [35.1, 723.0], [35.2, 723.0], [35.3, 723.0], [35.4, 723.0], [35.5, 723.0], [35.6, 723.0], [35.7, 723.0], [35.8, 724.0], [35.9, 724.0], [36.0, 724.0], [36.1, 724.0], [36.2, 725.0], [36.3, 725.0], [36.4, 725.0], [36.5, 725.0], [36.6, 725.0], [36.7, 725.0], [36.8, 725.0], [36.9, 725.0], [37.0, 725.0], [37.1, 725.0], [37.2, 725.0], [37.3, 725.0], [37.4, 725.0], [37.5, 725.0], [37.6, 725.0], [37.7, 725.0], [37.8, 725.0], [37.9, 725.0], [38.0, 725.0], [38.1, 725.0], [38.2, 726.0], [38.3, 726.0], [38.4, 726.0], [38.5, 726.0], [38.6, 726.0], [38.7, 726.0], [38.8, 726.0], [38.9, 726.0], [39.0, 726.0], [39.1, 726.0], [39.2, 726.0], [39.3, 726.0], [39.4, 726.0], [39.5, 726.0], [39.6, 726.0], [39.7, 726.0], [39.8, 726.0], [39.9, 726.0], [40.0, 726.0], [40.1, 726.0], [40.2, 726.0], [40.3, 726.0], [40.4, 727.0], [40.5, 727.0], [40.6, 727.0], [40.7, 727.0], [40.8, 727.0], [40.9, 727.0], [41.0, 727.0], [41.1, 727.0], [41.2, 727.0], [41.3, 728.0], [41.4, 728.0], [41.5, 728.0], [41.6, 728.0], [41.7, 728.0], [41.8, 728.0], [41.9, 728.0], [42.0, 728.0], [42.1, 728.0], [42.2, 728.0], [42.3, 728.0], [42.4, 728.0], [42.5, 728.0], [42.6, 728.0], [42.7, 728.0], [42.8, 728.0], [42.9, 728.0], [43.0, 728.0], [43.1, 728.0], [43.2, 729.0], [43.3, 729.0], [43.4, 729.0], [43.5, 729.0], [43.6, 729.0], [43.7, 729.0], [43.8, 729.0], [43.9, 729.0], [44.0, 729.0], [44.1, 729.0], [44.2, 729.0], [44.3, 729.0], [44.4, 729.0], [44.5, 729.0], [44.6, 729.0], [44.7, 729.0], [44.8, 729.0], [44.9, 729.0], [45.0, 729.0], [45.1, 729.0], [45.2, 729.0], [45.3, 729.0], [45.4, 729.0], [45.5, 729.0], [45.6, 730.0], [45.7, 730.0], [45.8, 730.0], [45.9, 730.0], [46.0, 730.0], [46.1, 730.0], [46.2, 730.0], [46.3, 730.0], [46.4, 730.0], [46.5, 730.0], [46.6, 731.0], [46.7, 731.0], [46.8, 731.0], [46.9, 732.0], [47.0, 732.0], [47.1, 732.0], [47.2, 732.0], [47.3, 732.0], [47.4, 732.0], [47.5, 732.0], [47.6, 732.0], [47.7, 732.0], [47.8, 732.0], [47.9, 732.0], [48.0, 732.0], [48.1, 732.0], [48.2, 732.0], [48.3, 732.0], [48.4, 732.0], [48.5, 732.0], [48.6, 732.0], [48.7, 732.0], [48.8, 732.0], [48.9, 732.0], [49.0, 733.0], [49.1, 733.0], [49.2, 733.0], [49.3, 733.0], [49.4, 733.0], [49.5, 733.0], [49.6, 733.0], [49.7, 733.0], [49.8, 733.0], [49.9, 733.0], [50.0, 733.0], [50.1, 733.0], [50.2, 733.0], [50.3, 733.0], [50.4, 733.0], [50.5, 733.0], [50.6, 733.0], [50.7, 733.0], [50.8, 733.0], [50.9, 733.0], [51.0, 733.0], [51.1, 733.0], [51.2, 733.0], [51.3, 733.0], [51.4, 733.0], [51.5, 734.0], [51.6, 734.0], [51.7, 734.0], [51.8, 734.0], [51.9, 734.0], [52.0, 734.0], [52.1, 734.0], [52.2, 734.0], [52.3, 735.0], [52.4, 735.0], [52.5, 735.0], [52.6, 735.0], [52.7, 735.0], [52.8, 735.0], [52.9, 736.0], [53.0, 736.0], [53.1, 736.0], [53.2, 736.0], [53.3, 736.0], [53.4, 736.0], [53.5, 736.0], [53.6, 736.0], [53.7, 736.0], [53.8, 736.0], [53.9, 736.0], [54.0, 736.0], [54.1, 736.0], [54.2, 736.0], [54.3, 736.0], [54.4, 736.0], [54.5, 736.0], [54.6, 736.0], [54.7, 736.0], [54.8, 736.0], [54.9, 736.0], [55.0, 736.0], [55.1, 737.0], [55.2, 737.0], [55.3, 737.0], [55.4, 737.0], [55.5, 737.0], [55.6, 737.0], [55.7, 737.0], [55.8, 737.0], [55.9, 737.0], [56.0, 737.0], [56.1, 737.0], [56.2, 737.0], [56.3, 737.0], [56.4, 737.0], [56.5, 737.0], [56.6, 737.0], [56.7, 737.0], [56.8, 737.0], [56.9, 737.0], [57.0, 737.0], [57.1, 738.0], [57.2, 738.0], [57.3, 738.0], [57.4, 738.0], [57.5, 738.0], [57.6, 738.0], [57.7, 738.0], [57.8, 738.0], [57.9, 738.0], [58.0, 738.0], [58.1, 738.0], [58.2, 738.0], [58.3, 738.0], [58.4, 738.0], [58.5, 738.0], [58.6, 738.0], [58.7, 738.0], [58.8, 738.0], [58.9, 739.0], [59.0, 739.0], [59.1, 739.0], [59.2, 739.0], [59.3, 739.0], [59.4, 739.0], [59.5, 739.0], [59.6, 739.0], [59.7, 739.0], [59.8, 739.0], [59.9, 739.0], [60.0, 739.0], [60.1, 739.0], [60.2, 739.0], [60.3, 739.0], [60.4, 739.0], [60.5, 739.0], [60.6, 740.0], [60.7, 740.0], [60.8, 740.0], [60.9, 740.0], [61.0, 740.0], [61.1, 740.0], [61.2, 740.0], [61.3, 740.0], [61.4, 740.0], [61.5, 740.0], [61.6, 740.0], [61.7, 740.0], [61.8, 740.0], [61.9, 740.0], [62.0, 740.0], [62.1, 740.0], [62.2, 740.0], [62.3, 740.0], [62.4, 740.0], [62.5, 740.0], [62.6, 740.0], [62.7, 740.0], [62.8, 740.0], [62.9, 740.0], [63.0, 740.0], [63.1, 740.0], [63.2, 740.0], [63.3, 740.0], [63.4, 740.0], [63.5, 740.0], [63.6, 741.0], [63.7, 741.0], [63.8, 741.0], [63.9, 741.0], [64.0, 741.0], [64.1, 741.0], [64.2, 741.0], [64.3, 741.0], [64.4, 741.0], [64.5, 741.0], [64.6, 741.0], [64.7, 741.0], [64.8, 741.0], [64.9, 742.0], [65.0, 742.0], [65.1, 742.0], [65.2, 742.0], [65.3, 742.0], [65.4, 742.0], [65.5, 742.0], [65.6, 742.0], [65.7, 742.0], [65.8, 743.0], [65.9, 743.0], [66.0, 743.0], [66.1, 743.0], [66.2, 743.0], [66.3, 743.0], [66.4, 743.0], [66.5, 743.0], [66.6, 743.0], [66.7, 743.0], [66.8, 743.0], [66.9, 743.0], [67.0, 743.0], [67.1, 743.0], [67.2, 743.0], [67.3, 743.0], [67.4, 743.0], [67.5, 743.0], [67.6, 744.0], [67.7, 744.0], [67.8, 744.0], [67.9, 744.0], [68.0, 744.0], [68.1, 744.0], [68.2, 744.0], [68.3, 744.0], [68.4, 744.0], [68.5, 744.0], [68.6, 744.0], [68.7, 744.0], [68.8, 744.0], [68.9, 744.0], [69.0, 744.0], [69.1, 744.0], [69.2, 744.0], [69.3, 744.0], [69.4, 744.0], [69.5, 744.0], [69.6, 744.0], [69.7, 744.0], [69.8, 745.0], [69.9, 745.0], [70.0, 745.0], [70.1, 745.0], [70.2, 745.0], [70.3, 745.0], [70.4, 745.0], [70.5, 745.0], [70.6, 745.0], [70.7, 746.0], [70.8, 746.0], [70.9, 746.0], [71.0, 746.0], [71.1, 746.0], [71.2, 746.0], [71.3, 747.0], [71.4, 747.0], [71.5, 747.0], [71.6, 747.0], [71.7, 747.0], [71.8, 747.0], [71.9, 747.0], [72.0, 747.0], [72.1, 747.0], [72.2, 747.0], [72.3, 747.0], [72.4, 747.0], [72.5, 747.0], [72.6, 747.0], [72.7, 747.0], [72.8, 748.0], [72.9, 748.0], [73.0, 748.0], [73.1, 748.0], [73.2, 748.0], [73.3, 748.0], [73.4, 748.0], [73.5, 748.0], [73.6, 748.0], [73.7, 748.0], [73.8, 748.0], [73.9, 748.0], [74.0, 748.0], [74.1, 748.0], [74.2, 748.0], [74.3, 748.0], [74.4, 748.0], [74.5, 748.0], [74.6, 749.0], [74.7, 749.0], [74.8, 749.0], [74.9, 749.0], [75.0, 749.0], [75.1, 749.0], [75.2, 749.0], [75.3, 749.0], [75.4, 749.0], [75.5, 750.0], [75.6, 750.0], [75.7, 750.0], [75.8, 750.0], [75.9, 750.0], [76.0, 750.0], [76.1, 750.0], [76.2, 750.0], [76.3, 750.0], [76.4, 750.0], [76.5, 750.0], [76.6, 750.0], [76.7, 750.0], [76.8, 750.0], [76.9, 750.0], [77.0, 750.0], [77.1, 750.0], [77.2, 750.0], [77.3, 750.0], [77.4, 750.0], [77.5, 750.0], [77.6, 751.0], [77.7, 751.0], [77.8, 751.0], [77.9, 751.0], [78.0, 751.0], [78.1, 751.0], [78.2, 751.0], [78.3, 751.0], [78.4, 751.0], [78.5, 751.0], [78.6, 751.0], [78.7, 751.0], [78.8, 751.0], [78.9, 751.0], [79.0, 751.0], [79.1, 751.0], [79.2, 752.0], [79.3, 752.0], [79.4, 752.0], [79.5, 752.0], [79.6, 752.0], [79.7, 752.0], [79.8, 753.0], [79.9, 753.0], [80.0, 753.0], [80.1, 753.0], [80.2, 753.0], [80.3, 754.0], [80.4, 754.0], [80.5, 754.0], [80.6, 754.0], [80.7, 754.0], [80.8, 754.0], [80.9, 754.0], [81.0, 754.0], [81.1, 754.0], [81.2, 754.0], [81.3, 754.0], [81.4, 754.0], [81.5, 754.0], [81.6, 754.0], [81.7, 755.0], [81.8, 755.0], [81.9, 755.0], [82.0, 755.0], [82.1, 755.0], [82.2, 755.0], [82.3, 755.0], [82.4, 755.0], [82.5, 755.0], [82.6, 755.0], [82.7, 755.0], [82.8, 755.0], [82.9, 755.0], [83.0, 755.0], [83.1, 755.0], [83.2, 756.0], [83.3, 756.0], [83.4, 756.0], [83.5, 756.0], [83.6, 756.0], [83.7, 756.0], [83.8, 756.0], [83.9, 756.0], [84.0, 756.0], [84.1, 756.0], [84.2, 756.0], [84.3, 756.0], [84.4, 757.0], [84.5, 757.0], [84.6, 757.0], [84.7, 757.0], [84.8, 757.0], [84.9, 757.0], [85.0, 757.0], [85.1, 757.0], [85.2, 757.0], [85.3, 758.0], [85.4, 758.0], [85.5, 758.0], [85.6, 758.0], [85.7, 758.0], [85.8, 758.0], [85.9, 758.0], [86.0, 758.0], [86.1, 758.0], [86.2, 758.0], [86.3, 759.0], [86.4, 759.0], [86.5, 759.0], [86.6, 759.0], [86.7, 759.0], [86.8, 759.0], [86.9, 759.0], [87.0, 759.0], [87.1, 759.0], [87.2, 759.0], [87.3, 760.0], [87.4, 760.0], [87.5, 760.0], [87.6, 761.0], [87.7, 761.0], [87.8, 761.0], [87.9, 762.0], [88.0, 762.0], [88.1, 762.0], [88.2, 762.0], [88.3, 762.0], [88.4, 762.0], [88.5, 762.0], [88.6, 763.0], [88.7, 763.0], [88.8, 763.0], [88.9, 763.0], [89.0, 763.0], [89.1, 763.0], [89.2, 763.0], [89.3, 763.0], [89.4, 763.0], [89.5, 764.0], [89.6, 764.0], [89.7, 764.0], [89.8, 764.0], [89.9, 764.0], [90.0, 764.0], [90.1, 764.0], [90.2, 765.0], [90.3, 765.0], [90.4, 765.0], [90.5, 765.0], [90.6, 765.0], [90.7, 766.0], [90.8, 766.0], [90.9, 766.0], [91.0, 766.0], [91.1, 766.0], [91.2, 766.0], [91.3, 766.0], [91.4, 766.0], [91.5, 766.0], [91.6, 767.0], [91.7, 767.0], [91.8, 767.0], [91.9, 767.0], [92.0, 767.0], [92.1, 767.0], [92.2, 768.0], [92.3, 768.0], [92.4, 769.0], [92.5, 769.0], [92.6, 769.0], [92.7, 769.0], [92.8, 769.0], [92.9, 769.0], [93.0, 769.0], [93.1, 769.0], [93.2, 770.0], [93.3, 770.0], [93.4, 770.0], [93.5, 770.0], [93.6, 770.0], [93.7, 770.0], [93.8, 771.0], [93.9, 771.0], [94.0, 772.0], [94.1, 772.0], [94.2, 772.0], [94.3, 772.0], [94.4, 773.0], [94.5, 773.0], [94.6, 773.0], [94.7, 773.0], [94.8, 774.0], [94.9, 774.0], [95.0, 774.0], [95.1, 774.0], [95.2, 774.0], [95.3, 775.0], [95.4, 775.0], [95.5, 776.0], [95.6, 776.0], [95.7, 777.0], [95.8, 777.0], [95.9, 778.0], [96.0, 778.0], [96.1, 778.0], [96.2, 779.0], [96.3, 780.0], [96.4, 780.0], [96.5, 781.0], [96.6, 781.0], [96.7, 782.0], [96.8, 782.0], [96.9, 783.0], [97.0, 784.0], [97.1, 785.0], [97.2, 785.0], [97.3, 786.0], [97.4, 786.0], [97.5, 788.0], [97.6, 788.0], [97.7, 789.0], [97.8, 789.0], [97.9, 789.0], [98.0, 790.0], [98.1, 790.0], [98.2, 791.0], [98.3, 793.0], [98.4, 793.0], [98.5, 794.0], [98.6, 795.0], [98.7, 795.0], [98.8, 796.0], [98.9, 798.0], [99.0, 800.0], [99.1, 802.0], [99.2, 808.0], [99.3, 811.0], [99.4, 815.0], [99.5, 830.0], [99.6, 835.0], [99.7, 842.0], [99.8, 906.0], [99.9, 960.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 1762.0, "series": [{"data": [[300.0, 87.0], [600.0, 126.0], [700.0, 1762.0], [400.0, 67.0], [800.0, 17.0], [900.0, 4.0], [500.0, 52.0], [1000.0, 1.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 64.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1898.0, "series": [{"data": [[0.0, 154.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 64.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1898.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.7819505E12, "maxY": 62.04771642808453, "series": [{"data": [[1.78195056E12, 62.04771642808453], [1.78195062E12, 6.5], [1.7819505E12, 20.89638932496077]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 72 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 381.63157894736844, "minX": 1.0, "maxY": 795.9, "series": [{"data": [[2.0, 503.25], [3.0, 493.6666666666667], [4.0, 427.22222222222223], [5.0, 404.0769230769231], [6.0, 398.7857142857143], [7.0, 389.2666666666667], [8.0, 381.63157894736844], [9.0, 396.57142857142856], [10.0, 422.45], [11.0, 455.72222222222223], [12.0, 483.77272727272725], [13.0, 518.0], [14.0, 555.1500000000001], [15.0, 593.2105263157895], [16.0, 623.7142857142858], [17.0, 708.5238095238095], [18.0, 677.7894736842105], [19.0, 696.9000000000001], [20.0, 712.2857142857143], [21.0, 719.3181818181819], [22.0, 723.9130434782611], [23.0, 721.9545454545456], [24.0, 724.6999999999999], [25.0, 727.7368421052631], [26.0, 729.5652173913044], [27.0, 731.6], [28.0, 726.625], [29.0, 736.578947368421], [30.0, 741.4705882352941], [31.0, 737.6896551724137], [32.0, 729.2777777777777], [33.0, 744.8500000000001], [34.0, 735.12], [35.0, 739.0476190476192], [36.0, 751.0434782608696], [37.0, 736.578947368421], [38.0, 740.7142857142857], [39.0, 741.7727272727273], [40.0, 749.3043478260869], [41.0, 743.35], [42.0, 745.391304347826], [43.0, 747.1818181818181], [44.0, 748.3636363636364], [45.0, 740.9444444444443], [46.0, 749.8846153846152], [47.0, 745.0000000000001], [48.0, 745.7407407407408], [49.0, 757.8333333333331], [50.0, 737.3478260869565], [51.0, 754.75], [52.0, 743.2105263157895], [53.0, 747.9583333333333], [54.0, 795.9], [55.0, 750.1153846153845], [56.0, 746.9583333333335], [57.0, 760.3076923076923], [58.0, 746.0769230769232], [59.0, 753.1739130434784], [60.0, 751.2222222222222], [61.0, 744.4347826086956], [62.0, 759.4166666666666], [63.0, 747.3529411764706], [64.0, 753.28], [65.0, 755.4137931034483], [66.0, 743.75], [67.0, 755.7407407407406], [68.0, 746.7142857142858], [69.0, 758.1904761904763], [70.0, 739.4499999999999], [71.0, 750.4782608695654], [72.0, 730.8058394160585], [1.0, 643.5]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[49.344517958412, 707.2934782608694]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 72.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 31.6, "minX": 1.7819505E12, "maxY": 5647.95, "series": [{"data": [[1.78195056E12, 5647.95], [1.78195062E12, 46.2], [1.7819505E12, 2452.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195056E12, 3863.1], [1.78195062E12, 31.6], [1.7819505E12, 1677.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 631.0141287284146, "minX": 1.7819505E12, "maxY": 740.4301295160194, "series": [{"data": [[1.78195056E12, 740.4301295160194], [1.78195062E12, 705.5], [1.7819505E12, 631.0141287284146]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 630.98273155416, "minX": 1.7819505E12, "maxY": 740.4199045671445, "series": [{"data": [[1.78195056E12, 740.4199045671445], [1.78195062E12, 705.5], [1.7819505E12, 630.98273155416]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7819505E12, "maxY": 0.039246467817896404, "series": [{"data": [[1.78195056E12, 0.018404907975460134], [1.78195062E12, 0.0], [1.7819505E12, 0.039246467817896404]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 360.0, "minX": 1.7819505E12, "maxY": 619.0, "series": [{"data": [[1.7819505E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7819505E12, 360.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7819505E12, 583.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7819505E12, 617.81]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7819505E12, 423.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7819505E12, 607.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 372.0, "minX": 3.0, "maxY": 753.0, "series": [{"data": [[8.0, 391.0], [17.0, 372.0], [21.0, 376.0], [23.0, 479.0], [3.0, 448.0], [6.0, 419.5], [24.0, 404.0], [25.0, 570.5], [13.0, 378.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 751.5], [12.0, 702.5], [17.0, 753.0], [19.0, 675.0], [20.0, 748.5], [21.0, 741.0], [22.0, 719.0], [23.0, 738.0], [24.0, 725.0], [25.0, 744.0], [26.0, 727.5], [27.0, 745.0], [28.0, 749.5], [29.0, 748.0], [30.0, 739.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 372.0, "minX": 3.0, "maxY": 753.0, "series": [{"data": [[8.0, 391.0], [17.0, 372.0], [21.0, 376.0], [23.0, 479.0], [3.0, 448.0], [6.0, 419.5], [24.0, 404.0], [25.0, 570.0], [13.0, 378.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 751.5], [12.0, 702.5], [17.0, 753.0], [19.0, 675.0], [20.0, 748.5], [21.0, 741.0], [22.0, 719.0], [23.0, 738.0], [24.0, 725.0], [25.0, 744.0], [26.0, 727.5], [27.0, 745.0], [28.0, 749.5], [29.0, 748.0], [30.0, 739.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.9, "minX": 1.7819505E12, "maxY": 24.366666666666667, "series": [{"data": [[1.78195056E12, 24.366666666666667], [1.7819505E12, 10.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195056E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.7819505E12, "maxY": 24.45, "series": [{"data": [[1.78195056E12, 24.45], [1.78195062E12, 0.2], [1.7819505E12, 10.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.7819505E12, "maxY": 24.45, "series": [{"data": [[1.7819505E12, 3.6333333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195056E12, 24.45], [1.78195062E12, 0.2], [1.7819505E12, 6.983333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.7819505E12, "maxY": 24.45, "series": [{"data": [[1.7819505E12, 3.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195056E12, 24.45], [1.78195062E12, 0.2], [1.7819505E12, 6.983333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195062E12, "title": "Total Transactions Per Second"}},
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

