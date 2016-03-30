$(document).ready(function() {
  var players = playerDrivesParser(drivesData.resultSets[0].rowSet)
  $(function () {
      $('#container').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Drives'
          },
          xAxis: {
              categories: ['Points from drives per game', 'Points from drives per 48 mins']
          },
          yAxis: {
              title: {
                  text: 'Points'
              }
          },
          series: [{
              name: players[0].name,
              data: [players[0].points_from_drives_per_game, players[0].pts_48_on_drives]
          }]
      });
  });
  for(var x=0; x < players.length; x++){
    $('#player_dropdown').append(" <option value='" + players[x].name + "'>" + players[x].name + "</option>")
  }

//   $("select").change(function(e){
//       var new_player = this.val
//         current_player = playerFinder(new_player)
//         $(function() {
//         $('#container').highcharts({
//             chart: {
//                 type: 'bar'
//             },
//             title: {
//                 text: 'Drives'
//             },
//             xAxis: {
//                 categories: ['Points from drives per game', 'Points from drives per 48 mins']
//             },
//             yAxis: {
//                 title: {
//                     text: 'Points'
//                 }
//             },
//             series: [{
//                 name: current_player.name,
//                 data: [current_player.points_from_drives_per_game, current_player.pts_48_on_drives]
//             }]
//         });
//     });
//   });
});
