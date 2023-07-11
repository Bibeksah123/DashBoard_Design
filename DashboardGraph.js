var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "bar",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [
            // Data Set 1
            {
                //  Chart Label
                label: "Purchase",

                // Actual Data 1
                data: [32, 68, 81, 100, 110, 75, 60, 100, 77, 49, 32, 22],

                // Background Color
                backgroundColor: [
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",

                ],
                borderRadius: 6,

                // Border Color


                // Border Width
                borderWidth: 1,
            },

            {
                //  Chart Label
                label: "Sales",

                // Actual Data 2
                data: [28, 55, 75, 80, 85, 62, 48, 85, 68, 44, 29, 12],

                // Background Color
                backgroundColor: [
                    "#D2625B",
                    "#D2625B",
                    "#D2625B",
                    "#D2625B",
                    "#D2625B",
                    "#D2625B",

                ],
                borderRadius: 6,
                // Border Width
                borderWidth: 1,

            },


        ],
    },

    // Configuration options go here
    options: {
        // Set Responsiveness By Default Its True
        // When Its True Canvas Width Height won't work
        responsive: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },


        },

        plugins: {
            // Set Padding
            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },

            },


            // Configure ToolTips
            tooltips: {
                enabled: true, // Enable/Disable ToolTip By Default Its True
                backgroundColor: "red", // Set Tooltip Background Color
                titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
                titleFontSize: 30, // Set Tooltip Font Size
                titleFontStyle: "bold italic",
                titleFontColor: "yellow",
                titleAlign: "center",
                titleSpacing: 3,
                titleMarginBottom: 50,
                bodyFontFamily: "Comic Sans MS",
                bodyFontSize: 20,
                bodyFontStyle: "italic",
                bodyFontColor: "black",
                bodyAlign: "center",
                bodySpacing: 3,
            },

            // Custom Chart Title
            title: {
                display: true,
                position: "bottom",
                fontSize: 25,
                fontFamily: "Comic Sans MS",
                fontColor: "red",
                fontStyle: "bold italic",
                padding: 20,
                lineHeight: 5,
            },

            // Legends Configuration
            legend: {
                display: true,
                position: "bottom", // top left bottom right
                align: "center", // start end center
                labels: {
                    fontColor: "red",
                    boxWidth: 20,
                    usePointStyle: true,
                    font: {
                        size: 10
                    }


                },
            },


        }

    },
});

//********Another chart=================================================here----------------------------------------------


var ctx = document.getElementById("chartId2").getContext("2d");
// Creating Chart Class Object
var chartId2 = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "bar",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [
            // Data Set 1
            {
                //  Chart Label
                label: "Sales",

                // Actual Data 1
                data: [32, 68, 81, 100, 110, 75, 60, 100, 77, 49, 32, 22],

                // Background Color
                backgroundColor: [
                    "#8B347B",
                    "#8B347B",
                    "#8B347B",
                    "#8B347B",
                    "#8B347B",
                    "#8B347B",

                ],
                borderRadius: 6,

                // Border Color


                // Border Width
                borderWidth: 1,
            },

            {
                //  Chart Label
                label: "Receipt",

                // Actual Data 2
                data: [28, 55, 75, 80, 85, 62, 48, 85, 68, 44, 29, 12],

                // Background Color
                backgroundColor: [
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",
                    "#5BBED2",

                ],
                borderRadius: 6,

                // Border Width
                borderWidth: 1,

            },


        ],
    },

    // Configuration options go here
    options: {
        // Set Responsiveness By Default Its True
        // When Its True Canvas Width Height won't work
        responsive: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },


        },
        plugins: {
            // Set Padding
            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },

            // Configure ToolTips
            tooltips: {
                enabled: true, // Enable/Disable ToolTip By Default Its True
                backgroundColor: "red", // Set Tooltip Background Color
                titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
                titleFontSize: 30, // Set Tooltip Font Size
                titleFontStyle: "bold italic",
                titleFontColor: "yellow",
                titleAlign: "center",
                titleSpacing: 3,
                titleMarginBottom: 50,
                bodyFontFamily: "Comic Sans MS",
                bodyFontSize: 20,
                bodyFontStyle: "italic",
                bodyFontColor: "black",
                bodyAlign: "center",
                bodySpacing: 3,
            },

            // Custom Chart Title
            title: {
                display: true,
                position: "bottom",
                fontSize: 25,
                fontFamily: "Comic Sans MS",
                fontColor: "red",
                fontStyle: "bold italic",
                padding: 20,
                lineHeight: 5,
            },

            // Legends Configuration
            legend: {
                display: true,
                position: "bottom", // top left bottom right
                align: "center", // start end center
                labels: {
                    fontColor: "red",
                    fontSize: 16,
                    boxWidth: 20,
                    usePointStyle: true,
                    font: {
                        size: 10
                    }
                },
            },
        }


    },
});



//Stacked chart here..******************************


var ctx = document.getElementById("chartId3").getContext("2d");
// Creating Chart Class Object
var chartId3 = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "bar",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [
            // Data Set 1
            {
                //  Chart Label
                label: "Cash",

                // Actual Data 1
                data: [32, 68, 81, 100, 110, 75, 60, 100, 77, 49, 32, 52],

                // Background Color
                backgroundColor: [
                    "#1280C4",
                    "#1280C4",
                    "#1280C4",
                    "#1280C4",
                    "#1280C4",
                    "#1280C4",

                ],
                stack: 'stack1',
                // Set barPercentage to 1.0

                borderRadius: 17,

                ////radius


                // Border Width
                borderWidth: 1,
            },

            {
                //  Chart Label
                label: "Credit",

                // Actual Data 2
                data: [28, 55, 75, 80, 85, 62, 48, 85, 68, 44, 29, 32],

                // Background Color
                backgroundColor: [
                    "#7CC24B",
                    "#7CC24B",
                    "#7CC24B",
                    "#7CC24B",
                    "#7CC24B",
                    "#7CC24B",

                ],

                borderSkipped: 'start',
                base: 0,
                stack: 'stack1',

                borderRadius: 17,

                // Border Width
                borderWidth: 1,

            },
        ],
    },

    // Configuration options go here
    options: {
        // Set Responsiveness By Default Its True
        // When Its True Canvas Width Height won't work


        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },

        responsive: false,
        plugins: {

            // Set Padding
            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },

            // Configure ToolTips
            tooltips: {
                enabled: true, // Enable/Disable ToolTip By Default Its True
                backgroundColor: "red", // Set Tooltip Background Color
                titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
                titleFontSize: 30, // Set Tooltip Font Size
                titleFontStyle: "bold italic",
                titleFontColor: "yellow",
                titleAlign: "center",
                titleSpacing: 3,
                titleMarginBottom: 50,
                bodyFontFamily: "Comic Sans MS",
                bodyFontSize: 20,
                bodyFontStyle: "italic",
                bodyFontColor: "black",
                bodyAlign: "center",
                bodySpacing: 3,
            },

            // Custom Chart Title
            title: {
                display: true,
                position: "bottom",
                fontSize: 25,
                fontFamily: "Comic Sans MS",
                fontColor: "red",
                fontStyle: "bold italic",
                padding: 20,
                lineHeight: 5,
            },

            // Legends Configuration
            legend: {
                display: true,
                position: "bottom", // top left bottom right
                align: "center", // start end center
                labels: {
                    fontColor: "red",
                    fontSize: 16,
                    boxWidth: 20,
                    usePointStyle: true,
                    font: {
                        size: 10
                    }
                },
            },
        }


    },
});