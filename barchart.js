function barChart(contributors, range) {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawGraphs);

    
    function drawGraphs() {
        console.log("Drawing Graphs...")
        var addData = new google.visualization.DataTable();
        var delData = new google.visualization.DataTable();
        var comData = new google.visualization.DataTable();
        addData.addColumn('string', 'Contributor');
        addData.addColumn('number', 'Additions');
        addRowsToDataTable(addData, "add" + range); 
        delData.addColumn('string', 'Contributor');
        delData.addColumn('number', 'Deletions');
        addRowsToDataTable(delData, "del" + range);
        comData.addColumn('string', 'Contributor');
        comData.addColumn('number', 'Commits');
        addRowsToDataTable(comData, "com" + range); 
        
        var addOptions = {
            title: 'Contributor Additions',
            chartArea: {width: '50%'},
            fontSize:8,
            hAxis: {
                title: 'Lines of Code',
                minValue: 0
            },
            vAxis: {
                title: 'Contributor'
            }
        };
        var delOptions = {
            title: 'Contributor Deletions',
            chartArea: {width: '50%'},
            fontSize:8,
            hAxis: {
                title: 'Lines of Code',
                minValue: 0
            },
            vAxis: {
                title: 'Contributor'
            }
        };
        var comOptions = {
            title: 'Contributor Commits',
            chartArea: {width: '50%'},
            fontSize:8,
            hAxis: {
                title: 'Number of Commits',
                minValue: 0
            },
            vAxis: {
                title: 'Contributor'
            }
        };
        var addChart = new google.visualization.BarChart(document.getElementById('addchart_div'));
        addChart.draw(addData, addOptions);
        var delChart = new google.visualization.BarChart(document.getElementById('delchart_div'));
        delChart.draw(delData, delOptions);
        var comChart = new google.visualization.BarChart(document.getElementById('comchart_div'));
        comChart.draw(comData, comOptions);

        function addRowsToDataTable(data,metric) {
            let arr = [];
            for (const [i, contributor] of contributors.entries()) {
                if (contributor[metric] != 0) 
                    arr[i] = [contributor.name, contributor[metric]];
            }

            arr = arr.sort(function(a,b) {
                return b[1] - a[1];
            });

            for(var i = 0; arr[i] != undefined && i < 10; i++) {
                data.addRow(arr[i])
            }
        }
    }
}