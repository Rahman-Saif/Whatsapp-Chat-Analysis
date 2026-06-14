Chart.defaults.font.family = "Inter";

const teal = "#18c7c2";
const red = "#ff6b6b";
const yellow = "#f6c945";
const dark = "#263238";


// ---------------- PIE ----------------

// new Chart(document.getElementById("pieChart"),{
// type:"pie",
// data:{
// labels:["West","Central","East"],
// datasets:[{
// data:[35,40,25],
// backgroundColor:[teal,dark,red]
// }]
// }
// });

// new Chart(document.getElementById(""), {
//   type: "bar",
//   data: {
//     labels: ["Neutral", "Positive", "Negative"],
//     datasets: [{
//       label: "Number of Messages",
//       data: [37, 27, 5],
//       backgroundColor: [
//         "#9cb4f3", // Neutral (Light Blue-ish)
//         "#dddddd", // Positive (Light Grey)
//         "#e79e85"  // Negative (Soft Coral/Orange)
//       ]
//     }]
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Distribution of Sentiment in Chat Messages'
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Number of Messages'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Sentiment Category'
//         }
//       }
//     }
//   }
// });

new Chart(document.getElementById("pieChart"), {
  type: "bar",
  data: {
    labels: ["Neutral", "Positive", "Negative"],
    datasets: [{
      data: [37, 27, 5],
      backgroundColor: [
        "#4A72D4", // Deep Blue
        "#A8A8A8", // Deep Grey
        "#D37254"  // Deep Coral/Orange
      ]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribution of Sentiment in Chat Messages'
      },
      legend: {
        display: false // লেজেন্ড হাইড করা হয়েছে শুধু ইমেজ ও টাইটেল রাখার জন্য
      }
    },
    scales: {
      y: { display: true }, // অক্ষের লেখা ও গ্রিড বাদ দেওয়া হয়েছে
      x: { display: true }
    }
  }
});

// ---------------- SOURCE ----------------

new Chart(document.getElementById(""),{
type:"bar",
data:{
labels:["No","Yes"],
datasets:[
{
label:"Email",
data:[10,25],
backgroundColor:teal
},
{
label:"Web",
data:[6,14],
backgroundColor:dark
},
{
label:"Referral",
data:[4,20],
backgroundColor:red
}
]
}
});

new Chart(document.getElementById("sourceChart"), {
  type: "bar",
  data: {
    labels: ["Hindi Text", "English Text"], // ভাষার ধরণের ওপর ভিত্তি করে সেন্টিমেন্টের তুলনা
    datasets: [
      {
        label: "Positive",
        data: [10, 25],
        backgroundColor: "#006400" // Deep Dark Green
      },
      {
        label: "Neutral",
        data: [6, 14],
        backgroundColor: "#4A4A4A" // Deep Charcoal Grey
      },
      {
        label: "Negative",
        data: [4, 20],
        backgroundColor: "#8B0000" // Deep Dark Red
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Comparison of Sentiment Across Language Types' // ভিন্নধর্মী নতুন টাইটেল
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: true },
      x: { display: true }
    }
  }
});


// ---------------- STAGE ----------------

// new Chart(document.getElementById(""),{
// type:"bar",
// data:{
// labels:["Prospect","Lead","Proposal"],
// datasets:[
// {
// label:"Won",
// data:[20,50,35],
// backgroundColor:teal
// },
// {
// label:"Lost",
// data:[10,15,5],
// backgroundColor:red
// },
// {
// label:"Pending",
// data:[6,12,4],
// backgroundColor:yellow
// }
// ]
// }
// });

new Chart(document.getElementById("stageChart"), {
  type: "bar",
  data: {
    labels: ["Public Comments", "Private Chats"], // সোশ্যাল মিডিয়া কমেন্ট বনাম ব্যক্তিগত চ্যাটের তুলনা
    datasets: [
      {
        label: "Positive",
        data: [20, 50], // আপনার মূল ডাটাসেটের প্রথম ২টি ভ্যালু
        backgroundColor: "#114B3E" // Deep Forest Green
      },
      {
        label: "Neutral",
        data: [10, 15], // আপনার মূল ডাটাসেটের দ্বিতীয় ২টি ভ্যালু
        backgroundColor: "#2B3A42" // Deep Navy/Slate Grey
      },
      {
        label: "Negative",
        data: [6, 12],  // আপনার মূল ডাটাসেটের তৃতীয় ২টি ভ্যালু
        backgroundColor: "#7A1C1C" // Deep Burgundy Red
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Sentiment Variation by Communication Platform' // একদম নতুন ইউনিক টাইটেল
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: false },
      x: { display: false }
    }
  }
});

