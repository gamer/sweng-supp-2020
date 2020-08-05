async function heyo(){ 
    var date = new Date();
    date.setDate(date.getDate()-3000)
    var unixtime = parseInt((date.getTime() / 1000).toFixed(0));

    var response = await fetch("http://api.github.com/repos/d3/d3/stats/contributors");
    var json = await response.json();

    let contributorsByAdditions = [];

    var i = 0;
    for (var activity of json) {
        var author = activity.author;
        var login = author.login;
        var weeks = activity.weeks;
        var additions = 0;
        for (var week of weeks) {
            if (week.w > unixtime) {
                additions += week.a;
            }
        }
        let addContrib = [login, additions];
        contributorsByAdditions[i]=addContrib;
        i++;
    }
    for (var item of contributorsByAdditions) {
        console.log("user:" + item[0] + ", additions:" + item[1]);
    }
}