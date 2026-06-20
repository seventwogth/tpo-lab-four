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
        data: {"result": {"minY": 358.0, "minX": 0.0, "maxY": 897.0, "series": [{"data": [[0.0, 358.0], [0.1, 359.0], [0.2, 360.0], [0.3, 360.0], [0.4, 362.0], [0.5, 362.0], [0.6, 362.0], [0.7, 363.0], [0.8, 363.0], [0.9, 364.0], [1.0, 364.0], [1.1, 365.0], [1.2, 366.0], [1.3, 366.0], [1.4, 366.0], [1.5, 366.0], [1.6, 367.0], [1.7, 367.0], [1.8, 368.0], [1.9, 371.0], [2.0, 371.0], [2.1, 372.0], [2.2, 373.0], [2.3, 373.0], [2.4, 373.0], [2.5, 374.0], [2.6, 374.0], [2.7, 375.0], [2.8, 375.0], [2.9, 376.0], [3.0, 376.0], [3.1, 377.0], [3.2, 378.0], [3.3, 380.0], [3.4, 381.0], [3.5, 381.0], [3.6, 382.0], [3.7, 382.0], [3.8, 384.0], [3.9, 386.0], [4.0, 387.0], [4.1, 389.0], [4.2, 390.0], [4.3, 391.0], [4.4, 393.0], [4.5, 394.0], [4.6, 395.0], [4.7, 398.0], [4.8, 401.0], [4.9, 403.0], [5.0, 407.0], [5.1, 408.0], [5.2, 412.0], [5.3, 415.0], [5.4, 417.0], [5.5, 418.0], [5.6, 420.0], [5.7, 421.0], [5.8, 426.0], [5.9, 427.0], [6.0, 430.0], [6.1, 430.0], [6.2, 433.0], [6.3, 434.0], [6.4, 437.0], [6.5, 442.0], [6.6, 446.0], [6.7, 450.0], [6.8, 454.0], [6.9, 457.0], [7.0, 460.0], [7.1, 462.0], [7.2, 463.0], [7.3, 469.0], [7.4, 472.0], [7.5, 476.0], [7.6, 476.0], [7.7, 479.0], [7.8, 483.0], [7.9, 492.0], [8.0, 494.0], [8.1, 496.0], [8.2, 500.0], [8.3, 501.0], [8.4, 506.0], [8.5, 513.0], [8.6, 515.0], [8.7, 517.0], [8.8, 526.0], [8.9, 527.0], [9.0, 528.0], [9.1, 529.0], [9.2, 533.0], [9.3, 536.0], [9.4, 539.0], [9.5, 543.0], [9.6, 544.0], [9.7, 545.0], [9.8, 548.0], [9.9, 550.0], [10.0, 555.0], [10.1, 557.0], [10.2, 563.0], [10.3, 565.0], [10.4, 568.0], [10.5, 568.0], [10.6, 572.0], [10.7, 574.0], [10.8, 575.0], [10.9, 579.0], [11.0, 585.0], [11.1, 585.0], [11.2, 587.0], [11.3, 588.0], [11.4, 593.0], [11.5, 598.0], [11.6, 600.0], [11.7, 600.0], [11.8, 601.0], [11.9, 604.0], [12.0, 605.0], [12.1, 609.0], [12.2, 609.0], [12.3, 610.0], [12.4, 611.0], [12.5, 611.0], [12.6, 611.0], [12.7, 612.0], [12.8, 612.0], [12.9, 612.0], [13.0, 612.0], [13.1, 612.0], [13.2, 612.0], [13.3, 613.0], [13.4, 613.0], [13.5, 614.0], [13.6, 614.0], [13.7, 614.0], [13.8, 614.0], [13.9, 615.0], [14.0, 615.0], [14.1, 615.0], [14.2, 615.0], [14.3, 615.0], [14.4, 615.0], [14.5, 615.0], [14.6, 616.0], [14.7, 616.0], [14.8, 617.0], [14.9, 617.0], [15.0, 617.0], [15.1, 618.0], [15.2, 618.0], [15.3, 618.0], [15.4, 618.0], [15.5, 618.0], [15.6, 618.0], [15.7, 619.0], [15.8, 619.0], [15.9, 620.0], [16.0, 620.0], [16.1, 620.0], [16.2, 620.0], [16.3, 620.0], [16.4, 620.0], [16.5, 621.0], [16.6, 621.0], [16.7, 621.0], [16.8, 621.0], [16.9, 621.0], [17.0, 621.0], [17.1, 621.0], [17.2, 621.0], [17.3, 621.0], [17.4, 621.0], [17.5, 622.0], [17.6, 622.0], [17.7, 622.0], [17.8, 622.0], [17.9, 622.0], [18.0, 623.0], [18.1, 623.0], [18.2, 623.0], [18.3, 623.0], [18.4, 623.0], [18.5, 623.0], [18.6, 623.0], [18.7, 623.0], [18.8, 624.0], [18.9, 624.0], [19.0, 624.0], [19.1, 624.0], [19.2, 624.0], [19.3, 624.0], [19.4, 624.0], [19.5, 624.0], [19.6, 625.0], [19.7, 625.0], [19.8, 625.0], [19.9, 625.0], [20.0, 625.0], [20.1, 625.0], [20.2, 625.0], [20.3, 625.0], [20.4, 625.0], [20.5, 625.0], [20.6, 625.0], [20.7, 625.0], [20.8, 625.0], [20.9, 626.0], [21.0, 626.0], [21.1, 626.0], [21.2, 626.0], [21.3, 626.0], [21.4, 626.0], [21.5, 626.0], [21.6, 626.0], [21.7, 626.0], [21.8, 626.0], [21.9, 626.0], [22.0, 627.0], [22.1, 627.0], [22.2, 627.0], [22.3, 627.0], [22.4, 627.0], [22.5, 627.0], [22.6, 627.0], [22.7, 628.0], [22.8, 628.0], [22.9, 628.0], [23.0, 628.0], [23.1, 628.0], [23.2, 628.0], [23.3, 628.0], [23.4, 628.0], [23.5, 628.0], [23.6, 628.0], [23.7, 628.0], [23.8, 629.0], [23.9, 629.0], [24.0, 629.0], [24.1, 629.0], [24.2, 629.0], [24.3, 629.0], [24.4, 629.0], [24.5, 629.0], [24.6, 629.0], [24.7, 629.0], [24.8, 629.0], [24.9, 629.0], [25.0, 629.0], [25.1, 630.0], [25.2, 630.0], [25.3, 631.0], [25.4, 631.0], [25.5, 631.0], [25.6, 631.0], [25.7, 631.0], [25.8, 631.0], [25.9, 631.0], [26.0, 631.0], [26.1, 631.0], [26.2, 631.0], [26.3, 631.0], [26.4, 632.0], [26.5, 632.0], [26.6, 632.0], [26.7, 632.0], [26.8, 632.0], [26.9, 632.0], [27.0, 632.0], [27.1, 632.0], [27.2, 632.0], [27.3, 632.0], [27.4, 632.0], [27.5, 632.0], [27.6, 632.0], [27.7, 632.0], [27.8, 632.0], [27.9, 632.0], [28.0, 632.0], [28.1, 632.0], [28.2, 633.0], [28.3, 633.0], [28.4, 634.0], [28.5, 634.0], [28.6, 634.0], [28.7, 634.0], [28.8, 634.0], [28.9, 634.0], [29.0, 634.0], [29.1, 634.0], [29.2, 634.0], [29.3, 634.0], [29.4, 634.0], [29.5, 634.0], [29.6, 634.0], [29.7, 634.0], [29.8, 634.0], [29.9, 635.0], [30.0, 635.0], [30.1, 635.0], [30.2, 635.0], [30.3, 635.0], [30.4, 635.0], [30.5, 635.0], [30.6, 635.0], [30.7, 635.0], [30.8, 635.0], [30.9, 635.0], [31.0, 635.0], [31.1, 635.0], [31.2, 635.0], [31.3, 635.0], [31.4, 635.0], [31.5, 635.0], [31.6, 635.0], [31.7, 635.0], [31.8, 635.0], [31.9, 635.0], [32.0, 635.0], [32.1, 635.0], [32.2, 635.0], [32.3, 635.0], [32.4, 636.0], [32.5, 636.0], [32.6, 636.0], [32.7, 637.0], [32.8, 637.0], [32.9, 637.0], [33.0, 637.0], [33.1, 637.0], [33.2, 637.0], [33.3, 637.0], [33.4, 637.0], [33.5, 637.0], [33.6, 637.0], [33.7, 638.0], [33.8, 638.0], [33.9, 638.0], [34.0, 638.0], [34.1, 638.0], [34.2, 638.0], [34.3, 638.0], [34.4, 638.0], [34.5, 638.0], [34.6, 638.0], [34.7, 638.0], [34.8, 638.0], [34.9, 638.0], [35.0, 638.0], [35.1, 638.0], [35.2, 638.0], [35.3, 638.0], [35.4, 638.0], [35.5, 638.0], [35.6, 638.0], [35.7, 638.0], [35.8, 638.0], [35.9, 638.0], [36.0, 639.0], [36.1, 639.0], [36.2, 639.0], [36.3, 639.0], [36.4, 639.0], [36.5, 639.0], [36.6, 640.0], [36.7, 640.0], [36.8, 640.0], [36.9, 640.0], [37.0, 640.0], [37.1, 640.0], [37.2, 640.0], [37.3, 640.0], [37.4, 640.0], [37.5, 640.0], [37.6, 640.0], [37.7, 640.0], [37.8, 640.0], [37.9, 640.0], [38.0, 640.0], [38.1, 640.0], [38.2, 640.0], [38.3, 640.0], [38.4, 640.0], [38.5, 640.0], [38.6, 640.0], [38.7, 641.0], [38.8, 641.0], [38.9, 641.0], [39.0, 641.0], [39.1, 641.0], [39.2, 641.0], [39.3, 641.0], [39.4, 641.0], [39.5, 641.0], [39.6, 641.0], [39.7, 641.0], [39.8, 641.0], [39.9, 641.0], [40.0, 641.0], [40.1, 641.0], [40.2, 641.0], [40.3, 641.0], [40.4, 641.0], [40.5, 641.0], [40.6, 641.0], [40.7, 641.0], [40.8, 641.0], [40.9, 641.0], [41.0, 641.0], [41.1, 641.0], [41.2, 641.0], [41.3, 641.0], [41.4, 641.0], [41.5, 641.0], [41.6, 641.0], [41.7, 641.0], [41.8, 641.0], [41.9, 641.0], [42.0, 641.0], [42.1, 642.0], [42.2, 642.0], [42.3, 642.0], [42.4, 642.0], [42.5, 642.0], [42.6, 642.0], [42.7, 642.0], [42.8, 642.0], [42.9, 642.0], [43.0, 642.0], [43.1, 642.0], [43.2, 643.0], [43.3, 643.0], [43.4, 643.0], [43.5, 643.0], [43.6, 643.0], [43.7, 643.0], [43.8, 643.0], [43.9, 643.0], [44.0, 643.0], [44.1, 643.0], [44.2, 643.0], [44.3, 643.0], [44.4, 643.0], [44.5, 643.0], [44.6, 643.0], [44.7, 643.0], [44.8, 643.0], [44.9, 643.0], [45.0, 643.0], [45.1, 643.0], [45.2, 643.0], [45.3, 643.0], [45.4, 643.0], [45.5, 644.0], [45.6, 644.0], [45.7, 644.0], [45.8, 644.0], [45.9, 644.0], [46.0, 644.0], [46.1, 644.0], [46.2, 644.0], [46.3, 644.0], [46.4, 644.0], [46.5, 644.0], [46.6, 644.0], [46.7, 644.0], [46.8, 644.0], [46.9, 644.0], [47.0, 644.0], [47.1, 644.0], [47.2, 644.0], [47.3, 644.0], [47.4, 644.0], [47.5, 644.0], [47.6, 645.0], [47.7, 645.0], [47.8, 645.0], [47.9, 645.0], [48.0, 645.0], [48.1, 645.0], [48.2, 646.0], [48.3, 646.0], [48.4, 646.0], [48.5, 646.0], [48.6, 646.0], [48.7, 646.0], [48.8, 646.0], [48.9, 646.0], [49.0, 646.0], [49.1, 646.0], [49.2, 646.0], [49.3, 646.0], [49.4, 646.0], [49.5, 646.0], [49.6, 646.0], [49.7, 646.0], [49.8, 646.0], [49.9, 646.0], [50.0, 646.0], [50.1, 646.0], [50.2, 646.0], [50.3, 646.0], [50.4, 646.0], [50.5, 647.0], [50.6, 647.0], [50.7, 647.0], [50.8, 647.0], [50.9, 647.0], [51.0, 647.0], [51.1, 647.0], [51.2, 647.0], [51.3, 647.0], [51.4, 647.0], [51.5, 647.0], [51.6, 647.0], [51.7, 647.0], [51.8, 647.0], [51.9, 647.0], [52.0, 647.0], [52.1, 647.0], [52.2, 647.0], [52.3, 647.0], [52.4, 647.0], [52.5, 647.0], [52.6, 647.0], [52.7, 647.0], [52.8, 647.0], [52.9, 647.0], [53.0, 647.0], [53.1, 647.0], [53.2, 647.0], [53.3, 647.0], [53.4, 647.0], [53.5, 647.0], [53.6, 647.0], [53.7, 647.0], [53.8, 648.0], [53.9, 648.0], [54.0, 648.0], [54.1, 648.0], [54.2, 648.0], [54.3, 648.0], [54.4, 648.0], [54.5, 648.0], [54.6, 648.0], [54.7, 649.0], [54.8, 649.0], [54.9, 649.0], [55.0, 649.0], [55.1, 649.0], [55.2, 649.0], [55.3, 649.0], [55.4, 649.0], [55.5, 649.0], [55.6, 649.0], [55.7, 649.0], [55.8, 649.0], [55.9, 649.0], [56.0, 649.0], [56.1, 649.0], [56.2, 649.0], [56.3, 649.0], [56.4, 649.0], [56.5, 649.0], [56.6, 649.0], [56.7, 649.0], [56.8, 649.0], [56.9, 649.0], [57.0, 649.0], [57.1, 649.0], [57.2, 649.0], [57.3, 649.0], [57.4, 650.0], [57.5, 650.0], [57.6, 650.0], [57.7, 650.0], [57.8, 650.0], [57.9, 650.0], [58.0, 650.0], [58.1, 650.0], [58.2, 650.0], [58.3, 650.0], [58.4, 650.0], [58.5, 650.0], [58.6, 650.0], [58.7, 650.0], [58.8, 650.0], [58.9, 650.0], [59.0, 650.0], [59.1, 650.0], [59.2, 650.0], [59.3, 650.0], [59.4, 650.0], [59.5, 650.0], [59.6, 650.0], [59.7, 650.0], [59.8, 650.0], [59.9, 650.0], [60.0, 650.0], [60.1, 650.0], [60.2, 650.0], [60.3, 650.0], [60.4, 650.0], [60.5, 650.0], [60.6, 651.0], [60.7, 651.0], [60.8, 651.0], [60.9, 651.0], [61.0, 651.0], [61.1, 651.0], [61.2, 651.0], [61.3, 651.0], [61.4, 651.0], [61.5, 651.0], [61.6, 651.0], [61.7, 651.0], [61.8, 651.0], [61.9, 651.0], [62.0, 652.0], [62.1, 652.0], [62.2, 652.0], [62.3, 652.0], [62.4, 652.0], [62.5, 652.0], [62.6, 652.0], [62.7, 652.0], [62.8, 652.0], [62.9, 652.0], [63.0, 652.0], [63.1, 652.0], [63.2, 652.0], [63.3, 652.0], [63.4, 652.0], [63.5, 652.0], [63.6, 652.0], [63.7, 652.0], [63.8, 652.0], [63.9, 652.0], [64.0, 652.0], [64.1, 652.0], [64.2, 652.0], [64.3, 652.0], [64.4, 652.0], [64.5, 652.0], [64.6, 652.0], [64.7, 653.0], [64.8, 653.0], [64.9, 653.0], [65.0, 653.0], [65.1, 653.0], [65.2, 653.0], [65.3, 653.0], [65.4, 653.0], [65.5, 653.0], [65.6, 653.0], [65.7, 653.0], [65.8, 653.0], [65.9, 653.0], [66.0, 653.0], [66.1, 653.0], [66.2, 653.0], [66.3, 653.0], [66.4, 653.0], [66.5, 653.0], [66.6, 653.0], [66.7, 653.0], [66.8, 653.0], [66.9, 653.0], [67.0, 653.0], [67.1, 654.0], [67.2, 654.0], [67.3, 654.0], [67.4, 654.0], [67.5, 654.0], [67.6, 654.0], [67.7, 654.0], [67.8, 654.0], [67.9, 654.0], [68.0, 655.0], [68.1, 655.0], [68.2, 655.0], [68.3, 655.0], [68.4, 655.0], [68.5, 655.0], [68.6, 655.0], [68.7, 655.0], [68.8, 655.0], [68.9, 655.0], [69.0, 655.0], [69.1, 655.0], [69.2, 655.0], [69.3, 655.0], [69.4, 655.0], [69.5, 655.0], [69.6, 655.0], [69.7, 655.0], [69.8, 655.0], [69.9, 655.0], [70.0, 655.0], [70.1, 655.0], [70.2, 655.0], [70.3, 656.0], [70.4, 656.0], [70.5, 656.0], [70.6, 656.0], [70.7, 656.0], [70.8, 656.0], [70.9, 656.0], [71.0, 656.0], [71.1, 656.0], [71.2, 656.0], [71.3, 656.0], [71.4, 656.0], [71.5, 656.0], [71.6, 656.0], [71.7, 656.0], [71.8, 656.0], [71.9, 656.0], [72.0, 656.0], [72.1, 656.0], [72.2, 656.0], [72.3, 657.0], [72.4, 657.0], [72.5, 657.0], [72.6, 657.0], [72.7, 657.0], [72.8, 657.0], [72.9, 657.0], [73.0, 657.0], [73.1, 657.0], [73.2, 657.0], [73.3, 657.0], [73.4, 657.0], [73.5, 657.0], [73.6, 658.0], [73.7, 658.0], [73.8, 658.0], [73.9, 658.0], [74.0, 658.0], [74.1, 658.0], [74.2, 658.0], [74.3, 658.0], [74.4, 658.0], [74.5, 658.0], [74.6, 658.0], [74.7, 658.0], [74.8, 658.0], [74.9, 658.0], [75.0, 658.0], [75.1, 658.0], [75.2, 658.0], [75.3, 658.0], [75.4, 659.0], [75.5, 659.0], [75.6, 659.0], [75.7, 659.0], [75.8, 659.0], [75.9, 659.0], [76.0, 659.0], [76.1, 659.0], [76.2, 659.0], [76.3, 659.0], [76.4, 659.0], [76.5, 659.0], [76.6, 659.0], [76.7, 659.0], [76.8, 659.0], [76.9, 659.0], [77.0, 659.0], [77.1, 659.0], [77.2, 659.0], [77.3, 659.0], [77.4, 659.0], [77.5, 659.0], [77.6, 659.0], [77.7, 659.0], [77.8, 659.0], [77.9, 660.0], [78.0, 660.0], [78.1, 660.0], [78.2, 660.0], [78.3, 660.0], [78.4, 660.0], [78.5, 660.0], [78.6, 661.0], [78.7, 661.0], [78.8, 661.0], [78.9, 661.0], [79.0, 661.0], [79.1, 661.0], [79.2, 661.0], [79.3, 661.0], [79.4, 661.0], [79.5, 661.0], [79.6, 661.0], [79.7, 661.0], [79.8, 661.0], [79.9, 661.0], [80.0, 661.0], [80.1, 661.0], [80.2, 662.0], [80.3, 662.0], [80.4, 662.0], [80.5, 662.0], [80.6, 662.0], [80.7, 662.0], [80.8, 662.0], [80.9, 662.0], [81.0, 662.0], [81.1, 662.0], [81.2, 662.0], [81.3, 662.0], [81.4, 662.0], [81.5, 662.0], [81.6, 662.0], [81.7, 662.0], [81.8, 662.0], [81.9, 662.0], [82.0, 663.0], [82.1, 663.0], [82.2, 663.0], [82.3, 663.0], [82.4, 663.0], [82.5, 663.0], [82.6, 663.0], [82.7, 663.0], [82.8, 663.0], [82.9, 664.0], [83.0, 664.0], [83.1, 664.0], [83.2, 664.0], [83.3, 664.0], [83.4, 664.0], [83.5, 665.0], [83.6, 665.0], [83.7, 665.0], [83.8, 665.0], [83.9, 665.0], [84.0, 665.0], [84.1, 665.0], [84.2, 665.0], [84.3, 665.0], [84.4, 665.0], [84.5, 665.0], [84.6, 665.0], [84.7, 665.0], [84.8, 665.0], [84.9, 665.0], [85.0, 665.0], [85.1, 665.0], [85.2, 665.0], [85.3, 665.0], [85.4, 665.0], [85.5, 666.0], [85.6, 666.0], [85.7, 666.0], [85.8, 666.0], [85.9, 666.0], [86.0, 666.0], [86.1, 666.0], [86.2, 666.0], [86.3, 666.0], [86.4, 666.0], [86.5, 666.0], [86.6, 666.0], [86.7, 666.0], [86.8, 666.0], [86.9, 666.0], [87.0, 666.0], [87.1, 667.0], [87.2, 667.0], [87.3, 667.0], [87.4, 667.0], [87.5, 667.0], [87.6, 667.0], [87.7, 667.0], [87.8, 667.0], [87.9, 667.0], [88.0, 667.0], [88.1, 667.0], [88.2, 667.0], [88.3, 667.0], [88.4, 667.0], [88.5, 668.0], [88.6, 668.0], [88.7, 668.0], [88.8, 668.0], [88.9, 668.0], [89.0, 668.0], [89.1, 668.0], [89.2, 669.0], [89.3, 669.0], [89.4, 669.0], [89.5, 669.0], [89.6, 669.0], [89.7, 669.0], [89.8, 669.0], [89.9, 669.0], [90.0, 669.0], [90.1, 669.0], [90.2, 669.0], [90.3, 670.0], [90.4, 670.0], [90.5, 670.0], [90.6, 670.0], [90.7, 670.0], [90.8, 670.0], [90.9, 671.0], [91.0, 671.0], [91.1, 671.0], [91.2, 671.0], [91.3, 671.0], [91.4, 671.0], [91.5, 671.0], [91.6, 671.0], [91.7, 671.0], [91.8, 672.0], [91.9, 672.0], [92.0, 672.0], [92.1, 672.0], [92.2, 673.0], [92.3, 673.0], [92.4, 674.0], [92.5, 674.0], [92.6, 674.0], [92.7, 674.0], [92.8, 674.0], [92.9, 675.0], [93.0, 675.0], [93.1, 675.0], [93.2, 676.0], [93.3, 677.0], [93.4, 677.0], [93.5, 677.0], [93.6, 678.0], [93.7, 678.0], [93.8, 679.0], [93.9, 679.0], [94.0, 679.0], [94.1, 680.0], [94.2, 681.0], [94.3, 681.0], [94.4, 681.0], [94.5, 681.0], [94.6, 681.0], [94.7, 681.0], [94.8, 681.0], [94.9, 682.0], [95.0, 682.0], [95.1, 682.0], [95.2, 683.0], [95.3, 684.0], [95.4, 685.0], [95.5, 685.0], [95.6, 685.0], [95.7, 686.0], [95.8, 686.0], [95.9, 687.0], [96.0, 687.0], [96.1, 688.0], [96.2, 689.0], [96.3, 689.0], [96.4, 689.0], [96.5, 690.0], [96.6, 690.0], [96.7, 690.0], [96.8, 691.0], [96.9, 692.0], [97.0, 692.0], [97.1, 692.0], [97.2, 692.0], [97.3, 694.0], [97.4, 694.0], [97.5, 694.0], [97.6, 696.0], [97.7, 697.0], [97.8, 697.0], [97.9, 698.0], [98.0, 698.0], [98.1, 700.0], [98.2, 700.0], [98.3, 701.0], [98.4, 701.0], [98.5, 702.0], [98.6, 702.0], [98.7, 703.0], [98.8, 705.0], [98.9, 705.0], [99.0, 706.0], [99.1, 708.0], [99.2, 708.0], [99.3, 709.0], [99.4, 711.0], [99.5, 713.0], [99.6, 720.0], [99.7, 822.0], [99.8, 844.0], [99.9, 892.0], [100.0, 897.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 300.0, "maxY": 1632.0, "series": [{"data": [[300.0, 89.0], [600.0, 1632.0], [700.0, 31.0], [400.0, 65.0], [800.0, 6.0], [500.0, 65.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 155.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1577.0, "series": [{"data": [[0.0, 156.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 155.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1577.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.666666666666667, "minX": 1.78195038E12, "maxY": 60.39964476021316, "series": [{"data": [[1.78195044E12, 37.5011583011583], [1.7819505E12, 60.39964476021316], [1.78195038E12, 3.666666666666667]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 64 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 378.8947368421052, "minX": 1.0, "maxY": 708.2499999999999, "series": [{"data": [[2.0, 449.0], [3.0, 427.0], [4.0, 404.0], [5.0, 395.61538461538464], [6.0, 383.75], [7.0, 378.8947368421052], [8.0, 386.85], [9.0, 412.3809523809524], [10.0, 440.4761904761905], [11.0, 470.20000000000005], [12.0, 505.2105263157894], [13.0, 532.6363636363636], [14.0, 569.65], [15.0, 586.5789473684212], [16.0, 616.608695652174], [17.0, 627.1578947368422], [18.0, 639.4499999999999], [19.0, 642.8333333333333], [20.0, 639.3333333333334], [21.0, 639.6363636363636], [22.0, 642.5217391304346], [23.0, 639.9499999999999], [24.0, 643.2499999999999], [25.0, 646.1052631578947], [26.0, 644.5000000000001], [27.0, 648.1249999999999], [28.0, 645.8181818181818], [29.0, 650.6363636363634], [30.0, 651.235294117647], [31.0, 649.3461538461537], [32.0, 650.909090909091], [33.0, 661.0526315789473], [34.0, 651.7692307692307], [35.0, 655.75], [36.0, 708.2499999999999], [37.0, 648.8636363636364], [38.0, 657.3333333333334], [39.0, 647.0869565217391], [40.0, 658.5454545454545], [41.0, 655.6190476190476], [42.0, 653.4782608695652], [43.0, 652.1363636363636], [44.0, 658.6190476190476], [45.0, 650.7391304347825], [46.0, 664.3636363636364], [47.0, 649.8666666666668], [48.0, 663.8928571428571], [49.0, 655.9374999999999], [50.0, 658.1666666666666], [51.0, 660.4999999999998], [52.0, 655.5], [53.0, 664.0], [54.0, 671.1111111111111], [55.0, 650.0000000000001], [56.0, 668.952380952381], [57.0, 656.3333333333334], [58.0, 668.16], [59.0, 663.1666666666669], [60.0, 658.0625000000001], [61.0, 657.925925925926], [62.0, 655.8076923076923], [63.0, 660.0588235294117], [64.0, 643.6103896103889], [1.0, 596.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[43.79184322033891, 626.3977754237284]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 79.0, "minX": 1.78195038E12, "maxY": 4985.75, "series": [{"data": [[1.78195044E12, 4985.75], [1.7819505E12, 2167.55], [1.78195038E12, 115.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195044E12, 3410.1666666666665], [1.7819505E12, 1482.5666666666666], [1.78195038E12, 79.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 392.00000000000006, "minX": 1.78195038E12, "maxY": 639.6003552397865, "series": [{"data": [[1.78195044E12, 626.0880308880317], [1.7819505E12, 639.6003552397865], [1.78195038E12, 392.00000000000006]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819505E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 391.8666666666667, "minX": 1.78195038E12, "maxY": 639.586145648313, "series": [{"data": [[1.78195044E12, 626.0718146718136], [1.7819505E12, 639.586145648313], [1.78195038E12, 391.8666666666667]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819505E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005328596802841919, "minX": 1.78195038E12, "maxY": 0.6333333333333333, "series": [{"data": [[1.78195044E12, 0.02239382239382237], [1.7819505E12, 0.005328596802841919], [1.78195038E12, 0.6333333333333333]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819505E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 358.0, "minX": 1.78195038E12, "maxY": 620.0, "series": [{"data": [[1.78195044E12, 619.0], [1.7819505E12, 620.0], [1.78195038E12, 550.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195044E12, 358.0], [1.7819505E12, 609.0], [1.78195038E12, 371.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195044E12, 600.0], [1.7819505E12, 620.0], [1.78195038E12, 420.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195044E12, 618.0], [1.7819505E12, 620.0], [1.78195038E12, 550.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195044E12, 462.0], [1.7819505E12, 615.0], [1.78195038E12, 382.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195044E12, 613.1999999999999], [1.7819505E12, 620.0], [1.78195038E12, 486.19999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 366.5, "minX": 3.0, "maxY": 657.0, "series": [{"data": [[19.0, 598.0], [10.0, 382.0], [20.0, 505.0], [21.0, 564.5], [11.0, 376.0], [22.0, 430.0], [23.0, 618.0], [3.0, 434.0], [6.0, 394.5], [14.0, 366.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 652.0], [16.0, 652.0], [17.0, 652.0], [18.0, 648.5], [19.0, 635.0], [20.0, 647.0], [21.0, 650.0], [22.0, 649.0], [23.0, 650.0], [24.0, 655.0], [6.0, 634.5], [25.0, 647.0], [26.0, 653.5], [27.0, 657.0], [28.0, 650.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 366.5, "minX": 3.0, "maxY": 657.0, "series": [{"data": [[19.0, 598.0], [10.0, 382.0], [20.0, 505.0], [21.0, 564.5], [11.0, 376.0], [22.0, 430.0], [23.0, 618.0], [3.0, 434.0], [6.0, 394.5], [14.0, 366.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 652.0], [16.0, 652.0], [17.0, 652.0], [18.0, 648.5], [19.0, 635.0], [20.0, 647.0], [21.0, 650.0], [22.0, 649.0], [23.0, 650.0], [24.0, 655.0], [6.0, 634.5], [25.0, 647.0], [26.0, 653.5], [27.0, 657.0], [28.0, 650.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.78195038E12, "maxY": 21.633333333333333, "series": [{"data": [[1.78195044E12, 21.633333333333333], [1.7819505E12, 9.25], [1.78195038E12, 0.5833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.78195038E12, "maxY": 21.583333333333332, "series": [{"data": [[1.78195044E12, 21.583333333333332], [1.7819505E12, 9.383333333333333], [1.78195038E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7819505E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.78195038E12, "maxY": 18.066666666666666, "series": [{"data": [[1.78195044E12, 3.5166666666666666], [1.7819505E12, 1.1666666666666667], [1.78195038E12, 0.5]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195044E12, 18.066666666666666], [1.7819505E12, 8.216666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819505E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.78195038E12, "maxY": 18.066666666666666, "series": [{"data": [[1.78195044E12, 3.5166666666666666], [1.7819505E12, 1.1666666666666667], [1.78195038E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195044E12, 18.066666666666666], [1.7819505E12, 8.216666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7819505E12, "title": "Total Transactions Per Second"}},
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

