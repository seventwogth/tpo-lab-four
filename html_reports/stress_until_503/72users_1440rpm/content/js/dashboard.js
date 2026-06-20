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

    var data = {"OkPercent": 10.302457466918714, "KoPercent": 89.69754253308129};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.08790170132325142, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.08790170132325142, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2116, 1898, 89.69754253308129, 707.2934782608694, 360, 1009, 733.0, 764.0, 774.0, 801.6599999999999, 23.343556251792688, 5.2659780216446395, 3.601837781038325], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 2116, 1898, 89.69754253308129, 707.2934782608694, 360, 1009, 733.0, 764.0, 774.0, 801.6599999999999, 23.343556251792688, 5.2659780216446395, 3.601837781038325], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,009 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 769 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 0.8956796628029505, 0.8034026465028355], "isController": false}, {"data": ["The operation lasted too long: It took 690 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 752 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.6322444678609063, 0.5671077504725898], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.684931506849315, 0.6143667296786389], "isController": false}, {"data": ["The operation lasted too long: It took 794 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 675 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 727 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 700 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 762 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.7903055848261328, 0.7088846880907372], "isController": false}, {"data": ["The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.5268703898840885, 0.4725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 809 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.5795574288724974, 0.5198487712665406], "isController": false}, {"data": ["The operation lasted too long: It took 628 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 747 milliseconds, but should not have lasted longer than 620 milliseconds.", 32, 1.6859852476290833, 1.5122873345935728], "isController": false}, {"data": ["The operation lasted too long: It took 742 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 697 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.7903055848261328, 0.7088846880907372], "isController": false}, {"data": ["The operation lasted too long: It took 779 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 737 milliseconds, but should not have lasted longer than 620 milliseconds.", 42, 2.212855637513172, 1.9848771266540643], "isController": false}, {"data": ["The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 764 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.7903055848261328, 0.7088846880907372], "isController": false}, {"data": ["The operation lasted too long: It took 757 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 754 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 1.4752370916754478, 1.3232514177693762], "isController": false}, {"data": ["The operation lasted too long: It took 712 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 1.1591148577449948, 1.0396975425330812], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 715 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 1.4752370916754478, 1.3232514177693762], "isController": false}, {"data": ["The operation lasted too long: It took 834 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 789 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 735 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.684931506849315, 0.6143667296786389], "isController": false}, {"data": ["The operation lasted too long: It took 786 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 732 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, 2.3182297154899896, 2.0793950850661624], "isController": false}, {"data": ["The operation lasted too long: It took 767 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.6322444678609063, 0.5671077504725898], "isController": false}, {"data": ["The operation lasted too long: It took 812 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 725 milliseconds, but should not have lasted longer than 620 milliseconds.", 43, 2.2655426765015805, 2.0321361058601135], "isController": false}, {"data": ["The operation lasted too long: It took 722 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, 2.3182297154899896, 2.0793950850661624], "isController": false}, {"data": ["The operation lasted too long: It took 960 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 677 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 796 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 770 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.5795574288724974, 0.5198487712665406], "isController": false}, {"data": ["The operation lasted too long: It took 766 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 0.9483667017913593, 0.8506616257088847], "isController": false}, {"data": ["The operation lasted too long: It took 745 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.106427818756586, 0.9924385633270322], "isController": false}, {"data": ["The operation lasted too long: It took 838 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 693 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 699 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.15806111696522657, 0.14177693761814744], "isController": false}, {"data": ["The operation lasted too long: It took 842 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 673 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.15806111696522657, 0.14177693761814744], "isController": false}, {"data": ["The operation lasted too long: It took 755 milliseconds, but should not have lasted longer than 620 milliseconds.", 32, 1.6859852476290833, 1.5122873345935728], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.684931506849315, 0.6143667296786389], "isController": false}, {"data": ["The operation lasted too long: It took 760 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.36880927291886195, 0.33081285444234404], "isController": false}, {"data": ["The operation lasted too long: It took 689 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 620 milliseconds.", 63, 3.3192834562697575, 2.977315689981096], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 0.4214963119072708, 0.3780718336483932], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 906 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 692 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 659 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 707 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.47418335089567965, 0.42533081285444235], "isController": false}, {"data": ["The operation lasted too long: It took 736 milliseconds, but should not have lasted longer than 620 milliseconds.", 46, 2.4236037934668073, 2.1739130434782608], "isController": false}, {"data": ["The operation lasted too long: It took 750 milliseconds, but should not have lasted longer than 620 milliseconds.", 45, 2.3709167544783982, 2.126654064272212], "isController": false}, {"data": ["The operation lasted too long: It took 765 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.6322444678609063, 0.5671077504725898], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.5268703898840885, 0.4725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 756 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.36986301369863, 1.2287334593572778], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 620 milliseconds.", 27, 1.422550052687039, 1.275992438563327], "isController": false}, {"data": ["The operation lasted too long: It took 730 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.106427818756586, 0.9924385633270322], "isController": false}, {"data": ["The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 775 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 746 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.6322444678609063, 0.5671077504725898], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 731 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.36880927291886195, 0.33081285444234404], "isController": false}, {"data": ["The operation lasted too long: It took 629 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 748 milliseconds, but should not have lasted longer than 620 milliseconds.", 38, 2.0021074815595363, 1.7958412098298677], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 773 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.47418335089567965, 0.42533081285444235], "isController": false}, {"data": ["The operation lasted too long: It took 716 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 835 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 721 milliseconds, but should not have lasted longer than 620 milliseconds.", 41, 2.1601685985247627, 1.9376181474480152], "isController": false}, {"data": ["The operation lasted too long: It took 706 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 825 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 741 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 1.4752370916754478, 1.3232514177693762], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 691 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.36880927291886195, 0.33081285444234404], "isController": false}, {"data": ["The operation lasted too long: It took 726 milliseconds, but should not have lasted longer than 620 milliseconds.", 45, 2.3709167544783982, 2.126654064272212], "isController": false}, {"data": ["The operation lasted too long: It took 795 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 763 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 0.9483667017913593, 0.8506616257088847], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 758 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.053740779768177, 0.945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 966 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 805 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 718 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 1.8440463645943097, 1.6540642722117203], "isController": false}, {"data": ["The operation lasted too long: It took 847 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 671 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 761 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 808 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 780 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 738 milliseconds, but should not have lasted longer than 620 milliseconds.", 38, 2.0021074815595363, 1.7958412098298677], "isController": false}, {"data": ["The operation lasted too long: It took 728 milliseconds, but should not have lasted longer than 620 milliseconds.", 41, 2.1601685985247627, 1.9376181474480152], "isController": false}, {"data": ["The operation lasted too long: It took 790 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 751 milliseconds, but should not have lasted longer than 620 milliseconds.", 34, 1.791359325605901, 1.606805293005671], "isController": false}, {"data": ["The operation lasted too long: It took 815 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.5795574288724974, 0.5198487712665406], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 811 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 620 milliseconds.", 48, 2.528977871443625, 2.268431001890359], "isController": false}, {"data": ["The operation lasted too long: It took 724 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 0.4214963119072708, 0.3780718336483932], "isController": false}, {"data": ["The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 791 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.15806111696522657, 0.14177693761814744], "isController": false}, {"data": ["The operation lasted too long: It took 777 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 744 milliseconds, but should not have lasted longer than 620 milliseconds.", 45, 2.3709167544783982, 2.126654064272212], "isController": false}, {"data": ["The operation lasted too long: It took 806 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 723 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.0010537407797682, 0.8979206049149339], "isController": false}, {"data": ["The operation lasted too long: It took 792 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 781 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 800 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, 2.6343519494204424, 2.3629489603024574], "isController": false}, {"data": ["The operation lasted too long: It took 734 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 0.9483667017913593, 0.8506616257088847], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 695 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.684931506849315, 0.6143667296786389], "isController": false}, {"data": ["The operation lasted too long: It took 778 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 782 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 909 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 704 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.26343519494204426, 0.23629489603024575], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 733 milliseconds, but should not have lasted longer than 620 milliseconds.", 53, 2.792413066385669, 2.504725897920605], "isController": false}, {"data": ["The operation lasted too long: It took 768 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.31612223393045313, 0.2835538752362949], "isController": false}, {"data": ["The operation lasted too long: It took 753 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.6322444678609063, 0.5671077504725898], "isController": false}, {"data": ["The operation lasted too long: It took 739 milliseconds, but should not have lasted longer than 620 milliseconds.", 37, 1.9494204425711275, 1.7485822306238186], "isController": false}, {"data": ["The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 2.0547945205479454, 1.8431001890359169], "isController": false}, {"data": ["The operation lasted too long: It took 685 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 759 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 1.1591148577449948, 1.0396975425330812], "isController": false}, {"data": ["The operation lasted too long: It took 666 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.1053740779768177, 0.0945179584120983], "isController": false}, {"data": ["The operation lasted too long: It took 772 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.36880927291886195, 0.33081285444234404], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.05268703898840885, 0.04725897920604915], "isController": false}, {"data": ["The operation lasted too long: It took 788 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.2107481559536354, 0.1890359168241966], "isController": false}, {"data": ["The operation lasted too long: It took 749 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 0.9483667017913593, 0.8506616257088847], "isController": false}, {"data": ["The operation lasted too long: It took 743 milliseconds, but should not have lasted longer than 620 milliseconds.", 38, 2.0021074815595363, 1.7958412098298677], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2116, 1898, "The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 620 milliseconds.", 63, "The operation lasted too long: It took 733 milliseconds, but should not have lasted longer than 620 milliseconds.", 53, "The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, "The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 620 milliseconds.", 48, "The operation lasted too long: It took 736 milliseconds, but should not have lasted longer than 620 milliseconds.", 46], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 2116, 1898, "The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 620 milliseconds.", 63, "The operation lasted too long: It took 733 milliseconds, but should not have lasted longer than 620 milliseconds.", 53, "The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, "The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 620 milliseconds.", 48, "The operation lasted too long: It took 736 milliseconds, but should not have lasted longer than 620 milliseconds.", 46], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
