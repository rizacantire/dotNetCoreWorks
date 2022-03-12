using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Commentators",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commentators", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Matchs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    HomeId = table.Column<int>(type: "INTEGER", nullable: false),
                    AwayId = table.Column<int>(type: "INTEGER", nullable: false),
                    Season = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true),
                    RoundId = table.Column<int>(type: "INTEGER", nullable: false),
                    GameWeek = table.Column<int>(type: "INTEGER", nullable: false),
                    RevisedGameWeek = table.Column<int>(type: "INTEGER", nullable: false),
                    Homegoals = table.Column<string>(type: "TEXT", nullable: true),
                    Awaygoals = table.Column<string>(type: "TEXT", nullable: true),
                    Homegoalcount = table.Column<int>(type: "INTEGER", nullable: false),
                    Awaygoalcount = table.Column<int>(type: "INTEGER", nullable: false),
                    Totalgoalcount = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamACorners = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBCorners = table.Column<int>(type: "INTEGER", nullable: false),
                    Totalcornercount = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAOffsides = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBOffsides = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAYellowCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBYellowCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamARedCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBRedCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAShotsontarget = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBShotsontarget = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAShotsofftarget = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBShotsofftarget = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAShots = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBShots = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAFouls = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBFouls = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAPossession = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBPossession = table.Column<int>(type: "INTEGER", nullable: false),
                    RefereeId = table.Column<int>(type: "INTEGER", nullable: false),
                    CoachAId = table.Column<int>(type: "INTEGER", nullable: false),
                    CoachBId = table.Column<int>(type: "INTEGER", nullable: false),
                    StadiumName = table.Column<string>(type: "TEXT", nullable: true),
                    TeamACardsNum = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBCardsNum = table.Column<int>(type: "INTEGER", nullable: false),
                    Overallgoalcount = table.Column<int>(type: "INTEGER", nullable: false),
                    HtGoalsTeamA = table.Column<int>(type: "INTEGER", nullable: false),
                    HtGoalsTeamB = table.Column<int>(type: "INTEGER", nullable: false),
                    Goals2hgTeamA = table.Column<int>(type: "INTEGER", nullable: false),
                    Goals2hgTeamB = table.Column<int>(type: "INTEGER", nullable: false),
                    Goalcount2hg = table.Column<int>(type: "INTEGER", nullable: false),
                    Htgoalcount = table.Column<int>(type: "INTEGER", nullable: false),
                    DateUnix = table.Column<int>(type: "INTEGER", nullable: false),
                    Winningteam = table.Column<int>(type: "INTEGER", nullable: false),
                    NoHomeAway = table.Column<int>(type: "INTEGER", nullable: false),
                    BttsPotential = table.Column<int>(type: "INTEGER", nullable: false),
                    BttsFhgPotential = table.Column<int>(type: "INTEGER", nullable: false),
                    Btts2hgPotential = table.Column<int>(type: "INTEGER", nullable: false),
                    Goaltimingdisabled = table.Column<int>(type: "INTEGER", nullable: false),
                    Attendance = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAFhCorners = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBFhCorners = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamA2hCorners = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamB2hCorners = table.Column<int>(type: "INTEGER", nullable: false),
                    CornerFhCount = table.Column<int>(type: "INTEGER", nullable: false),
                    Corner2hCount = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAFhCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBFhCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamA2hCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamB2hCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalFhCards = table.Column<int>(type: "INTEGER", nullable: false),
                    Total2hCards = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamADangerousAttacks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBDangerousAttacks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAAttacks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBAttacks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAPenaltiesWon = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBPenaltiesWon = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAPenaltyGoals = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBPenaltyGoals = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAPenaltyMissed = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBPenaltyMissed = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAThrowins = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBThrowins = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAFreekicks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBFreekicks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamAGoalkicks = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamBGoalkicks = table.Column<int>(type: "INTEGER", nullable: false),
                    HomeUrl = table.Column<string>(type: "TEXT", nullable: true),
                    HomeImage = table.Column<string>(type: "TEXT", nullable: true),
                    HomeName = table.Column<string>(type: "TEXT", nullable: true),
                    AwayUrl = table.Column<string>(type: "TEXT", nullable: true),
                    AwayImage = table.Column<string>(type: "TEXT", nullable: true),
                    AwayName = table.Column<string>(type: "TEXT", nullable: true),
                    MatchUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matchs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CommentatorMatchs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CommentatorId = table.Column<int>(type: "INTEGER", nullable: false),
                    MatchId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommentatorMatchs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CommentatorMatchs_Commentators_CommentatorId",
                        column: x => x.CommentatorId,
                        principalTable: "Commentators",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CommentatorMatchs_Matchs_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Matchs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Commentators",
                columns: new[] { "Id", "FirstName", "LastName" },
                values: new object[] { 1, "Erman", "Yaşar" });

            migrationBuilder.InsertData(
                table: "Commentators",
                columns: new[] { "Id", "FirstName", "LastName" },
                values: new object[] { 2, "Orkun", "Çolakoğlu" });

            migrationBuilder.InsertData(
                table: "Commentators",
                columns: new[] { "Id", "FirstName", "LastName" },
                values: new object[] { 3, "Gökhan", "Abdik" });

            migrationBuilder.CreateIndex(
                name: "IX_CommentatorMatchs_CommentatorId",
                table: "CommentatorMatchs",
                column: "CommentatorId");

            migrationBuilder.CreateIndex(
                name: "IX_CommentatorMatchs_MatchId",
                table: "CommentatorMatchs",
                column: "MatchId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CommentatorMatchs");

            migrationBuilder.DropTable(
                name: "Commentators");

            migrationBuilder.DropTable(
                name: "Matchs");
        }
    }
}
