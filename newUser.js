const newUser = (username, password) => {
  return { 
      "user": username,
      "programs":[
      {
         "title":"Legday",
         "programID": 1,
         "exercises": [
            {
               "name": "Squats",
               "sets": 3,
               "rest": 120
            },
            {
               "name": "Leg press",
               "sets": 3,
               "rest": 60
            },
            {
               "name": "Leg extensions",
               "sets": 3,
               "rest": 60
            }
         ]
      },
      {
         "title": "Chest",
         "programID": 2,
         "exercises": [
            {
               "name": "Bench press",
               "sets": 3,
               "rest": 120
            },
            {
               "name": "Incline dumbbell press",
               "sets": 3,
               "rest": 60
            },
            {
               "name": "Push ups",
               "sets": 3
            }
         ]
      },
      {
         "title": "Back",
         "programID": 3,
         "exercises": [
            {
               "name": "Pullups",
               "sets": 2
            },
            {
               "name": "Barbell row",
               "sets": 3
            },
            {
               "name": "Dumbbell pullover",
               "sets": 4
            }
         ]
      },
      {
         "title": "Shoulders",
         "programID": 4,
         "exercises": [
            {
               "name": "Military press",
               "sets": 4
            },
            {
               "name": "Dumbbell overhead press",
               "sets": 3
            },
            {
               "name": "Lateral raise",
               "sets": 3
            }
         ]
      }
      ],
      "sessions":[],
      "password": password,
      "exercises":[
         {
            "name":"Squats",
            "type":"reps"
         },
         {
            "name":"Leg press",
            "type":"reps"
         },
         {
            "name":"Leg extensions",
            "type":"reps"
         },
         {
            "name":"Bench press",
            "type":"reps"
         },
         {
            "name":"Incline dumbbell press",
            "type":"reps"
         },
         {
            "name":"Push ups",
            "type":"reps"
         },
         {
            "name":"Pullups",
            "type":"reps"
         },
         {
            "name":"Barbell row",
            "type":"reps"
         },
         {
            "name":"Dumbbell pullover",
            "type":"reps"
         },
         {
            "name":"Military press",
            "type":"reps"
         },
         {
            "name":"Dumbbell overhead press",
            "type":"reps"
         },
         {
            "name":"Lateral raise",
            "type":"reps"
         }
      ]
   }
}

module.exports.createNewUser = newUser;