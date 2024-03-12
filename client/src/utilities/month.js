export const getWeekDaysName = (lang = "it-IT") => ({
    "it-IT": ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
    "en-EN": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
}[lang]);
  
export const getMonthCurrentDays = (year, month, events) => {
    const y = new Date(new Date().setFullYear(year)).getFullYear();
    const m = new Date(year, month + 1).getMonth(); // new Date(`${month} 1, ${y}`).getMonth();
    const daysCount = new Date(y, m, 0).getDate();

    
    const days = [[], [], [], [], []];

    for(let i = 0; i < days.length; i++) {
        for(let j = 1; j <= 7; j++) {
            const dayNum = j + (i * 7);
            
            
            if (dayNum <= daysCount) {
                const dateTs = new Date(y, m, dayNum);

                const _events = [];

                for(let evi = 0; evi < events.length; evi++) {
                    const e = events[evi];
                    
                    if (_events.length > 0) {
                        e.name = "...";
                        e.is_more_box = true;

                        _events.push(e)
                        break;
                    } else {
                        if (e.date.toDateString() == dateTs.toDateString()) {
                            e.is_more_box = false;
                            e.timeString = { start: e.time.start.toLocaleTimeString(), end: e.time.end.toLocaleTimeString() };
                            
                            _events.push(e)
                        };
                    }
                    
                }

                const is_current_day = new Date().toLocaleDateString() == new Date(y, m - 1, dayNum).toLocaleDateString();
                
                days[i][j - 1] = { dateTs, d: dayNum, is_current_day, is_current_month: true, events: _events };
            } else {
                const dateTs = new Date(y, m + 1, dayNum - daysCount)
                
                const _events = [];

                for(let evi = 0; evi < events.length; evi++) {
                    const e = events[evi];
                    
                    if (_events.length > 0) {
                        e.name = "...";
                        e.is_more_box = true;

                        _events.push(e)
                        break;
                    } else {
                        if (e.date.toDateString() == dateTs.toDateString()) {
                            e.is_more_box = false;
                            e.timeString = { start: e.time.start.toLocaleTimeString(), end: e.time.end.toLocaleTimeString() };
                            
                            _events.push(e)
                        };
                    }
                    
                }
                
                days[i][j - 1] = { dateTs, d: dayNum - daysCount, is_current_day: false, is_current_month: false, events: _events };
            }
        }
    }

    return days;
}