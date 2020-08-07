

function barChart(contributors) {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
        function addRowsToDataTable(data,metric) {
            let arr = [];
            for (const [i, contributor] of contributors.entries()) {
                if (contributor[metric] != 0) 
                    arr[i] = [contributor.name, contributor[metric]];
            }
            arr = arr.sort(function(a,b) {
                return b[1] - a[1];
            });
            console.log(arr);

            for(var i = 0; arr[i] != undefined && i < 10; i++) {
                data.addRow(arr[i])
            }
        }
        var addData = new google.visualization.DataTable();
        var delData = new google.visualization.DataTable();
        var comData = new google.visualization.DataTable();
        addData.addColumn('string', 'Contributor');
        addData.addColumn('number', 'Additions');
        addRowsToDataTable(addData, "addMonth"); 
        delData.addColumn('string', 'Contributor');
        delData.addColumn('number', 'Deletions');
        addRowsToDataTable(delData, "delMonth");
        comData.addColumn('string', 'Contributor');
        comData.addColumn('number', 'Commits');
        addRowsToDataTable(comData, "comMonth"); 
        
        var addOptions = {
            title: 'Contributor Additions (Past 28 Days)',
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
            title: 'Contributor Deletions (Past 28 Days)',
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
            title: 'Contributor Commits (Past 28 Days)',
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
    }
}