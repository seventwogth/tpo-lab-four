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
        data: {"result": {"minY": 342.0, "minX": 0.0, "maxY": 672.0, "series": [{"data": [[0.0, 342.0], [0.1, 342.0], [0.2, 342.0], [0.3, 342.0], [0.4, 342.0], [0.5, 343.0], [0.6, 344.0], [0.7, 344.0], [0.8, 344.0], [0.9, 344.0], [1.0, 345.0], [1.1, 345.0], [1.2, 345.0], [1.3, 346.0], [1.4, 346.0], [1.5, 346.0], [1.6, 346.0], [1.7, 347.0], [1.8, 347.0], [1.9, 347.0], [2.0, 347.0], [2.1, 348.0], [2.2, 348.0], [2.3, 348.0], [2.4, 348.0], [2.5, 348.0], [2.6, 348.0], [2.7, 349.0], [2.8, 349.0], [2.9, 349.0], [3.0, 349.0], [3.1, 349.0], [3.2, 349.0], [3.3, 349.0], [3.4, 350.0], [3.5, 350.0], [3.6, 350.0], [3.7, 350.0], [3.8, 350.0], [3.9, 351.0], [4.0, 351.0], [4.1, 351.0], [4.2, 351.0], [4.3, 352.0], [4.4, 352.0], [4.5, 353.0], [4.6, 353.0], [4.7, 354.0], [4.8, 355.0], [4.9, 355.0], [5.0, 355.0], [5.1, 355.0], [5.2, 355.0], [5.3, 356.0], [5.4, 356.0], [5.5, 357.0], [5.6, 358.0], [5.7, 358.0], [5.8, 359.0], [5.9, 359.0], [6.0, 359.0], [6.1, 360.0], [6.2, 362.0], [6.3, 362.0], [6.4, 362.0], [6.5, 362.0], [6.6, 363.0], [6.7, 364.0], [6.8, 366.0], [6.9, 366.0], [7.0, 367.0], [7.1, 367.0], [7.2, 367.0], [7.3, 368.0], [7.4, 372.0], [7.5, 372.0], [7.6, 372.0], [7.7, 373.0], [7.8, 375.0], [7.9, 376.0], [8.0, 377.0], [8.1, 378.0], [8.2, 378.0], [8.3, 379.0], [8.4, 382.0], [8.5, 384.0], [8.6, 385.0], [8.7, 387.0], [8.8, 389.0], [8.9, 389.0], [9.0, 390.0], [9.1, 392.0], [9.2, 397.0], [9.3, 400.0], [9.4, 400.0], [9.5, 400.0], [9.6, 401.0], [9.7, 401.0], [9.8, 401.0], [9.9, 402.0], [10.0, 402.0], [10.1, 402.0], [10.2, 403.0], [10.3, 403.0], [10.4, 403.0], [10.5, 403.0], [10.6, 403.0], [10.7, 403.0], [10.8, 403.0], [10.9, 404.0], [11.0, 404.0], [11.1, 404.0], [11.2, 404.0], [11.3, 404.0], [11.4, 404.0], [11.5, 404.0], [11.6, 404.0], [11.7, 404.0], [11.8, 404.0], [11.9, 404.0], [12.0, 404.0], [12.1, 404.0], [12.2, 404.0], [12.3, 404.0], [12.4, 405.0], [12.5, 405.0], [12.6, 405.0], [12.7, 405.0], [12.8, 405.0], [12.9, 405.0], [13.0, 405.0], [13.1, 405.0], [13.2, 405.0], [13.3, 405.0], [13.4, 405.0], [13.5, 405.0], [13.6, 405.0], [13.7, 405.0], [13.8, 406.0], [13.9, 406.0], [14.0, 406.0], [14.1, 406.0], [14.2, 406.0], [14.3, 406.0], [14.4, 406.0], [14.5, 406.0], [14.6, 406.0], [14.7, 406.0], [14.8, 407.0], [14.9, 407.0], [15.0, 407.0], [15.1, 407.0], [15.2, 407.0], [15.3, 407.0], [15.4, 407.0], [15.5, 407.0], [15.6, 407.0], [15.7, 407.0], [15.8, 407.0], [15.9, 407.0], [16.0, 407.0], [16.1, 407.0], [16.2, 407.0], [16.3, 407.0], [16.4, 407.0], [16.5, 407.0], [16.6, 408.0], [16.7, 408.0], [16.8, 408.0], [16.9, 408.0], [17.0, 408.0], [17.1, 408.0], [17.2, 408.0], [17.3, 408.0], [17.4, 408.0], [17.5, 408.0], [17.6, 408.0], [17.7, 408.0], [17.8, 408.0], [17.9, 408.0], [18.0, 408.0], [18.1, 408.0], [18.2, 408.0], [18.3, 408.0], [18.4, 408.0], [18.5, 408.0], [18.6, 408.0], [18.7, 408.0], [18.8, 408.0], [18.9, 408.0], [19.0, 408.0], [19.1, 408.0], [19.2, 408.0], [19.3, 408.0], [19.4, 408.0], [19.5, 408.0], [19.6, 408.0], [19.7, 408.0], [19.8, 408.0], [19.9, 409.0], [20.0, 409.0], [20.1, 409.0], [20.2, 409.0], [20.3, 409.0], [20.4, 409.0], [20.5, 409.0], [20.6, 409.0], [20.7, 409.0], [20.8, 409.0], [20.9, 409.0], [21.0, 409.0], [21.1, 409.0], [21.2, 409.0], [21.3, 409.0], [21.4, 409.0], [21.5, 409.0], [21.6, 409.0], [21.7, 409.0], [21.8, 409.0], [21.9, 409.0], [22.0, 409.0], [22.1, 409.0], [22.2, 409.0], [22.3, 409.0], [22.4, 409.0], [22.5, 409.0], [22.6, 409.0], [22.7, 410.0], [22.8, 410.0], [22.9, 410.0], [23.0, 410.0], [23.1, 410.0], [23.2, 410.0], [23.3, 410.0], [23.4, 410.0], [23.5, 410.0], [23.6, 410.0], [23.7, 410.0], [23.8, 410.0], [23.9, 410.0], [24.0, 410.0], [24.1, 410.0], [24.2, 410.0], [24.3, 410.0], [24.4, 410.0], [24.5, 410.0], [24.6, 410.0], [24.7, 410.0], [24.8, 410.0], [24.9, 410.0], [25.0, 410.0], [25.1, 410.0], [25.2, 410.0], [25.3, 410.0], [25.4, 410.0], [25.5, 410.0], [25.6, 410.0], [25.7, 411.0], [25.8, 411.0], [25.9, 411.0], [26.0, 411.0], [26.1, 411.0], [26.2, 411.0], [26.3, 411.0], [26.4, 411.0], [26.5, 411.0], [26.6, 411.0], [26.7, 411.0], [26.8, 411.0], [26.9, 411.0], [27.0, 411.0], [27.1, 411.0], [27.2, 411.0], [27.3, 411.0], [27.4, 411.0], [27.5, 411.0], [27.6, 411.0], [27.7, 411.0], [27.8, 411.0], [27.9, 411.0], [28.0, 411.0], [28.1, 411.0], [28.2, 411.0], [28.3, 411.0], [28.4, 411.0], [28.5, 411.0], [28.6, 411.0], [28.7, 411.0], [28.8, 411.0], [28.9, 412.0], [29.0, 412.0], [29.1, 412.0], [29.2, 412.0], [29.3, 412.0], [29.4, 412.0], [29.5, 412.0], [29.6, 412.0], [29.7, 412.0], [29.8, 412.0], [29.9, 412.0], [30.0, 412.0], [30.1, 412.0], [30.2, 412.0], [30.3, 412.0], [30.4, 412.0], [30.5, 412.0], [30.6, 412.0], [30.7, 412.0], [30.8, 412.0], [30.9, 412.0], [31.0, 412.0], [31.1, 412.0], [31.2, 412.0], [31.3, 412.0], [31.4, 412.0], [31.5, 412.0], [31.6, 412.0], [31.7, 412.0], [31.8, 412.0], [31.9, 412.0], [32.0, 412.0], [32.1, 412.0], [32.2, 412.0], [32.3, 412.0], [32.4, 412.0], [32.5, 412.0], [32.6, 412.0], [32.7, 412.0], [32.8, 412.0], [32.9, 412.0], [33.0, 412.0], [33.1, 412.0], [33.2, 412.0], [33.3, 412.0], [33.4, 412.0], [33.5, 412.0], [33.6, 412.0], [33.7, 412.0], [33.8, 412.0], [33.9, 412.0], [34.0, 412.0], [34.1, 412.0], [34.2, 413.0], [34.3, 413.0], [34.4, 413.0], [34.5, 413.0], [34.6, 413.0], [34.7, 413.0], [34.8, 413.0], [34.9, 413.0], [35.0, 413.0], [35.1, 413.0], [35.2, 413.0], [35.3, 413.0], [35.4, 413.0], [35.5, 413.0], [35.6, 413.0], [35.7, 413.0], [35.8, 413.0], [35.9, 413.0], [36.0, 413.0], [36.1, 413.0], [36.2, 413.0], [36.3, 413.0], [36.4, 413.0], [36.5, 413.0], [36.6, 413.0], [36.7, 413.0], [36.8, 413.0], [36.9, 413.0], [37.0, 413.0], [37.1, 413.0], [37.2, 413.0], [37.3, 413.0], [37.4, 413.0], [37.5, 413.0], [37.6, 413.0], [37.7, 413.0], [37.8, 413.0], [37.9, 413.0], [38.0, 413.0], [38.1, 413.0], [38.2, 413.0], [38.3, 413.0], [38.4, 413.0], [38.5, 413.0], [38.6, 413.0], [38.7, 414.0], [38.8, 414.0], [38.9, 414.0], [39.0, 414.0], [39.1, 414.0], [39.2, 414.0], [39.3, 414.0], [39.4, 414.0], [39.5, 414.0], [39.6, 414.0], [39.7, 414.0], [39.8, 414.0], [39.9, 414.0], [40.0, 414.0], [40.1, 414.0], [40.2, 414.0], [40.3, 414.0], [40.4, 414.0], [40.5, 414.0], [40.6, 414.0], [40.7, 414.0], [40.8, 414.0], [40.9, 414.0], [41.0, 414.0], [41.1, 414.0], [41.2, 414.0], [41.3, 414.0], [41.4, 414.0], [41.5, 414.0], [41.6, 414.0], [41.7, 414.0], [41.8, 414.0], [41.9, 414.0], [42.0, 414.0], [42.1, 414.0], [42.2, 414.0], [42.3, 414.0], [42.4, 414.0], [42.5, 414.0], [42.6, 414.0], [42.7, 414.0], [42.8, 414.0], [42.9, 414.0], [43.0, 414.0], [43.1, 415.0], [43.2, 415.0], [43.3, 415.0], [43.4, 415.0], [43.5, 415.0], [43.6, 415.0], [43.7, 415.0], [43.8, 415.0], [43.9, 415.0], [44.0, 415.0], [44.1, 415.0], [44.2, 415.0], [44.3, 415.0], [44.4, 415.0], [44.5, 415.0], [44.6, 415.0], [44.7, 415.0], [44.8, 415.0], [44.9, 415.0], [45.0, 415.0], [45.1, 415.0], [45.2, 415.0], [45.3, 415.0], [45.4, 415.0], [45.5, 415.0], [45.6, 415.0], [45.7, 415.0], [45.8, 415.0], [45.9, 415.0], [46.0, 415.0], [46.1, 415.0], [46.2, 415.0], [46.3, 415.0], [46.4, 415.0], [46.5, 415.0], [46.6, 415.0], [46.7, 415.0], [46.8, 415.0], [46.9, 415.0], [47.0, 415.0], [47.1, 415.0], [47.2, 415.0], [47.3, 415.0], [47.4, 415.0], [47.5, 415.0], [47.6, 415.0], [47.7, 415.0], [47.8, 415.0], [47.9, 415.0], [48.0, 415.0], [48.1, 415.0], [48.2, 415.0], [48.3, 415.0], [48.4, 415.0], [48.5, 415.0], [48.6, 415.0], [48.7, 415.0], [48.8, 415.0], [48.9, 415.0], [49.0, 415.0], [49.1, 415.0], [49.2, 415.0], [49.3, 415.0], [49.4, 416.0], [49.5, 416.0], [49.6, 416.0], [49.7, 416.0], [49.8, 416.0], [49.9, 416.0], [50.0, 416.0], [50.1, 416.0], [50.2, 416.0], [50.3, 416.0], [50.4, 416.0], [50.5, 416.0], [50.6, 416.0], [50.7, 416.0], [50.8, 416.0], [50.9, 416.0], [51.0, 416.0], [51.1, 416.0], [51.2, 416.0], [51.3, 416.0], [51.4, 416.0], [51.5, 416.0], [51.6, 416.0], [51.7, 416.0], [51.8, 416.0], [51.9, 416.0], [52.0, 416.0], [52.1, 416.0], [52.2, 416.0], [52.3, 416.0], [52.4, 416.0], [52.5, 416.0], [52.6, 416.0], [52.7, 416.0], [52.8, 416.0], [52.9, 416.0], [53.0, 416.0], [53.1, 416.0], [53.2, 416.0], [53.3, 416.0], [53.4, 416.0], [53.5, 416.0], [53.6, 416.0], [53.7, 416.0], [53.8, 416.0], [53.9, 416.0], [54.0, 416.0], [54.1, 416.0], [54.2, 416.0], [54.3, 416.0], [54.4, 417.0], [54.5, 417.0], [54.6, 417.0], [54.7, 417.0], [54.8, 417.0], [54.9, 417.0], [55.0, 417.0], [55.1, 417.0], [55.2, 417.0], [55.3, 417.0], [55.4, 417.0], [55.5, 417.0], [55.6, 417.0], [55.7, 417.0], [55.8, 417.0], [55.9, 417.0], [56.0, 417.0], [56.1, 417.0], [56.2, 417.0], [56.3, 417.0], [56.4, 417.0], [56.5, 417.0], [56.6, 417.0], [56.7, 417.0], [56.8, 417.0], [56.9, 417.0], [57.0, 417.0], [57.1, 417.0], [57.2, 417.0], [57.3, 418.0], [57.4, 418.0], [57.5, 418.0], [57.6, 418.0], [57.7, 418.0], [57.8, 418.0], [57.9, 418.0], [58.0, 418.0], [58.1, 418.0], [58.2, 418.0], [58.3, 418.0], [58.4, 418.0], [58.5, 418.0], [58.6, 418.0], [58.7, 418.0], [58.8, 418.0], [58.9, 418.0], [59.0, 418.0], [59.1, 418.0], [59.2, 418.0], [59.3, 418.0], [59.4, 418.0], [59.5, 418.0], [59.6, 418.0], [59.7, 418.0], [59.8, 418.0], [59.9, 418.0], [60.0, 418.0], [60.1, 418.0], [60.2, 418.0], [60.3, 418.0], [60.4, 418.0], [60.5, 418.0], [60.6, 418.0], [60.7, 418.0], [60.8, 418.0], [60.9, 418.0], [61.0, 418.0], [61.1, 418.0], [61.2, 418.0], [61.3, 418.0], [61.4, 418.0], [61.5, 418.0], [61.6, 418.0], [61.7, 418.0], [61.8, 419.0], [61.9, 419.0], [62.0, 419.0], [62.1, 419.0], [62.2, 419.0], [62.3, 419.0], [62.4, 419.0], [62.5, 419.0], [62.6, 419.0], [62.7, 419.0], [62.8, 419.0], [62.9, 419.0], [63.0, 419.0], [63.1, 419.0], [63.2, 419.0], [63.3, 419.0], [63.4, 419.0], [63.5, 419.0], [63.6, 419.0], [63.7, 419.0], [63.8, 419.0], [63.9, 419.0], [64.0, 419.0], [64.1, 419.0], [64.2, 419.0], [64.3, 419.0], [64.4, 419.0], [64.5, 419.0], [64.6, 419.0], [64.7, 419.0], [64.8, 419.0], [64.9, 419.0], [65.0, 419.0], [65.1, 419.0], [65.2, 419.0], [65.3, 420.0], [65.4, 420.0], [65.5, 420.0], [65.6, 420.0], [65.7, 420.0], [65.8, 420.0], [65.9, 420.0], [66.0, 420.0], [66.1, 420.0], [66.2, 420.0], [66.3, 420.0], [66.4, 420.0], [66.5, 420.0], [66.6, 420.0], [66.7, 420.0], [66.8, 420.0], [66.9, 420.0], [67.0, 420.0], [67.1, 420.0], [67.2, 420.0], [67.3, 420.0], [67.4, 420.0], [67.5, 420.0], [67.6, 421.0], [67.7, 421.0], [67.8, 421.0], [67.9, 421.0], [68.0, 421.0], [68.1, 421.0], [68.2, 421.0], [68.3, 421.0], [68.4, 421.0], [68.5, 421.0], [68.6, 421.0], [68.7, 421.0], [68.8, 421.0], [68.9, 421.0], [69.0, 421.0], [69.1, 421.0], [69.2, 421.0], [69.3, 421.0], [69.4, 421.0], [69.5, 421.0], [69.6, 421.0], [69.7, 421.0], [69.8, 421.0], [69.9, 421.0], [70.0, 421.0], [70.1, 421.0], [70.2, 421.0], [70.3, 421.0], [70.4, 421.0], [70.5, 421.0], [70.6, 421.0], [70.7, 421.0], [70.8, 421.0], [70.9, 421.0], [71.0, 421.0], [71.1, 421.0], [71.2, 421.0], [71.3, 421.0], [71.4, 421.0], [71.5, 421.0], [71.6, 421.0], [71.7, 421.0], [71.8, 421.0], [71.9, 421.0], [72.0, 422.0], [72.1, 422.0], [72.2, 422.0], [72.3, 422.0], [72.4, 422.0], [72.5, 422.0], [72.6, 422.0], [72.7, 422.0], [72.8, 422.0], [72.9, 422.0], [73.0, 422.0], [73.1, 422.0], [73.2, 422.0], [73.3, 422.0], [73.4, 422.0], [73.5, 422.0], [73.6, 422.0], [73.7, 422.0], [73.8, 422.0], [73.9, 422.0], [74.0, 422.0], [74.1, 422.0], [74.2, 422.0], [74.3, 422.0], [74.4, 422.0], [74.5, 422.0], [74.6, 422.0], [74.7, 422.0], [74.8, 422.0], [74.9, 422.0], [75.0, 422.0], [75.1, 422.0], [75.2, 422.0], [75.3, 423.0], [75.4, 423.0], [75.5, 423.0], [75.6, 423.0], [75.7, 423.0], [75.8, 423.0], [75.9, 423.0], [76.0, 423.0], [76.1, 423.0], [76.2, 423.0], [76.3, 423.0], [76.4, 423.0], [76.5, 423.0], [76.6, 423.0], [76.7, 423.0], [76.8, 423.0], [76.9, 423.0], [77.0, 423.0], [77.1, 424.0], [77.2, 424.0], [77.3, 424.0], [77.4, 424.0], [77.5, 424.0], [77.6, 424.0], [77.7, 424.0], [77.8, 424.0], [77.9, 424.0], [78.0, 424.0], [78.1, 424.0], [78.2, 424.0], [78.3, 424.0], [78.4, 424.0], [78.5, 424.0], [78.6, 424.0], [78.7, 424.0], [78.8, 424.0], [78.9, 424.0], [79.0, 424.0], [79.1, 424.0], [79.2, 424.0], [79.3, 424.0], [79.4, 424.0], [79.5, 424.0], [79.6, 424.0], [79.7, 424.0], [79.8, 425.0], [79.9, 425.0], [80.0, 425.0], [80.1, 425.0], [80.2, 425.0], [80.3, 425.0], [80.4, 425.0], [80.5, 425.0], [80.6, 425.0], [80.7, 425.0], [80.8, 425.0], [80.9, 425.0], [81.0, 425.0], [81.1, 425.0], [81.2, 425.0], [81.3, 425.0], [81.4, 425.0], [81.5, 425.0], [81.6, 425.0], [81.7, 425.0], [81.8, 425.0], [81.9, 426.0], [82.0, 426.0], [82.1, 426.0], [82.2, 426.0], [82.3, 426.0], [82.4, 426.0], [82.5, 426.0], [82.6, 426.0], [82.7, 426.0], [82.8, 426.0], [82.9, 426.0], [83.0, 426.0], [83.1, 426.0], [83.2, 427.0], [83.3, 427.0], [83.4, 427.0], [83.5, 427.0], [83.6, 427.0], [83.7, 427.0], [83.8, 427.0], [83.9, 427.0], [84.0, 427.0], [84.1, 427.0], [84.2, 427.0], [84.3, 427.0], [84.4, 428.0], [84.5, 428.0], [84.6, 428.0], [84.7, 428.0], [84.8, 428.0], [84.9, 428.0], [85.0, 428.0], [85.1, 428.0], [85.2, 428.0], [85.3, 428.0], [85.4, 428.0], [85.5, 428.0], [85.6, 428.0], [85.7, 429.0], [85.8, 429.0], [85.9, 429.0], [86.0, 429.0], [86.1, 429.0], [86.2, 429.0], [86.3, 430.0], [86.4, 430.0], [86.5, 430.0], [86.6, 430.0], [86.7, 430.0], [86.8, 430.0], [86.9, 431.0], [87.0, 431.0], [87.1, 431.0], [87.2, 431.0], [87.3, 431.0], [87.4, 431.0], [87.5, 431.0], [87.6, 431.0], [87.7, 431.0], [87.8, 431.0], [87.9, 431.0], [88.0, 431.0], [88.1, 431.0], [88.2, 431.0], [88.3, 431.0], [88.4, 432.0], [88.5, 433.0], [88.6, 433.0], [88.7, 434.0], [88.8, 434.0], [88.9, 434.0], [89.0, 434.0], [89.1, 434.0], [89.2, 435.0], [89.3, 435.0], [89.4, 436.0], [89.5, 436.0], [89.6, 436.0], [89.7, 437.0], [89.8, 437.0], [89.9, 438.0], [90.0, 438.0], [90.1, 438.0], [90.2, 438.0], [90.3, 439.0], [90.4, 439.0], [90.5, 439.0], [90.6, 439.0], [90.7, 439.0], [90.8, 441.0], [90.9, 441.0], [91.0, 441.0], [91.1, 442.0], [91.2, 442.0], [91.3, 442.0], [91.4, 442.0], [91.5, 443.0], [91.6, 443.0], [91.7, 443.0], [91.8, 444.0], [91.9, 444.0], [92.0, 444.0], [92.1, 444.0], [92.2, 445.0], [92.3, 445.0], [92.4, 445.0], [92.5, 446.0], [92.6, 447.0], [92.7, 449.0], [92.8, 449.0], [92.9, 449.0], [93.0, 449.0], [93.1, 450.0], [93.2, 450.0], [93.3, 451.0], [93.4, 451.0], [93.5, 451.0], [93.6, 451.0], [93.7, 451.0], [93.8, 452.0], [93.9, 452.0], [94.0, 452.0], [94.1, 452.0], [94.2, 453.0], [94.3, 453.0], [94.4, 453.0], [94.5, 453.0], [94.6, 454.0], [94.7, 454.0], [94.8, 454.0], [94.9, 454.0], [95.0, 454.0], [95.1, 455.0], [95.2, 455.0], [95.3, 455.0], [95.4, 455.0], [95.5, 455.0], [95.6, 455.0], [95.7, 455.0], [95.8, 455.0], [95.9, 455.0], [96.0, 456.0], [96.1, 456.0], [96.2, 456.0], [96.3, 456.0], [96.4, 456.0], [96.5, 457.0], [96.6, 457.0], [96.7, 458.0], [96.8, 458.0], [96.9, 458.0], [97.0, 458.0], [97.1, 460.0], [97.2, 461.0], [97.3, 461.0], [97.4, 461.0], [97.5, 461.0], [97.6, 461.0], [97.7, 462.0], [97.8, 462.0], [97.9, 462.0], [98.0, 462.0], [98.1, 463.0], [98.2, 463.0], [98.3, 463.0], [98.4, 464.0], [98.5, 465.0], [98.6, 465.0], [98.7, 465.0], [98.8, 468.0], [98.9, 469.0], [99.0, 470.0], [99.1, 470.0], [99.2, 472.0], [99.3, 472.0], [99.4, 472.0], [99.5, 474.0], [99.6, 480.0], [99.7, 483.0], [99.8, 670.0], [99.9, 672.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 300.0, "maxY": 877.0, "series": [{"data": [[300.0, 90.0], [600.0, 2.0], [400.0, 877.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 967.0, "series": [{"data": [[0.0, 967.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.248756218905468, "minX": 1.78195002E12, "maxY": 30.76651305683566, "series": [{"data": [[1.78195008E12, 30.76651305683566], [1.78195002E12, 11.248756218905468], [1.78195014E12, 27.418803418803417]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 32 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195014E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 352.1666666666667, "minX": 1.0, "maxY": 436.1875, "series": [{"data": [[2.0, 358.33333333333337], [32.0, 419.77666666666687], [3.0, 353.1111111111111], [4.0, 354.2727272727273], [5.0, 352.1666666666667], [6.0, 356.53846153846155], [7.0, 359.99999999999994], [8.0, 363.8461538461538], [9.0, 378.0909090909091], [10.0, 388.6363636363636], [11.0, 406.08333333333337], [12.0, 414.0769230769231], [13.0, 416.1428571428572], [14.0, 419.07142857142856], [15.0, 417.8888888888889], [1.0, 388.6666666666667], [16.0, 427.0], [17.0, 421.1875], [18.0, 422.2], [19.0, 427.5], [20.0, 423.5625], [21.0, 426.8181818181818], [22.0, 429.20000000000005], [23.0, 425.0], [24.0, 436.1875], [25.0, 425.77777777777777], [26.0, 427.07142857142856], [27.0, 429.37500000000006], [28.0, 424.875], [29.0, 425.77777777777777], [30.0, 431.2], [31.0, 424.4]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[26.31372549019607, 415.1713106295151]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 308.1, "minX": 1.78195002E12, "maxY": 2506.35, "series": [{"data": [[1.78195008E12, 2506.35], [1.78195002E12, 773.85], [1.78195014E12, 450.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78195008E12, 1714.3], [1.78195002E12, 529.3], [1.78195014E12, 308.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195014E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 392.587064676617, "minX": 1.78195002E12, "maxY": 422.0337941628265, "series": [{"data": [[1.78195008E12, 422.0337941628265], [1.78195002E12, 392.587064676617], [1.78195014E12, 415.7863247863247]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195014E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 392.5422885572139, "minX": 1.78195002E12, "maxY": 422.00921658986204, "series": [{"data": [[1.78195008E12, 422.00921658986204], [1.78195002E12, 392.5422885572139], [1.78195014E12, 415.7863247863247]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195014E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016897081413210453, "minX": 1.78195002E12, "maxY": 0.15920398009950248, "series": [{"data": [[1.78195008E12, 0.016897081413210453], [1.78195002E12, 0.15920398009950248], [1.78195014E12, 0.03418803418803417]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195014E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 342.0, "minX": 1.78195002E12, "maxY": 483.0, "series": [{"data": [[1.78195008E12, 483.0], [1.78195002E12, 468.0], [1.78195014E12, 455.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78195008E12, 401.0], [1.78195002E12, 342.0], [1.78195014E12, 403.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78195008E12, 444.0], [1.78195002E12, 427.8], [1.78195014E12, 430.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78195008E12, 471.0], [1.78195002E12, 463.91999999999996], [1.78195014E12, 455.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78195008E12, 417.0], [1.78195002E12, 405.0], [1.78195014E12, 413.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78195008E12, 456.0], [1.78195002E12, 434.0], [1.78195014E12, 443.69999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195014E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 671.0, "series": [{"data": [[8.0, 416.0], [9.0, 420.0], [10.0, 416.0], [11.0, 368.0], [12.0, 412.0], [13.0, 425.0], [14.0, 420.0], [15.0, 422.0], [1.0, 404.0], [4.0, 351.0], [16.0, 423.0], [17.0, 416.0], [5.0, 408.0], [6.0, 421.0], [7.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 671.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 671.0, "series": [{"data": [[8.0, 416.0], [9.0, 420.0], [10.0, 416.0], [11.0, 368.0], [12.0, 412.0], [13.0, 425.0], [14.0, 420.0], [15.0, 421.0], [1.0, 401.0], [4.0, 351.0], [16.0, 423.0], [17.0, 416.0], [5.0, 408.0], [6.0, 421.0], [7.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 671.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.78195002E12, "maxY": 10.8, "series": [{"data": [[1.78195008E12, 10.8], [1.78195002E12, 3.466666666666667], [1.78195014E12, 1.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.95, "minX": 1.78195002E12, "maxY": 10.85, "series": [{"data": [[1.78195008E12, 10.85], [1.78195002E12, 3.35], [1.78195014E12, 1.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78195014E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78195002E12, "maxY": 10.816666666666666, "series": [{"data": [[1.78195008E12, 10.816666666666666], [1.78195002E12, 3.35], [1.78195014E12, 1.95]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78195008E12, 0.03333333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195014E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78195002E12, "maxY": 10.816666666666666, "series": [{"data": [[1.78195008E12, 10.816666666666666], [1.78195002E12, 3.35], [1.78195014E12, 1.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78195008E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78195014E12, "title": "Total Transactions Per Second"}},
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

