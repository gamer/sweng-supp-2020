

function barChart(contributors) {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
        function addRowsToDataTable() {
            let arr = [];
            for (const [i, contributor] of contributors.entries()) {
                if (contributor.addMonth != 0) 
                    arr[i] = [contributor.name, contributor.addMonth];
            }
            arr = arr.sort(function(a,b) {
                return b[1] - a[1];
            });
            console.log(arr);

            arr.forEach (function(value) {
                data.addRow([value[0], value[1]]);
            }); 
        }
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Contributor');
        data.addColumn('number', 'Additions');
        addRowsToDataTable(); 

        var options = {
        title: 'Contributor Additions (Past 28 Days)',
        //chartArea: {width: '50%'},
        hAxis: {
            title: 'Lines of Code',
            minValue: 0
        },
        vAxis: {
            title: 'Contributor'
        }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    }
}