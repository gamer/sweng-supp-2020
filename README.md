# sweng-supp-2020 D3 Contributor Rankings
> A web presentation ranking the contributors of the D3 organisation
## Usage
This repo is deployed at https://gamer.github.io/sweng-supp-2020/ it may take a few seconds to complete all the api requests. 
There are three graphs that rank the contributors based on their additions, deletions and commits. The time frame can be adjusted from the top left drop down menu.

![Image of Yaktocat](http://g.recordit.co/w1owTLwyWm.gif)

## Operation
This project queries the Github REST API v3 to collect every users activity from the d3 organisation and organises into useable metrics. Google Charts is used to display the user 
rankings with interactive charts and the repo uses github pages as its deployment. 

## Research and Development
Programming metrics in my research are highly controversial, theres a significant push to try and find ways to quantify the performance of developers and not necessarily for
capitalistic gains. 

For example F1 racing drivers are constantly fed metrics, their lap deltas, time to cars infront and behind, the temperature of their tyres, sector times etc etc 
the list goes on theres over 300 sensors in a f1 car with 1.5GB of live data sent from the car to the garage and fed back to driver over a grand prix and this 
leads to drivers improving quickly as mistakes that aren't usually spotted become ever so clear. So surely in 
software engineering a field around manipulating data we can find some useful metrics to improve ourselves. 

Lines of code is the most popular metric as its the easiest to calculate and has a reasonable correlation to how much effort has been put into the code however
as Dijkstra puts it "If we wish to count lines of code, we should not regard them as "lines produced" but as "lines spent" meaning just because theres a lot of code put in doesnt
mean the solution was engineered efficiently and perhaps the approach was a quick and dirty solution, with more lines of code you have more chances at letting in bugs or creating 
a larger and larger mess. Commits are equally flawed as some tasks simply require more numerous small commits than others.
So with no perfect metric in sight I decided its best to keep it simple and have 3 barcharts of additions deletions and commits which together give a good idea of how active
a developer is which when it comes to open source projects is probably the most useful as many people will only contribute one or more things while others have been around since
the beginning and are active regularly, also good old fashioned lines of code is still a fun high score like metric, you may not be creating perfect code, but atleast you are 
steadily chugging along and as long as there is nothing irregular about your contributions its safe to say that if you dominate in all metrics that at the very least suggests you are likely to be doing well. Perhaps we will figure out less threatening accurate metrics that are simply an active and regular aid to improving yourself in the future. If we can do it for chess and formula 1 we can do it for software, eventually. It's all logic.

With that goal in mind I developed a simple solution to get additions for a repo then built upon that, getting activity from all repositories and getting deletions and commits.
After I got all my data I went about simplfying and improving my solution before creating charts and lastly polishing.
