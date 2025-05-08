let choicesData = [
  // starting page
  {
    title: "How Safe Are You Really?",
    choices: [
      {
        id: "start_btn",
        url: "/2ndpage.html",
        title: "Ready to find out how safe (or hacked) you really are?",
        Chose: false,
      },
    ],
  },

  // Dilemma choice
  {
    title: "Choose Your Digital Dilemma",
    choices: [
      {
        id: "are_safe",
        url: "/bsa.html",
        title: "Tracked: Are You Safe?",
        Chose: false,
      },
    ],
  },

  // first act
  {
    title: "Are you being watched?",
    choices: [
      {
        id: "phone_first",
        url: "/sa.html",
        title: "Check Your Phone First",
        Chose: false,
      },
      {
        id: "laptop",
        url: "/sb.html",
        title: "Check Your Laptop/Cam",
        Chose: false,
      },
      {
        id: "chill",
        url: "/sc.html",
        title: "Ignore & Chill",
        Chose: false,
      },
    ],
  },

  // choice sa: Phone Hacked: Crypto Theft
  {
    title: "Phone Hacked: Crypto Theft",
    choices: [
      {
        id: "call-bank",
        url: "/sd.html",
        title: "Call The Bank. Report It",
        Chose: false,
      },
      {
        id: "dncpass",
        url: "/se.html",
        title: "Delete & Change The Password",
        Chose: false,
      },
    ],
  },
  // choice sd: Trust Your Gut: Banking Scam"
  {
    title: "Trust Your Gut: Banking Scam",
    choices: [
      {
        id: "act-fast",
        url: "/fc1.html",
        title: "Act fast. Escalate.",
        Chose: false,
      },
      {
        id: "do-nothing",
        url: "/fc3.html",
        title: "Act fast. Escalate.",
        Chose: false,
      },
    ],
  },
  // choice se: Full Control Taken"
  {
    title: "Full Control Taken",
    choices: [
      {
        id: "recovery-reset",
        url: "/fc2.html",
        title: "Recovery Reset",
        Chose: false,
      },
      {
        id: "cyber-help",
        url: "/fc1.html",
        title: "Get Cyber Help",
        Chose: false,
      },
    ],
  },
  // choice sb: Is Your Device Compromised?
  {
    title: "Is Your Device Compromised?",
    choices: [
      {
        id: "try_track",
        url: "/sf.html",
        title: "Try To track The Intruder",
        Chose: false,
      },
      {
        id: "offline_off",
        url: "/sg.html",
        title: "Go offline. Power off.",
        Chose: false,
      },
    ],
  },

  // choice sf: You Poked the Bear
  {
    title: "You Poked the Bear",
    choices: [
      {
        id: "pull-plug",
        url: "/fc2.html",
        title: "Pull The Plug Immediately",
        Chose: false,
      },
      {
        id: "fight-back",
        url: "/fc3.html",
        title: "Try To Fight Back",
        Chose: false,
      },
    ],
  },

  // choice sg: They Got Everything
  {
    title: "They Got Everything",
    choices: [
      {
        id: "help-now",
        url: "/fc1.html",
        title: "Cyber Help, Now",
        Chose: false,
      },
      {
        id: "reset-mode",
        url: "/fc2.html",
        title: "Go Full Reset Mode",
        Chose: false,
      },
    ],
  },

  // choice sc: is it too late?
  {
    title: "Is it too late?",
    choices: [
      {
        id: "freeze-all",
        url: "/sh.html",
        title: "Call Bank. Freeze All.",
        Chose: false,
      },
      {
        id: "secure-account",
        url: "/si.html",
        title: "Secure Your Accounts",
        Chose: false,
      },
    ],
  },

  // choice sh: Your Digital Life: Gone
  {
    title: "Your Digital Life: Gone",
    choices: [
      {
        id: "bring-in",
        url: "/fc1.html",
        title: "Bring in a Specialist",
        Chose: false,
      },
      {
        id: "fix-it",
        url: "/fc3.html",
        title: "Try To Fix It Yourself",
        Chose: false,
      },
    ],
  },

  // choice si: Too Late to Act
  {
    title: "Too Late to Act",
    choices: [
      {
        id: "expert-help",
        url: "/fc1.html",
        title: "Go To a Cybersecurity Expert",
        Chose: false,
      },
      {
        id: "secure-left",
        url: "/fc3.html",
        title: "Try To Secure What’s Left",
        Chose: false,
      },
    ],
  },

  // Finale choice 1,2,3
  {
    title: "Finale Choice 1 2 3",
    choices: [
      {
        id: "unlock-safety",
        url: "/safety101.html",
        title: "Unlock Safety 101",
        Chose: false,
      },
      {
        id: "try-again",
        url: "/2ndpage.html",
        title: "Try Again",
        Chose: false,
      },
    ],
  },

  // safety 101
  {
    title: "Safety 101",
    choices: [
      {
        id: "start-over",
        url: "/index.html",
        title: "Start Over",
        Chose: false,
      },
      {
        id: "try-again",
        url: "/2ndpage.html",
        title: "Try Again",
        Chose: false,
      },
    ],
  },
];
document.addEventListener("DOMContentLoaded", () => {
  // Loop through all choices and add event listeners
  choicesData.forEach((question) => {
    question.choices.forEach((choice) => {
      const btn = document.getElementById(choice.id);
      if (btn) {
        btn.addEventListener("click", () => {
          // Reset all 'Chose' flags to false
          choicesData.forEach((q) => {
            q.choices.forEach((c) => {
              c.Chose = false;
            });
          });
          // Set the chosen one to true
          choice.Chose = true;
          // Save to localStorage
          localStorage.setItem("form_result", JSON.stringify(choicesData));
          // Redirect to the associated URL
          window.location.href = choice.url;
        });
      }
    });
  });
});
