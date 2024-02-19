// state numberOfTimesInTheJob = 3
// setNumberOfTimesInTheJob(numberOfTimesInTheJob)
import victoriaPark from '.\images\GlobalEnergyStadiumDingwall.jpg';
import tonyMacaroni from '.\images\Almondvale_Stadium.jpg';
import celticPark from '.\images\Celtic_park_2.jpg';
import tynecastle from '.\images\Tynecastle_Park.jpg';
import smisa from '.\images\SMISA.jpg';
import greetings from '.\images\greetings.jpg';
import gorgieCityFarm from '.\images\gorgie-farm.jpg';
import joyfulPeeps from '.\images\people_jumping_happiness_happy_fun_young_joy_jump-875444.jpg';
import oldTimeyJourno from '.\images\Journalist_With_Pipe.jpg';
import scotsport from '.\images\scotsport.jpg';
import sportscene from '.\images\sportscene.jpg';
import oofSizeLarge from '.\images\oof_size_large.jpg';
import wyvern from '.\images\F._21r._Wyvern.jpg';
import christmasPresents from '.\images\christmas_present.jpg';
import buckled from '.\images\buckled.jpg';
import helloDarkness from '.\images\hello_darkness.gif';
import happyNewYear from '.\images\happy_new_year.jpg';
import kingsley from '.\images\kingsley.jpg';
import hugeMistake from '.\images\huge_mistake.jpg';
import turkey from '.\images\turkey.jpg';
import ruPaul from '.\images\rupaul.jpg';
import meh from '.\images\meh.jpg';
import fisticuffs from '.\images\Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg';
import kneeInBalls from '.\images\Knee_Kick_to_Groin.jpg';
import hairPulling from '.\images\The_Laws_of_Hywel_Dda_(f.15.v)_hair_pulling_(cropped).png';
import wallPunch from '.\images\Walll_PANCH.jpg';
import jousting from '.\images\Paulus_Hector_Mair_Tjost_fig2.jpg';
import bestBoss from '.\images\best_boss.jpg';
import bellEnd from '.\images\bell_end.jpg';
import windowClosed from '.\images\window_closed.jpg';
import playerSigned from '.\images\signing1.jpg';
import scarfAloft from '.\images\scarf_aloft.jpg';
import scouting from '.\images\buy_a_player.jpg';
import buyHim from '.\images\buy_a_player2.jpg';
import redknapp from '.\images\redknapp.jpg';
import deek1 from '.\images\deek1.jpg';
import deek2 from '.\images\deek2.jpg';
import deek3 from '.\images\deek3.jpg';
import deek4 from '.\images\deek4.jpg';
import deek5 from '.\images\deek5.jpg';
import deek6 from '.\images\deek6.jpg';
import deek7 from '.\images\deek7.jpg';

