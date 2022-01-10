import uuid from "react-native-uuid";

import {
  Categories,
  Exercise,
} from "../../screens/exercisesScreen/utils/exerciseTypes";

export const ExerciseConstants: Exercise[] = [
  {
    category: Categories.Chest,
    description:
      "Adjust the machine so you are sitting at chest heights with the pads. Sit on the machine with your back flat. Place your forearms on the pads, parallel to the floor, this is starting position. Using your forearms, push the pads together slowly as you squeeze your chest. Return your arms to the stretched out starting position in a controlled motion.",
    exerciseName: "Butterfly",
    id: uuid.v4().toString(),
    youtubeId: "Z57CtFmRMxA",
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Chest,
    description:
      "Sitting on a bench, with your abs drawn in grasp a dumbbell in each hand, with your palms facing forward. · Begin with your arms at the height of your shoulders. · Extend your arms and raise the dumbbells up above your head. · At the top of the movement, bring your arms closer together. · Pause for a moment and then in a controlled movement lower the dumbbells to the starting position.",
    exerciseName: "Dumbbell Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      "Lie on a flat bench with your feet flat on the floor, keep your back flat on the bench. Grasp the bar a little wider than shoulder width apart. Raise the barbell above your body and move it over the middle of your chest, this is your starting position. Lower the bar down so it just touches your chest. Raise the bar till your arms are fully extended and your elbows are locked. Return to starting position.",
    exerciseName: "Flat Bench Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Shoulders,
    description:
      "Sit on a flat bench, feet point forward with your abs drawn in. · Grasp a dumbbell in each hand with your palm facing towards your body · Bend your elbows to 90 degrees and raise both your arms to the starting point in line with your shoulders. · With a steady controlled motion raise your arms up while straightening your elbows while rotating your forearms so that your palms now face away from your body. · Bring the dumbbells closer together but do not fully extend your elbows. · With a controlled motion lower the dumbbells to the starting position at your shoulders.",
    exerciseName: "Arnold Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Shoulders,
    description:
      "This exercise can also be performed standing up (Sit down for more support) Sit on the bench with your toes pointing straight out, back straight and abs drawn in. Grip the bar with your palms facing outwards and your hands shoulder width apart With bar in front of your head, press upwards extending your arms but not locking them. Pause at the top and then in a controlled movement lower the bar to the starting position.",
    exerciseName: "Shoulder Press Barbel",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Shoulders,
    description:
      "Place the dumbbells at he head of the bench. · Lie facedown on a raised bench; raised enough for your arms to move freely beneath the bench. · Place your toes on the floor in order to stabilise yourself. · Grasp the dumbbells and with a 30 degree bend in your elbows, this is the starting position. · Raise your arms to shoulder height, maintaining a controlled motion. · Return to starting position and repeat.",
    exerciseName: "Lateral Raises Machine",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Back,
    description:
      "· Stand with your feet shoulder width apart so that your feet are under the bar. · Keeping your back straight bend at the waist, allow some bend in your knees. · Grasp the par with an overhand grip approximately 16 inches apart. · Straighten your back as you hold the bar at arm’s length. · Bend over again lowering the bar to just above the floor.",
    exerciseName: "Deadlifts",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Back,
    description:
      " Lie flat on your stomach with your arms stretched out in front of you. · Raise your arms and legs off the floor and hold this position fora minimum of 2 seconds. · Return to the starting position on the floor.",
    exerciseName: "Supermans",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },

  {
    category: Categories.Back,
    description:
      "· Adjust the hyperextension bench so that your ankles are tucked under the footpads and your thighs are flat across the top pad. · With your arms folded across your chest and your back straight, slowly bend at the waist towards the floor, keeping your back flat. · Slowly return to the starting position.",
    exerciseName: "Hyperextensions",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Back,
    description:
      "Sit at a cable pull down machine fitted with a wide bar. Grasp the bar with a wide overhand grip (palms facing forward) . With your abs drawn in and back straight pull the bar down to your upper chest. Pause for a moment and then return the bar to the starting position.",
    exerciseName: "Lat Pulldown",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      "· Place a bench behind you. · Place the barbell on your upper chest, resting it across your front deltoids and holding it with your arms crossed securely. · Keep your head and back straight, abs drawn in and your toes pointing slightly outward. · Slowly “squat” down so your upper thighs are parallel to the floor. · Slowly return to the starting position.",
    exerciseName: "Front Squats",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      "Lifting a barbell off of a weight rack, position it on your shoulders. Place your feet slightly wider than shoulder width apart with your knees and toes pointed slightly outward. Drawing your abs in descend slowly by bending at the knees and hips as if you are sitting down (squatting). Lower yourself as far as you can control without letting your body shift towards your toes (this will cause you to loose balance). Pause in the downward position and slowly return upright to the starting position.",
    exerciseName: "Barbell Squat",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      "· Stand with your toes on an exercise band and raise the handles up to your shoulders. · Raise up on your toes, keeping your hands up by your shoulders. · Pause for a moment and then lower your heel to the floor.",
    exerciseName: "Pistol Squats",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      " Using a post or tall weight bench for balance stand straight with your abs drawn in. · Raise one off the ground and behind you while standing on the other leg. · Slowly lower the leg and raise it again while flexing the gluts. · Repeat with your other leg.",
    exerciseName: "Leg Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      " Using a post or tall weight bench for balance stand straight with your abs drawn in. · Raise one off the ground and behind you while standing on the other leg. · Slowly lower the leg and raise it again while flexing the gluts. · Repeat with your other leg.",
    exerciseName: "Farmers",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    description:
      "Place a barbell on a rack at chest height. · Lift the barbell of of the rack and onto your shoulders, gripping the bar slightly wider than shoulder width apart. · Stand with your feet approximately 8 inches apart with your toes pointing forward. · Slowly take a step backward with your right leg. · Keeping your abs drawn in and your upper body straight, lower your body until your left knee is almost on the ground. You may choose to place a mat or towel under your knee. · Hold for a moment and then return to starting position.",
    exerciseName: "Lunges",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    description:
      "· Lie on your back and place your feet up on a stability ball. · Place your hands across your chest, or on either side of your head. · Keeping the small of your back on the floor, raise your head, shoulders and chest up and off the floor. · Pause for a moment contracting your abs and then return to the starting position.",
    exerciseName: "Crunches",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    description:
      "Lie on your back with your feet flat on the ground. If you have a bench you can also place your feet on it. Place your hands across your chest or on either side of your head (over your ears). Raise your shoulders and back off the floor towards your knees until you are sitting upright. Now return to the starting position. Exhale while you move up, inhale while you move back down.",
    exerciseName: "SitUps",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    description:
      "Lie on a flat bench with your hands under your hips supporting your back. Your legs should be unsupported by the bench from below your knees. With your feet together and your toes flexed upwards, raise your straight legs up a few cm off the bench; both of your legs should have no contact with the bench. This is your starting position. Keep your legs straight with a slight bend in the knees and raise your legs to just before 90 degrees with your hips. Pause at the top and lower your legs in slow controlled manner back to the starting position.",
    exerciseName: "LegRaises",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    description:
      "Lie on your back on a mat. Place your hands on either side of your head (over your ears). Raise your legs up, bending your knees and keeping your calves parallel to the floor. Bring your left arm elbow up to meet your right knee, as if riding a bike. Repeat with your right elbow and left knee. Continue alternating sides.",
    exerciseName: "Air Bike",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    description:
      "· Grasp a dumbbell in each hand with palms facing up. · Kneel on a Stability Ball, drawing your abs in and keeping your back straight. · Raise one arm up over your shoulder and keep your other arm curled. · Bend your raised arm back as if performing a triceps extension while lowering your other arm and curling it back. · Return to starting position and repeat arms.",
    exerciseName: "Overhead Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    description:
      "Lie face up on a barbell bench, then reach up and grip the bar with the hands directly in line with the shoulders and the elbows pointed towards the feet. Unrack the bar and bring it towards the chest by bending the elbows and keeping them close to the ribs. Push the feet into the floor, and press the hips into the bench as the bar is pushed away from the chest to return to the starting position.",
    exerciseName: "Close-Grip Benchpress",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    description:
      "Stand with your feet shoulder width apart, your back straight and your abs drawn in. · Hold a dumbbell in your right hand with your palms facing up. · Raise the dumbbell over your head and slowly lower the dumbbell in an arc behind your head, so that the dumbbell lines up with your spine. · Slowly raise the dumbbell back up to the starting position. · Switch arms and repeat.",
    exerciseName: "One-Arm Triceps Extension",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    description:
      "Stand in front of a cable machine and attach a rope to a high pulley. Grasp the rope with palms facing down. Draw your abs in and keep your back straight. Keeping your elbows at your side push the rope down towards your thighs, if possible “split” the rope apart at the bottom. Pause for a moment and then return to the starting position.",
    exerciseName: "Rope Pushdown ",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Biceps,
    description:
      "Stand with your feet shoulder width apart, your knees slightly bent and your abs drawn in. Grasp a barbell with palms facing up, approximately shoulder width apart. Lower your arms fully to above your thighs and bending only your elbows, raise the bar to your upper chest. Pause for a moment and then return to the starting position.",
    exerciseName: "Biceps Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Biceps,
    description:
      "Stand with your feet shoulder width apart, your knees slightly bent and your abs drawn in. · Grasp a dumbbell in each hand so your palms are facing each other. · Extend your arms so they are at the sides of your body. · Keeping your elbows locked lift your arms in an arc towards your shoulders. · Lower your arms in a steady controlled motion and repeat.",
    exerciseName: "Hammer Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Biceps,
    description:
      "Stand with your feet shoulder width apart, your knees slightly bent and your abs drawn in. Grasp a barbell with palms facing up, approximately shoulder width apart. Lower your arms fully to above your thighs and bending only your elbows, raise the bar to your upper chest. Pause for a moment and then return to the starting position.",
    exerciseName: "Barbel Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
];
