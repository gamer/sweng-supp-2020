let contributors = [];
function getContributors() { return contributors;}
async function getData(){ 
    var date = new Date();
    date.setDate(date.getDate()-7)
    console.log(date);
    var last7DaysTime = parseInt((date.getTime() / 1000).toFixed(0));
    var last14DaysTime = last7DaysTime - (7*24*60*60)
    var last21DaysTime = last14DaysTime - (7*24*60*60)
    var last28DaysTime = last21DaysTime - (7*24*60*60)

    
    var response = await fetch("https://api.github.com/users/d3/repos");
    var repos = await response.json();
    var repoNameArr = [];
    
    
    for (const[i, repo] of repos.entries()) {
        repoNameArr[i] = repo.full_name
    }
    

    for (i = 0; i < repoNameArr.length;  i++) { 
        console.log("checking :https://api.github.com/repos/" + repoNameArr[i] + "/stats/contributors");

        response = await fetch("https://api.github.com/repos/" + repoNameArr[i] + "/stats/contributors");
        var json = await response.json();

        for (const userActivity of json) {
            var login = userActivity.author.login;
            var weeks = userActivity.weeks;
            var user;
            var index = contributors.findIndex(x => x.name === login);
            if (index === -1) {
                user = {
                    name:login,
                    addWeek1:0,
                    addWeek2:0,
                    addWeek3:0,
                    addWeek4:0,
                    addMonth:0,
                    addTotal:0,
                    
                    delWeek1:0,
                    delWeek2:0,
                    delWeek3:0,
                    delWeek4:0,
                    delMonth:0,
                    delTotal:0,
                    
                    comWeek1:0,
                    comWeek2:0,
                    comWeek3:0,
                    comWeek4:0,
                    comMonth:0,
                    comTotal:0
                }
                contributors.push(user);
            } else {
                user = contributors[index];
            }
            for (var week of weeks) {
                user.addTotal += week.a;
                user.delTotal += week.d;
                user.comTotal += week.c;
                if (week.w > last7DaysTime) {
                    user.addWeek1 += week.a;
                    user.delWeek1 += week.d;
                    user.comWeek1 += week.c;
                } else if (week.w > last14DaysTime && week.w < last7DaysTime) {
                    user.addWeek2 += week.a;
                    user.delWeek2 += week.d;
                    user.comWeek2 += week.c;
                } else if (week.w > last21DaysTime && week.w < last14DaysTime) {
                    user.addWeek3 += week.a;
                    user.delWeek3 += week.d;
                    user.comWeek3 += week.c;
                } else if (week.w > last28DaysTime && week.w < last21DaysTime) {
                    user.addWeek4 += week.a;
                    user.delWeek4 += week.d;
                    user.comWeek4 += week.c;
                }
                user.addMonth = user.addWeek1 + user.addWeek2 + user.addWeek3 + user.addWeek4;
                user.delMonth = user.delWeek1 + user.delWeek2 + user.delWeek3 + user.delWeek4;
                user.comMonth = user.comWeek1 + user.comWeek2 + user.comWeek3 + user.comWeek4;
            }
        }
    }
}