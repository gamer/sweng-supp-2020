async function heyo(){ 
    var date = new Date();
    date.setDate(date.getDate()-7)
    console.log(date);
    var last7DaysTime = parseInt((date.getTime() / 1000).toFixed(0));
    date.setDate(date.getDate()-7)
    console.log(date);
    var last14DaysTime = parseInt((date.getTime() / 1000).toFixed(0));
    date.setDate(date.getDate()-7)
    console.log(date);
    var last21DaysTime = parseInt((date.getTime() / 1000).toFixed(0));
    date.setDate(date.getDate()-7)
    console.log(date);
    var last28DaysTime = parseInt((date.getTime() / 1000).toFixed(0));

    // var response = await fetch("https://api.github.com/users/torvalds/repos");
    // var repos = await response.json();
    // var repoNameArr = [];
    
    
    // for (const[i, repo] of repos.entries()) {
    //     repoNameArr[i] = repo.full_name
    //     console.log(i, repo.full_name);
    // }
    
    // username, week0, week1, week2, week3, month, all time
    let contributorsAdditions = [];
    let contributorsDeletions = [];
    let contributorsCommits = [];
    //for (i = 0; i < repoNameArr.length;  i++) { 
        //console.log("current repo is:http://api.github.com/repos/" + repoNameArr[i] + "/stats/contributors");

        response = await fetch(1+".json");     //"http://api.github.com/repos/" + repoNameArr[i] + "/stats/contributors");
        var json = await response.json();
        
        var j=0;
        for (const userActivity of json) {
            var login = userActivity.author.login;
            console.log
            var weeks = userActivity.weeks;
            let contribAdd = [login,0,0,0,0,0,0];
            let contribDel = [login,0,0,0,0,0,0];
            let contribCom = [login,0,0,0,0,0,0];
            for (var week of weeks) {
                contribAdd[6] += week.a;
                contribDel[6] += week.d;
                contribCom[6] += week.c;
                if (week.w > last7DaysTime) {
                    contribAdd[1] += week.a;
                    contribDel[1] += week.d;
                    contribCom[1] += week.c;
                } else if (week.w > last14DaysTime && week.w < last7DaysTime) {
                    contribAdd[2] += week.a;
                    contribDel[2] += week.d;
                    contribCom[2] += week.c;
                } else if (week.w > last21DaysTime && week.w < last14DaysTime) {
                    contribAdd[3] += week.a;
                    contribDel[3] += week.d;
                    contribCom[3] += week.c;
                } else if (week.w > last28DaysTime && week.w < last21DaysTime) {
                    contribAdd[4] += week.a;
                    contribDel[4] += week.d;
                    contribCom[4] += week.c;
                }
                contribAdd[5] = contribAdd[1] + contribAdd[2] + contribAdd[3] + contribAdd[4]
                contribDel[5] = contribDel[1] + contribDel[2] + contribDel[3] + contribDel[4]
                contribCom[5] = contribCom[1] + contribCom[2] + contribCom[3] + contribCom[4]
            }
            
            contributorsAdditions[j] = contribAdd;
            contributorsDeletions[j] = contribDel;
            contributorsCommits[j] = contribCom;
            j++;
        }
    //}
}