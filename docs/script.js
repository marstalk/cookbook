//--------------------------
// Config
//--------------------------
const calendar_days = 125;


//--------------------------
// App begin
//--------------------------
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getMonthName(monthIndex) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[monthIndex];
}

function getPastDays(days) {
    const result = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        result.push(formatDate(pastDate));
    }

    return result;
}

function renderCalendarWithDefaultColor(days, calendar_name) {
    const monthLabels = document.querySelector(`.calendar[calendar_name="${calendar_name}"] .month-labels`);
    const calendar = document.querySelector(`.calendar[calendar_name="${calendar_name}"] .week-columns`);
    
    const dates = getPastDays(days);
    dates.reverse(); // Ensure the dates are in chronological order

    let currentMonth = '';
    let currentWeek;
    let currentWeekDay = 0; // Start with Sunday as the first day of the week

    // Create weeks and days
    for (let i = 0; i < dates.length; i++) {
        const date = new Date(dates[i]);
        const dayOfWeek = date.getDay(); // 0 (Sunday) - 6 (Saturday)

        // Detect new month
        const month = date.getMonth();
        if (month !== currentMonth) {
            currentMonth = month;

            // Add month label
            const monthLabel = document.createElement('div');
            monthLabel.className = 'month-label';
            monthLabel.textContent = getMonthName(month);
            monthLabels.appendChild(monthLabel);

            // Add a gap between months
            if (i !== 0) {
                const monthGap = document.createElement('div');
                monthGap.className = 'month-gap';
                calendar.appendChild(monthGap);
            }
        }

        // Create a new week column if it's a new week
        if (dayOfWeek === 0 || !currentWeek) {
            currentWeek = document.createElement('div');
            currentWeek.className = 'week';
            calendar.appendChild(currentWeek);
            currentWeekDay = 0;
        }

        // Create the day element
        const day = document.createElement('div');
        day.className = 'day';
        day.id = dates[i];

        // Randomly assign a level for demonstration (you can replace this with real data)
        // const level = Math.floor(Math.random() * 5);
        day.setAttribute('data-level', 0);

        // Ensure correct position in the week
        while (currentWeekDay < dayOfWeek) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day';
            emptyDay.style.visibility = 'hidden';
            currentWeek.appendChild(emptyDay);
            currentWeekDay++;
        }

        // Insert the day at the correct position in the week
        currentWeek.appendChild(day);
        currentWeekDay++;
    }
}

// 
function init_calendar(visible_items, calendar_days){
    calendars_div = document.getElementById('calendars');
    visible_items.forEach(calendar_name => {
        calendar_div = document.createElement("div");
        calendar_div.setAttribute("calendar_name", calendar_name);
        name_h2 = document.createElement("h2");
        name_h2.innerHTML = calendar_name;
        calendar_div.appendChild(name_h2);

        calendar = document.createElement("div");
        calendar.setAttribute("class", "calendar");
        calendar.setAttribute("calendar_name", calendar_name);    

        month = document.createElement("div")
        month.className = "month-labels";
        month.id = "month-labels";
        calendar.appendChild(month);

        week = document.createElement("div");
        week.className = "week-columns";
        week.id = "week-columns";
        calendar.appendChild(week);

        calendar_container = document.createElement("div")
        calendar_container.className = "calendar-container";
        calendar_container.appendChild(calendar);

        calendar_div.appendChild(calendar_container);
        calendars_div.appendChild(calendar_div);

        renderCalendarWithDefaultColor(calendar_days, calendar_name);
    });
}



//--------------------------
// meta Data
//--------------------------
const item_repeat_everyday = "repeat_everyday";
const item_name_jog = "jog";
const item_name_pushups = "pushups";
const item_name_english_words = "english_words";
const item_name_basketball = "basketball";
const item_name_self_project = "self_project";

