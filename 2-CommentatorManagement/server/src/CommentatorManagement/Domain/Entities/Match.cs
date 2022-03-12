using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Match : BaseEntity
    {
        public int HomeId { get; set; }
        public int AwayId { get; set; }
        public string Season { get; set; }
        public string Status { get; set; }
        public int RoundId { get; set; }
        public int GameWeek { get; set; }
        public int RevisedGameWeek { get; set; }
        public string Homegoals { get; set; }
        public string Awaygoals { get; set; }
        public int Homegoalcount { get; set; }
        public int Awaygoalcount { get; set; }
        public int Totalgoalcount { get; set; }
        public int TeamACorners { get; set; }
        public int TeamBCorners { get; set; }
        public int Totalcornercount { get; set; }
        public int TeamAOffsides { get; set; }
        public int TeamBOffsides { get; set; }
        public int TeamAYellowCards { get; set; }
        public int TeamBYellowCards { get; set; }
        public int TeamARedCards { get; set; }
        public int TeamBRedCards { get; set; }
        public int TeamAShotsontarget { get; set; }
        public int TeamBShotsontarget { get; set; }
        public int TeamAShotsofftarget { get; set; }
        public int TeamBShotsofftarget { get; set; }
        public int TeamAShots { get; set; }
        public int TeamBShots { get; set; }
        public int TeamAFouls { get; set; }
        public int TeamBFouls { get; set; }
        public int TeamAPossession { get; set; }
        public int TeamBPossession { get; set; }
        public int RefereeId { get; set; }
        public int CoachAId { get; set; }
        public int CoachBId { get; set; }
        public string StadiumName { get; set; }
        public int TeamACardsNum { get; set; }
        public int TeamBCardsNum { get; set; }
        public int Overallgoalcount { get; set; }
        public int HtGoalsTeamA { get; set; }
        public int HtGoalsTeamB { get; set; }
        public int Goals2hgTeamA { get; set; }
        public int Goals2hgTeamB { get; set; }
        public int Goalcount2hg { get; set; }
        public int Htgoalcount { get; set; }
        public int DateUnix { get; set; }
        public int Winningteam { get; set; }
        public int NoHomeAway { get; set; }
        public int BttsPotential { get; set; }
        public int BttsFhgPotential { get; set; }
        public int Btts2hgPotential { get; set; }
        public int Goaltimingdisabled { get; set; }
        public int Attendance { get; set; }
        public int TeamAFhCorners { get; set; }
        public int TeamBFhCorners { get; set; }
        public int TeamA2hCorners { get; set; }
        public int TeamB2hCorners { get; set; }
        public int CornerFhCount { get; set; }
        public int Corner2hCount { get; set; }
        public int TeamAFhCards { get; set; }
        public int TeamBFhCards { get; set; }
        public int TeamA2hCards { get; set; }
        public int TeamB2hCards { get; set; }
        public int TotalFhCards { get; set; }
        public int Total2hCards { get; set; }
        public int TeamADangerousAttacks { get; set; }
        public int TeamBDangerousAttacks { get; set; }
        public int TeamAAttacks { get; set; }
        public int TeamBAttacks { get; set; }
        public int TeamAPenaltiesWon { get; set; }
        public int TeamBPenaltiesWon { get; set; }
        public int TeamAPenaltyGoals { get; set; }
        public int TeamBPenaltyGoals { get; set; }
        public int TeamAPenaltyMissed { get; set; }
        public int TeamBPenaltyMissed { get; set; }
        public int TeamAThrowins { get; set; }
        public int TeamBThrowins { get; set; }
        public int TeamAFreekicks { get; set; }
        public int TeamBFreekicks { get; set; }
        public int TeamAGoalkicks { get; set; }
        public int TeamBGoalkicks { get; set; }
        public string HomeUrl { get; set; }
        public string HomeImage { get; set; }
        public string HomeName { get; set; }
        public string AwayUrl { get; set; }
        public string AwayImage { get; set; }
        public string AwayName { get; set; }
        public string MatchUrl { get; set; }


    }
}
