const userStephan = {
  user: 'stephan',
  newProgram: [],
  programs: [
    {
      title: 'Legday',
      exercises: [
        {
          name: 'Squats',
          sets: 3,
          rest: 120
        },
        {
          name: 'Leg press',
          sets: 4,
          rest: 60
        },
        {
          name: 'Leg extensions',
          sets: 5,
        }
      ]
    },
    {
      title: 'Chest',
      exercises: [
        {
          name: 'Benchpress',
          sets: 2
        },
        {
          name: 'Dumbbell press',
          sets: 5
        },
        {
          name: 'Shoulder press',
          sets: 2
        },
      ]
    },
    {
      title: 'Back',
      exercises: [
        {
          name: 'Pullups',
          sets: 2
        },
        {
          name: 'Barbell row',
          sets: 3
        },
        {
          name: 'Dumbbell pullover',
          sets: 4
        },
      ]
    }, 
  ],


  // SESSIONS
  sessions: [
    { 
      totalTime: 3600,
      date: 12334557,
      program: 'Legday',
      exercises: {
        Squats: [
          {
            weight: 50,
            reps: 10
          },
          {
            weight: 50,
            reps: 10
          }
        ],
        legs: [
          {
            weight: 23,
            reps: 645
          }
        ]
      }
    },
    { 
      totalTime: 7200,
      date: 35151,
      program: 'Legday',
      exercises: {
        squats: [
          {
            weight: 50,
            reps: 10
          },
          {
            weight: 50,
            reps: 10
          }
        ],
        legs: [
          {
            weight: 23,
            reps: 645
          }
        ]
      }
    },
    { 
      date: 3953,
      program: 'Chest',
      exercises: {
        squats: [
          {
            weight: 50,
            reps: 10
          },
          {
            weight: 50,
            reps: 10
          }
        ],
        legs: [
          {
            weight: 23,
            reps: 645
          }
        ]
      }
    },
    { 
      date: 1638348644019,
      program: 'Back',
      exercises: {
        squats: [
          {
            weight: 50,
            reps: 10
          },
          {
            weight: 50,
            reps: 10
          }
        ],
        legs: [
          {
            weight: 23,
            reps: 645
          }
        ]
      }
    }
  ]
}



const userCarl = {
  user: 'Carl',
  programs: [
    {
      title: 'Monday easy workout',
      exercises: [
        {
          name: 'Squats',
          sets: 6,
        },
        {
          name: 'Leg press',
          sets: 4,
        },
        {
          name: 'Leg extensions',
          sets: 5,
        }
      ]
    },
    {
      title: 'Chest thursday afternoon',
      exercises: [
        {
          name: 'Benchpress',
          sets: 2
        },
        {
          name: 'Dumbbell press',
          sets: 5
        },
        {
          name: 'Shoulder press',
          sets: 2
        },
      ]
    },
    {
      title: 'Friday session',
      exercises: [
        {
          name: 'Leg',
          sets: 2
        },
        {
          name: 'Pushups',
          sets: 3
        },
        {
          name: 'Jumping jacks',
          sets: 4
        },
      ]
    }, 
  ],


  // SESSIONS
  sessions: [
    { 
      date: 12334557,
      program: 'Legday',
      exercises: {
        squats: [
          {
            weight: 50,
            reps: 10
          },
          {
            weight: 50,
            reps: 10
          }
        ],
        legs: [
          {
            weight: 23,
            reps: 645
          }
        ]
      }
    }
  ]
}

export const allUsers = {userCarl, userStephan}