const meta = {
    "jog": {
        item_id: 1,
        item_name: item_name_jog,
        unit: "steps",
        target: 15000,
        repeat: item_repeat_everyday,
        plan_time: "06:00"
    },
    "pushups": {
        item_id: 2,
        item_name: item_name_pushups,
        unit: "times",
        target: 90,
        repeat: item_repeat_everyday,
        plan_time: "09:00"
    },
    "english_words": {
        item_id: 3,
        item_name: item_name_english_words,
        unit: "words",
        target: 20,
        repeat: item_repeat_everyday,
        plan_time: "09:00"
    },
    "basketball": {
        item_id: 4,
        item_name: item_name_basketball,
        unit: "minute",
        target: 60,
        repeat: item_repeat_everyday,
        plan_time: "18:00"
    },
    "self_project": {
        item_id: 5,
        item_name: "self_project",
        unit: "do",
        target: 1,
        repeat: item_repeat_everyday,
        plan_time: "18:00"
    }
}
//const visible_items = [item_name_pushups, item_name_english_words, item_name_jog];
//const visible_items = [item_name_basketball];
const visible_items = [item_name_english_words, item_name_pushups, item_name_basketball, item_name_jog, item_name_self_project]

//--------------------------
// item data: daily log
//--------------------------
const item_detail= [
    {item_name: item_name_jog, date: "2024-07-13", work: 7925, time: "06:00"}, 
    {item_name: item_name_jog, date: "2024-07-14", work: 4182, time: "06:00"},
    {item_name: item_name_pushups, date: "2024-06-13",work: 60, time: "09:00"},
    {item_name: item_name_pushups, date: "2024-06-14", work: 60, time:  "09:00"},
    {item_name: item_name_english_words, date: "2024-07-15",work: 10, time: "09:00"},
    {item_name: item_name_basketball, date: "2024-07-15",work: 60, time: "18:00"},
    {item_name: item_name_english_words, date: "2024-07-16",work: 16, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-19", work: 19, time: "09:00"},
    {item_name: item_name_self_project, date: "2024-07-20", work: 1, time: "18:00"}, 
    {item_name: item_name_english_words, date: "2024-07-20", work: 10, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-21", work: 10, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-22", work: 10, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-23", work: 13, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-24", work: 11, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-25", work: 15, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-26", work: 29, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-27", work: 23, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-28", work: 25, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-29", work: 7, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-30", work: 39, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-07-31", work: 8, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-01", work: 17, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-02", work: 22, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-03", work: 15, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-04", work: 15, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-05", work: 11, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-06", work: 13, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-07", work: 5, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-12", work: 5, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-13", work: 6, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-14", work: 9, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-15", work: 18, time: "09:00"},
    {item_name: item_name_english_words, date: "2024-08-16", work: 13, time: "09:00"},
    {item_name: item_name_self_project, date: "2024-08-25", work: 1, time: "18:00"}, 
    {item_name: item_name_english_words, date: "2024-09-08", work: 9, time: "18:00"}, 
]





//--------------------------
//render idtem detail 
//--------------------------
function render_detail(item_detail, visible_items){
    function percent_to_level(percent){
        if (percent >= 0 && percent < 40) {
            return 1;
        } else if (percent >= 40 && percent < 60) {
            return 2;
        } else if (percent >= 60 && percent < 80) {
            return 3;
        } else if (percent >= 80) {
            return 4;
        }
        return 0;
    }

    item_detail.forEach(item => {
        if (!visible_items.includes(item.item_name)) {
            return;
        }


        const dateString = item.date;
        const dateParts = dateString.split('-');
        // Extract the month and day
        const year = dateParts[0]; // "2024"
        const month = dateParts[1]; // "07"
        const day = dateParts[2]; //25
    
        const item_meta = meta[item.item_name];
        const percent = item.work / item_meta.target * 100;
        const level = percent_to_level(percent);
        const id = year + "-" + month + "-" + day;
    
        var square = document.querySelector(`div[calendar_name="${item.item_name}"] .day[id="${id}"]`);
        //const square = document.getElementById(id);
        if (square) {
            square.setAttribute('data-level', level);
        }
    })
}

init_calendar(visible_items, calendar_days);
render_detail(item_detail, visible_items);