const texts = [deek6
  {
    id: 1,

date: "19/11/23",
    text: 
`You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."
This will be your numberOfTimesInTheJobth time managing Ross County.`,
    image: greetings,
    alt: "Distorted image of Derek Adams holding a Ross County scarf above his head.",
    options: [
      {
        text: "Let's get cracking.",
        nextText: 2,
      },
      {
        text: "Bring it on.",
        nextText: 2,
      },
   ]
  },
  {
    id: 2,
date: "25/11/23",
    text: 
`You are about to play Kilmarnock. 

The game is at Victoria Park, Dingwall.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    options: [
      {
        text: "Muck about with the team, put your own stamp on it",
        nextText: 3,
      },
      {
        text: "Just do what Malky did.",
        nextText: 3,
      },
    ]
    },
  {
    id: 3,
date: "25/11/23",
    text: `You have drawn with Kilmarnock.`,
    image: deek1,
    alt: "Derek Adams biting his lip.",
    options: [
      {
        text: "Oh well.",
        nextText: 4,
      },
      {
        text: "Fucksake",
        nextText: 5,
      },
    ],
  },
 {
    id: 4,
date: "28/11/23",
    text: 
`You are about to play The Buddies.

The game will be played at Victoria Park, Dingwall.

You remain optimistic about your chances following the Kilmarnock match.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    options: [
      {
        text: "Same team as last time.",
        nextText: 6,
      },
      {
        text: "Make a few tweaks",
        nextText: 7,
      },
    ],
  },
 {
    id: 5,
date: "28/11/23",
    text: 
`You are about to play The Buddies.

The game will be played at Victoria Park, Dingwall.

You have bollocked the players for not winning the Kilmarnock match.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    options: [
      {
        text: "Wholesale changes to the line-up",
        nextText: 8,
      },
      {
        text: "Make a few tweaks",
        nextText: 7,
      },
    ],
  },
 {
    id: 6,
date: "28/11/23",
    text: 
"You beat The Buddies 1-0! Clever Derek, keeping the team the same!",

    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    options: [
      {
        text: "Yaaaaas",
        nextText: 9,
      },
      {
        text: "Could have been better though.",
        nextText: 10,
      },
    ],
  },
 {
    id: 7,
date: "28/11/23",
    text: 
"You beat The Buddies 2-0! Clever Derek!",

    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    options: [
      {
        text: "Yaaaaaaaaas",
        nextText: 9,
      },
      {
        text: "Could have been better though",
        nextText: 10,
      },
    ],
  },
 {
    id: 8,
date: "28/11/23",
    text: 
"You beat The Buddies 5-0! Clever Derek! Here's to the raw power of your bollocks.",

      image: deek2,
      alt: "Monochrome image of a relatively happy Derek Adams",
     options: [
      {
        text: "Yaaaaaaaaaaaaaaaaaaaaaaaaas SOON THEY WILL ALL SEE MY POWER",
        nextText: 9,
      },
      {
        text: "Hmmm. That's fine I guess.",
        nextText: 10,
      },
    ],
  },
 {
    id: 9,
date: "28/11/23",
    text: 
"Everyone loves you. You've brought the feelgood factor back to Dingwall.",

    image: deek3,
    alt: "A very cheerful Derek Adams.",
     options: [
      {
        text: "Wee Deek always brings the party!",
        nextText: 11,
      },
      {
        text: "Onwards to the next match lads!",
        nextText: 11,
      }
       ],
  },
 {
    id: 10,
date: "28/11/23",
    text: 
"Folk are pretty happy so aren't bothered by your lukewarm response.",

    image: joyfulPeeps,
    alt: "People jumping for joy against the backdrop of a colourful sunset",
     options: [
      {
        text: "Right, let's go again then.",
        nextText: 11,
      },
      {
        text: "Good because I'm no here to make friends.",
        nextText: 11,
      }
    ],
  },
 {
    id: 11,
date: "04/12/23",
    text: 
"A press guy with an old timey New York accent asks you how you're feeling about the Motherwell game tomorrow.",

    image: oldTimeyJourno,
    alt: "An Old Timey journalist, probably with a Brooklyn accent, relaying his notes down the phone.",
     options: [
      {
        text: "Bring it on, we're on a roll",
        nextText: 12,
      },
      {
        text: "Don't give a shit mate.",
        nextText: 13,
      },
    ],
  },
 {
    id: 12,
date: "04/12/23",
    text: 
"Everyone is very happy, the journos in the big city think you're just swell",

    image: scotsport,
    alt: "The Scotsport panel discuss the latest news in Scottish football.",
     options: [
      {
        text: "Let's crush those Steelmen like Thatcher did",
        nextText: 14,
      },
      {
        text: "I care not for the adulation of fancy central belt types. My heart is here in the high lands with the rural Scotch",
        nextText: 14,
      },
    ],
  },
 {
    id: 13,
date: "04/12/23",
    text: 
"The journalist finds your candour refreshing.",

    image: sportscene,
    alt: "Three vague shapes discuss the latest SPFL action.",
      options: [
      {
        text: "You do not care. If anything you find the praise of these formless blobs patronising.",
        nextText: 14,
      },
      {
        text: "That's nice but your focus is entirely on the next match.",
        nextText: 14,
      }
    ],
  },
 {
    id: 14,
date: "05/12/23",
    text: "Ross County beat Motherwell 3-0!",


    image: deek4,
    alt: "A very chipper Derek Adams.",
           options: [
      {
        text: "Yes lads, we thrashed them like an old fashioned school teacher with unprocessed trauma from one of the two major wars of the 20th century would thrash a mildly cheeky schoolboy.",
        nextText: 15,
      },
      {
        text: "Lovely stuff, don't get complacent though.",
        nextText: 16,
      },
    ],
  },
 {
    id: 15,
date: "09/12/23",
    text: 
`You are about to play The Buddies. 

The game will be played at The Buddies Park, Paisley.`,

    image: smisa,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
           options: [
      {
        text: "We beat these bigtown scum at our place and we can do it again here!",
        nextText: 17,
      },
      {
        text: "We're on a roll, let's show them what we do.",
        nextText: 19,
      },
    ],
  },
 {
    id: 16,
date: "09/12/23",
    text: 
`You are about to play The Buddies. 

The game is at The Buddies Park, Paisley.`,

    image: smisa,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
           options: [
      {
        text: "Treat this like a new game. A new game of football. Not like a brand new game, like you sometimes get on The Crystal Maze.",
        nextText: 18,
      },
      {
        text: "Let's keep it tight at the back, we know we can frustrate them.",
        nextText: 19,
      },
    ],
  },

{
    id: 17,
date: "09/12/23",
    text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

image: deek6,
alt: "Derek Adams giving an interview",
           options: [
      {
        text: "Nayhaps I was unwise to fire the lads up so much. It was like Pompeii out there, underwhelming and featuring Kit Harington.",
        nextText: 20,
      },
      {
        text: "well we're going to have to do a lot better against Dundee.",
        nextText: 21,
      },
    ],
  },

{
    id: 18,
date: "09/12/23",
    text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

    image: deek6,
    alt: "Derek Adams giving an interview",
           options: [
      {
        text: "Treat this like a new game. A new game of football. Not like a brand new game, like you sometimes get on The Crystal Maze.",
        nextText: 20,
      },
      {
       text: "well we're going to have to do a lot better against Dundee.",
        nextText: 21,
      },
    ],
  },
{
    id: 19,
date: "09/12/23",
text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

      image: deek6,
      alt: "Derek Adams giving an interview",
          options: [
      {
        text: "Treat this like a new game. A new game of football. Not like a brand new game, like you sometimes get on The Crystal Maze.",
        nextText: 20,
      },
      {
          text: "well we're going to have to do a lot better against Dundee.",
        nextText: 21,
      },
    ],
  },

{
    id: 20,
date: "15/12/23",
text: 
`You are about to play Dundee.

The game will be played at Victoria Park, Dingwall.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
           options: [
      {
        text: "Look you were unlucky in the last game. We just need to put the ball in the net.",
        nextText: 21,
      },
      {
          text: "home advantage should see us vanquish these jute-eating surrender monkeys.",
        nextText: 21.1,
      },
    ],
  },


{
    id: 21,
date: "16/12/23",
text: 
"You got beat by Dundee.",

    image: deek7,
    alt: "Derek Adams closes his eyes and makes a decision.",
           options: [
      {
        text: "Remind the players that you've been creating chances and if they keep playing like this they'll be okay, they were just unlucky tonight.",
        nextText: 22
      },
      {
          text: "announce that Scottish football is so bad you'd rather where a suit where a pipe connected your mouth and anus at all times. Sky would be better off buying the rights to an international de-gloving tournament. Watching Scottish football makes you feel like joining a death cult.  You'd rather watch reruns of 9/11. To cheer yourself up you're going home to sit in the dark and think about the last time you saw your dad.",
        nextText: 23
      },
    ],
  },


{
    id: 21.1,
date: "16/12/23",
text: 
"You got beat by Dundee.",

image: deek7,
alt: "Derek Adams closes his eyes and makes a decision.",
           options: [
            {
                text: "Remind the players that you've been creating chances and if they keep playing like this they'll be okay, they were just unlucky tonight.",
                nextText: 22
              },
              {
                text: "announce that Scottish football is so bad you'd rather where a suit where a pipe connected your mouth and anus at all times. Sky would be better off buying the rights to an international de-gloving tournament. Watching Scottish football makes you feel like joining a death cult.  You'd rather watch reruns of 9/11. To cheer yourself up you're going home to sit in the dark and think about the last time you saw your dad.",
              nextText: 23
            },
    ],
  },
{
    id: 22,
date: "16/12/23",
text: 
"On second thoughts…",

image: deek7,
alt: "Derek Adams closes his eyes and makes a decision.",
           options: [
            {
                text: "announce that Scottish football is so bad you'd rather where a suit where a pipe connected your mouth and anus at all times. Sky would be better off buying the rights to an international de-gloving tournament. Watching Scottish football makes you feel like joining a death cult.  You'd rather watch reruns of 9/11. To cheer yourself up you're going home to sit in the dark and think about the last time you saw your dad.",
              nextText: 23
            },
            {
              text: "Same but in a bad Spanish accent.",
            nextText: 23
          },
    ],
  },


{
    id: 23,
date: "16/12/23",
text: 
"You have upset your players, your fans, your chairman, all other players and fans, pundits and your mum.",

    image: deek5,
    alt: "Derek looks into the middle distance.",
           options: [
      {
        text: "oh fine, it'll all blow over",
        nextText: 24
      },
      {
        text: "don't back down, double down",
        nextText: 24
      }
    ],
  },

{
    id: 24,
date: "22/12/23",
text: 
"All week people have been talking about your comments about Scottish Football. You'll be glad just to get back to football after that, starting with tomorrow's game against Hibs.",

    image: oofSizeLarge,
    alt: "A dial marked 'OOF SIZE' set to 'Large'.",
           options: [
      {
        text: "Prepare a mid-block press with a quick release to your most creative player. Let's get them on the break. This is going to surprise people.",
        nextText: 25
      },
      {
        text: "Update your list of enemies.",
        nextText: 25
      }
    ],
  },

{
    id: 25,
date: "23/12/23",
text: 
"The game against Hibs has been postponed due to an escaped wyvern.",

    image: wyvern,
    alt: "A wyvern, as seen in a 14th century Welsh manuscript.",
           options: [
      {
        text: "Ah well, let's look forward to the next game.",
        nextText: 26
      }
    ],
  },

{
    id: 26,
date: "26/12/23",
text: 
"Your next game is against Rangers, a team Ross County have never beaten.",

    image: helloDarkness,
    alt: "Ben Affleck looking sad.",
           options: [
      {
        text: "right, well, we'll just call that a free hit I guess.",
        nextText: 27
      },
      {
        text: "nice, this gives me more time to play with my Christmas presents",
        nextText: 28
      },
    ]},
{
    id: 27,
date: "28/12/23",
text: 
`Your next game is against Hearts.

The game will be played at Tynecastle, Edinburgh.`,

    image: tynecastle,
    alt: "Tynecastle, Edinburgh.",
           options: [
      {
        text: "Oh nice, we can visit Gorgie City Farm.",
        nextText: 30
      },
      {
        text: "okay, let's focus our energies on this game.",
        nextText: 29
      },
    ]
},

{
    id: 28,
date: "27/12/23",
text: 
"Mmmrrrrrrrrow, ptchee ptchee, ratatatatatata",

    image: christmasPresents,
        alt: "Derek with his Christmas Presents.",
           options: [
      {
        text: "Continue rescuing the Princess from the evil .",
        nextText: 29
      },
      {
        text: "Continue eating turkey, your favourite meat.",
        nextText: 29
      }

    ],
  },

{
    id: 29,
date: "30/12/23",
text: 
"You are winning 2-0 at Hearts with twenty minutes to go!",

    image: turkey,
    alt: "Delicious turkey",
           options: [
      {
        text: "Continue eating turkey, your favourite meat.",
        nextText: 31
      },
{
        text: "Maybe chuck Eamonn Brophy on, you've basically won this.",
        nextText: 32
      }


    ],
  },

{
    id: 30,
date: "30/12/23",
text: 
"Gorgie City Farm has closed.",

    image: gorgieCityFarm,
    alt: "Gorgie City Farm with a 'Regrettably we are closed' sign on the gate.",
           options: [
      {
        text: "Tell yourself there will be another chance to feed a llama some pellets.",
        nextText: 29
      }
      {
        text: "Sit outside in a huff while your assistant does the first half.",
        nextText: 29
      }
    ],
  },
{
    id: 31,
date: "30/12/23",
text: 
"You have drawn 2-2 with Hearts!",

image: buckled,
alt: "Collapsing on the floor, as if giving up",
                  options: [
      {
        text: "Warn the players that you'll be seeking reinforcements in the transfer window.",
        nextText: 101
      },
{
        text: "Talk about how great that game was in an optimistic bid to walk back that whole “Scottish football is shite” thing.",
        nextText: 33
      }


    ],
  },
{
    id: 32,
date: "30/12/23",
text: 
"You have drawn 2-2 with Hearts.",

image: buckled,
alt: "Collapsing on the floor, as if giving up",
           options: [
      {
        text: "Warn the players that you'll be seeking reinforcements in the transfer window.",
        nextText: 101
      },
{
    text: "Talk about how great that game was in an optimistic bid to walk back that whole “Scottish football is shite” thing.",
    nextText: 33
      }


    ],
  },
{
    id: 33,
date: "02/01/24",
    text: 
`You are about to play Aberdeen.

The game will be played at Victoria Park, Dingwall.

You remain optimistic about your chances following the Hearts match.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
           options: [
      {
        text: "Tell the players that if they carry on their performance from the last match, you'll do well here.",
        nextText: 34
      },
{
        text: "Tell the players in no uncertain terms they must defend better in this match.",
        nextText: 35
      }


    ],
  },
{
    id: 33,
date: "02/01/24",
    text: 
"Aberdeen gub you 3-0.",

    image: happyNewYear,
    alt: "Happy New Year from everyone at Aberdeen Football Club",
           options: [
      {
text: "Right. We're going to have to get some new players.",
        nextText: 102
      },
{
        text: "Ah well, nevertheless.",
        nextText: 36
      }


    ],
  },
{
    id: 35,
date: "02/01/24",
    text: 
    "Aberdeen gub you 3-0.",

    image: happyNewYear,
    alt: "Happy New Year from everyone at Aberdeen Football Club",
           options: [
      {
        text: "Right. We're going to have to get some new players.",
        nextText: 102
      },
{
        text: "Ah well, nevertheless.",
        nextText: 36
      }


    ],
  },
{
    id: 36,
date: "05/01/24",
    text: 
"You are now on a mid-season break, returning to action against Partick Thistle in the Scottish Cup on the 20th.",

    image: kingsley,
    alt: "Kingsley, the Partick Thistle mascot.",
           options: [
      {
        text: "Right. We're going to have to get some new players.",
        nextText: 102
      },
{
    text: "Continue eating turkey, your favourite meat.",
        nextText: 37
      }
    ],
  },
{
    id: 37,
date: "20/01/24",
    text: 
`You are about to play Partick Thistle.

The game will take place at Victoria Park, Dingwall.

You are optimistic following last season"s play-off triumph.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
           options: [
      {
        text: "Come on lads, a cup run will give us a cause for optimism.",
        nextText: 38
      },
{
text: "Let's tear into this shite. They're not even from Partick, so their positioning is bound to be bad.",
        nextText: 39
      }
    ],
  },
{
    id: 38,
date: "20/01/24",
    text: 
"You have lost 3-0 at home to Partick Thistle.",

image: deek1,
alt: "Derek Adams biting his lip.",
           options: [
      {
        text: "Right. We're going to have to get some new players.",
        nextText: 103
      },
{
text: "For fucksake",
        nextText: 40
      }
    ],
  },
{
    id: 39,
date: "20/01/24",
    text: 
"You have lost 12-0 at home to Partick Thistle.",

image: deek7,
alt: "Derek Adams closes his eyes.",
           options: [
      {
        text: "Right. We're going to have to get some new players.",
        nextText: 103
      },
{
text: "For fucksake",
        nextText: 40
      }
    ],
  },

{
    id: 40,
date: "23/01/24",
    text: 
"After losing at home to Partick Thistle the media are asking you if you're happy at Ross County.",

    image: hugeMistake,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
           options: [
      {
        text: "I'm so happy. We're terribly in love.",
        nextText: 41
      },
{
text: "What is joy?",
        nextText: 41
      }
    ],
  },
{
    id: 41,
date: "23/01/24",
    text: 
"Derek, do you think you have what it takes to bounce back in the next game?",

image: deek2,
alt: "Monochrome image of a relatively happy Derek Adams",
           options: [
      {
        text: "Oh aye, no bother.",
        nextText: 43
      },
      {
        text: "Maybe, yeah. Who are we playing again?",
        nextText: 43
      }  
 ],
  },
{
    id: 43,
date: "26/01/24",
    text: 
`You are playing Celtic tomorrow.

The game will take place at Celtic Park, Glasgow.`,

    image: celticPark,
    alt: "Celtic Park, Glasgow",
           options: [
      {
        text: "Right. We're going to have to get some new players.",
        nextText: 103
      },
{
text: "For fucksake",
        nextText: 44
      }
    ],
  },
{
    id: 44,
date: "27/01/24",
    text: 
"You are about to play Celtic.",

    image: ruPaul,
    alt: "RuPaul saying 'And don't fuck it up'.",
           options: [
            {
text: "Let's just get this over with.",
        nextText: 45
      }
    ],
  },
{
    id: 45,
date: "27/01/24",
    text: 
"You have lost 1-0 to Celtic.",

    image: meh,
    alt: "RuPaul saying 'Meh'.",
           options: [
            {
text: "Could have been worse.",
        nextText: 46
      }
            {
text: "Ask Brendan Rodgers for management advice.",
        nextText: 46
      }
    ],
  },
{
    id: 46,
date: "29/01/24",
    text: 
`You are about to play Livingston tomorrow.

The game will take place at the Tony Macaroni Arena, Livingston.

Winning the game will pull you level on points with St Johnstone.

Livingstone have been dogshit all season.`,

    image: tonyMacaroni,
    alt: "The Tony Macaroni Arena (aka Almondvale Stadium), Livingston.",
           options: [
{
text: "Come on lads, if you put the same effort you put into the Celtic match you'll win here.",
        nextText: 47
      },
{
text: "Maybe I should just sign one more player, just in case.",
        nextText: 104
      },

    ],
  },
{
    id: 47,
date: "30/01/24",
    text: 
"You are 1-0 up against Livingston with a minute to go before half-time.",

image: ruPaul,
alt: "RuPaul saying 'And don't fuck it up'.",
           options: [
{
text: "I've got a good feeling about this.",
        nextText: 48
      },
{
text: "I've got a bad feeling about this.",
        nextText: 48
      },

    ],
  },
{
    id: 48,
date: "30/01/24",
    text: "Livingston equalise before half time.",

    image: hugeMistake,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
           options: [
{
text: "Go out and win the second half.",
        nextText: 49
      },
{
text: "I've brought in motivational speaker Gordon Ramsay.",
        nextText: 49
      },

    ],
  },
{
    id: 49,
date: "30/01/24",
    text: 
"You are 2-1 up against Livingston with five minutes to go.",

image: ruPaul,
alt: "RuPaul saying 'And don't fuck it up'.",
           options: [
{
text: "I've got a good feeling about this.",
        nextText: 50
      },
{
text: "I've got a bad feeling about this.",
        nextText: 50
      },
    ],
  },
{
    id: 50,
date: "30/01/24",
    text: 
"You have drawn 2-2 with Livingston.",

image: buckled,
alt: "Collapsing on the floor, as if giving up",
           options: [
{
text: "Okay, we have a problem seeing out games. Time to go into the transfer market.",
        nextText: 105
      },
{
text: "You're a useless prick Ramsay.",
        nextText: 51
      },

    ],
  },
{
    id: 51,
date: "30/01/24",
    text: 
"You are fighting Gordon Ramsay.",

    image: fisticuffs,
    alt: "Painting by Giulio del Torre: 'Zwei raufende Buben' (Two Scuffling Boys) 1927.",
           options: [
{
text: "Knee him in the bollocks",
        nextText: 52
      },
{
text: "Pull his hair.",
        nextText: 53
      },

    ],
  },
{
    id: 52,
date: "30/01/24",
    text: 
"You knee Gordon Ramsay in the bollocks. He goes down like Martin Boyle.",

    image: kneeInBalls,
    alt: "A knee to the balls.",
           options: [
{
text: "You roar 'That's what we're gonna do to St Johnstone.'",
        nextText: 54
      },
{
text: "The team look up at you. You think you detect a newfound respect in their eyes. You wordlessly rip Ramsay's throat out like Swayze in Road House, and march out of the room.",
        nextText: 55
      },

    ],
  },
{
    id: 53,
date: "30/01/24",
    text: 
"You pull Gordon Ramsay's hair and he screams a feral scream, digging his nails into your wrists. By the time the fight is done you're both in bloody rags, panting in the changing room. Everyone has gone home apart from you and Ramsay. You agree to call it a draw, but at the back of your mind your subconscious tells you 'Draws are no good at this time of the season'.",

    image: hairPulling,
    alt: "An illustration from a mid-13th century Welsh manuscript.",
           options: [
{
text: "Consider Heston Blumenthal for the next team talk.",
        nextText: 54
      },
{
text: "Give in to your urges.",
        nextText: 55
      },

    ],
  },
{
    id: 54,
date: "03/02/24",
    text: 
`You lose 1-0 to St Johnstone.

It is their first away win of the season.`,

image: helloDarkness,
alt: "Ben Affleck looking sad.",
           options: [
{
text: "Punch a wall",
        nextText: 56
      },
{
text: "Dip into the transfer market",
        nextText: 106
      },

    ],
  },
{
    id: 56,
date: "04/02/24",
    text: 
"The janny gives you a right nagging for damaging the plaster in the changing rooms.",

    image: wallPunch,
    alt: "A man punching a hole in a wall.",
           options: [
{
text: "Meekly apologise.",
        nextText: 57
      },
{
text: "Fight the janny",
        nextText: 58
      },

    ],
  },
{
    id: 57,
date: "04/02/2",
    text: 
"The janny tells you that you'd better not fuck it up against Motherwell.",

image: ruPaul,
alt: "RuPaul saying 'And don't fuck it up'.",
           options: [
{
text: "You confidently state that you absolutely will not fuck it up against Motherwell.",
        nextText: 59
      },
{
text: "You say you'll do your best.",
        nextText: 60
      },

    ],
  },
{
    id: 57.1,
date: "04/02/24",
    text: 
"The janny tells you that you'd better not fuck it up against Motherwell.",

image: ruPaul,
alt: "RuPaul saying 'And don't fuck it up'.",
           options: [
{
text: "You confidently state that you absolutely will not fuck it up against Motherwell.",
        nextText: 59
      },
{
text: "You say you'll 'fuck shit up against Motherwell, yeah? Yeah.'",
        nextText: 60
      },

    ],
  },

{
    id: 58,
date: "04/02/24",
    text: 
"The janny bests you in a medieval joust. You curse yourself for allowing him to pick the format of your battle.",

    image: jousting,
    alt: "16th Century German jousting",
           options: [
{
text: "Buy a 4-pack of Aldi-brand Deep Heat and suck it up.",
        nextText: 57
      },
{
text: "Apologise to the groundsperson for all the hoofprints on the pitch.",
        nextText: 57.1
      },

    ],
  },
{
    id: 59,
date: "06/02/24",
    text: 
"You have lost 5-0 against Motherwell.",

image: deek7,
alt: "Derek Adams closes his eyes and makes a decision.",
           options: [
{
text: "As each player enters the dressing room, you ring a bell at them and intone SHAME",
        nextText: 61
      },
{
text: "You decide to have a word with the Chairman",
        nextText: 63
      },

    ],
  },
{
    id: 60,
date: "06/02/24",
    text: 
"You have lost 15-0 to Motherwell.",
image: bestBoss,
    alt: "Blurred image of Steve Carrell in 'The Office' holding mug reading 'World's best boss'.",

           options: [
{
text: "You tell the team that you are going to find their mums and tell them what a disappointment they are.",
        nextText: 62
      },
{
text: "You decide to go to speak to the Chairman.",
        nextText: 63
      },

    ],
  },
{
    id: 61,
date: "06/02/24",
    text: 
"The players grab the bell off you and point to the end of it and say 'That's you that is'. The chairman comes in to see what all the noise is about. You are immediately fired.",

    image: bellEnd,
    alt: "Street sign in Rowley Regis: 'Bell End'.",
           options: [
{
text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile.",
        nextText: 1
      },
      {
        text: "Tell people you have been fired as manager of Ross County Football Club, and go update your LinkedIn profile.",
                nextText: 1
              }

    ],
  },
{
    id: 62,
date: "06/02/24",
    text: 
"The players' mums hear about your behaviour, and surround you in the car park. They take hold of your limbs and pull, like that bit with the horses in the film Black Death. You are saved at the last minute by the chairman riding in on a horse, fending them off with a sabre. As he grabs you from the melee and pulls you onto his horseback, he hands you your P45.",

image: kneeInBalls,
alt: "A knee to the balls.",
options: [
  {
  text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile.",
          nextText: 1
        },
        {
          text: "Tell people you have been fired as manager of Ross County Football Club, and go update your LinkedIn profile.",
                  nextText: 1
                }
  
      ],
  },
{
    id: 63,
date: "07/02/24",
    text: 
"Everyone hates you. You go to the Chairman and offer him your resignation.",

image: buckled,
alt: "Collapsing on the floor, as if giving up",
    options: [
      {
      text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile.",
              nextText: 1
            },
            {
              text: "Tell people you have been fired as manager of Ross County Football Club, and go update your LinkedIn profile.",
                      nextText: 1
                    }
      
          ],
  },

{
    id: 101,
date: "01/01/24",
    text: 
"Do you want to buy a player?",

    image: scouting,
    alt: "Coaches and scouts assessing a player.",
           options: [
{
text: "Yes",
        nextText: 101.1
      },
{
text: "Actually no.",
        nextText: 33
      },

    ],
  },

{
    id: 101.1,
date: "01/01/24",
    text: 
`You have loaned $firstname $surname, a $position. Do you want to buy another player?`,

image: playerSigned,
alt: "A player signing a contract",
           options: [
{
text: "Yes",
        nextText: 101.1
      },
{
text: "No.",
        nextText: 33
      },

    ],
  },


{
    id: 102,
date: "06/01/24",
    text: 
"Do you want to buy a player?",

image: buyHim,
alt: "Derek Adams pointing at the player he wants.",
           options: [
{
text: "Yes",
        nextText: 101.1
      },
{
text: "Actually no.",
        nextText: 37
      },

    ],
  },

{
    id: 102.2,
date: "06/01/24",
    text: 
`You have loaned $firstname $surname, a $position. Do you want to buy another player?`,

image: scarfAloft,
alt: "A blurred image of a new signing, Ross County scarf aloft",
           options: [
{
text: "Yes",
        nextText: 102.2
      },
{
text: "No.",
        nextText: 37
      },

    ],
  },

{
    id: 103,
date: "26/01/24",
    text: 
"Do you want to buy a player?",

image: scouting,
alt: "Coaches and scouts assessing a player.",
           options: [
{
text: "Yes",
        nextText: 101.1
      },
{
text: "Actually no.",
        nextText: 44
      },

    ],
  },

{
    id: 103.3,
date: "26/01/24",
    text: 
`You have loaned $firstname $surname, a $position. Do you want to buy another player?`,

image: playerSigned,
alt: "A player signing a contract",
           options: [
{
text: "Yes",
        nextText: 103.3
      },
{
text: "No.",
        nextText: 44
      },

    ],
  },

{
    id: 104,
date: "29/01/24",
    text: 
"Do you want to buy a player?",

    image: buyHim,
    alt: "Derek Adams pointing at the player he wants.",
           options: [
{
text: "Yes",
        nextText: 104.4
      },
{
text: "Actually no.",
        nextText: 47
      },

    ],
  },

{
    id: 104.4,
date: "29/01/24",
    text: 
`You have loaned $firstname $surname, a $position. Do you want to buy another player?`,

image: scarfAloft,
alt: "A blurred image of a new signing, Ross County scarf aloft",
           options: [
{
text: "Yes",
        nextText: 104.4
      },
{
text: "No.",
        nextText: 47
      },

    ],
  },

{
    id: 105,
date: "31/01/24",
    text: 
"Do you want to buy a player?",

    image: redknapp,
    alt: "Harry Redknapp in his car on transfer deadline day.",
           options: [
{
text: "Yes",
        nextText: 105.5
      },
{
text: "Actually no.",
        nextText: 54
      },

    ],
  },

{
    id: 105.5,
date: "29/01/24",
    text: 
`You have loaned $firstname $surname, a $position. Do you want to buy another player?`,

    image: playerSigned,
    alt: "A player signing a contract",
           options: [
{
text: "Yes",
        nextText: 105.5
      },
{
text: "No.",
        nextText: 54
      },

    ],
  },

{
    id: 106,
date: "03/02/24",
    text: 
"The transfer window is closed, you idiot.",

    image: windowClosed,
    alt: "The Transfer Window has closed.",
           options: [
{
text: "You kick the wall.",
        nextText: 56
      },
      {
        text: "You tell the wall you'll get it next time.",
                nextText: 56
              },
    ],
  },

]

export default texts;