// list of addresses for raw data.
// addressList <- list(pullup_address = "http://stats.nba.com/js/data/sportvu/pullUpShootData.js",
//     drives_address = "http://stats.nba.com/js/data/sportvu/drivesData.js", defense_address = "http://stats.nba.com/js/data/sportvu/defenseData.js",
//     passing_address = "http://stats.nba.com/js/data/sportvu/passingData.js",
//     touches_address = "http://stats.nba.com/js/data/sportvu/touchesData.js",
//     speed_address = "http://stats.nba.com/js/data/sportvu/speedData.js", rebounding_address = "http://stats.nba.com/js/data/sportvu/reboundingData.js",
//     catchshoot_address = "http://stats.nba.com/js/data/sportvu/catchShootData.js",
//     shooting_address = "http://stats.nba.com/js/data/sportvu/shootingData.js")

//DRIVES:
// what to get at : drivesData.resultSets[0].rowSet
// console log each player's drive stats: drivesData.resultSets[0].rowSet.forEach(function(entry) {console.log(entry)})
// headers: drivesData.resultSets[0].headers
//ATTRIBUTES:
// player id = 202391
// player = jeremy Lin
// first name = jeremy
// last name = lin
// team abbreviation = cha
// gp = games played = 70
// min = minutes per game = 26
// dvs = drives per game = 6.7
// dpp = drive points per game = 4
// dtp = % of team's personal fouls? = 7.4
// fg_pct = fg % on drives I assume =  .495
// pts_48 = drives from points per 48 minutes = 7.4
// dpp_tot = drive points total = 281
// dvs_tot = drives total = 472

var playerDrivesParser = function(players) {
  var players_drives = []
  for(var i = 0; i < players.length; i ++ ){
    players_drives.push(new drive_player(players[i]))
  }
  return players_drives
}

function drive_player(entry) {
  //this.player_id = entry[0]
  this.name = entry[1]
  this.first_name = entry[2]
  this.last_name = entry[3]
  this.team_abrv = entry[4]
  this.games_played = entry[5]
  this.mins_per_game = entry[6]
  this.drives_per_game = entry[7]
  this.points_from_drives_per_game = entry[8]
  this.dtp = entry[9]
  this.fg_pct_on_drives = entry[10]
  this.pts_48_on_drives = entry[11]
  this.points_from_drives_total = entry[12]
  this.total_drives = entry[13]
}

//var players = playerDrivesParser(drivesData.resultSets[0].rowSet)

//driver code to sort players by drives per game:
// var sorted_playas = playerz.sort(function(a,b){ return parseFloat(b.drives_per_game) - parseFloat(a.drives_per_game)})