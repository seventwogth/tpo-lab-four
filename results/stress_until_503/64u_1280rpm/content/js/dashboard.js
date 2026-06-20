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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 16.472457627118644, "KoPercent": 83.52754237288136};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.12367584745762712, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.12367584745762712, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1888, 1577, 83.52754237288136, 626.3977754237284, 358, 897, 646.0, 669.0, 682.0, 706.1099999999999, 20.854734842208746, 4.7045349106935745, 3.2178204151064276], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 1888, 1577, 83.52754237288136, 626.3977754237284, 358, 897, 646.0, 669.0, 682.0, 706.1099999999999, 20.854734842208746, 4.7045349106935745, 3.2178204151064276], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.014584654407102, 0.847457627118644], "isController": false}, {"data": ["The operation lasted too long: It took 690 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.3804692454026633, 0.3177966101694915], "isController": false}, {"data": ["The operation lasted too long: It took 680 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 846 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 675 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.31705770450221943, 0.2648305084745763], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 45, 2.853519340519975, 2.3834745762711864], "isController": false}, {"data": ["The operation lasted too long: It took 762 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 700 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19023462270133165, 0.15889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 670 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.7609384908053266, 0.635593220338983], "isController": false}, {"data": ["The operation lasted too long: It took 628 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.3316423589093216, 1.1122881355932204], "isController": false}, {"data": ["The operation lasted too long: It took 697 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 633 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19023462270133165, 0.15889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 38, 2.4096385542168677, 2.01271186440678], "isController": false}, {"data": ["The operation lasted too long: It took 638 milliseconds, but should not have lasted longer than 620 milliseconds.", 42, 2.663284717818643, 2.2245762711864407], "isController": false}, {"data": ["The operation lasted too long: It took 844 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 635 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, 2.9803424223208625, 2.489406779661017], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.648700063411541, 1.3771186440677967], "isController": false}, {"data": ["The operation lasted too long: It took 687 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 645 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.8243500317057705, 0.6885593220338984], "isController": false}, {"data": ["The operation lasted too long: It took 648 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.0779961953075459, 0.9004237288135594], "isController": false}, {"data": ["The operation lasted too long: It took 677 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.3804692454026633, 0.3177966101694915], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.9511731135066582, 0.7944915254237288], "isController": false}, {"data": ["The operation lasted too long: It took 683 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 679 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.31705770450221943, 0.2648305084745763], "isController": false}, {"data": ["The operation lasted too long: It took 822 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 672 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.4438807863031072, 0.3707627118644068], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 34, 2.1559923906150917, 1.8008474576271187], "isController": false}, {"data": ["The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 52, 3.297400126823082, 2.7542372881355934], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 23, 1.4584654407102093, 1.2182203389830508], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 673 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 662 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 2.2194039315155356, 1.853813559322034], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 689 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.31705770450221943, 0.2648305084745763], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19023462270133165, 0.15889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 692 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 0.507292327203551, 0.423728813559322], "isController": false}, {"data": ["The operation lasted too long: It took 897 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 659 milliseconds, but should not have lasted longer than 620 milliseconds.", 46, 2.9169308814204187, 2.4364406779661016], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 51, 3.233988585922638, 2.7012711864406778], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 707 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 663 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.014584654407102, 0.847457627118644], "isController": false}, {"data": ["The operation lasted too long: It took 643 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, 2.790107799619531, 2.330508474576271], "isController": false}, {"data": ["The operation lasted too long: It took 682 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.31705770450221943, 0.2648305084745763], "isController": false}, {"data": ["The operation lasted too long: It took 669 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.2682308180088777, 1.0593220338983051], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.014584654407102, 0.847457627118644], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, 2.790107799619531, 2.330508474576271], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 892 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 629 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 1.5218769816106532, 1.271186440677966], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 2.4730500951173116, 2.065677966101695], "isController": false}, {"data": ["The operation lasted too long: It took 654 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.0779961953075459, 0.9004237288135594], "isController": false}, {"data": ["The operation lasted too long: It took 706 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 620 milliseconds.", 29, 1.8389346861128726, 1.5360169491525424], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 691 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 622 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.570703868103995, 0.4766949152542373], "isController": false}, {"data": ["The operation lasted too long: It took 676 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.7609384908053266, 0.635593220338983], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.570703868103995, 0.4766949152542373], "isController": false}, {"data": ["The operation lasted too long: It took 671 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.0779961953075459, 0.9004237288135594], "isController": false}, {"data": ["The operation lasted too long: It took 642 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.2682308180088777, 1.0593220338983051], "isController": false}, {"data": ["The operation lasted too long: It took 681 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 0.8877615726062144, 0.7415254237288136], "isController": false}, {"data": ["The operation lasted too long: It took 684 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19023462270133165, 0.15889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 30, 1.9023462270133165, 1.5889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 664 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.6975269499048827, 0.5826271186440678], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 2.2194039315155356, 1.853813559322034], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, 3.868103994927077, 3.2309322033898304], "isController": false}, {"data": ["The operation lasted too long: It took 626 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 1.3950538998097655, 1.1652542372881356], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.12682308180088775, 0.1059322033898305], "isController": false}, {"data": ["The operation lasted too long: It took 630 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.2048192771084338, 1.00635593220339], "isController": false}, {"data": ["The operation lasted too long: It took 651 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.648700063411541, 1.3771186440677967], "isController": false}, {"data": ["The operation lasted too long: It took 631 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.2682308180088777, 1.0593220338983051], "isController": false}, {"data": ["The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 1.5218769816106532, 1.271186440677966], "isController": false}, {"data": ["The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.3804692454026633, 0.3177966101694915], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2536461636017755, 0.211864406779661], "isController": false}, {"data": ["The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, 4.121750158528852, 3.4427966101694913], "isController": false}, {"data": ["The operation lasted too long: It took 695 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 656 milliseconds, but should not have lasted longer than 620 milliseconds.", 38, 2.4096385542168677, 2.01271186440678], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 1.14140773620799, 0.9533898305084746], "isController": false}, {"data": ["The operation lasted too long: It took 704 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 646 milliseconds, but should not have lasted longer than 620 milliseconds.", 43, 2.726696258719087, 2.277542372881356], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 0.8877615726062144, 0.7415254237288136], "isController": false}, {"data": ["The operation lasted too long: It took 640 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 2.4730500951173116, 2.065677966101695], "isController": false}, {"data": ["The operation lasted too long: It took 836 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06341154090044387, 0.05296610169491525], "isController": false}, {"data": ["The operation lasted too long: It took 685 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.31705770450221943, 0.2648305084745763], "isController": false}, {"data": ["The operation lasted too long: It took 666 milliseconds, but should not have lasted longer than 620 milliseconds.", 30, 1.9023462270133165, 1.5889830508474576], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, 3.868103994927077, 3.2309322033898304], "isController": false}, {"data": ["The operation lasted too long: It took 627 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.8243500317057705, 0.6885593220338984], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1888, 1577, "The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, "The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, "The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, "The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 52, "The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 51], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 1888, 1577, "The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, "The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, "The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 61, "The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 52, "The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 51], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
