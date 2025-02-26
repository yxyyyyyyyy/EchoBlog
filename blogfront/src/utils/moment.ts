// 时间 YYYY.MM.DD
export const momentm = (date: Date): string => {
    const d = new Date(date);
    const Y = d.getFullYear();
    let M = String(d.getMonth() + 1);
    let D = String(d.getDate());

    // 补零操作
    if (parseInt(M) < 10) {
        M = `0${M}`;
    }
    if (parseInt(D) < 10) {
        D = `0${D}`;
    }

    const times = `${Y}.${M}.${D}`;
    return times;
}

export const momentm1 = (date: Date): string => {
    const d = new Date(date);
    const Y = d.getFullYear();
    let M = String(d.getMonth() + 1);
    let D = String(d.getDate());

    // 补零操作
    if (parseInt(M) < 10) {
        M = `0${M}`;
    }
    if (parseInt(D) < 10) {
        D = `0${D}`;
    }

    const times = `${Y}-${M}-${D}`;
    return times;
}

export const momentm2 = (date: Date): string => {
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (diff < minute) {
        return '刚刚';
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} 分钟前`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} 小时前`;
    } else if (diff < 7 * day) {
        const days = Math.floor(diff / day);
        return `${days} 天前`;
    } else {
        const Y = d.getFullYear();
        let M = String(d.getMonth() + 1);
        let D = String(d.getDate());
        let h = String(d.getHours());
        let m = String(d.getMinutes());
        let s = String(d.getSeconds());

        // 补零操作
        if (parseInt(M) < 10) {
            M = `0${M}`;
        }
        if (parseInt(D) < 10) {
            D = `0${D}`;
        }
        if (parseInt(h) < 10) {
            h = `0${h}`;
        }
        if (parseInt(m) < 10) {
            m = `0${m}`;
        }
        if (parseInt(s) < 10) {
            s = `0${s}`;
        }

        return `${Y}-${M}-${D} ${h}:${m}:${s}`;
    }
};