// ---------------- STACKED ----------------

// new Chart(document.getElementById(""),{
// type:"bar",
// data:{
// labels:[
// "Jan","Feb","Mar","Apr",
// "May","Jun","Jul","Aug",
// "Sep","Oct","Nov","Dec"
// ],

// datasets:[
// {
// label:"Won",
// data:[20,30,40,55,60,70,80,85,90,92,95,97],
// backgroundColor:teal
// },
// {
// label:"Lost",
// data:[35,30,25,20,15,12,10,8,7,5,4,2],
// backgroundColor:red
// },
// {
// label:"Pending",
// data:[45,40,35,25,20,18,10,7,3,3,1,1],
// backgroundColor:yellow
// }
// ]
// },
// options:{
// responsive:true,
// plugins:{
// legend:{
// position:"top"
// }
// },
// scales:{
// x:{
// stacked:true
// },
// y:{
// stacked:true
// }
// }
// }
// });

new Chart(document.getElementById("stackedChart"), {
  type: "bar",
  data: {
    labels: ["5", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [{
      data: [1, 2, 10, 9, 4, 5, 4, 4, 5, 1, 4, 4, 5, 6, 3, 2],
      backgroundColor: [
        "#3F51B5", // 5  (Deep Blue)
        "#4A72D4", // 7  (Medium Deep Blue)
        "#5C8AF0", // 8  (Vibrant Blue)
        "#7AA1F7", // 9  (Light Vibrant Blue)
        "#93B5F9", // 10 (Soft Vivid Blue)
        "#B4CCFA", // 11 (Very Light Blue)
        "#C9D9F8", // 12 (Soft Pastel Blue)
        "#A8A8A8", // 13 (Deep Grey)
        "#D7BCA3", // 14 (Deep Tan/Beige)
        "#EBBFA5", // 15 (Vivid Peach)
        "#E8A785", // 16 (Deep Salmon)
        "#E2926B", // 17 (Medium Deep Coral)
        "#D67853", // 18 (Deep Coral)
        "#C85A44", // 19 (Vibrant Rust/Red)
        "#B13D33", // 20 (Deep Brick Red)
        "#8E1B24"  // 21 (Dark Wine Red)
      ]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Total Messages per Hour of the Day'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: true },
      x: { display: true }
    }
  }
});


// ---------------- HORIZONTAL ----------------

// new Chart(document.getElementById(""),{
// type:"bar",
// data:{
// labels:["West","Central","East"],
// datasets:[
// {
// label:"Small",
// data:[25,40,60],
// backgroundColor:teal
// },
// {
// label:"Medium",
// data:[35,55,58],
// backgroundColor:dark
// },
// {
// label:"Large",
// data:[30,60,55],
// backgroundColor:red
// }
// ]
// },
// options:{
// indexAxis:'y'
// }
// });

new Chart(document.getElementById("horizontalChart"), {
  type: "bar",
  data: {
    labels: ["Sir", "everyone", "hai", "will", "yes", "raha", "shared", "Okay", "team", "check", "issue", "please"],
    datasets: [{
      data: [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 48, 45], // ওয়ার্ডক্লাউডের সাইজ অনুযায়ী আনুমানিক ফ্রিকোয়েন্সি
      backgroundColor: [
        "#118AB2", // Sir (Deep Teal/Turquoise)
        "#06D6A0", // everyone (Vivid Green)
        "#90BE6D", // hai (Deep Lime Green)
        "#277DA1", // will (Deep Ocean Blue)
        "#1F8A70", // yes (Vibrant Jade)
        "#4D1A7F", // raha (Deep Purple)
        "#3A0CA3", // shared (Dark Royal Purple)
        "#4361EE", // Okay (Vivid Blue)
        "#00F5D4", // team (Bright Mint)
        "#00BBF9", // check (Deep Sky Blue)
        "#7209B7", // issue (Vivid Violet)
        "#2B2D42"  // please (Deep Charcoal/Blue)
      ]
    }]
  },
  options: {
    indexAxis: 'y', // চার্টটি হরিজন্টাল করার জন্য
    plugins: {
      title: {
        display: true,
        text: 'Wordcloud of Most Frequent Words'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: true },
      x: { display: true }
    }
  }
});


// ---------------- FUNNEL ----------------

new Chart(document.getElementById("funnelChart"),{
type:"bar",
data:{
labels:[
"Lead",
"Qualify",
"Solution",
"Proposal",
"Finalize"
],
datasets:[
{
data:[100,72,50,25,10],
backgroundColor:teal
}
]
},
options:{
indexAxis:'y',
plugins:{
legend:{
display:false
}
}
}
});


// ---------------- REVENUE ----------------

// new Chart(document.getElementById(""),{
// type:"bar",
// data:{
// labels:[
// "Lead",
// "Qualify",
// "Solution",
// "Proposal",
// "Finalize"
// ],
// datasets:[
// {
// label:"New",
// data:[4,1,0.7,0.4,0.2],
// backgroundColor:teal
// },
// {
// label:"Renewal",
// data:[9,2,1.3,0.8,0.4],
// backgroundColor:dark
// }
// ]
// }
// });

new Chart(document.getElementById("revenueChart"), {
  type: "bar",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [{
      data: [9, 9, 13, 9, 10, 8, 11],
      backgroundColor: [
        "#3B296A", // Monday (Deep Purple)
        "#3B4B75", // Tuesday (Deep Slate Blue)
        "#2E6178", // Wednesday (Deep Muted Teal)
        "#247A7B", // Thursday (Deep Teal)
        "#289475", // Friday (Deep Emerald Green)
        "#59B36E", // Saturday (Vibrant Sage Green)
        "#99C23C"  // Sunday (Deep Lime/Olive Green)
      ]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Total Messages per Day of the Week'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: true },
      x: { display: true }
    }
  }
});


// ---------------- AVG REVENUE ----------------

// new Chart(document.getElementById(""),{
// type:"bar",
// data:{
// labels:["Yes","No"],
// datasets:[
// {
// label:"Small",
// data:[1,1.2],
// backgroundColor:teal
// },
// {
// label:"Medium",
// data:[4,4],
// backgroundColor:dark
// },
// {
// label:"Large",
// data:[8,6],
// backgroundColor:red
// }
// ]
// },
// options:{
// indexAxis:"y"
// }
// });

new Chart(document.getElementById("avgRevenueChart"), {
  type: "bar",
  data: {
    labels: [
      "raha hai", "okay sir", "hai yes", "sir issues", "issues shantanu", 
      "shantanu try", "try hangout", "hangout call", "call sounds", "sounds great", 
      "great sir", "sir messages", "messages request", "request queries", "queries lets", 
      "lets discuss", "discuss slack", "slack kal", "kal laptop", "laptop leke"
    ],
    datasets: [{
      data: [4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: [
        "#2E114D", // raha hai (Deep Dark Purple)
        "#3B1B6A", // okay sir (Deep Violet)
        "#462B7A", // hai yes (Deep Purple-Blue)
        "#3B427B", // sir issues (Deep Slate Blue)
        "#355283", // issues shantanu (Medium Deep Blue)
        "#32628B", // shantanu try (Vibrant Ocean Blue)
        "#2F7292", // try hangout (Deep Teal Blue)
        "#2C8196", // hangout call (Medium Muted Teal)
        "#279096", // call sounds (Deep Muted Green-Teal)
        "#259F94", // sounds great (Vibrant Teal)
        "#23AF8F", // great sir (Deep Jade Green)
        "#29BD7E", // sir messages (Vibrant Emerald Green)
        "#3FCA6D", // messages request (Vivid Grass Green)
        "#5AD45D", // request queries (Vivid Light Green)
        "#76DC54", // queries lets (Deep Lime Green)
        "#93E24E", // lets discuss (Bright Lime)
        "#AEE647", // discuss slack (Vivid Yellow-Green)
        "#C5E941", // slack kal (Bright Chartreuse)
        "#DAEC3D", // kal laptop (Vibrant Light Yellow-Green)
        "#E8EB3B"  // laptop leke (Deep Vibrant Yellow)
      ]
    }]
  },
  options: {
    indexAxis: 'y', // চার্টটি হরিজন্টাল রাখার জন্য
    plugins: {
      title: {
        display: true,
        text: 'Top 20 Most Common Bigrams'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { display: true },
      x: { display: true }
    }
  }
});